# 1) CheckAccountLinkedInterceptor

CheckAccountLinkedInterceptor deberia verificar si la session tiene un `accesToken`, es decir si el usuario tiene su cuenta vinculada, Si no la tiene deberia dirigir al usuario al UI de Cognito para que ingrese sus credenciales. lo cual no esta sucediendo

```
const CheckAccountLinkedInterceptor = {

    async process(handlerInput) {
log.info("CheckAccountLinkedInterceptor:::ACCESSTOKEN",handlerInput.requestEnvelope.session.user.accessToken);

const accessToken = handlerInput.requestEnvelope.session.user.accessToken;

        if (!accessToken) {
            const token = uuidv4();
            const userPoolId ="us-east-1_MHOLeGbES"; 
            const clientId = "odrahfu5lgbutk3p6p18e8bgu"
            log.info("CheckAccountLinkedInterceptor:::NOTOKEN", token);
		   return handlerInput.responseBuilder
                .addDirective({
                    type: 'Connections.SendRequest',
                    token,
                    payload: {
                        type: 'ConnectionRequest',
                        name: 'Lucia te cuida',
                        payload: {
                            userPoolId,
                           clientId
                        }
                    }
                })
                .getResponse();
        }
        return handlerInput.responseBuilder.getResponse();
    }
};

module.exports = CheckAccountLinkedInterceptor;
```

- En los los de la seccion TEST se ve que la *Directiva* se ejecuta, pero en mi app Nunca me apre nada. 

![[no_card.png]]
 - En los Logs tambien se puede ver la session no tiene `session.user.accessToken`
 ![[no-token.png]]

En cambio cuando voy y vinculo la cuenta manualmente desde Alexa.app y vuelvo a ejecutar la consulta, ya noto como se agrega el accesToken:
![[Sitoken.png]]