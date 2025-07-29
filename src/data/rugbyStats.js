// Statistiche dettagliate del rugby come richiesto dall'utente

export const rugbyStatCategories = {
  scoring: {
    name: 'Punteggio',
    stats: [
      { key: 'punti_classifica', name: 'Punti classifica', unit: 'pts' },
      { key: 'mete', name: 'Mete', unit: 'n.' },
      { key: 'trasformazioni', name: 'Trasformazioni', unit: 'n.' },
      { key: 'calci_piazzati', name: 'Calci piazzati', unit: 'n.' },
      { key: 'drop_goal', name: 'Drop goal', unit: 'n.' }
    ]
  },
  possession: {
    name: 'Possesso e Territorio',
    stats: [
      { key: 'possesso_medio', name: 'Possesso medio', unit: '%' },
      { key: 'territorio_medio', name: 'Territorio medio', unit: '%' },
      { key: 'ingressi_22m', name: 'Ingressi nei 22 m', unit: 'n.' },
      { key: 'punti_dai_22m', name: 'Punti dai 22 m', unit: 'n.' }
    ]
  },
  attack: {
    name: 'Attacco',
    stats: [
      { key: 'metri_post_contatto', name: 'Metri post-contatto', unit: 'm' },
      { key: 'cariche', name: 'Cariche (carries)', unit: 'n.' },
      { key: 'break_puliti', name: 'Break puliti', unit: 'n.' },
      { key: 'difensori_battuti', name: 'Difensori battuti', unit: 'n.' },
      { key: 'off_load', name: 'Off-load', unit: 'n.' },
      { key: 'passaggi', name: 'Passaggi', unit: 'n.' },
      { key: 'turn_over_concessi', name: 'Turn-over concessi', unit: 'n.' }
    ]
  },
  defense: {
    name: 'Difesa',
    stats: [
      { key: 'placcaggi_riusciti', name: 'Placcaggi riusciti', unit: 'n.' },
      { key: 'placcaggi_percentuale', name: 'Placcaggi %', unit: '%' },
      { key: 'placcaggi_mancati', name: 'Placcaggi mancati', unit: 'n.' },
      { key: 'turn_over_vinti', name: 'Turn-over vinti', unit: 'n.' }
    ]
  },
  setpiece: {
    name: 'Pezzi da Fermo',
    stats: [
      { key: 'rimesse_totali', name: 'Rimesse laterali tot', unit: 'n.' },
      { key: 'rimesse_vinte', name: 'Rimesse laterali vinte', unit: 'n.' },
      { key: 'rimesse_perse', name: 'Rimesse laterali perse', unit: 'n.' },
      { key: 'mischie_totali', name: 'Mischie tot', unit: 'n.' },
      { key: 'mischie_vinte', name: 'Mischie vinte', unit: 'n.' },
      { key: 'mischie_perse', name: 'Mischie perse', unit: 'n.' }
    ]
  },
  kicking: {
    name: 'Gioco al Piede',
    stats: [
      { key: 'calci_dal_gioco', name: 'Calci dal gioco', unit: 'n.' },
      { key: 'metri_calciati', name: 'Metri calciati', unit: 'm' }
    ]
  },
  breakdown: {
    name: 'Breakdown',
    stats: [
      { key: 'ruck_vinte', name: 'Ruck vinte', unit: 'n.' },
      { key: 'ruck_perse', name: 'Ruck perse', unit: 'n.' },
      { key: 'maul_vinte', name: 'Maul vinte', unit: 'n.' },
      { key: 'maul_perse', name: 'Maul perse', unit: 'n.' }
    ]
  },
  discipline: {
    name: 'Disciplina',
    stats: [
      { key: 'cartellini_gialli', name: 'Cartellini gialli', unit: 'n.' },
      { key: 'cartellini_rossi', name: 'Cartellini rossi', unit: 'n.' }
    ]
  }
}

// Dati di esempio per Saracens
export const saracensStats = {
  // Punteggio
  punti_classifica: 42,
  mete: 38,
  trasformazioni: 32,
  calci_piazzati: 24,
  drop_goal: 2,
  
  // Possesso e Territorio
  possesso_medio: 58.2,
  territorio_medio: 61.4,
  ingressi_22m: 42,
  punti_dai_22m: 156,
  
  // Attacco
  metri_post_contatto: 1247,
  cariche: 892,
  break_puliti: 67,
  difensori_battuti: 234,
  off_load: 89,
  passaggi: 1456,
  turn_over_concessi: 34,
  
  // Difesa
  placcaggi_riusciti: 1234,
  placcaggi_percentuale: 87.3,
  placcaggi_mancati: 178,
  turn_over_vinti: 67,
  
  // Pezzi da Fermo
  rimesse_totali: 156,
  rimesse_vinte: 139,
  rimesse_perse: 17,
  mischie_totali: 89,
  mischie_vinte: 78,
  mischie_perse: 11,
  
  // Gioco al Piede
  calci_dal_gioco: 234,
  metri_calciati: 3456,
  
  // Breakdown
  ruck_vinte: 567,
  ruck_perse: 89,
  maul_vinte: 45,
  maul_perse: 12,
  
  // Disciplina
  cartellini_gialli: 8,
  cartellini_rossi: 1
}

