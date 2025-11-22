import React from 'react';
import Card from '../components/ui/Card';
import { AlertTriangle, TrendingUp, Home, Droplets } from 'lucide-react';

const Problem = () => {
  // CORREÇÃO: Agora a lista 'issues' tem conteúdo real
  const issues = [
    {
      icon: <AlertTriangle size={28} className="text-amber-500" />,
      title: "Risco de Deslizamento",
      desc: "Alta suscetibilidade a movimentos de massa devido à declividade acentuada e composição instável do solo na região norte."
    },
    {
      icon: <Home size={28} className="text-blue-500" />,
      title: "Ocupação Irregular",
      desc: "Expansão urbana desordenada sobre áreas de preservação permanente (APP) e encostas sem infraestrutura de contenção."
    },
    {
      icon: <Droplets size={28} className="text-cyan-500" />,
      title: "Drenagem Insuficiente",
      desc: "A impermeabilização do solo aumenta o escoamento superficial, causando erosão laminar e sobrecarga nos canais fluviais."
    },
    {
      icon: <TrendingUp size={28} className="text-emerald-500" />,
      title: "Degradação Acelerada",
      desc: "Análise temporal (2010-2025) indica um aumento de 40% nas zonas de vulnerabilidade crítica se nenhuma ação for tomada."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contextualização do Problema</h2>
          <div className="h-1.5 w-24 bg-emerald-500 rounded-full mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">
            A análise preliminar da área de estudo revela um cenário crítico de degradação ambiental acelerada por vetores antrópicos e falta de planejamento urbano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {issues.map((item, idx) => (
            <Card key={idx} delay={idx * 0.1} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;