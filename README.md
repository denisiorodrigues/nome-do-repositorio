### Gescol
Projeto para gerenciamento escolar

## Negócio
# Forúm
- Muita dificuldade em saber as dúvidas dos alunos
- Eu tenho que responder os alunos e eu me perco em quais dúvidas já forma respondidas


# Tecnologias utlizadas

Javscript | TypeScript | NodeJs | Vitest | DayJS

## Configuração

### Instalação
Instalar o typescript e o type node em abimente de desenvolvimento
```bash
npm i typescript @types/node -D
```

Vamos utilizar o Vitest para os teste unitário
```bash
npm i vitest -D
```

Vamos utilizar o dayjs para trabalhar com datas
```bash
npm i dayjs
```

Para configurar as importaçãos nos arquivos de teste vai precisar instalar a biblioteca abaixo.
Depois configurar na sessão [Configurando arquivos de teste](#arquivos-de-teste)
```bash
npm i vite-tsconfig-paths -D
```

### Comando de execução
Iniciar o Projeto
```bash
npm init -y
```

Iniciar o typescript e alterar o target para es2020
```bash
npx tsc --init
```

Rodar os testes
```bash
npx vitest run
```

Crirar um gitignore com o github cli
````bash
gh repo create --gitignore Node
```

### Caminho relativo no projeto

#### Imports dos arquivos
Configurar no ```tsconfig.json``` configurar o caminho (path) dos arquivos de importação.
Basta descomentar ```"baseUrl": "./"``` e o ```"paths": {},``` para alterar o caminho root.
Depois colocar a configração abaixo no __paths__:

```javascript
"paths": {
    "@/*":["./src/*"]
}, 
```

#### Arquivos de teste
Configurar as importações automáticas de forma global do __vitest__ criando o ```vite.config.ts``` e colocando a configuração abaixo do [código 1](#codigo-1). mas para não dá erro no typescript deve fazer uma alteração no ```tsconfig.json```, deve descomentar o ```types:[]``` e colocar dentro dos colchetes o __vitest/globals__, ficando igual ao [código 2](#codigo-2)

#### Código 1
```javascript
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [tsConfigPaths()],
    test: {
        globals: true,
    }
}) 
```

#### Código 2
```javascript
"types": [
    "vitest/globals"
],
```
