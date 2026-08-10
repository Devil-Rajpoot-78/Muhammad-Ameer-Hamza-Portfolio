import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, Navigation, Footer, LoadingScreen } from '@components/index';
import { HomePage, ProjectsPage, AboutPage, ContactPage, PlaygroundPage } from '@pages/index';
import './App.css';

function App() {
  return (
    <Router>
      <LoadingScreen />
      <Navigation />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          {/* Redirect missing routes */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
