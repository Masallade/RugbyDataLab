# RugbyDataLab 🏉

A comprehensive rugby analytics and prediction platform built with React, providing detailed statistics, match analysis, and predictions for major European rugby championships.

![RugbyDataLab](https://img.shields.io/badge/RugbyDataLab-Analytics%20Platform-green)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.7-38B2AC)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF)

## 🎯 Features

### 📊 **Comprehensive Analytics**
- **Team Statistics**: Detailed performance metrics for all teams
- **Match Analysis**: Historical and upcoming match data
- **Performance Tracking**: Possession, territory, set pieces, and more
- **Visual Charts**: Interactive data visualization with Recharts

### 🏆 **Multi-Championship Support**
- **Premiership Rugby** (England)
- **Top 14** (France)
- **URC** (United Rugby Championship)
- **Serie A Elite** (Italy)
- **Six Nations** (International)
- **European Rugby Champions Cup**

### 📈 **Advanced Predictions**
- **Match Predictions**: AI-powered outcome predictions
- **Confidence Scoring**: Probability-based predictions
- **Historical Analysis**: Performance trends and patterns
- **Statistical Models**: Data-driven prediction algorithms

### 🎨 **Modern UI/UX**
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Dark/Light Theme**: Theme switching capability
- **Interactive Components**: Rich UI with Radix UI components
- **Smooth Animations**: Framer Motion animations

## 🚀 Quick Start

### Prerequisites
- **Node.js** (version 18 or higher)
- **pnpm** (recommended package manager)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd rugby-analytics

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
rugby-analytics/
├── public/
│   ├── cms.json              # Main data source (editable)
│   ├── favicon.ico
│   └── assets/               # Images and logos
├── src/
│   ├── components/
│   │   ├── ui/               # Reusable UI components
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Footer.jsx        # Site footer
│   │   └── StatsTable.jsx    # Statistics display
│   ├── pages/
│   │   ├── HomePage.jsx      # Landing page
│   │   ├── ChampionshipPage.jsx  # Championship details
│   │   ├── TeamPage.jsx      # Team profiles
│   │   ├── AnalysisPage.jsx  # Predictions & analysis
│   │   ├── PredictionPage.jsx # Match predictions
│   │   └── CampionatiPage.jsx # Championships overview
│   ├── data/
│   │   ├── rugbyStats.js     # Statistical data
│   │   └── sampleData.js     # Sample data
│   ├── hooks/
│   │   └── use-mobile.js     # Mobile detection
│   ├── lib/
│   │   └── utils.js          # Utility functions
│   ├── App.jsx               # Main application
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🏗️ Architecture

### **Frontend Stack**
- **React 19.1.0**: Modern React with hooks
- **Vite 6.3.5**: Fast build tool and dev server
- **React Router DOM 7.6.1**: Client-side routing
- **Tailwind CSS 4.1.7**: Utility-first CSS framework

### **UI Components**
- **Radix UI**: Accessible, unstyled components
- **Lucide React**: Beautiful icons
- **Framer Motion**: Smooth animations
- **Recharts**: Data visualization

### **Data Management**
- **Context API**: Global state management
- **JSON-based CMS**: Static data in `public/cms.json`
- **Dynamic Loading**: Real-time data fetching

## 📊 Data Structure

### **Championship Data**
```json
{
  "championships": {
    "championship-id": {
      "id": "championship-id",
      "name": "Championship Name",
      "country": "Country",
      "logo": "/assets/logo.png",
      "teams": [...],
      "standings": [...]
    }
  }
}
```

### **Team Data**
```json
{
  "id": "team-id",
  "name": "Team Name",
  "city": "City",
  "stadium": "Stadium Name",
  "founded": 1900,
  "logo": "/assets/team-logo.png",
  "seasonStats": {
    "puntiClassifica": 0,
    "mete": 0,
    "trasformazioni": 0,
    // ... more statistics
  },
  "recentMatches": [...],
  "upcomingMatches": [...]
}
```

### **Match Data**
```json
{
  "id": "match-id",
  "homeTeam": "Home Team",
  "awayTeam": "Away Team",
  "date": "2025-01-20",
  "time": "15:00",
  "stadium": "Stadium Name",
  "city": "City",
  "championship": "championship-id",
  "score": {
    "home": 24,
    "away": 18
  },
  "prediction": {
    "outcome": "Home Win",
    "confidence": 75,
    "recommendedOdds": "1.85"
  }
}
```

## 🎨 UI Components

### **Reusable Components**
- **Cards**: Information containers
- **Tables**: Data display
- **Tabs**: Content organization
- **Badges**: Status indicators
- **Buttons**: Interactive elements
- **Forms**: Data input
- **Modals**: Overlay content

### **Custom Components**
- **StatsTable**: Statistical data display
- **Header**: Navigation and branding
- **Footer**: Links and information
- **Charts**: Data visualization

## 🔧 Configuration

### **Environment Setup**
```bash
# Development
pnpm dev

# Production build
pnpm build

# Preview production
pnpm preview

# Linting
pnpm lint
```

### **Data Updates**
The application uses a JSON-based CMS system:
- Edit `public/cms.json` to update data
- No rebuild required for data changes
- Real-time data loading

### **Customization**
- **Themes**: Modify `src/index.css` for theme changes
- **Components**: Edit components in `src/components/`
- **Data**: Update `public/cms.json` for content changes
- **Routing**: Modify routes in `src/App.jsx`

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Features**
- **Mobile-first design**
- **Touch-friendly interfaces**
- **Optimized navigation**
- **Responsive charts**

## 🚀 Performance

### **Optimizations**
- **Code splitting**: Route-based lazy loading
- **Image optimization**: Optimized assets
- **Bundle optimization**: Tree shaking
- **Caching**: Efficient data caching

### **Metrics**
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔍 SEO & Accessibility

### **SEO Features**
- **Semantic HTML**: Proper document structure
- **Meta tags**: Dynamic meta information
- **Structured data**: JSON-LD markup
- **Sitemap**: Auto-generated sitemap

### **Accessibility**
- **WCAG 2.1 AA**: Compliance standards
- **Keyboard navigation**: Full keyboard support
- **Screen reader**: ARIA labels and roles
- **Color contrast**: High contrast ratios

## 🛠️ Development

### **Code Quality**
```bash
# Linting
pnpm lint

# Type checking (if using TypeScript)
pnpm type-check

# Format code
pnpm format
```

### **Testing**
```bash
# Run tests
pnpm test

# Test coverage
pnpm test:coverage
```

### **Git Workflow**
```bash
# Feature branch
git checkout -b feature/new-feature

# Commit changes
git commit -m "feat: add new feature"

# Push changes
git push origin feature/new-feature
```

## 📈 Analytics & Monitoring

### **Performance Monitoring**
- **Core Web Vitals**: Real-time monitoring
- **Error tracking**: Automatic error reporting
- **User analytics**: Usage statistics
- **Performance metrics**: Load times and interactions

### **Data Analytics**
- **User behavior**: Page views and interactions
- **Performance metrics**: Load times and errors
- **Conversion tracking**: Goal completions
- **A/B testing**: Feature experimentation

## 🔒 Security

### **Best Practices**
- **HTTPS**: Secure connections
- **Content Security Policy**: XSS protection
- **Input validation**: Data sanitization
- **Dependency scanning**: Vulnerability checks

### **Data Protection**
- **GDPR compliance**: Privacy regulations
- **Data encryption**: Secure data handling
- **Access control**: User permissions
- **Audit logging**: Activity tracking

## 🤝 Contributing

### **Guidelines**
1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Add tests if applicable**
5. **Submit a pull request**

### **Code Standards**
- **ESLint**: Code linting rules
- **Prettier**: Code formatting
- **Conventional Commits**: Commit message format
- **TypeScript**: Type safety (optional)