// Dati di esempio per Leicester Tigers
export const leicesterStats = {
  // Punteggio
  punti_classifica: 38,
  mete: 32,
  trasformazioni: 28,
  calci_piazzati: 19,
  drop_goal: 1,
  
  // Possesso e Territorio
  possesso_medio: 52.1,
  territorio_medio: 48.7,
  ingressi_22m: 36,
  punti_dai_22m: 134,
  
  // Attacco
  metri_post_contatto: 1089,
  cariche: 756,
  break_puliti: 54,
  difensori_battuti: 198,
  off_load: 67,
  passaggi: 1234,
  turn_over_concessi: 42,
  
  // Difesa
  placcaggi_riusciti: 1089,
  placcaggi_percentuale: 79.2,
  placcaggi_mancati: 287,
  turn_over_vinti: 52,
  
  // Pezzi da Fermo
  rimesse_totali: 142,
  rimesse_vinte: 119,
  rimesse_perse: 23,
  mischie_totali: 76,
  mischie_vinte: 64,
  mischie_perse: 12,
  
  // Gioco al Piede
  calci_dal_gioco: 198,
  metri_calciati: 2987,
  
  // Breakdown
  ruck_vinte: 489,
  ruck_perse: 123,
  maul_vinte: 34,
  maul_perse: 18,
  
  // Disciplina
  cartellini_gialli: 12,
  cartellini_rossi: 0
}

// Statistiche medie del campionato per confronti
export const premiershipAverages = {
  punti_classifica: 28.5,
  mete: 28.4,
  trasformazioni: 24.1,
  calci_piazzati: 18.7,
  drop_goal: 1.2,
  possesso_medio: 50.0,
  territorio_medio: 50.0,
  ingressi_22m: 32.5,
  punti_dai_22m: 118.3,
  metri_post_contatto: 987.2,
  cariche: 678.9,
  break_puliti: 45.6,
  difensori_battuti: 167.8,
  off_load: 56.7,
  passaggi: 1156.4,
  turn_over_concessi: 38.9,
  placcaggi_riusciti: 1034.5,
  placcaggi_percentuale: 82.1,
  placcaggi_mancati: 225.6,
  turn_over_vinti: 48.3,
  rimesse_totali: 134.2,
  rimesse_vinte: 112.8,
  rimesse_perse: 21.4,
  mischie_totali: 72.1,
  mischie_vinte: 60.3,
  mischie_perse: 11.8,
  calci_dal_gioco: 187.4,
  metri_calciati: 2876.3,
  ruck_vinte: 456.7,
  ruck_perse: 98.2,
  maul_vinte: 32.1,
  maul_perse: 14.6,
  cartellini_gialli: 9.8,
  cartellini_rossi: 0.6
}

// Funzione per calcolare le percentuali
export const calculatePercentages = (stats) => {
  return {
    ...stats,
    rimesse_percentuale: ((stats.rimesse_vinte / stats.rimesse_totali) * 100).toFixed(1),
    mischie_percentuale: ((stats.mischie_vinte / stats.mischie_totali) * 100).toFixed(1),
    ruck_percentuale: ((stats.ruck_vinte / (stats.ruck_vinte + stats.ruck_perse)) * 100).toFixed(1),
    maul_percentuale: ((stats.maul_vinte / (stats.maul_vinte + stats.maul_perse)) * 100).toFixed(1),
    trasformazioni_percentuale: ((stats.trasformazioni / stats.mete) * 100).toFixed(1)
  }
}

// Funzione per confrontare con la media
export const compareWithAverage = (teamStats, averages) => {
  const comparison = {}
  Object.keys(teamStats).forEach(key => {
    if (averages[key] !== undefined) {
      const diff = teamStats[key] - averages[key]
      const percentage = ((diff / averages[key]) * 100).toFixed(1)
      comparison[key] = {
        value: teamStats[key],
        average: averages[key],
        difference: diff,
        percentageDiff: percentage,
        better: diff > 0
      }
    }
  })
  return comparison
}

// Statistiche chiave per dashboard
export const getKeyStats = (stats) => {
  return [
    { label: 'Punti Classifica', value: stats.punti_classifica, icon: 'trophy' },
    { label: 'Mete Segnate', value: stats.mete, icon: 'target' },
    { label: 'Possesso Medio', value: `${stats.possesso_medio}%`, icon: 'clock' },
    { label: 'Placcaggi %', value: `${stats.placcaggi_percentuale}%`, icon: 'shield' },
    { label: 'Rimesse Vinte', value: `${((stats.rimesse_vinte / stats.rimesse_totali) * 100).toFixed(1)}%`, icon: 'arrow-up' },
    { label: 'Disciplina', value: `${stats.cartellini_gialli + stats.cartellini_rossi} cartellini`, icon: 'alert-triangle' }
  ]
}

