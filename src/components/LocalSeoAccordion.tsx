'use client';

import React, { useState } from 'react';

export default function LocalSeoAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="tese-autoridade"
      itemScope
      itemType="https://schema.org/ItemList"
      className="pt-2 pb-6 px-4 md:px-6 max-w-7xl mx-auto relative z-10"
    >
      <div>
        
        {/* HEADER DO ACCORDION (100% SOLTO NA TELA CLARA) */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer py-4 select-none group inline-block text-left"
        >

          <h2 className="font-sora text-2xl md:text-4xl text-slate-950 uppercase leading-tight group-hover:text-amber-600 transition-colors">
            Tese de Autoridade: <br />
            <span className="text-amber-500 group-hover:text-slate-950 transition-colors">
              Guincho em São Paulo
            </span>
          </h2>
        </div>

        {/* CONTEÚDO EXPANDÍVEL (12 PILARES COM A PALAVRA-CHAVE MARTELADA) */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-8 text-slate-700 text-sm md:text-base leading-relaxed text-justify font-normal border-t border-slate-200 mt-4">
            
            <p className="mb-8 text-slate-800">
              No maior polo logístico e viário do país, a rapidez e a integridade no resgate definem a segurança do seu patrimônio. Nossa metodologia para <strong>guincho em São Paulo</strong> estrutura-se em 12 pilares operacionais rigorosos. Mantemos caminhões plataforma posicionados para pronta resposta nas artérias vitais da capital: <strong>Marginal Tietê, Marginal Pinheiros, Avenida 23 de Maio, Avenida dos Bandeirantes, Radial Leste, Avenida Paulista e Rodovias Imigrantes, Anchieta e Dutra</strong>.
            </p>

            {/* GRID RESPONSIVO: 1 COLUNA MOBILE / 2 COLUNAS DESKTOP */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">

              {/* PILAR 1 */}
              <div>
                <h3 className="text-slate-950 font-sora font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-amber-500 pl-4">
                  1. Guincho em São Paulo para Carros de Passeio e Blindados
                </h3>
                <p className="text-slate-600">
                  O tráfego paulistano exige transporte cuidadoso e pranchas sem inclinação brusca. No serviço de <strong>guincho em São Paulo</strong>, operamos caminhões plataforma com fixação por cintas de nylon especiais nas quatro rodas, prevenindo avarias no cárter, para-choques rebaixados e suspensão de veículos executivos e blindados pesados.
                </p>
              </div>

              {/* PILAR 2 */}
              <div>
                <h3 className="text-slate-950 font-sora font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-amber-500 pl-4">
                  2. Guincho em São Paulo 24 Horas para Emergência e Pane Mecânica
                </h3>
                <p className="text-slate-600">
                  Falhas no motor, quebra de homocinética ou superaquecimento acontecem nos momentos mais inoportunos. Nosso plantão de <strong>guincho em São Paulo 24 horas</strong> funciona sem interrupções de madrugada, fins de semana e feriados, garantindo socorro imediato para remoção com segurança técnica até sua oficina ou residência.
                </p>
              </div>

              {/* PILAR 3 */}
              <div>
                <h3 className="text-slate-950 font-sora font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-amber-500 pl-4">
                  3. Guincho em São Paulo nas Marginais Tietê e Pinheiros
                </h3>
                <p className="text-slate-600">
                  Ficar parado nas faixas expressas das Marginais é extremamente arriscado. Com logística de despacho prioritário, nosso <strong>guincho em São Paulo nas Marginais</strong> adota protocolos de sinalização de alta visibilidade e resgate ágil em até 30 minutos em pontes, saídas de pontilhões e pistas locais de alta velocidade.
                </p>
              </div>

              {/* PILAR 4 */}
              <div>
                <h3 className="text-slate-950 font-sora font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-amber-500 pl-4">
                  4. Guincho em São Paulo com Plataforma Hidráulica e Asa-Delta
                </h3>
                <p className="text-slate-600">
                  Para garagens de subsolo estreitas, veículos travados com câmbio automático ou rodas bloqueadas, aplicamos a engenharia do <strong>guincho em São Paulo com asa-delta e patins</strong>. Rebocamos seu veículo sem arrasto forçado, preservando transmissões e diferenciais de tração 4x4 e integral.
                </p>
              </div>

              {/* PILAR 5 */}
              <div>
                <h3 className="text-slate-950 font-sora font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-amber-500 pl-4">
                  5. Guincho em São Paulo Especializado no Resgate de Motocicletas
                </h3>
                <p className="text-slate-600">
                  Motos esportivas e de alta cilindrada não podem ser içadas de forma genérica. No <strong>guincho em São Paulo para motos</strong>, empregamos pranchas com rampa plana, travas de roda dianteira e catracas emborrachadas de pressão neutralizada, impedindo qualquer arranhão ou empenamento de guidão e carenagem.
                </p>
              </div>

              {/* PILAR 6 */}
              <div>
                <h3 className="text-slate-950 font-sora font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-amber-500 pl-4">
                  6. Guincho em São Paulo para Vans, Utilitários e Frotas Comerciais
                </h3>
                <p className="text-slate-600">
                  Empresas e frotistas urbanos dependem de veículos de entrega rodando diariamente. O nosso atendimento de <strong>guincho em São Paulo para vans e VUCs</strong> dá suporte para Sprinter, Ducato, HR e caminhonetes com pranchas reforçadas de alto torque, minimizando o prejuízo de carga parada.
                </p>
              </div>

              {/* PILAR 7 */}
              <div>
                <h3 className="text-slate-950 font-sora font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-amber-500 pl-4">
                  7. Guincho em São Paulo na Zona Sul, Berrini e Santo Amaro
                </h3>
                <p className="text-slate-600">
                  No eixo corporativo da Berrini, Chácara Santo Antônio, Moema e Morumbi, nosso serviço de <strong>guincho em São Paulo Zona Sul</strong> mantém unidades posicionadas para desviar de gargalos de trânsito na Washington Luís e Nações Unidas, proporcionando atendimento ágil a executivos e moradores.
                </p>
              </div>

              {/* PILAR 8 */}
              <div>
                <h3 className="text-slate-950 font-sora font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-amber-500 pl-4">
                  8. Guincho em São Paulo na Zona Leste, Mooca e Radial Leste
                </h3>
                <p className="text-slate-600">
                  Com base no coração da Zona Leste paulistana, garantimos o mais rápido <strong>guincho em São Paulo na Zona Leste</strong>. Atendemos com extrema rapidez os bairros do Tatuapé, Mooca, Anália Franco, Penha, Aricanduva e Sapopemba, cobrindo o fluxo constante da Radial Leste e Jacu Pêssego.
                </p>
              </div>

              {/* PILAR 9 */}
              <div>
                <h3 className="text-slate-950 font-sora font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-amber-500 pl-4">
                  9. Guincho em São Paulo no Centro, Paulista e 23 de Maio
                </h3>
                <p className="text-slate-600">
                  Regiões de tráfego denso e cruzamentos com túneis complexos exigem caminhões versáteis e condutores habilitados. Nosso <strong>guincho em São Paulo Centro e Paulista</strong> socorre com pontualidade na Consolação, Bela Vista, Liberdade, República e nos corredores da Avenida 23 de Maio e 9 de Julho.
                </p>
              </div>

              {/* PILAR 10 */}
              <div>
                <h3 className="text-slate-950 font-sora font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-amber-500 pl-4">
                  10. Guincho em São Paulo na Zona Norte e Saídas de Rodovias
                </h3>
                <p className="text-slate-600">
                  Socorro imediato nas imediações de Santana, Tucuruvi, Casa Verde e Vila Maria. A unidade de <strong>guincho em São Paulo Zona Norte</strong> opera integrada às saídas para as rodovias Presidente Dutra, Fernão Dias e Ayrton Senna, pronto para socorrer tanto motoristas urbanos quanto em viagens.
                </p>
              </div>

              {/* PILAR 11 */}
              <div>
                <h3 className="text-slate-950 font-sora font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-amber-500 pl-4">
                  11. Guincho em São Paulo na Zona Oeste, Pinheiros e Lapa
                </h3>
                <p className="text-slate-600">
                  Cobrimos amplamente Perdizes, Barra Funda, Butantã, Vila Madalena e rodovia Raposo Tavares. O <strong>guincho em São Paulo Zona Oeste</strong> é estruturado para vencer aclives acentuados e bairros com vias estreitas, garantindo remoção sem riscos adicionais à mecânica do veículo.
                </p>
              </div>

              {/* PILAR 12 */}
              <div>
                <h3 className="text-slate-950 font-sora font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-amber-500 pl-4">
                  12. Guincho em São Paulo com Saída Imediata e Preço Transparente
                </h3>
                <p className="text-slate-600">
                  Sem surpresas no orçamento ou cobranças abusivas de quilometragem. Ao acionar o <strong>guincho em São Paulo</strong> com a nossa central, você recebe valor fechado com clareza antes do caminhão sair da base, acompanhamento por GPS e condutores certificados para total tranquilidade.
                </p>
              </div>

            </div>

            {/* NOTA DE FECHAMENTO COM LINKAGEM INTERNA */}
            <p className="mt-8 border-l-4 border-amber-500 pl-4 italic text-slate-800 bg-amber-500/10 p-4 rounded-r-xl">
              Para resgate urgente ou transporte veicular agendado em qualquer região da capital, solicite agora o <a href="https://paulistaguincho.com.br" className="text-amber-600 font-semibold hover:underline">guincho em São Paulo</a> da Paulista Guincho 24 Horas via WhatsApp ou ligação direta.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}