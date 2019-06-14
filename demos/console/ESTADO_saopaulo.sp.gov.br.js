var url = "https://api-geosampa.herokuapp.com/v1/limites-administrativos"
fetch(url)
	.then(function(resposta) {
		return resposta.json();
	})
	.then(function(res) {
		var main = document.getElementById('conteudo')
		main.innerText = JSON.stringify(res);
})
