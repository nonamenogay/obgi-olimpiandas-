import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Globe } from 'lucide-react';

// IMPORTANTE: Importando a imagem para o Vite reconhecer
// Certifique-se de que a imagem hero-bg.jpg existe na pasta src/assets/images/
import heroBg from '../assets/images/hero-bg.jpg'; 

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background com Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} // Usando a variável importada
          alt="Vista aérea da área de estudo" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradiente */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/40 to-slate-900"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-6 backdrop-blur-sm">
            <Globe size={14} />
            OLIMPÍADA BRASILEIRA DE GEOINFORMÁTICA • 2ª FASE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
            Análise Espacial de <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-300">
              Riscos Geológicos Urbanos
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Uma investigação sistemática utilizando sensoriamento remoto e análise multicritério para identificação de zonas de vulnerabilidade (2010–2025).
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold shadow-[0_0_20px_rgba(5,150,105,0.4)] transition-all transform hover:-translate-y-1">
              Explorar Análise
            </button>
          </div>
        </motion.div>
      </div>

      {/* Indicador de Scroll Animado - CORRIGIDO AQUI */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;