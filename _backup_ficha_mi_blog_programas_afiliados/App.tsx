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
import SolopreneurManualView from './components/views/SolopreneurManualView.tsx';
import AbundanceView from './components/views/AbundanceView.tsx';
import HypnoticSellerView from './components/views/HypnoticSellerView.tsx';
import DeLaPlumaAlDineroView from './components/views/DeLaPlumaAlDineroView.tsx';
import ExpertoPlrPremiumView from './components/views/ExpertoPlrPremiumView.tsx';
import HowToCreateOptimizedBlogView from './components/views/HowToCreateOptimizedBlogView.tsx';
import SystemsView from './components/views/SystemsView.tsx';
import AboutView from './components/views/AboutView.tsx';
import ContactView from './components/views/ContactView.tsx';
import NotFoundView from './components/views/NotFoundView.tsx';
import SeoHead from './components/SeoHead.tsx';
import BackToTopButton from './components/BackToTopButton.tsx';

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

  if (currentPath === '/el-manual-del-solopreneur-moderno/' && matchedBook) {
    return <SolopreneurManualView book={matchedBook} />;
  }

  if (currentPath === '/el-arte-de-atraer-la-abundancia/' && matchedBook) {
    return <AbundanceView book={matchedBook} />;
  }

  if (currentPath === '/el-vendedor-hipnotico/' && matchedBook) {
    return <HypnoticSellerView book={matchedBook} />;
  }

  if (currentPath === '/de-la-pluma-al-dinero/' && matchedBook) {
    return <DeLaPlumaAlDineroView book={matchedBook} />;
  }

  if (currentPath === '/experto-en-plr-premium/' && matchedBook) {
    return <ExpertoPlrPremiumView book={matchedBook} />;
  }

  if (currentPath === '/como-crear-un-blog-optimizado/' && matchedBook) {
    return <HowToCreateOptimizedBlogView book={matchedBook} />;
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
      <BackToTopButton />
    </RouterProvider>
  );
};

export default App;
