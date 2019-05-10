# Limites administrativos
Mapa base da divisão político-administrativa do Município de São Paulo, contendo prefeituras regionais, distritos, eixos de logradouros, quadras viárias e hidrografia do Mapa Digital da Cidade de São Paulo - MDC.

### Exemplo 
Veja o exemplo com [fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) com javascript.

```javascript
var url = "https://api-geosampa.herokuapp.com/limites-administrativos"

fetch(url)
  .then(function(resposta) {
    return resposta.json();
  })
  .then(function(meuJson) {
    console.log(JSON.stringify(meuJson));
})

```

::: tip Dica
Você pode abrir o console (F12 no chrome) e colar este exemplo acima no seu console para visualizar os dados da API.
:::


Resposta esperada
```json
{
  "id": 1,
  "Resumo": "Mapa base da divisão político-administrativa do Município de São Paulo, contendo prefeituras regionais, distritos, eixos de logradouros, quadras viárias e hidrografia do Mapa Digital da Cidade de São Paulo - MDC.",
  "Escala": "1:1.000",
  "Data de referencia": "2014",
  "Responsável": {
    "Nome": "Secretaria Municipal de Desenvolvimento Urbano",
    "Sigla": "SMDU"
  },
  "Sistema de projeção e datum (consulta)": "UTM/SIRGAS 2000",
  "Sistema de projeção e datum (download arquivo vetorial ou matricial)": false,
  "Periodicidade de atualização": "sob demanda",
  "Seções": [
    "https://api-geosampa.herokuapp.com/limites-administrativos@regiao-5",
    "https://api-geosampa.herokuapp.com/limites-administrativos@distritos",
    "https://api-geosampa.herokuapp.com/limites-administrativos@municipios-rmsp",
    "https://api-geosampa.herokuapp.com/limites-administrativos@prefeituras-regionais"
  ]
}
```

### Arquivos
#### Região 5
[/limites-administrativos@regiao-5](/limites-administrativos@regiao-5)

#### Distritos
[/limites-administrativos@distritos](/limites-administrativos@distritos)

#### Municípios da Região Metropolitana
[/limites-administrativos@regiao-5](/limites-administrativos@municipios-msp)

#### Prefeituras Regionais
[/limites-administrativos@prefeituras-regionais](/limites-administrativos@prefeituras-regionais)
