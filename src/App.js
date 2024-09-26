import { useState, } from 'react';
import './App.css';
import { Route, Router, BrowserRouter, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Empresa from './Pages/Empresa';
import Contato from './Pages/Contato';
import Navebar from './components/Layout/Navebar';
import Footer from './components/Layout/Footer';

function App() {
  const [nome, setNome] = useState()


return (
  <div className='App'>
  <BrowserRouter>
  <Navebar/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Empresa' element={<Empresa/>}/>
        <Route path='/Contato' element={<Contato/>}/>
      </Routes>
  </BrowserRouter>
  <Footer/>
  </div>
);
}

export default App;
