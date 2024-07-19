const AWS = require('aws-sdk');
const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();




const RequestInfoHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'AccountLinkIntent';
    },
    async handle(handlerInput) {
        const userId = handlerInput.requestEnvelope.session.user.userId;
        const userPoolId = 'your-user-pool-id'; // Replace with your user pool ID
        const clientId = 'your-app-client-id'; // Replace with your app client ID

        const params = {
            UserPoolId: userPoolId,
            ClientId: clientId,
            Username: userId
        };

        try {
            const response = await cognitoIdentityServiceProvider.adminLinkProviderForUser(params).promise();
            const linkingResponse = handlerInput.responseBuilder
                .addLinkAccountCard()
                .withLinkAccountRequest({
                    destinationUserId: userId,
                    userPoolId: userPoolId,
                    clientId: clientId
                })
                .getResponse();

            return linkingResponse;
        } catch (err) {
            console.log(err);
            return handlerInput.responseBuilder
                .speak('Sorry, I could not initiate account linking.')
                .getResponse();
        }
    }     
}

module.exports = RequestInfoHandler
