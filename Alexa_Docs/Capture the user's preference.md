1) Set up an intent to capture the user's preference
```
{
  "interactionModel": {
    "languageModel": {
      "intents": [
        {
          "name": "SetUnitPreferenceIntent",
          "slots": [
            {
              "name": "unit",
              "type": "AMAZON.Unit"
            }
          ],
          "samples": [
            "Set my unit preference to {unit}",
            "I prefer {unit}"
          ]
        }
      ]
    }
  }
}

```

2. **Handle the intent and store the preference in session attributes** :


```
const SetUnitPreferenceIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'SetUnitPreferenceIntent';
    },
    handle(handlerInput) {
        const unitPreference = handlerInput.requestEnvelope.request.intent.slots.unit.value;
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        sessionAttributes.preferredUnit = unitPreference;
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

        const speechText = `Okay, I've set your preferred unit to ${unitPreference}.`;
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
```

3. **Retrieve and use the preference in other intents** :

```
const OtherIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'OtherIntent';
    },
    handle(handlerInput) {
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const preferredUnit = sessionAttributes.preferredUnit || 'default unit';

        // Use the preferredUnit in your skill logic
        const speechText = `Okay, processing your request using ${preferredUnit} as the unit.`;
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

```

In this example, the 

```
SetUnitPreferenceIntentHandler
```

 stores the user's preferred unit in the session attributes. The 

```
OtherIntentHandler
```

 retrieves the stored preference from the session attributes and uses it in the skill's logic.

Note that session attributes are temporary and will be cleared when the user's session ends or after a certain period of inactivity. If you need to persist user preferences across multiple sessions, you should consider using persistent attributes or a separate data store like DynamoDB or S3.
