# Detector de gases inflamáveis

![](https://img.shields.io/github/issues/nbezequiel/flamable-mqtt-broker?style=plastic) ![](https://img.shields.io/github/package-json/v/nbezequiel/flamable-mqtt-broker) ![](https://img.shields.io/github/v/release/nbezequiel/flamable-mqtt-broker)

** Colaboradores: **

- Ezequiel Barbosa Neves
- Wallace Félix da Silva
  </br>

#### Descrição

- Este broker utiliza o protocolo MQTT para comunicação com dispositivos inteligentes. O objetivo do mesmo é viabilizar a comunicação ente dispositivos detectores de gases inflamáveis e um seviço de mensagens SMS. Desenvolvido como atividade avaliativa da disciplina de Objetos inteligentes conectados - Universidade Presbiteriana Mackenzie.
  </br>

#### Tópicos

| Tópico            | Descrição                                        |
| ----------------- | ------------------------------------------------ |
| `/alarm/sounding` | Envio e recepção de alertas de risco de incêndio |
| `/alarm/log`      | Envio e recepção de logs da aplicação            |

</br>

#### Execução

`$ npm install`

`$ nohup node broker.js`

`$ node snsComunicator.js`
