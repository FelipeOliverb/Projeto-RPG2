import { useState } from 'react'
import './App.css'



function App() {
 

  return (
    <>
      
      <header className="banner">
        <h1>RPG — Operação Maré Cinza</h1>

        <nav className="tabs">
            <button>Inicio</button>
            <button>Sistema</button>
            <button>Arquivo</button>
            <button>Personagens</button>
            
        </nav>
      </header>

      
      <main className="body">
          <h2>Bem-vindo ao RPG — Operação Maré Cinza</h2>
      </main>
    </>
  )
}

export default App
