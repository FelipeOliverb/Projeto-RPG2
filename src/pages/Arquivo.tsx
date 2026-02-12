import Mapa from "../assets/Mapa.png";

export default function Arquivo() {
  return (
    <div className="page">
      <h2>Arquivo Confidencial — Instalação Maré Cinza</h2>

      <section>
        <p><strong>Classificação:</strong> Restrito</p>
        <p><strong>Vinculação:</strong> Projeto Atlas</p>
        <p><strong>Status:</strong> Perdida / Silêncio Total</p>
        <p>
          <strong>Localização:</strong> Costa do Oceano Pacífico (setor isolado,
          coordenadas suprimidas)
        </p>
        <p><strong>Data de Ativação:</strong> 1998</p>
        <p><strong>Data do Incidente:</strong> Não divulgada</p>
      </section>

      <section>
        <h3>1. Visão Geral da Instalação</h3>
        <p>
          A Instalação Maré Cinza foi concebida como uma unidade costeira de
          pesquisa avançada e contenção de Anômalos expostos a altas concentrações
          do Composto-A.
        </p>
        <p>
          Diferente de outras bases do Projeto Atlas, Maré Cinza operava com
          protocolos experimentais ampliados, focados na interação prolongada
          entre Anômalos, ambiente marinho e sistemas de contenção energética.
        </p>
        <p>
          A base era parcialmente subterrânea, integrada à falésia costeira, com
          setores abaixo do nível do mar.
        </p>
      </section>

      <section>
        <h3>2. População Registrada</h3>

        <h4>2.1 Anômalos em Contenção</h4>
        <p><strong>Total registrado:</strong> 12</p>

        <ul>
          <li>A-01 — 9 anos — Manipulação térmica localizada</li>
          <li>A-02 — 14 anos — Força física elevada</li>
          <li>A-03 — 11 anos — Alteração de densidade corporal</li>
          <li>A-04 — 17 anos — Emissão eletromagnética</li>
          <li>A-05 — 6 anos — Distúrbios espaciais</li>
          <li>A-06 — 13 anos — Regeneração acelerada</li>
          <li>A-07 — 15 anos — Controle parcial de fluidos</li>
          <li>A-08 — 8 anos — Influência neural empática</li>
          <li>A-09 — 19 anos — Amplificação de energia</li>
          <li>A-10 — 12 anos — Camuflagem orgânica</li>
          <li>A-11 — 10 anos — Vibração estrutural</li>
          <li>A-12 — 16 anos — Projeção cinética</li>
        </ul>

        <p>
          <strong>Observação:</strong> Todos apresentam força acima do padrão humano.
        </p>

        <h4>2.2 Pessoal Científico</h4>
        <p><strong>Total registrado:</strong> 18</p>

        <ul>
          <li>Dr. Elias Voronov — Diretor Científico</li>
          <li>Dra. Marina Kovalchuk — Bioengenharia</li>
          <li>Dr. Pavel Mirov — Energia e Contenção</li>
          <li>Dra. Yelena Sokolova — Psicologia Anômala</li>
          <li>14 técnicos auxiliares</li>
        </ul>

        <h4>2.3 Segurança</h4>
        <p><strong>Efetivo:</strong> 22 agentes armados</p>
      </section>

      <section>
        <h3>3. Setores da Base</h3>

        {/* IMAGEM CORRIGIDA PARA VITE + GH PAGES */}
        <div style={{ textAlign: "center", margin: "25px 0" }}>
          <img
            src={Mapa}
            alt="Mapa da Instalação Maré Cinza"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 0 15px rgba(0,0,0,0.5)"
            }}
          />
        </div>

        <ul>
          <li>Entrada Costeira</li>
          <li>Corredor Principal Inundável</li>
          <li>Área Administrativa</li>
          <li>Sala de Segurança</li>
          <li>Alas de Celas</li>
          <li>Enfermaria</li>
          <li>Laboratórios de Pesquisa</li>
          <li>Núcleo de Contenção Energética</li>
          <li>Câmara Submersa Experimental</li>
        </ul>
      </section>

      <section>
        <h3>4. Registros Finais</h3>
        <p><strong>Trecho final:</strong></p>
        <p>
          “Eles não estão mais contidos. Não estão mortos. O mar não está do lado
          de fora. Ele entrou.”
        </p>
        <p><em>[Interferência — sinal perdido]</em></p>
      </section>

      <section>
        <h3>5. Status Atual</h3>
        <p>
          A Instalação Maré Cinza é considerada oficialmente abandonada.
        </p>
        <p>
          <strong>Classificação interna:</strong> Zona Perdida — Acesso proibido.
        </p>
      </section>

      <section>
        <h3>Observação Final</h3>
        <p>
          A ausência de corpos ou sinais de destruição compatíveis sugere que o
          evento permanece ativo.
        </p>
        <p><strong>O que ocorreu no local ainda não terminou.</strong></p>
      </section>
    </div>
  );
}
