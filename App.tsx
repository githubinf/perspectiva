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
import MyBlogAffiliateProgramsView from './components/views/MyBlogAffiliateProgramsView.tsx';
import InboundMarketingGuideView from './components/views/InboundMarketingGuideView.tsx';
import MasteringAffiliateMarketingView from './components/views/MasteringAffiliateMarketingView.tsx';
import MarketingCpaEntrepreneursView from './components/views/MarketingCpaEntrepreneursView.tsx';
import CpaSmartlinkFormulaView from './components/views/CpaSmartlinkFormulaView.tsx';
import DineroConClickbankView from './components/views/DineroConClickbankView.tsx';
import TipsAffiliateMarketingView from './components/views/TipsAffiliateMarketingView.tsx';
import ChatGptDineroView from './components/views/ChatGptDineroView.tsx';
import ChatGptInspirationView from './components/views/ChatGptInspirationView.tsx';
import InteligenciaArtificialView from './components/views/InteligenciaArtificialView.tsx';
import ElFuturoDelMarketingIaView from './components/views/ElFuturoDelMarketingIaView.tsx';
import IdeasTraficoWebView from './components/views/IdeasTraficoWebView.tsx';
import IdeasMaestrasTraficoWebView from './components/views/IdeasMaestrasTraficoWebView.tsx';
import PoderMarketingContenidosView from './components/views/PoderMarketingContenidosView.tsx';
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

  if (currentPath === '/mi-blog-y-los-programas-de-afiliados/' && matchedBook) {
    return <MyBlogAffiliateProgramsView book={matchedBook} />;
  }

  if (currentPath === '/guia-completa-de-inbound-marketing/' && matchedBook) {
    return <InboundMarketingGuideView book={matchedBook} />;
  }

  if (currentPath === '/dominando-el-marketing-de-afiliados/' && matchedBook) {
    return <MasteringAffiliateMarketingView book={matchedBook} />;
  }

  if (currentPath === '/marketing-cpa-para-emprendedores/' && matchedBook) {
    return <MarketingCpaEntrepreneursView book={matchedBook} />;
  }

  if (currentPath === '/cpa-marketing-formula-smartlink/' && matchedBook) {
    return <CpaSmartlinkFormulaView book={matchedBook} />;
  }

  if (currentPath === '/dinero-con-clickbank/' && matchedBook) {
    return <DineroConClickbankView book={matchedBook} />;
  }

  if (currentPath === '/tips-de-marketing-para-afiliados/' && matchedBook) {
    return <TipsAffiliateMarketingView book={matchedBook} />;
  }

  if (currentPath === '/como-ganar-dinero-con-chatgpt/' && matchedBook) {
    return <ChatGptDineroView book={matchedBook} />;
  }

  if (currentPath === '/desbloquea-tu-inspiracion-con-chatgpt/' && matchedBook) {
    return <ChatGptInspirationView book={matchedBook} />;
  }

  if (currentPath === '/inteligencia-artificial/' && matchedBook) {
    return <InteligenciaArtificialView book={matchedBook} />;
  }

  if (currentPath === '/el-futuro-del-marketing-ia/' && matchedBook) {
    return <ElFuturoDelMarketingIaView book={matchedBook} />;
  }

  if (currentPath === '/ideas-y-consejos-de-trafico-web/' && matchedBook) {
    return <IdeasTraficoWebView book={matchedBook} />;
  }

  if (currentPath === '/ideas-maestras-de-trafico-web/' && matchedBook) {
    return <IdeasMaestrasTraficoWebView book={matchedBook} />;
  }

  if (currentPath === '/el-poder-del-marketing-de-contenidos/' && matchedBook) {
    return <PoderMarketingContenidosView book={matchedBook} />;
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
