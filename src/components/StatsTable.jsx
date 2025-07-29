import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

export function StatsTable({ teamStats, averages, teamName }) {
  // Calcola le percentuali
  const calculatePercentages = (stats) => {
    return {
      ...stats,
      rimesse_percentuale: ((stats.rimesse_vinte / stats.rimesse_totali) * 100).toFixed(1),
      mischie_percentuale: ((stats.mischie_vinte / stats.mischie_totali) * 100).toFixed(1),
      ruck_percentuale: ((stats.ruck_vinte / (stats.ruck_vinte + stats.ruck_perse)) * 100).toFixed(1),
      maul_percentuale: ((stats.maul_vinte / (stats.maul_vinte + stats.maul_perse)) * 100).toFixed(1),
      trasformazioni_percentuale: ((stats.trasformazioni / stats.mete) * 100).toFixed(1)
    }
  }

  const statsWithPercentages = calculatePercentages(teamStats)

  // Confronta con la media
  const compareWithAverage = (value, average) => {
    const diff = value - average
    const percentage = ((diff / average) * 100).toFixed(1)
    return {
      difference: diff,
      percentageDiff: percentage,
      better: diff > 0,
      trend: diff > 0 ? 'up' : diff < 0 ? 'down' : 'neutral'
    }
  }

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-600" />
      case 'down': return <TrendingDown className="h-4 w-4 text-red-600" />
      default: return <Minus className="h-4 w-4 text-gray-600" />
    }
  }

  const getTrendBadge = (comparison, isHigherBetter = true) => {
    const isBetter = isHigherBetter ? comparison.better : !comparison.better
    return (
      <Badge variant={isBetter ? "default" : "secondary"} className="text-xs">
        {comparison.percentageDiff > 0 ? '+' : ''}{comparison.percentageDiff}%
      </Badge>
    )
  }

  const statCategories = [
    {
      id: 'scoring',
      name: 'Punteggio',
      stats: [
        { key: 'punti_classifica', name: 'Punti classifica', unit: 'pts' },
        { key: 'mete', name: 'Mete', unit: 'n.' },
        { key: 'trasformazioni', name: 'Trasformazioni', unit: 'n.' },
        { key: 'trasformazioni_percentuale', name: 'Trasformazioni %', unit: '%' },
        { key: 'calci_piazzati', name: 'Calci piazzati', unit: 'n.' },
        { key: 'drop_goal', name: 'Drop goal', unit: 'n.' }
      ]
    },
    {
      id: 'possession',
      name: 'Possesso e Territorio',
      stats: [
        { key: 'possesso_medio', name: 'Possesso medio', unit: '%' },
        { key: 'territorio_medio', name: 'Territorio medio', unit: '%' },
        { key: 'ingressi_22m', name: 'Ingressi nei 22 m', unit: 'n.' },
        { key: 'punti_dai_22m', name: 'Punti dai 22 m', unit: 'n.' }
      ]
    },
    {
      id: 'attack',
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
    {
      id: 'defense',
      name: 'Difesa',
      stats: [
        { key: 'placcaggi_riusciti', name: 'Placcaggi riusciti', unit: 'n.' },
        { key: 'placcaggi_percentuale', name: 'Placcaggi %', unit: '%' },
        { key: 'placcaggi_mancati', name: 'Placcaggi mancati', unit: 'n.' },
        { key: 'turn_over_vinti', name: 'Turn-over vinti', unit: 'n.' }
      ]
    },
    {
      id: 'setpiece',
      name: 'Pezzi da Fermo',
      stats: [
        { key: 'rimesse_totali', name: 'Rimesse laterali tot', unit: 'n.' },
        { key: 'rimesse_vinte', name: 'Rimesse laterali vinte', unit: 'n.' },
        { key: 'rimesse_percentuale', name: 'Rimesse laterali %', unit: '%' },
        { key: 'mischie_totali', name: 'Mischie tot', unit: 'n.' },
        { key: 'mischie_vinte', name: 'Mischie vinte', unit: 'n.' },
        { key: 'mischie_percentuale', name: 'Mischie %', unit: '%' }
      ]
    },
    {
      id: 'kicking',
      name: 'Gioco al Piede',
      stats: [
        { key: 'calci_dal_gioco', name: 'Calci dal gioco', unit: 'n.' },
        { key: 'metri_calciati', name: 'Metri calciati', unit: 'm' }
      ]
    },
    {
      id: 'breakdown',
      name: 'Breakdown',
      stats: [
        { key: 'ruck_vinte', name: 'Ruck vinte', unit: 'n.' },
        { key: 'ruck_perse', name: 'Ruck perse', unit: 'n.' },
        { key: 'ruck_percentuale', name: 'Ruck %', unit: '%' },
        { key: 'maul_vinte', name: 'Maul vinte', unit: 'n.' },
        { key: 'maul_perse', name: 'Maul perse', unit: 'n.' },
        { key: 'maul_percentuale', name: 'Maul %', unit: '%' }
      ]
    },
    {
      id: 'discipline',
      name: 'Disciplina',
      stats: [
        { key: 'cartellini_gialli', name: 'Cartellini gialli', unit: 'n.' },
        { key: 'cartellini_rossi', name: 'Cartellini rossi', unit: 'n.' }
      ]
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistiche Dettagliate - {teamName}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="scoring" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            {statCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-xs">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {statCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="overflow-x-auto">
                <table className="rugby-table w-full">
                  <thead>
                    <tr>
                      <th>Statistica</th>
                      <th>{teamName}</th>
                      <th>Media Campionato</th>
                      <th>Confronto</th>
                      <th>Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.stats.map((stat) => {
                      const teamValue = statsWithPercentages[stat.key]
                      const avgValue = averages[stat.key]
                      const comparison = avgValue ? compareWithAverage(teamValue, avgValue) : null
                      
                      // Determina se un valore più alto è meglio
                      const isHigherBetter = !['turn_over_concessi', 'placcaggi_mancati', 'rimesse_perse', 'mischie_perse', 'ruck_perse', 'maul_perse', 'cartellini_gialli', 'cartellini_rossi'].includes(stat.key)

                      return (
                        <tr key={stat.key}>
                          <td className="font-medium">{stat.name}</td>
                          <td className="font-bold text-primary">
                            {teamValue !== undefined ? `${teamValue}${stat.unit === '%' ? '' : ` ${stat.unit}`}` : 'N/A'}
                          </td>
                          <td className="text-muted-foreground">
                            {avgValue !== undefined ? `${avgValue}${stat.unit === '%' ? '' : ` ${stat.unit}`}` : 'N/A'}
                          </td>
                          <td>
                            {comparison && getTrendBadge(comparison, isHigherBetter)}
                          </td>
                          <td>
                            {comparison && getTrendIcon(comparison.trend)}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Legenda */}
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-medium mb-2">Legenda:</h4>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span>Sopra la media</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingDown className="h-4 w-4 text-red-600" />
              <span>Sotto la media</span>
            </div>
            <div className="flex items-center space-x-2">
              <Minus className="h-4 w-4 text-gray-600" />
              <span>In linea con la media</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            * Per alcune statistiche (es. cartellini, turn-over concessi), valori più bassi sono migliori
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

