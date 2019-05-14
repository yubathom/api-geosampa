# Integração com Sistema Eletrônico de Informações
A documentação de API na administração permitirá a integração e a distribuição de serviços. Neste exemplo faremos um protótipo a partir dos dados disponibilizados no Sistema Eletrônico de Informações.

Para tanto fizemos uma endpoint de um processo público disponibilizado na url do processo [7810.2018/0000071-8](https://sei.prefeitura.sp.gov.br/sei/modulos/pesquisa/md_pesq_processo_exibir.php?rGf-D8XZF-LuQKZYBQSviuiUCmmg76SUUtcmpNSwrGlWBIvgL3eBU0edb_XNRIzqR0U2_qjZLrrY711epuPlKwoPiiILjdQNcRVRgNUShOcNLOlTYtv8o0bue_XWzlYI)

::: warning AVISO
O endpoint foi criada com os dados fornecidos nesta url. Ou seja os dados foram transformados de tabelas HTML para o formato JSON para ilustrar este exemplo.
:::

Criamos um serviço `/sei` com as mesmas funcionlidades do restante da API. Este serviço poderia realizar uma conexão com a fonte de dados do *SEI* e incrementar na resposta para o cliente um objeto ` { Geo } `, com uma coleção de arquivos geográficos associados. Desta forma:

a url [/sei?Processo=7810.2018/0000071-8](https://api-geosampa.herokuapp.com//v1/sei?Processo=7810.2018/0000071-8)
retornará:
```json
[
  {
  "id": 1,
  "Processo": "7810.2018/0000071-8",
  "Geo": {
    "Arquivos": [
      {
        "id": 17,
        "Versão": "0.1.0",
        "Datum": "sirgas",
        "Extensão": "shp",
        "Título": "PIU Setor Central",
        "Autor": "PMSP/SPURB",
        "Data": "2019-05-09",
        "url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/piu-setor-central_0.1.0_shp.zip"
      },
      {
        "id": 18,
        "Versão": "0.1.0",
        "Datum": "sirgas",
        "Extensão": "kml",
        "Título": "PIU Setor Central",
        "Autor": "PMSP/SPURB",
        "Data": "2019-05-09",
        "url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/piu-setor-central_0.1.0_kml.zip"
      }
    ],
    "Coordenadas": [
      -5190695.271418285,
      -2696956.332871481
    ]
  }
}
```
Além da coleção `Geo.Arquivos`, há também o objeto `Geo.Coordenadas` que traz o centróide de uma feição (__feature__) vindo dinamicamente de um banco.

Criando um serviço que responda estes dados geográfico no mesmo objeto dos dados do SEI nos permite criar a seguinte renderização abaixo:

______

<SeiMap />
