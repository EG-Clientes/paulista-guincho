'use client';

import React from 'react';

export default function WhatsAppButton() {
  return (
    <>
      <style jsx>{`
        @keyframes pulse-wpp {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
            transform: scale(1);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(37, 211, 102, 0);
            transform: scale(1);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
            transform: scale(1);
          }
        }

        .wpp-pulsante {
          position: fixed;
          bottom: 15px;
          right: 15px;
          width: 65px;
          height: 65px;
          background-color: #25d366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          text-decoration: none;
          animation: pulse-wpp 2s infinite;
          transition: transform 0.3s ease, background-color 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .wpp-pulsante:hover {
          transform: scale(1.1);
          background-color: #20ba5a;
        }
      `}</style>

      {/* BOTÃO FLUTUANTE WHATSAPP FIEL AO PADRÃO */}
      <a
        href="https://wa.me/5511982434255?text=Ol%C3%A1,%20vim%20pelo%20site%20e%20preciso%20de%20um%20guincho%20urgente%20em%20S%C3%A3o%20Paulo."
        className="wpp-pulsante"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp Paulista Guincho"
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ margin: 'auto' }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 21.95l4.913-1.412A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 1.5c4.694 0 8.5 3.806 8.5 8.5s-3.806 8.5-8.5 8.5c-1.615 0-3.123-.45-4.415-1.233l-.317-.192-3.118.896.913-3.04-.21-.347A8.463 8.463 0 013.5 12c0-4.694 3.806-8.5 8.5-8.5zm4.72 10.932c-.258-.13-1.528-.754-1.764-.84-.237-.086-.41-.13-.582.13-.172.257-.667.84-.817 1.012-.15.172-.3.193-.558.064a7.043 7.043 0 01-2.074-1.28 7.76 7.76 0 01-1.435-1.787c-.15-.258-.016-.398.113-.527.117-.116.258-.3.387-.451.13-.15.172-.258.258-.43.086-.172.043-.322-.021-.452-.065-.129-.582-1.4-.797-1.914-.21-.505-.42-.435-.582-.443-.15-.008-.322-.01-.494-.01-.172 0-.452.065-.688.323-.237.258-.903.882-.903 2.15 0 1.27.925 2.502 1.054 2.674.129.172 1.82 2.78 4.41 3.896.616.265 1.096.422 1.471.542.618.196 1.18.169 1.625.102.496-.075 1.528-.624 1.743-1.226.215-.602.215-1.118.15-1.226-.064-.108-.236-.172-.494-.301z"
            fill="currentColor"
          />
        </svg>
      </a>
    </>
  );
}