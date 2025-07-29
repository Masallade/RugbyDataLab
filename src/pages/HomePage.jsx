import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../App'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BarChart3, Target, Trophy, Calendar, TrendingUp } from 'lucide-react'

export function HomePage() {
  const cmsData = useContext(DataContext)

  if (!cmsData) {
    return <div className="flex items-center justify-center min-h-screen">Caricamento...</div>
  }

  const championships = Object.values(cmsData.championships || {})
  const recentMatches = cmsData.pastMatches?.slice(0, 5) || []
  const upcomingMatches = cmsData.futureMatches?.slice(0, 3) || []

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Analisi Rugby
            <span className="block text-yellow-400">di Livello Professionale</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Statistiche dettagliate, approfondimenti tattici e pronostici ragionati 
            sui principali campionati di rugby europei e internazionali
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/analisi-pronostici">
                <Target className="mr-2 h-5 w-5" />
                Scopri i Pronostici
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/campionati">
                <Trophy className="mr-2 h-5 w-5" />
                Esplora Campionati
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistiche in Evidenza */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">
                  {cmsData.pastMatches?.length || 0}
                </div>
                <div className="text-muted-foreground">Partite Analizzate</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-600 mb-2">78%</div>
                <div className="text-muted-foreground">Accuratezza Pronostici</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  {championships.length}
                </div>
                <div className="text-muted-foreground">Campionati Coperti</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600 mb-2">Quotidiani</div>
                <div className="text-muted-foreground">Aggiornamenti</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campionati in Evidenza */}
      <section id="campionati" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Campionati Coperti</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Analisi complete e statistiche dettagliate per i principali campionati di rugby
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {championships.map((championship) => (
              <Card key={championship.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{championship.name}</CardTitle>
                    <Badge variant="secondary">{championship.country}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {championship.teams?.length || 0} squadre • Classifiche aggiornate
                  </p>
                  <Button asChild className="w-full">
                    <Link to={`/campionato/${championship.id}`}>
                      Visualizza Classifica
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ultimi Risultati */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ultimi Risultati</h2>
            <p className="text-xl text-muted-foreground">
              I risultati più recenti con analisi dettagliate
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-4">Data</th>
                        <th className="text-left p-4">Partita</th>
                        <th className="text-center p-4">Risultato</th>
                        <th className="text-left p-4">Campionato</th>
                        <th className="text-center p-4">Azione</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentMatches.map((match) => (
                        <tr key={match.id} className="border-b">
                          <td className="p-4">
                            {new Date(match.date).toLocaleDateString('it-IT')}
                          </td>
                          <td className="p-4">
                            <div className="font-medium">
                              {match.homeTeam} vs {match.awayTeam}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {match.stadium}, {match.city}
                            </div>
                          </td>
                          <td className="p-4 text-center">
                            <Badge variant="outline" className="font-mono">
                              {match.score?.home}-{match.score?.away}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <Badge variant="secondary">
                              {cmsData.championships[match.championship]?.name || match.championship}
                            </Badge>
                          </td>
                          <td className="p-4 text-center">
                            <Button asChild variant="ghost" size="sm">
                              <Link to={`/pronostico/${match.id}`}>
                                Dettagli
                              </Link>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prossimi Pronostici */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prossimi Pronostici</h2>
            <p className="text-xl text-muted-foreground">
              Le nostre analisi per le partite in arrivo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {upcomingMatches.map((match) => (
              <Card key={match.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">
                      {new Date(match.date).toLocaleDateString('it-IT')}
                    </Badge>
                    <Badge variant="secondary">
                      {cmsData.championships[match.championship]?.name || match.championship}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">
                    {match.homeTeam} vs {match.awayTeam}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Pronostico:</span>
                      <Badge variant="default">{match.prediction?.outcome}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Confidenza:</span>
                      <span className="font-medium">{match.prediction?.confidence}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Quota:</span>
                      <span className="font-medium">{match.prediction?.recommendedOdds}</span>
                    </div>
                    <Button asChild className="w-full mt-4">
                      <Link to={`/pronostico/${match.id}`}>
                        <Calendar className="mr-2 h-4 w-4" />
                        Leggi Analisi
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/analisi-pronostici">
                Vedi Tutti i Pronostici
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

