
import React, { Suspense } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import PageLoader from './components/PageLoader';
import Footer from './components/Footer';
import 'lucide-react';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

const RootApp: React.FC = () => (
  <HashRouter>
    <App />
  </HashRouter>
);

export default RootApp;
