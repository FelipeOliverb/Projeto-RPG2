import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

import Inicio from './pages/Inicio';
import Sistema from './pages/Sistema';
import Arquivo from './pages/Arquivo';
import Personagens from './pages/Personagens';

function App() {
  return (
    <BrowserRouter>
      <header className="banner">
        <h1>RPG Operação Maré Cinza</h1>

        <nav className="tabs">
          <NavLink to="/" end>
            Inicio
          </NavLink>
          <NavLink to="/sistema">
            Sistema
          </NavLink>
          <NavLink to="/arquivo">
            Arquivo
          </NavLink>
          <NavLink to="/personagens">
            Personagens
          </NavLink>
        </nav>
      </header>

      <main className="body">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sistema" element={<Sistema />} />
          <Route path="/arquivo" element={<Arquivo />} />
          <Route path="/personagens" element={<Personagens />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
