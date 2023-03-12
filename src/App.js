import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inicio from './Components/Inicio/Inicio';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Inicio />}/>
      </Routes> 
    </div>
  );
}

export default App;
