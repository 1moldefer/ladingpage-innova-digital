
import React from 'react';

const Differentials: React.FC = () => {
  const items = [
    "Responsabilidade e Prazos",
    "Impacto Social Positivo",
    "Personalização Extrema",
    "Ética e Transparência"
  ];

  return (
    <section className="py-20 bg-white dark:bg-background-dark" id="diferenciais">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-[#0d141b] dark:text-slate-50 text-3xl md:text-4xl font-extrabold mb-6">Nossos diferenciais competitivos</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">Nossa abordagem é pautada por quatro pilares fundamentais que garantem o sucesso de cada implementação tecnológica.</p>
            <div className="grid grid-cols-1 gap-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-background-light dark:bg-slate-800/50 rounded-lg">
                  <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                  <span className="font-bold dark:text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 h-full min-h-[400px] bg-primary/10 rounded-3xl relative overflow-hidden flex items-center justify-center border border-primary/20">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #0f66bd 0, #0f66bd 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10 text-center px-12">
              <span className="material-symbols-outlined text-primary text-[120px] mb-4 opacity-50">biotech</span>
              <p className="text-primary font-bold italic text-xl">"A saúde merece o melhor que a tecnologia pode oferecer."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
