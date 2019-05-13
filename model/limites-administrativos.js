const version = require('../helpers').apiVersion
const apiUrl = `${process.env.BASE_URL}${version}/`

const arquivosIds = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]
const arquivosGlobal = require("./arquivos")
const filterArquivos = require("../helpers").filterArquivos // retorna arquivos filtrados por arquivosIds

module.exports = {
	"Resumo": "Mapa base da divisão político-administrativa do Município de São Paulo, contendo prefeituras regionais, distritos, eixos de logradouros, quadras viárias e hidrografia do Mapa Digital da Cidade de São Paulo - MDC.",
	"Escala": "1:1.000",
	"Data de referencia":"2014",
	"Responsável": {
		"Nome": "Secretaria Municipal de Desenvolvimento Urbano",
		"Sigla": "SMDU"
	},
	"Sistema de projeção e datum (consulta)": "UTM/SIRGAS 2000",
	"Sistema de projeção e datum (download arquivo vetorial ou matricial)": false,
	"Periodicidade de atualização":"sob demanda",
	"Seções": {
		"Regiao 5": {
			"url":apiUrl + "limites-administrativos@regiao-5",
			"Arquivos": {
				"csv": apiUrl + "arquivos/1",
				"xlsx": apiUrl + "arquivos/2",
				"sirgas": apiUrl + "arquivos/3",
				"sad6996": apiUrl + "arquivos/4"
			}
		},
		"Distritos": {
			"url": apiUrl + "limites-administrativos@distritos",
			"Resumo": "Os distritos foram criados mediante a Lei nº 11.220/1992. Seus limites foram estabelecidos a partir de estudos elaborados por diversos órgãos do Executivo municipal, tendo em conta fatores físico-territoriais, demográficos, urbanísticos, econômicos e político-administrativos",
			"Escala":"1:1.000 e 1:5.000",
			"Data de referencia":"2014",
			"Responsável": {
				"Nome": "Secretaria Municipal de Desenvolvimento Urbano",
				"Sigla": "SMDU"
			},
			"Sistema de projeção e datum (consulta)": "UTM/SIRGAS 2000",
			"Sistema de projeção e datum (download arquivo vetorial ou matricial)": "UTM/SIRGAS 2000",
			"Periodicidade de atualização":"sob demanda",
			"Arquivos": {
				"dxf": apiUrl + "arquivos/5",
				"kmz": apiUrl + "arquivos/6",
				"sirgas": apiUrl + "arquivos/7",
				"sad6996": apiUrl + "arquivos/8"
			}
		},
		"Municípios RMSP" : {
			"url": apiUrl + "limites-administrativos@municipios-rmsp",
			"Resumo": "Extensão da capital paulista, a Região Metropolitana de São Paulo é composta por 39 municípios formando uma mancha urbana contínua.",
			"Escala":"1:5.000",
			"Data de referencia":"2014",
			"Responsável": {
				"Nome": "Prefeitura Municipal de São Paulo",
				"Sigla": "PMSP"
			},
			"Sistema de projeção e datum (consulta)": "UTM/SIRGAS 2000",
			"Sistema de projeção e datum (download arquivo vetorial ou matricial)": false,
			"Periodicidade de atualização":"sob demanda",
			"Arquivos":{
				"sirgas": apiUrl + "arquivos/9",
				"sad6996": apiUrl + "arquivos/10"
			}
		},
		"Região 8": {
			"url": apiUrl + "limites-administrativos@regiao-8",
			"csv": apiUrl + "arquivos/11",
			"xlsx": apiUrl + "arquivos/12",
			"sirgas": apiUrl + "arquivos/13",
			"sad6996": apiUrl + "arquivos/14"
		},
		"Prefeituras Regionais" : {
			"url": apiUrl + "limites-administrativos@prefeituras-regionais",
			"Resumo": "As subprefeituras foram criadas mediante a Lei nº 13.339/2002. Seus limites foram estabelecidos de forma a não comprometer a  divisão distrital do município, permitindo assim a agregação de dados também para cada uma dessas unidades político-administrativas. Em 2017, as Subprefeituras passam a ser denominadas 'Prefeituras Regionais'",
			"Escala":"1:1.000 e 1:5.000",
			"Data de referencia":"2011",
			"Responsável": {
				"Nome": "Secretaria Municipal de Desenvolvimento Urbano",
				"Sigla": "SMDU"
			},
			"Sistema de projeção e datum (consulta)": "UTM/SIRGAS 2000",
			"Sistema de projeção e datum (download arquivo vetorial ou matricial)": "UTM/SIRGAS 2000",
			"Periodicidade de atualização":"sob demanda",
			"Arquivos":{
				"sirgas": apiUrl + "arquivos/15",
				"sad6996": apiUrl + "arquivos/16"
			}
		},
		"Arquivos": filterArquivos(arquivosIds, arquivosGlobal)
	}
}