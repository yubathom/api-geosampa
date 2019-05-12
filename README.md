<div align="center">
	<a href="https://api-geosampa.herokuapp.com/">
		<img style="max-width:200px" src="https://s3-sa-east-1.amazonaws.com/api-geosampa/assets/apigeosampa.svg" alt="logo"/>
		<h2 style="color:#0280F9; font-size: 3rem">{ API GeoSampa } </h2>
	</a>
</div>

# Proposta
Fornece por uma API REST as urls dos arquivos publicados no portal do [GeoSampa](http://geosampa.prefeitura.sp.gov.br/).
Este site faz parte de proposta desenvolvida para a [Hackatona do GeoSampa](https://mundogeoconnect.com/2019/geosampa/).

### Instruções para montar localmente a aplicação
1. Instalar dependências
```bash
npm i
```

### Instruções para desenvolver 

1. Altere os markdowns do diretório `docs/`e altere as cofigurações de navegação do template em`docs/.vuepress/config.js`. 
```bash
# Inicie o ambiente de desenvolvimento da documentação em localhost:8080
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

* Desenvolva a aplicação (requer instalação global de nodemon - `npm i -g nodemon`)
```bash
npm run dev
```

* Publique a documentação e inicie a aplicação completa em `localhost:3000`
```bash
npm run start
```
