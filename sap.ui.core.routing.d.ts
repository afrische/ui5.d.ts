declare namespace sap.ui.core.routing {
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
        navTo(sName, oParameters?, bReplace?);

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
