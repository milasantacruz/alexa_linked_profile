Pasos para reproducir el Skill
# Alexa 
- Crear una cuenta en Alexa App
- Crear una cuenta en Alexa developer
- El email debe ser el mismo para poder debuggear correctamente el skill y la funcionalidad de linkAccount
- En la consola de Alexa Developer crea una nueva Skill
![[createSkill00.png]]

![[createSkill01.png]]
![[createSkill02.png]]


- En la consola de Alexa Developer elije tu nueva Skill y configurar el nombre de invocacion del skill por: *lucia te cuida*
![[createSkill03.png]]
- Crear un Intent *RequestInfo* con los siguientes Utterances: 
![[intents.png]]
![[error_utterances.png]]

- Crear un *Slot* de tipo { perfil } con los siguientes sinonimos
![[slots.png]]
![[utterances_sy.png]]

# VS CODE

- Instalar la extencion de VS Code

	*Nombre: Alexa Skills Kit (ASK) Toolkit*
	*ID: ask-toolkit.alexa-skills-kit-toolkit*
	*Descripción: Build and manage Alexa skills using Visual Studio Code*
	*Versión: 2.16.0*
	*Editor: Amazon Alexa*
	*Vínculo de VS Marketplace: https://marketplace.visualstudio.com/items?itemName=ask-toolkit.alexa-skills-kit-toolkit*

- Instalar  Alexa Skills Kit Command Line Interface (ASK CLI)
	`npm install -g ask-cli`.
- Clonar el repositorio:
![[export code.png]]
- Reemplazar la carpeta lambda con la carpeta lambda de este repositorio
- publica los cambios con `git push`
# Cognito

- Ingresar las credenciales del UserPool de Cognito
![[linkingAccount.png]]

