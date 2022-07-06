
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Vision } from './components/Vision';
import { Mision } from './components/Mision';
import { Imagenes } from './components/Imagenes';
import { Contacto } from './components/Contacto';
import { Intranet } from './components/Intranet';
import { Login } from './components/Intranet/Login';
import { Principal } from './components/Principal';
function App() {
  var nombre = "juan";
  var ap = "Perez";
  return (
    <>
      
      <BrowserRouter>
      
      <Routes>
        <Route exact path="/" element={<Principal ruta="home"/>} />
        <Route exact path="/vision" element={<Principal ruta="vision" />} />
        <Route exact path="/mision" element={<Principal ruta="mision"/>} />
        <Route exact path="/imagenes" element={<Principal ruta="imagenes"/>} />
        <Route exact path="/contacto" element={<Principal ruta="contacto" />} />
        <Route exact path="/intranet" element={<Principal ruta="intranet" />} />
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
      
      </BrowserRouter>


      
    </>
  );
}

export default App;
