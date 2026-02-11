import React from 'react';
import LaunchCountdown from './LaunchCountdown';

const VapApp: React.FC = () => {
    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
            ),
            title: 'Comunidade Segura',
            description: 'Um espaço protegido para troca de experiências entre pais, cuidadores e profissionais, com foco em apoio, acolhimento e informação responsável.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Calculadora de Cânula',
            description: 'Ferramenta inteligente que auxilia no cálculo do tamanho adequado da cânula, baseada em critérios clínicos, reduzindo erros e aumentando a segurança.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            ),
            title: 'Mercado Especializado',
            description: 'Ambiente exclusivo para aquisição de produtos essenciais para traqueostomia, com praticidade e foco nas reais necessidades do dia a dia.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: 'Quiz Educativo',
            description: 'Aprenda de forma simples e interativa. Teste seus conhecimentos sobre cuidados, prevenção de riscos e boas práticas no manejo da traqueostomia.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: 'Ebooks e Aulas',
            description: 'Conteúdos educativos com linguagem acessível, baseados em diretrizes de saúde, para capacitar quem cuida e promover autonomia com segurança.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Diário de Eventos',
            description: 'Registre aspirações, trocas de cânula, intercorrências, consultas e evoluções clínicas. Organização que gera mais controle e tranquilidade.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Assistente de IA',
            description: 'Assistente inteligente focado em orientação educativa, capaz de responder dúvidas, reforçar cuidados e apoiar decisões — sempre com responsabilidade.'
        }
    ];

    return (
        <section className="py-20 bg-[#0d1b2a] border-t border-white/10" id="vap-app">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-6">
                        <span className="size-2 bg-yellow-400 rounded-full animate-pulse"></span>
                        <span className="text-yellow-400 text-sm font-bold">Em breve disponível</span>
                    </div>
                    <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-4">VAP App — Via Aérea Pediátrica</h2>
                    <p className="text-blue-300 text-xl md:text-2xl font-semibold max-w-[800px] mx-auto mb-8">
                        Cuidado, informação e tecnologia para quem cuida de crianças traqueostomizadas
                    </p>

                    {/* Countdown Timer */}
                    <div className="max-w-[600px] mx-auto">
                        <LaunchCountdown />
                    </div>
                </div>

                {/* Main Content - Two Columns */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

                    {/* Left - Screenshot */}
                    <div className="flex justify-center lg:justify-start lg:sticky lg:top-24 order-2 lg:order-1">
                        <div className="relative z-10">
                            <div className="w-[280px] md:w-[320px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800">
                                <div className="rounded-[2.5rem] overflow-hidden">
                                    <img
                                        src="/vap-app-screen.png"
                                        alt="Tela do VAP App"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl -z-10"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl -z-10"></div>
                        </div>
                    </div>

                    {/* Right - Description & Features */}
                    <div className="flex flex-col gap-8 order-1 lg:order-2">
                        <div className="space-y-4">
                            <p className="text-white text-lg leading-relaxed">
                                O VAP App é uma solução digital criada para <span className="text-blue-400 font-bold">apoiar, orientar e dar segurança</span> a pais e cuidadores que convivem diariamente com a traqueostomia pediátrica.
                            </p>
                            <p className="text-slate-300 text-base leading-relaxed">
                                Desenvolvido pela <span className="text-blue-400 font-semibold">Innova Digital</span>, o VAP App une tecnologia, educação e cuidado humanizado em um único aplicativo, com conteúdos confiáveis, ferramentas práticas e uma comunidade segura.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div>
                            <h3 className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="text-blue-400">💙</span>
                                Tudo o que você precisa, em um só lugar
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {features.map((feature, i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-all relative z-20">
                                        <div className="size-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 text-blue-400">
                                            {feature.icon}
                                        </div>
                                        <h4 className="text-white font-bold text-sm mb-2">{feature.title}</h4>
                                        <p className="text-slate-400 text-xs leading-relaxed">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 md:p-12 text-center">
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                        🌱 Mais do que um app. Uma rede de cuidado.
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-[700px] mx-auto mb-6">
                        O VAP App nasce com um propósito claro: transformar <span className="text-blue-400 font-semibold">informação em cuidado</span>, <span className="text-blue-400 font-semibold">tecnologia em apoio</span> e <span className="text-blue-400 font-semibold">conhecimento em segurança</span>.
                    </p>
                    <p className="text-slate-400 text-base mb-8">
                        Tudo isso com uma linguagem acessível, design amigável e foco em quem realmente importa: a criança e quem cuida dela.
                    </p>
                    <a
                        href="/inscricao/"
                        className="inline-flex items-center justify-center rounded-lg h-14 px-10 bg-yellow-400 text-[#0d1b2a] text-base font-bold hover:bg-yellow-300 transition-colors shadow-xl gap-3"
                    >
                        👉 Acompanhe o Lançamento
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <p className="text-slate-500 text-xs mt-6">
                        O primeiro aplicativo da Innova Digital, marcando o início de uma nova geração de soluções digitais voltadas para a saúde.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VapApp;
