import { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { DataContext } from '../App'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Trophy, MapPin, Calendar, Users } from 'lucide-react'

export function ChampionshipPage() {
  const { championshipId } = useParams()
  const cmsData = useContext(DataContext)

  if (!cmsData) {
    return <div className="flex items-center justify-center min-h-screen">Caricamento...</div>
  }

  const championship = cmsData.championships?.[championshipId]
  
  if (!championship) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Campionato non trovato</h1>
          <Button asChild>
            <Link to="/">Torna alla Homepage</Link>
          </Button>
        </div>
      </div>
    )
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'qualified': return 'bg-green-100 text-green-800'
      case 'playoff': return 'bg-blue-100 text-blue-800'
      case 'safe': return 'bg-gray-100 text-gray-800'
      case 'relegation': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'qualified': return 'Qualificato'
      case 'playoff': return 'Playoff'
      case 'safe': return 'Sicuro'
      case 'relegation': return 'Retrocessione'
      default: return 'N/A'
    }
  }

  const championshipMatches = cmsData.pastMatches?.filter(match => match.championship === championshipId) || []
  const upcomingMatches = cmsData.futureMatches?.filter(match => match.championship === championshipId) || []

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted/50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-primary hover:underline">Home</Link>
            <span>/</span>
            <Link to="/campionati" className="text-primary hover:underline">Campionati</Link>
            <span>/</span>
            <span className="text-muted-foreground">{championship.name}</span>
          </nav>
        </div>
      </div>

      {/* Header Campionato */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
              <Trophy className="h-12 w-12 text-primary" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{championship.name}</h1>
              <div className="flex flex-col md:flex-row items-center gap-4 text-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {championship.country}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  {championship.teams?.length || 0} squadre
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenuto Principale */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="classifica" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="classifica">Classifica</TabsTrigger>
              <TabsTrigger value="squadre">Squadre</TabsTrigger>
              <TabsTrigger value="calendario">Calendario</TabsTrigger>
              <TabsTrigger value="statistiche">Statistiche</TabsTrigger>
            </TabsList>

            <TabsContent value="classifica" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    Classifica Generale
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3">Pos</th>
                          <th className="text-left p-3">Squadra</th>
                          <th className="text-center p-3">G</th>
                          <th className="text-center p-3">V</th>
                          <th className="text-center p-3">P</th>
                          <th className="text-center p-3">S</th>
                          <th className="text-center p-3">PF</th>
                          <th className="text-center p-3">PS</th>
                          <th className="text-center p-3">Diff</th>
                          <th className="text-center p-3">Punti</th>
                          <th className="text-center p-3">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {championship.standings?.map((team) => {
                          // Find the corresponding team object to get the correct ID
                          // Try exact match first, then partial match
                          const teamObj = championship.teams?.find(t => 
                            t.name === team.team || 
                            t.name.includes(team.team.replace('Rugby ', '')) ||
                            team.team.includes(t.name) ||
                            // Additional fallback: normalize names for comparison
                            t.name.toLowerCase().replace(/[^a-z0-9]/g, '') === team.team.toLowerCase().replace(/[^a-z0-9]/g, '')
                          )
                          const teamId = teamObj?.id || team.team.toLowerCase().replace(/\s+/g, '-')
                          
                          // Debug logging for team name mismatches
                          if (!teamObj) {
                            console.warn(`Team not found in teams array: "${team.team}" in ${championship.name}`)
                          }
                          
                          return (
                            <tr key={team.position} className="border-b hover:bg-muted/50">
                              <td className="p-3 font-bold">{team.position}</td>
                              <td className="p-3">
                                <Link 
                                  to={`/squadra/${teamId}`}
                                  className="font-medium hover:text-primary"
                                >
                                  {team.team}
                                </Link>
                              </td>
                              <td className="p-3 text-center">{team.played}</td>
                              <td className="p-3 text-center">{team.won}</td>
                              <td className="p-3 text-center">{team.drawn}</td>
                              <td className="p-3 text-center">{team.lost}</td>
                              <td className="p-3 text-center">{team.pointsFor}</td>
                              <td className="p-3 text-center">{team.pointsAgainst}</td>
                              <td className="p-3 text-center">
                                <span className={team.pointsDifference >= 0 ? 'text-green-600' : 'text-red-600'}>
                                  {team.pointsDifference >= 0 ? '+' : ''}{team.pointsDifference}
                                </span>
                              </td>
                              <td className="p-3 text-center font-bold">{team.points}</td>
                              <td className="p-3 text-center">
                                <Badge className={getStatusColor(team.status)}>
                                  {getStatusText(team.status)}
                                </Badge>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="squadre" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {championship.teams?.map((team) => (
                  <Card key={team.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                          <span className="font-bold text-lg">{team.name.charAt(0)}</span>
                        </div>
                        <div>
                          <CardTitle className="text-lg">{team.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{team.city}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Stadio:</span>
                          <span>{team.stadium}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Fondato:</span>
                          <span>{team.founded}</span>
                        </div>
                      </div>
                      <Button asChild className="w-full mt-4">
                        <Link to={`/squadra/${team.id}`}>
                          Vedi Dettagli
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calendario" className="mt-6">
              <div className="space-y-6">
                {/* Partite Recenti */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Partite Recenti
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {championshipMatches.slice(0, 5).map((match) => (
                        <div key={match.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <div className="font-medium">
                              {match.homeTeam} vs {match.awayTeam}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {new Date(match.date).toLocaleDateString('it-IT')} • {match.stadium}
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="font-mono">
                              {match.score?.home}-{match.score?.away}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Prossime Partite */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Prossime Partite
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {upcomingMatches.slice(0, 5).map((match) => (
                        <div key={match.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <div className="font-medium">
                              {match.homeTeam} vs {match.awayTeam}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {new Date(match.date).toLocaleDateString('it-IT')} • {match.time} • {match.stadium}
                            </div>
                          </div>
                          <div className="text-right">
                            <Button asChild variant="outline" size="sm">
                              <Link to={`/pronostico/${match.id}`}>
                                Pronostico
                              </Link>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="statistiche" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Partite Giocate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">
                      {championshipMatches.length}
                    </div>
                    <p className="text-muted-foreground">Partite analizzate</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Media Punti</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">
                      {championship.standings?.length > 0 
                        ? Math.round(championship.standings.reduce((sum, team) => sum + team.pointsFor, 0) / championship.standings.length)
                        : 0
                      }
                    </div>
                    <p className="text-muted-foreground">Punti per partita</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Squadre Attive</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">
                      {championship.teams?.length || 0}
                    </div>
                    <p className="text-muted-foreground">Nel campionato</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

