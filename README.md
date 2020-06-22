# Detector de gases inflamáveis

![](https://img.shields.io/github/issues/nbezequiel/flamable-mqtt-broker?style=plastic)

* Colaboradores:
	+  Ezequiel Barbosa Neves
	+ Wallace Félix da Silva
  </br>

#### Descrição

- Este broker utiliza o protocolo MQTT para comunicação com dispositivos inteligentes. O objetivo do mesmo é viabilizar a comunicação ente dispositivos detectores de gases inflamáveis e um seviço de mensagens SMS. Desenvolvido como atividade avaliativa da disciplina de Objetos inteligentes conectados - Universidade Presbiteriana Mackenzie.
  </br>
  
#### Funcionamento do Broker
* O servidor MQTT implementado utilizando o pacote mosca para npm, é iniciado e passa a escutar, na porta 1883, publicações subscrições nos tópicos de alarm e log. 
* Um serviço  de comunicação com o SNS(Serviço de Notificação da AWS),se subscreve passa a receber as mensagens de alarme do broker. 
* A cada mensagem recebida no tópico de alarme o serviço de comunicação requisita ao SNS o envio de uma mensagem do tipo SMS para um número pré-cadastrado ou informado em um tópico AWS.
* Erros ou mensagens de sucesso na integração com o SNS são publicados no tópico de log e ficam disponíveis aos gerentes da solução.

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
</br>

#### Dependências de desenvolvimento

* AWS SNS SDK -> [documentação](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html)
* NPM Mosca -> [documentação](https://www.npmjs.com/package/mosca) 
