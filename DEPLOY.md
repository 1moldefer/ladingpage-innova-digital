# 🚀 Guia de Deploy - Innova Digital Landing Page

## 📋 Pré-requisitos

- Conta no GitHub
- Conta na Vercel (https://vercel.com)
- Chave API da OpenAI

---

## 🔧 Passo 1: Preparar o Repositório

### 1.1 Criar arquivo .gitignore (se não existir)

Certifique-se de que o `.gitignore` contém:

```
node_modules
dist
.env
.env.local
.DS_Store
```

**IMPORTANTE:** Isso garante que a chave API NUNCA vai para o GitHub!

### 1.2 Inicializar Git (se ainda não fez)

```bash
git init
git add .
git commit -m "Initial commit - Innova Digital Landing Page"
```

### 1.3 Criar repositório no GitHub

1. Acesse https://github.com/new
2. Crie um repositório (ex: `innova-digital-landing`)
3. **NÃO adicione README, .gitignore ou licença**

### 1.4 Conectar ao GitHub

```bash
git remote add origin https://github.com/SEU-USUARIO/innova-digital-landing.git
git branch -M main
git push -u origin main
```

---

## 🌐 Passo 2: Deploy na Vercel

### 2.1 Importar Projeto

1. Acesse https://vercel.com
2. Faça login (pode usar GitHub)
3. Clique em **"Add New Project"**
4. Selecione **"Import Git Repository"**
5. Escolha seu repositório `innova-digital-landing`

### 2.2 Configurar Projeto

- **Framework Preset:** Vite
- **Root Directory:** `./`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### 2.3 Adicionar Variável de Ambiente

**MUITO IMPORTANTE:**

1. Antes de fazer deploy, clique em **"Environment Variables"**
2. Adicione:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** `sk-proj-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` (Sua chave real aqui)
   - **Environment:** Production, Preview, Development (marque todas)

3. Clique em **"Deploy"**

### 2.4 Aguardar Deploy

- A Vercel vai:
  1. Instalar dependências
  2. Fazer build do projeto
  3. Criar as serverless functions
  4. Publicar seu site

- Em ~2 minutos seu site estará no ar!

---

## ✅ Passo 3: Testar em Produção

1. Acesse a URL fornecida pela Vercel (ex: `innova-digital.vercel.app`)
2. Teste o chatbot
3. Verifique se está funcionando

---

## 🔒 Segurança em Produção

### Como funciona:

```
Usuário → Frontend (Vercel) → Serverless Function (/api/chat) → OpenAI API
                                       ↑
                               API Key fica aqui
                        (nas variáveis de ambiente da Vercel)
```

### Vantagens:

✅ **API Key 100% Segura** - Nunca é exposta ao navegador
✅ **Serverless** - Escala automaticamente
✅ **Gratuito** - Vercel tem plano gratuito
✅ **SSL/HTTPS** - Certificado automático
✅ **Deploy Automático** - Cada push no GitHub faz novo deploy

---

## 🔄 Atualizações Futuras

Sempre que você fizer mudanças:

```bash
git add .
git commit -m "Descrição da mudança"
git push
```

A Vercel vai automaticamente fazer o deploy da nova versão!

---

## 📊 URLs Importantes

- **Site em Produção:** `https://SEU-PROJETO.vercel.app`
- **Dashboard Vercel:** `https://vercel.com/dashboard`
- **Logs:** Acesse o dashboard da Vercel → Seu projeto → "Deployments"

---

## 🆘 Troubleshooting

### Chatbot não funciona em produção?

1. Verifique se a variável `OPENAI_API_KEY` está configurada
2. Veja os logs no dashboard da Vercel
3. Teste a função diretamente: `https://SEU-SITE.vercel.app/api/chat`

### Build falhou?

1. Verifique se o `package.json` está correto
2. Certifique-se que todas as dependências estão instaladas
3. Rode `npm run build` localmente primeiro

---

## 📝 Checklist Final

- [ ] `.env.local` está no `.gitignore`
- [ ] Código está no GitHub
- [ ] Projeto importado na Vercel
- [ ] Variável `OPENAI_API_KEY` configurada
- [ ] Deploy concluído com sucesso
- [ ] Chatbot testado e funcionando
- [ ] Site compartilhado com o time

---

**🎉 Parabéns! Sua landing page está no ar com segurança total!**
