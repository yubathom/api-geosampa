module.exports = function() {
	return {
		"dados-abertos": require('./model/dados-abertos'),
		"limites-administrativos": require('./model/limites-administrativos'),
		"arquivos": require("./model/arquivos")
	}
}