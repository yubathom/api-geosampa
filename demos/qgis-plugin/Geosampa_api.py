# -*- coding: utf-8 -*-
"""
/***************************************************************************
 geosampa_api
                                 A QGIS plugin
 Cria a conexão entre o Geosampa e o QGIS
 Generated by Plugin Builder: http://g-sherman.github.io/Qgis-Plugin-Builder/
                              -------------------
        begin                : 2019-06-25
        git sha              : $Format:%H$
        copyright            : (C) 2019 by Thomas
        email                : -
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
"""
from PyQt5.QtCore import QSettings, QTranslator, qVersion, QCoreApplication
from PyQt5.QtGui import QIcon
from PyQt5.QtWidgets import QAction
from qgis.utils import iface
from qgis.core import QgsProject, QgsVectorLayer

# Initialize Qt resources from file resources.py
from .resources import *
# Import the code for the dialog
from .Geosampa_api_dialog import geosampa_apiDialog
import os.path

import requests
# import tempfile
import json
import zipfile
import os


class geosampa_api:
    """QGIS Plugin Implementation."""

    def __init__(self, iface):
        """Constructor.

        :param iface: An interface instance that will be passed to this class
            which provides the hook by which you can manipulate the QGIS
            application at run time.
        :type iface: QgsInterface
        """
        # Save reference to the QGIS interface
        self.iface = iface
        # initialize plugin directory
        self.plugin_dir = os.path.dirname(__file__)
        # initialize locale
        locale = QSettings().value('locale/userLocale')[0:2]
        locale_path = os.path.join(
            self.plugin_dir,
            'i18n',
            'geosampa_api_{}.qm'.format(locale))

        if os.path.exists(locale_path):
            self.translator = QTranslator()
            self.translator.load(locale_path)

            if qVersion() > '4.3.3':
                QCoreApplication.installTranslator(self.translator)

        # Declare instance attributes
        self.actions = []
        self.menu = self.tr(u'&GEOSAMPA api')

        # Check if plugin was started the first time in current QGIS session
        # Must be set in initGui() to survive plugin reloads
        self.first_start = None

        layers = {'Limites Administrativos':['Regiao 5', 'Região 8', 'Distritos', 'Municípios RMSP', 'Prefeituras Regionais'], 'População':['Cadastro Nacional de Endereços para Fins Estatísticos-CNEFE', 'Densidade Demográfica', 'Censo Demográfico 2000-2010', 'Setor Censitário', 'Área de Ponderação 2000-2010', 'Indice de Desenvolvimento Humano Municipal'], 'Equipamentos':["Abastecimento","Assistência Social","Conectividade Digital","Cultura","Educação","Esporte","Proteção à Mulher","Saúde","Segurança","Serviços","Direitos Humanos"], 'Transporte':["Corredores de Ônibus", "CPTM Estação", "CPTM Linha", "Faixas Exclusivas de Ônibus", "Ferrovia", "Metrô Estação", "Metrô Linha", "Terminais de Ônibus", "Rede Cicloviaria", "Zona Origem Destino", "Ônibus Linha", "Ônibus Ponto"], 'Sistema Viário':["Logradouro", "Geolog - Geocodificação de Logradouros", "Quadra Viaria", "Zona Azul", "Semaforos", "Obras de Arte", "Restrição à circulação de veículos", "Classificação Viária CET"], 'Habitação e Edificação':["Edificação", "Favelas_Loteamentos_Nucleos"], 'Risco ':["Ocorrencias", "Área de Risco Geológico", "Pluviometros", "Área Contaminada_Pontos"], 'Infraestrutura Urbana':["Dutos Transpetro", "Linha Alta Tensão", "Reservatorio Amortecimento", "Torre de Alta Tensão", "Iluminação Pública"], 'Verde e Recursos Naturais':["Arborização Viária", "Parques Municipais", "Unidades de Conservação", "PMMA"], 'Meio Físico':["Carta Geotécnica", "Hidrografia Drenagem", "Curva Mestra Linha", "Curva Intermediaria Linha", "Declividade", "Hidrografia Represa", "Bacia Hidrográfica", "Ponto Cotado Intervia", "Marco Geodésico", "Área de Proteção aos Mananciais", "Hidrografia Ilha", "Restrição Geotécnica"], 'Cadastro':["Cartórios de Registro de Imóveis", "IPTU", "Quadra", "Setor", "Uso Predominante do Solo", "Áreas Cedidas", "Registro Área Pública"], 'Legislação Urbana':["Imoveis Notificados", "Operações Urbanas", "Outorga Onerosa", "PDE_01_Macrozona", "PDE_01A_Urbano e Rural", "PDE_02_Macroarea", "PDE_02A_Setores da Macroarea de Estruturação Metropolitana", "PDE_03_Eixos de Estruturação da Transformação Urbana", "PDE_03A_Eixos Previstos", "PDE_04_ZEIS1", "PDE_04A_ZEIS 2-3-4-5", "PDE_05_Áreas Verdes", "PDE_11_Perímetros de Incentivo", "PDE_Eixos_Ativados_por_Decreto", "Terras Indígenas", "Zoneamento_Lei16402-16_Mapa_01_Principal", "Zoneamento_Lei16402-16_Mapa_02_ZEPEC", "Zoneamento_Lei16402-16_Mapa_03_QA", "Zoneamento_Lei16402-16_Mapa_04_IG", "Bens Tombados", "Decreto Utilidade Publica Interesse Social"]}
        
    # noinspection PyMethodMayBeStatic
    def tr(self, message):
        """Get the translation for a string using Qt translation API.

        We implement this ourselves since we do not inherit QObject.

        :param message: String for translation.
        :type message: str, QString

        :returns: Translated version of message.
        :rtype: QString
        """
        # noinspection PyTypeChecker,PyArgumentList,PyCallByClass
        return QCoreApplication.translate('geosampa_api', message)

    def spurb_add_submenu(self, submenu):
        #
        if self.spurbanismo_menu != None:
            self.spurbanismo_menu.addMenu(submenu)
        else:
            self.iface.addPluginToMenu("&sp_urbanismo-bug", submenu.menuAction())

    def add_action(
        self,
        icon_path,
        text,
        callback,
        enabled_flag=True,
        add_to_menu=True,
        add_to_toolbar=True,
        status_tip=None,
        whats_this=None,
        parent=None):
        """Add a toolbar icon to the toolbar.

        :param icon_path: Path to the icon for this action. Can be a resource
            path (e.g. ':/plugins/foo/bar.png') or a normal file system path.
        :type icon_path: str

        :param text: Text that should be shown in menu items for this action.
        :type text: str

        :param callback: Function to be called when the action is triggered.
        :type callback: function

        :param enabled_flag: A flag indicating if the action should be enabled
            by default. Defaults to True.
        :type enabled_flag: bool

        :param add_to_menu: Flag indicating whether the action should also
            be added to the menu. Defaults to True.
        :type add_to_menu: bool

        :param add_to_toolbar: Flag indicating whether the action should also
            be added to the toolbar. Defaults to True.
        :type add_to_toolbar: bool

        :param status_tip: Optional text to show in a popup when mouse pointer
            hovers over the action.
        :type status_tip: str

        :param parent: Parent widget for the new action. Defaults None.
        :type parent: QWidget

        :param whats_this: Optional text to show in the status bar when the
            mouse pointer hovers over the action.

        :returns: The action that was created. Note that the action is also
            added to self.actions list.
        :rtype: QAction
        """

        icon = QIcon(icon_path)
        action = QAction(icon, text, parent)
        action.triggered.connect(callback)
        action.setEnabled(enabled_flag)

        if status_tip is not None:
            action.setStatusTip(status_tip)

        if whats_this is not None:
            action.setWhatsThis(whats_this)

        if add_to_toolbar:
            # Adds plugin icon to Plugins toolbar
            self.iface.addToolBarIcon(action)

        if add_to_menu:
            self.iface.addPluginToMenu(
                self.menu,
                action)

        self.actions.append(action)

        return action

    def initGui(self):
        """Create the menu entries and toolbar icons inside the QGIS GUI."""
        current_directory = os.path.dirname(os.path.abspath(__file__))
        icon_path = os.path.join(current_directory, "icon.png")
        self.add_action(
            icon_path,
            text=self.tr(u'GeoSampa API'),
            callback=self.run,
            parent=self.iface.mainWindow())

        # will be set False in run()
        self.first_start = True

    def load_fields(self):
        # layers = [l.layer() for l in QgsProject.instance().layerTreeRoot().children()]
        layers = {'Limites Administrativos':['Regiao 5', 'Região 8', 'Distritos', 'Municípios RMSP', 'Prefeituras Regionais']
        , 'População':['Cadastro Nacional de Endereços para Fins Estatísticos-CNEFE', 'Densidade Demográfica', 'Censo Demográfico 2000-2010', 'Setor Censitário', 'Área de Ponderação 2000-2010', 'Indice de Desenvolvimento Humano Municipal']
        , 'Equipamentos':["Abastecimento","Assistência Social","Conectividade Digital","Cultura","Educação","Esporte","Proteção à Mulher","Saúde","Segurança","Serviços","Direitos Humanos"]
        , 'Transporte':["Corredores de Ônibus", "CPTM Estação", "CPTM Linha", "Faixas Exclusivas de Ônibus", "Ferrovia", "Metrô Estação", "Metrô Linha", "Terminais de Ônibus", "Rede Cicloviaria", "Zona Origem Destino", "Ônibus Linha", "Ônibus Ponto"]
        , 'Sistema Viário':["Logradouro", "Geolog - Geocodificação de Logradouros", "Quadra Viaria", "Zona Azul", "Semaforos", "Obras de Arte", "Restrição à circulação de veículos", "Classificação Viária CET"]
        , 'Habitação e Edificação':["Favelas", "Edificação", "Loteamentos", "Nucleos"]
        , 'Risco ':["Ocorrencias", "Área de Risco Geológico", "Pluviometros", "Área Contaminada_Pontos"]
        , 'Infraestrutura Urbana':["Dutos Transpetro", "Linha Alta Tensão", "Reservatorio Amortecimento", "Torre de Alta Tensão", "Iluminação Pública"]
        , 'Verde e Recursos Naturais':["Arborização Viária", "Parques Municipais", "Unidades de Conservação", "PMMA"]
        , 'Meio Físico':["Carta Geotécnica", "Hidrografia Drenagem", "Curva Mestra Linha", "Curva Intermediaria Linha", "Declividade", "Hidrografia Represa", "Bacia Hidrográfica", "Ponto Cotado Intervia", "Marco Geodésico", "Área de Proteção aos Mananciais", "Hidrografia Ilha", "Restrição Geotécnica"]
        , 'Cadastro':["Cartórios de Registro de Imóveis", "IPTU", "Quadra", "Setor", "Uso Predominante do Solo", "Áreas Cedidas", "Registro Área Pública"]
        , 'Legislação Urbana':["Imoveis Notificados", "Operações Urbanas", "Outorga Onerosa", "PDE_01_Macrozona", "PDE_01A_Urbano e Rural", "PDE_02_Macroarea", "PDE_02A_Setores da Macroarea de Estruturação Metropolitana", "PDE_03_Eixos de Estruturação da Transformação Urbana", "PDE_03A_Eixos Previstos", "PDE_04_ZEIS1", "PDE_04A_ZEIS 2-3-4-5", "PDE_05_Áreas Verdes", "PDE_11_Perímetros de Incentivo", "PDE_Eixos_Ativados_por_Decreto", "Terras Indígenas", "Zoneamento_Lei16402-16_Mapa_01_Principal", "Zoneamento_Lei16402-16_Mapa_02_ZEPEC", "Zoneamento_Lei16402-16_Mapa_03_QA", "Zoneamento_Lei16402-16_Mapa_04_IG", "Bens Tombados", "Decreto Utilidade Publica Interesse Social"]
        # , 'Acessibilidade':['Regiao 5', 'Região 8', 'Distritos', 'Municípios RMSP', 'Prefeituras Regionais']
        # , 'Atlas ':['Regiao 5', 'Região 8', 'Distritos', 'Municípios RMSP', 'Prefeituras Regionais']
        # , 'Ambiental':['Regiao 5', 'Região 8', 'Distritos', 'Municípios RMSP', 'Prefeituras Regionais']
        # , 'Economia':['Regiao 5', 'Região 8', 'Distritos', 'Municípios RMSP', 'Prefeituras Regionais']
        # , 'Imagens Satelites':['Regiao 5', 'Região 8', 'Distritos', 'Municípios RMSP', 'Prefeituras Regionais']
        # , 'Mosaico de Ortofotos':['Regiao 5', 'Região 8', 'Distritos', 'Municípios RMSP', 'Prefeituras Regionais']
        # , 'Plantas e Mapas Históricos':['Regiao 5', 'Região 8', 'Distritos', 'Municípios RMSP', 'Prefeituras Regionais']
        # , 'Articulacao de Imagens':['Regiao 5--', 'Região 8', 'Distritos', 'Municípios RMSP', 'Prefeituras Regionais']
        }
        # Recebe a camada selecionada
        choosedLayerIndex = self.dlg._tema.currentIndex()
        if self.dlg._tema.currentIndex() == -1:
            choosedLayerIndex = 0
        choosedLayers = list(layers.keys())[choosedLayerIndex]

        # Carrega os campos possíveis
        # fields = list(choosedLayers.fields())
        # fields_name = ['Regiao 5', 'Região 8', 'Distritos', 'Municípios RMSP', 'Prefeituras Regionais']
        fields_name = layers[choosedLayers]


        # self.dlg._tema.clear()
        # self.dlg._tema.addItems(layers.keys())
        self.dlg._camada.clear()
        self.dlg._camada.addItems(fields_name)

        # self.dlg._setor.setCurrentIndex(self.dlg._setor.findText('qd_setor'))
        # self.dlg._quadra.setCurrentIndex(self.dlg._setor.findText('qd_fiscal'))
        return fields_name

    def fill_tema(self):
        layers = {'Limites Administrativos':['Regiao 5', 'Região 8', 'Distritos', 'Municípios RMSP', 'Prefeituras Regionais'], 'População':['Cadastro Nacional de Endereços para Fins Estatísticos-CNEFE', 'Densidade Demográfica', 'Censo Demográfico 2000-2010', 'Setor Censitário', 'Área de Ponderação 2000-2010', 'Indice de Desenvolvimento Humano Municipal'], 'Equipamentos':["Abastecimento","Assistência Social","Conectividade Digital","Cultura","Educação","Esporte","Proteção à Mulher","Saúde","Segurança","Serviços","Direitos Humanos"], 'Transporte':["Corredores de Ônibus", "CPTM Estação", "CPTM Linha", "Faixas Exclusivas de Ônibus", "Ferrovia", "Metrô Estação", "Metrô Linha", "Terminais de Ônibus", "Rede Cicloviaria", "Zona Origem Destino", "Ônibus Linha", "Ônibus Ponto"], 'Sistema Viário':["Logradouro", "Geolog - Geocodificação de Logradouros", "Quadra Viaria", "Zona Azul", "Semaforos", "Obras de Arte", "Restrição à circulação de veículos", "Classificação Viária CET"], 'Habitação e Edificação':["Edificação", "Favelas_Loteamentos_Nucleos"], 'Risco ':["Ocorrencias", "Área de Risco Geológico", "Pluviometros", "Área Contaminada_Pontos"], 'Infraestrutura Urbana':["Dutos Transpetro", "Linha Alta Tensão", "Reservatorio Amortecimento", "Torre de Alta Tensão", "Iluminação Pública"], 'Verde e Recursos Naturais':["Arborização Viária", "Parques Municipais", "Unidades de Conservação", "PMMA"], 'Meio Físico':["Carta Geotécnica", "Hidrografia Drenagem", "Curva Mestra Linha", "Curva Intermediaria Linha", "Declividade", "Hidrografia Represa", "Bacia Hidrográfica", "Ponto Cotado Intervia", "Marco Geodésico", "Área de Proteção aos Mananciais", "Hidrografia Ilha", "Restrição Geotécnica"], 'Cadastro':["Cartórios de Registro de Imóveis", "IPTU", "Quadra", "Setor", "Uso Predominante do Solo", "Áreas Cedidas", "Registro Área Pública"], 'Legislação Urbana':["Imoveis Notificados", "Operações Urbanas", "Outorga Onerosa", "PDE_01_Macrozona", "PDE_01A_Urbano e Rural", "PDE_02_Macroarea", "PDE_02A_Setores da Macroarea de Estruturação Metropolitana", "PDE_03_Eixos de Estruturação da Transformação Urbana", "PDE_03A_Eixos Previstos", "PDE_04_ZEIS1", "PDE_04A_ZEIS 2-3-4-5", "PDE_05_Áreas Verdes", "PDE_11_Perímetros de Incentivo", "PDE_Eixos_Ativados_por_Decreto", "Terras Indígenas", "Zoneamento_Lei16402-16_Mapa_01_Principal", "Zoneamento_Lei16402-16_Mapa_02_ZEPEC", "Zoneamento_Lei16402-16_Mapa_03_QA", "Zoneamento_Lei16402-16_Mapa_04_IG", "Bens Tombados", "Decreto Utilidade Publica Interesse Social"]}
        self.dlg._tema.clear()
        self.dlg._tema.addItems(layers.keys())
        self.dlg._camada.clear()
        self.dlg._camada.addItems([ 'Distritos', 'Municípios RMSP', 'Regiao 5', 'Região 8', 'Prefeituras Regionais'])

        self.dlg._datum.addItems(['sirgas', 'sad69 (96)'])
        self.dlg._formato.addItems(['shp', 'gpkg', 'dxf', 'dwg'])

    def unload(self):
        """Removes the plugin menu item and icon from QGIS GUI."""
        for action in self.actions:
            self.iface.removePluginMenu(
                self.tr(u'&GEOSAMPA api'),
                action)
            self.iface.removeToolBarIcon(action)

    def read_api(self):
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


    def run(self):
        """Run method that performs all the real work"""

        # Create the dialog with elements (after translation) and keep reference
        # Only create GUI ONCE in callback, so that it will only load when the plugin is started
        if self.first_start == True:
            self.first_start = False
            self.dlg = geosampa_apiDialog()


        # layers = ['Limites Administrativos','População','Equipamentos','Transporte','Sistema Viário','Habitação e Edificação','Risco ','Infraestrutura Urbana','Verde e Recursos Naturais','Meio Físico','Cadastro','Legislação Urbana','Acessibilidade','Atlas ','Ambiental','Economia','Imagens Satelites','Mosaico de Ortofotos','Plantas e Mapas Históricos','Articulacao de Imagens']
        # self.dlg._tema.clear()
        # self.dlg._tema.addItems([layer for layer in layers])

        # FIELDS OPTION
        self.fill_tema()
        self.dlg._tema.activated[str].connect(self.load_fields)
        # self.dlg._load_fields.clicked.connect(self.load_fields)
        # self.dlg._tema.clicked.connect(self.load_fields)

        # show the dialog
        self.dlg.show()
        # Run the dialog event loop
        result = self.dlg.exec_()
        # See if OK was pressed
        if result:
            # Do something useful here - delete the line containing pass and
            # substitute with your code.
            tema = self.dlg._tema.currentText()
            camada = self.dlg._camada.currentText()
            datum = self.dlg._datum.currentText()
            formato = self.dlg._formato.currentText()

            print(camada)

            cwd_plugin = (os.path.sep).join(os.path.dirname(__file__).replace('/', '\\').split('\\'))
            print(cwd_plugin)

            if camada == 'Distritos':
                # iface.addVectorLayer((os.path.sep).join([cwd_plugin, 'layers', 'SIRGAS_SHP_distrito_polygon.shp']), 'Distritos', 'ogr')
                v = QgsVectorLayer((os.path.sep).join([cwd_plugin, 'layers', 'SIRGAS_SHP_distrito_polygon.shp']), 'Distritos', 'ogr')
                QgsProject.instance().addMapLayer(v)
                # print((os.path.sep).join([cwd_plugin, 'layers', 'SIRGAS_limites_municipais.shp']), 'Distritos', 'ogr')
                
            else:
                v = QgsVectorLayer((os.path.sep).join([cwd_plugin, 'layers', 'SIRGAS_favela.shp']), 'Favelas', 'ogr')
                QgsProject.instance().addMapLayer(v)
                # iface.addVectorLayer((os.path.sep).join([cwd_plugin, 'layers', 'SIRGAS_limites_municipais.shp']), 'RMSP', 'ogr')
                # pass