const AWS = require('aws-sdk');
const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

const RequestInfoHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'RequestInfo';
    },
    async handle(handlerInput) {
      console.log('RequestInfoHandler::::: RequestInfoHandler');
      
      const userId = handlerInput.requestEnvelope.session.user.userId;
      const userPoolId ="us-east-1_MHOLeGbES"; // Replace with your user pool ID
      const clientId = "odrahfu5lgbutk3p6p18e8bgu"; // Replace with your app client ID
      console.log(userPoolId);
      console.log(clientId);
      console.log(userId);

        const params = 
        {
            DestinationUser: {
                ProviderAttributeName: 'Cognito', // This should be 'Cognito' for Cognito user pools
                ProviderAttributeValue: userId, // The user ID of the user in your Cognito user pool
                ProviderName: 'Cognito' // This should be 'Cognito' for Cognito user pools
            },
            UserPoolId: userPoolId // The ID of your Cognito user pool
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
            console.log(`response:${response}`)
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
