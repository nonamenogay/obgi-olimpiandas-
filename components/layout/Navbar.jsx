import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo do Projeto */}
          <div className="shrink-0 font-bold text-xl text-blue-400">
            GeoOlimpíada
          </div>

          {/* Links de Navegação */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#hero" className="hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Início
              </a>
              <a href="#problem" className="hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                O Problema
              </a>
              <a href="#map" className="hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Mapa QGIS
              </a>
              <a href="#solution" className="hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Solução
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;