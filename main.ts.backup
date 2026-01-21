import { Plugin, WorkspaceLeaf, TFile, TFolder, Modal, App, Vault } from 'obsidian';

// TypeScript interface extensions for Obsidian API
interface ObsidianVault extends Vault {
	getConfig(key: string): string | null;
}

interface ObsidianApp extends App {
	vault: ObsidianVault;
}

interface MomentWindow extends Window {
	moment?: {
		locale(): string;
	};
}

interface WorkspaceLeafExt extends WorkspaceLeaf {
	containerEl: HTMLElement;
}

// 多语言翻译
const translations: Record<string, Record<string, string>> = {
	'en': {
		'newFile': 'New File (⌘ N)',
		'newFolder': 'New Folder',
		'deleteFolder': 'Delete Folder',
		'deleteFile': 'Delete File',
		'focusMode': 'Focus Mode',
		'unfocus': 'Unfocus',
		'confirmDelete': 'Confirm Delete',
		'deleteFolderConfirm': 'Are you sure you want to delete folder "{name}"? This action cannot be undone.',
		'deleteFileConfirm': 'Are you sure you want to delete file "{name}"? This action cannot be undone.',
		'cancel': 'Cancel',
		'delete': 'Delete',
		'confirm': 'Confirm',
		'newFileTitle': 'New File',
		'newFolderTitle': 'New Folder',
		'untitled': 'Untitled.md',
		'newFolderName': 'New Folder'
	},
	'zh-cn': {
		'newFile': '新建文件 (⌘ N)',
		'newFolder': '新建文件夹',
		'deleteFolder': '删除文件夹',
		'deleteFile': '删除文件',
		'focusMode': '聚焦模式',
		'unfocus': '取消聚焦',
		'confirmDelete': '确认删除',
		'deleteFolderConfirm': '确定要删除文件夹 "{name}" 吗？此操作不可撤销。',
		'deleteFileConfirm': '确定要删除文件 "{name}" 吗？此操作不可撤销。',
		'cancel': '取消',
		'delete': '删除',
		'confirm': '确定',
		'newFileTitle': '新建文件',
		'newFolderTitle': '新建文件夹',
		'untitled': '未命名.md',
		'newFolderName': '新文件夹'
	},
	'zh-tw': {
		'newFile': '新建檔案 (⌘ N)',
		'newFolder': '新建資料夾',
		'deleteFolder': '刪除資料夾',
		'deleteFile': '刪除檔案',
		'focusMode': '聚焦模式',
		'unfocus': '取消聚焦',
		'confirmDelete': '確認刪除',
		'deleteFolderConfirm': '確定要刪除資料夾 "{name}" 嗎？此操作無法撤銷。',
		'deleteFileConfirm': '確定要刪除檔案 "{name}" 嗎？此操作無法撤銷。',
		'cancel': '取消',
		'delete': '刪除',
		'confirm': '確定',
		'newFileTitle': '新建檔案',
		'newFolderTitle': '新建資料夾',
		'untitled': '未命名.md',
		'newFolderName': '新資料夾'
	},
	'ar': {
		'newFile': 'ملف جديد (⌘ N)',
		'newFolder': 'مجلد جديد',
		'deleteFolder': 'حذف المجلد',
		'deleteFile': 'حذف الملف',
		'focusMode': 'وضع التركيز',
		'unfocus': 'إلغاء التركيز',
		'confirmDelete': 'تأكيد الحذف',
		'deleteFolderConfirm': 'هل أنت متأكد من حذف المجلد "{name}"؟ لا يمكن التراجع عن هذا الإجراء.',
		'deleteFileConfirm': 'هل أنت متأكد من حذف الملف "{name}"؟ لا يمكن التراجع عن هذا الإجراء.',
		'cancel': 'إلغاء',
		'delete': 'حذف',
		'confirm': 'تأكيد',
		'newFileTitle': 'ملف جديد',
		'newFolderTitle': 'مجلد جديد',
		'untitled': 'بدون عنوان.md',
		'newFolderName': 'مجلد جديد'
	},
	'be': {
		'newFile': 'Новы файл (⌘ N)',
		'newFolder': 'Новая папка',
		'deleteFolder': 'Выдаліць папку',
		'deleteFile': 'Выдаліць файл',
		'focusMode': 'Рэжым фокуса',
		'unfocus': 'Скасаваць фокус',
		'confirmDelete': 'Пацвердзіць выдаленне',
		'deleteFolderConfirm': 'Вы ўпэўнены, што хочаце выдаліць папку "{name}"? Гэта дзеянне нельга адмяніць.',
		'deleteFileConfirm': 'Вы ўпэўнены, што хочаце выдаліць файл "{name}"? Гэта дзеянне нельга адмяніць.',
		'cancel': 'Скасаваць',
		'delete': 'Выдаліць',
		'confirm': 'Пацвердзіць',
		'newFileTitle': 'Новы файл',
		'newFolderTitle': 'Новая папка',
		'untitled': 'Без назвы.md',
		'newFolderName': 'Новая папка'
	},
	'ca': {
		'newFile': 'Fitxer nou (⌘ N)',
		'newFolder': 'Carpeta nova',
		'deleteFolder': 'Eliminar carpeta',
		'deleteFile': 'Eliminar fitxer',
		'focusMode': 'Mode focus',
		'unfocus': 'Desfocar',
		'confirmDelete': 'Confirmar eliminació',
		'deleteFolderConfirm': 'Esteu segur que voleu eliminar la carpeta "{name}"? Aquesta acció no es pot desfer.',
		'deleteFileConfirm': 'Esteu segur que voleu eliminar el fitxer "{name}"? Aquesta acció no es pot desfer.',
		'cancel': 'Cancel·lar',
		'delete': 'Eliminar',
		'confirm': 'Confirmar',
		'newFileTitle': 'Fitxer nou',
		'newFolderTitle': 'Carpeta nova',
		'untitled': 'Sense títol.md',
		'newFolderName': 'Carpeta nova'
	},
	'cs': {
		'newFile': 'Nový soubor (⌘ N)',
		'newFolder': 'Nová složka',
		'deleteFolder': 'Odstranit složku',
		'deleteFile': 'Odstranit soubor',
		'focusMode': 'Režim zaměření',
		'unfocus': 'Zrušit zaměření',
		'confirmDelete': 'Potvrdit odstranění',
		'deleteFolderConfirm': 'Opravdu chcete odstranit složku "{name}"? Tuto akci nelze vrátit zpět.',
		'deleteFileConfirm': 'Opravdu chcete odstranit soubor "{name}"? Tuto akci nelze vrátit zpět.',
		'cancel': 'Zrušit',
		'delete': 'Odstranit',
		'confirm': 'Potvrdit',
		'newFileTitle': 'Nový soubor',
		'newFolderTitle': 'Nová složka',
		'untitled': 'Bez názvu.md',
		'newFolderName': 'Nová složka'
	},
	'da': {
		'newFile': 'Ny fil (⌘ N)',
		'newFolder': 'Ny mappe',
		'deleteFolder': 'Slet mappe',
		'deleteFile': 'Slet fil',
		'focusMode': 'Fokustilstand',
		'unfocus': 'Fjern fokus',
		'confirmDelete': 'Bekræft sletning',
		'deleteFolderConfirm': 'Er du sikker på, at du vil slette mappen "{name}"? Denne handling kan ikke fortrydes.',
		'deleteFileConfirm': 'Er du sikker på, at du vil slette filen "{name}"? Denne handling kan ikke fortrydes.',
		'cancel': 'Annuller',
		'delete': 'Slet',
		'confirm': 'Bekræft',
		'newFileTitle': 'Ny fil',
		'newFolderTitle': 'Ny mappe',
		'untitled': 'Unavngivet.md',
		'newFolderName': 'Ny mappe'
	},
	'de': {
		'newFile': 'Neue Datei (⌘ N)',
		'newFolder': 'Neuer Ordner',
		'deleteFolder': 'Ordner löschen',
		'deleteFile': 'Datei löschen',
		'focusMode': 'Fokusmodus',
		'unfocus': 'Fokus aufheben',
		'confirmDelete': 'Löschen bestätigen',
		'deleteFolderConfirm': 'Möchten Sie den Ordner "{name}" wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.',
		'deleteFileConfirm': 'Möchten Sie die Datei "{name}" wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.',
		'cancel': 'Abbrechen',
		'delete': 'Löschen',
		'confirm': 'Bestätigen',
		'newFileTitle': 'Neue Datei',
		'newFolderTitle': 'Neuer Ordner',
		'untitled': 'Unbenannt.md',
		'newFolderName': 'Neuer Ordner'
	},
	'es': {
		'newFile': 'Archivo nuevo (⌘ N)',
		'newFolder': 'Carpeta nueva',
		'deleteFolder': 'Eliminar carpeta',
		'deleteFile': 'Eliminar archivo',
		'focusMode': 'Modo enfoque',
		'unfocus': 'Desenfocar',
		'confirmDelete': 'Confirmar eliminación',
		'deleteFolderConfirm': '¿Está seguro de que desea eliminar la carpeta "{name}"? Esta acción no se puede deshacer.',
		'deleteFileConfirm': '¿Está seguro de que desea eliminar el archivo "{name}"? Esta acción no se puede deshacer.',
		'cancel': 'Cancelar',
		'delete': 'Eliminar',
		'confirm': 'Confirmar',
		'newFileTitle': 'Archivo nuevo',
		'newFolderTitle': 'Carpeta nueva',
		'untitled': 'Sin título.md',
		'newFolderName': 'Carpeta nueva'
	},
	'fa': {
		'newFile': 'فایل جدید (⌘ N)',
		'newFolder': 'پوشه جدید',
		'deleteFolder': 'حذف پوشه',
		'deleteFile': 'حذف فایل',
		'focusMode': 'حالت تمرکز',
		'unfocus': 'لغو تمرکز',
		'confirmDelete': 'تایید حذف',
		'deleteFolderConfirm': 'آیا مطمئن هستید که می‌خواهید پوشه "{name}" را حذف کنید؟ این عمل قابل بازگشت نیست.',
		'deleteFileConfirm': 'آیا مطمئن هستید که می‌خواهید فایل "{name}" را حذف کنید؟ این عمل قابل بازگشت نیست.',
		'cancel': 'لغو',
		'delete': 'حذف',
		'confirm': 'تایید',
		'newFileTitle': 'فایل جدید',
		'newFolderTitle': 'پوشه جدید',
		'untitled': 'بدون عنوان.md',
		'newFolderName': 'پوشه جدید'
	},
	'fr': {
		'newFile': 'Nouveau fichier (⌘ N)',
		'newFolder': 'Nouveau dossier',
		'deleteFolder': 'Supprimer le dossier',
		'deleteFile': 'Supprimer le fichier',
		'focusMode': 'Mode focus',
		'unfocus': 'Défocaliser',
		'confirmDelete': 'Confirmer la suppression',
		'deleteFolderConfirm': 'Êtes-vous sûr de vouloir supprimer le dossier "{name}" ? Cette action est irréversible.',
		'deleteFileConfirm': 'Êtes-vous sûr de vouloir supprimer le fichier "{name}" ? Cette action est irréversible.',
		'cancel': 'Annuler',
		'delete': 'Supprimer',
		'confirm': 'Confirmer',
		'newFileTitle': 'Nouveau fichier',
		'newFolderTitle': 'Nouveau dossier',
		'untitled': 'Sans titre.md',
		'newFolderName': 'Nouveau dossier'
	},
	'ga': {
		'newFile': 'Comhad nua (⌘ N)',
		'newFolder': 'Fillteán nua',
		'deleteFolder': 'Scrios fillteán',
		'deleteFile': 'Scrios comhad',
		'focusMode': 'Mód fócais',
		'unfocus': 'Dídhírigh',
		'confirmDelete': 'Deimhnigh scriosadh',
		'deleteFolderConfirm': 'An bhfuil tú cinnte gur mhaith leat an fillteán "{name}" a scriosadh? Ní féidir an gníomh seo a chealú.',
		'deleteFileConfirm': 'An bhfuil tú cinnte gur mhaith leat an comhad "{name}" a scriosadh? Ní féidir an gníomh seo a chealú.',
		'cancel': 'Cealaigh',
		'delete': 'Scrios',
		'confirm': 'Deimhnigh',
		'newFileTitle': 'Comhad nua',
		'newFolderTitle': 'Fillteán nua',
		'untitled': 'Gan teideal.md',
		'newFolderName': 'Fillteán nua'
	},
	'he': {
		'newFile': 'קובץ חדש (⌘ N)',
		'newFolder': 'תיקייה חדשה',
		'deleteFolder': 'מחק תיקייה',
		'deleteFile': 'מחק קובץ',
		'focusMode': 'מצב מיקוד',
		'unfocus': 'בטל מיקוד',
		'confirmDelete': 'אשר מחיקה',
		'deleteFolderConfirm': 'האם אתה בטוח שברצונך למחוק את התיקייה "{name}"? לא ניתן לבטל פעולה זו.',
		'deleteFileConfirm': 'האם אתה בטוח שברצונך למחוק את הקובץ "{name}"? לא ניתן לבטל פעולה זו.',
		'cancel': 'ביטול',
		'delete': 'מחק',
		'confirm': 'אשר',
		'newFileTitle': 'קובץ חדש',
		'newFolderTitle': 'תיקייה חדשה',
		'untitled': 'ללא שם.md',
		'newFolderName': 'תיקייה חדשה'
	},
	'hu': {
		'newFile': 'Új fájl (⌘ N)',
		'newFolder': 'Új mappa',
		'deleteFolder': 'Mappa törlése',
		'deleteFile': 'Fájl törlése',
		'focusMode': 'Fókusz mód',
		'unfocus': 'Fókusz megszüntetése',
		'confirmDelete': 'Törlés megerősítése',
		'deleteFolderConfirm': 'Biztosan törölni szeretné a(z) "{name}" mappát? Ez a művelet nem vonható vissza.',
		'deleteFileConfirm': 'Biztosan törölni szeretné a(z) "{name}" fájlt? Ez a művelet nem vonható vissza.',
		'cancel': 'Mégse',
		'delete': 'Törlés',
		'confirm': 'Megerősítés',
		'newFileTitle': 'Új fájl',
		'newFolderTitle': 'Új mappa',
		'untitled': 'Névtelen.md',
		'newFolderName': 'Új mappa'
	},
	'id': {
		'newFile': 'File baru (⌘ N)',
		'newFolder': 'Folder baru',
		'deleteFolder': 'Hapus folder',
		'deleteFile': 'Hapus file',
		'focusMode': 'Mode fokus',
		'unfocus': 'Hilangkan fokus',
		'confirmDelete': 'Konfirmasi penghapusan',
		'deleteFolderConfirm': 'Apakah Anda yakin ingin menghapus folder "{name}"? Tindakan ini tidak dapat dibatalkan.',
		'deleteFileConfirm': 'Apakah Anda yakin ingin menghapus file "{name}"? Tindakan ini tidak dapat dibatalkan.',
		'cancel': 'Batal',
		'delete': 'Hapus',
		'confirm': 'Konfirmasi',
		'newFileTitle': 'File baru',
		'newFolderTitle': 'Folder baru',
		'untitled': 'Tanpa judul.md',
		'newFolderName': 'Folder baru'
	},
	'it': {
		'newFile': 'Nuovo file (⌘ N)',
		'newFolder': 'Nuova cartella',
		'deleteFolder': 'Elimina cartella',
		'deleteFile': 'Elimina file',
		'focusMode': 'Modalità focus',
		'unfocus': 'Rimuovi focus',
		'confirmDelete': 'Conferma eliminazione',
		'deleteFolderConfirm': 'Sei sicuro di voler eliminare la cartella "{name}"? Questa azione non può essere annullata.',
		'deleteFileConfirm': 'Sei sicuro di voler eliminare il file "{name}"? Questa azione non può essere annullata.',
		'cancel': 'Annulla',
		'delete': 'Elimina',
		'confirm': 'Conferma',
		'newFileTitle': 'Nuovo file',
		'newFolderTitle': 'Nuova cartella',
		'untitled': 'Senza titolo.md',
		'newFolderName': 'Nuova cartella'
	},
	'ja': {
		'newFile': '新規ファイル (⌘ N)',
		'newFolder': '新規フォルダ',
		'deleteFolder': 'フォルダを削除',
		'deleteFile': 'ファイルを削除',
		'focusMode': 'フォーカスモード',
		'unfocus': 'フォーカス解除',
		'confirmDelete': '削除の確認',
		'deleteFolderConfirm': 'フォルダ "{name}" を削除してもよろしいですか？この操作は元に戻せません。',
		'deleteFileConfirm': 'ファイル "{name}" を削除してもよろしいですか？この操作は元に戻せません。',
		'cancel': 'キャンセル',
		'delete': '削除',
		'confirm': '確認',
		'newFileTitle': '新規ファイル',
		'newFolderTitle': '新規フォルダ',
		'untitled': '無題.md',
		'newFolderName': '新規フォルダ'
	},
	'km': {
		'newFile': 'ឯកសារថ្មី (⌘ N)',
		'newFolder': 'ថតថ្មី',
		'deleteFolder': 'លុបថត',
		'deleteFile': 'លុបឯកសារ',
		'focusMode': 'របៀបផ្តោតអារម្មណ៍',
		'unfocus': 'បញ្ឈប់ការផ្តោតអារម្មណ៍',
		'confirmDelete': 'បញ្ជាក់ការលុប',
		'deleteFolderConfirm': 'តើអ្នកប្រាកដថាចង់លុបថត "{name}" មែនទេ? សកម្មភាពនេះមិនអាចត្រឡប់វិញបានទេ។',
		'deleteFileConfirm': 'តើអ្នកប្រាកដថាចង់លុបឯកសារ "{name}" មែនទេ? សកម្មភាពនេះមិនអាចត្រឡប់វិញបានទេ។',
		'cancel': 'បោះបង់',
		'delete': 'លុប',
		'confirm': 'បញ្ជាក់',
		'newFileTitle': 'ឯកសារថ្មី',
		'newFolderTitle': 'ថតថ្មី',
		'untitled': 'គ្មានចំណងជើង.md',
		'newFolderName': 'ថតថ្មី'
	},
	'ko': {
		'newFile': '새 파일 (⌘ N)',
		'newFolder': '새 폴더',
		'deleteFolder': '폴더 삭제',
		'deleteFile': '파일 삭제',
		'focusMode': '포커스 모드',
		'unfocus': '포커스 해제',
		'confirmDelete': '삭제 확인',
		'deleteFolderConfirm': '"{name}" 폴더를 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.',
		'deleteFileConfirm': '"{name}" 파일을 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.',
		'cancel': '취소',
		'delete': '삭제',
		'confirm': '확인',
		'newFileTitle': '새 파일',
		'newFolderTitle': '새 폴더',
		'untitled': '제목 없음.md',
		'newFolderName': '새 폴더'
	},
	'lv': {
		'newFile': 'Jauns fails (⌘ N)',
		'newFolder': 'Jauna mape',
		'deleteFolder': 'Dzēst mapi',
		'deleteFile': 'Dzēst failu',
		'focusMode': 'Fokusa režīms',
		'unfocus': 'Noņemt fokusu',
		'confirmDelete': 'Apstiprināt dzēšanu',
		'deleteFolderConfirm': 'Vai tiešām vēlaties dzēst mapi "{name}"? Šo darbību nevar atsaukt.',
		'deleteFileConfirm': 'Vai tiešām vēlaties dzēst failu "{name}"? Šo darbību nevar atsaukt.',
		'cancel': 'Atcelt',
		'delete': 'Dzēst',
		'confirm': 'Apstiprināt',
		'newFileTitle': 'Jauns fails',
		'newFolderTitle': 'Jauna mape',
		'untitled': 'Bez nosaukuma.md',
		'newFolderName': 'Jauna mape'
	},
	'ms': {
		'newFile': 'Fail baharu (⌘ N)',
		'newFolder': 'Folder baharu',
		'deleteFolder': 'Padam folder',
		'deleteFile': 'Padam fail',
		'focusMode': 'Mod fokus',
		'unfocus': 'Nyahfokus',
		'confirmDelete': 'Sahkan pemadaman',
		'deleteFolderConfirm': 'Adakah anda pasti mahu memadam folder "{name}"? Tindakan ini tidak boleh dibatalkan.',
		'deleteFileConfirm': 'Adakah anda pasti mahu memadam fail "{name}"? Tindakan ini tidak boleh dibatalkan.',
		'cancel': 'Batal',
		'delete': 'Padam',
		'confirm': 'Sahkan',
		'newFileTitle': 'Fail baharu',
		'newFolderTitle': 'Folder baharu',
		'untitled': 'Tanpa tajuk.md',
		'newFolderName': 'Folder baharu'
	},
	'ne': {
		'newFile': 'नयाँ फाइल (⌘ N)',
		'newFolder': 'नयाँ फोल्डर',
		'deleteFolder': 'फोल्डर मेटाउनुहोस्',
		'deleteFile': 'फाइल मेटाउनुहोस्',
		'focusMode': 'फोकस मोड',
		'unfocus': 'फोकस हटाउनुहोस्',
		'confirmDelete': 'मेटाउने पुष्टि गर्नुहोस्',
		'deleteFolderConfirm': 'के तपाईं निश्चित हुनुहुन्छ कि तपाईं फोल्डर "{name}" मेटाउन चाहनुहुन्छ? यो कार्य पूर्ववत गर्न सकिँदैन।',
		'deleteFileConfirm': 'के तपाईं निश्चित हुनुहुन्छ कि तपाईं फाइल "{name}" मेटाउन चाहनुहुन्छ? यो कार्य पूर्ववत गर्न सकिँदैन।',
		'cancel': 'रद्द गर्नुहोस्',
		'delete': 'मेटाउनुहोस्',
		'confirm': 'पुष्टि गर्नुहोस्',
		'newFileTitle': 'नयाँ फाइल',
		'newFolderTitle': 'नयाँ फोल्डर',
		'untitled': 'शीर्षकविहीन.md',
		'newFolderName': 'नयाँ फोल्डर'
	},
	'nl': {
		'newFile': 'Nieuw bestand (⌘ N)',
		'newFolder': 'Nieuwe map',
		'deleteFolder': 'Map verwijderen',
		'deleteFile': 'Bestand verwijderen',
		'focusMode': 'Focusmodus',
		'unfocus': 'Focus opheffen',
		'confirmDelete': 'Verwijdering bevestigen',
		'deleteFolderConfirm': 'Weet u zeker dat u de map "{name}" wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.',
		'deleteFileConfirm': 'Weet u zeker dat u het bestand "{name}" wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.',
		'cancel': 'Annuleren',
		'delete': 'Verwijderen',
		'confirm': 'Bevestigen',
		'newFileTitle': 'Nieuw bestand',
		'newFolderTitle': 'Nieuwe map',
		'untitled': 'Naamloos.md',
		'newFolderName': 'Nieuwe map'
	},
	'no': {
		'newFile': 'Ny fil (⌘ N)',
		'newFolder': 'Ny mappe',
		'deleteFolder': 'Slett mappe',
		'deleteFile': 'Slett fil',
		'focusMode': 'Fokusmodus',
		'unfocus': 'Fjern fokus',
		'confirmDelete': 'Bekreft sletting',
		'deleteFolderConfirm': 'Er du sikker på at du vil slette mappen "{name}"? Denne handlingen kan ikke angres.',
		'deleteFileConfirm': 'Er du sikker på at du vil slette filen "{name}"? Denne handlingen kan ikke angres.',
		'cancel': 'Avbryt',
		'delete': 'Slett',
		'confirm': 'Bekreft',
		'newFileTitle': 'Ny fil',
		'newFolderTitle': 'Ny mappe',
		'untitled': 'Uten tittel.md',
		'newFolderName': 'Ny mappe'
	},
	'pl': {
		'newFile': 'Nowy plik (⌘ N)',
		'newFolder': 'Nowy folder',
		'deleteFolder': 'Usuń folder',
		'deleteFile': 'Usuń plik',
		'focusMode': 'Tryb skupienia',
		'unfocus': 'Wyłącz skupienie',
		'confirmDelete': 'Potwierdź usunięcie',
		'deleteFolderConfirm': 'Czy na pewno chcesz usunąć folder "{name}"? Ta czynność jest nieodwracalna.',
		'deleteFileConfirm': 'Czy na pewno chcesz usunąć plik "{name}"? Ta czynność jest nieodwracalna.',
		'cancel': 'Anuluj',
		'delete': 'Usuń',
		'confirm': 'Potwierdź',
		'newFileTitle': 'Nowy plik',
		'newFolderTitle': 'Nowy folder',
		'untitled': 'Bez tytułu.md',
		'newFolderName': 'Nowy folder'
	},
	'pt': {
		'newFile': 'Novo arquivo (⌘ N)',
		'newFolder': 'Nova pasta',
		'deleteFolder': 'Excluir pasta',
		'deleteFile': 'Excluir arquivo',
		'focusMode': 'Modo de foco',
		'unfocus': 'Remover foco',
		'confirmDelete': 'Confirmar exclusão',
		'deleteFolderConfirm': 'Tem certeza de que deseja excluir a pasta "{name}"? Esta ação não pode ser desfeita.',
		'deleteFileConfirm': 'Tem certeza de que deseja excluir o arquivo "{name}"? Esta ação não pode ser desfeita.',
		'cancel': 'Cancelar',
		'delete': 'Excluir',
		'confirm': 'Confirmar',
		'newFileTitle': 'Novo arquivo',
		'newFolderTitle': 'Nova pasta',
		'untitled': 'Sem título.md',
		'newFolderName': 'Nova pasta'
	},
	'pt-br': {
		'newFile': 'Novo arquivo (⌘ N)',
		'newFolder': 'Nova pasta',
		'deleteFolder': 'Excluir pasta',
		'deleteFile': 'Excluir arquivo',
		'focusMode': 'Modo de foco',
		'unfocus': 'Remover foco',
		'confirmDelete': 'Confirmar exclusão',
		'deleteFolderConfirm': 'Tem certeza de que deseja excluir a pasta "{name}"? Esta ação não pode ser desfeita.',
		'deleteFileConfirm': 'Tem certeza de que deseja excluir o arquivo "{name}"? Esta ação não pode ser desfeita.',
		'cancel': 'Cancelar',
		'delete': 'Excluir',
		'confirm': 'Confirmar',
		'newFileTitle': 'Novo arquivo',
		'newFolderTitle': 'Nova pasta',
		'untitled': 'Sem título.md',
		'newFolderName': 'Nova pasta'
	},
	'ro': {
		'newFile': 'Fișier nou (⌘ N)',
		'newFolder': 'Dosar nou',
		'deleteFolder': 'Șterge dosarul',
		'deleteFile': 'Șterge fișierul',
		'focusMode': 'Mod concentrare',
		'unfocus': 'Anulare concentrare',
		'confirmDelete': 'Confirmă ștergerea',
		'deleteFolderConfirm': 'Sigur doriți să ștergeți dosarul "{name}"? Această acțiune nu poate fi anulată.',
		'deleteFileConfirm': 'Sigur doriți să ștergeți fișierul "{name}"? Această acțiune nu poate fi anulată.',
		'cancel': 'Anulare',
		'delete': 'Ștergere',
		'confirm': 'Confirmare',
		'newFileTitle': 'Fișier nou',
		'newFolderTitle': 'Dosar nou',
		'untitled': 'Fără titlu.md',
		'newFolderName': 'Dosar nou'
	},
	'ru': {
		'newFile': 'Новый файл (⌘ N)',
		'newFolder': 'Новая папка',
		'deleteFolder': 'Удалить папку',
		'deleteFile': 'Удалить файл',
		'focusMode': 'Режим фокуса',
		'unfocus': 'Снять фокус',
		'confirmDelete': 'Подтвердить удаление',
		'deleteFolderConfirm': 'Вы уверены, что хотите удалить папку "{name}"? Это действие нельзя отменить.',
		'deleteFileConfirm': 'Вы уверены, что хотите удалить файл "{name}"? Это действие нельзя отменить.',
		'cancel': 'Отмена',
		'delete': 'Удалить',
		'confirm': 'Подтвердить',
		'newFileTitle': 'Новый файл',
		'newFolderTitle': 'Новая папка',
		'untitled': 'Без названия.md',
		'newFolderName': 'Новая папка'
	},
	'sq': {
		'newFile': 'Skedar i ri (⌘ N)',
		'newFolder': 'Dosje e re',
		'deleteFolder': 'Fshi dosjen',
		'deleteFile': 'Fshi skedarin',
		'focusMode': 'Modaliteti i fokusit',
		'unfocus': 'Hiq fokusin',
		'confirmDelete': 'Konfirmo fshirjen',
		'deleteFolderConfirm': 'Jeni të sigurt që doni të fshini dosjen "{name}"? Ky veprim nuk mund të zhbëhet.',
		'deleteFileConfirm': 'Jeni të sigurt që doni të fshini skedarin "{name}"? Ky veprim nuk mund të zhbëhet.',
		'cancel': 'Anulo',
		'delete': 'Fshi',
		'confirm': 'Konfirmo',
		'newFileTitle': 'Skedar i ri',
		'newFolderTitle': 'Dosje e re',
		'untitled': 'Pa titull.md',
		'newFolderName': 'Dosje e re'
	},
	'th': {
		'newFile': 'ไฟล์ใหม่ (⌘ N)',
		'newFolder': 'โฟลเดอร์ใหม่',
		'deleteFolder': 'ลบโฟลเดอร์',
		'deleteFile': 'ลบไฟล์',
		'focusMode': 'โหมดโฟกัส',
		'unfocus': 'ยกเลิกโฟกัส',
		'confirmDelete': 'ยืนยันการลบ',
		'deleteFolderConfirm': 'คุณแน่ใจหรือไม่ว่าต้องการลบโฟลเดอร์ "{name}" การดำเนินการนี้ไม่สามารถยกเลิกได้',
		'deleteFileConfirm': 'คุณแน่ใจหรือไม่ว่าต้องการลบไฟล์ "{name}" การดำเนินการนี้ไม่สามารถยกเลิกได้',
		'cancel': 'ยกเลิก',
		'delete': 'ลบ',
		'confirm': 'ยืนยัน',
		'newFileTitle': 'ไฟล์ใหม่',
		'newFolderTitle': 'โฟลเดอร์ใหม่',
		'untitled': 'ไม่มีชื่อ.md',
		'newFolderName': 'โฟลเดอร์ใหม่'
	},
	'tr': {
		'newFile': 'Yeni dosya (⌘ N)',
		'newFolder': 'Yeni klasör',
		'deleteFolder': 'Klasörü sil',
		'deleteFile': 'Dosyayı sil',
		'focusMode': 'Odaklanma modu',
		'unfocus': 'Odağı kaldır',
		'confirmDelete': 'Silmeyi onayla',
		'deleteFolderConfirm': '"{name}" klasörünü silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.',
		'deleteFileConfirm': '"{name}" dosyasını silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.',
		'cancel': 'İptal',
		'delete': 'Sil',
		'confirm': 'Onayla',
		'newFileTitle': 'Yeni dosya',
		'newFolderTitle': 'Yeni klasör',
		'untitled': 'Başlıksız.md',
		'newFolderName': 'Yeni klasör'
	},
	'uk': {
		'newFile': 'Новий файл (⌘ N)',
		'newFolder': 'Нова папка',
		'deleteFolder': 'Видалити папку',
		'deleteFile': 'Видалити файл',
		'focusMode': 'Режим фокусу',
		'unfocus': 'Зняти фокус',
		'confirmDelete': 'Підтвердити видалення',
		'deleteFolderConfirm': 'Ви впевнені, що хочете видалити папку "{name}"? Цю дію неможливо скасувати.',
		'deleteFileConfirm': 'Ви впевнені, що хочете видалити файл "{name}"? Цю дію неможливо скасувати.',
		'cancel': 'Скасувати',
		'delete': 'Видалити',
		'confirm': 'Підтвердити',
		'newFileTitle': 'Новий файл',
		'newFolderTitle': 'Нова папка',
		'untitled': 'Без назви.md',
		'newFolderName': 'Нова папка'
	},
	'uz': {
		'newFile': 'Yangi fayl (⌘ N)',
		'newFolder': 'Yangi papka',
		'deleteFolder': 'Papkani o\'chirish',
		'deleteFile': 'Faylni o\'chirish',
		'focusMode': 'Fokus rejimi',
		'unfocus': 'Fokusni olib tashlash',
		'confirmDelete': 'O\'chirishni tasdiqlash',
		'deleteFolderConfirm': '"{name}" papkasini o\'chirishga ishonchingiz komilmi? Bu amalni bekor qilib bo\'lmaydi.',
		'deleteFileConfirm': '"{name}" faylini o\'chirishga ishonchingiz komilmi? Bu amalni bekor qilib bo\'lmaydi.',
		'cancel': 'Bekor qilish',
		'delete': 'O\'chirish',
		'confirm': 'Tasdiqlash',
		'newFileTitle': 'Yangi fayl',
		'newFolderTitle': 'Yangi papka',
		'untitled': 'Nomsiz.md',
		'newFolderName': 'Yangi papka'
	},
	'vi': {
		'newFile': 'Tệp mới (⌘ N)',
		'newFolder': 'Thư mục mới',
		'deleteFolder': 'Xóa thư mục',
		'deleteFile': 'Xóa tệp',
		'focusMode': 'Chế độ tập trung',
		'unfocus': 'Bỏ tập trung',
		'confirmDelete': 'Xác nhận xóa',
		'deleteFolderConfirm': 'Bạn có chắc chắn muốn xóa thư mục "{name}"? Hành động này không thể hoàn tác.',
		'deleteFileConfirm': 'Bạn có chắc chắn muốn xóa tệp "{name}"? Hành động này không thể hoàn tác.',
		'cancel': 'Hủy',
		'delete': 'Xóa',
		'confirm': 'Xác nhận',
		'newFileTitle': 'Tệp mới',
		'newFolderTitle': 'Thư mục mới',
		'untitled': 'Không có tiêu đề.md',
		'newFolderName': 'Thư mục mới'
	}
};

