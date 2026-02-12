import { useState } from "react";
import { Link } from "react-router-dom";
import VetorImg from "./imagens/Vetor.png"; // ✅ Importando a imagem do Pedro

export default function Pedro() {
  // ATRIBUTOS BASE
  const atributos = {
    forca: 130,
    agilidade: 160,
    resistencia: 130,
    mira: 140,
    reforcar: 130,
    controle: 270
  };

  const resistenciaFinal = atributos.resistencia * 1.5;
  const vidaMax = Math.floor(resistenciaFinal * 2);
  const cargaMax = Math.floor(150 + atributos.resistencia / 2);

  const [vida, setVida] = useState(vidaMax);
  const [carga, setCarga] = useState(cargaMax);
  const [atributoSelecionado, setAtributoSelecionado] = useState("forca");
  const [resultado, setResultado] = useState<string | null>(null);
  const [valorCustom, setValorCustom] = useState(10);

  function alterarVida(valor: number) {
    setVida(prev => {
      const novo = prev + valor;
      if (novo < 0) return 0;
      if (novo > vidaMax) return vidaMax;
      return novo;
    });
  }

  function alterarCarga(valor: number) {
    setCarga(prev => {
      const novo = prev + valor;
      if (novo < 0) return 0;
      if (novo > cargaMax) return cargaMax;
      return novo;
    });
  }

  function rolarNormal() {
    const valorAtributo = atributos[atributoSelecionado as keyof typeof atributos];
    const d100 = Math.floor(Math.random() * 100) + 1;
    const metade = Math.floor(d100 / 2);
    setResultado(`Normal → ${valorAtributo} + (${d100}/2 = ${metade}) = ${valorAtributo + metade}`);
  }

  function rolarReforco() {
    const valorAtributo = atributos[atributoSelecionado as keyof typeof atributos];
    const dadoMax = Math.floor(atributos.reforcar / 2);
    if (dadoMax <= 0) {
      setResultado("Reforço insuficiente.");
      return;
    }
    const dado = Math.floor(Math.random() * dadoMax) + 1;
    setResultado(`Reforço → ${valorAtributo} + (d${dadoMax} = ${dado}) = ${valorAtributo + dado}`);
  }

  return (
    <div className="personagem-completo">
      <h2 style={{ textAlign: "center" }}>Vitor Almeida (VETOR)</h2>

      <div className="foto-personagem">
        <img src={VetorImg} alt="Vitor Almeida (VETOR)" />
      </div>

      <div className="personagem-ficha">
        <Link to="/personagens" className="voltar-btn">← Voltar</Link>

        <div className="info-bloco">
          <p><strong>Vida:</strong> {vida} / {vidaMax}</p>
          <p><strong>Carga Anômala:</strong> {carga} / {cargaMax}</p>
          <p><strong>Habilidade:</strong> Controle de Vetores</p>
        </div>

        <ul className="atributos-grid">
          <li>Força: {atributos.forca}</li>
          <li>Agilidade: {atributos.agilidade}</li>
          <li>Resistência: {atributos.resistencia}</li>
          <li>Mira: {atributos.mira}</li>
          <li>Reforçar: {atributos.reforcar}</li>
          <li>Controle: {atributos.controle}</li>
        </ul>

        <div className="controle-bloco">
          <h3>Ajustar Vida / Carga</h3>
          <input type="number" value={valorCustom} onChange={(e) => setValorCustom(Number(e.target.value))} />

          <div className="botoes-controle">
            <button onClick={() => alterarVida(valorCustom)}>+ Vida</button>
            <button onClick={() => alterarVida(-valorCustom)}>- Vida</button>
            <button onClick={() => alterarCarga(valorCustom)}>+ Carga</button>
            <button onClick={() => alterarCarga(-valorCustom)}>- Carga</button>
          </div>

          <hr />

          <h3>Rolagem de Dados</h3>
          <select value={atributoSelecionado} onChange={(e) => setAtributoSelecionado(e.target.value)}>
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
    </div>
  );
}
