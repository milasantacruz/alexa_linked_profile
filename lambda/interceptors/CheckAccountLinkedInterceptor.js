


const CheckAccountLinkedInterceptor = {
    process(handlerInput) {
        console.log("CheckAccountLinkedInterceptor");
        const accessToken = handlerInput.requestEnvelope.session.user.accessToken;

        if (!accessToken) {
            console.log("CheckAccountLinkedInterceptor::: no token");
           
            const userPoolId ="us-east-1_MHOLeGbES"; // Replace with your user pool ID
            const clientId = "odrahfu5lgbutk3p6p18e8bgu"
            return handlerInput.responseBuilder
                .addDirectivePayload({
                    type: 'Connections.SendRequest',
                    token:  'static-test-token',
                    request: {
                        type: 'ConnectionRequest',
                        name: 'Lucia te cuida',
                        payload: {
                            userPoolId: userPoolId,
                            clientId: clientId
                        }
                    }
                })
                .getResponse();
        }
    }
};

module.export = CheckAccountLinkedInterceptor;