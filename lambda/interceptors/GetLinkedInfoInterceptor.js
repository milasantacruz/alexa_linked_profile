const log = require('../lib/log')
const cognito = require('../lib/cognito')
const utils = require('../lib/utils')

const GetLinkedInfoInterceptor = {
  
  async process (handlerInput) {
    const userData = await cognito.getUserData(handlerInput.requestEnvelope.session.user.accessToken)
    log.info('GetLinkedInfoInterceptor: getUserData: ', userData.Username)
    if (utils.isAccountLinked(handlerInput)) {
      log.info('GetLinkedInfoInterceptor::: IS LINKED: ', userData.Username)
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes()
      if (userData.Username !== undefined) {
        sessionAttributes.auth = true
        sessionAttributes.emailAddress = cognito.getAttribute(userData.UserAttributes, 'email')
        sessionAttributes.userName = userData.Username
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes)
      } else {
        sessionAttributes.auth = false
        log.error('GetLinkedInfoInterceptor:::No user data was found.')
      }
    }else{
      log.error('GetLinkedInfoInterceptor:::NOT LINKED.')  
    }
  }
}

module.exports = GetLinkedInfoInterceptor
