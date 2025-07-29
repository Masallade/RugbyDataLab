# 📝 Guida Aggiornamento Manuale - RugbyDataLab

Questa guida ti spiega come aggiornare manualmente i contenuti del sito RugbyDataLab modificando il file `cms.json`.

## 🎯 Panoramica

Il file `public/cms.json` contiene tutti i dati del sito:
- **Championships**: Informazioni sui campionati e classifiche
- **Past Matches**: Partite già giocate con statistiche complete
- **Future Matches**: Partite future con pronostici
- **Current Matches**: Partite in corso (opzionale)
- **Predictions**: Lista dei pronostici attivi

## 📊 Come Aggiornare le Classifiche

### 1. Trovare il Campionato
```json
"championships": {
  "premiership-rugby": {
    "standings": [
      {
        "position": 1,
        "team": "Saracens",
        "played": 12,
        "won": 9,
        "drawn": 0,
        "lost": 3,
        "pointsFor": 298,
        "pointsAgainst": 186,
        "pointsDifference": 112,
        "points": 42,
        "status": "qualified"
      }
    ]
  }
}
```

### 2. Aggiornare i Dati
- **position**: Posizione in classifica
- **played**: Partite giocate
- **won/drawn/lost**: Vittorie/Pareggi/Sconfitte
- **pointsFor/Against**: Punti segnati/subiti
- **points**: Punti in classifica
- **status**: "qualified", "playoff", "safe", "relegation"

## 🏉 Come Aggiungere una Partita Passata

### 1. Struttura Base
```json
{
  "id": "match-nuovo-id",
  "homeTeam": "Saracens",
  "awayTeam": "Leicester Tigers",
  "date": "2025-01-27",
  "time": "15:00",
  "championship": "premiership-rugby",
  "stadium": "Allianz Park",
  "city": "Londra",
  "score": {
    "home": 24,
    "away": 18
  },
  "stats": {
    // Tutte le statistiche dettagliate
  }
}
```

### 2. Statistiche Complete
```json
"stats": {
  "puntiClassifica": {"home": 42, "away": 38},
  "mete": {"home": 3, "away": 2},
  "trasformazioni": {"home": 3, "away": 2},
  "calciPiazzati": {"home": 1, "away": 0},
  "dropGoal": {"home": 0, "away": 0},
  "possessoMedio": {"home": 58, "away": 42},
  "territorioMedio": {"home": 65, "away": 35},
  "ingressi22m": {"home": 10, "away": 7},
  "puntiDai22m": {"home": 18, "away": 12},
  "metriPostContatto": {"home": 450, "away": 320},
  "cariche": {"home": 120, "away": 90},
  "breakPuliti": {"home": 8, "away": 5},
  "difensoriBattuti": {"home": 15, "away": 10},
  "offLoad": {"home": 5, "away": 3},
  "passaggi": {"home": 150, "away": 110},
  "turnOverConcessi": {"home": 5, "away": 8},
  "placcaggiRiusciti": {"home": 95, "away": 88},
  "placcaggiRiuscitiPercentuale": {"home": 90, "away": 85},
  "placcaggiMancati": {"home": 10, "away": 15},
  "turnOverVinti": {"home": 7, "away": 4},
  "rimesseLateraliTot": {"home": 15, "away": 12},
  "rimesseLateraliVinte": {"home": 14, "away": 10},
  "rimesseLateraliPerse": {"home": 1, "away": 2},
  "mischieTot": {"home": 8, "away": 7},
  "mischieVinte": {"home": 7, "away": 6},
  "mischiePerse": {"home": 1, "away": 1},
  "calciDalGioco": {"home": 20, "away": 25},
  "metriCalciati": {"home": 600, "away": 750},
  "ruckVinte": {"home": 80, "away": 70},
  "ruckPerse": {"home": 2, "away": 3},
  "maulVinte": {"home": 5, "away": 4},
  "maulPerse": {"home": 0, "away": 1},
  "cartelliniGialli": {"home": 1, "away": 1},
  "cartelliniRossi": {"home": 0, "away": 0}
}
```

## 🔮 Come Aggiungere un Pronostico

