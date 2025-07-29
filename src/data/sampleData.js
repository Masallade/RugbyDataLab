// Dati di esempio per il sito Rugby Analytics

export const championships = {
  'premiership-rugby': {
    id: 'premiership-rugby',
    name: 'Premiership Rugby',
    country: 'Inghilterra',
    season: '2024/25',
    teams: 10,
    matchesPlayed: 120,
    description: 'Il campionato inglese di rugby, uno dei più competitivi al mondo.',
    logo: '/src/assets/logos/Kq8zfpM3uBrn.png'
  },
  'top-14': {
    id: 'top-14',
    name: 'Top 14',
    country: 'Francia',
    season: '2024/25',
    teams: 14,
    matchesPlayed: 168,
    description: 'Il campionato francese di rugby, famoso per il suo alto livello tecnico.',
    logo: '/src/assets/logos/JnVqo53WK40E.png'
  },
  'urc': {
    id: 'urc',
    name: 'United Rugby Championship',
    country: 'Multi-nazionale',
    season: '2024/25',
    teams: 16,
    matchesPlayed: 192,
    description: 'Campionato che unisce le migliori squadre di Irlanda, Galles, Scozia, Italia e Sud Africa.',
    logo: '/src/assets/logos/wxgJumYExAJp.png'
  },
  'serie-a-elite': {
    id: 'serie-a-elite',
    name: 'Serie A Elite',
    country: 'Italia',
    season: '2024/25',
    teams: 12,
    matchesPlayed: 132,
    description: 'Il massimo campionato italiano di rugby.',
    logo: '/src/assets/logos/WhQR0VfqIGyw.png'
  },
  'sei-nazioni': {
    id: 'sei-nazioni',
    name: 'Sei Nazioni',
    country: 'Europa',
    season: '2025',
    teams: 6,
    matchesPlayed: 15,
    description: 'Il più prestigioso torneo internazionale di rugby del Nord Europa.',
    logo: '/src/assets/logos/915UHJRKs5Ll.png'
  }
}

export const premiershipStandings = [
  { pos: 1, team: 'Saracens', played: 12, won: 10, lost: 2, drawn: 0, pointsFor: 298, pointsAgainst: 186, diff: 112, points: 42, status: 'qualified' },
  { pos: 2, team: 'Leicester Tigers', played: 12, won: 9, lost: 3, drawn: 0, pointsFor: 276, pointsAgainst: 203, diff: 73, points: 38, status: 'qualified' },
  { pos: 3, team: 'Harlequins', played: 12, won: 8, lost: 4, drawn: 0, pointsFor: 289, pointsAgainst: 234, diff: 55, points: 35, status: 'playoff' },
  { pos: 4, team: 'Northampton Saints', played: 12, won: 8, lost: 4, drawn: 0, pointsFor: 267, pointsAgainst: 245, diff: 22, points: 34, status: 'playoff' },
  { pos: 5, team: 'Bath Rugby', played: 12, won: 7, lost: 5, drawn: 0, pointsFor: 245, pointsAgainst: 223, diff: 22, points: 31, status: 'playoff' },
  { pos: 6, team: 'Sale Sharks', played: 12, won: 6, lost: 6, drawn: 0, pointsFor: 234, pointsAgainst: 256, diff: -22, points: 27, status: 'playoff' },
  { pos: 7, team: 'Exeter Chiefs', played: 12, won: 5, lost: 7, drawn: 0, pointsFor: 223, pointsAgainst: 267, diff: -44, points: 24, status: 'safe' },
  { pos: 8, team: 'Bristol Bears', played: 12, won: 4, lost: 8, drawn: 0, pointsFor: 198, pointsAgainst: 278, diff: -80, points: 19, status: 'safe' },
  { pos: 9, team: 'Gloucester Rugby', played: 12, won: 3, lost: 9, drawn: 0, pointsFor: 187, pointsAgainst: 289, diff: -102, points: 15, status: 'relegation' },
  { pos: 10, team: 'Newcastle Falcons', played: 12, won: 2, lost: 10, drawn: 0, pointsFor: 156, pointsAgainst: 312, diff: -156, points: 12, status: 'relegation' }
]

