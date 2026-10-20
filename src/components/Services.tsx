'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const quickServices = [
  {
    number: '01',
    name: 'Carros, SUVs & Blindados',
    detail: 'Plataforma hidráulica 100% nivelada, sem riscos nem arrastos.',
  },
  {
    number: '02',
    name: 'Motos de Todas as Cilindradas',
    detail: 'Amarração técnica com cintas especiais e travas dedicadas.',
  },
  {
    number: '03',
    name: 'Vans & Utilitários Leves',
    detail: 'Capacidade de carga reforçada para veículos de trabalho.',
  },
  {
    number: '04',
    name: 'Socorro no Local (Bateria & Pneu)',
    detail: 'Partida auxiliar de alta amperagem e substituição com estepe.',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(
      '.reveal-on-scroll, .image-reveal-container'
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="pt-10 sm:pt-14 pb-20 sm:pb-28 px-6 sm:px-10 bg-[#F8FAFC] relative z-10 border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho Editorial com Acabamento Premium */}
        <div className="max-w-3xl mb-12 sm:mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-700 text-xs font-sora font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>São Paulo e Região Metropolitana</span>
          </div>

          <h2 className="font-sora font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight leading-[1.15]">
            Pronto Atendimento para <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              qualquer tipo de veículo.
            </span>
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg font-normal max-w-2xl leading-relaxed">
            Plataformas modernas posicionadas estrategicamente para atender chamados urgentes com máxima segurança.
          </p>
        </div>

        {/* Bloco Assimétrico: Foto Real do Guincho + Lista Minimalista */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Foto Real do Guincho com Efeito Cortina (5 Colunas) */}
          <div className="lg:col-span-5 relative">
            <div className="image-reveal-container rounded-2xl h-[420px] sm:h-[480px] w-full shadow-xl border border-slate-200/80 relative">
              <div className="image-reveal-overlay rounded-2xl" />
              <Image
                src="/guincho-real-1.jpg"
                alt="Caminhão Guincho Plataforma Paulista em operação em São Paulo"
                fill
                className="image-reveal-img object-cover object-center"
              />
            </div>
            
            {/* Tag flutuante discreta de autenticidade */}
            <div className="absolute -bottom-4 right-4 sm:-bottom-5 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200/80 shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-sora font-bold text-slate-800 tracking-wide uppercase">
                Frota Própria em SP
              </span>
            </div>
          </div>

          {/* Lado Direito: Linhas Interativas Premium (7 Colunas) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-3">
              {quickServices.map((item, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/5511982434255?text=Ol%C3%A1,%20preciso%20de%20um%20guincho%20para:%20${encodeURIComponent(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.12)] hover:border-amber-400/60 hover:-translate-y-0.5 transition-all duration-300 reveal-on-scroll"
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Número estilizado em badge âmbar */}
                      <span className="w-9 h-9 rounded-xl bg-slate-950 text-amber-400 font-sora font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                        {item.number}
                      </span>
                      
                      <div>
                        <h3 className="font-sora font-bold text-base sm:text-lg text-slate-950 group-hover:text-amber-600 transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-slate-500 text-xs sm:text-sm font-normal mt-0.5 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>

                    {/* Seta Dinâmica de Ação */}
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-amber-400 text-slate-600 group-hover:text-slate-950 transition-all">
                      <span className="font-sora font-bold text-sm group-hover:translate-x-0.5 transition-transform">→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Final Rápido e Direto */}
            <div className="pt-6 mt-6 border-t border-slate-200/80 reveal-on-scroll flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Atendimento humanizado 24h</span>
              </div>
              
              <a
                href="https://wa.me/5511982434255?text=Ol%C3%A1,%20preciso%20de%20um%20guincho%20para%20o%20meu%20ve%C3%ADculo."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-sora font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-400/20 active:scale-95 transition-all"
              >
                <span>Chamar Socorro Agora</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}