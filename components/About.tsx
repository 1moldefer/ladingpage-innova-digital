import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-[#0d1b2a] border-t border-white/10" id="sobre">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-xs">Nossa História</span>
            <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight">
              De médicos para o mundo: tecnologia que salva vidas
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              A <span className="text-blue-400 font-bold">Innova Digital</span> não é apenas uma empresa de tecnologia. Somos uma <strong>HealthTech</strong> fundada pelo <strong>Dr. Wander Mattos Cardoso</strong>, cirurgião torácico com vasta experiência no cuidado de pacientes complexos.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Nossa história começa dentro do <strong>Projeto Respirar Alagoas</strong>, um programa pioneiro do SUS. Ao vivenciar os desafios diários de famílias e profissionais na gestão de vias aéreas pediátricas, percebemos que a falta de informação e ferramentas adequadas gerava riscos evitáveis.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Decidimos então criar nossas próprias soluções. Não desenvolvemos sistemas para terceiros — criamos produtos digitais, como o <strong>VAP App</strong>, que democratizam o acesso ao conhecimento médico de ponta, promovendo segurança e autonomia para quem mais precisa.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Missão, Visão e Valores</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="size-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Missão</h4>
                  <p className="text-sm text-slate-300">Desenvolver soluções digitais que transformem o cuidado em saúde, tornando-o mais seguro, acessível e eficiente.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Visão</h4>
                  <p className="text-sm text-slate-300">Ser referência nacional em tecnologia aplicada à saúde, reconhecida pela excelência, inovação e impacto positivo na vida das pessoas.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Valores</h4>
                  <p className="text-sm text-slate-300">Inovação responsável, ética profissional, segurança da informação, acessibilidade e cuidado genuíno com as pessoas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
