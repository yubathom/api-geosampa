---
meta:
  - name: API Geosampa
    content: Dados abertos portal Geosampa. Hackatona Mundo Geo.
  - name: API, KML, SHAPEFILE, Prefeitura, São Paulo
---

# Apresentação

<!-- <CaceteDeAgulha msg="Cacete de agulha"/> -->

Em ambientes de desenvolvimento de projetos urbanos, no contexto das empresas e secretarias municipais, dados do Geosampa podem ser acessados fornecidos pelo serviço WFS. 

Porém, este modelo apresenta limitações de desempenho em aplicações GIS (QGIS e ArcGis). Por conta destas limitações, uma prática comum nas empresas municipais, é baixar manualmente os arquivos a partir do formulário disponibilizado no site. 

A manutenção desses dados em ambientes locais é, portanto, um trabalho muito dispendioso. Requer uma atividade repetitiva, sendo necessário a criação de aplicações de "scrapping" e robôs para manter estas bases atualizadas localmente. A presente proposta pretende automatizar a distribuição destes arquivos com uma estratégia diferente do serviço atualmente implementado. Ela mantém o modelo atual de distribuição de arquivos estáticos com foco na documentação e padronização dos arquivos hoje a disposição pelos formulários.

A proposta pretende criar um protótipo de API a partir dos arquivos disponibilizados no Geosampa e um site de documentação desta API. Além disso, faz parte da proposta a criação de exemplos de atualizações automatizadas de bases em ambientes locais.

A documentação e a padronização do serviço automatizaria as atualizações de bases em diversas empresas e ONG's. Poderia ainda ser integrado a gerenciadores de aplicações como NPM (javascript) e PIP (python) e facilitaria o desenvolvimento de plugins para QGIS de criação e atualização de bases de shapes. Se criada e mantida, eliminaria a necessidade de desenvolvimento (e os acessos) de bots de extração de dados e facilitaria o desenvolvimento e a atualização de sites que dependem dos dados fornecidos pelo Geosampa.

::: tip Nota
Este site faz parte de proposta para a [Hackatona do GeoSampa](https://mundogeoconnect.com/2019/geosampa/) realizada em maio de 2019.
:::
