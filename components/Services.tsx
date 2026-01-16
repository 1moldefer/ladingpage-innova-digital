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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconElement: null,
      title: 'Cuidado Humanizado',
      description: 'Nossas soluções nascem para acolher famílias. Desenvolvemos tecnologias que simplificam jornadas de cuidado complexo, trazendo segurança e apoio para o lar.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      iconElement: null,
      title: 'Educação como Saúde',
      description: 'Acreditamos que informação salva vidas. Traduzimos protocolos clínicos em linguagem acessível, empoderando cuidadores com o conhecimento necessário para agir.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      iconElement: null,
      title: 'Impacto Social & SUS',
      description: 'Nascemos da vivência no SUS. Criamos tecnologias acessíveis e escaláveis, comprometidas em reduzir desigualdades e democratizar o suporte digital em saúde no Brasil.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      iconElement: null,
      title: 'Evidência e Segurança',
      description: 'Nossa inovação é guiada pela ética médica. Cada funcionalidade é validada por evidências científicas, priorizando a segurança do paciente acima da tecnologia.'
    },
  ];

  return (
    <section className="py-20 bg-[#0d1b2a] border-t border-white/10" id="atuacao">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-2 block">PROPÓSITO INSTITUCIONAL</span>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-6">Inovação fundamentada em ciência e cuidado</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            A <span className="text-blue-400 font-bold">Innova Digital</span> é uma HealthTech brasileira de produtos próprios.
            Dedicamos nossa expertise para criar soluções digitais que nascem da prática clínica para transformar vidas.
          </p>
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
