interface SapUiCoreStatic {
    mvc: SapUiCoreMvcStatic;
    control: SapUiCoreControlStatic;
}
interface SapUiCoreMvcStatic {
    View: SapUiCoreMvcViewStatic;
    JSView: SapUiCoreMvcJsViewStatic;
}
interface SapUiCoreMvcViewStatic {
    // Creates a new subclass of class sap.ui.core.mvc.View with name sClassName and enriches it with the information contained in oClassInfo.
    extend(sClassName: string, oClassInfo?, FNMetaImpl?);
    // Returns a metadata object for class sap.ui.core.mvc.View.
    getMetadata();
    // Register a preprocessor for all views of a specific type.
    registerPreprocessor(sType: string, vPreprocessor, sViewType: string, bSyncSupport: boolean, bOnDemand?: boolean, mSettings?);
}
interface SapUiCoreMvcJsViewStatic {
    // Creates a new subclass of class sap.ui.core.mvc.View with name sClassName and enriches it with the information contained in oClassInfo.
    extend(sClassName: string, oClassInfo?, FNMetaImpl?);
    // Returns a metadata object for class sap.ui.core.mvc.View.
    getMetadata();
}
interface SapUiCoreControlStatic {
    // Creates a new subclass of class sap.ui.core.mvc.View with name sClassName and enriches it with the information contained in oClassInfo.
    extend(sClassName: string, oClassInfo?, FNMetaImpl?);
    // Returns a metadata object for class sap.ui.core.control.
    getMetadata();
}

declare namespace sap.ui.core {
    /**
     * Core Class of the SAP UI Library.
     */
    class Core extends sap.ui.base.Object {
        // Enforces an immediate update of the visible UI (aka "rendering").
        applyChanges();

        // Applies the theme with the given name (by loading the respective style sheets, which does not disrupt the application).
        applyTheme(sThemeName: string, sThemeBaseUrl?: string);

        // Registers a listener for control events.
        attachControlEvent(fnFunction, oListener?);

        // Attach event-handler fnFunction to the 'formatError' event of sap.ui.core.Core.
        attachFormatError(fnFunction, oListener?);

        // Attaches a given function to the initEvent event of the core.
        attachInit(fnFunction);

        // Registers a listener to the central interval timer.
        attachIntervalTimer(fnFunction, oListener?);

        // Register a listener for the localizationChanged event.
        attachLocalizationChanged(fnFunction, oListener);

        // Attach event-handler fnFunction to the 'parseError' event of sap.ui.core.Core.
        attachParseError(fnFunction, oListener?);
        attachParseError(oData, fnFunction, oListener?);

        // Attach event-handler fnFunction to the 'validationError' event of sap.ui.core.Core.
        attachValidationError(fnFunction, oListener?);
        attachValidationError(oData, fnFunction, oListener?);

        // Attach event-handler fnFunction to the 'validationSuccess' event of sap.ui.core.Core.
        attachValidationSuccess(fnFunction, oListener?);
        attachValidationSuccess(oData, fnFunction, oListener?);

        // Returns the registered element for the given id, if any.
        byId(sId: string);

        // Creates a component with the provided id and settings.
        createComponent(vComponent, sUrl?: string, sId?: string, mSettings?);

        // Returns a new instance of the RenderManager interface.
        createRenderManager();

        // Unregisters a listener for control events.
        detachControlEvent(fnFunction, oListener?);

        // Detach event-handler fnFunction from the 'formatError' event of sap.ui.core.Core.
        detachFormatError(fnFunction, oListener);

        // Unregisters a listener for the central interval timer.
        detachIntervalTimer(fnFunction, oListener?);

        // Unregister a listener from the localizationChanged event.
        detachLocalizationChanged(fnFunction, oListener);

        // Detach event-handler fnFunction from the 'parseError' event of sap.ui.core.Core.
        detachParseError(fnFunction, oListener);

        // Detach event-handler fnFunction from the 'validationError' event of sap.ui.core.Core.
        detachValidationError(fnFunction, oListener);

