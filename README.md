# Marcos Wilson — Portfolio

Portfólio profissional bilíngue construído com Next.js, TypeScript e Tailwind CSS. O projeto apresenta experiência, competências, cases e uma seleção atualizada de repositórios públicos do GitHub.

## Requisitos

- Node.js 22+
- pnpm 10+

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000). A raiz redireciona para `/pt`; a versão em inglês fica em `/en`.

## Comandos

```bash
pnpm dev         # servidor local
pnpm lint        # análise estática
pnpm type-check  # validação TypeScript
pnpm build       # build de produção
pnpm start       # executa o build
```

## Configuração

Copie `.env.example` para `.env.local` caso queira autenticar as consultas à API do GitHub:

```env
GITHUB_TOKEN=github_pat_...
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

O token é opcional e usado somente no servidor. Sem ele, o portfólio usa a cota pública da API e mantém um fallback local caso o GitHub esteja indisponível.

O conteúdo em português e inglês está centralizado em `src/lib/content.ts`.

## Deploy

Importe o repositório na Vercel, configure `NEXT_PUBLIC_SITE_URL` com o domínio final e, opcionalmente, `GITHUB_TOKEN`. Não é necessário banco de dados ou outro serviço externo.
