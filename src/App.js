
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Vision } from './components/Vision';
import { Mision } from './components/Mision';
import { Imagenes } from './components/Imagenes';

function App() {

  return (
    <>
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/vision" element={<Vision/>} />
        <Route exact path="/mision" element={<Mision/>} />
        <Route exact path="/imagenes" element={<Imagenes/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>


      
    </>
  );
}

export default App;
