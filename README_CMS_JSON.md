# 📊 Rugby Analytics CMS JSON Guide

## 🌟 Overview

The `cms.json` file is the central data management system for the Rugby Analytics application. It provides a flexible, easy-to-update data structure for managing championships, matches, predictions, and statistics.

## 📁 File Structure

The `cms.json` file contains several key sections:

### 1. Championships (`championships`)
Stores information about rugby championships.

#### Structure:
```json
"championship-id": {
  "id": "unique-identifier",
  "name": "Championship Name",
  "country": "Country",
  "logo": "/path/to/logo.png",
  "teams": [ ... ],
  "standings": [ ... ]
}
```

#### Example:
```json
"premiership-rugby": {
  "id": "premiership-rugby",
  "name": "Premiership Rugby",
  "country": "England",
  "logo": "/assets/premiership-logo.png",
  "teams": [ ... ],
  "standings": [ ... ]
}
```

### 2. Teams
Each team within a championship has detailed information:

```json
{
  "id": "team-identifier",
  "name": "Team Name",
  "city": "Team City",
  "stadium": "Stadium Name",
  "founded": 1900,
  "logo": "/assets/team-logo.png"
}
```

### 3. Past Matches (`pastMatches`)
Stores historical match data with comprehensive statistics.

#### Structure:
```json
{
  "id": "unique-match-id",
  "homeTeam": "Home Team",
  "awayTeam": "Away Team",
  "date": "YYYY-MM-DD",
  "time": "HH:MM",
  "championship": "championship-id",
  "stadium": "Stadium Name",
  "city": "Match City",
  "score": {
    "home": 24,
    "away": 18
  },
  "stats": {
    "mete": {"home": 3, "away": 2},
    "possessoMedio": {"home": 55, "away": 45}
    // More detailed statistics
  }
}
```

### 4. Future Matches (`futureMatches`)
Contains upcoming matches with predictions:

```json
{
  "id": "unique-future-match-id",
  "homeTeam": "Home Team",
  "awayTeam": "Away Team",
  "date": "YYYY-MM-DD",
  "time": "HH:MM",
  "championship": "championship-id",
  "stadium": "Stadium Name",
  "city": "Match City",
  "prediction": {
    "outcome": "Home Team Victory",
    "confidence": 75,
    "recommendedOdds": 1.75,
    "analysis": "Detailed match analysis...",
    "keyFactors": [
      "Home team's recent form",
      "Key player availability",
      "Historical performance"
    ]
  }
}
```

### 5. Predictions (`predictions`)
Summarizes match predictions:

```json
{
  "id": "prediction-id",
  "matchId": "related-match-id",
  "championship": "championship-id",
  "outcome": "Predicted Result",
  "confidence": 80,
  "recommendedOdds": 1.85,
  "date": "YYYY-MM-DD"
}
```

## 🛠️ How to Update the CMS JSON

### Adding a New Championship

1. Open `public/cms.json`
2. Add a new championship object under the `championships` section
3. Include all required fields (id, name, country, teams, standings)

### Adding a Match

1. Choose the appropriate section (`pastMatches` or `futureMatches`)
2. Create a new match object with a unique ID
3. Fill in all relevant details
4. For future matches, include a `prediction` object

### Best Practices

