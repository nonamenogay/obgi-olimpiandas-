import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Estado inicial: invisível e deslocado para baixo
      whileInView={{ opacity: 1, y: 0 }} // Ao entrar na tela: visível e na posição original
      transition={{ duration: 0.5, delay: delay, type: "spring", stiffness: 100 }}
      viewport={{ once: true, margin: "-50px" }} // Anima apenas uma vez
      whileHover={{ 
        y: -8, 
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" 
      }}
      className={`bg-white rounded-xl border border-slate-100 p-6 shadow-md overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;