import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inicio from './Components/Inicio/Inicio';
import SobreMi from './Components/SobreMi/SobreMi';

function App() {

  return (
    <div className="App">
      <Routes>
      
        <Route path='/' element={<Inicio />}/>
        <Route path='/sobremi' element={<SobreMi />}/>
      </Routes> 
    </div>
  );
}

export default App;
