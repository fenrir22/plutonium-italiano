# AI Compliance — Plutonium-Italiano

## Policy Reference

Foundry VTT AI Content Policy (revised March 18, 2026):
https://foundryvtt.com/article/ai-policy/

## Status: COMPLIANT

### 1. Written Text (Section 4.1)

| Contenuto | Origine | Compliance |
|-----------|---------|------------|
| Traduzioni dati di gioco (incantesimi, mostri, ecc.) | Traduzione umana dai file 5etools originali in inglese | ✅ Testi tradotti da persona |
| Traduzioni interfaccia (UI_TRANS in italiano.js) | Traduzione umana | ✅ Testi tradotti da persona |
| Traduzioni i18n (lang/it.json) | Traduzione umana | ✅ Testi tradotti da persona |
| README, AI_COMPLIANCE, REPORT_SICUREZZA | Scritti da persona con assistenza AI | ✅ Conforme (revisione umana) |

Le traduzioni dalla lingua inglese a quella italiana sono state eseguite da un madrelingua italiano.
Ai sensi della sezione 4.1, l'uso di AI per la traduzione è permesso a condizione che
tutto il testo tradotto sia revisionato da un parlante la lingua di destinazione.
Le traduzioni in questo modulo sono state eseguite direttamente da un parlante italiano,
non da AI.

### 2. Codice (Section 4.4)

| File | Origine | Compliance |
|------|---------|------------|
| `js/italiano.js` | Scritto con assistenza AI | ✅ L'autore comprende e sa mantenere il codice |
| `module.json` | Scritto a mano | ✅ |
| `lang/it.json` | Scritto a mano | ✅ |

Il codice `js/italiano.js` è stato sviluppato con assistenza di AI (large language model).
L'autore del modulo:
- Comprende ogni parte del codice
- È in grado di spiegarlo, modificarlo e mantenerlo
- Ha revisionato personalmente il codice prima del rilascio

### 3. Media visivi e audio (Section 4.2, 4.3)

Il modulo non contiene immagini, video o audio generati da AI.
Tutti i media sono caricati da fonti esterne (cdn.5e.tools) o generati da Foundry.

### 4. Marketing (Section 4.5)

Le descrizioni del modulo (README, module.json) sono state scritte da un umano.

### 5. Generazione runtime (Section 5)

Il modulo NON genera contenuti a runtime tramite AI.
Non fornisce interfacce a modelli AI.

### 6. Categorizzazione

Il modulo NON può essere classificato come "Zero AI" perché il codice
`js/italiano.js` è stato scritto con assistenza AI (sezione 6.6).

## Distribuzione

Il modulo è distribuito tramite GitHub (self-published),
non attraverso il package listing ufficiale di Foundry VTT
(foundryvtt.com/packages). Ai sensi della sezione 1.2,
le policy si applicano solo ai pacchetti distribuiti
tramite i canali ufficiali di Foundry.
