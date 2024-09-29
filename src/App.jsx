import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/room" element={<Benefits />} />
        <Route path="/board" element={<Pricing />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
