// Sistema de FAQ sem API - Baseado em palavras-chave

interface FAQResponse {
    keywords: string[];
    response: string;
}

// Função para obter saudação baseada no horário
const getGreeting = (): string => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Bom dia';
    if (hour >= 12 && hour < 18) return 'Boa tarde';
    return 'Boa noite';
};

const faqDatabase: FAQResponse[] = [
    // Sobre a Innova Digital
    {
        keywords: ['innova', 'empresa', 'quem', 'vocês', 'somos', 'sobre'],
        response: 'A Innova Digital é uma empresa de tecnologia voltada para soluções digitais na área da saúde. Desenvolvemos aplicativos, plataformas e soluções personalizadas com foco em acessibilidade, segurança e responsabilidade.'
    },
    {
        keywords: ['missão', 'objetivo', 'propósito'],
        response: 'Nossa missão é usar a tecnologia para apoiar o cuidado, a educação e a gestão em saúde, sempre com responsabilidade ética e respeito às diretrizes médicas.'
    },

    // VAP App
    {
        keywords: ['vap', 'app', 'aplicativo', 'via aérea'],
        response: 'O VAP App (Via Aérea Pediátrica) é nosso primeiro aplicativo, criado para apoiar pais, cuidadores e profissionais que lidam com traqueostomia pediátrica. Lançamento oficial: 19/02/2026.'
    },
    {
        keywords: ['lançamento', 'quando', 'data', 'disponível'],
        response: 'O VAP App será lançado oficialmente em 19/02/2026 e estará disponível gratuitamente para Android e iOS.'
    },
    {
        keywords: ['funcionalidades', 'recursos', 'funções', 'o que faz'],
        response: 'O VAP App possui: ✅ Comunidade segura ✅ Calculadora de cânula ✅ Mercado especializado ✅ Quiz educativo ✅ Ebooks e aulas ✅ Diário de eventos ✅ Assistente de IA educativo'
    },
    {
        keywords: ['preço', 'pago', 'custo', 'valor', 'quanto', 'gratuito', 'grátis'],
        response: 'O VAP App é 100% gratuito! Não há cobrança para download ou uso de nenhuma funcionalidade.'
    },
    {
        keywords: ['download', 'baixar', 'instalar', 'onde'],
        response: 'O VAP App estará disponível nas lojas oficiais: Google Play (Android) e App Store (iOS) a partir de 19/02/2026.'
    },

    // Contato
    {
        keywords: ['contato', 'falar', 'conversar', 'suporte', 'ajuda', 'atendimento'],
        response: 'Você pode entrar em contato conosco por:\n📱 WhatsApp: +55 82 98743-5604\n📧 E-mail: contato@innovadigital.com.br\n📷 Instagram: @innovadigital.app\n📝 Formulário no site'
    },
    {
        keywords: ['whatsapp', 'telefone', 'número'],
        response: 'Nosso WhatsApp: +55 82 98743-5604'
    },
    {
        keywords: ['email', 'e-mail'],
        response: 'Nosso e-mail oficial: contato@innovadigital.com.br'
    },
    {
        keywords: ['instagram', 'redes sociais', 'social'],
        response: 'Siga-nos no Instagram: @innovadigital.app'
    },

    // Questões médicas - Redirecionar
    {
        keywords: ['médico', 'doutor', 'tratamento', 'diagnóstico', 'sintoma', 'doença', 'urgência', 'emergência', 'dor', 'febre'],
        response: 'Para questões médicas, diagnósticos ou orientações clínicas, recomendamos que você consulte um profissional de saúde. Nosso chatbot fornece apenas informações institucionais sobre a Innova Digital e o VAP App.'
    },

    // Saudações - Serão tratadas de forma especial
    {
        keywords: ['obrigado', 'obrigada', 'valeu', 'agradeço'],
        response: 'Por nada! Se tiver mais dúvidas, estou à disposição. Para mais informações, entre em contato pelos nossos canais oficiais! 😊'
    },
    {
        keywords: ['tchau', 'até logo', 'bye', 'adeus'],
        response: 'Até logo! Se precisar de algo, estamos à disposição. Visite nosso site ou redes sociais! 👋'
    }
];

export const getLocalResponse = (userMessage: string): string => {
    const normalizedMessage = userMessage.toLowerCase().trim();

    // Detectar saudações com horário
    const greetingPatterns = ['oi', 'olá', 'ola', 'bom dia', 'boa tarde', 'boa noite', 'hey', 'fala'];
    const isGreeting = greetingPatterns.some(pattern =>
        normalizedMessage.includes(pattern) || normalizedMessage === pattern
    );

    if (isGreeting) {
        const greeting = getGreeting();
        return `${greeting}! Sou o assistente virtual da Innova Digital. Posso responder perguntas sobre nossa empresa e o VAP App. Como posso ajudar?`;
    }

    // Procurar pela melhor correspondência
    for (const faq of faqDatabase) {
        const hasMatch = faq.keywords.some(keyword =>
            normalizedMessage.includes(keyword.toLowerCase())
        );

        if (hasMatch) {
            return faq.response;
        }
    }

    // Resposta padrão se não encontrar correspondência
    return 'Desculpe, não entendi sua pergunta. Posso ajudar com informações sobre:\n\n✅ A Innova Digital\n✅ O VAP App\n✅ Contatos e suporte\n\nOu entre em contato diretamente:\n📱 WhatsApp: +55 82 98743-5604\n📧 contato@innovadigital.com.br';
};
