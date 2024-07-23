The Alexa Skills Kit provides different types of cards:

- A `Simple` card displays plain text. You provide text for the card title and content.
- A `Standard` card also displays plain text, but can include an image. You provide the text for the title and content, and the URL for the image to display.
- A `LinkAccount` card is a special card type only used with account linking. This card lets users start the account linking process.
- An `AskForPermissionsConsent` card is sent to the Alexa app when a skill requires the customer to grant specific permissions.

To send a card to the Alexa app, you include the card in the _response_ your service sends back to Alexa. You typically only return cards when responding with the information the user requested. Other responses, such as questions to ask the user for more information do not normally include cards.

To view the cards, open the Alexa app and navigate to the **Activity** page.

For recommendations to design effective cards, see [Best Practices for Skill Card Design](https://developer.amazon.com/docs/custom-skills/best-practices-for-skill-card-design.html).

Note that the total number of characters (both _title_ and _content_ combined) for the card cannot exceed 8000.

To create a simple card, include the `card` property in your JSON response:

- Set the `type` to `Simple`.
- Set the `title` and `content` properties to the text to display. Use either "`\r\n`" or "`\n`" within the `content` to insert line breaks.


_This code example uses the [Alexa Skills Kit SDK for Node.js (v2)](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)._

Use the `speak` and `withSimpleCard` methods on the [`ResponseBuilder`](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/classes/responsebuilder.html) object to define the speech and card text. The `getResponse()` method returns the response with the specified properties.

```
return handlerInput.responseBuilder
  .speak("This is the text Alexa speaks. Go to the Alexa app to see the card!")
  .withSimpleCard(
    "This is the Title of the Card", 
    "This is the card content. This card just has plain text content.\r\nThe content is formated with line breaks to improve readability.")
  .getResponse();
```