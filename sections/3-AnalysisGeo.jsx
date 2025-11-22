import React from 'react';
import { Card as TremorCard, Title, BarChart, DonutChart } from "@tremor/react";

// DADOS CORRIGIDOS: Comparação entre 2010 e 2025
const chartdata = [
  {
    name: "Área Urbana",
    "2010": 1250,
    "2025": 2800,
  },
  {
    name: "Vegetação Densa",
    "2010": 3400,
    "2025": 1600,
  },
  {
    name: "Solo Exposto",
    "2010": 450,
    "2025": 700,
  },
];

// DADOS CORRIGIDOS: Distribuição atual em porcentagem ou área absoluta
const cities = [
  {
    name: "Área Urbana",
    value: 55,
  },
  {
    name: "Vegetação",
    value: 30,
  },
  {
    name: "Solo Exposto",
    value: 15,
  },
];

const AnalysisGeo = () => {
  return (
    <section id="analysis" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Texto Explicativo */}
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Quantificação da Mudança</h2>
            <p className="text-slate-600 leading-relaxed">
              Através da classificação supervisionada de imagens de satélite, quantificamos a alteração da cobertura do solo. Os dados indicam uma supressão agressiva da vegetação nativa em favor da malha urbana.
            </p>
            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
              <strong className="block text-emerald-800 mb-2">Metodologia:</strong>
              <p className="text-sm text-emerald-700">
                Classificação Supervisionada (Algoritmo Random Forest) aplicada sobre imagens Sentinel-2, com acurácia Kappa de 0.89.
              </p>
            </div>
          </div>

          {/* Gráficos Tremor */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <TremorCard className="ring-1 ring-slate-200 shadow-lg p-6">
              <Title className="text-slate-700 font-bold mb-4">Evolução do Uso do Solo (Hectares)</Title>
              <BarChart
                className="mt-6 h-60"
                data={chartdata}
                index="name"
                categories={["2010", "2025"]}
                colors={["slate", "emerald"]}
                yAxisWidth={48}
              />
            </TremorCard>
            
            <TremorCard className="ring-1 ring-slate-200 shadow-lg p-6">
              <Title className="text-slate-700 font-bold mb-4">Distribuição Atual (2025)</Title>
              <DonutChart
                className="mt-6 h-60"
                data={cities}
                category="value"
                index="name"
                colors={["emerald", "slate", "amber"]}
                variant="pie"
              />
            </TremorCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnalysisGeo;