const log = require("../lib/log");


const AccountLinkingInterceptor = {
    async process(handlerInput) {
        log.info('AccountLinkingInterceptor:::EVENT', handlerInput.requestEnvelope);

      const { request } = handlerInput.requestEnvelope;
      log.info('AccountLinkingInterceptor:::TYPE', request.type);
      if (request.type === 'IntentRequest') {
        try {
          // Handle successful account linking
          const { accessToken, refreshToken } = await handleAccountLinking(request.linkToken);
          // Store tokens securely and update session attributes
          log.info('AccountLinkingInterceptor:::TOKEN', accessToken, refreshToken);
        } catch (error) {
          // Handle account linking failure
          log.info('Account linking failed:::', error);

          return handlerInput.responseBuilder
            .speak('Sorry, there was an issue linking your account. Please try again later.')
            .getResponse();
        }
      }else{
        log.info('AccountLinkingInterceptor:::', 'no account linking');
      }
      }
    };
  
  function handleAccountLinking(linkToken) {
    // Exchange the link token for access and refresh tokens
    // using your authentication service (e.g., Amazon Cognito)
    // and return the tokens
    log.info('AccountLinkingInterceptor:::', linkToken);
  }

  module.exports = AccountLinkingInterceptor;