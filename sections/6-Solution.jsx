import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap } from 'lucide-react';

const FutureAI = () => {
  return (
    <section id="future" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Elementos decorativos de fundo (Glow effects) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs border border-cyan-500/30 px-3 py-1 rounded bg-cyan-900/20 mb-6">
              <Cpu size={14} />
              MODELAGEM PREDITIVA v2.0
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Cenário Futuro: <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-emerald-400">Inteligência Artificial</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Utilizando redes neurais convolucionais (CNN) treinadas com o histórico de deslizamentos da região, nosso modelo projeta um aumento de 35% nas ocorrências críticas até 2030 se as medidas de mitigação não forem implementadas.
            </p>
            <button className="text-white border-b border-emerald-500 pb-1 hover:text-emerald-400 transition-colors">
              Ler whitepaper técnico &rarr;
            </button>
          </div>

          {/* Cartões de Estatística "Futurista" */}
          <div className="md:w-1/2 grid gap-4">
            <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl backdrop-blur relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <h4 className="text-slate-400 text-sm font-mono mb-2">PRECISÃO DO MODELO</h4>
              <div className="text-3xl font-bold text-white flex items-end gap-2">
                92.4% <span className="text-emerald-400 text-sm mb-1 flex items-center"><Zap size={12} /> +2.1%</span>
              </div>
            </div>
            
            <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl backdrop-blur relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <h4 className="text-slate-400 text-sm font-mono mb-2">ÁREA DE RISCO PROJETADA</h4>
              <div className="text-3xl font-bold text-white">
                1,240 <span className="text-sm text-slate-500 font-normal">hectares</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FutureAI;