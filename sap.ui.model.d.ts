declare namespace sap.ui.model {
    class Filter { }
    class Model extends sap.ui.core.message.MessageProcessor {
        /**
         * Attach event-handler fnFunction to the 'parseError' event of this sap.ui.moel.Model.
         */
        attachParseError(fnFunction, oListener?);
        attachParseError(oData, fnFunction, oListener?);

        /**
         * Attach event-handler fnFunction to the 'requestCompleted' event of this sap.ui.moel.Model.
         */
        attachRequestCompleted(fnFunction, oListener?);
        attachRequestCompleted(oData, fnFunction, oListener?);

        /**
         * Attach event-handler fnFunction to the 'requestFailed' event of this sap.ui.moel.Model.
         */
        attachRequestFailed(fnFunction, oListener?);
        attachRequestFailed(oData, fnFunction, oListener?);

        /**
         * Attach event-handler fnFunction to the 'requestSent' event of this sap.ui.moel.Model.
         */
        attachRequestSent(fnFunction, oListener?);
        attachRequestSent(oData, fnFunction, oListener?);

        /**
         * Create ContxtBinding
         */
        bindContext(sPath, oContext?, mParameters?, oEvents?);

        /**
         * Implement in inheritig classes
         */
        bindList(sPath, oContext?, aSorters?, aFilters?, mParameters?);

        /**
         * Implement in inheritig classes
         */
        bindProperty(sPath, oContext?, mParameters?);

        /**
         * Implement in inheritig classes
         */
        bindTree(sPath, oContext?, aFilters?, mParameters?);

        /**
         * Implement in inheritig classes
         */
        createBindingContext(sPath, oContext?, mParameters?, fnCallBack?, bReload?);

        /**
         * Destroys the model and clears the model data.
         */
        destroy();

        /**
         * Implement in inheritig classes
         */
        destroyBindingContext(oContext);

        /**
         * Detach event-handler fnFunction from the 'parseError' event of this sap.ui.moel.Model.
         */
        detachParseError(fnFunction, oListener);

        /**
         * Detach event-handler fnFunction from the 'requestCompleted' event of this sap.ui.moel.Model.
         */
        detachRequestCompleted(fnFunction, oListener);

        /**
         * Detach event-handler fnFunction from the 'requestFailed' event of this sap.ui.moel.Model.
         */
        detachRequestFailed(fnFunction, oListener);

        /**
         * Detach event-handler fnFunction from the 'requestSent' event of this sap.ui.moel.Model.
         */
        detachRequestSent(fnFunction, oListener);

        /**
         * Fire event parseError to attached isteners.
         */
        fireParseError(mArguments?);

        /**
         * Fire event requestCompleted to attached isteners.
         */
        fireRequestCompleted(mArguments?);

        /**
         * Fire event requestFailed to attached isteners.
         */
        fireRequestFailed(mArguments?);

        /**
         * Fire event requestSent to attached isteners.
         */
        fireRequestSent(mArguments?);

        /**
         * Get the default binding mode forthe model
         */
        getDefaultBindingMode();

        /**
         * Get message for path
         */
        getMessagesByPath(sPath);

        /**
         * Returns the meta model associated with this model if it is available for the concrete mdel type.
         */
        getMetaModel();

        /**
         * Implement in inheritig classes
         */
        getObject(sPath, oContext?);

        /**
         * Returns the original value for the property with the given path an context.
         */
        getOriginalProperty(sPath, oContext?);

        /**
         * Implement in inheritig classes
         */
        getProperty(sPath, oContext?);

        /**
         * Check if the specified binding mode is supported by he model.
         */
        isBindingModeSupported(sMode);

        /**
         * Returns whether legacy path syntx is used
         */
        isLegacySyntax();

        /**
         * Refresh he model.
         */
        refresh(bForceUpdate);

        /**
         * Set the default binding mode for he model.
         */
        setDefaultBindingMode(sMode);

        /**
         * Enables legacy path syntax handling
         *  This defines, whether relative bindings, which do not have a defined binding context, should be compatible to earlier releases which means they are resolved relative to the root element or handled strict and stay unresolved until a bindng context is set
         */
        setLegacySyntax(bLegacySyntax);


        /**
         * Set messages
         */
        setMessages(mMessages);

        /**
         * Set the maximum number of entries which are used for for listbindings.
         */
        setSizeLimit(iSizeLimit);
    }
    class Sorter {
        constructor(sPath: string, bDescending: boolean, vGroup: boolean | ((any) => any));
        constructor(sPath: string, vGroup: boolean | ((any) => any));

    }
    class ClientModel extends Model {
        /**
         *
         */
        destroy();

        /**
         * Force no caching.
         */
        forceNoCache(bForceNoCache?);

        /**
         * Returns the current data of the model.
         */
        getData();

        /**
         * update all bindings
         */
        updateBindings(bForceUpdate);
    }
    namespace json {
        class JSONModel extends sap.ui.model.ClientModel {
            /**
             * @param oData either the URL where to load the JSON from or a JS object
             */
            constructor(oData);

            // Serializes the current JSON data of the model into a string.
            getJSON();

            // Returns the value for the property with the given sPropertyName
            getProperty(sPath, oContext?);

            // Load JSON-encoded data from the server using a GET HTTP request and store the resulting JSON data in the model.
            loadData(sURL, oParameters?, bAsync?, sType?, bMerge?, bCache?, mHeaders?);

            // Sets the JSON encoded data to the model.
            setData(oData, bMerge?);

            // Sets the JSON encoded string data to the model.
            setJSON(sJSONText, bMerge?);

            // Sets a new value for the given property sPropertyName in the model.
            setProperty(sPath, oValue, oContext?, bAsyncUpdate?): boolean;
        }
    }
    namespace odata {
        namespace v2 {
            class ODataModel extends sap.ui.model.Model {
                constructor(sServiceUrl?: string, mParameters?);

                // Adds (a) new URL(s) to the be parsed for OData annotations, which are then merged into the annotations object which can be retrieved by calling the getServiceAnnotations()-method.
                addAnnotationUrl(vUrl);

                // Adds new xml content to be parsed for OData annotations, which are then merged into the annotations object which can be retrieved by calling the getServiceAnnotations()-method.
                addAnnotationXML(sXMLContent, bSuppressEvents?);

                // Attach event-handler fnFunction to the 'annotationsFailed' event of this sap.ui.model.odata.v2.ODataModel.
                attachAnnotationsFailed(fnFunction, oListener?);
                attachAnnotationsFailed(oData, fnFunction, oListener?);

                // Attach event-handler fnFunction to the 'annotationsLoaded' event of this sap.ui.model.odata.v2.ODataModel.
                attachAnnotationsLoaded(fnFunction, oListener?);
                attachAnnotationsLoaded(oData, fnFunction, oListener?);

                // Attach event-handler fnFunction to the 'batchRequestCompleted' event of this sap.ui.model.odata.v2.ODataModel.
                attachBatchRequestCompleted(fnFunction, oListener?);
                attachBatchRequestCompleted(oData, fnFunction, oListener?);

                // Attach event-handler fnFunction to the 'batchRequestFailed' event of this sap.ui.model.odata.v2.ODataModel.
                attachBatchRequestFailed(fnFunction, oListener?);
                attachBatchRequestFailed(oData, fnFunction, oListener?);

                // Attach event-handler fnFunction to the 'requestSent' event of this sap.ui.model.odata.v2.ODataModel.
                attachBatchRequestSent(fnFunction, oListener?);
                attachBatchRequestSent(oData, fnFunction, oListener?);

                // Attach event-handler fnFunction to the 'metadataFailed' event of this sap.ui.model.odata.v2.ODataModel.
                attachMetadataFailed(fnFunction, oListener?);
                attachMetadataFailed(oData, fnFunction, oListener?);

                // Attach event-handler fnFunction to the 'metadataLoaded' event of this sap.ui.model.odata.v2.ODataModel.
                attachMetadataLoaded(fnFunction, oListener?);
                attachMetadataLoaded(oData, fnFunction, oListener?);

                // Trigger a request to the function import odata service that was specified in the model constructor.
                callFunction(sFunctionName, mParameters?);

                // Trigger a POST request to the odata service that was specified in the model constructor.
                create(sPath, oData, mParameters?);

                // Creates a binding context for the given path If the data of the context is not yet available, it can not be created, but first the entity needs to be fetched from the server asynchronously.
                createBindingContext(sPath, oContext?, mParameters?, fnCallBack?, bReload?);

                // Creates a new entry object which is described by the metadata of the entity type of the specified sPath Name.
                createEntry(sPath, mParameters);

                // Creates the key from the given collection name and property map.
                createKey(sCollection, oKeyProperties);

                // Deletes a created entry from the request queue and the model.
                deleteCreatedEntry(oContext);

                //
                destroy();

                // Detach event-handler fnFunction from the 'annotationsFailed' event of this sap.ui.model.odata.v2.ODataModel.
                detachAnnotationsFailed(fnFunction, oListener);

                // Detach event-handler fnFunction from the 'annotationsLoaded' event of this sap.ui.model.odata.v2.ODataModel.
                detachAnnotationsLoaded(fnFunction, oListener);

                // Detach event-handler fnFunction from the 'batchRequestCompleted' event of this sap.ui.model.odata.v2.ODataModel.
                detachBatchRequestCompleted(fnFunction, oListener);

                // Detach event-handler fnFunction from the 'batchRequestFailed' event of this sap.ui.model.odata.v2.ODataModel.
                detachBatchRequestFailed(fnFunction, oListener);

                // Detach event-handler fnFunction from the 'batchRequestSent' event of this sap.ui.model.odata.v2.ODataModel.
                detachBatchRequestSent(fnFunction, oListener);

                // Detach event-handler fnFunction from the 'metadataFailed' event of this sap.ui.model.odata.v2.ODataModel.
                detachMetadataFailed(fnFunction, oListener);

                // Detach event-handler fnFunction from the 'metadataLoaded' event of this sap.ui.model.odata.v2.ODataModel.
                detachMetadataLoaded(fnFunction, oListener);

                // Fire event annotationsFailed to attached listeners.
                fireAnnotationsFailed(mArguments?);

                // Fire event annotationsLoaded to attached listeners.
                fireAnnotationsLoaded(mArguments?);

                // Fire event batchRequestCompleted to attached listeners.
                fireBatchRequestCompleted(mArguments);

                // Fire event batchRequestFailed to attached listeners.
                fireBatchRequestFailed(mArguments);

                // Fire event batchRequestSent to attached listeners.
                fireBatchRequestSent(mArguments?);

                // Fire event metadataFailed to attached listeners.
                fireMetadataFailed(mArguments?);

                // Fire event metadataLoaded to attached listeners.
                fireMetadataLoaded(mArguments?);

                // Returns the definition of batchGroups per EntityType for TwoWay changes
                getChangeBatchGroups();

                // Returns the default count mode for retrieving the count of collections
                getDefaultCountMode();

                // Returns the array of batchGroupIds that are set as deferred
                getDeferredBatchGroups();

                // Returns the ETag for a given binding path/context or data object
                getETag(sPath?, oContext?, oEntity?);

                // Returns all headers and custom headers which are stored in the OData model.
                getHeaders();

                // Returns the key part from the entry URI or the given context or object
                getKey(oObject);

                // Returns an instance of an OData meta model which offers a unified access to both OData v2 meta data and v4 annotations.
                getMetaModel();

                // Returns the value for the property with the given sPath
                getProperty(sPath, oContext?, bIncludeExpandEntries?);

                // Returns the current security token.
                getSecurityToken();

                // Return the annotation object.
                getServiceAnnotations();

                // Return the parsed XML metadata as a Javascript object.
                getServiceMetadata();

                // Checks if there exist pending changes in the model created by the setProperty method.
                hasPendingChanges();

                // Returns a promise for the loaded state of the metadata.
                metadataLoaded();

                // Trigger a GET request to the odata service that was specified in the model constructor.
                read(sPath, mParameters?);

                // Refresh the model.
                refresh(bForceUpdate?, bRemoveData?, sBatchGroupId?);

                // Refreshes the metadata for model, e.g.
                refreshMetadata();

                // refresh XSRF token by performing a GET request against the service root URL.
                refreshSecurityToken(fnSuccess?, fnError?);

                // Trigger a DELETE request to the odata service that was specified in the model constructor.
                remove(sPath, mParameters?);

                // Resets the collected changes by the setProperty method.
                resetChanges(aKeys?);

                // Definition of batchGroups per EntityType for "TwoWay" changes
                setChangeBatchGroups(mGroups);

                // Sets the default way to retrieve the count of collections in this model.
                setDefaultCountMode(sCountMode);

                // Setting batch groups as deferred.
                setDeferredBatchGroups(aGroupIds);

                // Set custom headers which are provided in a key/value map.
                setHeaders(mHeaders);

                // Sets a new value for the given property sPropertyName in the model.
                setProperty(sPath, oValue, oContext?, bAsyncUpdate?);

                // Enable/Disable automatic updates of all Bindings after change operations
                setRefreshAfterChange(bRefreshAfterChange);

                // Enable/Disable XCSRF-Token handling
                setTokenHandlingEnabled(bTokenHandling?);

                //
                setUseBatch(bUseBatch?);

                // Submits the collected changes which were collected by the setProperty method.
                submitChanges(mParameters?);

                // Trigger a PUT/MERGE request to the odata service that was specified in the model constructor.
                update(sPath, oData, mParameters?);

                // update all bindings
                updateBindings(bForceUpdate?);
            }
        }
    }
}
