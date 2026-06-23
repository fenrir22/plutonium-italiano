# Plutonium - Italiano

Modulo per [Foundry VTT](https://foundryvtt.com) che traduce in italiano i dati e l'interfaccia di [Plutonium](https://github.com/TheGiddyLimit/plutonium-next), l'integrazione di 5etools per Foundry.

## Requisiti

- Foundry VTT v12+
- Sistema **dnd5e** (D&D 5e)
- Modulo **[Plutonium](https://www.patreon.com/Giddy5e)** v2.13+ (attivo e funzionante)

## Cosa fa

### Dati di gioco in italiano
Reindirizza le richieste dati da `https://5e.tools/data/` ai file tradotti inclusi nel modulo.
Contenuti tradotti:
- **Incantesimi** (spells)
- **Mostri / Bestiario** (bestiary)
- **Avventure** (adventures)
- **Libri** (books)

### Interfaccia utente tradotta
Senza modificare i file di Plutonium, traduce l'interfaccia al volo:
- Pannello **Importazione** (Scegli Importatore, filtri, colonne, bottoni)
- Nomi delle sezioni (Bestiario, Incantesimi, Oggetti, Classi, ecc.)
- Bottoni e comandi (Importa, Filtro, Reimposta, Salva, ecc.)
- Testo dei template .hbs di Plutonium

### Come funziona
Il modulo agisce su tre livelli:
1. **`italiano.js`** — patcha `DataUtil.loadJSON` per caricare dati italiani; usa `MutationObserver` e `Hooks` di Foundry per tradurre il DOM dopo ogni render
2. **`lang/it.json`** — sfrutta il sistema i18n di Foundry per le chiavi già presenti in Plutonium
3. **`data/`** — contiene i file JSON di 5etools con testi tradotti in italiano

## Installazione

### Metodo 1: Da GitHub (consigliato)
1. Vai su [https://github.com/fenrir22/plutonium-italiano](https://github.com/fenrir22/plutonium-italiano)
2. Scarica l'ultima release (`plutonium-italiano.zip`)
3. In Foundry: **Impostazioni → Gestione Moduli → Installa Modulo → Carica File**
4. Seleziona lo zip scaricato

### Metodo 2: Manuale
1. In Foundry, apri la cartella `Data/modules/`
2. Crea una cartella `plutonium-italiano/`
3. Copia dentro tutti i file di questo repository
4. Ricarica Foundry

### Metodo 3: URL del Manifest
Aggiungi questo URL in **Impostazioni → Gestione Moduli → Installa Modulo**:
```
https://raw.githubusercontent.com/fenrir22/plutonium-italiano/main/module.json
```

## Configurazione

1. In Foundry: **Impostazioni → Lingua → Italiano**
2. In Foundry: **Impostazioni → Gestione Moduli → attiva "Plutonium - Italiano"**
3. **Ricarica** Foundry
4. Importa contenuti con Plutonium — saranno in italiano

> **Nota:** Se Foundry è impostato in inglese, l'interfaccia rimarrà in inglese. Imposta Foundry in italiano per vedere l'UI tradotta. I dati di gioco (incantesimi, mostri) sono sempre in italiano indipendentemente dalla lingua di Foundry.

## Limitazioni

- I dati tradotti provengono da 5etools versione Novembre 2024. Contenuti aggiunti dopo (es. XPHB 2024) potrebbero essere in inglese.
- L'interfaccia è tradotta via DOM manipulation — potrebbe non coprire tutte le schermate al 100%.
- Plutonium deve essere installato e funzionante.

## Link utili

- [Plutonium (patreon)](https://www.patreon.com/Giddy5e)
- [5etools](https://5e.tools)
- [Foundry VTT](https://foundryvtt.com)

## Licenza

Questo modulo è un'estensione non ufficiale. I dati di gioco sono © Wizards of the Coast LLC.
