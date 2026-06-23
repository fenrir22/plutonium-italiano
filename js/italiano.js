const MODULE_ID = "plutonium-italiano";
const MODULE_PATH = `modules/${MODULE_ID}`;

const UI_TRANS = {
	"Filter": "Filtro", "Reset": "Reimposta", "Import": "Importa",
	"Export": "Esporta", "Save": "Salva", "Cancel": "Annulla",
	"Delete": "Elimina", "Close": "Chiudi", "Apply": "Applica",
	"Remove": "Rimuovi", "Add": "Aggiungi", "Edit": "Modifica",
	"Update": "Aggiorna", "Reload": "Ricarica", "Run": "Esegui",
	"Move": "Sposta", "Load": "Carica", "New": "Nuovo",
	"Name": "Nome", "Type": "Tipo", "Source": "Sorgente",
	"Tags": "Tag", "Level": "Livello", "CR": "GS",
	"None": "Nessuno", "All": "Tutti", "Any": "Qualsiasi",
	"Yes": "Sì", "No": "No", "Clear": "Pulisci",
	"Search": "Cerca", "Settings": "Impostazioni",
	"Configure": "Configura", "Configuration": "Configurazione",
	"Select": "Seleziona", "Select All": "Seleziona Tutto",
	"Deselect All": "Deseleziona Tutto", "Invert Selection": "Inverti Selezione",

	"Feeling Lucky?": "Mi Senti Fortunato?",
	"Find items...": "Cerca oggetti...",
	"Find spells...": "Cerca incantesimi...",
	"Find packages...": "Cerca pacchetti...",
	"Find compendium...": "Cerca compendi...",

	"Settings": "Impostazioni",
	"Importing": "Importazione",
	"Import Complete": "Importazione Completata",
	"Loading data...": "Caricamento dati...",
	"Loading...": "Caricamento...",
	"No results found.": "Nessun risultato trovato.",
	"Please wait...": "Attendere prego...",
	"Are you sure?": "Sei sicuro?",

	"Choose Importer": "Scegli Importatore",
	"Content Blocklist": "Blocco Contenuti",
	"Source Selection": "Selezione Fonti",
	"Data Sources": "Fonti Dati",
	"World Data Source Selector": "Selettore Fonti Mondo",
	"World Content Blocklist": "Blocco Contenuti Mondo",

	"Bestiary": "Bestiario", "Spells": "Incantesimi",
	"Items": "Oggetti", "Races": "Razze", "Classes": "Classi",
	"Backgrounds": "Background", "Feats": "Talenti",
	"Actions": "Azioni", "Creatures": "Creature",
	"Languages": "Lingue", "Tables": "Tabelle",
	"Vehicles": "Veicoli", "Objects": "Oggetti",
	"Psionics": "Psioniche", "Deities": "Divinità",
	"Optional Features": "Opzioni",
	"Variant Rules": "Regole Varianti",
	"Conditions/Diseases": "Condizioni/Malattie",
	"Cults/Boons": "Culti/Benefici",
	"Rewards": "Ricompense", "Recipes": "Ricette",
	"Traps/Hazards": "Trappole/Pericoli",
	"Decks": "Mazzi", "Maps": "Mappe",
	"Character Options": "Opzioni Personaggio",
	"Text": "Testo", "UI": "Interfaccia",
};

class PlutoniumItaliano {
	static _MOD_DATA_URL_RE = /^https:\/\/5e\.tools\/data\//;
	static _timer = null;

	static init () {
		Hooks.on("ready", () => {
			if (!globalThis.DataUtil) return;

			PlutoniumItaliano._patchDataLoading();

			// Hook direttamente sul render dell'importatore
			Hooks.on("renderChooseImporter", () => PlutoniumItaliano._translate());
			Hooks.on("renderApplication", () => PlutoniumItaliano._delayedTranslate());
			Hooks.on("renderDialog", () => PlutoniumItaliano._delayedTranslate());
			Hooks.on("renderSettingsConfig", () => PlutoniumItaliano._delayedTranslate());

			// MutationObserver per UI dinamica
			const obs = new MutationObserver(() => PlutoniumItaliano._delayedTranslate());
			obs.observe(document.body, { childList: true, subtree: true });

			// Traduzione iniziale
			setTimeout(() => PlutoniumItaliano._translate(), 500);

			console.log(`${MODULE_ID} | Pronto`);
		});
	}

	static _delayedTranslate () {
		if (PlutoniumItaliano._timer) clearTimeout(PlutoniumItaliano._timer);
		PlutoniumItaliano._timer = setTimeout(PlutoniumItaliano._translate.bind(PlutoniumItaliano), 200);
	}

	static _patchDataLoading () {
		const _orig = DataUtil.loadJSON;
		DataUtil.loadJSON = function (url, ...args) {
			if (typeof url === "string" && PlutoniumItaliano._MOD_DATA_URL_RE.test(url))
				url = url.replace(PlutoniumItaliano._MOD_DATA_URL_RE, `${MODULE_PATH}/data/`);
			return _orig.call(this, url, ...args);
		};
		if (DataUtil.loadRawJSON) {
			const _origR = DataUtil.loadRawJSON;
			DataUtil.loadRawJSON = function (url, ...args) {
				if (typeof url === "string" && PlutoniumItaliano._MOD_DATA_URL_RE.test(url))
					url = url.replace(PlutoniumItaliano._MOD_DATA_URL_RE, `${MODULE_PATH}/data/`);
				return _origR.call(this, url, ...args);
			};
		}
	}

	static _translate () {
		// Traduce nodi di testo diretti in tutto il documento
		const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
		let node;
		while (node = walker.nextNode()) {
			const txt = node.textContent.trim();
			if (!txt || node._pltIta) continue;
			const tr = UI_TRANS[txt];
			if (tr) {
				node.textContent = tr;
				node._pltIta = true;
			}
		}

		// Traduce attributi title e placeholder di tutti gli elementi
		document.querySelectorAll("[title], [placeholder]").forEach(el => {
			if (el.title && UI_TRANS[el.title.trim()]) {
				const translated = UI_TRANS[el.title.trim()];
				if (el.title !== translated) el.title = translated;
			}
			if (el.placeholder && UI_TRANS[el.placeholder.trim()]) {
				const translated = UI_TRANS[el.placeholder.trim()];
				if (el.placeholder !== translated) el.placeholder = translated;
			}
		});
	}
}

Hooks.on("init", () => PlutoniumItaliano.init());
