import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../App';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy } from 'lucide-react';

export function CampionatiPage() {
  const cmsData = useContext(DataContext);

  if (!cmsData) {
    return <div className="flex items-center justify-center min-h-screen">Caricamento...</div>;
  }

  const championships = Object.values(cmsData.championships || {});

  return (
    <div className="min-h-screen py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Campionati</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tutti i campionati di rugby disponibili con analisi e statistiche dettagliate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {championships.map((championship) => (
            <Card key={championship.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-600" />
                    {championship.name}
                  </CardTitle>
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
    </div>
  );
} 