### 1. Partita Futura
```json
{
  "id": "match-futuro-id",
  "homeTeam": "Harlequins",
  "awayTeam": "Leicester Tigers",
  "date": "2025-02-10",
  "time": "15:00",
  "championship": "premiership-rugby",
  "stadium": "The Stoop",
  "city": "Londra",
  "prediction": {
    "outcome": "Vittoria Harlequins",
    "confidence": 80,
    "recommendedOdds": 1.85,
    "analysis": "Analisi dettagliata della partita...",
    "keyFactors": [
      "Fattore campo favorevole",
      "Forma recente positiva",
      "Statistiche testa a testa"
    ]
  }
}
```

### 2. Campi del Pronostico
- **outcome**: "Vittoria [Squadra]", "Pareggio", "Under/Over X.5"
- **confidence**: Numero da 1 a 100 (percentuale)
- **recommendedOdds**: Quota decimale consigliata
- **analysis**: Testo dell'analisi (max 500 caratteri)
- **keyFactors**: Array di fattori chiave (max 5 elementi)

## 🏆 Come Aggiungere un Nuovo Campionato

### 1. Struttura Campionato
```json
"nuovo-campionato": {
  "id": "nuovo-campionato",
  "name": "Nome Campionato",
  "country": "Paese",
  "logo": "/assets/logo-campionato.png",
  "teams": [
    {
      "id": "squadra-id",
      "name": "Nome Squadra",
      "city": "Città",
      "stadium": "Nome Stadio",
      "founded": 1900,
      "logo": "/assets/squadra-logo.png"
    }
  ],
  "standings": [
    // Classifica come mostrato sopra
  ]
}
```

## 📅 Workflow di Aggiornamento Settimanale

### 1. Dopo ogni Giornata di Campionato
1. **Sposta** le partite da `futureMatches` a `pastMatches`
2. **Aggiungi** il risultato finale (`score`)
3. **Inserisci** tutte le statistiche dettagliate
4. **Aggiorna** le classifiche dei campionati

### 2. Prima della Prossima Giornata
1. **Aggiungi** le nuove partite in `futureMatches`
2. **Crea** i pronostici con analisi
3. **Verifica** date, orari e stadi
4. **Controlla** che tutti i link funzionino

## ⚠️ Errori Comuni da Evitare

### 1. Errori di Sintassi JSON
```json
// ❌ SBAGLIATO - virgola finale
{
  "team": "Saracens",
}

// ✅ CORRETTO
{
  "team": "Saracens"
}
```

### 2. ID Duplicati
- Ogni partita deve avere un `id` univoco
- Usa formato: `match-YYYY-MM-DD-home-away`

### 3. Date Formato Sbagliato
```json
// ❌ SBAGLIATO
"date": "27/01/2025"

// ✅ CORRETTO
"date": "2025-01-27"
```

### 4. Championship ID Mancanti
- Assicurati che `championship` nelle partite corrisponda a un ID esistente in `championships`

## 🔧 Strumenti Utili

### 1. Validatore JSON Online
- [jsonlint.com](https://jsonlint.com)
- Copia e incolla il tuo JSON per verificare errori

### 2. Editor Consigliati
- **VS Code** con estensione JSON
- **Notepad++** con syntax highlighting
- **Sublime Text**

### 3. Backup Automatico
```bash
# Crea sempre un backup prima di modificare
cp cms.json cms.json.backup-$(date +%Y%m%d)
```

## 📋 Checklist Pre-Pubblicazione

- [ ] JSON validato senza errori
- [ ] Tutti gli ID sono univoci
- [ ] Date in formato corretto (YYYY-MM-DD)
- [ ] Championship ID esistenti
- [ ] Statistiche complete per partite passate
- [ ] Pronostici con tutti i campi richiesti
- [ ] Classifiche aggiornate
- [ ] Backup del file precedente creato

## 🆘 Risoluzione Problemi

### Sito Non Carica
1. Controlla la console del browser (F12)
2. Verifica che `cms.json` sia valido
3. Assicurati che il file sia accessibile

### Dati Non Aggiornati
1. Svuota la cache del browser (Ctrl+F5)
2. Verifica che le modifiche siano state salvate
3. Controlla che non ci siano errori JSON

### Partite Non Visualizzate
1. Verifica che `championship` sia corretto
2. Controlla che la data sia nel formato giusto
3. Assicurati che l'ID sia univoco

---

**💡 Suggerimento**: Tieni sempre un file di esempio con la struttura completa per riferimento rapido!

