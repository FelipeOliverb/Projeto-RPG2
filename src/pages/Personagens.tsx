import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

// Tipagens
type Atributos = {
  Força: number;
  Agilidade: number;
  Resistencia: number;
  Mira: number;
  Reforçar: number;
  ControleAnomalo: number;
};

type Personagem = {
  player: string;
  nome: string;
  codinome: string;
  idade: number;
  status: string;
  habilidade: string;
  atributos: Atributos;
  bonusAnomalo: boolean;
  rota: string;
};

type ResultadoTeste = {
  personagem: string;
  dado: number;
  valorFinal: number;
  sucesso: boolean;
  formulaElement: ReactNode;
};

type ResultadoReforco = {
  personagem: string;
  dadoReforco: number;
  chanceFinal: number;
  formulaElement: ReactNode;
};


// Componente
export default function Personagens() {
  const [personagens] = useState<Personagem[]>([
    {
      player: "Bryan",
      nome: "Henrique Vasques",
      codinome: "Retalho",
      idade: 47,
      status: "Anômalo",
      habilidade: "Fator de Cura",
      atributos: { Força: 180, Agilidade: 140, Resistencia: 220, Mira: 190, Reforçar: 120, ControleAnomalo: 150 },
      bonusAnomalo: true,
      rota: "/bryan",
    },
    {
      player: "Letícia",
      nome: "Yuliya Ivanovich",
      codinome: "Nyx",
      idade: 24,
      status: "Anômalo",
      habilidade: "Electrificação",
      atributos: { Força: 100, Agilidade: 200, Resistencia: 100, Mira: 100, Reforçar: 200, ControleAnomalo: 300 },
      bonusAnomalo: true,
      rota: "/leticia",
    },
    {
      player: "Pedro",
      nome: "Vitor Almeida",
      codinome: "VETOR",
      idade: 29,
      status: "Anômalo",
      habilidade: "Controle de Vetores",
      atributos: { Força: 130, Agilidade: 160, Resistencia: 130, Mira: 140, Reforçar: 130, ControleAnomalo: 270 },
      bonusAnomalo: true,
      rota: "/pedro",
    },
    {
      player: "Nana",
      nome: "Nana",
      codinome: "Pipoca",
      idade: 28,
      status: "Anômalo",
      habilidade: "--",
      atributos: { Força: 110, Agilidade: 150, Resistencia: 130, Mira: 160, Reforçar: 100, ControleAnomalo: 120 },
      bonusAnomalo: true,
      rota: "/nana",
    },
  ]);

  const [testeInput, setTesteInput] = useState({
    personagemIndex: 0,
    atributo: "Força" as keyof Atributos,
    VN: 250,
  });

  const [reforcoInput, setReforcoInput] = useState({
    personagemIndex: 0,
    atributo: "Agilidade" as keyof Atributos,
  });

  const [resultadoTeste, setResultadoTeste] = useState<ResultadoTeste | null>(null);
  const [resultadoReforco, setResultadoReforco] = useState<ResultadoReforco | null>(null);


  // VIDA
  const calcularVida = (personagem: Personagem): number => {
    let resistencia = personagem.atributos.Resistencia;
    if (personagem.bonusAnomalo) resistencia *= 1.5;
    return resistencia * 2;
  };


  // CARGA
  const calcularCargaAnomala = (personagem: Personagem): number => {
    return personagem.atributos.ControleAnomalo + (personagem.atributos.Resistencia*1.5) / 2;
  };

  // TESTE NORMAL --------------------------------
  const testeAtributo = (
    personagem: Personagem,
    atributo: keyof Atributos,
    VN: number
  ): Omit<ResultadoTeste, "personagem"> => {
    const dado = Math.floor(Math.random() * 100) + 1;
    const valorBase = personagem.atributos[atributo];

    let valorFinal: number;
    let formulaElement: ReactNode;

    if (personagem.bonusAnomalo && (atributo === "Força" || atributo === "Resistencia")) {
      const valorComBonus = valorBase * 1.5;
      valorFinal = valorComBonus + dado / 2;

      formulaElement = (
        <>
          {atributo} base {valorBase} → +50% ={" "}
          {valorComBonus} + ({dado}/2 <strong>{dado / 2}</strong>) ={" "}
          <strong>{valorFinal.toFixed(2)}</strong>
        </>
      );
    } else {
      valorFinal = valorBase + dado / 2;

      formulaElement = (
        <>
          {atributo} base <strong>{valorBase}</strong> + (Dado/2 {dado}/2) ={" "}
          <strong>{valorFinal.toFixed(2)}</strong>
        </>
      );
    }

    return { dado, valorFinal, sucesso: valorFinal >= VN, formulaElement };
  };


  // REFORÇO --------------------------------

  const usarReforco = (
    personagem: Personagem,
    atributo: keyof Atributos
  ): Omit<ResultadoReforco, "personagem"> => {
    const valorBase = personagem.atributos[atributo];
    const valorReforco = personagem.atributos.Reforçar;

    const dadoMaximo = Math.floor(valorReforco / 2);
    const dadoReforco = Math.floor(Math.random() * dadoMaximo) + 1;

    let SA = valorBase;

    if (personagem.bonusAnomalo && (atributo === "Força" || atributo === "Resistencia")) {
      SA = valorBase * 1.5;
    }

    const chanceFinal = SA + dadoReforco;

    const formulaElement = (
      <>
        SA {SA.toFixed(2)} + d({dadoMaximo}) →{" "}
        <strong>{dadoReforco}</strong> ={" "}
        <strong>{chanceFinal.toFixed(2)}</strong>
      </>
    );

    return { dadoReforco, chanceFinal, formulaElement };
  };

  return (
    <div className="page">
      <h2>Personagens</h2>
      <p>Fichas, status, dados e controle dos agentes.</p>

      {personagens.map((personagem, index) => (
        <Link key={index} to={personagem.rota} style={{ textDecoration: "none", color: "inherit" }}>
          <div className="ficha">
            <h3>{personagem.nome} ({personagem.codinome})</h3>
            <p>Player: {personagem.player}</p>
            <p>Idade: {personagem.idade}</p>
            <p>Status: {personagem.status}</p>
            <p>Habilidade: {personagem.habilidade}</p>

            <h4>Atributos</h4>
            <ul>
              {Object.entries(personagem.atributos).map(([chave, valor]) => (
                <li key={chave}>
                  {chave}: {valor}
                  {personagem.bonusAnomalo &&
                  (chave === "Força" || chave === "Resistencia")
                    ? " (+50% Anômalo)"
                    : ""}
                </li>
              ))}
            </ul>

            <p>Vida: {calcularVida(personagem)}</p>
            <p>Carga Anômala: {calcularCargaAnomala(personagem).toFixed(2)}</p>
          </div>
        </Link>
      ))}

      {/* TESTE */}
      <h4>Teste de Atributo</h4>

      <div>
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

        <select
          value={testeInput.atributo}
          onChange={(e) =>
            setTesteInput({ ...testeInput, atributo: e.target.value as keyof Atributos })
          }
        >
          {Object.keys(personagens[testeInput.personagemIndex].atributos).map((attr) => (
            <option key={attr} value={attr}>{attr}</option>
          ))}
        </select>

        <input
          type="number"
          value={testeInput.VN}
          onChange={(e) =>
            setTesteInput({ ...testeInput, VN: Number(e.target.value) })
          }
        />

        <button
          onClick={() => {
            const res = testeAtributo(
              personagens[testeInput.personagemIndex],
              testeInput.atributo,
              testeInput.VN
            );
            setResultadoTeste({
              personagem: personagens[testeInput.personagemIndex].player,
              ...res,
            });
          }}
        >
          Testar
        </button>
      </div>

      {resultadoTeste && (
        <div className="resultado">
          <h5>Resultado - {resultadoTeste.personagem}</h5>

          <p>{resultadoTeste.formulaElement}</p>

          <p>
            Sucesso?{" "}
            <span className={resultadoTeste.sucesso ? "sucesso" : "falha"}>
              {resultadoTeste.sucesso ? "SIM" : "NÃO"}
            </span>
          </p>
        </div>
      )}

      {/* REFORÇO */}
      <h4>Reforço</h4>

      <div>
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

        <select
          value={reforcoInput.atributo}
          onChange={(e) =>
            setReforcoInput({ ...reforcoInput, atributo: e.target.value as keyof Atributos })
          }
        >
          {Object.keys(personagens[reforcoInput.personagemIndex].atributos).map((attr) => (
            <option key={attr} value={attr}>{attr}</option>
          ))}
        </select>

        <button
          onClick={() => {
            const res = usarReforco(
              personagens[reforcoInput.personagemIndex],
              reforcoInput.atributo
            );
            setResultadoReforco({
              personagem: personagens[reforcoInput.personagemIndex].player,
              ...res,
            });
          }}
        >
          Aplicar Reforço
        </button>
      </div>

      {resultadoReforco && (
        <div className="resultado">
          <h5>Reforço - {resultadoReforco.personagem}</h5>
          <p>{resultadoReforco.formulaElement}</p>
        </div>
      )}
    </div>
  );
}
