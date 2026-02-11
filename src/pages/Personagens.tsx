import { useState } from "react";

export default function Personagens() {
  const [personagens] = useState([
    {
      player: "Bryan",
      nome: "Henrique Vasques",
      codinome: "Retalho",
      idade: 47,
      status: "Anômalo",
      atributos: { Forca: 180, Agilidade: 140, Resistencia: 220, Mira: 190, Reforcar: 120, ControleAnomalo: 150 },
      bonusAnomalo: true
    },
    {
      player: "Letícia",
      nome: "Super choque",
      codinome: "Nyx",
      idade: 30,
      status: "Anômalo",
      atributos: { Forca: 120, Agilidade: 180, Resistencia: 150, Mira: 200, Reforcar: 100, ControleAnomalo: 90 },
      bonusAnomalo: true
    },
    {
      player: "Pedro",
      nome: "Yuuki Takahashi",
      codinome: "Yuuki",
      idade: 35,
      status: "Anômalo",
      atributos: { Forca: 160, Agilidade: 170, Resistencia: 180, Mira: 150, Reforcar: 140, ControleAnomalo: 130 },
      bonusAnomalo: true
    },
    {
      player: "Nana",
      nome: "Nana",
      codinome: "Pipi",
      idade: 28,
      status: "Anômalo",
      atributos: { Forca: 110, Agilidade: 150, Resistencia: 130, Mira: 160, Reforcar: 100, ControleAnomalo: 120 },
      bonusAnomalo: true
    },
  ]);

  const [testeInput, setTesteInput] = useState({ personagemIndex: 0, atributo: "Forca", VN: 250 });
  const [reforcoInput, setReforcoInput] = useState({ personagemIndex: 0, atributo: "Agilidade" });
  const [resultadoTeste, setResultadoTeste] = useState(null);
  const [resultadoReforco, setResultadoReforco] = useState(null);

  // =========================
  // VIDA
  // =========================
  const calcularVida = (personagem) => {
    let resistencia = personagem.atributos.Resistencia;
    if (personagem.bonusAnomalo) resistencia *= 1.5;
    return resistencia * 2;
  };

  // =========================
  // CARGA ANÔMALA MÁXIMA
  // Fórmula:
  // ControleAnomalo + (Resistencia / 2)
  // =========================
  const calcularCargaAnomala = (personagem) => {
    const controle = personagem.atributos.ControleAnomalo || 0;
    const resistencia = personagem.atributos.Resistencia || 0;
    return controle + (resistencia / 2);
  };

  // =========================
  // TESTE NORMAL
  // =========================
  const testeAtributo = (personagem, atributo, VN) => {
    const dado = Math.floor(Math.random() * 100) + 1;
    const valorBase = personagem.atributos[atributo] || 0;

    let valorComBonus = valorBase;
    let valorFinal;
    let formulaElement;

    if (personagem.bonusAnomalo && (atributo === "Forca" || atributo === "Resistencia")) {
      valorComBonus = valorBase * 1.5;
      valorFinal = valorComBonus + dado / 2;

      formulaElement = (
        <>
          {atributo} base = {valorBase} → +50% bônus = {valorComBonus} + Dado/2 (<strong>{dado}</strong>/2 = {(dado/2).toFixed(2)}) = {valorFinal.toFixed(2)}
        </>
      );
    } else {
      valorFinal = valorBase + dado / 2;

      formulaElement = (
        <>
          {atributo} base = {valorBase} + Dado/2 (<strong>{dado}</strong>/2 = {(dado/2).toFixed(2)}) = {valorFinal.toFixed(2)}
        </>
      );
    }

    return { dado, valorFinal, sucesso: valorFinal >= VN, formulaElement };
  };

  // =========================
  // REFORÇO
  // Fórmula: SA + d(SR/2)
  // =========================
  const usarReforco = (personagem, atributo) => {
    const valorBase = personagem.atributos[atributo] || 0;
    const valorReforco = personagem.atributos.Reforcar || 0;

    const dadoMaximo = Math.floor(valorReforco / 2);
    const dadoReforco = Math.floor(Math.random() * dadoMaximo) + 1;

    let SA = valorBase;
    let bonusAplicado = false;

    if (personagem.bonusAnomalo && (atributo === "Forca" || atributo === "Resistencia")) {
      SA = valorBase * 1.5;
      bonusAplicado = true;
    }

    const chanceFinal = SA + dadoReforco;

    const formulaElement = (
      <>
        SA = {valorBase}
        {bonusAplicado && ` (+50% bônus = ${SA.toFixed(2)})`}
        {" + d("}{dadoMaximo}{") → "}
        <strong>{dadoReforco}</strong>
        {" = "}
        {chanceFinal.toFixed(2)}
      </>
    );

    return { dadoReforco, chanceFinal, formulaElement };
  };

  return (
    <div className="page">
      <h2>Personagens</h2>
      <p>Fichas, status, dados e controle dos agentes.</p>

      {personagens.map((personagem, index) => (
        <div key={index} className="ficha">
          <h3>{personagem.nome} ({personagem.codinome})</h3>
          <p>Player: {personagem.player}</p>
          <p>Idade: {personagem.idade}</p>
          <p>Status: {personagem.status}</p>

          <h4>Atributos</h4>
          <ul>
            {Object.entries(personagem.atributos).map(([chave, valor]) => (
              <li key={chave}>
                {chave}: {valor}{" "}
                {personagem.bonusAnomalo && (chave === "Forca" || chave === "Resistencia")
                  ? "(+50% bônus Anômalo)"
                  : ""}
              </li>
            ))}
          </ul>

          <p>Vida calculada: {calcularVida(personagem)}</p>
          <p>Carga Anômala Máxima: {calcularCargaAnomala(personagem).toFixed(2)}</p>
        </div>
      ))}

      {/* TESTE NORMAL */}
      <h4>Dados de Atributo</h4>
      <div>
        <label>
          Personagem:
          <select
            value={testeInput.personagemIndex}
            onChange={(e) =>
              setTesteInput({ ...testeInput, personagemIndex: Number(e.target.value) })
            }
          >
            {personagens.map((p, i) => (
              <option key={i} value={i}>{p.player}</option>
            ))}
          </select>
        </label>

        <label>
          Atributo:
          <select
            value={testeInput.atributo}
            onChange={(e) =>
              setTesteInput({ ...testeInput, atributo: e.target.value })
            }
          >
            {Object.keys(personagens[testeInput.personagemIndex].atributos)
              .map(attr => (
                <option key={attr} value={attr}>{attr}</option>
              ))}
          </select>
        </label>

        <label>
          VN:
          <input
            type="number"
            value={testeInput.VN}
            onChange={(e) =>
              setTesteInput({ ...testeInput, VN: Number(e.target.value) })
            }
          />
        </label>

        <button onClick={() => {
          const res = testeAtributo(
            personagens[testeInput.personagemIndex],
            testeInput.atributo,
            testeInput.VN
          );
          setResultadoTeste({
            personagem: personagens[testeInput.personagemIndex].player,
            ...res
          });
        }}>
          Testar
        </button>
      </div>

      {resultadoTeste && (
        <div className="resultado">
          <h5>Resultado do Teste - {resultadoTeste.personagem}</h5>
          <p>Fórmula usada: {resultadoTeste.formulaElement}</p>
          <p>Valor final: {resultadoTeste.valorFinal.toFixed(2)}</p>
          <p>
            Sucesso:{" "}
            <span className={resultadoTeste.sucesso ? "sucesso" : "falha"}>
              {resultadoTeste.sucesso ? "SIM" : "NÃO"}
            </span>
          </p>
        </div>
      )}

      {/* REFORÇO */}
      <h4>Dados de Reforço</h4>
      <div>
        <label>
          Personagem:
          <select
            value={reforcoInput.personagemIndex}
            onChange={(e) =>
              setReforcoInput({ ...reforcoInput, personagemIndex: Number(e.target.value) })
            }
          >
            {personagens.map((p, i) => (
              <option key={i} value={i}>{p.player}</option>
            ))}
          </select>
        </label>

        <label>
          Atributo:
          <select
            value={reforcoInput.atributo}
            onChange={(e) =>
              setReforcoInput({ ...reforcoInput, atributo: e.target.value })
            }
          >
            {Object.keys(personagens[reforcoInput.personagemIndex].atributos)
              .map(attr => (
                <option key={attr} value={attr}>{attr}</option>
              ))}
          </select>
        </label>

        <button onClick={() => {
          const res = usarReforco(
            personagens[reforcoInput.personagemIndex],
            reforcoInput.atributo
          );
          setResultadoReforco({
            personagem: personagens[reforcoInput.personagemIndex].player,
            ...res
          });
        }}>
          Aplicar Reforço
        </button>
      </div>

      {resultadoReforco && (
        <div className="resultado">
          <h5>Resultado do Reforço - {resultadoReforco.personagem}</h5>
          <p>Fórmula usada: {resultadoReforco.formulaElement}</p>
          <p>Chance final: {resultadoReforco.chanceFinal.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
