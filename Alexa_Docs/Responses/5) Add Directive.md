
# addDirective(directive: Directive): this;


> [!http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/index.html#directive]
> ![[directive.png]]

### Directive

Directive: [StopEventHandlerDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.custominterfacecontroller.stopeventhandlerdirective.html) | [AnnounceRoadRegulation](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.navigation.assistance.announceroadregulation.html) | [SendRequestDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.connections.sendrequestdirective.html) | [DynamicEntitiesDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/dialog.dynamicentitiesdirective.html) | [StartEventHandlerDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.custominterfacecontroller.starteventhandlerdirective.html) | [SetLightDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.gadgetcontroller.setlightdirective.html) | [SendIndexListDataDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.alexa.presentation.apl.sendindexlistdatadirective.html) | [DelegateDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/dialog.delegatedirective.html) | [ConfirmIntentDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/dialog.confirmintentdirective.html) | [SendDirectiveDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.custominterfacecontroller.senddirectivedirective.html) | [HandleMessageDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.alexa.presentation.html.handlemessagedirective.html) | [RenderDocumentDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.alexa.presentation.apla.renderdocumentdirective.html) | [ElicitSlotDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/dialog.elicitslotdirective.html) | [StartDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.alexa.presentation.html.startdirective.html) | [StopDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.audioplayer.stopdirective.html) | [ConfirmSlotDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/dialog.confirmslotdirective.html) | [PlayDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.audioplayer.playdirective.html) | [ExecuteCommandsDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.alexa.presentation.apl.executecommandsdirective.html) | [RenderTemplateDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.display.rendertemplatedirective.html) | [DelegateRequestDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/dialog.delegaterequestdirective.html) | [HintDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.display.hintdirective.html) | [StartConnectionDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.connections.v1.startconnectiondirective.html) | [RenderDocumentDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.alexa.presentation.aplt.renderdocumentdirective.html) | [StartInputHandlerDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.gameengine.startinputhandlerdirective.html) | [LaunchDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.videoapp.launchdirective.html) | [ExecuteCommandsDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.alexa.presentation.aplt.executecommandsdirective.html) | [StopInputHandlerDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.gameengine.stopinputhandlerdirective.html) | [CompleteTaskDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.tasks.completetaskdirective.html) | [RenderDocumentDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.alexa.presentation.apl.renderdocumentdirective.html) | [SendResponseDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.connections.sendresponsedirective.html) | [ClearQueueDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.audioplayer.clearqueuedirective.html) | [UpdateIndexListDataDirective](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.alexa.presentation.apl.updateindexlistdatadirective.html)


> [!http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/interfaces/interfaces.connections.sendrequestdirective.html#payload]
> # Interface SendRequestDirective

This is the directive that a skill can send as part of their response to a session based request to execute a predefined Connections. This will also return a result to the referring skill. (No Guarantee response will be returned)

## Properties

### name

name: string

- Defined in alexa-apis-for-nodejs/ask-sdk-model/index.ts:5222

### Optional payload

payload: object

- Defined in alexa-apis-for-nodejs/ask-sdk-model/index.ts:5223

#### Type declaration

- ##### [key: string]: any
    

### token

token: string

- Defined in alexa-apis-for-nodejs/ask-sdk-model/index.ts:5224

### type

type: "Connections.SendRequest"

- Defined in alexa-apis-for-nodejs/ask-sdk-model/index.ts:5221