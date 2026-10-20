'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const differentials = [
  {
    title: 'Preço Justo e Sem Surpresas',
    desc: 'Passamos o valor fechado antes da partida do caminhão. Sem cobranças abusivas na chegada.',
    badge: 'Transparência',
  },
  {
    title: 'Carga 100% Segurada & Sem Riscos',
    desc: 'Plataformas revisadas e operadores treinados para transportar sem arranhões ou avarias.',
    badge: 'Segurança Total',
  },
  {
    title: 'Cobertura Estratégica em SP',
    desc: 'Presença nas Marginais, 23 de Maio, Radial Leste e principais rodovias da capital.',
    badge: 'Agilidade Real',
  },
];

export default function Features() {
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
      id="diferenciais"
      ref={sectionRef}
      className="pt-10 sm:pt-14 pb-20 sm:pb-28 px-6 sm:px-10 bg-[#F1F5F9]/60 relative z-10 border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LADO ESQUERDO: Diferenciais e Autoridade (7 Colunas - No mobile fica embaixo) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-between">
            
            {/* Tag e Título SEO */}
            <div className="mb-10 reveal-on-scroll">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-700 text-xs font-sora font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Por que confiar no Paulista Guincho</span>
              </div>

              <h2 className="font-sora font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight leading-[1.15]">
                O socorro que você precisa com a{' '}
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  tranquilidade que você merece.
                </span>
              </h2>
            </div>

            {/* Lista Fluida sem Formato de Card (Clean & Editorial) */}
            <div className="divide-y divide-slate-200/80 mb-10">
              {differentials.map((item, idx) => (
                <div
                  key={idx}
                  className="py-5 first:pt-0 last:pb-0 group transition-all duration-300 reveal-on-scroll"
                  style={{ transitionDelay: `${idx * 90}ms` }}
                >
                  <div className="flex items-center justify-between gap-4 mb-1.5">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 group-hover:scale-150 transition-transform" />
                      <h3 className="font-sora font-bold text-lg sm:text-xl text-slate-950 group-hover:text-amber-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    
                    <span className="text-[10px] sm:text-[11px] font-sora font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-400/15 text-amber-800">
                      {item.badge}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed pl-4.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Banner de Autoridade & CTA Turbinado */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white shadow-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 reveal-on-scroll">
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 font-sora font-black text-xl flex items-center justify-center shadow-lg shadow-amber-400/20 shrink-0">
                  5.0
                </div>
                <div>
                  <div className="flex text-amber-400 text-xs tracking-wider mb-1">
                    ★★★★★
                  </div>
                  <p className="text-sm font-bold text-white leading-tight">
                    Mais de 10.000 resgates em SP
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Ficha verificada e recomendada no Google em SP
                  </p>
                </div>
              </div>

              {/* Botão de Alta Conversão com Efeito Glow */}
              <a
                href="https://wa.me/5511982434255?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20r%C3%A1pida%20de%20guincho."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-sora font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shrink-0"
              >
                {/* SVG WhatsApp Puro */}
                <svg className="w-4 h-4 fill-slate-950 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.511 2 2.022 6.489 2.022 12.008c0 1.84.5 3.567 1.373 5.053L2 22l5.09-1.334c1.432.781 3.064 1.229 4.941 1.229 5.518 0 10.009-4.489 10.009-10.008C22.04 6.489 17.549 2 12.031 2zm5.882 14.22c-.244.686-1.42 1.309-1.97 1.348-.518.037-1.184.053-3.845-1.047-3.21-1.327-5.267-4.577-5.426-4.789-.159-.212-1.298-1.726-1.298-3.292 0-1.566.822-2.336 1.114-2.654.292-.318.638-.398.85-.398.212 0 .424.002.61.011.197.01.46.046.702.628.25.603.85 2.072.923 2.224.074.152.122.331.02.534-.101.203-.153.33-.301.503-.148.173-.312.387-.446.52-.148.148-.303.31-.13.608.173.298.77 1.272 1.651 2.057 1.135 1.01 2.091 1.323 2.389 1.472.298.149.473.124.648-.078.175-.203.748-.871.948-1.169.2-.298.399-.249.673-.149.274.1 1.745.823 2.044.972.298.149.497.224.571.348.074.124.074.722-.17 1.408z" />
                </svg>
                <span>Pedir Cotação Rápida</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </div>

          {/* LADO DIREITO: 2ª Foto com Efeito Editorial (5 Colunas - No mobile fica no topo) */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative mb-6 lg:mb-0">
            <div className="image-reveal-container rounded-2xl h-[440px] sm:h-[520px] w-full shadow-2xl border border-slate-200/80 relative">
              <div className="image-reveal-overlay rounded-2xl" />
              <Image
                src="/guincho-real-2.jpg"
                alt="Operação de resgate com caminhão plataforma da Paulista Guincho"
                fill
                className="image-reveal-img object-cover object-center"
              />
            </div>

            {/* Badge Flutuante de Plantão 24h */}
            <div className="absolute -bottom-5 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-slate-200/90 shadow-xl flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <div>
                <p className="text-xs font-sora font-bold text-slate-950 leading-none">Plantão Ativo Agora</p>
                <p className="text-[11px] text-slate-500 mt-1">Caminhões prontos para saída em SP</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}