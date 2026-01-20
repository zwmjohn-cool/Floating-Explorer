import { Plugin, WorkspaceLeaf, TFile, TFolder, Modal, App } from 'obsidian';

class InputModal extends Modal {
	result: string = '';
	onSubmit: (result: string) => void;
	placeholder: string;
	title: string;

	constructor(app: App, title: string, placeholder: string, onSubmit: (result: string) => void) {
		super(app);
		this.title = title;
		this.placeholder = placeholder;
		this.onSubmit = onSubmit;
	}

	onOpen() {
		const { contentEl } = this;
		contentEl.createEl('h2', { text: this.title });

		const inputEl = contentEl.createEl('input', {
			type: 'text',
			placeholder: this.placeholder,
			value: this.placeholder
		});
		inputEl.style.width = '100%';
		inputEl.style.marginBottom = '10px';

		inputEl.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				this.result = inputEl.value;
				this.close();
				this.onSubmit(this.result);
			}
		});

		const buttonContainer = contentEl.createDiv();
		buttonContainer.style.display = 'flex';
		buttonContainer.style.justifyContent = 'flex-end';
		buttonContainer.style.gap = '10px';

		const cancelBtn = buttonContainer.createEl('button', { text: 'Cancel' });
		cancelBtn.addEventListener('click', () => {
			this.close();
		});

		const submitBtn = buttonContainer.createEl('button', { text: 'Confirm', cls: 'mod-cta' });
		submitBtn.addEventListener('click', () => {
			this.result = inputEl.value;
			this.close();
			this.onSubmit(this.result);
		});

		inputEl.focus();
		inputEl.select();
	}

	onClose() {
		const { contentEl } = this;
		contentEl.empty();
	}
}

interface LeafState {
	expandedFolders: Set<string>;
	floatingIcon: HTMLElement;
	folderPanel: HTMLElement;
	hideTimeout: NodeJS.Timeout | null;
	focusedFolder: string | null;
}

export default class FloatingExplorerPlugin extends Plugin {
	private leafStates: Map<string, LeafState> = new Map();

	async onload() {
		console.log('Loading Floating Explorer Plugin');

		// 等待工作区准备好
		this.app.workspace.onLayoutReady(() => {
			this.initializeAllLeaves();
		});

		// 监听活动文件变化，确保图标始终存在
		this.registerEvent(
			this.app.workspace.on('active-leaf-change', (leaf) => {
				if (leaf) {
					this.ensureLeafHasIcon(leaf);
				}
			})
		);

		// 监听layout变化，处理新建和关闭的leaf
		this.registerEvent(
			this.app.workspace.on('layout-change', () => {
				this.initializeAllLeaves();
				this.cleanupClosedLeaves();
			})
		);
	}

	onunload() {
		console.log('Unloading Floating Explorer Plugin');
		this.removeAllIcons();
	}

	getLeafId(leaf: WorkspaceLeaf): string {
		// 使用leaf的view容器作为唯一标识
		const container = (leaf as any).containerEl;
		if (container && container.id) {
			return container.id;
		}
		// 如果没有ID，创建一个唯一的ID并设置
		if (!container.dataset.leafId) {
			container.dataset.leafId = `leaf-${Date.now()}-${Math.random()}`;
		}
		return container.dataset.leafId;
	}

	isLeafInMainEditor(leaf: WorkspaceLeaf): boolean {
		// 检查leaf是否在主编辑区域（不在左侧或右侧侧边栏）
		const container = (leaf as any).containerEl;
		if (!container) return false;

		// 检查容器是否在侧边栏中
		// Obsidian的侧边栏通常有特定的父容器类名
		let parent = container.parentElement;
		while (parent) {
			// 检查是否在左侧或右侧侧边栏
			if (parent.hasClass && (parent.hasClass('workspace-split') && parent.hasClass('mod-left-split'))) {
				return false;
			}
			if (parent.hasClass && (parent.hasClass('workspace-split') && parent.hasClass('mod-right-split'))) {
				return false;
			}
			// 检查是否是侧边栏容器
			if (parent.hasClass && parent.hasClass('workspace-leaf-content') && parent.closest('.workspace-split.mod-left-split, .workspace-split.mod-right-split')) {
				return false;
			}
			parent = parent.parentElement;
		}

		return true;
	}

	initializeAllLeaves() {
		const leaves = this.app.workspace.getLeavesOfType('markdown');
		leaves.forEach(leaf => {
			this.ensureLeafHasIcon(leaf);
		});
	}