        // Detach event-handler fnFunction from the 'validationSuccess' event of sap.ui.core.Core.
        detachValidationSuccess(fnFunction, oListener);

        // Fire event formatError to attached listeners.
        fireFormatError(mArguments?);

        // Fire event parseError to attached listeners.
        fireParseError(mArguments?);

        // Fire event validationError to attached listeners.
        fireValidationError(mArguments?);

        // Fire event validationSuccess to attached listeners.
        fireValidationSuccess(mArguments?);

        // Returns the registered component for the given id, if any.
        getComponent(sId: string);

        // Returns the Configuration of the Core.
        getConfiguration();

        // Returns the Id of the control/element currently in focus.
        getCurrentFocusedControlId();

        // Returns the event bus.
        getEventBus();

        // Retrieves a resource bundle for the given library and locale.
        getLibraryResourceBundle(sLibraryName?: string, sLocale?: string);

        // Returns a map which contains the names of the loaded libraries as keys and some additional information about each library as values.
        getLoadedLibraries();

        // Returns the active MessageManager instance.
        getMessageManager();

        // Get the model with the given model name.
        getModel(sName?: string);

        // Returns the instance of the root component (if exists).
        getRootComponent();

        // Returns the static, hidden area DOM element belonging to this core instance.
        getStaticAreaRef();

        // Returns a UIArea if the given ID/Element belongs to one.
        getUIArea(o);

        // Returns true if there are any pending rendering tasks or when such rendering tasks are currently being executed.
        getUIDirty();

        // Check if a Model is set to the core
        hasModel();

        // Includes a library theme into the current page (if a variant is specified it will include the variant library theme)
        includeLibraryTheme(sLibName: string, sVariant?: string, sQuery?: string);

        // Initializes a library for an already loaded library module.
        initLibrary(vLibInfo);

        // Returns true if the Core has already been initialized.
        isInitialized();

        // Returns the locked state of the sap.ui.core.Core
        isLocked();

        // Check if the script is running on mobile
        isMobile();

        // Used to find out whether a certain DOM element is the static area
        isStaticAreaRef(oDomRef);

        // Returns true, if the styles of the current theme are already applied, false otherwise.
        isThemeApplied();

        // Synchronously loads the given library and makes it available to the application.
        loadLibrary(sLibrary: string, sUrl: string);

        // Locks the Core.
        lock();

        // Registers a Plugin to the sap.ui.core.Core, which lifecycle will be managed (start and stop).
        registerPlugin(oPlugin);

        // Sets or unsets a model for the given model name.
        setModel(oModel, sName?: string);

        // Defines the root directory from below which UI5 should load the theme with the given name.
        setThemeRoot(sThemeName: string, aLibraryNames, sThemeBaseUrl: string);
        setThemeRoot(sThemeName: string, sThemeBaseUrl: string);

        // Unlocks the Core.
        unlock();

        // Unregisters a Plugin out of the sap.ui.core.Core
        unregisterPlugin(oPlugin);
    }
    class Element extends sap.ui.base.ManagedObject {
        // Returns the best suitable DOM node that represents this Element wrapped as jQuery object. 
        $(sSuffix?): JQuery;

        // Adds some customData into the aggregation named customData.
        addCustomData(oCustomData);

        // Adds some dependent into the aggregation named dependents.
        addDependent(oDependent);

        // Adds a delegate that listens to the events that are fired on this element (as opposed to events which are fired BY this element).
        addEventDelegate(oDelegate, oThis?);

        // Applies the focus info.
        applyFocusInfo(oFocusInfo);

        // Bind the object to the referenced entity in the model, which is used as the binding context to resolve bound properties or aggregations of the object itself and all of its children relatively to the given path.
        bindElement(sPath, mParameters?);

        // Clone delegates
        clone(sIdSuffix?, aLocalIds?);

        // Attaches custom data to an Element or retrieves attached data.
        data();

        // Cleans up the resources associated with this element and all its children.
        destroy(bSuppressInvalidate?);

        // Destroys all the customData in the aggregation named customData.
        destroyCustomData();

