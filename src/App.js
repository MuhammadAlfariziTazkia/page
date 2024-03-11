import './App.css';
import Navbar from './navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage';
import LandingPage from './pages/LandingPage';
import FooterSection from './component/section/FooterSection'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path="/articles/:topic" element={<ArticlePage />}/>
        </Routes>
      </BrowserRouter>
      <FooterSection />
    </div>
  );
}

export default App;
