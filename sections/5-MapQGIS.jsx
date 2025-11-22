import React from 'react';
import { Layers, Maximize2 } from 'lucide-react';

const MapQGIS = () => {
  return (
    <section id="map" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <Layers className="text-emerald-600" />
              Carta de Suscetibilidade
            </h2>
            <p className="text-slate-600 mt-2 max-w-xl">
              Produto cartográfico final gerado no QGIS 3.28 'Firenze'. As áreas em vermelho indicam risco geotécnico crítico, cruzando declividade, pedologia e uso do solo.
            </p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-xs text-slate-500">
            Sistema de Referência: <strong>SIRGAS 2000 / UTM 23S</strong>
          </div>
        </div>

        <div className="relative bg-white p-2 rounded-xl shadow-lg border border-slate-200">
          <div className="aspect-video w-full bg-slate-200 rounded-lg overflow-hidden relative group">
            {/* Imagem do Mapa */}
            <img 
              src="/assets/images/map-qgis.png" 
              alt="Mapa de Suscetibilidade a Deslizamentos" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            
            {/* Overlay Interativo ao passar o mouse */}
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center">
              <button 
                className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-slate-900 px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2"
                onClick={() => window.open('/assets/images/map-qgis.png', '_blank')}
              >
                <Maximize2 size={18} />
                Visualizar em Alta Resolução
              </button>
            </div>
          </div>

          {/* Legenda Simplificada */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600 rounded"></div>
              <span className="text-sm text-slate-600">Risco Muito Alto</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span className="text-sm text-slate-600">Risco Alto</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-400 rounded"></div>
              <span className="text-sm text-slate-600">Risco Médio</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm text-slate-600">Risco Baixo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapQGIS;