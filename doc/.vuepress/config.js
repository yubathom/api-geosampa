module.exports = {
	title: '{ API GeoSampa }',
	description: 'Modelo de distribuição de arquivos estáticos do GeoSampa',
	locales: {
		"/": {
			lang: "pt-br",
			content: "pt-br"
		}
	},
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		nav: [
		  { text: 'Documentação', items: [
			  { text: 'Apresentação', link: '/apresentacao' },
			  { text: 'Crie uma chave', link: '/chave' },
			  { text: 'Como usar', link: '/como-usar' }
			] },
		  { text: 'Exemplos', 
			link: '/exemplos',
			items: [
				{ text: 'Integração com SEI', link: 'exemplos/sistema-eletronico' },
				{ text: 'Integração com páginas web', link: '/exemplos/web' },
				{ text: 'Integração com intranet e redes', link: '/exemplos/intranet' },
				{ text: 'Rotina QGIS', link: '/exemplos/qgis' }, 
				{ text: 'Atualizações com python e pip', link: '/exemplos/pip' },
				{ text: 'Atualizações com javascript e npm', link: '/exemplos/npm' }
		] },
		{ text: 'Dados abertos', link: 'https://api-geosampa.herokuapp.com/v1/dados-abertos' },
		{ text: 'Portal Geosampa', link: 'http://geosampa.prefeitura.sp.gov.br/' },
		{ text: 'Github', link: 'https://github.com/yubathom/api-geosampa' }
		],
		sidebar: [
			['/apresentacao', 'Apresentação'],
			['/chave', 'Crie uma chave'],
			['/como-usar', 'Como usar esta API'],
			{
				title: 'Camadas',
				collapsable: true,
				children: [
					[ '/documentacao/limites-administrativos', 'Limites Administrativos'],
					[ '/documentacao/populacao', 'População'],
					[ '/documentacao/equipamentos', 'Equipamentos'],
					[ '/documentacao/transporte', 'Transporte'],
					[ '/documentacao/sistema-viario', 'Sistema Viário'],
					[ '/documentacao/habitacao-e-edificacao', 'Habitação e Edificação'],
					[ '/documentacao/risco', 'Risco '],
					[ '/documentacao/infraestrutura-urbana', 'Infraestrutura Urbana'],
					[ '/documentacao/verde-e-recursos-naturais', 'Verde e Recursos Naturais'],
					[ '/documentacao/meio-fisico', 'Meio Físico'],
					[ '/documentacao/cadastro', 'Cadastro'],
					[ '/documentacao/legislacao-urbana', 'Legislação Urbana'],
					[ '/documentacao/acessibilidade', 'Acessibilidade'],
					[ '/documentacao/atlas', 'Atlas '],
					[ '/documentacao/ambiental', 'Ambiental'],
					[ '/documentacao/economia', 'Economia'],
					[ '/documentacao/imagens-satelites', 'Imagens Satelites'],
					[ '/documentacao/mosaico-de-ortofotos', 'Mosaico de Ortofotos'],
					[ '/documentacao/plantas-e-mapas-historicos', 'Plantas e Mapas Históricos'],
					[ '/documentacao/articulacao-de-imagens', 'Articulacao de Imagens' ]
				]
			},
			{
				title: 'Exemplos de uso',
				collapsable: false,
				children: [
					[ '/exemplos/sistema-eletronico', 'Integração com SEI' ],
					[ '/exemplos/web', 'Integração com páginas web' ],
					[ '/exemplos/intranet', 'Integração com intranet e redes' ],
					[ '/exemplos/qgis', 'Rotina QGIS' ],
					[ '/exemplos/pip', 'Atualizações com python e pip' ],
					[ '/exemplos/npm', 'Atualizações com javascript e npm' ]
				]
			}
		]
	},
	dest: './public/'
}