// 获取翻译文本
function t(key: string, locale: string = 'en'): string {
	// 标准化语言代码
	const normalizedLocale = locale.toLowerCase().replace('_', '-');

	// 尝试完全匹配
	if (translations[normalizedLocale] && translations[normalizedLocale][key]) {
		return translations[normalizedLocale][key];
	}

	// 尝试语言代码前缀匹配（例如 zh-cn 匹配 zh）
	const langPrefix = normalizedLocale.split('-')[0];
	for (const availableLocale in translations) {
		if (availableLocale.startsWith(langPrefix) && translations[availableLocale][key]) {
			return translations[availableLocale][key];
		}
	}

	// 默认返回英文
	return translations['en'][key] || key;
}

class InputModal extends Modal {
	result: string = '';
	onSubmit: (result: string) => void;
	placeholder: string;
	title: string;
	locale: string;

	constructor(app: App, title: string, placeholder: string, onSubmit: (result: string) => void, locale: string = 'en') {
		super(app);
		this.title = title;
		this.placeholder = placeholder;
		this.onSubmit = onSubmit;
		this.locale = locale;
	}

	onOpen() {
		const { contentEl } = this;
		contentEl.createEl('h2', { text: this.title });

		const inputEl = contentEl.createEl('input', {
			type: 'text',
			placeholder: this.placeholder,
			value: this.placeholder
		});
		inputEl.addClass('floating-modal-input');

		inputEl.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				this.result = inputEl.value;
				this.close();
				this.onSubmit(this.result);
			}
		});

		const buttonContainer = contentEl.createDiv();
		buttonContainer.addClass('floating-button-container');

		const cancelBtn = buttonContainer.createEl('button', { text: t('cancel', this.locale) });
		cancelBtn.addEventListener('click', () => {
			this.close();
		});

		const submitBtn = buttonContainer.createEl('button', { text: t('confirm', this.locale), cls: 'mod-cta' });
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
	private locale: string = 'en';

	// SVG helper functions
	private createFolderSvgIcon(container: HTMLElement, width: string = '16', height: string = '16'): void {
		const svg = container.createSvg('svg', {
			attr: {
				xmlns: 'http://www.w3.org/2000/svg',
				width: width,
				height: height,
				viewBox: '0 0 24 24',
				fill: 'none',
				stroke: 'currentColor',
				'stroke-width': '2',
				'stroke-linecap': 'round',
				'stroke-linejoin': 'round'
			}
		});
		svg.createSvg('path', {
			attr: {
				d: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'
			}
		});
	}

	private createFileSvgIcon(container: HTMLElement): void {
		const svg = container.createSvg('svg', {
			attr: {
				xmlns: 'http://www.w3.org/2000/svg',
				width: '16',
				height: '16',
				viewBox: '0 0 24 24',
				fill: 'none',
				stroke: 'currentColor',
				'stroke-width': '2'
			}
		});
		svg.createSvg('path', {
			attr: {
				d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'
			}
		});
		svg.createSvg('polyline', {
			attr: {
				points: '14 2 14 8 20 8'
			}
		});
	}

	onload() {
		console.debug('Loading Floating Explorer Plugin');

		// 获取 Obsidian 的语言设置
		// 尝试多种方法获取语言设置
		const vaultLang = (this.app as ObsidianApp).vault.getConfig('language');
		const localStorageLang = this.app.loadLocalStorage('language');
		const momentLang = (window as MomentWindow).moment?.locale();

		this.locale = vaultLang || localStorageLang || momentLang || 'en';

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
		console.debug('Unloading Floating Explorer Plugin');
		this.removeAllIcons();
	}

	getLeafId(leaf: WorkspaceLeaf): string {
		// 使用leaf的view容器作为唯一标识
		const container = (leaf as WorkspaceLeafExt).containerEl;
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
		const container = (leaf as WorkspaceLeafExt).containerEl;
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
		this.createFolderSvgIcon(floatingIcon, '20', '20');

		// 创建文件夹面板
		const folderPanel = document.createElement('div');
		folderPanel.addClass('floating-folder-panel');
		folderPanel.addClass('is-hidden');

		// 添加到leaf容器而不是document.body
		const leafContainer = (leaf as WorkspaceLeafExt).containerEl;
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
		state.folderPanel.removeClass('is-hidden');
		state.folderPanel.addClass('is-visible');
	}

	scheduleHidePanel(leafId: string) {
		const state = this.leafStates.get(leafId);
		if (!state) return;

		state.hideTimeout = setTimeout(() => {
			if (state.folderPanel) {
				state.folderPanel.removeClass('is-visible');
				state.folderPanel.addClass('is-hidden');
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
			const iconSpan = unfocusBar.createSpan({ cls: 'unfocus-icon' });
			iconSpan.textContent = '◀';
			const textSpan = unfocusBar.createSpan({ cls: 'unfocus-text' });
			textSpan.textContent = `Focused: ${startFolder.name}`;
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
				folderItem.setCssStyles({ "padding-left": (level * 16) + "px" });

				const folderHeader = folderItem.createDiv('folder-header');

				// 折叠/展开图标
				const toggleIcon = folderHeader.createSpan('folder-toggle');

				// 检查这个文件夹是否已展开
				const isExpanded = state.expandedFolders.has(child.path);
				toggleIcon.textContent = isExpanded ? '▼' : '▶';

				// 文件夹图标
				const folderIcon = folderHeader.createSpan('folder-icon');
			this.createFolderSvgIcon(folderIcon);

				// 文件夹名称
				const folderName = folderHeader.createSpan('folder-name');
				folderName.textContent = child.name;

				// 子文件夹容器
				const childContainer = folderItem.createDiv('folder-children');
			if (isExpanded) {
				childContainer.addClass('is-expanded');
			} else {
				childContainer.addClass('is-collapsed');
			}

				// 递归渲染子文件夹
				this.renderFolder(child, childContainer, level + 1, leafId);

				// 点击折叠/展开
				folderHeader.addEventListener('click', (e) => {
					// 只有点击主区域才展开/折叠，右键不触发
					if (e.button !== 0) return;

					const nowExpanded = state.expandedFolders.has(child.path);

					if (nowExpanded) {
						state.expandedFolders.delete(child.path);
						childContainer.removeClass('is-expanded'); childContainer.addClass('is-collapsed');
						toggleIcon.textContent = '▶';
					} else {
						state.expandedFolders.add(child.path);
						childContainer.removeClass('is-collapsed'); childContainer.addClass('is-expanded');
						toggleIcon.textContent = '▼';
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

					// 计算相对于folderPanel的位置
					const panelRect = state.folderPanel.getBoundingClientRect();
					const relativeX = e.clientX - panelRect.left;
					const relativeY = e.clientY - panelRect.top;

					menu.setCssStyles({ left: relativeX + "px", top: relativeY + "px" });

					const isFocused = state.focusedFolder === child.path;

					// 创建新文件菜单项
					const newFileItem = menu.createDiv('context-menu-item');
					newFileItem.textContent = t('newFile', this.locale);
					newFileItem.addEventListener('click', (clickEvent) => {
						clickEvent.stopPropagation();
						menu.remove();

						new InputModal(this.app, t('newFileTitle', this.locale), t('untitled', this.locale), async (fileName) => {
							if (fileName) {
								// 处理路径，确保正确
								let filePath = child.path;
								if (filePath === '/') {
									filePath = fileName;
								} else {
									filePath = child.path + "/" + fileName;
								}


								try {
									const newFile = await this.app.vault.create(filePath, '');

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
					newFolderItem.textContent = t('newFolder', this.locale);
					newFolderItem.addEventListener('click', (clickEvent) => {
						clickEvent.stopPropagation();
						menu.remove();

						new InputModal(this.app, t('newFolderTitle', this.locale), t('newFolderName', this.locale), async (folderName) => {
							if (folderName) {
								// 处理路径，确保正确
								let folderPath = child.path;
								if (folderPath === '/') {
									folderPath = folderName;
								} else {
									folderPath = child.path + "/" + folderName;
								}


								try {
									await this.app.vault.createFolder(folderPath);

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
					deleteItem.textContent = t('deleteFolder', this.locale);
					deleteItem.addClass('context-menu-item-delete');
					deleteItem.addEventListener('click', (clickEvent) => {
						clickEvent.stopPropagation();
						menu.remove();

						// 创建确认对话框
						const confirmModal = new Modal(this.app);
						confirmModal.titleEl.setText(t('confirmDelete', this.locale));
						confirmModal.contentEl.createEl('p', {
							text: t('deleteFolderConfirm', this.locale).replace('{name}', child.name)
						});

						const buttonContainer = confirmModal.contentEl.createDiv();
						buttonContainer.addClass('floating-button-container-spaced');

						const cancelBtn = buttonContainer.createEl('button', { text: t('cancel', this.locale) });
						cancelBtn.addEventListener('click', () => {
							confirmModal.close();
						});

						const deleteBtn = buttonContainer.createEl('button', { text: t('delete', this.locale), cls: 'mod-warning' });
						deleteBtn.addEventListener('click', () => {
							confirmModal.close();
							try {
								this.app.fileManager.trashFile(child);
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
					focusMenuItem.textContent = isFocused ? t('unfocus', this.locale) : t('focusMode', this.locale);
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
				fileItem.setCssStyles({ "padding-left": ((level + 1) * 16) + "px" });


			// Check if this is the active file
			const activeFile = this.app.workspace.getActiveFile();
			if (activeFile && activeFile.path === child.path) {
				fileItem.addClass('is-active');
			}
				// 文件图标
				const fileIcon = fileItem.createSpan('file-icon');
			this.createFileSvgIcon(fileIcon);
		

				// 文件名称
				const fileName = fileItem.createSpan('file-name');
				fileName.textContent = child.name;

				// 点击打开文件
				fileItem.addEventListener('click', () => {
					const leaf = this.app.workspace.getLeaf();
					leaf.openFile(child);
					if (state.folderPanel) {
						state.folderPanel.removeClass('is-visible'); state.folderPanel.addClass('is-hidden');
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

					// 计算相对于folderPanel的位置
					const panelRect = state.folderPanel.getBoundingClientRect();
					const relativeX = e.clientX - panelRect.left;
					const relativeY = e.clientY - panelRect.top;


				menu.setCssStyles({
					left: relativeX + "px",
					top: relativeY + "px"
				});

					// 获取文件所在的文件夹
					const parentFolder = child.parent;

					// 创建新文件菜单项
					const newFileItem = menu.createDiv('context-menu-item');
					newFileItem.textContent = t('newFile', this.locale);
					newFileItem.addEventListener('click', (clickEvent) => {
						clickEvent.stopPropagation();
						menu.remove();

						new InputModal(this.app, t('newFileTitle', this.locale), t('untitled', this.locale), async (fileName) => {
							if (fileName && parentFolder) {
								// 处理路径，确保正确
								let filePath = parentFolder.path;
								if (filePath === '/') {
									filePath = fileName;
								} else {
									filePath = parentFolder.path + "/" + fileName;
								}


								try {
									const newFile = await this.app.vault.create(filePath, '');

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
					newFolderItem.textContent = t('newFolder', this.locale);
					newFolderItem.addEventListener('click', (clickEvent) => {
						clickEvent.stopPropagation();
						menu.remove();

						new InputModal(this.app, t('newFolderTitle', this.locale), t('newFolderName', this.locale), async (folderName) => {
							if (folderName && parentFolder) {
								// 处理路径，确保正确
								let folderPath = parentFolder.path;
								if (folderPath === '/') {
									folderPath = folderName;
								} else {
									folderPath = parentFolder.path + "/" + folderName;
								}


								try {
									await this.app.vault.createFolder(folderPath);

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
					deleteItem.textContent = t('deleteFile', this.locale);
					deleteItem.addClass('context-menu-item-delete');
					deleteItem.addEventListener('click', (clickEvent) => {
						clickEvent.stopPropagation();
						menu.remove();

						// 创建确认对话框
						const confirmModal = new Modal(this.app);
						confirmModal.titleEl.setText(t('confirmDelete', this.locale));
						confirmModal.contentEl.createEl('p', {
							text: t('deleteFileConfirm', this.locale).replace('{name}', child.name)
						});

						const buttonContainer = confirmModal.contentEl.createDiv();
						buttonContainer.addClass('floating-button-container-spaced');

						const cancelBtn = buttonContainer.createEl('button', { text: t('cancel', this.locale) });
						cancelBtn.addEventListener('click', () => {
							confirmModal.close();
						});

						const deleteBtn = buttonContainer.createEl('button', { text: t('delete', this.locale), cls: 'mod-warning' });
						deleteBtn.addEventListener('click', () => {
							confirmModal.close();
							try {
								this.app.fileManager.trashFile(child);
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
