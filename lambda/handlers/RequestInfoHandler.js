import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { info } from '../lib/log';
const RequestInfoHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'RequestInfo';
    },
    async handle(handlerInput) {
        info("reqInfoHandler:::");
        const accessToken = handlerInput.requestEnvelope.context.System.user.accessToken;
        
        if (!accessToken) {
            info("reqInfoHandler:::NOTOKEN");
            return handlerInput.responseBuilder
                .speak('Please link your account to use this skill.')
                .withLinkAccountCard()
                .getResponse();
        }

        try {
            const userData = await getUserProfile(accessToken);
            const speechText = `Your profile name is ${userData.name} and your email is ${userData.email}.`;
            info("reqInfoHandler:::", userData);
            return handlerInput.responseBuilder
                .speak(speechText)
                .getResponse();
        } catch (error) {
            return handlerInput.responseBuilder
                .speak('There was an error fetching your profile information.')
                .getResponse();
        }
    }
};

async function getUserProfile(accessToken) {
    info("getUserProfile:::", accessToken);
    const cognito = new CognitoIdentityServiceProvider();
    
    // Assuming accessToken is the token to get the user details
    const params = {
        AccessToken: accessToken
    };

    const user = await cognito.getUser(params).promise();
    info("getUser:::", user);
    const attributes = user.UserAttributes.reduce((acc, attr) => {
        acc[attr.Name] = attr.Value;
        return acc;
    }, {});

    return {
        name: attributes['name'] || 'Unknown',
        email: attributes['email'] || 'Unknown'
    };
}

export default RequestInfoHandler
