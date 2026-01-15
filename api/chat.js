export default async function handler(req, res) {
    // Apenas POST é permitido
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    // CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const { messages } = req.body;

        const apiKey = process.env.OPENAI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ error: 'API key não configurada' });
        }

        const SYSTEM_PROMPT = `
Você é o Consultor Virtual da Innova Digital.

Responda APENAS sobre:
- Innova Digital (empresa de tecnologia em saúde)
- VAP App (SERÁ lançado em 19/02/2026, gratuito, Android/iOS)

IMPORTANTE: O VAP App AINDA NÃO foi lançado. O lançamento oficial SERÁ no dia 19 de fevereiro de 2026.
Use sempre o FUTURO: "vai ser lançado", "estará disponível", "será gratuito".

Funcionalidades que o VAP TERÁ: Comunidade segura, Calculadora de cânula, Mercado especializado, Quiz educativo, Ebooks/aulas, Diário de eventos, Assistente IA.

Contatos:
WhatsApp: +55 82 98743-5604
Email: contato@innovadigital.com.br
Instagram: @innovadigital.app

NÃO responda sobre: medicina, diagnósticos, tratamentos. Oriente ao profissional de saúde.

Seja breve (máximo 100 palavras), profissional e acolhedor.
`;

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    ...messages
                ],
                max_tokens: 200,
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('OpenAI API Error:', error);
            return res.status(response.status).json({ error: 'Erro ao processar a solicitação' });
        }

        const data = await response.json();
        const assistantMessage = data.choices[0]?.message?.content || 'Desculpe, não consegui processar sua mensagem.';

        return res.status(200).json({ message: assistantMessage });
    } catch (error) {
        console.error('Erro no servidor:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}