export const top14Standings = [
  { pos: 1, team: 'Toulouse', played: 14, won: 11, lost: 3, drawn: 0, pointsFor: 356, pointsAgainst: 234, diff: 122, points: 48, status: 'qualified' },
  { pos: 2, team: 'La Rochelle', played: 14, won: 10, lost: 4, drawn: 0, pointsFor: 334, pointsAgainst: 267, diff: 67, points: 44, status: 'qualified' },
  { pos: 3, team: 'Racing 92', played: 14, won: 9, lost: 5, drawn: 0, pointsFor: 312, pointsAgainst: 289, diff: 23, points: 41, status: 'playoff' },
  { pos: 4, team: 'Stade Français', played: 14, won: 8, lost: 6, drawn: 0, pointsFor: 298, pointsAgainst: 301, diff: -3, points: 38, status: 'playoff' },
  { pos: 5, team: 'Bordeaux-Bègles', played: 14, won: 8, lost: 6, drawn: 0, pointsFor: 287, pointsAgainst: 278, diff: 9, points: 37, status: 'playoff' },
  { pos: 6, team: 'Clermont', played: 14, won: 7, lost: 7, drawn: 0, pointsFor: 276, pointsAgainst: 289, diff: -13, points: 34, status: 'playoff' }
]

export const urcStandings = [
  { pos: 1, team: 'Leinster', played: 16, won: 13, lost: 3, drawn: 0, pointsFor: 412, pointsAgainst: 267, diff: 145, points: 56, status: 'qualified' },
  { pos: 2, team: 'Munster', played: 16, won: 11, lost: 5, drawn: 0, pointsFor: 378, pointsAgainst: 298, diff: 80, points: 48, status: 'qualified' },
  { pos: 3, team: 'Ulster', played: 16, won: 10, lost: 6, drawn: 0, pointsFor: 356, pointsAgainst: 312, diff: 44, points: 44, status: 'playoff' },
  { pos: 4, team: 'Glasgow Warriors', played: 16, won: 9, lost: 7, drawn: 0, pointsFor: 334, pointsAgainst: 323, diff: 11, points: 41, status: 'playoff' },
  { pos: 5, team: 'Ospreys', played: 16, won: 8, lost: 8, drawn: 0, pointsFor: 312, pointsAgainst: 334, diff: -22, points: 38, status: 'playoff' },
  { pos: 6, team: 'Cardiff Blues', played: 16, won: 7, lost: 9, drawn: 0, pointsFor: 298, pointsAgainst: 356, diff: -58, points: 35, status: 'playoff' }
]

export const serieAStandings = [
  { pos: 1, team: 'Rovigo', played: 10, won: 8, lost: 2, drawn: 0, pointsFor: 234, pointsAgainst: 156, diff: 78, points: 34, status: 'qualified' },
  { pos: 2, team: 'Calvisano', played: 10, won: 7, lost: 3, drawn: 0, pointsFor: 212, pointsAgainst: 178, diff: 34, points: 31, status: 'qualified' },
  { pos: 3, team: 'Petrarca', played: 10, won: 6, lost: 4, drawn: 0, pointsFor: 198, pointsAgainst: 189, diff: 9, points: 28, status: 'playoff' },
  { pos: 4, team: 'Valorugby', played: 10, won: 5, lost: 5, drawn: 0, pointsFor: 187, pointsAgainst: 198, diff: -11, points: 25, status: 'playoff' },
  { pos: 5, team: 'Fiamme Oro', played: 10, won: 4, lost: 6, drawn: 0, pointsFor: 176, pointsAgainst: 212, diff: -36, points: 22, status: 'safe' },
  { pos: 6, team: 'Viadana', played: 10, won: 3, lost: 7, drawn: 0, pointsFor: 165, pointsAgainst: 234, diff: -69, points: 19, status: 'relegation' }
]

