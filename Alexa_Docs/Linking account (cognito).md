
![[account-linking-code-token-flow._TTH_.png]]
## Linked Profile (Account Linking) Sample Skill
https://github.com/alexa-samples/skill-sample-nodejs-linked-profile

## Amazon Cognito for Alexa Skills User Management
https://aws.amazon.com/blogs/compute/amazon-cognito-for-alexa-skills-user-management/


Example:

1. **Implement the Account Linking Intent Handler** :
2. 1. We import the AWS SDK and create an instance of the 
    
    ```
    CognitoIdentityServiceProvider
    ```
    
     client.
     https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html
    
2. In the 
    
    ```
    AccountLinkIntentHandler
    ```
    
    , we retrieve the user's ID from the session object ( 
    
    ```
    handlerInput.requestEnvelope.session.user.userId
    ```
    
    ).
    
3. We define the parameters for the 
    
    ```
    adminLinkProviderForUser
    ```
    
     API call, which includes the user pool ID, app client ID, and the user's ID.
    
4. We call the 
    
    ```
    adminLinkProviderForUser
    ```
    
     method using the AWS SDK, which returns a promise with the response.
    
5. If the call is successful, we construct a response with the 
    
    ```
    addLinkAccountCard
    ```
    
     and 
    
    ```
    withLinkAccountRequest
    ```
    
     methods, which will prompt the user to link their account.
    
6. If there's an error, we return a default error message.
    


```
const AWS = require('aws-sdk');
const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

const AccountLinkIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AccountLinkIntent';
    },
    async handle(handlerInput) {
        const userId = handlerInput.requestEnvelope.session.user.userId;
        const userPoolId = 'your-user-pool-id'; // Replace with your user pool ID
        const clientId = 'your-app-client-id'; // Replace with your app client ID

        const params = {
            UserPoolId: userPoolId,
            ClientId: clientId,
            Username: userId
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

            return linkingResponse;
        } catch (err) {
            console.log(err);
            return handlerInput.responseBuilder
                .speak('Sorry, I could not initiate account linking.')
                .getResponse();
        }
    }
};

```

7. **Add the Account Linking Intent Handler to Your Skill** :

```
const Alexa = require('ask-sdk-core');

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        AccountLinkIntentHandler,
        // Add other intent handlers here
    )
    .lambda();

```

When a user invokes the "AccountLinkIntent" in your Alexa skill, the 

```
AccountLinkIntentHandler
```

 will be triggered, and the user will be prompted to link their account with Amazon Cognito. After successful account linking, you can retrieve the user's profile information and other data from Amazon Cognito in your skill's logic.