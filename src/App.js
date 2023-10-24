import './App.css';
import { SideBar } from './composant/SideBar';
import TempMaintienCalculator from './composant/Simulateur';

function App() {
  return (
    <div className='flex'>
      <SideBar/>
      <TempMaintienCalculator />
    </div>
  );
}

export default App;
