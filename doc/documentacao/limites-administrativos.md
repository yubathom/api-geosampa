# Limites administrativos
Mapa base da divisão político-administrativa do Município de São Paulo, contendo prefeituras regionais, distritos, eixos de logradouros, quadras viárias e hidrografia do Mapa Digital da Cidade de São Paulo - MDC.

## Exemplos 

### Javascript
Veja um exemplo de consumo da api com [fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) e javascript.

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

::: tip Dica: Teste no console do seu navegador!
Você pode abrir o console (F12 no chrome) e colar este exemplo acima para visualizar os dados da API
:::

### Python 3
Veja o exemplo com a lib [requests](https://pypi.org/project/requests/) e python.

```bash
# instale a lib 'requests'
pip install requests
```

```python
import requests
resposta = requests.get('https://api-geosampa.herokuapp.com/limites-administrativos')
print(resposta.text)
```


### Resposta esperada
Nos dois exemplos acima a resposta esperada é o objeto no padrão abaixo:

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


### Seções
Esta camada se divide em subseções, cada seção contém um metadado específico e uma coleção de arquivos em diferentes formatos - `.pdf` `.dxf` `.dxf` `.mdt` `.shp` `.kmz` `.xls` ou `.csv`. Clique para abrir estas endpoints: 

#### Distritos
[/limites-administrativos@distritos](https://api-geosampa.herokuapp.com/limites-administrativos@distritos)

#### Municípios da Região Metropolitana
[/limites-administrativos@municipios-rmsp](https://api-geosampa.herokuapp.com/limites-administrativos@municipios-rmsp)

#### Prefeituras Regionais
[/limites-administrativos@prefeituras-regionais](https://api-geosampa.herokuapp.com/limites-administrativos@prefeituras-regionais)

#### Região 5
[/limites-administrativos@regiao-5](https://api-geosampa.herokuapp.com/limites-administrativos@regiao-5)
