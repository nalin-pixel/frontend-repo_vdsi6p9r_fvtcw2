import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Page from './components/Page.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [route, setRoute] = useState(() => {
    const h = window.location.hash.replace('#', '') || 'home';
    return h.toLowerCase();
  });

  useEffect(() => {
    const onHashChange = () => {
      const h = window.location.hash.replace('#', '') || 'home';
      setRoute(h.toLowerCase());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const CurrentView = useMemo(() => {
    const key = route.split('/')[0];
    switch (key) {
      case 'services':
        return <Page type="services" />;
      case 'projects':
        return <Page type="projects" />;
      case 'blog':
        return <Page type="blog" />;
      case 'contact':
        return <Page type="contact" />;
      case 'home':
      default:
        return <Home />;
    }
  }, [route]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-white">
      <Navbar route={route} />
      {CurrentView}
      <Footer />
    </div>
  );
}

export default App;
