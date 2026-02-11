# 🏥 Innova Digital - Landing Page

Página institucional da Innova Digital com chatbot inteligente para atendimento automatizado.

## 🚀 Tecnologias

- **Frontend:** React + TypeScript + Vite
- **Estilização:** Tailwind CSS
- **Backend:** Express.js (dev) / Vercel Functions (prod)
- **IA:** OpenAI GPT-3.5-turbo
- **Deploy:** Vercel

## 💻 Desenvolvimento Local

### Pré-requisitos

- Node.js 18+
- NPM ou Yarn
- Chave API da OpenAI

### Instalação

```bash
# Clonar repositório
git clone https://github.com/SEU-USUARIO/innova-digital-landing.git
cd innova-digital-landing

# Instalar dependências
npm install

# Criar arquivo .env.local
echo "OPENAI_API_KEY=sua-chave-aqui" > .env.local
```

### Rodar Projeto

**Opção 1: Frontend + Backend separados (2 terminais)**

```bash
# Terminal 1 - Backend
npm run backend

# Terminal 2 - Frontend
npm run dev
```

**Opção 2: Tudo junto (1 terminal)**

```bash
npm start
```

Acesse: http://localhost:3000

## 📦 Build

```bash
npm run build
```

## 🌐 Deploy

Veja o guia completo: [DEPLOY.md](./DEPLOY.md)

**Resumo rápido:**

1. Faça push para o GitHub
2. Importe o projeto na Vercel
3. Adicione a variável `OPENAI_API_KEY`
4. Deploy automático!

## 🔒 Segurança

- ✅ API key **NUNCA** exposta no frontend
- ✅ Backend protegido com serverless functions
- ✅ CORS configurado
- ✅ `.env.local` no `.gitignore`

## 📱 Funcionalidades

- ✅ Navbar responsivo com menu mobile
- ✅ Seção Hero com animações
- ✅ Sobre a empresa
- ✅ Soluções/Serviços
- ✅ VAP App com countdown para lançamento (19/02/2026)
- ✅ Chatbot institucional com IA
- ✅ Formulário de contato (via FormSubmit)
- ✅ Footer completo
- ✅ 100% responsivo (mobile, tablet, desktop)

## 🤖 Chatbot

O chatbot responde APENAS sobre:
- Informações institucionais da Innova Digital
- VAP App (funcionalidades, lançamento, preço)
- Contatos da empresa

**NÃO responde:** Questões médicas, diagnósticos ou orientações clínicas.

## 📧 Contato

- **WhatsApp:** +55 82 98743-5604
- **E-mail:** contato@innovadigital.com.br
- **Instagram:** @innovadigital.app

## 📄 Licença

© 2026 Innova Digital LTDA. Todos os direitos reservados.