        // Destroys all the dependents in the aggregation named dependents.
        destroyDependents();

        // Destroys the layoutData in the aggregation named layoutData.
        destroyLayoutData();

        // Destroys the tooltip in the aggregation named tooltip.
        destroyTooltip();

        // Allows the parent of a control to enhance the aria information during rendering
        // This function is called by the RenderManager's writeAccessibilityState method for the parent of the currently rendered control - if the parent implements it.
        enhanceAccessibilityState(oElement, mAriaProps);

        // Cleans up the element instance before destruction. 
        exit();

        // Searches and returns an array of child elements and controls which are referenced within an aggregation or aggregations of child elements/controls.
        findElements(bRecursive);

        // Fires the given event and notifies all listeners.
        fireEvent(sEventId, mParameters);

        // Sets the focus to the stored focus DOM reference
        focus();

        // Getter for aggregation customData.
        getCustomData();

        // Getter for aggregation dependents.
        getDependents();

        // Returns the best suitable DOM Element that represents this UI5 Element.
        getDomRef(sSuffix?);

        // Get the element binding object for a specific model
        getElementBinding(sModelName);

        // Returns the DOM Element that should get the focus.
        getFocusDomRef();

        // Returns an object representing the serialized focus information To be overwritten by the specific control method
        getFocusInfo();

        //
        getInterface();

        // Getter for aggregation layoutData.
        getLayoutData();

        // Returns the runtime metadata for this UI element.
        getMetadata();

        // Returns the tooltip for this element if any or an undefined value.
        getTooltip();

        // Returns the tooltip for this element but only if it is a simple string.
        getTooltip_AsString();

        // Returns the main text for the current tooltip or undefined if there is no such text.
        getTooltip_Text();

        // Checks for the provided sap.ui.core.CustomData in the aggregation named customData.
        indexOfCustomData(oCustomData);

        // Checks for the provided sap.ui.core.Control in the aggregation named dependents.
        indexOfDependent(oDependent);

        // Initializes the element instance after creation.
        init();

        // Inserts a customData into the aggregation named customData.
        insertCustomData(oCustomData, iIndex);

        // Inserts a dependent into the aggregation named dependents.
        insertDependent(oDependent, iIndex);

        // Removes all the controls in the aggregation named customData.
        removeAllCustomData();

        // Removes all the controls in the aggregation named dependents.
        removeAllDependents();

        // Removes a customData from the aggregation named customData.
        removeCustomData(vCustomData);

        // Removes a dependent from the aggregation named dependents.
        removeDependent(vDependent);

        // Removes the given delegate from this element.
        removeEventDelegate(oDelegate);

        // This triggers immediate rerendering of its parent and thus of itself and its children.
        rerender();

        // Sets the sap.ui.core.LayoutData defining the layout constraints for this control when it is used inside a layout.
        setLayoutData(oLayoutData);

        // Sets a new tooltip for this object.
        setTooltip(oTooltip);

        // Returns a simple string representation of this element.
        toString();

        // Removes the defined binding context of this object, all bindings will now resolve relative to the parent context again.
        unbindElement(sModelName);
    }

    class Component extends sap.ui.base.ManagedObject {
        // Cleans up the component instance before destruction. 
        exit();

        // Returns user specific data object
        getComponentData();

        // Returns the event bus of this component.
        getEventBus();

        //
        getInterface();

        // Initializes the Component instance after creation.
        init();

        // The hook which gets called when the static configuration of the component has been changed by some configuration extension.
        onConfigChange(sConfigKey);

        // The window error hook.
        onError(sMessage, sFile, iLine);

        // The window before unload hook.
        onWindowBeforeUnload();

        // The window unload hook.
        onWindowUnload();

        // Calls the function fn once and marks all ManagedObjects created during that call as "owned" by this Component.
        runAsOwner(fn);
    }

    class UIComponent extends Component {
        //Returns the reference to the router instance.
        static getRouterFor(oControllerOrView): sap.ui.core.routing.Router;

