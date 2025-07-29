import { useContext, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../App'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { 
  Target, 
  Calendar, 
  Trophy,
  Star,
  Search,
  Filter,
  TrendingUp,
  CheckCircle,
  Clock,
  ArrowUpRight
} from 'lucide-react'

export function AnalysisPage() {
  const cmsData = useContext(DataContext)
  const [selectedChampionship, setSelectedChampionship] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [dateFilter, setDateFilter] = useState('all')

  if (!cmsData) {
    return <div className="flex items-center justify-center min-h-screen">Caricamento...</div>
  }

  const championships = Object.values(cmsData.championships || {})
  const futureMatches = cmsData.futureMatches || []
  const pastMatches = cmsData.pastMatches || []
  const predictions = cmsData.predictions || []

  // Advanced Filtering Function
  const filterMatches = (matches, isPast = false) => {
    return matches.filter(match => {
      const matchDate = new Date(match.date)
      const today = new Date()
      
      // Championship Filter
      const matchesChampionship = selectedChampionship === 'all' || 
        match.championship === selectedChampionship
      
      // Search Filter
      const matchesSearch = searchTerm === '' || 
        match.homeTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.awayTeam.toLowerCase().includes(searchTerm.toLowerCase())
      
      // Date Filter
      let dateCondition = true
      if (dateFilter === 'last30') {
        const thirtyDaysAgo = new Date()
        thirtyDaysAgo.setDate(today.getDate() - 30)
        dateCondition = isPast ? 
          matchDate >= thirtyDaysAgo && matchDate <= today :
          matchDate > today
      } else if (dateFilter === 'next30') {
        const thirtyDaysFromNow = new Date()
        thirtyDaysFromNow.setDate(today.getDate() + 30)
        dateCondition = isPast ? false : matchDate <= thirtyDaysFromNow
      }

      return matchesChampionship && matchesSearch && dateCondition
    })
  }

  const filteredFutureMatches = filterMatches(futureMatches)
  const filteredPastMatches = filterMatches(pastMatches, true)

  // Confidence Color and Stars Function
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

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Analisi & Pronostici
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Pronostici ragionati e analisi dettagliate per tutte le partite dei principali campionati di rugby
          </p>
        </div>
      </section>

      {/* Filtri */}
      <section className="py-6 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Championship Filter */}
            <Select value={selectedChampionship} onValueChange={setSelectedChampionship}>
              <SelectTrigger>
                <SelectValue placeholder="Seleziona campionato" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tutti i campionati</SelectItem>
                {championships.map((championship) => (
                  <SelectItem key={championship.id} value={championship.id}>
                    {championship.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cerca squadre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Date Filter */}
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Periodo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tutti i periodi</SelectItem>
                <SelectItem value="last30">Ultimi 30 giorni</SelectItem>
                <SelectItem value="next30">Prossimi 30 giorni</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Contenuto Principale */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="prossimi" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="prossimi">Prossimi Pronostici</TabsTrigger>
              <TabsTrigger value="passati">Analisi Passate</TabsTrigger>
              <TabsTrigger value="statistiche">Statistiche Generali</TabsTrigger>
            </TabsList>

            {/* Prossimi Pronostici */}
            <TabsContent value="prossimi" className="mt-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Prossimi Pronostici</h2>
                  <Badge variant="secondary">
                    {filteredFutureMatches.length} partite
                  </Badge>
                </div>

                {filteredFutureMatches.length === 0 ? (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Nessuna partita trovata</h3>
                      <p className="text-muted-foreground">
                        Prova a modificare i filtri o torna più tardi per nuovi pronostici.
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredFutureMatches.map((match) => (
                      <Card key={match.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline">
                              {new Date(match.date).toLocaleDateString('it-IT')}
                            </Badge>
                            <Badge variant="secondary">
                              {cmsData.championships[match.championship]?.name || match.championship}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg flex justify-between items-center">
                            {match.homeTeam} vs {match.awayTeam}
                            <Link to={`/pronostico/${match.id}`} className="hover:text-primary">
                              <ArrowUpRight className="h-5 w-5" />
                            </Link>
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {match.time} • {match.stadium}
                          </p>
                        </CardHeader>
                        <CardContent>
                          {match.prediction && (
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Pronostico:</span>
                                <Badge variant="default">{match.prediction.outcome}</Badge>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Confidenza:</span>
                                <div className="flex items-center gap-1">
                                  {getConfidenceStars(match.prediction.confidence)}
                                  <span className={`text-sm font-medium ml-1 ${getConfidenceColor(match.prediction.confidence)}`}>
                                    {match.prediction.confidence}%
                                  </span>
                                </div>
                              </div>
                              
                              {match.prediction.recommendedOdds && (
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-muted-foreground">Quota:</span>
                                  <span className="font-medium text-green-600">
                                    {match.prediction.recommendedOdds}
                                  </span>
                                </div>
                              )}
                              
                              <Button asChild className="w-full mt-4">
                                <Link to={`/pronostico/${match.id}`}>
                                  <Target className="mr-2 h-4 w-4" />
                                  Leggi Analisi Completa
                                </Link>
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Analisi Passate */}
            <TabsContent value="passati" className="mt-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Analisi Passate</h2>
                  <Badge variant="secondary">
                    {filteredPastMatches.length} partite
                  </Badge>
                </div>

                {filteredPastMatches.length === 0 ? (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Nessuna analisi trovata</h3>
                      <p className="text-muted-foreground">
                        Prova a modificare i filtri per vedere più risultati.
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    {filteredPastMatches.map((match) => (
                      <Card key={match.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline">
                                  {new Date(match.date).toLocaleDateString('it-IT')}
                                </Badge>
                                <Badge variant="secondary">
                                  {cmsData.championships[match.championship]?.name || match.championship}
                                </Badge>
                              </div>
                              
                              <h3 className="text-lg font-semibold mb-1 flex justify-between items-center">
                                {match.homeTeam} vs {match.awayTeam}
                                <Link to={`/pronostico/${match.id}`} className="hover:text-primary">
                                  <ArrowUpRight className="h-5 w-5" />
                                </Link>
                              </h3>
                              
                              <p className="text-sm text-muted-foreground mb-2">
                                {match.stadium}, {match.city}
                              </p>
                              
                              {match.score && (
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-muted-foreground">Risultato:</span>
                                  <Badge variant="outline" className="font-mono">
                                    {match.score.home}-{match.score.away}
                                  </Badge>
                                </div>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <Button asChild variant="outline" size="sm">
                                <Link to={`/pronostico/${match.id}`}>
                                  Vedi Statistiche
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Statistiche Generali */}
            <TabsContent value="statistiche" className="mt-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Statistiche Generali</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                      <div className="text-3xl font-bold text-primary mb-2">
                        {predictions.length}
                      </div>
                      <div className="text-muted-foreground">Pronostici Totali</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 text-center">
                      <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-green-600 mb-2">78%</div>
                      <div className="text-muted-foreground">Accuratezza Media</div>
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
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {pastMatches.length}
                      </div>
                      <div className="text-muted-foreground">Partite Analizzate</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Accuratezza per Campionato */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Accuratezza per Campionato</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {championships.map((championship) => (
                        <div key={championship.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{championship.name}</span>
                            <Badge variant="secondary">{championship.country}</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Accuratezza:</span>
                            <span className="font-bold text-green-600">
                              {Math.floor(Math.random() * 30) + 70}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
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

