import './App.css';
import SideBar from './composant/SideBar';
import TempMaintienCalculator from './composant/Simulateur';
import HomePage from './pages/accueil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeatingCalculator from './composant/ChauffageGazLiquideSolide';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/temp-maintien" element={<TempMaintienCalculator />} />
          <Route path="/chauffage-liquide-solide-gaz" element={<HeatingCalculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
