Título*: Modelo de distribuição de arquivos estáticos do Geosampa

Palavras-chave (separar por vírgulas)*: Geosampa, API, arquivos estáticos, JAMstack, Nodejs

Problema a ser resolvido (descreva de forma objetiva os desafios que seu projeto se propôs a superar)*:
Em ambientes de desenvolvimento de projetos urbanos, no contexto das empresas e secretarias municipais, dados do Geosampa podem ser acessados fornecidos pelo serviço WFS.. Porém, este modelo apresenta limitações de desempenho em aplicações GIS (QGIS e ArcGis). Por conta destas limitações, uma prática comum nas empresas municipais, é baixar manualmente os arquivos a partir do formulário disponibilizado no site. A manutenção desses dados em ambientes locais é, portanto, um trabalho muito dispendioso. Requer muitas vezes uma atividade repetitiva, sendo necessário a criação de aplicações de "scrapping" e robôs para manter estas bases atualizadas localmente. A presente proposta pretende automatizar a distribuição destes arquivos com uma estratégia diferente do serviço atualmente implementado (WFS/..). Ela mantém o modelo atual de distribuição de arquivos estáticos com foco na documentação e padronização dos arquivos hoje a disposição pelos formulários.
_______________________
Solução encontrada/Tecnologia(s) utilizada(s) (Descreva de forma objetiva a solução encontrada para superar os desafios ou resolver o problema)*:
A proposta pretende criar um protótipo de API a partir dos arquivos disponibilizados no Geosampa e um site de documentação desta API. Além disso, faz parte da proposta a criação de exemplos de atualizações automatizadas de bases em ambientes locais.

_______________________
Resultados e/ou benefícios esperados: (descreva de forma objetiva os resultados encontrados): * Maior alcance e distribuição dos dados na web. A documentação e a padronização do serviço automatizaria as atualizações de bases em diversas empresas e ONG's. Poderia ainda ser integrado a gerenciadores de aplicações como NPM (javascript) e PIP (python) e facilitaria o desenvolvimento de plugins para QGIS de criação e atualização de bases de shapes. Se criada e mantida, eliminaria a necessidade de desenvolvimento (e os acessos) de bots de extração de dados e facilitaria o desenvolvimento e a atualização de sites que dependem dos dados fornecidos pelo Geosampa.


Link:

Nome completo*:

Instituição/Empresa*:

Cargo/Setor*:

E-mail*:


. api de arquivos do geosampa


. distribuição de dados
. gerenciadores de pacotes (npm e pip)
. descentralização
. distribuição dos dados
. pipelines de atualização
 / necessidade de criar bots de extração (lotes)
. e por que não uma api?
/ solicitação excessiva para o servidor

características:
. integrado a compiladores modernos (npm, pip)
. automatização de builds (jenkins?)
. publicação modular
. documentação
. integrado ao qgis (pip)

referências
vector tiles generater pipeline
https://geovation.github.io/build-your-own-static-vector-tile-pipeline

https://github.com/pmarkun/geosampa-iptu

https://mundogeoconnect.com/2019/geosampa/