        // Returns an Element by its id in the context of the Component
        byId(sId);

        // The method to create the Content (UI Control Tree) of the Component.
        createContent();

        // Creates an id for an Element prefixed with the component id
        createId(sId);

        // A method to be implemented by UIComponents, returning the flag whether to prefix the IDs of controls automatically or not if the controls are created inside the sap.ui.core.UIComponent#createContent function.
        getAutoPrefixId();

        //
        getEventingParent();

        // Returns the reference to the router instance which has been created by the UIComponent once the routes in the routing metadata has been defined.
        getRouter();

        // Returns the reference to the targets instance which has been created by the UIComponent once the targets in the routing metadata has been defined.
        getTargets();

        // Returns the reference to the UIArea of the container.
        getUIArea();

        // Initializes the Component instance after creation.
        init();

        // Function is called when the rendering of the Component Container is completed.
        onAfterRendering();

        // Function is called when the rendering of the Component Container is started.
        onBeforeRendering();

        // Renders the the root control of the UIComponent.
        render(oRenderManager);

        // Sets the reference to the ComponentContainer - later required for the determination of the UIArea for the UIComponent.
        setContainer(oContainer);
    }
    class Item extends Element {
        // Getter for property enabled. 
        getEnabled();

        // Getter for property key.
        getKey();

        // Getter for property text.
        getText();

        // Getter for property textDirection.
        getTextDirection();

        // Setter for property enabled.
        setEnabled(bEnabled);

        // Setter for property key.
        setKey(sKey);

        // Setter for property text.
        setText(sText);

        // Setter for property textDirection.
        setTextDirection(sTextDirection);
    }
    class Control extends Element {
        // The string given as "sStyleClass" will be added to the "class" attribute of this control's root HTML element.
        addStyleClass(sStyleClass: string);

        // Defines whether the user can select text inside this control.
        allowTextSelection(bAllow: boolean);

        // Allows binding handlers for any native browser event to the root HTML element of this Control.
        attachBrowserEvent(sEventType?: string, fnHandler?, oListener?);

        // Overrides Element.clone to clone additional internal state.
        clone(sIdSuffix?: string, aLocalIds?);

        // Removes event handlers which have been previously attached using #attachBrowserEvent.
        detachBrowserEvent(sEventType?: string, fnHandler?, oListener?);

        // Getter for property busy.
        getBusy();

        // Getter for property busyIndicatorDelay.
        getBusyIndicatorDelay();

        // Returns the DOMNode Id to be used for the "labelFor" attribute of the label.
        getIdForLabel();

        // Returns a renderer for this control instance.
        getRenderer();

        // Getter for property visible.
        getVisible();

        // Returns true if the given style class string is valid and if this control has this style class set via a previous call to addStyleClass().
        hasStyleClass(sStyleClass: string);

        // Triggers rerendering of this element and its children.
        invalidate(): void;

        // Function is called when the rendering of the control is completed.
        onAfterRendering();

        // Function is called before the rendering of the control is started.
        onBeforeRendering();

        // Puts this control into the specified container (oRef) at the given position (oPosition).
        placeAt(oRef: string | Element | sap.ui.core.Control, oPosition?: string | number);

        // Removes the given string from the list of custom style classes that have been set previously.
        removeStyleClass(sStyleClass: string);

        // Tries to replace its DOM reference by re-rendering.
        rerender();

        // Set the controls busy state.
        setBusy(bBusy: boolean);

        // Define the delay, after which the busy indicator will show up
        setBusyIndicatorDelay(iDelay);

        // Setter for property visible.
        setVisible(bVisible: boolean);

        // The string given as "sStyleClass" will be be either added to or removed from the "class" attribute of this control's root HTML element, depending on the value of "bAdd": if bAdd is true, sStyleClass will be added.
        toggleStyleClass(sStyleClass: string, bAdd: boolean);

    }
    namespace mvc {
        class View extends sap.ui.core.Control {
            // Adds some content into the aggregation named content.
            addContent(oContent);

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
    namespace routing {
        class HashChanger {
        }
        class History {
            /**
             * @returns a global singleton that gets created as soon as the sap.ui.core.routing.History is required
             */
            static getInstance(): History;