	ensureLeafHasIcon(leaf: WorkspaceLeaf) {
		const leafId = this.getLeafId(leaf);

		// 如果已经有状态，说明图标已创建
		if (this.leafStates.has(leafId)) {
			return;
		}

		// 只在主编辑区域显示浮动图标，不在侧边栏显示
		if (!this.isLeafInMainEditor(leaf)) {
			return;
		}

		this.createFloatingIconForLeaf(leaf, leafId);
	}

	cleanupClosedLeaves() {
		const activeLeafIds = new Set(
			this.app.workspace.getLeavesOfType('markdown').map(leaf => this.getLeafId(leaf))
		);

		// 清理已关闭的leaf的状态
		this.leafStates.forEach((_, leafId) => {
			if (!activeLeafIds.has(leafId)) {
				this.removeIconForLeaf(leafId);
			}
		});
	}

	createFloatingIconForLeaf(leaf: WorkspaceLeaf, leafId: string) {
		// 如果已存在，先移除
		if (this.leafStates.has(leafId)) {
			this.removeIconForLeaf(leafId);
		}

		// 创建悬浮图标
		const floatingIcon = document.createElement('div');
		floatingIcon.addClass('floating-explorer-icon');
		floatingIcon.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
			</svg>
		`;

		// 创建文件夹面板
		const folderPanel = document.createElement('div');
		folderPanel.addClass('floating-folder-panel');
		folderPanel.style.display = 'none';

		// 添加到leaf容器而不是document.body
		const leafContainer = (leaf as any).containerEl;
		leafContainer.appendChild(floatingIcon);
		leafContainer.appendChild(folderPanel);

		// 创建状态
		const state: LeafState = {
			expandedFolders: new Set<string>(),
			floatingIcon,
			folderPanel,
			hideTimeout: null,
			focusedFolder: null
		};

		this.leafStates.set(leafId, state);

		// 鼠标悬停事件
		floatingIcon.addEventListener('mouseenter', () => {
			this.showFolderPanel(leafId);
		});

		floatingIcon.addEventListener('mouseleave', () => {
			this.scheduleHidePanel(leafId);
		});

		folderPanel.addEventListener('mouseenter', () => {
			this.cancelHidePanel(leafId);
		});

		folderPanel.addEventListener('mouseleave', () => {
			this.scheduleHidePanel(leafId);
		});
	}

	removeIconForLeaf(leafId: string) {
		const state = this.leafStates.get(leafId);
		if (!state) return;

		if (state.floatingIcon) {
			state.floatingIcon.remove();
		}
		if (state.folderPanel) {
			state.folderPanel.remove();
		}
		if (state.hideTimeout) {
			clearTimeout(state.hideTimeout);
		}

		this.leafStates.delete(leafId);
	}

	removeAllIcons() {
		this.leafStates.forEach((_, leafId) => {
			this.removeIconForLeaf(leafId);
		});
		this.leafStates.clear();
	}

	showFolderPanel(leafId: string) {
		const state = this.leafStates.get(leafId);
		if (!state) return;

		this.cancelHidePanel(leafId);

		// 构建文件夹树
		this.buildFolderTree(leafId);

		// 显示面板
		state.folderPanel.style.display = 'block';
	}

	scheduleHidePanel(leafId: string) {
		const state = this.leafStates.get(leafId);
		if (!state) return;

		state.hideTimeout = setTimeout(() => {
			if (state.folderPanel) {
				state.folderPanel.style.display = 'none';
			}
		}, 300); // 300ms 延迟
	}

	cancelHidePanel(leafId: string) {
		const state = this.leafStates.get(leafId);
		if (!state) return;

		if (state.hideTimeout) {
			clearTimeout(state.hideTimeout);
			state.hideTimeout = null;
		}
	}

	buildFolderTree(leafId: string) {
		const state = this.leafStates.get(leafId);
		if (!state) return;

		state.folderPanel.empty();

		// 如果有focused folder，从那里开始构建树
		let startFolder: TFolder;
		if (state.focusedFolder) {
			const focusedItem = this.app.vault.getAbstractFileByPath(state.focusedFolder);
			if (focusedItem instanceof TFolder) {
				startFolder = focusedItem;
			} else {
				// 如果focused folder不存在了，清除focus状态
				state.focusedFolder = null;
				startFolder = this.app.vault.getRoot();
			}
		} else {
			startFolder = this.app.vault.getRoot();
		}

		const treeContainer = state.folderPanel.createDiv('folder-tree-container');

		// 如果在focus mode，添加一个unfocus按钮在顶部
		if (state.focusedFolder) {
			const unfocusBar = treeContainer.createDiv('unfocus-bar');
			unfocusBar.innerHTML = `
				<span class="unfocus-icon">◀</span>
				<span class="unfocus-text">Focused: ${startFolder.name}</span>
			`;
			unfocusBar.addEventListener('click', () => {
				state.focusedFolder = null;
				this.buildFolderTree(leafId);
			});
		}

		this.renderFolder(startFolder, treeContainer, 0, leafId);
	}

	renderFolder(folder: TFolder, container: HTMLElement, level: number, leafId: string) {
		const state = this.leafStates.get(leafId);
		if (!state) return;

		const children = folder.children.slice().sort((a, b) => {
			// 文件夹优先，然后按名称排序
			if (a instanceof TFolder && b instanceof TFile) return -1;
			if (a instanceof TFile && b instanceof TFolder) return 1;
			return a.name.localeCompare(b.name);
		});

		children.forEach((child) => {
			if (child instanceof TFolder) {
				const folderItem = container.createDiv('folder-item');
				folderItem.style.paddingLeft = `${level * 16}px`;

				const folderHeader = folderItem.createDiv('folder-header');

				// 折叠/展开图标
				const toggleIcon = folderHeader.createSpan('folder-toggle');

				// 检查这个文件夹是否已展开
				const isExpanded = state.expandedFolders.has(child.path);
				toggleIcon.innerHTML = isExpanded ? '▼' : '▶';

				// 文件夹图标
				const folderIcon = folderHeader.createSpan('folder-icon');
				folderIcon.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
					</svg>
				`;

				// 文件夹名称
				const folderName = folderHeader.createSpan('folder-name');
				folderName.textContent = child.name;

				// 子文件夹容器
				const childContainer = folderItem.createDiv('folder-children');
				childContainer.style.display = isExpanded ? 'block' : 'none';

				// 递归渲染子文件夹
				this.renderFolder(child, childContainer, level + 1, leafId);

				// 点击折叠/展开
				folderHeader.addEventListener('click', (e) => {
					// 只有点击主区域才展开/折叠，右键不触发
					if (e.button !== 0) return;

					const nowExpanded = state.expandedFolders.has(child.path);

					if (nowExpanded) {
						state.expandedFolders.delete(child.path);
						childContainer.style.display = 'none';
						toggleIcon.innerHTML = '▶';
					} else {
						state.expandedFolders.add(child.path);
						childContainer.style.display = 'block';
						toggleIcon.innerHTML = '▼';
					}
				});

				// 右键菜单
				folderHeader.addEventListener('contextmenu', (e) => {
					e.preventDefault();
					e.stopPropagation();

					// 移除所有现有的右键菜单
					state.folderPanel.querySelectorAll('.folder-context-menu').forEach(menu => menu.remove());

					const menu = document.createElement('div');
					menu.addClass('folder-context-menu');
					menu.style.position = 'absolute';

					// 计算相对于folderPanel的位置
					const panelRect = state.folderPanel.getBoundingClientRect();
					const relativeX = e.clientX - panelRect.left;
					const relativeY = e.clientY - panelRect.top;

					menu.style.left = `${relativeX}px`;
					menu.style.top = `${relativeY}px`;

					const isFocused = state.focusedFolder === child.path;

					// 创建新文件菜单项
					const newFileItem = menu.createDiv('context-menu-item');
					newFileItem.textContent = 'New File (⌘ N)';
					newFileItem.addEventListener('click', (clickEvent) => {
						clickEvent.stopPropagation();
						menu.remove();

						new InputModal(this.app, 'New File', 'Untitled.md', async (fileName) => {
							if (fileName) {
								// 处理路径，确保正确
								let filePath = child.path;
								if (filePath === '/') {
									filePath = fileName;
								} else {
									filePath = `${child.path}/${fileName}`;
								}

								console.log('创建文件路径:', filePath);

								try {
									const newFile = await this.app.vault.create(filePath, '');
									console.log('文件创建成功:', newFile);

									// 打开新创建的文件
									const leaf = this.app.workspace.getLeaf();
									await leaf.openFile(newFile);

									// 展开父文件夹
									state.expandedFolders.add(child.path);
									// 重新构建树以显示新文件
									this.buildFolderTree(leafId);
								} catch (error) {
									console.error('创建文件失败:', error);
									new Modal(this.app).open();
								}
							}
						}).open();
					});

					// 创建新文件夹菜单项
					const newFolderItem = menu.createDiv('context-menu-item');
					newFolderItem.textContent = 'New Folder';
					newFolderItem.addEventListener('click', (clickEvent) => {
						clickEvent.stopPropagation();
						menu.remove();

						new InputModal(this.app, 'New Folder', 'New Folder', async (folderName) => {
							if (folderName) {
								// 处理路径，确保正确
								let folderPath = child.path;
								if (folderPath === '/') {
									folderPath = folderName;
								} else {
									folderPath = `${child.path}/${folderName}`;
								}

								console.log('创建文件夹路径:', folderPath);

								try {
									await this.app.vault.createFolder(folderPath);
									console.log('文件夹创建成功:', folderPath);

									// 展开父文件夹以显示新创建的文件夹
									state.expandedFolders.add(child.path);
									// 重新构建树
									this.buildFolderTree(leafId);
								} catch (error) {
									console.error('创建文件夹失败:', error);
								}
							}
						}).open();
					});

					// 删除文件夹菜单项
					const deleteItem = menu.createDiv('context-menu-item');
					deleteItem.textContent = 'Delete Folder';
					deleteItem.style.color = 'var(--text-error)';
					deleteItem.addEventListener('click', async (clickEvent) => {
						clickEvent.stopPropagation();
						menu.remove();

						// 创建确认对话框
						const confirmModal = new Modal(this.app);
						confirmModal.titleEl.setText('Confirm Delete');
						confirmModal.contentEl.createEl('p', {
							text: `Are you sure you want to delete folder "${child.name}"? This action cannot be undone.`
						});

						const buttonContainer = confirmModal.contentEl.createDiv();
						buttonContainer.style.display = 'flex';
						buttonContainer.style.justifyContent = 'flex-end';
						buttonContainer.style.gap = '10px';
						buttonContainer.style.marginTop = '20px';

						const cancelBtn = buttonContainer.createEl('button', { text: 'Cancel' });
						cancelBtn.addEventListener('click', () => {
							confirmModal.close();
						});

						const deleteBtn = buttonContainer.createEl('button', { text: 'Delete', cls: 'mod-warning' });
						deleteBtn.addEventListener('click', async () => {
							confirmModal.close();
							try {
								await this.app.vault.delete(child, true);
								console.log('文件夹删除成功:', child.path);
								// 重新构建树
								this.buildFolderTree(leafId);
							} catch (error) {
								console.error('删除文件夹失败:', error);
							}
						});

						confirmModal.open();
					});

					// Focus Mode 菜单项
					const focusMenuItem = menu.createDiv('context-menu-item');
					focusMenuItem.textContent = isFocused ? 'Unfocus' : 'Focus Mode';
					focusMenuItem.addEventListener('click', () => {
						if (isFocused) {
							// Unfocus
							state.focusedFolder = null;
						} else {
							// Focus
							state.focusedFolder = child.path;
						}
						// 重新构建树
						this.buildFolderTree(leafId);
						menu.remove();
					});

					// 点击外部或面板内其他地方关闭菜单
					const closeMenu = (event: MouseEvent) => {
						// 检查点击是否在菜单外部
						if (!menu.contains(event.target as Node)) {
							menu.remove();
							document.removeEventListener('click', closeMenu);
							state.folderPanel.removeEventListener('click', closeMenu);
						}
					};

					// 延迟添加事件监听器，避免立即触发
					setTimeout(() => {
						document.addEventListener('click', closeMenu);
						state.folderPanel.addEventListener('click', closeMenu);
					}, 10);

					state.folderPanel.appendChild(menu);
				});

			} else if (child instanceof TFile) {
				const fileItem = container.createDiv('file-item');
				fileItem.style.paddingLeft = `${(level + 1) * 16}px`;

				// 文件图标
				const fileIcon = fileItem.createSpan('file-icon');
				fileIcon.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
						<polyline points="14 2 14 8 20 8"></polyline>
					</svg>
				`;

				// 文件名称
				const fileName = fileItem.createSpan('file-name');
				fileName.textContent = child.name;

				// 点击打开文件
				fileItem.addEventListener('click', async () => {
					const leaf = this.app.workspace.getLeaf();
					await leaf.openFile(child);
					if (state.folderPanel) {
						state.folderPanel.style.display = 'none';
					}
				});

				// 文件右键菜单
				fileItem.addEventListener('contextmenu', (e) => {
					e.preventDefault();
					e.stopPropagation();

					// 移除所有现有的右键菜单
					state.folderPanel.querySelectorAll('.folder-context-menu').forEach(menu => menu.remove());

					const menu = document.createElement('div');
					menu.addClass('folder-context-menu');
					menu.style.position = 'absolute';

					// 计算相对于folderPanel的位置
					const panelRect = state.folderPanel.getBoundingClientRect();
					const relativeX = e.clientX - panelRect.left;
					const relativeY = e.clientY - panelRect.top;

					menu.style.left = `${relativeX}px`;
					menu.style.top = `${relativeY}px`;

					// 获取文件所在的文件夹
					const parentFolder = child.parent;

					// 创建新文件菜单项
					const newFileItem = menu.createDiv('context-menu-item');
					newFileItem.textContent = 'New File (⌘ N)';
					newFileItem.addEventListener('click', (clickEvent) => {
						clickEvent.stopPropagation();
						menu.remove();

						new InputModal(this.app, 'New File', 'Untitled.md', async (fileName) => {
							if (fileName && parentFolder) {
								// 处理路径，确保正确
								let filePath = parentFolder.path;
								if (filePath === '/') {
									filePath = fileName;
								} else {
									filePath = `${parentFolder.path}/${fileName}`;
								}

								console.log('创建文件路径:', filePath);

								try {
									const newFile = await this.app.vault.create(filePath, '');
									console.log('文件创建成功:', newFile);

									// 打开新创建的文件
									const leaf = this.app.workspace.getLeaf();
									await leaf.openFile(newFile);

									// 展开父文件夹
									state.expandedFolders.add(parentFolder.path);
									// 重新构建树以显示新文件
									this.buildFolderTree(leafId);
								} catch (error) {
									console.error('创建文件失败:', error);
								}
							}
						}).open();
					});

					// 创建新文件夹菜单项
					const newFolderItem = menu.createDiv('context-menu-item');
					newFolderItem.textContent = 'New Folder';
					newFolderItem.addEventListener('click', (clickEvent) => {
						clickEvent.stopPropagation();
						menu.remove();

						new InputModal(this.app, 'New Folder', 'New Folder', async (folderName) => {
							if (folderName && parentFolder) {
								// 处理路径，确保正确
								let folderPath = parentFolder.path;
								if (folderPath === '/') {
									folderPath = folderName;
								} else {
									folderPath = `${parentFolder.path}/${folderName}`;
								}

								console.log('创建文件夹路径:', folderPath);

								try {
									await this.app.vault.createFolder(folderPath);
									console.log('文件夹创建成功:', folderPath);

									// 展开父文件夹以显示新创建的文件夹
									state.expandedFolders.add(parentFolder.path);
									// 重新构建树
									this.buildFolderTree(leafId);
								} catch (error) {
									console.error('创建文件夹失败:', error);
								}
							}
						}).open();
					});

					// 删除文件菜单项
					const deleteItem = menu.createDiv('context-menu-item');
					deleteItem.textContent = 'Delete File';
					deleteItem.style.color = 'var(--text-error)';
					deleteItem.addEventListener('click', async (clickEvent) => {
						clickEvent.stopPropagation();
						menu.remove();

						// 创建确认对话框
						const confirmModal = new Modal(this.app);
						confirmModal.titleEl.setText('Confirm Delete');
						confirmModal.contentEl.createEl('p', {
							text: `Are you sure you want to delete file "${child.name}"? This action cannot be undone.`
						});

						const buttonContainer = confirmModal.contentEl.createDiv();
						buttonContainer.style.display = 'flex';
						buttonContainer.style.justifyContent = 'flex-end';
						buttonContainer.style.gap = '10px';
						buttonContainer.style.marginTop = '20px';

						const cancelBtn = buttonContainer.createEl('button', { text: 'Cancel' });
						cancelBtn.addEventListener('click', () => {
							confirmModal.close();
						});

						const deleteBtn = buttonContainer.createEl('button', { text: 'Delete', cls: 'mod-warning' });
						deleteBtn.addEventListener('click', async () => {
							confirmModal.close();
							try {
								await this.app.vault.delete(child);
								console.log('文件删除成功:', child.path);
								// 重新构建树
								this.buildFolderTree(leafId);
							} catch (error) {
								console.error('删除文件失败:', error);
							}
						});

						confirmModal.open();
					});

					// 点击外部或面板内其他地方关闭菜单
					const closeMenu = (event: MouseEvent) => {
						// 检查点击是否在菜单外部
						if (!menu.contains(event.target as Node)) {
							menu.remove();
							document.removeEventListener('click', closeMenu);
							state.folderPanel.removeEventListener('click', closeMenu);
						}
					};

					// 延迟添加事件监听器，避免立即触发
					setTimeout(() => {
						document.addEventListener('click', closeMenu);
						state.folderPanel.addEventListener('click', closeMenu);
					}, 10);

					state.folderPanel.appendChild(menu);
				});
			}
		});
	}
}