- Use unique, descriptive IDs
- Maintain consistent data structure
- Validate JSON before saving (use [JSONLint](https://jsonlint.com/))
- Keep historical data for analysis
- Update predictions regularly

## 🚨 Important Considerations

- Changes to `cms.json` are reflected immediately in the application
- No code changes are required when updating the file
- Ensure data accuracy and consistency
- Use meaningful, descriptive content

## 📝 Example Workflow

1. Open `public/cms.json`
2. Locate the appropriate section
3. Add or modify data
4. Validate the JSON structure
5. Save the file
6. Refresh the application to see changes

## 🔍 Troubleshooting

- If data doesn't appear, check:
  - JSON syntax
  - Unique IDs
  - Matching data types
  - Correct file path

## 📊 Supported Statistics

The CMS supports a wide range of rugby-specific statistics:
- Tries (Mete)
- Conversions (Trasformazioni)
- Penalty Kicks (Calci Piazzati)
- Possession Percentage
- Territory Control
- Tackles
- Meters Gained
- Penalties
- And more...

## 🌐 Internationalization

The JSON structure supports multiple championships and languages, making it easy to expand the application's coverage.

## 📦 Version

**Current CMS JSON Version**: 1.0.0
**Last Updated**: [Current Date]

## 🤝 Contributing

When contributing to the CMS JSON:
- Follow the existing structure
- Provide comprehensive, accurate data
- Include all relevant details
- Validate before submitting

---

**Note**: Always maintain a backup of the original `cms.json` before making significant changes. 

## 🔧 Detailed Content Update Guide

### 1. Adding a New Championship

#### Step-by-Step Process:
1. Open `public/cms.json`
2. Locate the `championships` object
3. Add a new championship with a unique ID

```json
"championship-id": {
  "id": "championship-id",
  "name": "Championship Full Name",
  "country": "Country Name",
  "logo": "/assets/championship-logo.png",
  "teams": [
    {
      "id": "team-unique-id",
      "name": "Team Name",
      "city": "Team City",
      "stadium": "Stadium Name",
      "founded": 1900,
      "logo": "/assets/team-logo.png"
    }
    // Add more teams...
  ],
  "standings": [
    {
      "position": 1,
      "team": "Team Name",
      "played": 10,
      "won": 8,
      "drawn": 1,
      "lost": 1,
      "pointsFor": 250,
      "pointsAgainst": 150,
      "pointsDifference": 100,
      "points": 25,
      "status": "qualified"
    }
    // Add more team standings...
  ]
}
```

### 2. Adding a Past Match

#### Detailed Example:
```json
{
  "id": "unique-match-identifier",
  "homeTeam": "Home Team Name",
  "awayTeam": "Away Team Name",
  "date": "2025-02-15",
  "time": "15:00",
  "championship": "championship-id",
  "stadium": "Stadium Full Name",
  "city": "Match City",
  "score": {
    "home": 24,
    "away": 18
  },
  "stats": {
    "mete": {
      "home": 3,
      "away": 2
    },
    "trasformazioni": {
      "home": 2,
      "away": 2
    },
    "calciPiazzati": {
      "home": 3,
      "away": 2
    },
    "possessoMedio": {
      "home": 55,
      "away": 45
    },
    "territorioMedio": {
      "home": 60,
      "away": 40
    }
    // Add more detailed statistics as needed
  }
}
```

### 3. Adding a Future Match with Prediction

#### Comprehensive Example:
```json
{
  "id": "unique-future-match-id",
  "homeTeam": "Home Team Name",
  "awayTeam": "Away Team Name",
  "date": "2025-03-01",
  "time": "14:30",
  "championship": "championship-id",
  "stadium": "Stadium Full Name",
  "city": "Match City",
  "prediction": {
    "outcome": "Home Team Victory",
    "confidence": 75,
    "recommendedOdds": 1.75,
    "analysis": "Detailed match analysis explaining the prediction. Consider recent team performance, head-to-head history, player injuries, and other relevant factors.",
    "keyFactors": [
      "Home team's recent winning streak",
      "Key player performance in recent matches",
      "Historical performance at this stadium",
      "Current team form and momentum"
    ]
  }
}
```

### 4. Updating Team Standings

#### Example of Updating Standings:
```json
"standings": [
  {
    "position": 1,
    "team": "Team Name",
    "played": 12,  // Total matches played
    "won": 9,      // Matches won
    "drawn": 1,    // Matches drawn
    "lost": 2,     // Matches lost
    "pointsFor": 300,      // Total points scored
    "pointsAgainst": 200,  // Total points conceded
    "pointsDifference": 100,  // Points difference
    "points": 40,  // League points
    "status": "qualified"  // Team status (qualified, playoff, safe, relegation)
  }
  // Update or add more teams...
]
```

## 🚨 Common Pitfalls and Tips

### Validation Checklist
- ✅ Ensure unique IDs for all entries
- ✅ Maintain consistent data types
- ✅ Use valid date formats (YYYY-MM-DD)
- ✅ Check JSON syntax (use [JSONLint](https://jsonlint.com/))
- ✅ Verify championship and team references

### Recommended Tools
- **JSON Validators**: JSONLint, JSON Editor Online
- **Text Editors**: Visual Studio Code, Sublime Text
- **JSON Formatters**: Online JSON Formatter & Validator

## 🔍 Debugging Common Issues

1. **Data Not Showing**
   - Verify JSON syntax
   - Check file path (`public/cms.json`)
   - Ensure IDs match across sections
   - Validate data types

2. **Prediction Discrepancies**
   - Confirm `matchId` matches in different sections
   - Verify date formats
   - Check confidence and odds ranges

## 📦 Version Management

- Always keep a backup of the original file
- Consider using version control (Git)
- Maintain a changelog for significant updates

## 🌐 Internationalization Tips

- Use consistent language for team and championship names
- Consider adding a language field for future multilingual support
- Maintain uniform data representation across different championships

---

**Pro Tip**: When updating the CMS JSON, always make incremental changes and test thoroughly after each update. 