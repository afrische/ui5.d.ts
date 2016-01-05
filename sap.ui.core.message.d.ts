declare namespace sap.ui.core.message {
    class Message extends sap.ui.base.Object {
        /**
         *
         * @param mParameters  a map which contains the following parameter properties:
         * {string} [mParameters.id] The message id: will be defaulted if no id is set
         * {string} [mParameters.message] The message text
         * {string} [mParameters.description] The message description
         * {sap.ui.core.MessageType} [mParameters.type] The message type
         * {string} [mParameters.code] The message code
         * {sap.ui.core.message.Messageprocessor} [mParameters.processor]
         * {string} [mParameters.target] The message target: The syntax MessageProcessor dependent. Read the documentation of the respective MessageProcessor.
         * {boolean} [mParameters.persistent] Sets message persistent: If persistent is set true the message lifecycle controlled by Application
         */
        constructor(mParameters?: {
            id?: string;
            message?: string;
            description?: string;
            type?: sap.ui.core.MessageType;
            code?: string;
            processor?: MessageProcessor;
            target?: string;
            persistent?: boolean;
        });
    }
    class MessageManager extends sap.ui.base.EventProvider {
        /**
         * Add messages to MessageManager
         */
        addMessages(vMessages: Message|Message[]);

        /**
         * Get the MessageModel
         */
        getMessageModel();

        /**
         * Register MessageProcessor
         */
        registerMessageProcessor(oProcessor: MessageProcessor);

        /**
         * Register ManagedObject: Validation and Parse errors are handled by the MessageManager for this object
         */
        registerObject(oObject, bHandleValidation);

        /**
         * Remove all messages
         */
        removeAllMessages();

        /**
         * Remove given Messages
         */
        removeMessages(vMessages);

        /**
         * Deregister MessageProcessor
         */
        unregisterMessageProcessor(oProcessor: MessageProcessor);

        /**
         * Unregister ManagedObject
         */
        unregisterObject(oObject);
    }
    class ControlMessageProcessor extends MessageProcessor {
        /**
         * Check Messages and update controls with messages
         */
        checkMessages();

        /**
         * Set Messages to check
         */
        setMessages(vMessages);
    }
    class MessageProcessor extends sap.ui.base.EventProvider {
        /**
         * Attach event-handler fnFunction to the 'messageChange' event of this sap.ui.core.message.MessageProcessor.
         */
        attachMessageChange(fnFunction, oListener?);
        attachMessageChange(oData, fnFunction, oListener?);

        /**
         * Implement in inheriting classes
         */
        checkMessage();

        /**
         * Destroys the MessageProcessor Instance
         */
        destroy();

        /**
         * Detach event-handler fnFunction from the 'sap.ui.core.message.MessageProcessor' event of this sap.ui.core.message.MessageProcessor.
         */
        detachMessageChange(fnFunction, oListener);

        /**
         * Fire event messageChange to attached listeners.
         */
        fireMessageChange(mArguments?);

        /**
         * Returns the ID of the MessageProcessor instance
         */
        getId();

        /**
         * Implement in inheriting classes
         */
        setMessages(vMessages);
    }
}
