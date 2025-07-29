import { Link } from 'react-router-dom'
import { BarChart3, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrizione */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg">RugbyDataLab</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Analisi statistiche, approfondimenti e pronostici dettagliati sui principali 
              campionati di rugby europei e internazionali.
            </p>
          </div>

          {/* Links Rapidi */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Navigazione</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/analisi-pronostici" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Analisi & Pronostici
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Campionati */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Campionati</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/campionato/premiership-rugby" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Premiership Rugby
                </Link>
              </li>
              <li>
                <Link to="/campionato/top-14" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Top 14
                </Link>
              </li>
              <li>
                <Link to="/campionato/urc" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  URC
                </Link>
              </li>
              <li>
                <Link to="/campionato/serie-a-elite" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Serie A Elite
                </Link>
              </li>
              <li>
                <Link to="/campionato/sei-nazioni" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sei Nazioni
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Ricevi i nostri pronostici e analisi direttamente nella tua email.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="La tua email" 
                className="flex-1"
              />
              <Button size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2025 RugbyDataLab. Tutti i diritti riservati.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termini di Servizio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

