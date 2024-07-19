const log = require("../lib/log");


const AccountLinkingInterceptor = {
    async process(handlerInput) {
        log.info('AccountLinkingInterceptor:::', handlerInput.requestEnvelope);

      const { request } = handlerInput.requestEnvelope;
      log.info('AccountLinkingInterceptor:::', request);
      if (request.type === 'AlexaSkillEvent.ProvideLinkToken') {
        try {
          // Handle successful account linking
          const { accessToken, refreshToken } = await handleAccountLinking(request.linkToken);
          // Store tokens securely and update session attributes
          log.info('AccountLinkingInterceptor:::', accessToken, refreshToken);
        } catch (error) {
          // Handle account linking failure
          console.error('Account linking failed:', error);
          return handlerInput.responseBuilder
            .speak('Sorry, there was an issue linking your account. Please try again later.')
            .getResponse();
        }
      }
    }
  };
  
  function handleAccountLinking(linkToken) {
    // Exchange the link token for access and refresh tokens
    // using your authentication service (e.g., Amazon Cognito)
    // and return the tokens
    log.info('AccountLinkingInterceptor:::', linkToken);
  }