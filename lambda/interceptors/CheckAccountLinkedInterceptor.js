const Alexa = require('ask-sdk-core');
const AWS = require('aws-sdk');

const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

const CheckAccountLinkedInterceptor = {
    async process(handlerInput) {
        const accessToken = handlerInput.requestEnvelope.session.user.accessToken;

        if (!accessToken) {
            return handlerInput.responseBuilder
                .addDirectivePayload({
                    type: 'Connections.SendRequest',
                    token: 'YOUR_TOKEN_HERE',
                    request: {
                        type: 'ConnectionRequest',
                        name: 'Lucia te cuida',
                        payload: {
                            userPoolId: 'YOUR_USER_POOL_ID',
                            clientId: 'YOUR_CLIENT_ID'
                        }
                    }
                })
                .getResponse();
        }
    }
};