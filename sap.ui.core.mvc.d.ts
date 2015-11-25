declare namespace sap.ui.core.mvc {
    class View extends sap.ui.core.Control {
        // Register a preprocessor for all views of a specific type.
        static registerPreprocessor(sType: string, vPreprocessor, sViewType: string, bSyncSupport: boolean, bOnDemand?: boolean, mSettings?);

        // Adds some content into the aggregation named content.
        addContent(oContent: sap.ui.core.Control);

        // Attach event handler fnFunction to the 'afterInit' event of this sap.ui.core.mvc.View.
        attachAfterInit(fnFunction, oListener?);
        attachAfterInit(oData, fnFunction, oListener?);

        // Attach event handler fnFunction to the 'afterRendering' event of this sap.ui.core.mvc.View.
        attachAfterRendering(fnFunction, oListener?);
        attachAfterRendering(oData, fnFunction, oListener?);

        // Attach event handler fnFunction to the 'beforeExit' event of this sap.ui.core.mvc.View.
        attachBeforeExit(fnFunction, oListener?);
        attachBeforeExit(oData, fnFunction, oListener?);

        // Attach event handler fnFunction to the 'beforeRendering' event of this sap.ui.core.mvc.View.
        attachBeforeRendering(fnFunction, oListener?);
        attachBeforeRendering(oData, fnFunction, oListener?);

        // Returns an Element by its id in the context of the View.
        byId(sId: string);

        // Override clone method to avoid conflict between generic cloning of content and content creation as defined by the UI5 Model View Controller lifecycle.
        clone(sIdSuffix?: string, aLocalIds?);

        // Convert the given view local Element id to a globally unique id by prefixing it with the view Id.
        createId(sId: string);

        // Destroys all the content in the aggregation named content.
        destroyContent();

        // Detach event handler fnFunction from the 'afterInit' event of this sap.ui.core.mvc.View.
        detachAfterInit(fnFunction, oListener);

        // Detach event handler fnFunction from the 'afterRendering' event of this sap.ui.core.mvc.View.
        detachAfterRendering(fnFunction, oListener);

        // Detach event handler fnFunction from the 'beforeExit' event of this sap.ui.core.mvc.View.
        detachBeforeExit(fnFunction, oListener);

        // Detach event handler fnFunction from the 'beforeRendering' event of this sap.ui.core.mvc.View.
        detachBeforeRendering(fnFunction, oListener);

        // Fire event afterInit to attached listeners.
        fireAfterInit(mArguments?);

        // Fire event afterRendering to attached listeners.
        fireAfterRendering(mArguments?);

        // Fire event beforeExit to attached listeners.
        fireBeforeExit(mArguments?);

        // Fire event beforeRendering to attached listeners.
        fireBeforeRendering(mArguments?);

        // Getter for aggregation content.
        getContent();

        // Returns the view's Controller instance or null for a controller-less View.
        getController();

        //  An (optional) method to be implemented by Views.
        getControllerName(): string;

        // Getter for property displayBlock.
        getDisplayBlock();

        // Getter for property height.
        getHeight();

        // Returns user specific data object
        getViewData();

        // Getter for property viewName.
        getViewName();

        // Getter for property width.
        getWidth();

        // Checks for the provided sap.ui.core.Control in the aggregation named content.
        indexOfContent(oContent);

        // Inserts a content into the aggregation named content.
        insertContent(oContent, iIndex);

        // Creates a Promise representing the state of the view initialization.
        loaded();

        // Removes all the controls in the aggregation named content.
        removeAllContent();

        // Removes a content from the aggregation named content.
        removeContent(vContent);

        // Executes a registered preprocessor at a specified hook.
        runPreprocessor(sType: string, vSource, bSync?: boolean);

        // Setter for property displayBlock.
        setDisplayBlock(bDisplayBlock: boolean);

        // Setter for property height.
        setHeight(sHeight: string);

        // Setter for property viewName.
        setViewName(sViewName: string);

        // Setter for property width.
        setWidth(sWidth: string);

    }
    class JsView extends View {
        // A method to be implemented by JSViews, returning the View UI.
        createContent();

        // A method to be implemented by JSViews, returning the flag whether to prefix the IDs of controls automatically or not if the controls are created inside the sap.ui.core.mvc.JSView#createContent function.
        getAutoPrefixId();
    }
    class Controller {
        //Creates a subclass of class with name sClassName and enriches it with the information contained in oClassInfo.
        static extend(sClassName: string, oClassInfo?, FNMetaImpl?);
        //Returns a metadata object for class sap.ui.core.mvc.Controller.
        static getMetadata(): sap.ui.base.MetaData;

        // Called when a view is instantiated and its controls (if available) have already been created; used to modify the view before it is displayed to bind event handlers and do other one-time initialization
        onInit();

        // Called when the view is destroyed; used to free resources and finalize activities
        onExit();

        // Called when the view has been rendered and, therefore, its HTML is part of the document; used to do post-rendering manipulations of the HTML. SAPUI5 controls get this hook after being rendered.
        onAfterRendering();

        // Invoked before the controller view is re-rendered and not before the first rendering; use onInit() for invoking the hook before the first rendering
        onBeforeRendering();

        // Returns an Element of the connected view with the given local Id.
        byId(sId): sap.ui.core.Element;

        // Converts a view local id to a globally unique one by prepending the view id.
        createId(sId: string): string;

        // Gets the component of the Controllers view
        // If there is no Component connected to the view or the view is not connected to the controller, undefined is returned.
        getOwnerComponent(): sap.ui.core.Component;

        // Returns the view associated with this controller or undefined.
        getView(): sap.ui.core.mvc.View;
    }
}