            // Determines what the navigation direction for a newly given hash would be It will say Unknown if there is a history foo - bar (current history) - foo If you now ask for the direction of the hash "foo" you get Unknown because it might be backwards or forwards.
            getDirection(sNewHash?): HistoryDirection;

            // gets the previous hash in the history - if the last direction was Unknown or there was no navigation yet, undefined will be returned
            getPreviousHash(): string;
        }
        class HistoryDirection {
        }
        class Route {
        }
        class Router {
            // Adds a route to the router 
            addRoute(oConfig, oParent);

            // Attach event-handler fnFunction to the 'bypassed' event of this sap.ui.core.routing.Router.
            attachBypassed(fnFunction, oListener?);
            attachBypassed(oData, fnFunction, oListener?);

            // Attach event-handler fnFunction to the 'routeMatched' event of this sap.ui.core.routing.Router.
            attachRouteMatched(fnFunction, oListener?);
            attachRouteMatched(oData, fnFunction, oListener?);

            // Attach event-handler fnFunction to the 'routePatternMatched' event of this sap.ui.core.routing.Router.
            attachRoutePatternMatched(fnFunction, oListener?);
            attachRoutePatternMatched(oData, fnFunction, oListener?);

            // Removes the router from the hash changer @see sap.ui.core.routing.HashChanger
            destroy();

            // Detach event-handler fnFunction from the 'bypassed' event of this sap.ui.core.routing.Router.
            detachBypassed(fnFunction, oListener);

            // Detach event-handler fnFunction from the 'routeMatched' event of this sap.ui.core.routing.Router.
            detachRouteMatched(fnFunction, oListener);

            // Detach event-handler fnFunction from the 'routePatternMatched' event of this sap.ui.core.routing.Router.
            detachRoutePatternMatched(fnFunction, oListener);

            // Fire event bypassed to attached listeners.
            fireBypassed(mArguments?);

            // Fire event routeMatched to attached listeners.
            fireRouteMatched(mArguments?);

            // Fire event routePatternMatched to attached listeners.
            fireRoutePatternMatched(mArguments?);

            // Returns the Route with a name, if no route is found undefined is returned
            getRoute(sName);

            // Returns the instance of Targets, if you pass a targets config to the router
            getTargets(): Targets;

            // Returns the URL for the route and replaces the placeholders with the values in oParameters
            getURL(sName, oParameters);

            // Returns the views instance created by the router
            getViews();

            // Attaches the router to the hash changer @see sap.ui.core.routing.HashChanger
            initialize();

            // Navigates to a specific route defining a set of parameters.
            navTo(sName, oParameters, bReplace);

            // Will trigger routing events + place targets for routes matching the string
            parse(sNewHash);

            // Registers the router to access it from another context.
            register(sName);

            // Stops to listen to the hashChange of the browser.
            stop();
        }
        class Target {
            // Attach event-handler fnFunction to the 'display' event of this sap.ui.core.routing.Target. 
            attachDisplay(fnFunction, oListener?);
            attachDisplay(oData, fnFunction, oListener?);

            // Destroys the target, will be called by sap.m.routing.Targets don't call this directly.
            destroy();

            // Detach event-handler fnFunction from the 'display' event of this sap.ui.core.routing.Target.
            detachDisplay(fnFunction, oListener);

            // Creates a view and puts it in an aggregation of a control that has been defined in the undefined.
            display(vData?);

            // Fire event created to attached listeners.
            fireDisplay(mArguments?);
        }
        class Targets {
            // Attach event-handler fnFunction to the 'display' event of this sap.ui.core.routing.Targets. 
            attachDisplay(fnFunction, oListener?);
            attachDisplay(oData, fnFunction, oListener?);

            // Destroys the targets instance an all created targets.
            destroy();

            // Creates a view and puts it in an aggregation of the specified control.
            display(vTargets, vData?);
        }
        class Views {
        }
    }
}
