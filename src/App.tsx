import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

import Inicio from "./pages/Inicio";
import Sistema from "./pages/Sistema";
import Arquivo from "./pages/Arquivo";
import Personagens from "./pages/Personagens";
import Anomalos from "./pages/Anomalos";

import Bryan from "./pages/personagens/Bryan";
import Leticia from "./pages/personagens/Letícia";
import Pedro from "./pages/personagens/Pedro";
import Nana from "./pages/personagens/Nana";

function App() {
  return (
    <HashRouter>
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

          <NavLink to="/anomalos">
            Anômalos
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
          <Route path="/anomalos" element={<Anomalos />} />

          {/* Rotas dos personagens */}
          <Route path="/bryan" element={<Bryan />} />
          <Route path="/leticia" element={<Leticia />} />
          <Route path="/pedro" element={<Pedro />} />
          <Route path="/nana" element={<Nana />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
