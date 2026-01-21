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
var translations = {
  "en": {
    "newFile": "New File (\u2318 N)",
    "newFolder": "New Folder",
    "deleteFolder": "Delete Folder",
    "deleteFile": "Delete File",
    "focusMode": "Focus Mode",
    "unfocus": "Unfocus",
    "confirmDelete": "Confirm Delete",
    "deleteFolderConfirm": 'Are you sure you want to delete folder "{name}"? This action cannot be undone.',
    "deleteFileConfirm": 'Are you sure you want to delete file "{name}"? This action cannot be undone.',
    "cancel": "Cancel",
    "delete": "Delete",
    "confirm": "Confirm",
    "newFileTitle": "New File",
    "newFolderTitle": "New Folder",
    "untitled": "Untitled.md",
    "newFolderName": "New Folder"
  },
  "zh-cn": {
    "newFile": "\u65B0\u5EFA\u6587\u4EF6 (\u2318 N)",
    "newFolder": "\u65B0\u5EFA\u6587\u4EF6\u5939",
    "deleteFolder": "\u5220\u9664\u6587\u4EF6\u5939",
    "deleteFile": "\u5220\u9664\u6587\u4EF6",
    "focusMode": "\u805A\u7126\u6A21\u5F0F",
    "unfocus": "\u53D6\u6D88\u805A\u7126",
    "confirmDelete": "\u786E\u8BA4\u5220\u9664",
    "deleteFolderConfirm": '\u786E\u5B9A\u8981\u5220\u9664\u6587\u4EF6\u5939 "{name}" \u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002',
    "deleteFileConfirm": '\u786E\u5B9A\u8981\u5220\u9664\u6587\u4EF6 "{name}" \u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002',
    "cancel": "\u53D6\u6D88",
    "delete": "\u5220\u9664",
    "confirm": "\u786E\u5B9A",
    "newFileTitle": "\u65B0\u5EFA\u6587\u4EF6",
    "newFolderTitle": "\u65B0\u5EFA\u6587\u4EF6\u5939",
    "untitled": "\u672A\u547D\u540D.md",
    "newFolderName": "\u65B0\u6587\u4EF6\u5939"
  },
  "zh-tw": {
    "newFile": "\u65B0\u5EFA\u6A94\u6848 (\u2318 N)",
    "newFolder": "\u65B0\u5EFA\u8CC7\u6599\u593E",
    "deleteFolder": "\u522A\u9664\u8CC7\u6599\u593E",
    "deleteFile": "\u522A\u9664\u6A94\u6848",
    "focusMode": "\u805A\u7126\u6A21\u5F0F",
    "unfocus": "\u53D6\u6D88\u805A\u7126",
    "confirmDelete": "\u78BA\u8A8D\u522A\u9664",
    "deleteFolderConfirm": '\u78BA\u5B9A\u8981\u522A\u9664\u8CC7\u6599\u593E "{name}" \u55CE\uFF1F\u6B64\u64CD\u4F5C\u7121\u6CD5\u64A4\u92B7\u3002',
    "deleteFileConfirm": '\u78BA\u5B9A\u8981\u522A\u9664\u6A94\u6848 "{name}" \u55CE\uFF1F\u6B64\u64CD\u4F5C\u7121\u6CD5\u64A4\u92B7\u3002',
    "cancel": "\u53D6\u6D88",
    "delete": "\u522A\u9664",
    "confirm": "\u78BA\u5B9A",
    "newFileTitle": "\u65B0\u5EFA\u6A94\u6848",
    "newFolderTitle": "\u65B0\u5EFA\u8CC7\u6599\u593E",
    "untitled": "\u672A\u547D\u540D.md",
    "newFolderName": "\u65B0\u8CC7\u6599\u593E"
  },
  "ar": {
    "newFile": "\u0645\u0644\u0641 \u062C\u062F\u064A\u062F (\u2318 N)",
    "newFolder": "\u0645\u062C\u0644\u062F \u062C\u062F\u064A\u062F",
    "deleteFolder": "\u062D\u0630\u0641 \u0627\u0644\u0645\u062C\u0644\u062F",
    "deleteFile": "\u062D\u0630\u0641 \u0627\u0644\u0645\u0644\u0641",
    "focusMode": "\u0648\u0636\u0639 \u0627\u0644\u062A\u0631\u0643\u064A\u0632",
    "unfocus": "\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u0631\u0643\u064A\u0632",
    "confirmDelete": "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062D\u0630\u0641",
    "deleteFolderConfirm": '\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0627\u0644\u0645\u062C\u0644\u062F "{name}"\u061F \u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u062A\u0631\u0627\u062C\u0639 \u0639\u0646 \u0647\u0630\u0627 \u0627\u0644\u0625\u062C\u0631\u0627\u0621.',
    "deleteFileConfirm": '\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0627\u0644\u0645\u0644\u0641 "{name}"\u061F \u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u062A\u0631\u0627\u062C\u0639 \u0639\u0646 \u0647\u0630\u0627 \u0627\u0644\u0625\u062C\u0631\u0627\u0621.',
    "cancel": "\u0625\u0644\u063A\u0627\u0621",
    "delete": "\u062D\u0630\u0641",
    "confirm": "\u062A\u0623\u0643\u064A\u062F",
    "newFileTitle": "\u0645\u0644\u0641 \u062C\u062F\u064A\u062F",
    "newFolderTitle": "\u0645\u062C\u0644\u062F \u062C\u062F\u064A\u062F",
    "untitled": "\u0628\u062F\u0648\u0646 \u0639\u0646\u0648\u0627\u0646.md",
    "newFolderName": "\u0645\u062C\u0644\u062F \u062C\u062F\u064A\u062F"
  },
  "be": {
    "newFile": "\u041D\u043E\u0432\u044B \u0444\u0430\u0439\u043B (\u2318 N)",
    "newFolder": "\u041D\u043E\u0432\u0430\u044F \u043F\u0430\u043F\u043A\u0430",
    "deleteFolder": "\u0412\u044B\u0434\u0430\u043B\u0456\u0446\u044C \u043F\u0430\u043F\u043A\u0443",
    "deleteFile": "\u0412\u044B\u0434\u0430\u043B\u0456\u0446\u044C \u0444\u0430\u0439\u043B",
    "focusMode": "\u0420\u044D\u0436\u044B\u043C \u0444\u043E\u043A\u0443\u0441\u0430",
    "unfocus": "\u0421\u043A\u0430\u0441\u0430\u0432\u0430\u0446\u044C \u0444\u043E\u043A\u0443\u0441",
    "confirmDelete": "\u041F\u0430\u0446\u0432\u0435\u0440\u0434\u0437\u0456\u0446\u044C \u0432\u044B\u0434\u0430\u043B\u0435\u043D\u043D\u0435",
    "deleteFolderConfirm": '\u0412\u044B \u045E\u043F\u044D\u045E\u043D\u0435\u043D\u044B, \u0448\u0442\u043E \u0445\u043E\u0447\u0430\u0446\u0435 \u0432\u044B\u0434\u0430\u043B\u0456\u0446\u044C \u043F\u0430\u043F\u043A\u0443 "{name}"? \u0413\u044D\u0442\u0430 \u0434\u0437\u0435\u044F\u043D\u043D\u0435 \u043D\u0435\u043B\u044C\u0433\u0430 \u0430\u0434\u043C\u044F\u043D\u0456\u0446\u044C.',
    "deleteFileConfirm": '\u0412\u044B \u045E\u043F\u044D\u045E\u043D\u0435\u043D\u044B, \u0448\u0442\u043E \u0445\u043E\u0447\u0430\u0446\u0435 \u0432\u044B\u0434\u0430\u043B\u0456\u0446\u044C \u0444\u0430\u0439\u043B "{name}"? \u0413\u044D\u0442\u0430 \u0434\u0437\u0435\u044F\u043D\u043D\u0435 \u043D\u0435\u043B\u044C\u0433\u0430 \u0430\u0434\u043C\u044F\u043D\u0456\u0446\u044C.',
    "cancel": "\u0421\u043A\u0430\u0441\u0430\u0432\u0430\u0446\u044C",
    "delete": "\u0412\u044B\u0434\u0430\u043B\u0456\u0446\u044C",
    "confirm": "\u041F\u0430\u0446\u0432\u0435\u0440\u0434\u0437\u0456\u0446\u044C",
    "newFileTitle": "\u041D\u043E\u0432\u044B \u0444\u0430\u0439\u043B",
    "newFolderTitle": "\u041D\u043E\u0432\u0430\u044F \u043F\u0430\u043F\u043A\u0430",
    "untitled": "\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u044B.md",
    "newFolderName": "\u041D\u043E\u0432\u0430\u044F \u043F\u0430\u043F\u043A\u0430"
  },
  "ca": {
    "newFile": "Fitxer nou (\u2318 N)",
    "newFolder": "Carpeta nova",
    "deleteFolder": "Eliminar carpeta",
    "deleteFile": "Eliminar fitxer",
    "focusMode": "Mode focus",
    "unfocus": "Desfocar",
    "confirmDelete": "Confirmar eliminaci\xF3",
    "deleteFolderConfirm": 'Esteu segur que voleu eliminar la carpeta "{name}"? Aquesta acci\xF3 no es pot desfer.',
    "deleteFileConfirm": 'Esteu segur que voleu eliminar el fitxer "{name}"? Aquesta acci\xF3 no es pot desfer.',
    "cancel": "Cancel\xB7lar",
    "delete": "Eliminar",
    "confirm": "Confirmar",
    "newFileTitle": "Fitxer nou",
    "newFolderTitle": "Carpeta nova",
    "untitled": "Sense t\xEDtol.md",
    "newFolderName": "Carpeta nova"
  },
  "cs": {
    "newFile": "Nov\xFD soubor (\u2318 N)",
    "newFolder": "Nov\xE1 slo\u017Eka",
    "deleteFolder": "Odstranit slo\u017Eku",
    "deleteFile": "Odstranit soubor",
    "focusMode": "Re\u017Eim zam\u011B\u0159en\xED",
    "unfocus": "Zru\u0161it zam\u011B\u0159en\xED",
    "confirmDelete": "Potvrdit odstran\u011Bn\xED",
    "deleteFolderConfirm": 'Opravdu chcete odstranit slo\u017Eku "{name}"? Tuto akci nelze vr\xE1tit zp\u011Bt.',
    "deleteFileConfirm": 'Opravdu chcete odstranit soubor "{name}"? Tuto akci nelze vr\xE1tit zp\u011Bt.',
    "cancel": "Zru\u0161it",
    "delete": "Odstranit",
    "confirm": "Potvrdit",
    "newFileTitle": "Nov\xFD soubor",
    "newFolderTitle": "Nov\xE1 slo\u017Eka",
    "untitled": "Bez n\xE1zvu.md",
    "newFolderName": "Nov\xE1 slo\u017Eka"
  },
  "da": {
    "newFile": "Ny fil (\u2318 N)",
    "newFolder": "Ny mappe",
    "deleteFolder": "Slet mappe",
    "deleteFile": "Slet fil",
    "focusMode": "Fokustilstand",
    "unfocus": "Fjern fokus",
    "confirmDelete": "Bekr\xE6ft sletning",
    "deleteFolderConfirm": 'Er du sikker p\xE5, at du vil slette mappen "{name}"? Denne handling kan ikke fortrydes.',
    "deleteFileConfirm": 'Er du sikker p\xE5, at du vil slette filen "{name}"? Denne handling kan ikke fortrydes.',
    "cancel": "Annuller",
    "delete": "Slet",
    "confirm": "Bekr\xE6ft",
    "newFileTitle": "Ny fil",
    "newFolderTitle": "Ny mappe",
    "untitled": "Unavngivet.md",
    "newFolderName": "Ny mappe"
  },
  "de": {
    "newFile": "Neue Datei (\u2318 N)",
    "newFolder": "Neuer Ordner",
    "deleteFolder": "Ordner l\xF6schen",
    "deleteFile": "Datei l\xF6schen",
    "focusMode": "Fokusmodus",
    "unfocus": "Fokus aufheben",
    "confirmDelete": "L\xF6schen best\xE4tigen",
    "deleteFolderConfirm": 'M\xF6chten Sie den Ordner "{name}" wirklich l\xF6schen? Diese Aktion kann nicht r\xFCckg\xE4ngig gemacht werden.',
    "deleteFileConfirm": 'M\xF6chten Sie die Datei "{name}" wirklich l\xF6schen? Diese Aktion kann nicht r\xFCckg\xE4ngig gemacht werden.',
    "cancel": "Abbrechen",
    "delete": "L\xF6schen",
    "confirm": "Best\xE4tigen",
    "newFileTitle": "Neue Datei",
    "newFolderTitle": "Neuer Ordner",
    "untitled": "Unbenannt.md",
    "newFolderName": "Neuer Ordner"
  },
  "es": {
    "newFile": "Archivo nuevo (\u2318 N)",
    "newFolder": "Carpeta nueva",
    "deleteFolder": "Eliminar carpeta",
    "deleteFile": "Eliminar archivo",
    "focusMode": "Modo enfoque",
    "unfocus": "Desenfocar",
    "confirmDelete": "Confirmar eliminaci\xF3n",
    "deleteFolderConfirm": '\xBFEst\xE1 seguro de que desea eliminar la carpeta "{name}"? Esta acci\xF3n no se puede deshacer.',
    "deleteFileConfirm": '\xBFEst\xE1 seguro de que desea eliminar el archivo "{name}"? Esta acci\xF3n no se puede deshacer.',
    "cancel": "Cancelar",
    "delete": "Eliminar",
    "confirm": "Confirmar",
    "newFileTitle": "Archivo nuevo",
    "newFolderTitle": "Carpeta nueva",
    "untitled": "Sin t\xEDtulo.md",
    "newFolderName": "Carpeta nueva"
  },
  "fa": {
    "newFile": "\u0641\u0627\u06CC\u0644 \u062C\u062F\u06CC\u062F (\u2318 N)",
    "newFolder": "\u067E\u0648\u0634\u0647 \u062C\u062F\u06CC\u062F",
    "deleteFolder": "\u062D\u0630\u0641 \u067E\u0648\u0634\u0647",
    "deleteFile": "\u062D\u0630\u0641 \u0641\u0627\u06CC\u0644",
    "focusMode": "\u062D\u0627\u0644\u062A \u062A\u0645\u0631\u06A9\u0632",
    "unfocus": "\u0644\u063A\u0648 \u062A\u0645\u0631\u06A9\u0632",
    "confirmDelete": "\u062A\u0627\u06CC\u06CC\u062F \u062D\u0630\u0641",
    "deleteFolderConfirm": '\u0622\u06CC\u0627 \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062A\u06CC\u062F \u06A9\u0647 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u067E\u0648\u0634\u0647 "{name}" \u0631\u0627 \u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F\u061F \u0627\u06CC\u0646 \u0639\u0645\u0644 \u0642\u0627\u0628\u0644 \u0628\u0627\u0632\u06AF\u0634\u062A \u0646\u06CC\u0633\u062A.',
    "deleteFileConfirm": '\u0622\u06CC\u0627 \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062A\u06CC\u062F \u06A9\u0647 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u0641\u0627\u06CC\u0644 "{name}" \u0631\u0627 \u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F\u061F \u0627\u06CC\u0646 \u0639\u0645\u0644 \u0642\u0627\u0628\u0644 \u0628\u0627\u0632\u06AF\u0634\u062A \u0646\u06CC\u0633\u062A.',
    "cancel": "\u0644\u063A\u0648",
    "delete": "\u062D\u0630\u0641",
    "confirm": "\u062A\u0627\u06CC\u06CC\u062F",
    "newFileTitle": "\u0641\u0627\u06CC\u0644 \u062C\u062F\u06CC\u062F",
    "newFolderTitle": "\u067E\u0648\u0634\u0647 \u062C\u062F\u06CC\u062F",
    "untitled": "\u0628\u062F\u0648\u0646 \u0639\u0646\u0648\u0627\u0646.md",
    "newFolderName": "\u067E\u0648\u0634\u0647 \u062C\u062F\u06CC\u062F"
  },
  "fr": {
    "newFile": "Nouveau fichier (\u2318 N)",
    "newFolder": "Nouveau dossier",
    "deleteFolder": "Supprimer le dossier",
    "deleteFile": "Supprimer le fichier",
    "focusMode": "Mode focus",
    "unfocus": "D\xE9focaliser",
    "confirmDelete": "Confirmer la suppression",
    "deleteFolderConfirm": '\xCAtes-vous s\xFBr de vouloir supprimer le dossier "{name}" ? Cette action est irr\xE9versible.',
    "deleteFileConfirm": '\xCAtes-vous s\xFBr de vouloir supprimer le fichier "{name}" ? Cette action est irr\xE9versible.',
    "cancel": "Annuler",
    "delete": "Supprimer",
    "confirm": "Confirmer",
    "newFileTitle": "Nouveau fichier",
    "newFolderTitle": "Nouveau dossier",
    "untitled": "Sans titre.md",
    "newFolderName": "Nouveau dossier"
  },
  "ga": {
    "newFile": "Comhad nua (\u2318 N)",
    "newFolder": "Fillte\xE1n nua",
    "deleteFolder": "Scrios fillte\xE1n",
    "deleteFile": "Scrios comhad",
    "focusMode": "M\xF3d f\xF3cais",
    "unfocus": "D\xEDdh\xEDrigh",
    "confirmDelete": "Deimhnigh scriosadh",
    "deleteFolderConfirm": 'An bhfuil t\xFA cinnte gur mhaith leat an fillte\xE1n "{name}" a scriosadh? N\xED f\xE9idir an gn\xEDomh seo a cheal\xFA.',
    "deleteFileConfirm": 'An bhfuil t\xFA cinnte gur mhaith leat an comhad "{name}" a scriosadh? N\xED f\xE9idir an gn\xEDomh seo a cheal\xFA.',
    "cancel": "Cealaigh",
    "delete": "Scrios",
    "confirm": "Deimhnigh",
    "newFileTitle": "Comhad nua",
    "newFolderTitle": "Fillte\xE1n nua",
    "untitled": "Gan teideal.md",
    "newFolderName": "Fillte\xE1n nua"
  },
  "he": {
    "newFile": "\u05E7\u05D5\u05D1\u05E5 \u05D7\u05D3\u05E9 (\u2318 N)",
    "newFolder": "\u05EA\u05D9\u05E7\u05D9\u05D9\u05D4 \u05D7\u05D3\u05E9\u05D4",
    "deleteFolder": "\u05DE\u05D7\u05E7 \u05EA\u05D9\u05E7\u05D9\u05D9\u05D4",
    "deleteFile": "\u05DE\u05D7\u05E7 \u05E7\u05D5\u05D1\u05E5",
    "focusMode": "\u05DE\u05E6\u05D1 \u05DE\u05D9\u05E7\u05D5\u05D3",
    "unfocus": "\u05D1\u05D8\u05DC \u05DE\u05D9\u05E7\u05D5\u05D3",
    "confirmDelete": "\u05D0\u05E9\u05E8 \u05DE\u05D7\u05D9\u05E7\u05D4",
    "deleteFolderConfirm": '\u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05DE\u05D7\u05D5\u05E7 \u05D0\u05EA \u05D4\u05EA\u05D9\u05E7\u05D9\u05D9\u05D4 "{name}"? \u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D8\u05DC \u05E4\u05E2\u05D5\u05DC\u05D4 \u05D6\u05D5.',
    "deleteFileConfirm": '\u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05DE\u05D7\u05D5\u05E7 \u05D0\u05EA \u05D4\u05E7\u05D5\u05D1\u05E5 "{name}"? \u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05D8\u05DC \u05E4\u05E2\u05D5\u05DC\u05D4 \u05D6\u05D5.',
    "cancel": "\u05D1\u05D9\u05D8\u05D5\u05DC",
    "delete": "\u05DE\u05D7\u05E7",
    "confirm": "\u05D0\u05E9\u05E8",
    "newFileTitle": "\u05E7\u05D5\u05D1\u05E5 \u05D7\u05D3\u05E9",
    "newFolderTitle": "\u05EA\u05D9\u05E7\u05D9\u05D9\u05D4 \u05D7\u05D3\u05E9\u05D4",
    "untitled": "\u05DC\u05DC\u05D0 \u05E9\u05DD.md",
    "newFolderName": "\u05EA\u05D9\u05E7\u05D9\u05D9\u05D4 \u05D7\u05D3\u05E9\u05D4"
  },
  "hu": {
    "newFile": "\xDAj f\xE1jl (\u2318 N)",
    "newFolder": "\xDAj mappa",
    "deleteFolder": "Mappa t\xF6rl\xE9se",
    "deleteFile": "F\xE1jl t\xF6rl\xE9se",
    "focusMode": "F\xF3kusz m\xF3d",
    "unfocus": "F\xF3kusz megsz\xFCntet\xE9se",
    "confirmDelete": "T\xF6rl\xE9s meger\u0151s\xEDt\xE9se",
    "deleteFolderConfirm": 'Biztosan t\xF6r\xF6lni szeretn\xE9 a(z) "{name}" mapp\xE1t? Ez a m\u0171velet nem vonhat\xF3 vissza.',
    "deleteFileConfirm": 'Biztosan t\xF6r\xF6lni szeretn\xE9 a(z) "{name}" f\xE1jlt? Ez a m\u0171velet nem vonhat\xF3 vissza.',
    "cancel": "M\xE9gse",
    "delete": "T\xF6rl\xE9s",
    "confirm": "Meger\u0151s\xEDt\xE9s",
    "newFileTitle": "\xDAj f\xE1jl",
    "newFolderTitle": "\xDAj mappa",
    "untitled": "N\xE9vtelen.md",
    "newFolderName": "\xDAj mappa"
  },
  "id": {
    "newFile": "File baru (\u2318 N)",
    "newFolder": "Folder baru",
    "deleteFolder": "Hapus folder",
    "deleteFile": "Hapus file",
    "focusMode": "Mode fokus",
    "unfocus": "Hilangkan fokus",
    "confirmDelete": "Konfirmasi penghapusan",
    "deleteFolderConfirm": 'Apakah Anda yakin ingin menghapus folder "{name}"? Tindakan ini tidak dapat dibatalkan.',
    "deleteFileConfirm": 'Apakah Anda yakin ingin menghapus file "{name}"? Tindakan ini tidak dapat dibatalkan.',
    "cancel": "Batal",
    "delete": "Hapus",
    "confirm": "Konfirmasi",
    "newFileTitle": "File baru",
    "newFolderTitle": "Folder baru",
    "untitled": "Tanpa judul.md",
    "newFolderName": "Folder baru"
  },
  "it": {
    "newFile": "Nuovo file (\u2318 N)",
    "newFolder": "Nuova cartella",
    "deleteFolder": "Elimina cartella",
    "deleteFile": "Elimina file",
    "focusMode": "Modalit\xE0 focus",
    "unfocus": "Rimuovi focus",
    "confirmDelete": "Conferma eliminazione",
    "deleteFolderConfirm": 'Sei sicuro di voler eliminare la cartella "{name}"? Questa azione non pu\xF2 essere annullata.',
    "deleteFileConfirm": 'Sei sicuro di voler eliminare il file "{name}"? Questa azione non pu\xF2 essere annullata.',
    "cancel": "Annulla",
    "delete": "Elimina",
    "confirm": "Conferma",
    "newFileTitle": "Nuovo file",
    "newFolderTitle": "Nuova cartella",
    "untitled": "Senza titolo.md",
    "newFolderName": "Nuova cartella"
  },
  "ja": {
    "newFile": "\u65B0\u898F\u30D5\u30A1\u30A4\u30EB (\u2318 N)",
    "newFolder": "\u65B0\u898F\u30D5\u30A9\u30EB\u30C0",
    "deleteFolder": "\u30D5\u30A9\u30EB\u30C0\u3092\u524A\u9664",
    "deleteFile": "\u30D5\u30A1\u30A4\u30EB\u3092\u524A\u9664",
    "focusMode": "\u30D5\u30A9\u30FC\u30AB\u30B9\u30E2\u30FC\u30C9",
    "unfocus": "\u30D5\u30A9\u30FC\u30AB\u30B9\u89E3\u9664",
    "confirmDelete": "\u524A\u9664\u306E\u78BA\u8A8D",
    "deleteFolderConfirm": '\u30D5\u30A9\u30EB\u30C0 "{name}" \u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F\u3053\u306E\u64CD\u4F5C\u306F\u5143\u306B\u623B\u305B\u307E\u305B\u3093\u3002',
    "deleteFileConfirm": '\u30D5\u30A1\u30A4\u30EB "{name}" \u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F\u3053\u306E\u64CD\u4F5C\u306F\u5143\u306B\u623B\u305B\u307E\u305B\u3093\u3002',
    "cancel": "\u30AD\u30E3\u30F3\u30BB\u30EB",
    "delete": "\u524A\u9664",
    "confirm": "\u78BA\u8A8D",
    "newFileTitle": "\u65B0\u898F\u30D5\u30A1\u30A4\u30EB",
    "newFolderTitle": "\u65B0\u898F\u30D5\u30A9\u30EB\u30C0",
    "untitled": "\u7121\u984C.md",
    "newFolderName": "\u65B0\u898F\u30D5\u30A9\u30EB\u30C0"
  },
  "km": {
    "newFile": "\u17AF\u1780\u179F\u17B6\u179A\u1790\u17D2\u1798\u17B8 (\u2318 N)",
    "newFolder": "\u1790\u178F\u1790\u17D2\u1798\u17B8",
    "deleteFolder": "\u179B\u17BB\u1794\u1790\u178F",
    "deleteFile": "\u179B\u17BB\u1794\u17AF\u1780\u179F\u17B6\u179A",
    "focusMode": "\u179A\u1794\u17C0\u1794\u1795\u17D2\u178F\u17C4\u178F\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
    "unfocus": "\u1794\u1789\u17D2\u1788\u1794\u17CB\u1780\u17B6\u179A\u1795\u17D2\u178F\u17C4\u178F\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
    "confirmDelete": "\u1794\u1789\u17D2\u1787\u17B6\u1780\u17CB\u1780\u17B6\u179A\u179B\u17BB\u1794",
    "deleteFolderConfirm": '\u178F\u17BE\u17A2\u17D2\u1793\u1780\u1794\u17D2\u179A\u17B6\u1780\u178A\u1790\u17B6\u1785\u1784\u17CB\u179B\u17BB\u1794\u1790\u178F "{name}" \u1798\u17C2\u1793\u1791\u17C1? \u179F\u1780\u1798\u17D2\u1798\u1797\u17B6\u1796\u1793\u17C1\u17C7\u1798\u17B7\u1793\u17A2\u17B6\u1785\u178F\u17D2\u179A\u17A1\u1794\u17CB\u179C\u17B7\u1789\u1794\u17B6\u1793\u1791\u17C1\u17D4',
    "deleteFileConfirm": '\u178F\u17BE\u17A2\u17D2\u1793\u1780\u1794\u17D2\u179A\u17B6\u1780\u178A\u1790\u17B6\u1785\u1784\u17CB\u179B\u17BB\u1794\u17AF\u1780\u179F\u17B6\u179A "{name}" \u1798\u17C2\u1793\u1791\u17C1? \u179F\u1780\u1798\u17D2\u1798\u1797\u17B6\u1796\u1793\u17C1\u17C7\u1798\u17B7\u1793\u17A2\u17B6\u1785\u178F\u17D2\u179A\u17A1\u1794\u17CB\u179C\u17B7\u1789\u1794\u17B6\u1793\u1791\u17C1\u17D4',
    "cancel": "\u1794\u17C4\u17C7\u1794\u1784\u17CB",
    "delete": "\u179B\u17BB\u1794",
    "confirm": "\u1794\u1789\u17D2\u1787\u17B6\u1780\u17CB",
    "newFileTitle": "\u17AF\u1780\u179F\u17B6\u179A\u1790\u17D2\u1798\u17B8",
    "newFolderTitle": "\u1790\u178F\u1790\u17D2\u1798\u17B8",
    "untitled": "\u1782\u17D2\u1798\u17B6\u1793\u1785\u17C6\u178E\u1784\u1787\u17BE\u1784.md",
    "newFolderName": "\u1790\u178F\u1790\u17D2\u1798\u17B8"
  },
  "ko": {
    "newFile": "\uC0C8 \uD30C\uC77C (\u2318 N)",
    "newFolder": "\uC0C8 \uD3F4\uB354",
    "deleteFolder": "\uD3F4\uB354 \uC0AD\uC81C",
    "deleteFile": "\uD30C\uC77C \uC0AD\uC81C",
    "focusMode": "\uD3EC\uCEE4\uC2A4 \uBAA8\uB4DC",
    "unfocus": "\uD3EC\uCEE4\uC2A4 \uD574\uC81C",
    "confirmDelete": "\uC0AD\uC81C \uD655\uC778",
    "deleteFolderConfirm": '"{name}" \uD3F4\uB354\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? \uC774 \uC791\uC5C5\uC740 \uCDE8\uC18C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.',
    "deleteFileConfirm": '"{name}" \uD30C\uC77C\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C? \uC774 \uC791\uC5C5\uC740 \uCDE8\uC18C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.',
    "cancel": "\uCDE8\uC18C",
    "delete": "\uC0AD\uC81C",
    "confirm": "\uD655\uC778",
    "newFileTitle": "\uC0C8 \uD30C\uC77C",
    "newFolderTitle": "\uC0C8 \uD3F4\uB354",
    "untitled": "\uC81C\uBAA9 \uC5C6\uC74C.md",
    "newFolderName": "\uC0C8 \uD3F4\uB354"
  },
  "lv": {
    "newFile": "Jauns fails (\u2318 N)",
    "newFolder": "Jauna mape",
    "deleteFolder": "Dz\u0113st mapi",
    "deleteFile": "Dz\u0113st failu",
    "focusMode": "Fokusa re\u017E\u012Bms",
    "unfocus": "No\u0146emt fokusu",
    "confirmDelete": "Apstiprin\u0101t dz\u0113\u0161anu",
    "deleteFolderConfirm": 'Vai tie\u0161\u0101m v\u0113laties dz\u0113st mapi "{name}"? \u0160o darb\u012Bbu nevar atsaukt.',
    "deleteFileConfirm": 'Vai tie\u0161\u0101m v\u0113laties dz\u0113st failu "{name}"? \u0160o darb\u012Bbu nevar atsaukt.',
    "cancel": "Atcelt",
    "delete": "Dz\u0113st",
    "confirm": "Apstiprin\u0101t",
    "newFileTitle": "Jauns fails",
    "newFolderTitle": "Jauna mape",
    "untitled": "Bez nosaukuma.md",
    "newFolderName": "Jauna mape"
  },
  "ms": {
    "newFile": "Fail baharu (\u2318 N)",
    "newFolder": "Folder baharu",
    "deleteFolder": "Padam folder",
    "deleteFile": "Padam fail",
    "focusMode": "Mod fokus",
    "unfocus": "Nyahfokus",
    "confirmDelete": "Sahkan pemadaman",
    "deleteFolderConfirm": 'Adakah anda pasti mahu memadam folder "{name}"? Tindakan ini tidak boleh dibatalkan.',
    "deleteFileConfirm": 'Adakah anda pasti mahu memadam fail "{name}"? Tindakan ini tidak boleh dibatalkan.',
    "cancel": "Batal",
    "delete": "Padam",
    "confirm": "Sahkan",
    "newFileTitle": "Fail baharu",
    "newFolderTitle": "Folder baharu",
    "untitled": "Tanpa tajuk.md",
    "newFolderName": "Folder baharu"
  },
  "ne": {
    "newFile": "\u0928\u092F\u093E\u0901 \u092B\u093E\u0907\u0932 (\u2318 N)",
    "newFolder": "\u0928\u092F\u093E\u0901 \u092B\u094B\u0932\u094D\u0921\u0930",
    "deleteFolder": "\u092B\u094B\u0932\u094D\u0921\u0930 \u092E\u0947\u091F\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
    "deleteFile": "\u092B\u093E\u0907\u0932 \u092E\u0947\u091F\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
    "focusMode": "\u092B\u094B\u0915\u0938 \u092E\u094B\u0921",
    "unfocus": "\u092B\u094B\u0915\u0938 \u0939\u091F\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
    "confirmDelete": "\u092E\u0947\u091F\u093E\u0909\u0928\u0947 \u092A\u0941\u0937\u094D\u091F\u093F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
    "deleteFolderConfirm": '\u0915\u0947 \u0924\u092A\u093E\u0908\u0902 \u0928\u093F\u0936\u094D\u091A\u093F\u0924 \u0939\u0941\u0928\u0941\u0939\u0941\u0928\u094D\u091B \u0915\u093F \u0924\u092A\u093E\u0908\u0902 \u092B\u094B\u0932\u094D\u0921\u0930 "{name}" \u092E\u0947\u091F\u093E\u0909\u0928 \u091A\u093E\u0939\u0928\u0941\u0939\u0941\u0928\u094D\u091B? \u092F\u094B \u0915\u093E\u0930\u094D\u092F \u092A\u0942\u0930\u094D\u0935\u0935\u0924 \u0917\u0930\u094D\u0928 \u0938\u0915\u093F\u0901\u0926\u0948\u0928\u0964',
    "deleteFileConfirm": '\u0915\u0947 \u0924\u092A\u093E\u0908\u0902 \u0928\u093F\u0936\u094D\u091A\u093F\u0924 \u0939\u0941\u0928\u0941\u0939\u0941\u0928\u094D\u091B \u0915\u093F \u0924\u092A\u093E\u0908\u0902 \u092B\u093E\u0907\u0932 "{name}" \u092E\u0947\u091F\u093E\u0909\u0928 \u091A\u093E\u0939\u0928\u0941\u0939\u0941\u0928\u094D\u091B? \u092F\u094B \u0915\u093E\u0930\u094D\u092F \u092A\u0942\u0930\u094D\u0935\u0935\u0924 \u0917\u0930\u094D\u0928 \u0938\u0915\u093F\u0901\u0926\u0948\u0928\u0964',
    "cancel": "\u0930\u0926\u094D\u0926 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
    "delete": "\u092E\u0947\u091F\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
    "confirm": "\u092A\u0941\u0937\u094D\u091F\u093F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
    "newFileTitle": "\u0928\u092F\u093E\u0901 \u092B\u093E\u0907\u0932",
    "newFolderTitle": "\u0928\u092F\u093E\u0901 \u092B\u094B\u0932\u094D\u0921\u0930",
    "untitled": "\u0936\u0940\u0930\u094D\u0937\u0915\u0935\u093F\u0939\u0940\u0928.md",
    "newFolderName": "\u0928\u092F\u093E\u0901 \u092B\u094B\u0932\u094D\u0921\u0930"
  },
  "nl": {
    "newFile": "Nieuw bestand (\u2318 N)",
    "newFolder": "Nieuwe map",
    "deleteFolder": "Map verwijderen",
    "deleteFile": "Bestand verwijderen",
    "focusMode": "Focusmodus",
    "unfocus": "Focus opheffen",
    "confirmDelete": "Verwijdering bevestigen",
    "deleteFolderConfirm": 'Weet u zeker dat u de map "{name}" wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.',
    "deleteFileConfirm": 'Weet u zeker dat u het bestand "{name}" wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.',
    "cancel": "Annuleren",
    "delete": "Verwijderen",
    "confirm": "Bevestigen",
    "newFileTitle": "Nieuw bestand",
    "newFolderTitle": "Nieuwe map",
    "untitled": "Naamloos.md",
    "newFolderName": "Nieuwe map"
  },
  "no": {
    "newFile": "Ny fil (\u2318 N)",
    "newFolder": "Ny mappe",
    "deleteFolder": "Slett mappe",
    "deleteFile": "Slett fil",
    "focusMode": "Fokusmodus",
    "unfocus": "Fjern fokus",
    "confirmDelete": "Bekreft sletting",
    "deleteFolderConfirm": 'Er du sikker p\xE5 at du vil slette mappen "{name}"? Denne handlingen kan ikke angres.',
    "deleteFileConfirm": 'Er du sikker p\xE5 at du vil slette filen "{name}"? Denne handlingen kan ikke angres.',
    "cancel": "Avbryt",
    "delete": "Slett",
    "confirm": "Bekreft",
    "newFileTitle": "Ny fil",
    "newFolderTitle": "Ny mappe",
    "untitled": "Uten tittel.md",
    "newFolderName": "Ny mappe"
  },
  "pl": {
    "newFile": "Nowy plik (\u2318 N)",
    "newFolder": "Nowy folder",
    "deleteFolder": "Usu\u0144 folder",
    "deleteFile": "Usu\u0144 plik",
    "focusMode": "Tryb skupienia",
    "unfocus": "Wy\u0142\u0105cz skupienie",
    "confirmDelete": "Potwierd\u017A usuni\u0119cie",
    "deleteFolderConfirm": 'Czy na pewno chcesz usun\u0105\u0107 folder "{name}"? Ta czynno\u015B\u0107 jest nieodwracalna.',
    "deleteFileConfirm": 'Czy na pewno chcesz usun\u0105\u0107 plik "{name}"? Ta czynno\u015B\u0107 jest nieodwracalna.',
    "cancel": "Anuluj",
    "delete": "Usu\u0144",
    "confirm": "Potwierd\u017A",
    "newFileTitle": "Nowy plik",
    "newFolderTitle": "Nowy folder",
    "untitled": "Bez tytu\u0142u.md",
    "newFolderName": "Nowy folder"
  },
  "pt": {
    "newFile": "Novo arquivo (\u2318 N)",
    "newFolder": "Nova pasta",
    "deleteFolder": "Excluir pasta",
    "deleteFile": "Excluir arquivo",
    "focusMode": "Modo de foco",
    "unfocus": "Remover foco",
    "confirmDelete": "Confirmar exclus\xE3o",
    "deleteFolderConfirm": 'Tem certeza de que deseja excluir a pasta "{name}"? Esta a\xE7\xE3o n\xE3o pode ser desfeita.',
    "deleteFileConfirm": 'Tem certeza de que deseja excluir o arquivo "{name}"? Esta a\xE7\xE3o n\xE3o pode ser desfeita.',
    "cancel": "Cancelar",
    "delete": "Excluir",
    "confirm": "Confirmar",
    "newFileTitle": "Novo arquivo",
    "newFolderTitle": "Nova pasta",
    "untitled": "Sem t\xEDtulo.md",
    "newFolderName": "Nova pasta"
  },
  "pt-br": {
    "newFile": "Novo arquivo (\u2318 N)",
    "newFolder": "Nova pasta",
    "deleteFolder": "Excluir pasta",
    "deleteFile": "Excluir arquivo",
    "focusMode": "Modo de foco",
    "unfocus": "Remover foco",
    "confirmDelete": "Confirmar exclus\xE3o",
    "deleteFolderConfirm": 'Tem certeza de que deseja excluir a pasta "{name}"? Esta a\xE7\xE3o n\xE3o pode ser desfeita.',
    "deleteFileConfirm": 'Tem certeza de que deseja excluir o arquivo "{name}"? Esta a\xE7\xE3o n\xE3o pode ser desfeita.',
    "cancel": "Cancelar",
    "delete": "Excluir",
    "confirm": "Confirmar",
    "newFileTitle": "Novo arquivo",
    "newFolderTitle": "Nova pasta",
    "untitled": "Sem t\xEDtulo.md",
    "newFolderName": "Nova pasta"
  },
  "ro": {
    "newFile": "Fi\u0219ier nou (\u2318 N)",
    "newFolder": "Dosar nou",
    "deleteFolder": "\u0218terge dosarul",
    "deleteFile": "\u0218terge fi\u0219ierul",
    "focusMode": "Mod concentrare",
    "unfocus": "Anulare concentrare",
    "confirmDelete": "Confirm\u0103 \u0219tergerea",
    "deleteFolderConfirm": 'Sigur dori\u021Bi s\u0103 \u0219terge\u021Bi dosarul "{name}"? Aceast\u0103 ac\u021Biune nu poate fi anulat\u0103.',
    "deleteFileConfirm": 'Sigur dori\u021Bi s\u0103 \u0219terge\u021Bi fi\u0219ierul "{name}"? Aceast\u0103 ac\u021Biune nu poate fi anulat\u0103.',
    "cancel": "Anulare",
    "delete": "\u0218tergere",
    "confirm": "Confirmare",
    "newFileTitle": "Fi\u0219ier nou",
    "newFolderTitle": "Dosar nou",
    "untitled": "F\u0103r\u0103 titlu.md",
    "newFolderName": "Dosar nou"
  },
  "ru": {
    "newFile": "\u041D\u043E\u0432\u044B\u0439 \u0444\u0430\u0439\u043B (\u2318 N)",
    "newFolder": "\u041D\u043E\u0432\u0430\u044F \u043F\u0430\u043F\u043A\u0430",
    "deleteFolder": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0430\u043F\u043A\u0443",
    "deleteFile": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u0430\u0439\u043B",
    "focusMode": "\u0420\u0435\u0436\u0438\u043C \u0444\u043E\u043A\u0443\u0441\u0430",
    "unfocus": "\u0421\u043D\u044F\u0442\u044C \u0444\u043E\u043A\u0443\u0441",
    "confirmDelete": "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435",
    "deleteFolderConfirm": '\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0430\u043F\u043A\u0443 "{name}"? \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.',
    "deleteFileConfirm": '\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u0430\u0439\u043B "{name}"? \u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C.',
    "cancel": "\u041E\u0442\u043C\u0435\u043D\u0430",
    "delete": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
    "confirm": "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C",
    "newFileTitle": "\u041D\u043E\u0432\u044B\u0439 \u0444\u0430\u0439\u043B",
    "newFolderTitle": "\u041D\u043E\u0432\u0430\u044F \u043F\u0430\u043F\u043A\u0430",
    "untitled": "\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F.md",
    "newFolderName": "\u041D\u043E\u0432\u0430\u044F \u043F\u0430\u043F\u043A\u0430"
  },
  "sq": {
    "newFile": "Skedar i ri (\u2318 N)",
    "newFolder": "Dosje e re",
    "deleteFolder": "Fshi dosjen",
    "deleteFile": "Fshi skedarin",
    "focusMode": "Modaliteti i fokusit",
    "unfocus": "Hiq fokusin",
    "confirmDelete": "Konfirmo fshirjen",
    "deleteFolderConfirm": 'Jeni t\xEB sigurt q\xEB doni t\xEB fshini dosjen "{name}"? Ky veprim nuk mund t\xEB zhb\xEBhet.',
    "deleteFileConfirm": 'Jeni t\xEB sigurt q\xEB doni t\xEB fshini skedarin "{name}"? Ky veprim nuk mund t\xEB zhb\xEBhet.',
    "cancel": "Anulo",
    "delete": "Fshi",
    "confirm": "Konfirmo",
    "newFileTitle": "Skedar i ri",
    "newFolderTitle": "Dosje e re",
    "untitled": "Pa titull.md",
    "newFolderName": "Dosje e re"
  },
  "th": {
    "newFile": "\u0E44\u0E1F\u0E25\u0E4C\u0E43\u0E2B\u0E21\u0E48 (\u2318 N)",
    "newFolder": "\u0E42\u0E1F\u0E25\u0E40\u0E14\u0E2D\u0E23\u0E4C\u0E43\u0E2B\u0E21\u0E48",
    "deleteFolder": "\u0E25\u0E1A\u0E42\u0E1F\u0E25\u0E40\u0E14\u0E2D\u0E23\u0E4C",
    "deleteFile": "\u0E25\u0E1A\u0E44\u0E1F\u0E25\u0E4C",
    "focusMode": "\u0E42\u0E2B\u0E21\u0E14\u0E42\u0E1F\u0E01\u0E31\u0E2A",
    "unfocus": "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E42\u0E1F\u0E01\u0E31\u0E2A",
    "confirmDelete": "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E1A",
    "deleteFolderConfirm": '\u0E04\u0E38\u0E13\u0E41\u0E19\u0E48\u0E43\u0E08\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48\u0E27\u0E48\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E42\u0E1F\u0E25\u0E40\u0E14\u0E2D\u0E23\u0E4C "{name}" \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E44\u0E14\u0E49',
    "deleteFileConfirm": '\u0E04\u0E38\u0E13\u0E41\u0E19\u0E48\u0E43\u0E08\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48\u0E27\u0E48\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E44\u0E1F\u0E25\u0E4C "{name}" \u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E44\u0E14\u0E49',
    "cancel": "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
    "delete": "\u0E25\u0E1A",
    "confirm": "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",
    "newFileTitle": "\u0E44\u0E1F\u0E25\u0E4C\u0E43\u0E2B\u0E21\u0E48",
    "newFolderTitle": "\u0E42\u0E1F\u0E25\u0E40\u0E14\u0E2D\u0E23\u0E4C\u0E43\u0E2B\u0E21\u0E48",
    "untitled": "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E0A\u0E37\u0E48\u0E2D.md",
    "newFolderName": "\u0E42\u0E1F\u0E25\u0E40\u0E14\u0E2D\u0E23\u0E4C\u0E43\u0E2B\u0E21\u0E48"
  },
  "tr": {
    "newFile": "Yeni dosya (\u2318 N)",
    "newFolder": "Yeni klas\xF6r",
    "deleteFolder": "Klas\xF6r\xFC sil",
    "deleteFile": "Dosyay\u0131 sil",
    "focusMode": "Odaklanma modu",
    "unfocus": "Oda\u011F\u0131 kald\u0131r",
    "confirmDelete": "Silmeyi onayla",
    "deleteFolderConfirm": '"{name}" klas\xF6r\xFCn\xFC silmek istedi\u011Finizden emin misiniz? Bu i\u015Flem geri al\u0131namaz.',
    "deleteFileConfirm": '"{name}" dosyas\u0131n\u0131 silmek istedi\u011Finizden emin misiniz? Bu i\u015Flem geri al\u0131namaz.',
    "cancel": "\u0130ptal",
    "delete": "Sil",
    "confirm": "Onayla",
    "newFileTitle": "Yeni dosya",
    "newFolderTitle": "Yeni klas\xF6r",
    "untitled": "Ba\u015Fl\u0131ks\u0131z.md",
    "newFolderName": "Yeni klas\xF6r"
  },
  "uk": {
    "newFile": "\u041D\u043E\u0432\u0438\u0439 \u0444\u0430\u0439\u043B (\u2318 N)",
    "newFolder": "\u041D\u043E\u0432\u0430 \u043F\u0430\u043F\u043A\u0430",
    "deleteFolder": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043F\u0430\u043F\u043A\u0443",
    "deleteFile": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0444\u0430\u0439\u043B",
    "focusMode": "\u0420\u0435\u0436\u0438\u043C \u0444\u043E\u043A\u0443\u0441\u0443",
    "unfocus": "\u0417\u043D\u044F\u0442\u0438 \u0444\u043E\u043A\u0443\u0441",
    "confirmDelete": "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F",
    "deleteFolderConfirm": '\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043F\u0430\u043F\u043A\u0443 "{name}"? \u0426\u044E \u0434\u0456\u044E \u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u0441\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438.',
    "deleteFileConfirm": '\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0444\u0430\u0439\u043B "{name}"? \u0426\u044E \u0434\u0456\u044E \u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u0441\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438.',
    "cancel": "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
    "delete": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
    "confirm": "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438",
    "newFileTitle": "\u041D\u043E\u0432\u0438\u0439 \u0444\u0430\u0439\u043B",
    "newFolderTitle": "\u041D\u043E\u0432\u0430 \u043F\u0430\u043F\u043A\u0430",
    "untitled": "\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0438.md",
    "newFolderName": "\u041D\u043E\u0432\u0430 \u043F\u0430\u043F\u043A\u0430"
  },
  "uz": {
    "newFile": "Yangi fayl (\u2318 N)",
    "newFolder": "Yangi papka",
    "deleteFolder": "Papkani o'chirish",
    "deleteFile": "Faylni o'chirish",
    "focusMode": "Fokus rejimi",
    "unfocus": "Fokusni olib tashlash",
    "confirmDelete": "O'chirishni tasdiqlash",
    "deleteFolderConfirm": `"{name}" papkasini o'chirishga ishonchingiz komilmi? Bu amalni bekor qilib bo'lmaydi.`,
    "deleteFileConfirm": `"{name}" faylini o'chirishga ishonchingiz komilmi? Bu amalni bekor qilib bo'lmaydi.`,
    "cancel": "Bekor qilish",
    "delete": "O'chirish",
    "confirm": "Tasdiqlash",
    "newFileTitle": "Yangi fayl",
    "newFolderTitle": "Yangi papka",
    "untitled": "Nomsiz.md",
    "newFolderName": "Yangi papka"
  },
  "vi": {
    "newFile": "T\u1EC7p m\u1EDBi (\u2318 N)",
    "newFolder": "Th\u01B0 m\u1EE5c m\u1EDBi",
    "deleteFolder": "X\xF3a th\u01B0 m\u1EE5c",
    "deleteFile": "X\xF3a t\u1EC7p",
    "focusMode": "Ch\u1EBF \u0111\u1ED9 t\u1EADp trung",
    "unfocus": "B\u1ECF t\u1EADp trung",
    "confirmDelete": "X\xE1c nh\u1EADn x\xF3a",
    "deleteFolderConfirm": 'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a th\u01B0 m\u1EE5c "{name}"? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.',
    "deleteFileConfirm": 'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a t\u1EC7p "{name}"? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c.',
    "cancel": "H\u1EE7y",
    "delete": "X\xF3a",
    "confirm": "X\xE1c nh\u1EADn",
    "newFileTitle": "T\u1EC7p m\u1EDBi",
    "newFolderTitle": "Th\u01B0 m\u1EE5c m\u1EDBi",
    "untitled": "Kh\xF4ng c\xF3 ti\xEAu \u0111\u1EC1.md",
    "newFolderName": "Th\u01B0 m\u1EE5c m\u1EDBi"
  }
};
function t(key, locale = "en") {
  const normalizedLocale = locale.toLowerCase().replace("_", "-");
  if (translations[normalizedLocale] && translations[normalizedLocale][key]) {
    return translations[normalizedLocale][key];
  }
  const langPrefix = normalizedLocale.split("-")[0];
  for (const availableLocale in translations) {
    if (availableLocale.startsWith(langPrefix) && translations[availableLocale][key]) {
      return translations[availableLocale][key];
    }
  }
  return translations["en"][key] || key;
}
var InputModal = class extends import_obsidian.Modal {
  constructor(app, title, placeholder, onSubmit, locale = "en") {
    super(app);
    this.result = "";
    this.title = title;
    this.placeholder = placeholder;
    this.onSubmit = onSubmit;
    this.locale = locale;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h2", { text: this.title });
    const inputEl = contentEl.createEl("input", {
      type: "text",
      placeholder: this.placeholder,
      value: this.placeholder
    });
    inputEl.addClass("floating-modal-input");
    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.result = inputEl.value;
        this.close();
        this.onSubmit(this.result);
      }
    });
    const buttonContainer = contentEl.createDiv();
    buttonContainer.addClass("floating-button-container");
    const cancelBtn = buttonContainer.createEl("button", { text: t("cancel", this.locale) });
    cancelBtn.addEventListener("click", () => {
      this.close();
    });
    const submitBtn = buttonContainer.createEl("button", { text: t("confirm", this.locale), cls: "mod-cta" });
    submitBtn.addEventListener("click", () => {
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
};
var FloatingExplorerPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.leafStates = /* @__PURE__ */ new Map();
    this.locale = "en";
  }
  // SVG helper functions
  createFolderSvgIcon(container, width = "16", height = "16") {
    const svg = container.createSvg("svg", {
      attr: {
        xmlns: "http://www.w3.org/2000/svg",
        width,
        height,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    });
    svg.createSvg("path", {
      attr: {
        d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
      }
    });
  }
  createFileSvgIcon(container) {
    const svg = container.createSvg("svg", {
      attr: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2"
      }
    });
    svg.createSvg("path", {
      attr: {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      }
    });
    svg.createSvg("polyline", {
      attr: {
        points: "14 2 14 8 20 8"
      }
    });
  }
  onload() {
    var _a;
    console.debug("Loading Floating Explorer Plugin");
    const vaultLang = this.app.vault.getConfig("language");
    const localStorageLang = this.app.loadLocalStorage("language");
    const momentLang = (_a = window.moment) == null ? void 0 : _a.locale();
    this.locale = vaultLang || localStorageLang || momentLang || "en";
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
    console.debug("Unloading Floating Explorer Plugin");
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
    this.createFolderSvgIcon(floatingIcon, "20", "20");
    const folderPanel = document.createElement("div");
    folderPanel.addClass("floating-folder-panel");
    folderPanel.addClass("is-hidden");
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
    state.folderPanel.removeClass("is-hidden");
    state.folderPanel.addClass("is-visible");
  }
  scheduleHidePanel(leafId) {
    const state = this.leafStates.get(leafId);
    if (!state)
      return;
    state.hideTimeout = setTimeout(() => {
      if (state.folderPanel) {
        state.folderPanel.removeClass("is-visible");
        state.folderPanel.addClass("is-hidden");
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
      const iconSpan = unfocusBar.createSpan({ cls: "unfocus-icon" });
      iconSpan.textContent = "\u25C0";
      const textSpan = unfocusBar.createSpan({ cls: "unfocus-text" });
      textSpan.textContent = `Focused: ${startFolder.name}`;
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
        folderItem.setCssStyles({ "padding-left": level * 16 + "px" });
        const folderHeader = folderItem.createDiv("folder-header");
        const toggleIcon = folderHeader.createSpan("folder-toggle");
        const isExpanded = state.expandedFolders.has(child.path);
        toggleIcon.textContent = isExpanded ? "\u25BC" : "\u25B6";
        const folderIcon = folderHeader.createSpan("folder-icon");
        this.createFolderSvgIcon(folderIcon);
        const folderName = folderHeader.createSpan("folder-name");
        folderName.textContent = child.name;
        const childContainer = folderItem.createDiv("folder-children");
        if (isExpanded) {
          childContainer.addClass("is-expanded");
        } else {
          childContainer.addClass("is-collapsed");
        }
        this.renderFolder(child, childContainer, level + 1, leafId);
        folderHeader.addEventListener("click", (e) => {
          if (e.button !== 0)
            return;
          const nowExpanded = state.expandedFolders.has(child.path);
          if (nowExpanded) {
            state.expandedFolders.delete(child.path);
            childContainer.removeClass("is-expanded");
            childContainer.addClass("is-collapsed");
            toggleIcon.textContent = "\u25B6";
          } else {
            state.expandedFolders.add(child.path);
            childContainer.removeClass("is-collapsed");
            childContainer.addClass("is-expanded");
            toggleIcon.textContent = "\u25BC";
          }
        });
        folderHeader.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          e.stopPropagation();
          state.folderPanel.querySelectorAll(".folder-context-menu").forEach((menu2) => menu2.remove());
          const menu = document.createElement("div");
          menu.addClass("folder-context-menu");
          const panelRect = state.folderPanel.getBoundingClientRect();
          const relativeX = e.clientX - panelRect.left;
          const relativeY = e.clientY - panelRect.top;
          menu.setCssStyles({ left: relativeX + "px", top: relativeY + "px" });
          const isFocused = state.focusedFolder === child.path;
          const newFileItem = menu.createDiv("context-menu-item");
          newFileItem.textContent = t("newFile", this.locale);
          newFileItem.addEventListener("click", (clickEvent) => {
            clickEvent.stopPropagation();
            menu.remove();
            new InputModal(this.app, t("newFileTitle", this.locale), t("untitled", this.locale), async (fileName) => {
              if (fileName) {
                let filePath = child.path;
                if (filePath === "/") {
                  filePath = fileName;
                } else {
                  filePath = child.path + "/" + fileName;
                }
                try {
                  const newFile = await this.app.vault.create(filePath, "");
                  const leaf = this.app.workspace.getLeaf();
                  await leaf.openFile(newFile);
                  state.expandedFolders.add(child.path);
                  this.buildFolderTree(leafId);
                } catch (error) {
                  console.error("\u521B\u5EFA\u6587\u4EF6\u5931\u8D25:", error);
                  new import_obsidian.Modal(this.app).open();
                }
              }
            }).open();
          });
          const newFolderItem = menu.createDiv("context-menu-item");
          newFolderItem.textContent = t("newFolder", this.locale);
          newFolderItem.addEventListener("click", (clickEvent) => {
            clickEvent.stopPropagation();
            menu.remove();
            new InputModal(this.app, t("newFolderTitle", this.locale), t("newFolderName", this.locale), async (folderName2) => {
              if (folderName2) {
                let folderPath = child.path;
                if (folderPath === "/") {
                  folderPath = folderName2;
                } else {
                  folderPath = child.path + "/" + folderName2;
                }
                try {
                  await this.app.vault.createFolder(folderPath);
                  state.expandedFolders.add(child.path);
                  this.buildFolderTree(leafId);
                } catch (error) {
                  console.error("\u521B\u5EFA\u6587\u4EF6\u5939\u5931\u8D25:", error);
                }
              }
            }).open();
          });
          const deleteItem = menu.createDiv("context-menu-item");
          deleteItem.textContent = t("deleteFolder", this.locale);
          deleteItem.addClass("context-menu-item-delete");
          deleteItem.addEventListener("click", (clickEvent) => {
            clickEvent.stopPropagation();
            menu.remove();
            const confirmModal = new import_obsidian.Modal(this.app);
            confirmModal.titleEl.setText(t("confirmDelete", this.locale));
            confirmModal.contentEl.createEl("p", {
              text: t("deleteFolderConfirm", this.locale).replace("{name}", child.name)
            });
            const buttonContainer = confirmModal.contentEl.createDiv();
            buttonContainer.addClass("floating-button-container-spaced");
            const cancelBtn = buttonContainer.createEl("button", { text: t("cancel", this.locale) });
            cancelBtn.addEventListener("click", () => {
              confirmModal.close();
            });
            const deleteBtn = buttonContainer.createEl("button", { text: t("delete", this.locale), cls: "mod-warning" });
            deleteBtn.addEventListener("click", () => {
              confirmModal.close();
              try {
                this.app.fileManager.trashFile(child);
                this.buildFolderTree(leafId);
              } catch (error) {
                console.error("\u5220\u9664\u6587\u4EF6\u5939\u5931\u8D25:", error);
              }
            });
            confirmModal.open();
          });
          const focusMenuItem = menu.createDiv("context-menu-item");
          focusMenuItem.textContent = isFocused ? t("unfocus", this.locale) : t("focusMode", this.locale);
          focusMenuItem.addEventListener("click", () => {
            if (isFocused) {
              state.focusedFolder = null;
            } else {
              state.focusedFolder = child.path;
            }
            this.buildFolderTree(leafId);
            menu.remove();
          });
          const closeMenu = (event) => {
            if (!menu.contains(event.target)) {
              menu.remove();
              document.removeEventListener("click", closeMenu);
              state.folderPanel.removeEventListener("click", closeMenu);
            }
          };
          setTimeout(() => {
            document.addEventListener("click", closeMenu);
            state.folderPanel.addEventListener("click", closeMenu);
          }, 10);
          state.folderPanel.appendChild(menu);
        });
      } else if (child instanceof import_obsidian.TFile) {
        const fileItem = container.createDiv("file-item");
        fileItem.setCssStyles({ "padding-left": (level + 1) * 16 + "px" });
        const activeFile = this.app.workspace.getActiveFile();
        if (activeFile && activeFile.path === child.path) {
          fileItem.addClass("is-active");
        }
        const fileIcon = fileItem.createSpan("file-icon");
        this.createFileSvgIcon(fileIcon);
        const fileName = fileItem.createSpan("file-name");
        fileName.textContent = child.name;
        fileItem.addEventListener("click", () => {
          const leaf = this.app.workspace.getLeaf();
          leaf.openFile(child);
          if (state.folderPanel) {
            state.folderPanel.removeClass("is-visible");
            state.folderPanel.addClass("is-hidden");
          }
        });
        fileItem.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          e.stopPropagation();
          state.folderPanel.querySelectorAll(".folder-context-menu").forEach((menu2) => menu2.remove());
          const menu = document.createElement("div");
          menu.addClass("folder-context-menu");
          const panelRect = state.folderPanel.getBoundingClientRect();
          const relativeX = e.clientX - panelRect.left;
          const relativeY = e.clientY - panelRect.top;
          menu.setCssStyles({
            left: relativeX + "px",
            top: relativeY + "px"
          });
          const parentFolder = child.parent;
          const newFileItem = menu.createDiv("context-menu-item");
          newFileItem.textContent = t("newFile", this.locale);
          newFileItem.addEventListener("click", (clickEvent) => {
            clickEvent.stopPropagation();
            menu.remove();
            new InputModal(this.app, t("newFileTitle", this.locale), t("untitled", this.locale), async (fileName2) => {
              if (fileName2 && parentFolder) {
                let filePath = parentFolder.path;
                if (filePath === "/") {
                  filePath = fileName2;
                } else {
                  filePath = parentFolder.path + "/" + fileName2;
                }
                try {
                  const newFile = await this.app.vault.create(filePath, "");
                  const leaf = this.app.workspace.getLeaf();
                  await leaf.openFile(newFile);
                  state.expandedFolders.add(parentFolder.path);
                  this.buildFolderTree(leafId);
                } catch (error) {
                  console.error("\u521B\u5EFA\u6587\u4EF6\u5931\u8D25:", error);
                }
              }
            }).open();
          });
          const newFolderItem = menu.createDiv("context-menu-item");
          newFolderItem.textContent = t("newFolder", this.locale);
          newFolderItem.addEventListener("click", (clickEvent) => {
            clickEvent.stopPropagation();
            menu.remove();
            new InputModal(this.app, t("newFolderTitle", this.locale), t("newFolderName", this.locale), async (folderName) => {
              if (folderName && parentFolder) {
                let folderPath = parentFolder.path;
                if (folderPath === "/") {
                  folderPath = folderName;
                } else {
                  folderPath = parentFolder.path + "/" + folderName;
                }
                try {
                  await this.app.vault.createFolder(folderPath);
                  state.expandedFolders.add(parentFolder.path);
                  this.buildFolderTree(leafId);
                } catch (error) {
                  console.error("\u521B\u5EFA\u6587\u4EF6\u5939\u5931\u8D25:", error);
                }
              }
            }).open();
          });
          const deleteItem = menu.createDiv("context-menu-item");
          deleteItem.textContent = t("deleteFile", this.locale);
          deleteItem.addClass("context-menu-item-delete");
          deleteItem.addEventListener("click", (clickEvent) => {
            clickEvent.stopPropagation();
            menu.remove();
            const confirmModal = new import_obsidian.Modal(this.app);
            confirmModal.titleEl.setText(t("confirmDelete", this.locale));
            confirmModal.contentEl.createEl("p", {
              text: t("deleteFileConfirm", this.locale).replace("{name}", child.name)
            });
            const buttonContainer = confirmModal.contentEl.createDiv();
            buttonContainer.addClass("floating-button-container-spaced");
            const cancelBtn = buttonContainer.createEl("button", { text: t("cancel", this.locale) });
            cancelBtn.addEventListener("click", () => {
              confirmModal.close();
            });
            const deleteBtn = buttonContainer.createEl("button", { text: t("delete", this.locale), cls: "mod-warning" });
            deleteBtn.addEventListener("click", () => {
              confirmModal.close();
              try {
                this.app.fileManager.trashFile(child);
                this.buildFolderTree(leafId);
              } catch (error) {
                console.error("\u5220\u9664\u6587\u4EF6\u5931\u8D25:", error);
              }
            });
            confirmModal.open();
          });
          const closeMenu = (event) => {
            if (!menu.contains(event.target)) {
              menu.remove();
              document.removeEventListener("click", closeMenu);
              state.folderPanel.removeEventListener("click", closeMenu);
            }
          };
          setTimeout(() => {
            document.addEventListener("click", closeMenu);
            state.folderPanel.addEventListener("click", closeMenu);
          }, 10);
          state.folderPanel.appendChild(menu);
        });
      }
    });
  }
};
