var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => FloatingExplorerPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var FloatingExplorerPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.leafStates = /* @__PURE__ */ new Map();
  }
  async onload() {
    console.log("Loading Floating Explorer Plugin");
    this.app.workspace.onLayoutReady(() => {
      this.initializeAllLeaves();
    });
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", (leaf) => {
        if (leaf) {
          this.ensureLeafHasIcon(leaf);
        }
      })
    );
    this.registerEvent(
      this.app.workspace.on("layout-change", () => {
        this.initializeAllLeaves();
        this.cleanupClosedLeaves();
      })
    );
  }
  onunload() {
    console.log("Unloading Floating Explorer Plugin");
    this.removeAllIcons();
  }
  getLeafId(leaf) {
    const container = leaf.containerEl;
    if (container && container.id) {
      return container.id;
    }
    if (!container.dataset.leafId) {
      container.dataset.leafId = `leaf-${Date.now()}-${Math.random()}`;
    }
    return container.dataset.leafId;
  }
  isLeafInMainEditor(leaf) {
    const container = leaf.containerEl;
    if (!container)
      return false;
    let parent = container.parentElement;
    while (parent) {
      if (parent.hasClass && (parent.hasClass("workspace-split") && parent.hasClass("mod-left-split"))) {
        return false;
      }
      if (parent.hasClass && (parent.hasClass("workspace-split") && parent.hasClass("mod-right-split"))) {
        return false;
      }
      if (parent.hasClass && parent.hasClass("workspace-leaf-content") && parent.closest(".workspace-split.mod-left-split, .workspace-split.mod-right-split")) {
        return false;
      }
      parent = parent.parentElement;
    }
    return true;
  }
  initializeAllLeaves() {
    const leaves = this.app.workspace.getLeavesOfType("markdown");
    leaves.forEach((leaf) => {
      this.ensureLeafHasIcon(leaf);
    });
  }
  ensureLeafHasIcon(leaf) {
    const leafId = this.getLeafId(leaf);
    if (this.leafStates.has(leafId)) {
      return;
    }
    if (!this.isLeafInMainEditor(leaf)) {
      return;
    }
    this.createFloatingIconForLeaf(leaf, leafId);
  }
  cleanupClosedLeaves() {
    const activeLeafIds = new Set(
      this.app.workspace.getLeavesOfType("markdown").map((leaf) => this.getLeafId(leaf))
    );
    this.leafStates.forEach((_, leafId) => {
      if (!activeLeafIds.has(leafId)) {
        this.removeIconForLeaf(leafId);
      }
    });
  }
  createFloatingIconForLeaf(leaf, leafId) {
    if (this.leafStates.has(leafId)) {
      this.removeIconForLeaf(leafId);
    }
    const floatingIcon = document.createElement("div");
    floatingIcon.addClass("floating-explorer-icon");
    floatingIcon.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
			</svg>
		`;
    const folderPanel = document.createElement("div");
    folderPanel.addClass("floating-folder-panel");
    folderPanel.style.display = "none";
    const leafContainer = leaf.containerEl;
    leafContainer.appendChild(floatingIcon);
    leafContainer.appendChild(folderPanel);
    const state = {
      expandedFolders: /* @__PURE__ */ new Set(),
      floatingIcon,
      folderPanel,
      hideTimeout: null,
      focusedFolder: null
    };
    this.leafStates.set(leafId, state);
    floatingIcon.addEventListener("mouseenter", () => {
      this.showFolderPanel(leafId);
    });
    floatingIcon.addEventListener("mouseleave", () => {
      this.scheduleHidePanel(leafId);
    });
    folderPanel.addEventListener("mouseenter", () => {
      this.cancelHidePanel(leafId);
    });
    folderPanel.addEventListener("mouseleave", () => {
      this.scheduleHidePanel(leafId);
    });
  }
  removeIconForLeaf(leafId) {
    const state = this.leafStates.get(leafId);
    if (!state)
      return;
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
  showFolderPanel(leafId) {
    const state = this.leafStates.get(leafId);
    if (!state)
      return;
    this.cancelHidePanel(leafId);
    this.buildFolderTree(leafId);
    state.folderPanel.style.display = "block";
  }
  scheduleHidePanel(leafId) {
    const state = this.leafStates.get(leafId);
    if (!state)
      return;
    state.hideTimeout = setTimeout(() => {
      if (state.folderPanel) {
        state.folderPanel.style.display = "none";
      }
    }, 300);
  }
  cancelHidePanel(leafId) {
    const state = this.leafStates.get(leafId);
    if (!state)
      return;
    if (state.hideTimeout) {
      clearTimeout(state.hideTimeout);
      state.hideTimeout = null;
    }
  }
  buildFolderTree(leafId) {
    const state = this.leafStates.get(leafId);
    if (!state)
      return;
    state.folderPanel.empty();
    let startFolder;
    if (state.focusedFolder) {
      const focusedItem = this.app.vault.getAbstractFileByPath(state.focusedFolder);
      if (focusedItem instanceof import_obsidian.TFolder) {
        startFolder = focusedItem;
      } else {
        state.focusedFolder = null;
        startFolder = this.app.vault.getRoot();
      }
    } else {
      startFolder = this.app.vault.getRoot();
    }
    const treeContainer = state.folderPanel.createDiv("folder-tree-container");
    if (state.focusedFolder) {
      const unfocusBar = treeContainer.createDiv("unfocus-bar");
      unfocusBar.innerHTML = `
				<span class="unfocus-icon">\u25C0</span>
				<span class="unfocus-text">Focused: ${startFolder.name}</span>
			`;
      unfocusBar.addEventListener("click", () => {
        state.focusedFolder = null;
        this.buildFolderTree(leafId);
      });
    }
    this.renderFolder(startFolder, treeContainer, 0, leafId);
  }
  renderFolder(folder, container, level, leafId) {
    const state = this.leafStates.get(leafId);
    if (!state)
      return;
    const children = folder.children.slice().sort((a, b) => {
      if (a instanceof import_obsidian.TFolder && b instanceof import_obsidian.TFile)
        return -1;
      if (a instanceof import_obsidian.TFile && b instanceof import_obsidian.TFolder)
        return 1;
      return a.name.localeCompare(b.name);
    });
    children.forEach((child) => {
      if (child instanceof import_obsidian.TFolder) {
        const folderItem = container.createDiv("folder-item");
        folderItem.style.paddingLeft = `${level * 16}px`;
        const folderHeader = folderItem.createDiv("folder-header");
        const toggleIcon = folderHeader.createSpan("folder-toggle");
        const isExpanded = state.expandedFolders.has(child.path);
        toggleIcon.innerHTML = isExpanded ? "\u25BC" : "\u25B6";
        const folderIcon = folderHeader.createSpan("folder-icon");
        folderIcon.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
					</svg>
				`;
        const folderName = folderHeader.createSpan("folder-name");
        folderName.textContent = child.name;
        const childContainer = folderItem.createDiv("folder-children");
        childContainer.style.display = isExpanded ? "block" : "none";
        this.renderFolder(child, childContainer, level + 1, leafId);
        folderHeader.addEventListener("click", (e) => {
          if (e.button !== 0)
            return;
          const nowExpanded = state.expandedFolders.has(child.path);
          if (nowExpanded) {
            state.expandedFolders.delete(child.path);
            childContainer.style.display = "none";
            toggleIcon.innerHTML = "\u25B6";
          } else {
            state.expandedFolders.add(child.path);
            childContainer.style.display = "block";
            toggleIcon.innerHTML = "\u25BC";
          }
        });
        folderHeader.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const menu = document.createElement("div");
          menu.addClass("folder-context-menu");
          menu.style.position = "absolute";
          const panelRect = state.folderPanel.getBoundingClientRect();
          const relativeX = e.clientX - panelRect.left;
          const relativeY = e.clientY - panelRect.top;
          menu.style.left = `${relativeX}px`;
          menu.style.top = `${relativeY}px`;
          const isFocused = state.focusedFolder === child.path;
          const menuItem = menu.createDiv("context-menu-item");
          menuItem.textContent = isFocused ? "Unfocus" : "Focus Mode";
          menuItem.addEventListener("click", () => {
            if (isFocused) {
              state.focusedFolder = null;
            } else {
              state.focusedFolder = child.path;
            }
            this.buildFolderTree(leafId);
            menu.remove();
          });
          const closeMenu = () => {
            menu.remove();
            document.removeEventListener("click", closeMenu);
          };
          setTimeout(() => {
            document.addEventListener("click", closeMenu);
          }, 10);
          state.folderPanel.appendChild(menu);
        });
      } else if (child instanceof import_obsidian.TFile) {
        const fileItem = container.createDiv("file-item");
        fileItem.style.paddingLeft = `${(level + 1) * 16}px`;
        const fileIcon = fileItem.createSpan("file-icon");
        fileIcon.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
						<polyline points="14 2 14 8 20 8"></polyline>
					</svg>
				`;
        const fileName = fileItem.createSpan("file-name");
        fileName.textContent = child.name;
        fileItem.addEventListener("click", async () => {
          const leaf = this.app.workspace.getLeaf();
          await leaf.openFile(child);
          if (state.folderPanel) {
            state.folderPanel.style.display = "none";
          }
        });
      }
    });
  }
};
