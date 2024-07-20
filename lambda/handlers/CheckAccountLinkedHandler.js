const utils = require('../lib/utils')

const CheckAccountLinkedHandler = {
  canHandle (handlerInput) {
    return !utils.isAccountLinked(handlerInput)
  },
  handle (handlerInput) {
    console.log('CheckAccountLinkedHandler::::: handle')
    console.log('Request Type:', handlerInput.requestEnvelope.request.type);

    const requestAttributes = handlerInput.attributesManager.getRequestAttributes()
    const speakOutput = requestAttributes.t('NEED_TO_LINK_MESSAGE', 'SKILL_NAME')
    return handlerInput.responseBuilder.
      speak(speakOutput)
      .withLinkAccountCard({
        userPoolId: process.env.USER_POOL_ID, // Replace with your Amazon Cognito User Pool ID
        clientId: process.env.APP_CLIENT_ID // Replace with your Amazon Cognito App Client ID
      })
      .getResponse()
  }
}

module.exports = CheckAccountLinkedHandler
