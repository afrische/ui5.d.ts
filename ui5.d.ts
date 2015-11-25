/* tslint:disable:no-unused-variable */
///<reference path="jquery.sap.d.ts"/>
///<reference path="sap.ui.base.d.ts"/>
///<reference path="sap.ui.core.d.ts"/>
///<reference path="sap.ui.model.d.ts"/>
///<reference path="sap.m.d.ts"/>
declare namespace sap.ui {
    interface ComponentConfig {
        // 	the name of the Component to load
        name: string;
        // 	an alternate location from where to load the Component
        url?: string;
        // 	initial data of the Component (@see sap.ui.core.Component#getComponentData)
        componentData?: any;
        // 	the sId of the new Component
        id?: string;
        //	the mSettings of the new Component
        settings?;
    }
    //  Creates a new instance of a Component or returns the instance of an existing Component.
    function component(vConfig: string | ComponentConfig): Promise<sap.ui.core.Component> | sap.ui.core.Component;

    //  Defines a controller class or creates an instance of an already defined controller class.
    function controller(sName: string, oControllerImpl?): void | sap.ui.core.mvc.Controller;

    //  Defines a Javascript module with its name, its dependencies and a module value or factory.
    function define(vFactory);
    function define(aDependencies, vFactory);
    function define(sModuleName: string, aDependencies, vFactory);

    //  Creates 0.
    function extensionpoint(oContainer, sExtName: string, fnCreateDefaultContent?, oTargetControl?, sAggregationName?: string);

    //  Instantiate a Fragment - this method loads the Fragment content, instantiates it, and returns this content.
    function fragment(sName: string, sType: string, oController?);

    //  Retrieve the SAPUI5 Core instance for the current window.
    //  and returns it or if a library name is specified then the version info of the individual library will be returned.
    function getCore(): sap.ui.core.Core;

    // Loads the version info file (resources/sap-ui-version.json);
    function getVersionInfo(sLibName?: string)

    //  Instantiates an HTML-based Fragment.
    function htmlfragment(vFragment, oController?);
    function htmlfragment(sId: string, vFragment, oController?);

    //  Defines or creates an instance of a declarative HTML view.
    function htmlview(vView);
    function htmlview(sId: string, vView);

    //  Defines OR instantiates an HTML-based Fragment.
    function jsfragment(sFragmentName: string, oController?);
    function jsfragment(sId: string, sFragmentName: string, oController?);

    //  Creates a JSON view of the given name and id.
    function jsonview(vView): sap.ui.core.mvc.View;
    function jsonview(sId: string, vView): sap.ui.core.mvc.View;

    //  Defines or creates an instance of a JavaScript view.
    function jsview(vView): sap.ui.core.mvc.JsView;
    function jsview(sId: string, vView): sap.ui.core.mvc.JsView;

    //  Creates a lazy loading stub for a given class sClassName.
    function lazyRequire(sClassName: string, sMethods?: string, sModuleName?: string);

    //  Redirects access to resources that are part of the given namespace to a location relative to the assumed application root folder.
    function localResources(sNamespace: string);

    //  Resolves one or more module dependencies.
    function require(vDependencies, fnCallback?);

    //  Returns the URL of a resource that belongs to the given library and has the given relative location within the library.
    function resource(sLibraryName: string, sResourcePath: string);

    //  Creates a Template for the given id, dom reference or a configuration object.
    function template(oTemplate?);

    //  Defines or creates an instance of a template view.
    function templateview(vView);
    function templateview(sId: string, vView);

    //  Creates a view of the given type, name and with the given id.
    function view(sId: string, vView?): sap.ui.core.mvc.View;

    //  Instantiates an XML-based Fragment.
    function xmlfragment(vFragment, oController?);
    function xmlfragment(sId: string, vFragment, oController?);

    //  Instantiates an XMLView of the given name and with the given id.
    function xmlview(vView): sap.ui.core.mvc.View;
    function xmlview(sId: string, vView): sap.ui.core.mvc.View;

}
