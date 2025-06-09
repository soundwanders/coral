# 🐙 Coral Dashboard

> **A Mock React Dashboard for Project Management**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-coraldash.netlify.app-blue?style=flat-square)](https://coraldash.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4e4a21fd-e0f6-4f15-8e4c-7ca55f0acb33/deploy-status)](https://app.netlify.com/sites/coralquarrel/deploys)
[![React](https://img.shields.io/badge/React-17.0.2-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Styled Components](https://img.shields.io/badge/Styled--Components-5.3.3-DB7093?style=flat-square&logo=styled-components)](https://styled-components.com/)

## 🌊 About

Coral Dashboard is a modern, responsive dashboard application built with React that provides comprehensive project management and analytics capabilities. Featuring beautiful data visualizations, client management, and an intuitive user interface with ocean-themed design elements.

### ✨ Key Features

- **📊 Interactive Analytics** - Dynamic charts and data visualizations with Recharts
- **👥 Client Management** - Complete client information and relationship tracking
- **💰 Invoice Management** - Invoice tracking with payment status indicators
- **📈 Project Timeline** - Visual project progression with timeline components
- **🔍 Smart Search** - Real-time filtering across clients, invoices, and projects
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI/UX** - Styled-components with smooth animations and transitions
- **🌊 Ocean Theme** - Delightful marine-inspired design elements and animations

## 🚀 Quick Start

### Prerequisites

- Node.js 14+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/soundwanders/coral.git
   cd coral
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Tech Stack

### Core Technologies
- **React 17** - Component-based UI library
- **React Router DOM 6** - Client-side routing
- **Styled Components 5** - CSS-in-JS styling solution

### Data Visualization
- **Recharts 2** - Composable charting library built on React components
- **React Vertical Timeline** - Timeline visualization component

### UI & Design
- **React Icons 4** - Popular icon libraries as React components
- **Custom Animations** - CSS keyframes and styled-component transitions
- **Responsive Design** - Mobile-first approach with breakpoint management

### Development Tools
- **Prettier** - Code formatting
- **Create React App** - Development environment

## 📁 Project Structure

```
coral/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── charts/          # Data visualization components
│   │   ├── common/          # Shared UI elements
│   │   └── dashboard/       # Dashboard-specific components
│   ├── routes/              # Page-level components
│   │   ├── Analytics.jsx    # Analytics dashboard
│   │   ├── ClientList.jsx   # Client management
│   │   ├── InvoiceList.jsx  # Invoice tracking
│   │   └── Projects.jsx     # Project timeline & cards
│   ├── assets/              # Static images and SVGs
│   ├── utilities/           # Helper functions and constants
│   ├── db.json              # Mock data store
│   └── App.js               # Main application component
├── public/                  # Static assets
└── package.json
```

## 🎯 Core Features

### Dashboard Overview
- **Revenue Tracking** - Real-time revenue metrics with growth indicators
- **Project Status** - Active project monitoring with due dates
- **Quick Actions** - Streamlined access to common tasks
- **Recent Activity** - Latest invoices and project updates

### Analytics & Reporting
- **Sales Analytics** - Revenue breakdown with interactive pie charts
- **Growth Metrics** - Client growth and project progression visualization
- **Conversion Tracking** - Performance metrics with percentage indicators
- **Overview Charts** - Multi-line charts showing trends across metrics

### Client Management
- **Client Profiles** - Comprehensive client information storage
- **Contact Details** - Full contact information with search functionality
- **Project History** - Track all projects associated with each client
- **Acquisition Tracking** - Monitor client acquisition dates and growth

### Invoice System
- **Payment Status** - Visual indicators for paid, pending, and late invoices
- **Client Integration** - Direct links between invoices and client profiles
- **Search & Filter** - Quick invoice lookup by client or status
- **Amount Tracking** - Total sales and individual invoice amounts

### Project Management
- **Timeline View** - Visual project progression with interactive timeline
- **Project Cards** - Card-based project overview with key details
- **Status Tracking** - Project phases and completion status
- **Client Integration** - Project-client relationship mapping

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#6161ff` - Main theme color
- **Dark Theme**: `#162349` - Sidebar and accents
- **Success Green**: `#2d8600` - Paid status indicators
- **Warning Red**: `#e55054` - Late payment alerts
- **Background**: `#eaf5ff` - Main background with gradient

### Typography
- **Primary Font**: Raleway - Clean, professional sans-serif
- **Accent Font**: Arvo - Serif font for emphasis
- **Utility Font**: Quicksand - Light weight for subtle text

### Component Variants
- **Cards**: Elevated surfaces with shadow and hover effects
- **Badges**: Status indicators with contextual coloring
- **Buttons**: Consistent styling with active states
- **Forms**: Clean inputs with focus states

## 🔧 Available Scripts

### Development
```bash
npm start          # Start development server
npm run build      # Build for production
npm run format     # Format code with Prettier
npm run reset      # Clean build directory
```

### Code Quality
- **Prettier Integration** - Automatic code formatting
- **ESLint Configuration** - Code quality enforcement
- **Responsive Testing** - Mobile and desktop compatibility

## 📊 Data Architecture

### Mock Data Structure
The application uses a JSON-based mock data system (`db.json`) containing:

```json
{
  "clients": [
    {
      "id": 0,
      "name": "Client Name",
      "organization": "Company Name",
      "address": "Physical Address",
      "state": "Location",
      "email": "contact@email.com",
      "phone": "Phone Number",
      "dateAcquired": "Acquisition Date",
      "totalSales": 8200,
      "projects": 8,
      "growth": 18,
      "conversions": 5,
      "lastInvoice": "Last Invoice Date",
      "service": "Service Type"
    }
  ]
}
```

### Data Features
- **Real-time Calculations** - Dynamic totals and metrics
- **Filtering System** - Search across multiple fields
- **Relationship Mapping** - Client-project-invoice connections
- **Growth Tracking** - Historical performance data

## 🌊 Special Features

### Ocean Theme Elements
- **Animated Fish** - CSS keyframe animations swimming across screens
- **Marine Icons** - Sea creature icons throughout the interface
- **Ocean Gradients** - Blue-to-aqua gradient backgrounds
- **Reef Imagery** - Coral reef banner elements

### Interactive Elements
- **Hover Effects** - Smooth transitions on interactive elements
- **Loading States** - Elegant loading animations
- **Responsive Charts** - Touch-friendly chart interactions
- **Smooth Scrolling** - Optimized scrolling performance

## 📱 Browser Support

- **Chrome** - Latest 2 versions
- **Firefox** - Latest 2 versions  
- **Safari** - Latest 2 versions
- **Edge** - Latest 2 versions
- **Mobile Browsers** - iOS Safari, Chrome Mobile

## 🚀 Deployment

### Netlify (Current)
The project is automatically deployed via Netlify with continuous deployment from the main branch.

### Manual Deployment
```bash
npm run build     # Create production build
# Deploy the 'build' folder to your hosting provider
```

### Environment Configuration
- **Redirects**: Configured for SPA routing (`_redirects` file)
- **Build Settings**: Optimized for static hosting
- **Asset Optimization**: Automatic compression and caching

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow the existing code style
   - Ensure responsive design principles
   - Test across different screen sizes
4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines
- **Component Structure** - Keep components focused and reusable
- **Styling Consistency** - Use styled-components with theme variables
- **Performance** - Optimize for smooth animations and interactions
- **Accessibility** - Ensure keyboard navigation and screen reader support

## 📈 Performance

### Optimization Features
- **Code Splitting** - Automatic route-based code splitting
- **Asset Optimization** - Optimized images and SVGs
- **Lazy Loading** - Components loaded on demand
- **Efficient Rendering** - Minimized re-renders with React best practices

### Metrics
- **Lighthouse Score** - Optimized for performance, accessibility, and SEO
- **Bundle Size** - Minimized JavaScript and CSS bundles
- **Loading Speed** - Fast initial page load and navigation

## 📄 License

This project is licensed under the MIT