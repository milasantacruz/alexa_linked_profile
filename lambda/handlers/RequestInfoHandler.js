const Alexa = require('ask-sdk-core');
const AWS = require('aws-sdk');

const RequestInfoHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RequestInfo';
    },
    async handle(handlerInput) {
        const accessToken = handlerInput.requestEnvelope.context.System.user.accessToken;
        
        if (!accessToken) {
            return handlerInput.responseBuilder
                .speak('Please link your account to use this skill.')
                .withLinkAccountCard()
                .getResponse();
        }

        try {
            const userData = await getUserProfile(accessToken);
            const speechText = `Your profile name is ${userData.name} and your email is ${userData.email}.`;
            
            return handlerInput.responseBuilder
                .speak(speechText)
                .getResponse();
        } catch (error) {
            return handlerInput.responseBuilder
                .speak('There was an error fetching your profile information.')
                .getResponse();
        }
    }
}

async function getUserProfile(accessToken) {
    const cognito = new AWS.CognitoIdentityServiceProvider();
    
    // Assuming accessToken is the token to get the user details
    const params = {
        AccessToken: accessToken
    };

    const user = await cognito.getUser(params).promise();
    
    const attributes = user.UserAttributes.reduce((acc, attr) => {
        acc[attr.Name] = attr.Value;
        return acc;
    }, {});

    return {
        name: attributes['name'] || 'Unknown',
        email: attributes['email'] || 'Unknown'
    };
}

module.exports = RequestInfoHandler
