module.exports = {
	apiVersion: 'v1',
	/**
	 * @param { Array } ids Coleção numérica de ID's de arquivos
	 * @param { Array } arquivos Coleção global de objetos de arquivos
	 * @returns { Array } Coleção de arquivos filtrados pelas ids
	 */
	filterArquivos: (ids, arquivos) => {
		return ids.map(id => arquivos.find(arquivo => arquivo.id === id))
	}
}