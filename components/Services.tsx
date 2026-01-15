import React from 'react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group">
    <div className="size-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-3 text-white">{title}</h3>
    <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services: (ServiceCardProps & { iconElement: React.ReactNode })[] = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      iconElement: null,
      title: 'Aplicativos para Saúde',
      description: 'Desenvolvimento de apps móveis focados em apoiar o cuidado, a educação e a gestão em saúde.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      iconElement: null,
      title: 'Plataformas Digitais',
      description: 'Sistemas web robustos para gestão hospitalar, clínicas e organizações de saúde.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      iconElement: null,
      title: 'Soluções Personalizadas',
      description: 'Projetos sob medida para atender às necessidades específicas do seu fluxo de trabalho.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      iconElement: null,
      title: 'Segurança e Conformidade',
      description: 'Tecnologia desenvolvida com foco em LGPD, proteção de dados e diretrizes de saúde.'
    },
  ];

  return (
    <section className="py-20 bg-[#0d1b2a] border-t border-white/10" id="solucoes">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-2 block">O Que Fazemos</span>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4">Soluções digitais para o ecossistema de saúde</h2>
          <p className="text-slate-300 text-lg">Desenvolvemos tecnologia aplicada ao cuidado, gestão e educação em saúde, sempre com responsabilidade e inovação.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} icon={s.icon} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
