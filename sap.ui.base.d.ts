declare namespace sap.ui.base {
    class MetaData {
        // Returns an array with the names of all public methods declared by the described class and its ancestors. 
        getAllPublicMethods();
        // Returns the (constructor of the) described class 
        getClass();
        // Returns the fully qualified name of the described class 
        getName();
        // Returns the metadata object of the base class of the described class or null if the class has no (documented) base class. 
        getParent();
        // Returns an array with the names of the public methods declared by the described class. 
        getPublicMethods();
        // Returns whether the described class is abstract 
        isAbstract();
        // Whether the described class is deprecated and should not be used any more 
        isDeprecated();
        // Returns whether the described class is final 
        isFinal();
        // Checks whether the described class or one of its ancestor classes implements the given interface. 
        isInstanceOf(sInterface);
    }
    abstract class Object {
        //Creates a subclass of class sap.ui.base.Object with name sClassName and enriches it with the information contained in oClassInfo.
        static extend(sClassName: string, oClassInfo?, FNMetaImpl?);
        // Destructor method for objects 
        destroy();
        // Returns the public interface of the object. 
        getInterface();
        // Returns the metadata for the class that this object belongs to. 
        getMetadata(): MetaData;
    }
    abstract class EventProvider extends Object {
        // Adds an event registration for the given object and given event name 
        attachEvent(sEventId, fnFunction, oListener?);
        attachEvent(sEventId, oData, fnFunction, oListener?);
        // Adds a one time event registration for the given object and given event name.
        attachEventOnce(sEventId, fnFunction, oListener?);
        attachEventOnce(sEventId, oData, fnFunction, oListener?);
        //
        destroy();
        // Removes an event registration for the given object and given event name. 
        detachEvent(sEventId, fnFunction, oListener?);
        // Fires the given event and notifies all listeners. 
        fireEvent(sEventId, mParameters?, bAllowPreventDefault?, bEnableEventBubbling?);
        // Returns the parent in the eventing hierarchy of this object. 
        getEventingParent();
        // Returns a string representation of this object. 
        toString();
    }
    class Event extends Object {
        // Cancel bubbling of the event. 
        cancelBubble();
        // Returns the id of the event 
        getId();
        // Returns the value of the parameter with the given sName. 
        getParameter(sName);
        // Returns all parameter values of the event keyed by their names. 
        getParameters();
        // Returns the source of the event 
        getSource(): EventProvider;
        // Prevent the default action of this event. 
        preventDefault();
    }
    class ManagedObject extends EventProvider {
        // Adds some entity oObject to the aggregation identified by sAggregationName. 
        addAggregation(sAggregationName, oObject, bSuppressInvalidate?);

        // Adds some object with the ID sId to the association identified by sAssociationName and marks this ManagedObject as changed.
        addAssociation(sAssociationName, sId, bSuppressInvalidate?);

        // Sets all the properties, aggregations, associations and event handlers as given in the object literal mSettings.
        applySettings(mSettings, oScope?);

        // Attach event handler fnFunction to the 'formatError' event of this sap.ui.base.ManagedObject.
        attachFormatError(fnFunction, oListener?);
        attachFormatError(oData, fnFunction, oListener?);

        // Attach event handler fnFunction to the 'parseError' event of this sap.ui.base.ManagedObject.
        attachParseError(fnFunction, oListener?);
        attachParseError(oData, fnFunction, oListener?);

        // Attach event handler fnFunction to the 'validationError' event of this sap.ui.base.ManagedObject.
        attachValidationError(fnFunction, oListener?);
        attachValidationError(oData, fnFunction, oListener?);

        // Attach event handler fnFunction to the 'validationSuccess' event of this sap.ui.base.ManagedObject.
        attachValidationSuccess(fnFunction, oListener?);
        attachValidationSuccess(oData, fnFunction, oListener?);

        // Bind an aggregation to the model.
        bindAggregation(sName, oBindingInfo);

        // Bind the object to the referenced entity in the model, which is used as the binding context to resolve bound properties or aggregations of the object itself and all of its children relatively to the given path.
        bindObject(vPath, mParameters?);

        // Bind a property to the model.
        bindProperty(sName, oBindingInfo);

        // Clones a tree of objects starting with the object on which clone is called first (root object).
        clone(sIdSuffix?, aLocalIds?, oOptions?);

        // Cleans up the resources associated with this object and all its aggregated children.
        destroy(bSuppressInvalidate?);

        // Destroys (all) the managed object(s) in the aggregation named sAggregationName and empties the aggregation.
        destroyAggregation(sAggregationName, bSuppressInvalidate?);

        // Detach event handler fnFunction from the 'formatError' event of this sap.ui.base.ManagedObject.
        detachFormatError(fnFunction, oListener);

        // Detach event handler fnFunction from the 'parseError' event of this sap.ui.base.ManagedObject.
        detachParseError(fnFunction, oListener);

        // Detach event handler fnFunction from the 'validationError' event of this sap.ui.base.ManagedObject.
        detachValidationError(fnFunction, oListener);

        // Detach event handler fnFunction from the 'validationSuccess' event of this sap.ui.base.ManagedObject.
        detachValidationSuccess(fnFunction, oListener);

        // Searches and returns an array of child elements and controls which are referenced within an aggregation or aggregations of child elements/controls.
        findAggregatedObjects(bRecursive);

        // Fire event formatError to attached listeners.
        fireFormatError(mArguments?);

        // Fire event parseError to attached listeners.
        fireParseError(mArguments?);

        // Fire event validationError to attached listeners.
        fireValidationError(mArguments?);

        // Fire event validationSuccess to attached listeners.
        fireValidationSuccess(mArguments?);

        // Returns the aggregated object(s) for the named aggregation of this ManagedObject.
        getAggregation(sAggregationName, oDefaultForCreation);

        // Returns the content of the association wit hthe given name.
        getAssociation(sAssociationName, oDefaultForCreation);

        // Get the binding object for a specific aggregation/property
        getBinding(sName);

        // Get the binding context of this object for the given model name.
        getBindingContext(sModelName?);

        // Returns the binding infos for the given property or aggregation.
        getBindingInfo(sName);

        // Get the binding path for a specific aggregation/property
        getBindingPath(sName);

        // Returns the parent managed object as new eventing parent to enable control event bubbling or null if this object hasn't been added to a parent yet.
        getEventingParent();

        // Returns the object's Id.
        getId();

        // Returns the metadata for the class that this object belongs to.
        getMetadata();

        // Get the model to be used for data bindings with the given model name.
        getModel(sName?);

        // Get the object binding object for a specific model
        getObjectBinding(sModelName);

        // Returns the origin info for the value of the given property.
        getOriginInfo(sPropertyName);

        // Returns the parent managed object or null if this object hasn't been added to a parent yet.
        getParent();

        // Returns the value for the property with the given sPropertyName
        // Note: This method is a low-level API as described in the class documentation.
        getProperty(sPropertyName);

        // Check if any model is set to the ManagedObject or to one of its parents (including UIArea and Core).
        hasModel();

        // Searches for the provided ManagedObject in the named aggregation and returns its 0-based index if found, or -1 otherwise.
        indexOfAggregation(sAggregationName, oObject);

        // Inserts managed object oObject to the aggregation named sAggregationName at position iIndex.
        insertAggregation(sAggregationName, oObject, iIndex, bSuppressInvalidate?);

        // This triggers rerendering of itself and its children.
        invalidate(): void;

        // Find out whether a property or aggregation is bound
        isBound(sName);

        // Returns whether rerendering is currently suppressed on this ManagedObject
        isInvalidateSuppressed();

        // This method is used internally and should only be overridden by a tree managed object which utilizes the tree binding.
        isTreeBinding(sName);

        // Generic method which is called, whenever messages for this object exists.
        propagateMessages(sName, aMessages);

        // Removes an object from the aggregation named sAggregationName with cardinality 0.
        removeAggregation(sAggregationName, vObject, bSuppressInvalidate?);

        // Removes all objects from the 0.
        removeAllAggregation(sAggregationName, bSuppressInvalidate?);

        // Removes all the objects in the 0.
        removeAllAssociation(sAssociationName, bSuppressInvalidate?);

        // Removes a ManagedObject from the association named sAssociationName.
        removeAssociation(sAssociationName, vObject, bSuppressInvalidate?);

        // Sets a new object in the named 0.
        setAggregation(sAggregationName, oObject, bSuppressInvalidate?);

        // Sets the associatied object for the given managed association of cardinality '0.
        setAssociation(sAssociationName, sId, bSuppressInvalidate?);

        // Set the binding context for this ManagedObject for the model with the given name.
        setBindingContext(oContext, sModelName?);

        // Sets or unsets a model for the given model name for this ManagedObject.
        setModel(oModel, sName?);

        // Sets the given value for the given property after validating and normalizing it, marks this object as changed.
        setProperty(sPropertyName, oValue, bSuppressInvalidate?);

        // Returns a simple string representation of this managed object.
        toString();

        // Unbind the aggregation from the model
        unbindAggregation(sName, bSuppressReset);

        // Removes the defined binding context of this object, all bindings will now resolve relative to the parent context again.
        unbindObject(sModelName?);

        // Unbind the property from the model
        unbindProperty(sName, bSuppressReset);

        // Checks whether the given value is of the proper type for the given aggregation name.
        validateAggregation(sAggregationName, oObject, bMultiple);

        // Checks whether the given value is of the proper type for the given property name.
        validateProperty(sPropertyName, oValue);
    }
}
