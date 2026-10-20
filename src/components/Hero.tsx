'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Ativa as animações de entrada logo após o carregamento
    const timer = setTimeout(() => {
      const reveals = heroRef.current?.querySelectorAll('.reveal-text, .image-reveal-container');
      reveals?.forEach((el) => el.classList.add('active'));
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative pt-32 pb-10 md:pt-40 md:pb-14 flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-[#F8FAFC]"
    >
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LADO ESQUERDO: Textos e CTAs (7 Colunas - No mobile fica embaixo) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Badge de Urgência & SEO Local */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 mb-6 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <span className="font-sora text-xs sm:text-sm font-bold tracking-wider uppercase">
                Socorro Rápido • São Paulo Capital e Região
              </span>
            </div>

            {/* H1 Principal com Reveal Suave do Modelo Editorial */}
            <div className="overflow-hidden mb-2">
              <h1 className="font-sora font-extrabold text-4xl sm:text-6xl lg:text-[4rem] text-white tracking-tight leading-[1.08] reveal-text">
                GUINCHO 24H
              </h1>
            </div>
            <div className="overflow-hidden mb-6">
              <span className="block font-sora font-extrabold text-4xl sm:text-6xl lg:text-[4rem] text-amber-400 tracking-tight leading-[1.08] reveal-text [transition-delay:200ms]">
                CHEGADA RÁPIDA NO LOCAL.
              </span>
            </div>

            {/* Subtítulo Descritivo com Gatilhos de Decisão */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-8">
              Pane mecânica, bateria ou colisão? Nossa frota de caminhões plataforma está posicionada nas principais vias de SP para te atender agora com agilidade, cuidado e preço justo.
            </p>

            {/* BOTÕES DE CONVERSÃO DE EMERGÊNCIA */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 mb-10">
              {/* Botão Primário WhatsApp */}
              <a
                href="https://wa.me/5511982434255?text=Ol%C3%A1,%20vim%20pelo%20site%20e%20preciso%20de%20um%20guincho%20urgente%20em%20S%C3%A3o%20Paulo."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-sora font-bold text-base text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-slate-950 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.511 2 2.022 6.489 2.022 12.008c0 1.84.5 3.567 1.373 5.053L2 22l5.09-1.334c1.432.781 3.064 1.229 4.941 1.229 5.518 0 10.009-4.489 10.009-10.008C22.04 6.489 17.549 2 12.031 2zm5.882 14.22c-.244.686-1.42 1.309-1.97 1.348-.518.037-1.184.053-3.845-1.047-3.21-1.327-5.267-4.577-5.426-4.789-.159-.212-1.298-1.726-1.298-3.292 0-1.566.822-2.336 1.114-2.654.292-.318.638-.398.85-.398.212 0 .424.002.61.011.197.01.46.046.702.628.25.603.85 2.072.923 2.224.074.152.122.331.02.534-.101.203-.153.33-.301.503-.148.173-.312.387-.446.52-.148.148-.303.31-.13.608.173.298.77 1.272 1.651 2.057 1.135 1.01 2.091 1.323 2.389 1.472.298.149.473.124.648-.078.175-.203.748-.871.948-1.169.2-.298.399-.249.673-.149.274.1 1.745.823 2.044.972.298.149.497.224.571.348.074.124.074.722-.17 1.408z" />
                </svg>
                <span>CHAMAR NO WHATSAPP</span>
              </a>

              {/* Botão Secundário Ligação */}
              <a
                href="tel:+5511982434255"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-sora font-semibold text-sm text-white bg-slate-800/80 hover:bg-slate-800 border border-white/10 hover:border-amber-400/40 transition-all duration-300 backdrop-blur-md active:scale-95"
              >
                <svg className="w-4 h-4 stroke-amber-400 stroke-2 fill-none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Ligar Agora 24h</span>
              </a>
            </div>

            {/* Badges de Autoridade com Acabamento Glassmorphism Sofisticado */}
            <div className="grid grid-cols-3 gap-3.5 pt-6 border-t border-white/10 w-full max-w-lg">
              
              {/* Card 1: 24h / 7d */}
              <div className="group relative bg-slate-950/70 backdrop-blur-xl p-3.5 rounded-2xl border border-white/10 hover:border-amber-400/40 shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-sora font-bold tracking-wider uppercase text-slate-400 group-hover:text-amber-400 transition-colors">Plantão</span>
                </div>
                <p className="font-sora font-extrabold text-lg sm:text-xl text-white tracking-tight leading-none">24h / 7d</p>
                <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">Atendimento Direto</p>
              </div>

              {/* Card 2: 100% */}
              <div className="group relative bg-slate-950/70 backdrop-blur-xl p-3.5 rounded-2xl border border-amber-400/30 hover:border-amber-400/60 shadow-xl shadow-amber-500/5 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-[10px] font-sora font-bold tracking-wider uppercase text-amber-400">Frota</span>
                </div>
                <p className="font-sora font-extrabold text-lg sm:text-xl text-amber-400 tracking-tight leading-none">100%</p>
                <p className="text-[11px] text-slate-300 mt-1 leading-tight font-medium">Plataforma Segura</p>
              </div>

              {/* Card 3: SP Capital */}
              <div className="group relative bg-slate-950/70 backdrop-blur-xl p-3.5 rounded-2xl border border-white/10 hover:border-amber-400/40 shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-amber-400 transition-colors" />
                  <span className="text-[10px] font-sora font-bold tracking-wider uppercase text-slate-400 group-hover:text-amber-400 transition-colors">Cobertura</span>
                </div>
                <p className="font-sora font-extrabold text-lg sm:text-xl text-white tracking-tight leading-none">SP Capital</p>
                <p className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">Todas as Regiões</p>
              </div>

            </div>

          </div>

          {/* LADO DIREITO: Selo Oficial Emblema (5 Colunas - No mobile fica no topo) */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative flex items-center justify-center lg:-translate-y-30">
            <div className="relative mx-auto w-full max-w-[420px]">
              
              {/* Container Circular com Efeito de Revelação Suave */}
              <div className="image-reveal-container rounded-full aspect-square w-full max-w-[380px] mx-auto p-4 bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-amber-400/30 shadow-[0_0_50px_rgba(245,158,11,0.15)] flex items-center justify-center relative">
                <div className="image-reveal-overlay rounded-full" />
                
                <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src="/logo-paulista-guincho.png"
                    alt="Paulista Guinchos 24 Horas Emblema Oficial"
                    fill
                    priority
                    className="image-reveal-img object-contain p-2"
                  />
                </div>
              </div>

              {/* Card Flutuante de Confiança / Google Maps */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:-left-4 bg-slate-950/95 backdrop-blur-xl border border-amber-400/30 p-4 rounded-2xl shadow-2xl flex items-center gap-3.5 z-20 whitespace-nowrap">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 font-sora font-extrabold text-base shadow-md shadow-amber-400/20">
                  5.0
                </div>
                <div>
                  <div className="flex text-amber-400 text-xs tracking-wider mb-0.5">
                    ★★★★★
                  </div>
                  <p className="text-white text-xs font-bold leading-tight">Mais de 10.000 resgates em SP</p>
                  <p className="text-slate-400 text-[11px]">Nota máxima no Google</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}