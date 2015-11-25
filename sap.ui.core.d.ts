///<reference path="sap.ui.core.mvc.d.ts"/>
///<reference path="sap.ui.core.routing.d.ts"/>
///<reference path="sap.ui.core.message.d.ts"/>

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
        getMessageManager(): sap.ui.core.message.MessageManager;

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
    class ComponentMetadata extends sap.ui.base.MetaData {
        /**
         * Returns the name of the Component (which is the namespace only with the module name)
         */
        getComponentName();

        /**
         * Returns the manifest defined in the metadata of the component.
         */
        getManifest();

        /**
         * Returns the manifest configuration entry with the specified key (Must be a JSON object)
         */
        getManifestEntry(sKey, bMerged?);

        /**
         * Returns the version of the metadata which could be 1 or 2.
         */
        getMetadataVersion();

        /**
         * Returns the raw manifest defined in the metadata of the component.
         */
        getRawManifest();

        /**
         * Returns the version of the component.
         */
        getVersion();
    }
    class Component extends sap.ui.base.ManagedObject {
        /**
         * Returns the metadata for the Component class.
         */
        static getMetadata(): ComponentMetadata;

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
    /**
     * Embeds standard HTML in a SAPUI5 control tree.
     * Security Hint: By default, the HTML content (property 'content') is not sanitized and therefore open to XSS attacks.
     * Applications that want to show user defined input in an HTML control, should either sanitize the content on their own
     * or activate automatic sanitizing through the sanitizeContent property.
     *
     * Although this control inherits the tooltip aggregation/property and the hasStyleClass, addStyleClass, removeStyleClass
     * and toggleStyleClass methods from its base class, it doesn't support them. Instead, the defined HTML content can contain
     * a tooltip (title attribute) or custom CSS classes.
     *
     * For further hints about usage restrictions for this control, see also the documentation of the content property.
     */
    class HTML extends Control {
        /**
         * Attaches event handler fnFunction to the 'afterRendering' event of this sap.ui.core.HTML.
         */
        attachAfterRendering(fnFunction, oListener?);
        attachAfterRendering(oData, fnFunction, oListener?);

        /**
         * Detaches event handler fnFunction from the 'afterRendering' event of this sap.ui.core.HTML.
         */
        detachAfterRendering(fnFunction, oListener);

        /**
         * Fires event afterRendering to attached listeners.
         */
        fireAfterRendering(mArguments?);

        /**
         * Gets current value of property content.
         */
        getContent();

        /**
         *
         */
        getDomRef(sSuffix?);

        /**
         * Gets current value of property preferDOM.
         */
        getPreferDOM();

        /**
         * Gets current value of property sanitizeContent.
         */
        getSanitizeContent();

        /**
         * Gets current value of property visible.
         */
        getVisible();

        /**
         * Sets a new value for property content.
         */
        setContent(sContent);

        /**
         * Sets some new DOM content for this HTML control.
         */
        setDOMContent(oDom): HTML;

        /**
         * Sets a new value for property preferDOM.
         */
        setPreferDOM(bPreferDOM);

        /**
         * Sets a new value for property sanitizeContent.
         */
        setSanitizeContent(bSanitizeContent);

        /**
         * Sets a new value for property visible.
         */
        setVisible(bVisible);
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
    class MessageType {
        /*
         *Message is an error
         */
        static Error: string;
        /*
         *Message should be just an information
         */
        static Information: string;
        /*
         *Message has no specific level
         */
        static None: string;
        /*
         *Message is an success message
         */
        static Success: string;
        /*
         *Message is a warning
         */
        static Warning: string;
    }

}
