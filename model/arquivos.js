const version = require('../helpers').apiVersion
const apiUrl = `${process.env.BASE_URL}${version}/`

module.exports = [
	{
		"id": 1,
		"Versão": "0.1.1",
		"Extensão": "csv",
		"Origem": apiUrl + "limites-administrativos@regiao-5",
		"Título": "Região 5",
		"Autor": "PMSP/DEINFO",
		"Data": "2013-01-01",
		"Url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_regiao5_0.1.0_dicionario-csv.zip"
	},
	{
		"id": 2,
		"Versão": "0.1.2",
		"Extensão": "xlsx",
		"Origem": apiUrl + "limites-administrativos@regiao-5",
		"Título": "Região 5",
		"Autor": "PMSP/DEINFO",
		"Data": "2013-01-02",
		"url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_regiao5_0.1.0_dicionario-xlsx.zip"
	},
	{
		"id": 3,
		"Versão": "0.1.3",
		"Datum": "sirgas",
		"Extensão": "shp",
		"Origem": apiUrl + "limites-administrativos@regiao-5",
		"Título": "Região 5",
		"Autor": "PMSP/DEINFO",
		"Data": "2013-01-03",
		"url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_regiao5_0.1.0_shp-sirgas.zip"
	},
	{
		"id": 4,
		"Versao": "0.1.4",
		"Datum": "sad6996",
		"Extensao": "shp",
		"Origem": apiUrl + "limites-administrativos@regiao-5",
		"Título": "Região 5",
		"Autor": "PMSP/DEINFO",
		"Data": "2013-01-04",
		"url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_regiao5_0.1.0_shp-sad6996.zip"
	},
	{
		"id": 5,
		"Versao": "0.1.5",
		"Datum": "sad6996",
		"Extensao": "dxf",
		"Origem": apiUrl + "limites-administrativos@regiao-5",
		"Título": "Distritos",
		"Autor": "PMSP/SMUL",
		"Data": "2011-01-05",
		"url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_distritos_0.1.0_dxf-sad6996.zip"
	},
	{
		"id": 6,
		"Versao": "0.1.6",
		"Datum": "WGS84",
		"Extensao": "kmz",
		"Origem": apiUrl + "limites-administrativos@regiao-5",
		"Título": "Distritos",
		"Autor": "PMSP/SMUL",
		"Data": "2011-01-06",
		"url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_distritos_0.1.0_kmz-WGS84.zip"
	},
	{
		"id": 7,
		"Versao": "0.1.7",
		"Datum": "sad6996",
		"Extensao": "shp",
		"Origem": apiUrl + "limites-administrativos@distritos",
		"Título": "Distritos",
		"Autor": "PMSP/SMUL",
		"Data": "2011-01-07",
		"url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_distritos_0.1.0_shp-sad6996.zip"
	},
	{
		"id": 8,
		"Versao": "0.1.8",
		"Projeção": "sirgas",
		"Extensao": "shp",
		"Origem": apiUrl + "limites-administrativos@distritos",
		"Título": "Distritos",
		"Autor": "PMSP/SMUL",
		"Data": "2011-01-08",
		"url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_distritos_0.1.0_shp-sirgas.zip"
	},

	{
		"id": 9,
		"Versao": "0.1.9",
		"Datum": "sad6996",
		"Projeção": "UTM (Fuso 23 ou MC -45)",
		"Extensao": "shp",
		"Origem":apiUrl + "limites-administrativos@limites-municipais",
		"Título": "Limites municipais",
		"Autor": "PMSP/SMUL",
		"Fonte dos dados": "IBGE - O limite Municipal de São Paulo foi ajustado (maio 2017) pela PRODAM para compatibilizar com uma escala maior.",
		"Data": "2014-01-09",
		"url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_limites-municipais_0.1.0_shp-sad669.zip"
	},
	{
		"id": 10,
		"Versao": "0.2.0",
		"Datum": "sirgas",
		"Projeção": "UTM (Fuso 23 ou MC -45)",
		"Extensao": "shp",
		"Origem": apiUrl + "limites-administrativos@limites-municipais",
		"Título": "Limites municipais",
		"Autor": "PMSP/SMUL",
		"Fonte dos dados": "IBGE - O limite Municipal de São Paulo foi ajustado (maio 2017) pela PRODAM para compatibilizar com uma escala maior.",
		"Data": "2014-02-01",
		"url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_limites-municipais_0.1.0_shp-sirgas.zip"
	},

	{
		"id": 11,
		"Versão": "0.2.0",
		"Extensão": "csv",
		"Origem": apiUrl + "limites-administrativos@regiao-8",
		"Título": "Região 8",
		"Autor": "PMSP/DEINFO",
		"Data": "2013-02-01",
		"Url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_regiao8_0.1.0_dicionario-csv.zip"
	},
	{
		"id": 12,
		"Versão": "0.2.2",
		"Extensão": "xlsx",
		"Origem": apiUrl + "limites-administrativos@regiao-8",
		"Título": "Região 8",
		"Autor": "PMSP/DEINFO",
		"Data": "2013-02-01",
		"url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_regiao8_0.1.0_dicionario-xlsx.zip"
	},
	{
		"id": 13,
		"Versão": "0.2.3",
		"Datum": "sirgas",
		"Extensão": "shp",
		"Origem": apiUrl + "limites-administrativos@regiao-8",
		"Título": "Região 8",
		"Autor": "PMSP/DEINFO",
		"Data": "2013-02-02",
		"url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_regiao8_0.1.0_shp-sirgas.zip"
	},
	{
		"id": 14,
		"Versao": "0.2.4",
		"Datum": "sad6996",
		"Extensao": "shp",
		"Origem": apiUrl + "limites-administrativos@regiao-8",
		"Título": "Região 8",
		"Autor": "PMSP/DEINFO",
		"Data": "2013-03-01",
		"url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_regiao8_0.1.0_shp-sad6996.zip"
	},
	{
		"id": 15,
		"Versao": "0.2.5",
		"Datum": "sad6996",
		"Extensao": "shp",
		"Origem":apiUrl + "limites-administrativos@prefeituras-regionais",
		"Título": "Prefeituras Regionais",
		"Autor": "PMSP/SMDU",
		"Data": "2011-02-01",
		"url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_prefeituras-regionais_0.1.0_shp-sad669.zip"
	},
	{
		"id": 16,
		"Versao": "0.2.6",
		"Datum": "sirgas",
		"Extensao": "shp",
		"Origem": apiUrl + "limites-administrativos@prefeituras-regionais",
		"Título": "Limites municipais",
		"Autor": "PMSP/SMUL",
		"Data": "2011-03-01",
		"url": "https://s3-sa-east-1.amazonaws.com/api-geosampa/limites-adminitrativos_prefeituras-regionais_0.1.0_shp-sirgas.zip"
	}
]
