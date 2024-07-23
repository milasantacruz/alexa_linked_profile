To handle session attributes in a locally running Alexa skill for testing and development purposes, you can use the 

```
attributesManager
```

 provided by the Alexa Skills Kit SDK. Here's an example of how you can do it:


```
const Alexa = require('ask-sdk-core');
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        // Get the current session attributes
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        // Set a new session attribute
        sessionAttributes.lastLaunchTime = new Date().toISOString();

        // Save the updated session attributes
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

        const speechText = 'Welcome to my Alexa Skill!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
```

In this example, we're retrieving the current session attributes using 

```
handlerInput.attributesManager.getSessionAttributes()
```

. We then set a new attribute 

```
lastLaunchTime
```

 with the current timestamp. Finally, we save the updated session attributes using 

```
handlerInput.attributesManager.setSessionAttributes(sessionAttributes)
```

.

# Access session attributes in other handlers :

```
const OtherIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'OtherIntent';
    },
    handle(handlerInput) {
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const lastLaunchTime = sessionAttributes.lastLaunchTime;

        const speechText = `Last launch time was ${lastLaunchTime}`;
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

```

In this example, we retrieve the 

```
lastLaunchTime
```

 attribute from the session attributes in the 

```
OtherIntentHandler
```

.

By using the 

```
attributesManager
```

, you can persist data across multiple requests within the same skill session, which is useful for maintaining state and context during local testing and development.

Remember that session attributes are temporary and will be cleared when the skill session ends or after a certain period of inactivity.

