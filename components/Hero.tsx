import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#0d1b2a] text-white overflow-hidden flex items-center">

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Gradient Overlays - Top to Bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-[#0d1b2a]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-transparent"></div>

      {/* Floating Orbs - Animated */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] animate-float-delayed"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-[80px] animate-pulse"></div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-blue-500/20 rotate-45 animate-spin-slow opacity-30"></div>
      <div className="absolute bottom-32 left-32 w-24 h-24 border border-cyan-500/20 rounded-full animate-pulse opacity-20"></div>

      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 py-20 text-center">



        {/* Logo */}
        <div className="mb-8 inline-block">
          <img
            src="/logo.png"
            alt="Innova Digital Logo"
            className="h-24 w-auto object-contain mx-auto rounded-xl border border-white/10 shadow-lg"
          />
        </div>

        {/* Main Title with Gradient */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight">
          <span className="block mb-2 animate-fade-in">INNOVA DIGITAL</span>
          <span className="block text-slate-400 text-lg md:text-xl font-normal tracking-wider uppercase animate-fade-in-delayed">
            Tecnologia a Serviço da Saúde
          </span>
        </h1>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
          <div className="size-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
        </div>

        {/* Tags */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-500/20">
          <span className="size-2 bg-blue-400 rounded-full animate-pulse"></span>
          <span className="text-blue-300 text-sm font-semibold">Tecnologia • Inovação • Saúde</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-[900px] mx-auto">
          Inovação digital que transforma o{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            cuidado em saúde
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-[600px] mx-auto">
          Desenvolvemos soluções digitais seguras e inovadoras para apoiar profissionais, instituições de saúde e cuidadores.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#vap-app"
            className="group flex items-center justify-center rounded-xl h-14 px-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-base font-bold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25 gap-3"
          >
            Conheça o VAP App
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contato"
            className="flex items-center justify-center rounded-xl h-14 px-8 bg-white/5 backdrop-blur-sm text-white border border-white/10 text-base font-bold hover:bg-white/10 hover:border-white/20 transition-all gap-3"
          >
            Fale Conosco
          </a>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(20px) translateX(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delayed {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 18s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
};

export default Hero;
