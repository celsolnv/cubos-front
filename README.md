# Cubos Frontend - Sistema de Filmes

Frontend desenvolvido em React + TypeScript + Vite para gerenciamento de filmes e avaliações.

## 🚀 Pré-requisitos

- **Node.js**: Versão LTS mais recente (recomendado: 20.x ou superior)
- **npm** ou **yarn** ou **pnpm**

### Verificar versão do Node.js

```bash
node --version
# Deve ser 18.x ou superior (recomendado: 20.x LTS)
```

### Instalar Node.js LTS

Se você não tiver o Node.js instalado ou precisar atualizar:

**Via nvm (recomendado):**
```bash
nvm install --lts
nvm use --lts
```

**Via site oficial:**
- Acesse [nodejs.org](https://nodejs.org)
- Baixe a versão LTS (Long Term Support)

## 📦 Instalação

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd front
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

## 🏃‍♂️ Executando o projeto

### Desenvolvimento
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

O projeto estará disponível em: `http://localhost:5173`

### Build de produção
```bash
npm run build
# ou
yarn build
# ou
pnpm build
```

### Preview do build
```bash
npm run preview
# ou
yarn preview
# ou
pnpm preview
```

## 🛠️ Scripts disponíveis

- `dev` - Inicia o servidor de desenvolvimento
- `build` - Gera o build de produção
- `preview` - Visualiza o build de produção
- `lint` - Executa o linter
- `type-check` - Verifica os tipos TypeScript

## 🏗️ Tecnologias utilizadas

- **React 18** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Lucide React** - Ícones

## 📁 Estrutura do projeto

```
src/
├── app/           # Páginas da aplicação
├── components/    # Componentes reutilizáveis
├── contexts/      # Contextos React
├── hooks/         # Hooks customizados
├── types/         # Definições de tipos
├── utils/         # Utilitários e máscaras
└── styles/        # Estilos globais
```

## 🔧 Configuração

### Variáveis de ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_API_URL=sua_url_da_api
```

### Configurações do Vite
As configurações estão em `vite.config.ts` e incluem:
- Alias de imports (`@/` para `src/`)
- Plugin React
- Configurações de build

## 🚨 Solução de problemas

### Erro de versão do Node.js
Se você receber erros relacionados à versão do Node.js:

```bash
# Verifique a versão atual
node --version

# Instale/use a versão LTS
nvm install --lts
nvm use --lts

# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

### Problemas de dependências
```bash
# Limpe o cache e reinstale
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 📝 Contribuindo

1. Certifique-se de estar usando Node.js LTS
2. Instale as dependências
3. Execute o linter antes de commitar
4. Siga os padrões de código estabelecidos

## 📄 Licença

Este projeto é parte do exame técnico da Cubos.
