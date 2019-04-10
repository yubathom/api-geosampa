module.exports = {
    title: 'API GeoSampa',
    description: 'Arquivos estáticos do portal Geosampa',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Apresentação', link: '/apresentacao' },
          { text: 'External', link: 'https://api-geosampa.herokuapp.com' },
        ],
        sidebar: [
            ['/apresentacao', 'Apresentação']
        ]
    },
    dest: './public/'
}
