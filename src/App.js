import './App.css';
import SideBar from './composant/SideBar';
import TempMaintienCalculator from './composant/Simulateur';
import HomePage from './pages/accueil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <SideBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/temp-maintien" element={<TempMaintienCalculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
