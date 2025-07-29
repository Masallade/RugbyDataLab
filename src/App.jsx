import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect, createContext } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ChampionshipPage } from './pages/ChampionshipPage'
import { TeamPage } from './pages/TeamPage'
import { AnalysisPage } from './pages/AnalysisPage'
import { PredictionPage } from './pages/PredictionPage'
import { CampionatiPage } from './pages/CampionatiPage'
import './App.css'

export const DataContext = createContext(null);

function App() {
  const [cmsData, setCmsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/cms.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('CMS Data Loaded:', data);
        setCmsData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching CMS data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Caricamento dati...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">Errore nel caricamento dei dati: {error.message}</div>;
  }

  return (
    <DataContext.Provider value={cmsData}>
      <Router>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/campionati" element={<CampionatiPage />} />
              <Route path="/campionato/:championshipId" element={<ChampionshipPage />} />
              <Route path="/squadra/:teamId" element={<TeamPage />} />
              <Route path="/analisi-pronostici" element={<AnalysisPage />} />
              <Route 
                path="/pronostico/:matchId" 
                element={<PredictionPage />} 
                errorElement={
                  <div className="flex items-center justify-center min-h-screen text-red-500">
                    Errore nel caricamento della pagina del pronostico
                  </div>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </DataContext.Provider>
  );
}

export default App;


