import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) return 'Bom dia!';
      if (hour >= 12 && hour < 18) return 'Boa tarde!';
      return 'Boa noite!';
    };

    setMessages([
      { role: 'model', text: `${getGreeting()} Sou o assistente virtual da Innova Digital. Posso responder perguntas sobre nossa empresa e o VAP App. Como posso ajudar?` }
    ]);
  }, []);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // API endpoint - funciona tanto em dev quanto em produção
      const apiUrl = import.meta.env.MODE === 'production'
        ? '/api/chat'  // Produção (Vercel)
        : 'http://localhost:3001/api/chat'; // Desenvolvimento (Express local)

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages.map(msg => ({
            role: msg.role === 'model' ? 'assistant' : 'user',
            content: msg.text
          })).concat([
            { role: 'user', content: inputValue }
          ])
        }),
      });

      if (!response.ok) {
        throw new Error('Erro na resposta do servidor');
      }

      const data = await response.json();
      const aiResponse = data.message || 'Desculpe, tive um problema ao processar sua mensagem.';

      setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setMessages(prev => [...prev, {
        role: 'model',
        text: 'Desculpe, ocorreu um erro. Entre em contato:\n📱 WhatsApp: +55 82 98743-5604\n📧 contato@innovadigital.com.br'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 border border-slate-200">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-sm">Consultor Innova Digital</span>
                <p className="text-xs text-white/80">Respostas institucionais</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${msg.role === 'user'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none'
                  : 'bg-white text-slate-700 shadow-sm rounded-bl-none border border-slate-100'
                  }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl text-slate-400 shadow-sm border border-slate-100 flex items-center gap-2">
                  <div className="size-2 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="size-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="size-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pergunte sobre a Innova Digital..."
                className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl px-4 py-2 hover:from-blue-600 hover:to-blue-700 transition-colors disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="size-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 hover:scale-105 transition-all duration-300 active:scale-95 group relative"
      >
        {!isOpen && (
          <div className="absolute -top-12 right-0 bg-white text-slate-800 px-4 py-2 rounded-lg text-xs font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-slate-100">
            Dúvidas? Fale conosco
            <div className="absolute bottom-[-6px] right-6 size-3 bg-white rotate-45 border-r border-b border-slate-100"></div>
          </div>
        )}
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          )}
        </svg>
      </button>
    </div>
  );
};

export default AIConsultant;
