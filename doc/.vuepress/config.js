module.exports = {
    locales: {
        "/": {
            lang: "pt-br",
            content: "pt-br"
        }
    },
    title: '{ API GeoSampa }',
    description: 'Modelo de distribuição de arquivos estáticos do Geosampa',
    themeConfig: {
        nav: [
          { text: 'Documentação', items: [
              { text: 'Apresentação', link: '/apresentacao' }
          ] },
          { text: 'Exemplos', 
            link: '/exemplos',
            items: [
                { text: 'Integração com SEI', link: '/sei' },
                { text: 'Integração com páginas web', link: '/web' },
                { text: 'Integração com intranet e redes', link: '/intranet' }, 
                { text: 'Rotina QGIS', link: '/qgis' }, 
                { text: 'Atualizações com python e pip', link: '/pip' },
                { text: 'Atualizações com javascript e npm', link: '/npm' }
        ] },
        { text: 'Dados abertos', link: 'https://api-geosampa.herokuapp.com/dados-abertos' },
          { text: 'Portal Geosampa', link: 'http://geosampa.prefeitura.sp.gov.br/' },
        ],
        sidebar: [
            ['/apresentacao', 'Apresentação']
        ]
    },
    dest: './public/'
}
