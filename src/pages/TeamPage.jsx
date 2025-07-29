import { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { DataContext } from '../App'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, MapPin, Calendar, Trophy, Target, Shield, Clock, TrendingUp, Users, Zap, BarChart3, Activity } from 'lucide-react'
import { StatsTable } from '../components/StatsTable'
import { premiershipAverages } from '../data/rugbyStats'

export function TeamPage() {
  const { teamId } = useParams()
  const cmsData = useContext(DataContext)

  if (!cmsData) {
    return <div className="flex items-center justify-center min-h-screen">Caricamento...</div>
  }

  // Find the team in all championships
  let team = null
  for (const championshipId in cmsData.championships) {
    const foundTeam = cmsData.championships[championshipId].teams.find(t => 
      t.id.toLowerCase() === teamId.toLowerCase()
    )
    if (foundTeam) {
      // Enrich team data with additional information
      team = {
        ...foundTeam,
        championship: cmsData.championships[championshipId].name,
        championshipId: championshipId,
        position: cmsData.championships[championshipId].standings?.find(s => s.team === foundTeam.name)?.position || 'N/A',
        points: cmsData.championships[championshipId].standings?.find(s => s.team === foundTeam.name)?.points || 0,
        
        // Use the seasonStats from cms.json
        stats: foundTeam.seasonStats || {
          puntiClassifica: 0,
          mete: 0,
          trasformazioni: 0,
          calciPiazzati: 0,
          dropGoal: 0,
          possessoMedio: 0,
          territorioMedio: 0,
          ingressi22m: 0,
          puntiDai22m: 0,
          metriPostContatto: 0,
          cariche: 0,
          breakPuliti: 0,
          difensoriBattuti: 0,
          offLoad: 0,
          passaggi: 0,
          turnOverConcessi: 0,
          placcaggiRiusciti: 0,
          placcaggiRiuscitiPercentuale: 0,
          placcaggiMancati: 0,
          turnOverVinti: 0,
          rimesseLateraliTot: 0,
          rimesseLateraliVinte: 0,
          rimesseLateraliPerse: 0,
          mischieTot: 0,
          mischieVinte: 0,
          mischiePerse: 0,
          calciDalGioco: 0,
          metriCalciati: 0,
          ruckVinte: 0,
          ruckPerse: 0,
          maulVinte: 0,
          maulPerse: 0,
          cartelliniGialli: 0,
          cartelliniRossi: 0
        },
        
        // Use the matches from cms.json
        recentMatches: foundTeam.recentMatches || [],
        upcomingMatches: foundTeam.upcomingMatches || []
      }
      break
    }
  }

  // If no team found, return a not found page
  if (!team) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Squadra non trovata</h1>
        <p className="text-muted-foreground mb-4">
          La squadra con ID "{teamId}" non è stata trovata nei dati disponibili.
        </p>
        <Button asChild>
          <Link to="/campionati">Torna ai Campionati</Link>
        </Button>
      </div>
    )
  }

  // Statistiche chiave per il dashboard
  const getKeyStats = (stats) => {
    return [
      { 
        label: 'Punti Classifica', 
        value: stats.puntiClassifica, 
        icon: Trophy,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-100'
      },
      { 
        label: 'Mete Segnate', 
        value: stats.mete, 
        icon: Target,
        color: 'text-green-600',
        bgColor: 'bg-green-100'
      },
      { 
        label: 'Possesso Medio', 
        value: `${stats.possessoMedio}%`, 
        icon: Clock,
        color: 'text-blue-600',
        bgColor: 'bg-blue-100'
      },
      { 
        label: 'Placcaggi %', 
        value: `${stats.placcaggiRiuscitiPercentuale}%`, 
        icon: Shield,
        color: 'text-red-600',
        bgColor: 'bg-red-100'
      },
      { 
        label: 'Rimesse Vinte', 
        value: stats.rimesseLateraliTot > 0 ? `${((stats.rimesseLateraliVinte / stats.rimesseLateraliTot) * 100).toFixed(1)}%` : '0%', 
        icon: TrendingUp,
        color: 'text-purple-600',
        bgColor: 'bg-purple-100'
      },
      { 
        label: 'Disciplina', 
        value: stats.cartelliniGialli + stats.cartelliniRossi, 
        icon: Users,
        color: 'text-orange-600',
        bgColor: 'bg-orange-100',
        subtitle: 'cartellini'
      }
    ]
  }

  const keyStats = getKeyStats(team.stats)

  // Organize stats into categories for tabs
  const statsCategories = {
    'Attacco': [
      { label: 'Mete', value: team.stats.mete, unit: '' },
      { label: 'Trasformazioni', value: team.stats.trasformazioni, unit: '' },
      { label: 'Calci Piazzati', value: team.stats.calciPiazzati, unit: '' },
      { label: 'Drop Goal', value: team.stats.dropGoal, unit: '' },
      { label: 'Punti dai 22m', value: team.stats.puntiDai22m, unit: '' },
      { label: 'Ingressi 22m', value: team.stats.ingressi22m, unit: '' }
    ],
    'Possesso': [
      { label: 'Possesso Medio', value: team.stats.possessoMedio, unit: '%' },
      { label: 'Territorio Medio', value: team.stats.territorioMedio, unit: '%' },
      { label: 'Cariche', value: team.stats.cariche, unit: '' },
      { label: 'Metri Post-Contatto', value: team.stats.metriPostContatto, unit: 'm' },
      { label: 'Break Puliti', value: team.stats.breakPuliti, unit: '' },
      { label: 'Difensori Battuti', value: team.stats.difensoriBattuti, unit: '' },
      { label: 'Offload', value: team.stats.offLoad, unit: '' },
      { label: 'Passaggi', value: team.stats.passaggi, unit: '' }
    ],
    'Difesa': [
      { label: 'Placcaggi Riusciti', value: team.stats.placcaggiRiusciti, unit: '' },
      { label: 'Placcaggi %', value: team.stats.placcaggiRiuscitiPercentuale, unit: '%' },
      { label: 'Placcaggi Mancati', value: team.stats.placcaggiMancati, unit: '' },
      { label: 'Turnover Vinti', value: team.stats.turnOverVinti, unit: '' },
      { label: 'Turnover Concessi', value: team.stats.turnOverConcessi, unit: '' }
    ],
    'Set Pieces': [
      { label: 'Rimesse Totali', value: team.stats.rimesseLateraliTot, unit: '' },
      { label: 'Rimesse Vinte', value: team.stats.rimesseLateraliVinte, unit: '' },
      { label: 'Rimesse Perse', value: team.stats.rimesseLateraliPerse, unit: '' },
      { label: 'Mischie Totali', value: team.stats.mischieTot, unit: '' },
      { label: 'Mischie Vinte', value: team.stats.mischieVinte, unit: '' },
      { label: 'Mischie Perse', value: team.stats.mischiePerse, unit: '' }
    ],
    'Calci': [
      { label: 'Calci dal Gioco', value: team.stats.calciDalGioco, unit: '' },
      { label: 'Metri Calciati', value: team.stats.metriCalciati, unit: 'm' }
    ],
    'Contatti': [
      { label: 'Ruck Vinti', value: team.stats.ruckVinte, unit: '' },
      { label: 'Ruck Persi', value: team.stats.ruckPerse, unit: '' },
      { label: 'Maul Vinti', value: team.stats.maulVinte, unit: '' },
      { label: 'Maul Persi', value: team.stats.maulPerse, unit: '' }
    ],
    'Disciplina': [
      { label: 'Cartellini Gialli', value: team.stats.cartelliniGialli, unit: '' },
      { label: 'Cartellini Rossi', value: team.stats.cartelliniRossi, unit: '' }
    ]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 mb-6">
        <Button asChild variant="ghost" size="sm">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Home
          </Link>
        </Button>
        <span className="text-muted-foreground">/</span>
        <Link to="/campionati" className="text-muted-foreground hover:text-primary">
          Campionati
        </Link>
        <span className="text-muted-foreground">/</span>
        <Link to={`/campionato/${team.championshipId}`} className="text-muted-foreground hover:text-primary">
          {team.championship}
        </Link>
        <span className="text-muted-foreground">/</span>
        <span className="font-medium">{team.name}</span>
      </div>

      {/* Header Squadra */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center">
              {team.logo ? (
                <img 
                  src={team.logo} 
                  alt={`${team.name} logo`} 
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <span className="text-2xl font-bold text-muted-foreground">
                  {team.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold">{team.name}</h1>
                <Badge variant="outline">#{team.position} in classifica</Badge>
              </div>
              <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{team.stadium}, {team.city}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Fondato nel {team.founded}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4" />
                  <span>{team.championship}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{team.points}</div>
                  <div className="text-sm text-muted-foreground">Punti</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{team.stats.mete}</div>
                  <div className="text-sm text-muted-foreground">Mete</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{team.stats.possessoMedio}%</div>
                  <div className="text-sm text-muted-foreground">Possesso</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistiche Chiave */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {keyStats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <IconComponent className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                    {stat.subtitle && (
                      <div className="text-xs text-muted-foreground">{stat.subtitle}</div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Colonna Principale */}
        <div className="lg:col-span-2 space-y-8">
          {/* Statistiche Dettagliate con Tabs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Statistiche Dettagliate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="Attacco" className="w-full">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="Attacco">Attacco</TabsTrigger>
                  <TabsTrigger value="Possesso">Possesso</TabsTrigger>
                  <TabsTrigger value="Difesa">Difesa</TabsTrigger>
                  <TabsTrigger value="Set Pieces">Set Pieces</TabsTrigger>
                  <TabsTrigger value="Calci">Calci</TabsTrigger>
                  <TabsTrigger value="Contatti">Contatti</TabsTrigger>
                </TabsList>
                
                {Object.entries(statsCategories).map(([category, stats]) => (
                  <TabsContent key={category} value={category} className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                          <span className="text-sm text-muted-foreground">{stat.label}</span>
                          <span className="font-semibold">{stat.value}{stat.unit}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Forma Recente */}
          {team.recentMatches.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Forma Recente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {team.recentMatches.map((match, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                          match.result === 'V' ? 'bg-green-500' : match.result === 'S' ? 'bg-red-500' : 'bg-gray-500'
                        }`}>
                          {match.result}
                        </div>
                        <div>
                          <div className="font-medium">
                            {match.home ? 'vs' : '@'} {match.opponent}
                          </div>
                          <div className="text-sm text-muted-foreground">{match.competition}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{match.score}</div>
                        <div className="text-sm text-muted-foreground">{match.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Prossime Partite */}
          {team.upcomingMatches.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Prossime Partite
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {team.upcomingMatches.map((match, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{match.competition}</Badge>
                      <span className="text-sm text-muted-foreground">{match.date}</span>
                    </div>
                    <div className="font-medium mb-1">
                      {match.home ? 'vs' : '@'} {match.opponent}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {match.time} - {match.stadium}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Informazioni Squadra */}
          <Card>
            <CardHeader>
              <CardTitle>Informazioni</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Posizione</span>
                <span className="font-medium">#{team.position}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Punti Totali</span>
                <span className="font-medium">{team.points}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Stadio</span>
                <span className="font-medium">{team.stadium}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Città</span>
                <span className="font-medium">{team.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Fondazione</span>
                <span className="font-medium">{team.founded}</span>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6 text-center">
              <h3 className="font-bold mb-2">Analisi Approfondite</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Scopri i nostri pronostici per le prossime partite di {team.name}
              </p>
              <Button asChild className="w-full">
                <Link to="/analisi-pronostici">
                  Vedi Pronostici
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

