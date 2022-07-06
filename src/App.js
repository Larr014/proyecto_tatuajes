
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Vision } from './components/Vision';
import { Mision } from './components/Mision';
import { Imagenes } from './components/Imagenes';
import { Contacto } from './components/Contacto';
import { Principal } from './components/Principal';
import { Intranet } from './components/Intranet/Intranet';

function App() {
  var nombre = "juan";
  var ap = "Perez";
  return (
    <>
      
      <BrowserRouter>
      
      <Routes>
        <Route exact path="/" element={<Principal ruta="/"/>} />
        <Route exact path="/vision" element={<Principal ruta="vision"/>} />
        <Route exact path="/mision" element={<Principal ruta="mision" />} />
        <Route exact path="/imagenes" element={<Principal ruta="imagenes" />} />
        <Route exact path="/contacto" element={<Principal ruta="contacto" />} />
        <Route exact path="/login" element={<Principal ruta="login" />} />
        <Route exact path="/intranet" element={<Intranet ruta="main" />} />
      
      </Routes>
      
      </BrowserRouter>


      
    </>
  );
}

export default App;
