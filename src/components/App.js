
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Apropos from '../pages/Apropos';
import FicheLogement from '../pages/FicheLogement';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import '../styles/App.css';

function App() {
  const[logement, setLogement] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage setLogement={setLogement}/>} />
          <Route path='/fichelogement' element={<FicheLogement logement={logement}/>} />
          <Route path='/a-propos' element={ <Apropos/> } />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;