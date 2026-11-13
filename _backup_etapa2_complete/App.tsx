import React from 'react';
import Layout from './components/Layout.tsx';
import { RouterProvider, useRouter } from './router.tsx';
import HomeView from './components/views/HomeView.tsx';
import LibraryView from './components/views/LibraryView.tsx';
import CategoryView from './components/views/CategoryView.tsx';
import BookDetailView from './components/views/BookDetailView.tsx';
import SystemsView from './components/views/SystemsView.tsx';
import AboutView from './components/views/AboutView.tsx';
import ContactView from './components/views/ContactView.tsx';
import NotFoundView from './components/views/NotFoundView.tsx';

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

  if (matchedCategory) {
    return <CategoryView category={matchedCategory} />;
  }

  if (matchedBook) {
    return <BookDetailView book={matchedBook} />;
  }

  return <NotFoundView />;
};

const App: React.FC = () => {
  return (
    <RouterProvider>
      <Layout>
        <AppContent />
      </Layout>
    </RouterProvider>
  );
};

export default App;
