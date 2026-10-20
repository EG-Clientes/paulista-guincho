'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[99999] transition-all duration-300 ${
          isScrolled
            ? 'py-4 bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-white/5'
            : 'py-6 bg-gradient-to-b from-black/85 via-black/45 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          
          {/* Logotipo com Imagem Ampliada sem aumentar a faixa */}
          <Link
            href="#inicio"
            className="flex items-center gap-3.5 font-sora font-extrabold text-2xl tracking-tight text-white group"
          >
            {/* Logo maior: w-14 no mobile e md:w-16 no desktop com margem negativa pra não estufar a barra */}
            <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0 -my-1 md:-my-2.5">
              <Image
                src="/logo-paulista-guincho.png"
                alt="Logo Paulista Guincho 24h"
                fill
                priority
                className="object-contain drop-shadow-md group-hover:scale-105 transition-transform"
              />
            </div>

            <span className="leading-none text-2xl md:text-[1.75rem]">
              Paulista <span className="text-amber-400">Guincho</span>
            </span>
          </Link>

          {/* Links Desktop - Reorganizados, sem Dúvidas, fontes equilibradas e espaçamento elegante */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="#inicio"
              className="text-[1.05rem] font-semibold text-slate-100 hover:text-amber-400 transition-colors"
            >
              Início
            </Link>
            <Link
              href="#servicos"
              className="text-[1.05rem] font-semibold text-slate-100 hover:text-amber-400 transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#diferenciais"
              className="text-[1.05rem] font-semibold text-slate-100 hover:text-amber-400 transition-colors"
            >
              Diferenciais
            </Link>

            {/* CTA Desktop */}
            <a
              href="https://wa.me/5511982434255?text=Ol%C3%A1,%20vim%20pelo%20site%20e%20preciso%20de%20um%20guincho%20urgente%20em%20S%C3%A3o%20Paulo."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg font-sora text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              {/* WhatsApp SVG Puro */}
              <svg className="w-4 h-4 fill-slate-950" viewBox="0 0 24 24">
                <path d="M12.031 2C6.511 2 2.022 6.489 2.022 12.008c0 1.84.5 3.567 1.373 5.053L2 22l5.09-1.334c1.432.781 3.064 1.229 4.941 1.229 5.518 0 10.009-4.489 10.009-10.008C22.04 6.489 17.549 2 12.031 2zm5.882 14.22c-.244.686-1.42 1.309-1.97 1.348-.518.037-1.184.053-3.845-1.047-3.21-1.327-5.267-4.577-5.426-4.789-.159-.212-1.298-1.726-1.298-3.292 0-1.566.822-2.336 1.114-2.654.292-.318.638-.398.85-.398.212 0 .424.002.61.011.197.01.46.046.702.628.25.603.85 2.072.923 2.224.074.152.122.331.02.534-.101.203-.153.33-.301.503-.148.173-.312.387-.446.52-.148.148-.303.31-.13.608.173.298.77 1.272 1.651 2.057 1.135 1.01 2.091 1.323 2.389 1.472.298.149.473.124.648-.078.175-.203.748-.871.948-1.169.2-.298.399-.249.673-.149.274.1 1.745.823 2.044.972.298.149.497.224.571.348.074.124.074.722-.17 1.408z" />
              </svg>
              <span>Chamar Guincho 24h</span>
            </a>
          </nav>

          {/* Botão Hambúrguer Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir Menu"
            className="md:hidden text-white p-2 focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? (
              <svg className="w-8 h-8 text-amber-400 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Backdrop Escuro Mobile: z-[99997] cobre qualquer botão flutuante da tela */}
      <div
        className={`fixed inset-0 bg-black/75 backdrop-blur-sm z-[99997] transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Gaveta Mobile: z-[99998] cobre o WhatsApp flutuante e o -mt-[1px] elimina a fresta/linha */}
      <aside
        className={`fixed right-0 w-[85%] max-w-xs bg-slate-950 shadow-2xl z-[99998] p-6 flex flex-col justify-between transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${
          isScrolled
            ? 'top-[72px] h-[calc(100dvh-71px)] -mt-[1px]'
            : 'top-[88px] h-[calc(100dvh-87px)] -mt-[1px]'
        } ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Links Diretos Sem Título Repetido */}
        <nav className="flex flex-col space-y-2 pt-2">
          <Link
            href="#inicio"
            onClick={closeMenu}
            className="py-3 px-3 rounded-xl font-sora font-semibold text-base text-slate-200 hover:text-amber-400 hover:bg-white/5 border-b border-white/5 transition-all flex items-center justify-between group"
          >
            <span>Início</span>
            <span className="text-xs text-amber-400/50 group-hover:text-amber-400 transition-colors">→</span>
          </Link>
          <Link
            href="#servicos"
            onClick={closeMenu}
            className="py-3 px-3 rounded-xl font-sora font-semibold text-base text-slate-200 hover:text-amber-400 hover:bg-white/5 border-b border-white/5 transition-all flex items-center justify-between group"
          >
            <span>Serviços de Socorro</span>
            <span className="text-xs text-amber-400/50 group-hover:text-amber-400 transition-colors">→</span>
          </Link>
          <Link
            href="#diferenciais"
            onClick={closeMenu}
            className="py-3 px-3 rounded-xl font-sora font-semibold text-base text-slate-200 hover:text-amber-400 hover:bg-white/5 border-b border-white/5 transition-all flex items-center justify-between group"
          >
            <span>Por que o Paulista?</span>
            <span className="text-xs text-amber-400/50 group-hover:text-amber-400 transition-colors">→</span>
          </Link>
        </nav>

        {/* CTAs Mobile de Emergência */}
        <div className="flex flex-col gap-3 pt-6 pb-2 border-t border-white/10">
          <a
            href="https://wa.me/5511982434255?text=Ol%C3%A1,%20vim%20pelo%20site%20e%20preciso%20de%20um%20guincho%20urgente%20em%20S%C3%A3o%20Paulo."
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-sora font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-400/25 active:scale-95 transition-transform"
          >
            <svg className="w-4 h-4 fill-slate-950" viewBox="0 0 24 24">
              <path d="M12.031 2C6.511 2 2.022 6.489 2.022 12.008c0 1.84.5 3.567 1.373 5.053L2 22l5.09-1.334c1.432.781 3.064 1.229 4.941 1.229 5.518 0 10.009-4.489 10.009-10.008C22.04 6.489 17.549 2 12.031 2zm5.882 14.22c-.244.686-1.42 1.309-1.97 1.348-.518.037-1.184.053-3.845-1.047-3.21-1.327-5.267-4.577-5.426-4.789-.159-.212-1.298-1.726-1.298-3.292 0-1.566.822-2.336 1.114-2.654.292-.318.638-.398.85-.398.212 0 .424.002.61.011.197.01.46.046.702.628.25.603.85 2.072.923 2.224.074.152.122.331.02.534-.101.203-.153.33-.301.503-.148.173-.312.387-.446.52-.148.148-.303.31-.13.608.173.298.77 1.272 1.651 2.057 1.135 1.01 2.091 1.323 2.389 1.472.298.149.473.124.648-.078.175-.203.748-.871.948-1.169.2-.298.399-.249.673-.149.274.1 1.745.823 2.044.972.298.149.497.224.571.348.074.124.074.722-.17 1.408z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          <a
            href="tel:+5511982434255"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-sora font-semibold text-xs text-white bg-slate-900 border border-white/10 hover:bg-slate-800 active:scale-95 transition-all"
          >
            <svg className="w-3.5 h-3.5 stroke-amber-400 stroke-2 fill-none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Ligar Agora</span>
          </a>
        </div>
      </aside>
    </>
  );
}