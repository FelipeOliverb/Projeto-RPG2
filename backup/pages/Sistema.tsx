export default function Sistema() {
  return (
    <div className="page">
      <h2>Sistema de Regras — Operação Maré Cinza</h2>

      <h3>1. Atributos do Personagem</h3>
      <p>
        Cada personagem possui <strong>1000 pontos</strong> para distribuir entre
        os atributos abaixo:
      </p>

      <ul>
        <li>Força</li>
        <li>Agilidade</li>
        <li>Resistência</li>
        <li>Mira</li>
        <li>Reforçar</li>
        <li>Controle Anômalo</li>
      </ul>

      <p>
        <strong>Observação:</strong> Personagens anômalos recebem bônus de
        <strong> +50%</strong> em Força e Resistência.
      </p>

      <p>
        A vida do personagem é calculada com:
        <br />
        <strong>Vida = (Resistência × 2) + Bônus</strong>
      </p>

      <h3>2. Mecânica Base</h3>
      <p>O sistema utiliza rolagens de <strong>1d100</strong>.</p>

      <ul>
        <li>O mestre define o atributo usado e o valor necessário.</li>
        <li>O jogador rola 1d100.</li>
        <li>
          Se o resultado for <strong>maior ou igual</strong> ao valor definido,
          a ação é um <strong>SUCESSO</strong>.
        </li>
        <li>
          Se o resultado for <strong>menor</strong>, a ação é uma <strong>FALHA</strong>.
        </li>
      </ul>

      <h3>3. Reforço (Segunda Chance)</h3>
      <p>
        O Reforço representa uma aposta arriscada, forçando o corpo ou as
        habilidades anômalas além do limite seguro.
      </p>

      <ul>
        <li>Após uma falha, o jogador declara o uso de Reforço.</li>
        
        <li>
          O novo teste utiliza o valor do atributo original somado a um número aleatório baseado na metade do atributo Reforçar.
        </li>
      </ul>

      <p>
        <strong>Cálculo do Reforço:</strong>
        <br />
        Chance com Reforço = SA + D(SR÷2)
      </p>

      <p>
        <strong>Onde:</strong>
        <br />
        SA = Status do atributo usado
        <br />
        SR = Status do Reforço
        <br />
        D = Dado do Reforço
      </p>

      <p>
        <strong>Exemplo:</strong>
        <br />
        Atributo Agilidade (SA): 180
        <br />
        Atributo Reforçar (SR): 120 ÷ 2 = 60
        <br />
        Dado (D60): 20
        <br />
        <strong>Resultado Final: 180 + 20 = 200</strong>
      </p>

      <p>
        Se o resultado for menor ou igual ao valor definido pelo mestre,
        o teste é um <strong>SUCESSO FORÇADO</strong>.
      </p>

      <h3>4. Atributos Gerais</h3>
      <p>
        Os atributos representam a capacidade bruta do personagem em situações
        de risco, esforço extremo ou precisão.
      </p>

      <p>
        O mestre define um <strong>Valor Necessário (VN)</strong>.
      </p>

      <ul>
        <li>
          Se o atributo for maior ou igual ao VN, o sucesso é automático.
        </li>
        <li>
          Caso contrário, role 1d100 e aplique a fórmula abaixo.
        </li>
      </ul>

      <p>
        <strong>Resultado Final = Atributo + (d100 ÷ 2)</strong>
      </p>

      <p>
        <strong>Exemplo:</strong>
        <br />
        VN: 200 (Força)
        <br />
        Força: 180
        <br />
        d100: 80
        <br />
        Resultado: 220 → <strong>SUCESSO</strong>
      </p>

      <h3>5. Definição dos Atributos</h3>

      <p><strong>Força</strong></p>
      <ul>
        <li>Combate corpo a corpo</li>
        <li>Arrombamentos</li>
        <li>Empurrar ou quebrar objetos</li>
      </ul>

      <p><strong>Agilidade</strong></p>
      <ul>
        <li>Esquivas</li>
        <li>Movimentos rápidos</li>
        <li>Furtividade</li>
      </ul>

      <p><strong>Resistência</strong></p>
      <ul>
        <li>Suportar dano</li>
        <li>Resistir a dor, venenos e fadiga</li>
        <li>Testes prolongados</li>
      </ul>

      <p><strong>Mira</strong></p>
      <ul>
        <li>Armas de fogo</li>
        <li>Ataques à distância</li>
        <li>Ações de precisão</li>
      </ul>

      <p><strong>Controle Anômalo</strong></p>
      <ul>
        <li>Ativar habilidades</li>
        <li>Manter poderes ativos</li>
        <li>Evitar perda de controle</li>
      </ul>

      <p><strong>Reforçar</strong></p>
      <ul>
        <li>Não é usado em testes diretos</li>
        <li>Define a eficiência do Reforço</li>
        <li>Quanto maior, mais segura a aposta</li>
      </ul>

      <h3>6. Carga Anômala</h3>
      <p>
        Representa o limite do corpo ao usar habilidades anômalas.
      </p>

      <p>
        <strong>Carga Máxima = Controle Anômalo + (Resistência ÷ 2)</strong>
      </p>

      <ul>
        <li>10–20 CA: habilidades simples</li>
        <li>25–40 CA: habilidades moderadas</li>
        <li>50–80 CA: habilidades poderosas</li>
        <li>100+ CA: habilidades extremas ou proibidas</li>
      </ul>

      <h3>7. Equipamentos</h3>
      <p>
        Equipamentos com <strong>Composto-A</strong> permitem enfrentar Anômalos,
        mas envolvem riscos severos.
      </p>

      <p>
        <strong>Observação:</strong> Composto-A e Carga Anômala são a mesma
        substância em estados diferentes.
      </p>

      <h3>Credencial Umbra</h3>
      <p>
        Dispositivo oficial de identificação que concede acesso a áreas restritas
        e indica o nível de autorização do agente.
      </p>

      <h3>Compressão Farmacológica — Comprimido CA7</h3>
      <p>
        Cápsula emergencial que amplifica drasticamente as capacidades do usuário.
      </p>

      <ul>
        <li>Força: +50%</li>
        <li>Controle Anômalo: +100%</li>
        <li>Resistência: +50%</li>
      </ul>

      <p>
        Uso extremo, recomendado apenas como último recurso.
      </p>
    </div>
  )
}

