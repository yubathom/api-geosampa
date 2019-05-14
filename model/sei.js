const arquivosGlobal = require("./arquivos")
const filterArquivos = require("../helpers").filterArquivos // retorna arquivos filtrados por arquivosIds

module.exports = [
	{
		"id": 1,
		"Processo": "7810.2018/0000071-8",
		"Geo": {
			"Arquivos": filterArquivos([ 17, 18 ],arquivosGlobal),
			"Coordenadas": [ -5190695.271418285, -2696956.332871481 ]
		},
		"Status": {
			"Data": "2019-05-09",
			"Hora": "16:53",
			"Unidade": {
				"Sigla": "SP-URB/DDE",
				"Título": "SP-URBANISMO/PRE/Diretoria de Desenvolvimento"
			},
			"Descrição": "Processo recebido na unidade",
			"Relacionados": [
				{
					"id": 100,
					"Processo": "0000.2019/0000000-0",
					"url": "#"
				},
				{
					"id": 101,
					"Processo": "0000.2019/0000000-1",
					"url": "#"
				},
				{
					"id": 102,
					"Processo": "0000.2019/0000000-2",
					"url": "#"
				},
				{
					"id": 103,
					"Processo": "0000.2019/0000000-3",
					"url": "#"
				}
			]
		},
		"Tipo": "Comunicações Administrativas: Memorando",
		"Data de Registro:": "Data de Registro",
		"Interessados:":[],
		"Documentos": [
			{
				"Documento / Processo": "6986362",
				"Tipo de Documento": "Memorando SEI DDE-004/2018",
				"Data do Documento": "22/03/2018",
				"Data de Registro": "22/03/2018",
				"Unidade": "SP-URB/DDE-SDE"
			},
			{
				"Documento / Processo": "7803640",
				"Tipo de Documento": "Encaminhamento",
				"Data do Documento": "13/04/2018",
				"Data de Registro": "13/04/2018",
				"Unidade": "SP-URB/PRE-CHG"
			},
			{
				"Documento / Processo": "9618511",
				"Tipo de Documento": "Encaminhamento",
				"Data do Documento": "13/07/2018",
				"Data de Registro": "13/07/2018",
				"Unidade": "SMUL/AJ"
			},
			{
				"Documento / Processo": "9697091",
				"Tipo de Documento": "Encaminhamento",
				"Data do Documento": "18/07/2018",
				"Data de Registro": "18/07/2018",
				"Unidade": "SP-URB/PRE-CHG"
			},
			{
				"Documento / Processo": "9713162",
				"Tipo de Documento": "Encaminhamento",
				"Data do Documento": "18/07/2018",
				"Data de Registro": "18/07/2018",
				"Unidade": "SP-URB/DDE"
			},
			{
				"Documento / Processo": "011920184",
				"Tipo de Documento": "Relatório P1 Análise Territorial 01/2",
				"Data do Documento": "18/10/2018",
				"Data de Registro": "18/10/2018",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "011920825",
				"Tipo de Documento": "Relatório P1 Análise Territorial 02/2",
				"Data do Documento": "18/10/2018",
				"Data de Registro": "18/10/2018",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "011924037",
				"Tipo de Documento": "Relatório P2 Análise Ambiental 01/6",
				"Data do Documento": "18/10/2018",
				"Data de Registro": "18/10/2018",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "011924310",
				"Tipo de Documento": "Relatório P2 Análise Ambiental 02/6",
				"Data do Documento": "18/10/2018",
				"Data de Registro": "18/10/2018",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "011924451",
				"Tipo de Documento": "Relatório P2 Análise Ambiental 03/6",
				"Data do Documento": "18/10/2018",
				"Data de Registro": "18/10/2018",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "011924587",
				"Tipo de Documento": "Relatório P2 Análise Ambiental 04/6",
				"Data do Documento": "18/10/2018",
				"Data de Registro": "18/10/2018",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "011924667",
				"Tipo de Documento": "Relatório P2 Análise Ambiental 05/6",
				"Data do Documento": "18/10/2018",
				"Data de Registro": "18/10/2018",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "011924757",
				"Tipo de Documento": "Relatório P2 Análise Ambiental 06/6",
				"Data do Documento": "18/10/2018",
				"Data de Registro": "18/10/2018",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "011924921",
				"Tipo de Documento": "Relatório Consolidado para divulgação do PIU 01/2",
				"Data do Documento": "18/10/2018",
				"Data de Registro": "18/10/2018",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "011924972",
				"Tipo de Documento": "Relatório Consolidado para divulgação do PIU 02/2",
				"Data do Documento": "18/10/2018",
				"Data de Registro": "18/10/2018",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "012110292",
				"Tipo de Documento": "Relatório Consulta Pública Prévia",
				"Data do Documento": "18/10/2018",
				"Data de Registro": "25/10/2018",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "012110473",
				"Tipo de Documento": "Informação",
				"Data do Documento": "26/10/2018",
				"Data de Registro": "26/10/2018",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "012187025",
				"Tipo de Documento": "Informação",
				"Data do Documento": "31/10/2018",
				"Data de Registro": "31/10/2018",
				"Unidade": "SP-URB/DDE"
			},
			{
				"Documento / Processo": "012372858",
				"Tipo de Documento": "Encaminhamento",
				"Data do Documento": "29/11/2018",
				"Data de Registro": "29/11/2018",
				"Unidade": "SP-URB/PRE-CHG"
			},
			{
				"Documento / Processo": "012929671",
				"Tipo de Documento": "Informação",
				"Data do Documento": "30/11/2018",
				"Data de Registro": "30/11/2018",
				"Unidade": "SMUL/GAB"
			},
			{
				"Documento / Processo": "013695266",
				"Tipo de Documento": "Informação",
				"Data do Documento": "03/01/2019",
				"Data de Registro": "03/01/2019",
				"Unidade": "SMUL/AJ"
			},
			{
				"Documento / Processo": "013811570",
				"Tipo de Documento": "Informação",
				"Data do Documento": "09/01/2019",
				"Data de Registro": "09/01/2019",
				"Unidade": "SMUL/GAB"
			},
			{
				"Documento / Processo": "014019083",
				"Tipo de Documento": "Informação",
				"Data do Documento": "28/01/2019",
				"Data de Registro": "28/01/2019",
				"Unidade": "SMUL/DEUSO"
			},
			{
				"Documento / Processo": "014403517",
				"Tipo de Documento": "Informação",
				"Data do Documento": "04/02/2019",
				"Data de Registro": "04/02/2019",
				"Unidade": "SMUL/PLANURB"
			},
			{
				"Documento / Processo": "014518714",
				"Tipo de Documento": "Informação",
				"Data do Documento": "07/02/2019",
				"Data de Registro": "07/02/2019",
				"Unidade": "SMUL/GAB"
			},
			{
				"Documento / Processo": "014531238",
				"Tipo de Documento": "Informação",
				"Data do Documento": "07/02/2019",
				"Data de Registro": "07/02/2019",
				"Unidade": "SMUL/GAB"
			},
			{
				"Documento / Processo": "014607868",
				"Tipo de Documento": "Informação",
				"Data do Documento": "11/02/2019",
				"Data de Registro": "11/02/2019",
				"Unidade": "SMUL/AJ"
			},
			{
				"Documento / Processo": "014608720",
				"Tipo de Documento": "Despacho Autorizatório",
				"Data do Documento": "13/02/2019",
				"Data de Registro": "13/02/2019",
				"Unidade": "SMUL/AJ"
			},
			{
				"Documento / Processo": "014742703",
				"Tipo de Documento": "Publicação no DOC",
				"Data do Documento": "14/02/2019",
				"Data de Registro": "14/02/2019",
				"Unidade": "SMUL/AJ"
			},
			{
				"Documento / Processo": "014751438",
				"Tipo de Documento": "Encaminhamento",
				"Data do Documento": "15/02/2019",
				"Data de Registro": "15/02/2019",
				"Unidade": "SP-URB/PRE-CHG"
			},
			{
				"Documento / Processo": "014791437",
				"Tipo de Documento": "Encaminhamento",
				"Data do Documento": "15/02/2019",
				"Data de Registro": "15/02/2019",
				"Unidade": "SP-URB/DDE"
			},
			{
				"Documento / Processo": "014770499",
				"Tipo de Documento": "Encaminhamento",
				"Data do Documento": "19/02/2019",
				"Data de Registro": "19/02/2019",
				"Unidade": "SP-URB/DAF"
			},
			{
				"Documento / Processo": "015318167",
				"Tipo de Documento": "E-mail",
				"Data do Documento": "11/03/2019",
				"Data de Registro": "11/03/2019",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "016113025",
				"Tipo de Documento": "Mapa de Compartimentos Ambientais",
				"Data do Documento": "05/04/2019",
				"Data de Registro": "05/04/2019",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "016114313",
				"Tipo de Documento": "Relatório Avaliação da Operação Urbana Centro",
				"Data do Documento": "05/04/2019",
				"Data de Registro": "05/04/2019",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "016114560",
				"Tipo de Documento": "Relatório Avaliação Operação Urbana Centro - Anexos",
				"Data do Documento": "05/04/2019",
				"Data de Registro": "05/04/2019",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "016115047",
				"Tipo de Documento": "Relatório Considerações sobre o Perímetro PIU Setor Central",
				"Data do Documento": "05/04/2019",
				"Data de Registro": "05/04/2019",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "016115128",
				"Tipo de Documento": "Informação",
				"Data do Documento": "08/04/2019",
				"Data de Registro": "08/04/2019",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "016887539",
				"Tipo de Documento": "Relatório de Divulgação da 2ª Consulta Pública - I",
				"Data do Documento": "06/05/2019",
				"Data de Registro": "06/05/2019",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "016889436",
				"Tipo de Documento": "Relatório de Divulgação da 2ª Consulta Pública - II",
				"Data do Documento": "06/05/2019",
				"Data de Registro": "06/05/2019",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "016889635",
				"Tipo de Documento": "Relatório Devolutiva da 1ª Consulta Pública",
				"Data do Documento": "06/05/2019",
				"Data de Registro": "06/05/2019",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "016893599",
				"Tipo de Documento": "Relatório Devolutiva Recomendações CEOUC",
				"Data do Documento": "06/05/2019",
				"Data de Registro": "06/05/2019",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "016893694",
				"Tipo de Documento": "Informação",
				"Data do Documento": "06/05/2019",
				"Data de Registro": "06/05/2019",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "016914134",
				"Tipo de Documento": "Encaminhamento",
				"Data do Documento": "06/05/2019",
				"Data de Registro": "06/05/2019",
				"Unidade": "SP-URB/DDE"
			},
			{
				"Documento / Processo": "016942473",
				"Tipo de Documento": "Relatório Divulgação da 2ª Consulta Pública - Urbanismo",
				"Data do Documento": "07/05/2019",
				"Data de Registro": "07/05/2019",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "016942574",
				"Tipo de Documento": "Relatório Divulgação da 2ª Consulta Pública - Mod. Econômica",
				"Data do Documento": "07/05/2019",
				"Data de Registro": "07/05/2019",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "016942724",
				"Tipo de Documento": "Relatório Contribuições 1ª Consulta Pública",
				"Data do Documento": "07/05/2019",
				"Data de Registro": "07/05/2019",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "016942830",
				"Tipo de Documento": "Relatório Contribuições Comissão Executiva OU Centro",
				"Data do Documento": "07/05/2019",
				"Data de Registro": "07/05/2019",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "016942907",
				"Tipo de Documento": "Informação",
				"Data do Documento": "07/05/2019",
				"Data de Registro": "07/05/2019",
				"Unidade": "SP-URB/SDE-NPA"
			},
			{
				"Documento / Processo": "016956995",
				"Tipo de Documento": "Informação",
				"Data do Documento": "07/05/2019",
				"Data de Registro": "07/05/2019",
				"Unidade": "SP-URB/DDE"
			},
			{
				"Documento / Processo": "017002018",
				"Tipo de Documento": "Informação",
				"Data do Documento": "08/05/2019",
				"Data de Registro": "08/05/2019",
				"Unidade": "SMUL/GAB"
			},
			{
				"Documento / Processo": "017020117",
				"Tipo de Documento": "Encaminhamento",
				"Data do Documento": "09/05/2019",
				"Data de Registro": "09/05/2019",
				"Unidade": "SP-URB/DDE"
			},
			{
				"Documento / Processo": "017041880",
				"Tipo de Documento": "Informação",
				"Data do Documento": "09/05/2019",
				"Data de Registro": "09/05/2019",
				"Unidade": "SMUL/ATIC"
			}
		]
	}
]