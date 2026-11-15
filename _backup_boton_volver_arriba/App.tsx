import React from 'react';
import Layout from './components/Layout.tsx';
import { RouterProvider, useRouter } from './router.tsx';
import HomeView from './components/views/HomeView.tsx';
import LibraryView from './components/views/LibraryView.tsx';
import CategoryView from './components/views/CategoryView.tsx';
import OriginView from './components/views/OriginView.tsx';
import InitiationView from './components/views/InitiationView.tsx';
import IncomeView from './components/views/IncomeView.tsx';
import TechnologyView from './components/views/TechnologyView.tsx';
import GrowthView from './components/views/GrowthView.tsx';
import MindsetView from './components/views/MindsetView.tsx';
import BookDetailView from './components/views/BookDetailView.tsx';
import SystemsView from './components/views/SystemsView.tsx';
import AboutView from './components/views/AboutView.tsx';
import ContactView from './components/views/ContactView.tsx';
import NotFoundView from './components/views/NotFoundView.tsx';
import SeoHead from './components/SeoHead.tsx';

const AppContent: React.FC = () => {
  const { currentPath, matchedCategory, matchedBook } = useRouter();

  if (currentPath === '/') {
    return <HomeView />;
  }

  if (currentPath === '/biblioteca/') {
    return <LibraryView />;
  }

  if (currentPath === '/sistemas-digitales/') {
    return <SystemsView />;
  }

  if (currentPath === '/sobre-fg-perspectiva/') {
    return <AboutView />;
  }

  if (currentPath === '/contacto/') {
    return <ContactView />;
  }

  if (currentPath === '/origen/' && matchedCategory) {
    return <OriginView category={matchedCategory} />;
  }

  if (currentPath === '/iniciacion/' && matchedCategory) {
    return <InitiationView category={matchedCategory} />;
  }

  if (currentPath === '/ingresos/' && matchedCategory) {
    return <IncomeView category={matchedCategory} />;
  }

  if (currentPath === '/tecnologia/' && matchedCategory) {
    return <TechnologyView category={matchedCategory} />;
  }

  if (currentPath === '/crecimiento/' && matchedCategory) {
    return <GrowthView category={matchedCategory} />;
  }

  if (currentPath === '/mindset/' && matchedCategory) {
    return <MindsetView category={matchedCategory} />;
  }

  if (matchedCategory) {
    return <CategoryView category={matchedCategory} />;
  }

  if (matchedBook) {
    return <BookDetailView book={matchedBook} />;
  }

  return <NotFoundView />;
};

export interface AppProps {
  initialPath?: string;
}

const App: React.FC<AppProps> = ({ initialPath }) => {
  return (
    <RouterProvider initialPath={initialPath}>
      <SeoHead />
      <Layout>
        <AppContent />
      </Layout>
    </RouterProvider>
  );
};

export default App;
