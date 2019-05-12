const version = require('../helpers').apiVersion
const apiUrl = `${process.env.BASE_URL}${version}/`

module.exports = {
	"Sobre esta API": "Este é um protótipo de api do portal Geosampa - http://geosampa.prefeitura.sp.gov.br/ - uma proposta feita para a hackatona do portal - https://mundogeoconnect.com/2019/geosampa. Veja o repositório deste projeto: https://github.com/yubathom/api-geosampa",
	endpoints: [
		`${ apiUrl }limites-administrativos`,
		`${ apiUrl }arquivos`,
	],
}