import requests
import csv
import datetime
#!/usr/bin/python
# coding=utf8

def createFiles(req):
	response = requests.get(req)
	files = response.json()

	for file in files:
		url = file['url']

		fileRes = requests.get(url)

		## apenas para demo
		nicePathName = url.replace('https://s3-sa-east-1.amazonaws.com/api-geosampa/','')
		nicePathName = nicePathName.replace('_0.1.0_shp-sad6996','') 
		nicePathName = nicePathName.replace('_0.1.0_shp-sad669','') 
		## apenas para demo

		with open('shapes-geosampa/'+nicePathName, 'wb') as fileRaw:
			fileRaw.write(fileRes.content)

	return files

def createMetaData(inputDict, outputFile):
	columns = ['id', 'Versão', 'Datum', 'Título', 'Autor', 'Extensão', 'url','Data', 'Projeção', 'Fonte dos dados']

	try:
		with open(outputFile, 'w', encoding='UTF8') as file:
			writer = csv.DictWriter(file, fieldnames=columns)
			writer.writeheader()
			for data in inputDict:
				writer.writerow(data)
	except IOError:
		print("I/O error")


def metadataDateTime(prefix):
	now = datetime.datetime.now()
	nowStr = prefix + '_' + str(now.year) + '_' + str(now.month) + '_' + str(now.day) + '-' + str(now.hour) + 'h' + str(now.minute) + 'm' + str(now.second) + 's.csv'
	return nowStr


print('*** Atualizando arquivos : ************************************************************')
resFiles = createFiles('https://api-geosampa.herokuapp.com/v1/arquivos?Datum=sad6996&Extens%C3%A3o=shp')

for file in resFiles:
	print('* ' + file['Título'])
print('*** Arquivos atualizados ***')
print('***************************************************************************************')
print('*** Criando metadados : ***************************************************************')
outputFileName = metadataDateTime('shapes-geosampa/metadados')
print('Criando ' + outputFileName)
createMetaData(resFiles, outputFileName)
print('***' + outputFileName + ' criado ***')
