import { useState } from "react";
import { Link } from "react-router-dom";

export default function Pedro() {

  // =============================
  // ATRIBUTOS BASE
  // =============================
  const atributos = {
    forca: 160,
    agilidade: 170,
    resistencia: 180,
    mira: 150,
    reforcar: 140,
    controle: 130
  };

  // =============================
  // CÁLCULOS BASE
  // =============================
  const resistenciaFinal = atributos.resistencia * 1.5;
  const vidaMax = Math.floor(resistenciaFinal * 2);
  const cargaMax = Math.floor(150 + atributos.resistencia / 2);

  // =============================
  // ESTADOS DINÂMICOS
  // =============================
  const [vida, setVida] = useState(vidaMax);
  const [carga, setCarga] = useState(cargaMax);
  const [atributoSelecionado, setAtributoSelecionado] = useState("forca");
  const [resultado, setResultado] = useState<string | null>(null);
  const [valorCustom, setValorCustom] = useState(10);

  // =============================
  // CONTROLE VIDA
  // =============================
  function alterarVida(valor: number) {
    setVida((prev) => {
      const novo = prev + valor;
      if (novo < 0) return 0;
      if (novo > vidaMax) return vidaMax;
      return novo;
    });
  }

  // =============================
  // CONTROLE CARGA
  // =============================
  function alterarCarga(valor: number) {
    setCarga((prev) => {
      const novo = prev + valor;
      if (novo < 0) return 0;
      if (novo > cargaMax) return cargaMax;
      return novo;
    });
  }

  // =============================
  // ROLAGEM NORMAL
  // =============================
  function rolarNormal() {
    const valorAtributo =
      atributos[atributoSelecionado as keyof typeof atributos];

    const d100 = Math.floor(Math.random() * 100) + 1;
    const metade = Math.floor(d100 / 2);
    const total = valorAtributo + metade;

    setResultado(
      `Normal → ${valorAtributo} + (${d100}/2 = ${metade}) = ${total}`
    );
  }

  // =============================
  // ROLAGEM COM REFORÇO
  // =============================
  function rolarReforco() {
    const valorAtributo =
      atributos[atributoSelecionado as keyof typeof atributos];

    const dadoMax = Math.floor(atributos.reforcar / 2);

    if (dadoMax <= 0) {
      setResultado("Reforço insuficiente.");
      return;
    }

    const dado = Math.floor(Math.random() * dadoMax) + 1;
    const total = valorAtributo + dado;

    setResultado(
      `Reforço → ${valorAtributo} + (d${dadoMax} = ${dado}) = ${total}`
    );
  }

  return (
    <div className="personagem-ficha">

      <Link to="/personagens" className="voltar-btn">
        ← Voltar
      </Link>

      <h2>Vitor Almeida (VETOR)</h2>

      {/* STATUS ATUAL */}
      <div className="info-bloco">
        <p><strong>Vida:</strong> {vida} / {vidaMax}</p>
        <p><strong>Carga Anômala:</strong> {carga} / {cargaMax}</p>
        <p><strong>Habilidade:</strong> Controle de Vetores </p>
      </div>

      {/* ATRIBUTOS */}
   
      <ul className="atributos-grid">
        <li>Força: {atributos.forca}</li>
        <li>Agilidade: {atributos.agilidade}</li>
        <li>Resistência: {atributos.resistencia}</li>
        <li>Mira: {atributos.mira}</li>
        <li>Reforçar: {atributos.reforcar}</li>
        <li>Controle: {atributos.controle}</li>
      </ul>

      {/* ============================= */}
      {/* CONTROLE */}
      {/* ============================= */}
      <div className="controle-bloco">

        <h3>Ajustar Vida / Carga</h3>

        <input
          type="number"
          value={valorCustom}
          onChange={(e) => setValorCustom(Number(e.target.value))}
        />

        <div className="botoes-controle">
        <button
            onClick={(e) => {
            alterarVida(valorCustom);
            (e.currentTarget as HTMLButtonElement).blur();
            }}
        >
            + Vida
        </button>

        <button
            onClick={(e) => {
            alterarVida(-valorCustom);
            (e.currentTarget as HTMLButtonElement).blur();
            }}
        >
            - Vida
        </button>
        
        <button
            onClick={(e) => {
            alterarCarga(valorCustom);
            (e.currentTarget as HTMLButtonElement).blur();
            }}
        >
            + Carga
        </button>

        <button
            onClick={(e) => {
            alterarCarga(-valorCustom);
            (e.currentTarget as HTMLButtonElement).blur();
            }}
        >
            - Carga
        </button>
        </div>


        <hr />

        <h3>Rolagem de Dados</h3>

        <select
          value={atributoSelecionado}
          onChange={(e) => setAtributoSelecionado(e.target.value)}
        >
          <option value="forca">Força</option>
          <option value="agilidade">Agilidade</option>
          <option value="resistencia">Resistência</option>
          <option value="mira">Mira</option>
          <option value="controle">Controle</option>
        </select>

        <div className="botoes-controle">
          <button onClick={rolarNormal}>Rolagem Normal</button>
          <button onClick={rolarReforco}>Rolagem com Reforço</button>
        </div>

        {resultado && <p className="resultado-dado">{resultado}</p>}

      </div>
    </div>
  );
}
