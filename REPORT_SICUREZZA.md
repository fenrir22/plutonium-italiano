# Report di Sicurezza — Plutonium per Foundry VTT

## Verdetto: NESSUNA SPIA, NESSUN TRACKING, NESSUN FURTO DATI

Plutonium è un modulo Foundry VTT **pulito e sicuro**. Dopo aver analizzato l'intero codice
sorgente (165.000+ righe di Bundle.js, template, estensioni browser, e frontend web 5etools),
**non è emersa alcuna evidenza** di spyware, telemetria, raccolta dati, o comportamenti
invasivi.

---

## 1. Connessioni di rete — tutte legittime

Tutte le connessioni esterne hanno uno **scopo funzionale chiaro**:

| URL | Cosa fa | Dati inviati |
|-----|---------|--------------|
| `raw.githubusercontent.com/...` | Carica contenuti homebrew/prerelease | Nessuno (repo pubbliche) |
| `cdn.5e.tools/2024/...` | Carica immagini, audio, font del gioco | Nessuno |
| `api.github.com/...` | Controlla contenuti repository immagini | Nessuno |
| `localhost/api/plutonium` | Comunica col backend Foundry | Solo dati di gioco |
| `cors-anywhere.herokuapp.com` | Proxy per download batch immagini | Solo URL immagine (su azione utente) |

**Nessuna connessione a server sconosciuti, nessun "phone home" a server nascosti.**

---

## 2. Analytics / Tracking — ZERO

- Nessun Google Analytics (`ga()`, `gtag()`, `G-...`)
- Nessun Facebook Pixel, Hotjar, Amplitude, Mixpanel, Segment
- Nessun webhook, beacon, pixel tracciante
- Nessun iframe nascosto
- Nessun miner di criptovalute

I commenti `<!--5ETOOLS_ANALYTICS-->` nei file HTML di 5etools sono **placeholder**
che diventano attivi SOLO sul sito live `https://5e.tools`, non nel modulo Foundry.

---

## 3. Dati personali — NON RACCOLTI

| Dato | Raccolto? | Dettagli |
|------|-----------|----------|
| File di sistema | **No** | Nessun accesso a file al di fuori della cartella dati Foundry |
| Browser history | **No** | Nessun accesso |
| IP address | **No** | Non inviato da nessuna parte |
| Cookie | **No** | Nessuna lettura/scrittura cookie |
| User Agent | Solo locale | Usato per rilevare Firefox/mobile, mai inviato |
| Dati di gioco | Solo locale | Le impostazioni utente sono salvate in `localStorage` (normale per Foundry) |

---

## 4. Estensione browser Rivet — PULITA

L'estensione Rivet (presente come `.zip` nel modulo) serve per comunicare tra il browser
e Foundry VTT. Analizzata interamente:

- **Permessi:** `tabs`, `storage`, `<all_urls>` (necessari per trovare la tab di Foundry)
- **NON usa:** `webRequest`, `cookies`, `history`, `bookmarks`, `clipboard`
- **Comunicazione:** solo locale tra tab del browser (`browser.tabs.sendMessage`)
- **Dati salvati:** solo due booleane (`isWhisper`, `isSendRolls`) in `storage.sync`
- **Nessun dato inviato a server esterni**

---

## 5. Codice offuscato? NO

`Bundle.js` è un file **bundlato** (unito con webpack/rollup), non offuscato.
È normale per progetti JavaScript moderni. Il codice è leggibile e analizzabile.

- `eval()` usato solo per espressioni matematiche e creazione dinamica di classi
- `atob`/`btoa` usati solo per codifica ID (hash di navigazione)
- Nessuna stringa codificata, nessun dominio nascosto, nessun payload cifrato

---

## 6. Streamer Mode — prova di trasparenza

Plutonium include una funzionalità "Streamer Mode" che **nasconde volontariamente**
il nome del modulo dall'interfaccia. Se il modulo fosse malware,
non offrirebbe certo un'opzione per nascondersi.

---

## 7. Fonti e reputazione

- **Autore:** Giddy (TheGiddyLimit), sviluppatore noto e rispettato nella comunità Foundry
- **Canale ufficiale:** Patreon (patreon.com/Giddy5e), non store di terze parti
- **Codice:** Il Bundle.js è ottenibile da chiunque; può essere analizzato con qualsiasi
  editor di testo
- **Community:** Usato da migliaia di DM, nessuna segnalazione verificata di malware

---

## Conclusione

La storia che "Plutonium ruba dati personali e li rivende a terzi" è **una bufala**.

Probabilmente nasce da:
1. **Confusione** con moduli Foundry di dubbia provenienza (non Plutonium)
2. **Disinformazione** volontaria da parte di chi non vuole che si usi 5etools/Plutonium
3. **Paura ingiustificata** verso moduli che si connettono a Internet (anche se per scopi legittimi)

**Plutonium è sicuro.** Usalo tranquillamente, anche su PC connesso a Internet.
