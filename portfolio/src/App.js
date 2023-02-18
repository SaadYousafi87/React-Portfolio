import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import About from './pages/aboutme';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';

function App() {
  return (
    <>
    <HashRouter>
      <Header/>
        <Routes>
          <Route path="/">
            <Route index element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
          </Route>
      </Routes>
      <Footer />
    </HashRouter>
    </>
  );
}

export default App;
