import requests
# import tempfile
import json
import zipfile
import os

# URL da API
url = "https://api-geosampa.herokuapp.com/v1/limites-administrativos"

# Baixa o API
json_data = requests.get(url)
# Lê o JSON
json_data_ = json.loads(json_data.text)
json_data_sec = json_data_['Seções']

camada = 'Distritos'
camada_arquivos = json_data_sec[camada]['Arquivos']
arquivo = camada_arquivos['sirgas']
arquivo_ = json.loads(requests.get(arquivo).text)
url_camada = arquivo_['url']

arquivo_zip = requests.get(url_camada)


# CARREGA O ZIP FILE
uri = r'C:\Users\x417028\Downloads\limites-adminitrativos.zip'
zp = zipfile.ZipFile(uri)
uri_api = r'C:\Users\x417028\Downloads\Geosampa_api'
zp.extractall(uri_api)

for folderName, subflders, filenames in os.walk(uri_api):
    print(filenames)
    for f in filenames:
        if f.endswith('.shp'):
            iface.addVectorLayer(os.path.join(folderName, f), 'Distritos', 'ogr')



# with zipfile.ZipFile(r"C:\Users\x417028\Downloads\zip.zipip", "w") as zf:
# 	zf.write(arquivo_zip.text)


# temp = tempfile.TemporaryFile()

# try:  
#     temp.write(arquivo_zip.text)
#     temp.seek(0)
# 	layer_geo = iface.addVectorLayer(temp.read(), camada, 'ogr')

#     # print(temp.read())
# finally:  
#     temp.close()



'''
'Limites Administrativos',
'População',
'Equipamentos',
'Transporte',
'Sistema Viário',
'Habitação e Edificação',
'Risco ',
'Infraestrutura Urbana',
'Verde e Recursos Naturais',
'Meio Físico',
'Cadastro',
'Legislação Urbana',
'Acessibilidade',
'Atlas ',
'Ambiental',
'Economia',
'Imagens Satelites',
'Mosaico de Ortofotos',
'Plantas e Mapas Históricos',
'Articulacao de Imagens'

'''