import React from 'react';

const Responsibility: React.FC = () => {
    return (
        <section className="py-20 bg-[#0d1b2a] border-t border-white/10">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                <div className="max-w-[800px] mx-auto text-center">
                    <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-2 block">Nosso Compromisso</span>
                    <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-6">
                        Inovação com responsabilidade
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed mb-10">
                        Na Innova Digital, acreditamos que tecnologia e ética caminham juntas. Cada solução que desenvolvemos é pensada para respeitar as diretrizes médicas, proteger a privacidade dos usuários e promover o uso responsável da inovação no cuidado em saúde.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                        <div className="size-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Segurança da Informação</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">Proteção de dados em conformidade com a LGPD e as melhores práticas do mercado.</p>
                    </div>

                    <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                        <div className="size-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Base Científica</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">Conteúdos e funcionalidades fundamentados em evidências e diretrizes médicas.</p>
                    </div>

                    <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                        <div className="size-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Foco nas Pessoas</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">Tecnologia desenvolvida para apoiar — nunca substituir — o cuidado humano e profissional.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Responsibility;
