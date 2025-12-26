# Deploy no GitHub Pages

Este guia mostra como fazer deploy do DoaBR no GitHub Pages.

## Configuração Inicial

### 1. Configurar GitHub Pages no Repositório

1. Vá até o repositório no GitHub: https://github.com/DoaBR/doabr_frontend
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione **GitHub Actions**

### 2. Ajustar basePath (se necessário)

Se o seu repositório **NÃO** for `DoaBR.github.io`, você precisa descomentar a linha do `basePath` no arquivo [next.config.ts](next.config.ts):

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/doabr_frontend',  // <- Descomente esta linha
};
```

**Quando usar basePath:**
- ✅ Use se o repo for: `https://github.com/DoaBR/doabr_frontend`
  - Site ficará: `https://doabr.github.io/doabr_frontend`
- ❌ NÃO use se o repo for: `https://github.com/DoaBR/DoaBR.github.io`
  - Site ficará: `https://doabr.github.io`

### 3. Fazer Push para o GitHub

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

O GitHub Actions vai automaticamente:
1. Fazer build do projeto
2. Gerar os arquivos estáticos na pasta `out/`
3. Fazer deploy no GitHub Pages

### 4. Acessar o Site

Após o deploy (leva ~2-5 minutos), seu site estará disponível em:

**Com basePath:**
- https://doabr.github.io/doabr_frontend

**Sem basePath (se repo for DoaBR.github.io):**
- https://doabr.github.io

## Verificar Status do Deploy

1. Vá até o repositório no GitHub
2. Clique na aba **Actions**
3. Veja o status do workflow "Deploy to GitHub Pages"
4. Se houver erro, clique no workflow para ver os logs

## Limitações do Static Export

Como estamos usando `output: 'export'`, algumas features do Next.js não funcionam:

- ❌ API Routes (use API externa)
- ❌ Server Components dinâmicos
- ❌ Incremental Static Regeneration (ISR)
- ❌ Image Optimization (configurado como `unoptimized: true`)
- ✅ Client Components funcionam normalmente
- ✅ Static Site Generation (SSG) funciona
- ✅ Todas as páginas atuais do DoaBR funcionam perfeitamente

## Deploy Local para Testar

Para testar o build estático localmente:

```bash
# Build
npm run build

# Os arquivos estáticos estarão em ./out/

# Para servir localmente (opcional)
npx serve out
```

## Domínio Customizado (Opcional)

Se você quiser usar um domínio próprio como `doabr.com.br`:

1. No GitHub, vá em **Settings > Pages**
2. Em **Custom domain**, adicione `doabr.com.br`
3. Configure os DNS do seu domínio:
   - Tipo A apontando para os IPs do GitHub:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Ou tipo CNAME para `doabr.github.io`

## Troubleshooting

### Erro 404 ao acessar rotas

Se as rotas não funcionarem, verifique se:
1. O `basePath` está configurado corretamente
2. O arquivo `.nojekyll` existe em `public/`

### Build falha no GitHub Actions

Verifique:
1. Todos os arquivos foram commitados
2. O `package.json` tem todas as dependências
3. Não há erros de TypeScript no código

### Imagens não aparecem

Verifique:
1. `images.unoptimized: true` está no `next.config.ts`
2. Imagens estão na pasta `public/`
