import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 bg-[#0d1b2a] border-t border-white/10" id="contato">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center max-w-[600px] mx-auto mb-12">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-2 block">Vamos Conversar</span>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4">
            Pronto para inovar na saúde?
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Entre em contato com nossa equipe. Estamos prontos para entender suas necessidades e apresentar as melhores soluções tecnológicas para o seu projeto.
          </p>
        </div>

        {/* Form - Centered */}
        <div className="max-w-[600px] mx-auto">
          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-6 text-white">Envie sua mensagem</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <p className="text-green-300 text-sm font-semibold">✓ Mensagem enviada com sucesso! Em breve entraremos em contato.</p>
              </div>
            )}

            {/* Form using AJAX */}
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);

                // Add hidden fields manually if needed or let them be part of formData
                // FormSubmit ajax setup
                try {
                  const response = await fetch("https://formsubmit.co/ajax/contato@innovadigital.com.br", {
                    method: "POST",
                    body: formData,
                    headers: {
                      'Accept': 'application/json'
                    }
                  });

                  if (response.ok) {
                    setSubmitted(true);
                    form.reset();
                    // Hide success message after 5 seconds if desired, currently it stays.
                  } else {
                    alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.");
                  }
                } catch (error) {
                  alert("Erro de conexão. Verifique sua internet e tente novamente.");
                }
              }}
              className="space-y-5"
            >
              {/* Hidden fields for FormSubmit configuration */}
              <input type="hidden" name="_subject" value="Nova mensagem do site Innova Digital" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              {/* _next is not needed for AJAX */}

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Nome</label>
                <input
                  type="text"
                  name="nome"
                  required
                  className="w-full h-12 px-4 rounded-lg border border-white/20 bg-white/5 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Empresa <span className="text-slate-500 font-normal">(opcional)</span></label>
                <input
                  type="text"
                  name="empresa"
                  className="w-full h-12 px-4 rounded-lg border border-white/20 bg-white/5 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Nome da empresa"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full h-12 px-4 rounded-lg border border-white/20 bg-white/5 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">WhatsApp</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    className="w-full h-12 px-4 rounded-lg border border-white/20 bg-white/5 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Assunto</label>
                <select
                  name="assunto"
                  className="w-full h-12 px-4 rounded-lg border border-white/20 bg-white/5 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all cursor-pointer"
                >
                  <option className="bg-[#0d1b2a]">Contato institucional</option>
                  <option className="bg-[#0d1b2a]">Parceria</option>
                  <option className="bg-[#0d1b2a]">Demonstração</option>
                  <option className="bg-[#0d1b2a]">Suporte</option>
                  <option className="bg-[#0d1b2a]">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Mensagem</label>
                <textarea
                  name="mensagem"
                  required
                  rows={4}
                  className="w-full p-4 rounded-lg border border-white/20 bg-white/5 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25 text-base"
              >
                Enviar mensagem
              </button>
              <p className="text-xs text-slate-500 text-center mt-4">
                Seus dados estão seguros. Ao enviar, você concorda com nossa <a href="#" className="underline hover:text-blue-400">Política de Privacidade</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
