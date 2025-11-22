import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const AnalysisTime = () => {
  return (
    <section id="temporal" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Análise Temporal <span className="text-emerald-400">2010–2025</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Arraste o controle central para visualizar a transformação da paisagem. Note o avanço das estruturas impermeáveis (tons de cinza/branco) sobre as áreas verdes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Container do Slider com Aspect Ratio e Bordas Premium */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl ring-4 ring-slate-900/50">
            
            {/* Badge de Instrução */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest pointer-events-none text-white">
              Interativo
            </div>

            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src="/assets/images/satellite-2010.jpg" alt="Imagem de satélite de 2010" />}
              itemTwo={<ReactCompareSliderImage src="/assets/images/satellite-2025.jpg" alt="Imagem de satélite de 2025" />}
              style={{ width: '100%', height: '100%' }}
              // Customização da alça (Handle) para ficar mais profissional
              handle={({ className, style,...props }) => (
                <div
                  className={`${className} w-1 bg-emerald-500 h-full relative cursor-ew-resize`}
                  style={style}
                  {...props}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-emerald-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="flex gap-1">
                       <div className="w-0.5 h-4 bg-white/50"></div>
                       <div className="w-0.5 h-4 bg-white/50"></div>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
          
          <div className="flex justify-between mt-6 text-sm font-mono text-slate-500">
            <span>FONTE: LANDSAT 5 TM (2010)</span>
            <span>FONTE: SENTINEL-2 MSI (2025)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisTime;