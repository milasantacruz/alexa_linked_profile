const AWS = require('aws-sdk');
const CheckAccountLinkedHandler = require('./CheckAccountLinkedHandler');

const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

const GetProfileIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'RequestInfo';
    },
    async handle(handlerInput) {
        console.log('GetProfileIntentHandler:::');
        const accessToken = handlerInput.requestEnvelope.session.user.accessToken;

        if (!accessToken) {
            return CheckAccountLinkedHandler.handle(handlerInput);
        }

        const params = {
            AccessToken: accessToken
        };

        try {
            const userData = await cognitoIdentityServiceProvider.getUser(params).promise();
            const { Username, UserAttributes } = userData.UserAttributes;
            const name = UserAttributes.find(attr => attr.Name === 'name').Value;
            const email = UserAttributes.find(attr => attr.Name === 'email').Value;
            const address = UserAttributes.find(attr => attr.Name === 'address').Value;

            const speechText = `Your Lucia profile is: Name: ${name}, Email: ${email}, Address: ${address}`;
            return handlerInput.responseBuilder
                .speak(speechText)
                .getResponse();
        } catch (err) {
            console.log('Error:', err);
            const speechText = 'Sorry, I could not retrieve your profile information. Please try again later.';
            return handlerInput.responseBuilder
                .speak(speechText)
                .getResponse();
        }
    }
};

module.exports = GetProfileIntentHandler;