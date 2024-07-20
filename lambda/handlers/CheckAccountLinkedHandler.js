const utils = require('../lib/utils')

const CheckAccountLinkedHandler = {
  canHandle(handlerInput) {
    return !utils.isAccountLinked(handlerInput);
  },
  handle(handlerInput) {
    console.log('CheckAccountLinkedHandler::::: handle');
    console.log('Request Type:', handlerInput.requestEnvelope.request.type);

    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const speakOutput = requestAttributes.t('NEED_TO_LINK_MESSAGE', 'SKILL_NAME');
    const userPoolId ="us-east-1_MHOLeGbES"; // Replace with your user pool ID
    const clientId = "odrahfu5lgbutk3p6p18e8bgu"; // Replace with your app client ID

    console.log('User Pool ID:', userPoolId);
    console.log('Client ID:', clientId);
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .withLinkAccountCard({
        userPoolId,
        clientId
      })
      .getResponse();
  }
};

module.exports = CheckAccountLinkedHandler;
