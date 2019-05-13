# Como usar

Este é um guia geral de utilização da API e desta seção `/arquivos`. Não há intenção de cobrir todas as funcionalidades da API neste momento.

::: warning AVISO
A dependência principal é o [json-server](https://github.com/typicode/json-server). Veja esta documentação para mais detalhes do funcionamento desta aplicação
:::

## Lista global de arquivos
A principal url deste projeto é `/arquivos`. É a única do tipo plural, ou seja que utiliza `ids` e na sua raiz retorna uma coleção.

Desta forma, ao acessar a url [/arquivos](https://api-geosampa.herokuapp.com/v1/arquivos) o navegador irá mostrar uma lista global com todos os arquivos publicados neste site.

**Exemplo 1** | [/arquivos](https://api-geosampa.herokuapp.com/v1/arquivos):
```javascript
[
  {
    "id": 1,
    "Versão": "0.1.1",
    "Extensão": "csv",
    "Título": "Região 5",
    "Autor": "PMSP/DEINFO",
    "Data": "2013-01-01",
    "Url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_regiao5_0.1.0_dicionario-csv.zip"
  },
 /**
  * { arquivo[id]: 2 },
  * { arquivo[id]: 3 },
  * { arquivo[id]: 4 },
  * { arquivo[id]: n }
  * Uma lista de todos os arquivos disponibilizados no site
  */
]
```
::: tip DICA
Para testar basta abrir a url do exemplo em uma nova aba.
:::

Veja que cada item desta coleção é organizado por chaves e valores.

O valor da chave `id`, de *id*entificador, é um valor numérico único para cada arquivo. Desta forma, alterando a url para `/arquivos/12` teremos como resposta os dados referentes apenas ao item de id `12`.

**Exemplo 2** | [/arquivos/12](https://api-geosampa.herokuapp.com/v1/arquivos/12) retornará:
```javascript
{
  "id": 12,
  "Versão": "0.2.2",
  "Extensão": "xlsx",
  "Título": "Região 8",
  "Autor": "PMSP/DEINFO",
  "Data": "2013-02-01",
  "url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_regiao8_0.1.0_dicionario-xlsx.zip"
}
```
::: tip DICA
Repare que ao contrário do primeiro exemplo `/arquivos` este exemplo `/arquivos/12` a resposta não está entre colchetes: `[` e `]`. 

Isso ocorre porque no [padrão](https://pt.wikipedia.org/wiki/JSON)  de troca dados desta API `[]` representa uma **coleção**.
:::

## Filtrando arquivos
Ambos os exemplos acima, uma lista global com milhares de arquivos e um único arquivo sem relação com nada, não teriam muita utilidade no dia a dia.

Esta API torna-se muito mais útil ao **filtrarmos** a resposta de `/arquivos`. Para fazer isto basta compor ao final da url as chaves e valores conforme o padrão:


`/arquivos?chave=valor`


No exemplo abaixo vamos compor a url para filtrar a resposta apenas os arquivos da chave `Datum` com valor `sirgas`.

**Exemplo 3** | [/arquivos?Datum=sirgas](https://api-geosampa.herokuapp.com/v1/arquivos?Datum=sirgas) retornará:

```json
[
  {
    "id": 3,
    "Versão": "0.1.3",
    "Datum": "sirgas",
    "Extensão": "shp",
    "Título": "Região 5",
    "Autor": "PMSP/DEINFO",
    "Data": "2013-01-03",
    "url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_regiao5_0.1.0_shp-sirgas.zip"
  },
  {
    "id": 10,
    "Versao": "0.2.0",
    "Datum": "sirgas",
    "Projeção": "UTM (Fuso 23 ou MC -45)",
    "Extensao": "shp",
    "Título": "Limites municipais",
    "Autor": "PMSP/SMUL",
    "Fonte dos dados": "IBGE - O limite Municipal de São Paulo foi ajustado (maio 2017) pela PRODAM para compatibilizar com uma escala maior.",
    "Data": "2014-02-01",
    "url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_limites-municipais_0.1.0_shp-sirgas.zip"
  },
  {
    "id": 13,
    "Versão": "0.2.3",
    "Datum": "sirgas",
    "Extensão": "shp",
    "Título": "Região 8",
    "Autor": "PMSP/DEINFO",
    "Data": "2013-02-02",
    "url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_regiao8_0.1.0_shp-sirgas.zip"
  },
  {
    "id": 16,
    "Versão": "0.2.6",
    "Datum": "sirgas",
    "Extensao": "shp",
    "Título": "Limites municipais",
    "Autor": "PMSP/SMUL",
    "Data": "2011-03-01",
    "url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_prefeituras-regionais_0.1.0_shp-sirgas.zip"
  }
]
```

Todos as chaves podem ser os parâmetros de filtragem do resultado pretendido. Basta alterar o final da url seguindo o padrão `/arquivos?chave=valor`.


## Tipos de chaves

Os tipos de chaves são padronizados. Este é o modelo de dados dos arquivos. Veja abaixo a descrição um exemplo de endpoint para cada chave:

| chave | descrição | exemplo | descrição de exemplo |
|:- |:- |:- |:- |
| id | Valor numérico único | [/arquivos?id=3](https://api-geosampa.herokuapp.com/v1/arquivos?id=3)| Arquivo de id com valor igual a 3 |
| Versão | Versão deste arquivo | [/arquivos?Versão=0.2.0](https://api-geosampa.herokuapp.com/v1/arquivos?Versão=0.2.0) | Arquivos de versão igual a 0.2.0 |
| Datum | Tipo de Datum | [/arquivos?Datum=sad6996](https://api-geosampa.herokuapp.com/v1/arquivos?Datum=sad6996) | Arquivos de Datum igual a sad6996 |
| Extensao | Extensão de arquivos | [/arquivos?extensão=xlsx](https://api-geosampa.herokuapp.com/v1/arquivos?extensão=xlsx) | Arquivos de extensão xlsx |
| Título | Título do arquivo | [/arquivos?Título=Distritos](https://api-geosampa.herokuapp.com/v1/arquivos?Título=Distritos) | Arquivos com título Distritos |
| Autor | Autor do arquivo | [/arquivos?Autor=PMSP/SMDU](https://api-geosampa.herokuapp.com/v1/arquivos?Autor=PMSP/SMDU) | Arquivos feitos por SMDU |
| Data | Data deste arquivo | [/arquivos?Data=2013-01-02](https://api-geosampa.herokuapp.com/v1/arquivos?Data=2013-02-01) | Arquivos feitos no dia 1 de fevereiro de 2013 |


## Combinando filtros
Também é possível combinar os filtros

* [/arquivos?id=1&id=2](https://api-geosampa.herokuapp.com/v1/arquivos?id=1&id=2)
* [/arquivos?Titulo=Distritos&Extensão=xlsx](https://api-geosampa.herokuapp.com/v1/arquivos?Titulo=Distritos&Extensão=xlsx)


## Camadas
Ao contrário da endpoint `/arquivos` que é uma url **plural**, ou seja que tem uma id e retorna uma coleção, as outras endpoints desta api como `/limites-administrativos`, `/populacao` e `/equipamentos` são do tipo **singular** e não retornam uma coleção.

Entende-se que cada camada tem um serviço diferente que filtra, sob critérios específicos, os arquivos disponibilizados em `/arquivos`.

Veja a seguir a documentação e exemplos de utilização de cada camada.