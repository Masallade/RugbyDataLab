import { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { DataContext } from '../App'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Target, 
  TrendingUp, 
  Calendar, 
  MapPin, 
  Trophy,
  Star,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BarChart2,
  Percent,
  Clock
} from 'lucide-react'

export function PredictionPage() {
  const { matchId } = useParams()
  const cmsData = useContext(DataContext)

  useEffect(() => {
    console.log('Match ID from URL:', matchId)
    console.log('Future Matches:', cmsData?.futureMatches)
    console.log('Past Matches:', cmsData?.pastMatches)
  }, [matchId, cmsData])

  if (!cmsData) {
    return <div className="flex items-center justify-center min-h-screen">Caricamento...</div>
  }

  // Cerca la partita sia nelle partite future che in quelle passate
  const allMatches = [...(cmsData.futureMatches || []), ...(cmsData.pastMatches || [])]
  const match = allMatches.find(m => m.id === matchId)
  
  useEffect(() => {
    console.log('Matched Match:', match)
    console.log('All Matches:', allMatches)
  }, [match, allMatches])
  
  if (!match) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Partita non trovata</h1>
          <p className="text-muted-foreground mb-4">
            Dettagli ricerca:
            <pre>{JSON.stringify({ 
              matchId, 
              futureMatchesCount: cmsData.futureMatches?.length, 
              pastMatchesCount: cmsData.pastMatches?.length,
              matchIds: allMatches.map(m => m.id)
            }, null, 2)}</pre>
          </p>
          <Button asChild>
            <Link to="/analisi-pronostici">Torna ai Pronostici</Link>
          </Button>
        </div>
      </div>
    )
  }

  const championship = cmsData.championships?.[match.championship]
  const isFinished = !!match.score
  const hasStats = !!match.stats

  const getConfidenceColor = (confidence) => {
    if (confidence >= 80) return 'text-green-600'
    if (confidence >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getConfidenceStars = (confidence) => {
    const stars = Math.round(confidence / 20)
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ))
  }

  // Funzione per formattare le statistiche
  const formatStatistic = (value) => {
    return typeof value === 'number' ? value.toLocaleString() : value
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted/50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-primary hover:underline">Home</Link>
            <span>/</span>
            <Link to="/analisi-pronostici" className="text-primary hover:underline">Analisi & Pronostici</Link>
            <span>/</span>
            <span className="text-muted-foreground">{match.homeTeam} vs {match.awayTeam}</span>
          </nav>
        </div>
      </div>

      {/* Header Partita */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <Badge variant="secondary" className="mb-2">
              {championship?.name || match.championship} - Giornata {match.round || 'N/A'}
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {match.homeTeam} vs {match.awayTeam}
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {new Date(match.date).toLocaleDateString('it-IT', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
              {match.time && `, ${match.time}`}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              {match.stadium}, {match.city}
            </div>
          </div>

          {isFinished && (
            <div className="mt-6">
              <Badge variant="secondary" className="text-2xl px-6 py-2">
                Risultato Finale: {match.score.home}-{match.score.away}
              </Badge>
            </div>
          )}
        </div>
      </section>

      {/* Contenuto Principale */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonna Principale */}
            <div className="lg:col-span-2 space-y-6">
              {/* Pronostico Principale */}
              {match.prediction && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Pronostico Principale
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Esito Previsto:</span>
                        <Badge variant="default" className="text-sm">
                        {match.prediction.outcome}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Confidenza Previsione:</span>
                        <div className="flex items-center gap-2">
                          {getConfidenceStars(match.prediction.confidence)}
                          <span className={`font-bold ${getConfidenceColor(match.prediction.confidence)}`}>
                            {match.prediction.confidence}%
                          </span>
                        </div>
                      </div>
                      
                      {match.prediction.recommendedOdds && (
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Quota Consigliata:</span>
                          <span className="font-bold text-green-600">
                              {match.prediction.recommendedOdds}
                            </span>
                          </div>
                      )}
                      
                      {match.prediction.analysis && (
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Analisi Dettagliata</h3>
                          <p className="text-muted-foreground">
                            {match.prediction.analysis}
                          </p>
                        </div>
                      )}
                      
                      {match.prediction.keyFactors && (
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Fattori Chiave</h3>
                          <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            {match.prediction.keyFactors.map((factor, index) => (
                              <li key={index}>{factor}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Statistiche Dettagliate */}
              {hasStats && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart2 className="h-5 w-5" />
                      Statistiche Dettagliate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(match.stats).map(([key, value]) => (
                        <div key={key} className="border rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="font-bold">{formatStatistic(value.home)}</span>
                              <span className="text-muted-foreground">-</span>
                              <span className="font-bold">{formatStatistic(value.away)}</span>
                        </div>
            </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
                  </div>

            {/* Colonna Laterale */}
            <div className="space-y-6">
              {/* Disclaimer */}
              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-yellow-800 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Disclaimer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-yellow-800">
                    Questo pronostico è basato su analisi statistiche e non garantisce risultati. 
                    Gioca responsabilmente e scommetti solo quello che puoi permetterti di perdere.
                  </p>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-primary text-white">
                <CardHeader>
                  <CardTitle>Ti è piaciuta questa analisi?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Scopri tutti i nostri pronostici e analisi dettagliate per non perdere mai 
                    un'opportunità di scommessa vincente.
                  </p>
                  <div className="space-y-2">
                    <Button asChild variant="secondary" className="w-full">
                      <Link to="/analisi-pronostici">
                        Vedi Altri Pronostici
                      </Link>
                    </Button>
                    <Button asChild variant="secondary" className="w-full">
                      <Link to="/#newsletter">
                        Iscriviti alla Newsletter
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

