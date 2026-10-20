import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-10 pb-8 px-6 sm:px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Bloco Principal Enxuto */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10 items-start">
          
          {/* Logo e Resumo */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-9 h-9">
                <Image
                  src="/logo-paulista-guincho.png"
                  alt="Logo Paulista Guincho"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-sora font-extrabold text-xl tracking-tight text-white">
                Paulista <span className="text-amber-400">Guincho</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-4">
              Auto socorro rápido 24 horas em São Paulo e região. Caminhões plataforma preparados para resgates com máxima segurança e agilidade.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-[11px] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Central de Plantão 24/7 Ativa</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="md:col-span-3">
            <p className="font-sora font-bold text-xs uppercase tracking-widest text-amber-400 mb-3">
              Navegação
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="#inicio" className="hover:text-amber-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:text-amber-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#diferenciais" className="hover:text-amber-400 transition-colors">
                  Diferenciais
                </Link>
              </li>
            </ul>
          </div>

          {/* Canais de Emergência */}
          <div className="md:col-span-4">
            <p className="font-sora font-bold text-xs uppercase tracking-widest text-amber-400 mb-3">
              Canais de Emergência
            </p>
            <div className="space-y-2.5">
              <a
                href="https://wa.me/5511982434255?text=Ol%C3%A1,%20preciso%20de%20um%20guincho%20urgente%20em%20S%C3%A3o%20Paulo."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-white/10 hover:border-amber-400/50 transition-all text-xs sm:text-sm font-semibold group"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 fill-emerald-400" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.511 2 2.022 6.489 2.022 12.008c0 1.84.5 3.567 1.373 5.053L2 22l5.09-1.334c1.432.781 3.064 1.229 4.941 1.229 5.518 0 10.009-4.489 10.009-10.008C22.04 6.489 17.549 2 12.031 2zm5.882 14.22c-.244.686-1.42 1.309-1.97 1.348-.518.037-1.184.053-3.845-1.047-3.21-1.327-5.267-4.577-5.426-4.789-.159-.212-1.298-1.726-1.298-3.292 0-1.566.822-2.336 1.114-2.654.292-.318.638-.398.85-.398.212 0 .424.002.61.011.197.01.46.046.702.628.25.603.85 2.072.923 2.224.074.152.122.331.02.534-.101.203-.153.33-.301.503-.148.173-.312.387-.446.52-.148.148-.303.31-.13.608.173.298.77 1.272 1.651 2.057 1.135 1.01 2.091 1.323 2.389 1.472.298.149.473.124.648-.078.175-.203.748-.871.948-1.169.2-.298.399-.249.673-.149.274.1 1.745.823 2.044.972.298.149.497.224.571.348.074.124.074.722-.17 1.408z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-normal">WhatsApp 24 Horas</span>
                  <span className="text-white group-hover:text-amber-400 transition-colors">(11) 98243-4255</span>
                </div>
              </a>

              <a
                href="tel:+5511982434255"
                className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-white/10 hover:border-amber-400/50 transition-all text-xs sm:text-sm font-semibold group"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 stroke-amber-400 stroke-2 fill-none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-normal">Ligar Direto</span>
                  <span className="text-white group-hover:text-amber-400 transition-colors">(11) 98243-4255</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Linha Final com EG Empório Digital Centralizada no PC */}
        <div className="pt-6 relative flex flex-col sm:flex-row items-center justify-center sm:justify-start text-xs text-slate-400 gap-3">
          <p>© Paulista Guincho. São Paulo - SP.</p>

          {/* Timbre Perfeitamente Centralizado no PC */}
          <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 flex items-center gap-1.5 font-medium text-slate-300">
            <span>Desenvolvido por</span>
            <a
              href="https://egemporiodigital.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 decoration-amber-400/40 hover:decoration-amber-300 transition-all"
            >
              EG Empório Digital
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}