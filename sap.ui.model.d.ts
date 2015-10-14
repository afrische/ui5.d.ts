declare namespace sap.ui.model {
    class Model {

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
