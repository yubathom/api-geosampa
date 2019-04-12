# Arquivos Geosampa
Fornece por uma API REST as urls dos arquivos publicados no portal do Geosampa.

### Instruções para montar localmente a aplicação
1. Instalar dependências
```bash
npm i
```

### Instruções para desenvolver a documentação. 

1. Altere os markdowns do diretório `docs/`e altere as cofigurações de navegação do template em`docs/.vuepress/config.js`. 
```bash
# Inicie a documentação em localhost:8080
npm run docs:dev

# Altere/crie conteúdo editando os markdowns
/docs/*.md

# Altere as configurações do template editando o config.js
/docs/.vuepress/config.js

```
2. Publique documentação no diretório `public/`

```bash
npm run docs:build
```


## Instruções para desenvolver a API

1. Iniciar a aplicação completa em `localhost:3000`
```bash
npm run start
```

2. Desenvolva a aplicação completa (requer instalação global de nodemon - `npm i -g nodemon`)
```bash
npm run dev
```
