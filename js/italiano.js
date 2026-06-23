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

	// Config sezioni
	"Config Editor": "Editor Configurazione",
	"Preferences": "Preferenze",
	"Appearance": "Aspetto",
	"Markdown": "Markdown",
	"Tokens": "Token",
	"Actors": "Attori",
	"Other Options": "Altre Opzioni",
	"Help": "Aiuto",
	"Always Save": "Salva Sempre",
	"Save and Close": "Salva e Chiudi",
	"Discard and Close": "Annulla e Chiudi",
	"Discard": "Annulla",
	"Confirm": "Conferma",
	"Continue": "Continua",

	// Sezioni Import
	"Import (Creatures)": "Importa (Creature)",
	"Import (Creature Features)": "Importa (Feature Creature)",
	"Import (Vehicles)": "Importa (Veicoli)",
	"Import (Vehicle Upgrades)": "Importa (Potenziamenti Veicoli)",
	"Import (Objects)": "Importa (Oggetti)",
	"Import (Object Features)": "Importa (Feature Oggetti)",
	"Import (Feats)": "Importa (Talenti)",
	"Import (Backgrounds)": "Importa (Background)",
	"Import (Background Features)": "Importa (Feature Background)",
	"Import (Classes & Subclasses)": "Importa (Classi & Sottoclassi)",
	"Import (Class & Sub. Features)": "Importa (Feature Classi & Sottocl.)",
	"Import (Items)": "Importa (Oggetti)",
	"Import (Psionics)": "Importa (Psioniche)",
	"Import (Species)": "Importa (Razze)",
	"Import (Species Features)": "Importa (Feature Razze)",
	"Import (Table)": "Importa (Tabella)",
	"Import (Spells)": "Importa (Incantesimi)",
	"Import (Rules)": "Importa (Regole)",
	"Import (Languages)": "Importa (Lingue)",
	"Import (Options & Features)": "Importa (Opzioni & Feature)",
	"Import (Conditions & Diseases)": "Importa (Condizioni & Malattie)",
	"Import (Cults & Supernatural Boons)": "Importa (Culti & Benefici)",
	"Import (Actions)": "Importa (Azioni)",
	"Import (Gifts & Rewards)": "Importa (Doni & Ricompense)",
	"Import (Char. Creation Options)": "Importa (Opzioni Creazione)",
	"Import (Deities)": "Importa (Divinità)",
	"Import (Recipes)": "Importa (Ricette)",
	"Import (Traps)": "Importa (Trappole)",
	"Import (Trap Features)": "Importa (Feature Trappole)",
	"Import (Hazards)": "Importa (Pericoli)",
	"Import (Adventures)": "Importa (Avventure)",
	"Import (Books)": "Importa (Libri)",
	"Import (Maps)": "Importa (Mappe)",
	"Import (Decks)": "Importa (Mazzi)",
	"Import (Facilities)": "Importa (Strutture)",

	// Tool window titles
	"Package Importer": "Importa Pacchetti",
	"Directory Cleaner": "Pulisci Directory",
	"Bulk Directory Mover": "Sposta Directory",
	"Bulk Ownership Editor": "Editor Proprietà",
	"Bulk Prototype Token Editor": "Editor Token Prototipo",
	"Directory Deduplicator": "Dedup Directory",
	"Compendium Ownership Updater": "Aggiorna Proprietà Compendio",
	"Loot Generator": "Generatore Bottino",
	"Item Cleaner": "Pulisci Oggetti",
	"Spell Prepared Toggler": "Attiva/Disattiva Incantesimi",
	"Row Cleaner": "Pulisci Righe",
	"Art Browser": "Browser Arte",
	"Changelog": "Novità",
	"Report a Bug": "Segnala Bug",

	// Dialog titles
	"File Type Mismatch": "Tipo File Non Corrispondente",
	"Enter Proficiency Bonus": "Inserisci Bonus Competenza",
	"Enter Spell Level": "Inserisci Livello Incantesimo",
	"Enter Class Level": "Inserisci Livello Classe",
	"Filter Combination Logic": "Logica Combinazione Filtri",
	"Unsaved Changes": "Modifiche Non Salvate",
	"Reset Blocklist": "Reimposta Blocco",
	"Exclude All": "Escludi Tutto",
	"Save to File": "Salva su File",
	"Load from File": "Carica da File",
	"Select Snapshot Deck": "Seleziona Mazzo Istantanea",
	"Select Snapshot": "Seleziona Istantanea",
	"Duplicate Snapshot": "Duplica Istantanea",
	"Snapshot Name": "Nome Istantanea",
	"Snapshot Deck Name": "Nome Mazzo Istantanea",
	"Delete Snapshot Decks": "Elimina Mazzi Istantanea",
	"Delete Snapshots": "Elimina Istantanee",
	"Too Many Sources": "Troppe Fonti",
	"Enter Gold Amount": "Inserisci Quantità Oro",
	"Reset Item Filters": "Reimposta Filtri Oggetti",
	"Customize Import": "Personalizza Import",
	"Updated Not Configured": "Aggiornato Non Configurato",
	"Token Name": "Nome Token",
	"Select Token Size": "Seleziona Dimensione Token",
	"Image URL": "URL Immagine",
	"Edit Folder Path": "Modifica Percorso Cartella",
	"Select Version...": "Seleziona Versione...",
	"Select Existing Item...": "Seleziona Oggetto Esistente...",

	// Config settings names (più visibili)
	"Streamer Mode": "Modalità Streamer",
	"Compact Header Buttons": "Bottoni Compatti Header",
	"Compact Directory Buttons": "Bottoni Compatti Directory",
	"Compact Chat": "Chat Compatta",
	"Compact Scenes Directory": "Directory Scene Compatta",
	"Compact Actors Directory": "Directory Attori Compatta",
	"Compact Items Directory": "Directory Oggetti Compatta",
	"Compact Journal Entries": "Note Diario Compatte",
	"Compact Rollable Tables": "Tabelle Rollabili Compatte",
	"Compact Card Stacks": "Mazzi di Carte Compatti",
	"Compact Compendium Packs": "Pacchetti Compendio Compatti",
	"Compact Macros": "Macro Compatte",
	"Hide Directory Buttons": "Nascondi Bottoni Directory",
	"Hide Sheet Menu Button": "Nascondi Bottone Menu Scheda",
	"Hide Update Notifications": "Nascondi Notifiche Aggiornamento",
	"Fast Animations": "Animazioni Veloci",
	"Fast Tooltips": "Tooltip Veloci",
	"Enable Custom Tooltips": "Abilita Tooltip Personalizzati",
	"Display Detected Backend": "Mostra Backend Rilevato",

	"Display Missing Health": "Mostra Salute Mancante",
	"Font Size Multiplier": "Moltiplicatore Dimensione Font",
	"Allow Text Wrap": "Permetti Testo a Capo",
	"Move Token Name Onto Token": "Sposta Nome sul Token",
	"NPC HP Roll Mode": "Modalità Tiro PF PNG",
	"Animation Speed": "Velocità Animazione",

	"Add Source to Names": "Aggiungi Fonte ai Nomi",
	"Disable 5etools Links": "Disabilita Link 5etools",
	"Render Dice as Plain Text": "Mostra Dadi Come Testo",
	"Use Enrichers": "Usa Arricchitori",
	"Duplicate Handling Mode": "Modalità Gestione Duplicati",
	"Prefer Metric Distance/Speed (Where Available)": "Preferisci Distanza/Velocità Metriche",
	"Prefer Metric Weight (Where Available)": "Preferisci Peso Metrico",
	"Show Variants/Versions": "Mostra Varianti/Vers.",
	"Save Imported Images to Server": "Salva Immagini su Server",
	"Image/Token Directory": "Directory Immagini/Token",
	"Auto-Switch Sidebar Tabs": "Cambia Automaticamente Schede",

	// Source filter
	"Select All Standard Sources": "Seleziona Fonti Standard",
	"Select All Partnered Sources": "Seleziona Fonti Partner",
	"Select All Non-Standard Sources": "Seleziona Fonti Non Standard",
	"Select All Prerelease Sources": "Seleziona Fonti Prerelease",
	"Select All Homebrew Sources": "Seleziona Fonti Homebrew",
	"Select 2014 Sources": "Seleziona Fonti 2014",
	"Select 2024 Sources": "Seleziona Fonti 2024",
	"Select \"Vanilla\" Sources": "Seleziona Fonti \"Vanilla\"",
	"Select All Non-UA Sources": "Seleziona Fonti Non UA",
	"Select SRD Sources": "Seleziona Fonti SRD",
	"Select Basic Rules Sources": "Seleziona Fonti Regole Base",

	// Template buttons
	"Prune Empty Folders": "Pulisci Cartelle Vuote",
	"Configure Editor": "Configura Editor",
	"Select Target Directory": "Seleziona Directory Destinazione",
	"Filter Players": "Filtra Giocatori",
	"Set Ownership": "Imposta Proprietà",
	"Import as Module": "Importa come Modulo",
	"Import as World": "Importa come Mondo",
	"Spellcasting Method": "Metodo di Incantamento",
	"Preparation": "Preparazione",
	"Rename To:": "Rinomina In:",
	"Rename To (Short):": "Rinomina In (Breve):",
	"(Use full name)": "(Usa nome completo)",
	"Named Creature:": "Creatura Nominata:",
	"Scale CR To:": "Ridimensiona GS A:",
	"Summon Spell Level:": "Liv. Incant. Evocazione:",
	"Variant:": "Variante:",
	"Player Character:": "Personaggio Giocante:",
	"Default": "Predefinito",
	"Custom": "Personalizzato",
	"All Players": "Tutti i Giocatori",
	"Select by Date": "Seleziona per Data",
	"Include References": "Includi Riferimenti",
	"Include Variants": "Includi Varianti",
	"Export Selection": "Esporta Selezione",
	"Import Selection": "Importa Selezione",
	"Open Config Editor": "Apri Editor Config.",
	"Reset All": "Reimposta Tutto",
	"First Letter of Name": "Prima Lettera del Nome",
	"Toggle Configuration": "Attiva/Disattiva Config.",
	"Show Source Data": "Mostra Dati Fonte",
	"Import as Journal Entries": "Importa come Note",
	"Use Compendium Browser": "Usa Browser Compendio",
	"Embedded URL": "URL Incorporato",
	"Select 2014 Rules": "Seleziona Regole 2014",
	"Select 2024 Rules": "Seleziona Regole 2024",
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
