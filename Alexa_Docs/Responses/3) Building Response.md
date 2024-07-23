## ResponseBuilder[](https://developer.amazon.com/en-US/docs/alexa/alexa-skills-kit-sdk-for-nodejs/build-responses.html#responsebuilder)

The `ResponseBuilder` includes helper methods for constructing the response. A `Response` may contain multiple elements, and the helper methods aid in generating responses, reducing the need to initialize and set the elements of each response. `ResponseBuilder` is available to handlers via the `HandlerInput` container object. The detailed description of `ResponseBuilder` can be found in the [TypeDoc](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/classes/responsebuilder.html).

### Available methods[](https://developer.amazon.com/en-US/docs/alexa/alexa-skills-kit-sdk-for-nodejs/build-responses.html#available-methods)

```
speak(speechOutput: string, playBehavior? : ui.PlayBehavior): this;
reprompt(repromptSpeechOutput: string, playBehavior? : ui.PlayBehavior): this;
withSimpleCard(cardTitle: string, cardContent: string): this;
withStandardCard(cardTitle: string, cardContent: string, smallImageUrl?: string, largeImageUrl?: string): this;
withLinkAccountCard(): this;
withAskForPermissionsConsentCard(permissionArray: string[]): this;
withCanFulfillIntent(canFulfillIntent : CanFulfillIntent) : this;
addDelegateDirective(updatedIntent?: Intent): this;
addElicitSlotDirective(slotToElicit: string, updatedIntent?: Intent): this;
addConfirmSlotDirective(slotToConfirm: string, updatedIntent?: Intent): this;
addConfirmIntentDirective(updatedIntent?: Intent): this;
addAudioPlayerPlayDirective(playBehavior: interfaces.audioplayer.PlayBehavior, url: string, token: string, offsetInMilliseconds: number, expectedPreviousToken?: string, audioItemMetadata? : AudioItemMetadata): this;
addAudioPlayerStopDirective(): this;
addAudioPlayerClearQueueDirective(clearBehavior: interfaces.audioplayer.ClearBehavior): this;
addRenderTemplateDirective(template: interfaces.display.Template): this;
addHintDirective(text: string): this;
addVideoAppLaunchDirective(source: string, title?: string, subtitle?: string): this;
withShouldEndSession(val: boolean): this;
addDirective(directive: Directive): this;
addDirectiveToReprompt(directive : Directive) : this;
getResponse(): Response;
```

The following example shows how to construct a response using `ResponseBuilder` helper methods.

```
const response = handlerInput.responseBuilder
  .speak('foo')
  .reprompt('bar')
  .withSimpleCard('title', 'cardText')
  .getResponse();
```