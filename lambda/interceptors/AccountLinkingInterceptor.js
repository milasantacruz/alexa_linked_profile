const log = require("../lib/log");
const AWS = require('aws-sdk');
const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

const AccountLinkingInterceptor = {
    async process(handlerInput) {
        log.info('AccountLinkingInterceptor:::EVENT', handlerInput.requestEnvelope);

      const { request } = handlerInput.requestEnvelope;
      log.info('AccountLinkingInterceptor:::TYPE', request.type);
      if (request.type === 'AlexaSkillEvent.ProvideLinkToken') {
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
  
    async function handleAccountLinking(linkToken) {
        const params = {
          ClientId: 'your-app-client-id', // Replace with your Amazon Cognito App Client ID
          LinkToken: linkToken
        };
      
        try {
          const response = await cognitoIdentityServiceProvider.adminInitiateAuthWithLinkToken(params).promise();
      
          const { AuthenticationResult } = response;
          const { AccessToken, RefreshToken } = AuthenticationResult;
      
          return { accessToken: AccessToken, refreshToken: RefreshToken };
        } catch (error) {
          console.error('Account linking failed:', error);
          throw error;
        }
      }

  module.exports = AccountLinkingInterceptor;