export const seiNazioniStandings = [
  { pos: 1, team: 'Francia', played: 5, won: 4, lost: 1, drawn: 0, pointsFor: 134, pointsAgainst: 89, diff: 45, points: 18, status: 'champion' },
  { pos: 2, team: 'Irlanda', played: 5, won: 4, lost: 1, drawn: 0, pointsFor: 128, pointsAgainst: 92, diff: 36, points: 17, status: 'qualified' },
  { pos: 3, team: 'Inghilterra', played: 5, won: 3, lost: 2, drawn: 0, pointsFor: 112, pointsAgainst: 108, diff: 4, points: 14, status: 'qualified' },
  { pos: 4, team: 'Scozia', played: 5, won: 2, lost: 3, drawn: 0, pointsFor: 98, pointsAgainst: 115, diff: -17, points: 11, status: 'safe' },
  { pos: 5, team: 'Galles', played: 5, won: 1, lost: 4, drawn: 0, pointsFor: 87, pointsAgainst: 123, diff: -36, points: 8, status: 'safe' },
  { pos: 6, team: 'Italia', played: 5, won: 1, lost: 4, drawn: 0, pointsFor: 76, pointsAgainst: 108, diff: -32, points: 6, status: 'wooden_spoon' }
]

export const recentResults = [
  {
    date: '20 Gen',
    home: 'Saracens',
    away: 'Leicester Tigers',
    homeScore: 24,
    awayScore: 18,
    championship: 'Premiership',
    status: 'Finale'
  },
  {
    date: '19 Gen',
    home: 'Toulouse',
    away: 'La Rochelle',
    homeScore: 31,
    awayScore: 15,
    championship: 'Top 14',
    status: 'Finale'
  },
  {
    date: '18 Gen',
    home: 'Leinster',
    away: 'Munster',
    homeScore: 22,
    awayScore: 19,
    championship: 'URC',
    status: 'Finale'
  },
  {
    date: '17 Gen',
    home: 'Rovigo',
    away: 'Calvisano',
    homeScore: 28,
    awayScore: 14,
    championship: 'Serie A Elite',
    status: 'Finale'
  },
  {
    date: '16 Gen',
    home: 'Francia',
    away: 'Irlanda',
    homeScore: 27,
    awayScore: 24,
    championship: 'Sei Nazioni',
    status: 'Finale'
  }
]

export const predictions = [
  {
    id: 'saracens-vs-leicester-27-01-2025',
    date: '27 Gen 2025',
    time: '15:00',
    homeTeam: 'Saracens',
    awayTeam: 'Leicester Tigers',
    championship: 'Premiership Rugby',
    prediction: 'Vittoria Saracens',
    confidence: 85,
    odds: '1.75',
    preview: 'Il Saracens arriva da 5 vittorie consecutive e gioca in casa contro un Leicester in difficoltà in trasferta...',
    tags: ['Casa Forte', 'Forma Eccellente', 'H2H Favorevole'],
    analysis: {
      recentForm: {
        home: ['V', 'V', 'V', 'V', 'V'],
        away: ['S', 'V', 'S', 'V', 'S']
      },
      headToHead: {
        total: 24,
        homeWins: 14,
        awayWins: 8,
        draws: 2,
        lastMeeting: 'Saracens 31-18 Leicester (Settembre 2024)'
      },
      keyStats: {
        home: {
          avgPointsScored: 26.8,
          avgPointsConceded: 15.2,
          homeRecord: '6V-1S',
          possession: '58%'
        },
        away: {
          avgPointsScored: 21.4,
          avgPointsConceded: 23.6,
          awayRecord: '3V-4S',
          possession: '52%'
        }
      }
    }
  },
  {
    id: 'toulouse-vs-la-rochelle-28-01-2025',
    date: '28 Gen 2025',
    time: '14:30',
    homeTeam: 'Toulouse',
    awayTeam: 'La Rochelle',
    championship: 'Top 14',
    prediction: 'Over 45.5 Punti',
    confidence: 78,
    odds: '1.85',
    preview: 'Due attacchi prolifici si sfidano in quello che promette di essere un match ad alto punteggio...',
    tags: ['Attacchi Forti', 'Over Storico', 'Meteo Favorevole']
  },
  {
    id: 'leinster-vs-munster-29-01-2025',
    date: '29 Gen 2025',
    time: '16:00',
    homeTeam: 'Leinster',
    awayTeam: 'Munster',
    championship: 'URC',
    prediction: 'Vittoria Leinster',
    confidence: 72,
    odds: '1.65',
    preview: 'Derby irlandese sempre equilibrato, ma il Leinster ha il vantaggio del fattore campo...',
    tags: ['Derby', 'Casa Forte', 'Tradizione']
  },
  {
    id: 'rovigo-vs-calvisano-30-01-2025',
    date: '30 Gen 2025',
    time: '15:30',
    homeTeam: 'Rovigo',
    awayTeam: 'Calvisano',
    championship: 'Serie A Elite',
    prediction: 'Under 40.5 Punti',
    confidence: 68,
    odds: '1.90',
    preview: 'Match tra due difese solide che storicamente produce pochi punti...',
    tags: ['Difese Solide', 'Under Storico', 'Tattico']
  },
  {
    id: 'bath-vs-harlequins-31-01-2025',
    date: '31 Gen 2025',
    time: '14:00',
    homeTeam: 'Bath Rugby',
    awayTeam: 'Harlequins',
    championship: 'Premiership Rugby',
    prediction: 'Pareggio',
    confidence: 65,
    odds: '3.20',
    preview: 'Due squadre molto equilibrate che potrebbero dare vita a un match tiratissimo...',
    tags: ['Equilibrio', 'Valore Quote', 'Incertezza']
  },
  {
    id: 'racing-vs-stade-francais-01-02-2025',
    date: '01 Feb 2025',
    time: '20:45',
    homeTeam: 'Racing 92',
    awayTeam: 'Stade Français',
    championship: 'Top 14',
    prediction: 'Vittoria Racing 92',
    confidence: 80,
    odds: '1.55',
    preview: 'Il Racing 92 domina i derby parigini e parte nettamente favorito...',
    tags: ['Derby Parigino', 'Favorito Netto', 'Statistiche H2H']
  }
]

