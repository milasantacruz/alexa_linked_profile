const { v4: uuidv4 } = require('uuid');
const log = require('../lib/log')


const CheckAccountLinkedInterceptor = {
    async process(handlerInput) {
        log.info("CheckAccountLinkedInterceptor:::ACCESSTOKEN", handlerInput.requestEnvelope.session.user.accessToken);

        const accessToken = handlerInput.requestEnvelope.session.user.accessToken;

        if (!accessToken) {
            const token = uuidv4();
            const userPoolId ="us-east-1_MHOLeGbES"; // Replace with your user pool ID
            const clientId = "odrahfu5lgbutk3p6p18e8bgu"
            log.info("CheckAccountLinkedInterceptor:::NOTOKEN", token);

            return handlerInput.responseBuilder
                .addDirectivePayload({
                    type: 'Connections.SendRequest',
                    token,
                    request: {
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
    }
};

module.exports = CheckAccountLinkedInterceptor;