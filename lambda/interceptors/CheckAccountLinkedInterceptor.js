const { v4: uuidv4 } = require('uuid');
const log = require('../lib/log')

/*
The 
addDirectivePayload
 method is used to add a directive to the response sent 
 back to the Alexa service. Directives are instructions that tell 
 the Alexa service to perform specific actions, such as displaying 
 a card or opening a web browser.
*/

/*
withLinkAccountCard is a specific directive used to display an account 
linking card for third-party services.
*/

const CheckAccountLinkedInterceptor = {
    async process(handlerInput) {
        log.info("CheckAccountLinkedInterceptor:::ACCESSTOKEN", handlerInput.requestEnvelope.session.user.accessToken);

        const accessToken = handlerInput.requestEnvelope.session.user.accessToken;

        if (!accessToken) {
            const token = uuidv4();
            const userPoolId ="us-east-1_MHOLeGbES"; // Replace with your user pool ID
            const clientId = "odrahfu5lgbutk3p6p18e8bgu"
            log.info("CheckAccountLinkedInterceptor:::NOTOKEN", token);
            //DOCS:
            //http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/index.html#directive
            //http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.connections.sendrequestdirective.html
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
                .withShouldEndSession(true)
                .getResponse();
        }
    }
};

module.exports = CheckAccountLinkedInterceptor;