export const teams = {
  'saracens': {
    id: 'saracens',
    name: 'Saracens',
    city: 'Londra',
    stadium: 'Allianz Park',
    founded: 1876,
    championship: 'Premiership Rugby',
    position: 1,
    points: 42,
    colors: ['#000000', '#FF0000'],
    stats: {
      played: 12,
      won: 10,
      lost: 2,
      avgPointsScored: 26.8,
      avgPointsConceded: 15.2,
      homeRecord: '6V-1S',
      awayRecord: '4V-1S',
      possession: '58%',
      kickAccuracy: '87%'
    },
    recentMatches: [
      {
        date: '20 Gen 2025',
        opponent: 'Leicester Tigers',
        home: true,
        result: 'V',
        score: '24-18',
        competition: 'Premiership'
      },
      {
        date: '13 Gen 2025',
        opponent: 'Bath Rugby',
        home: false,
        result: 'V',
        score: '31-15',
        competition: 'Premiership'
      },
      {
        date: '06 Gen 2025',
        opponent: 'Harlequins',
        home: true,
        result: 'V',
        score: '28-22',
        competition: 'Premiership'
      },
      {
        date: '30 Dic 2024',
        opponent: 'Northampton',
        home: false,
        result: 'S',
        score: '19-25',
        competition: 'Premiership'
      },
      {
        date: '23 Dic 2024',
        opponent: 'Sale Sharks',
        home: true,
        result: 'V',
        score: '35-14',
        competition: 'Premiership'
      }
    ],
    upcomingMatches: [
      {
        date: '27 Gen 2025',
        time: '15:00',
        opponent: 'Leicester Tigers',
        home: true,
        competition: 'Premiership',
        stadium: 'Allianz Park'
      },
      {
        date: '03 Feb 2025',
        time: '14:30',
        opponent: 'Bristol Bears',
        home: true,
        competition: 'Premiership',
        stadium: 'Allianz Park'
      },
      {
        date: '10 Feb 2025',
        time: '16:00',
        opponent: 'Gloucester',
        home: false,
        competition: 'Premiership',
        stadium: 'Kingsholm Stadium'
      }
    ]
  },
  'leicester': {
    id: 'leicester',
    name: 'Leicester Tigers',
    city: 'Leicester',
    stadium: 'Mattioli Woods Welford Road',
    founded: 1880,
    championship: 'Premiership Rugby',
    position: 2,
    points: 38,
    colors: ['#006400', '#FFD700']
  }
}

export const overallStats = {
  totalPredictions: 156,
  correctPredictions: 122,
  accuracy: 78,
  bestChampionship: 'Premiership Rugby',
  bestAccuracy: 82,
  totalMatches: 1247,
  championshipsCovered: 5
}

