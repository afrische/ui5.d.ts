declare namespace sap.m {
    namespace semantic {

    }
    class NavContainer {
        // Adds a custom transition to the NavContainer type (not to a particular instance!). 
        addCustomTransition(sName, oTo, oBack);

        // Adds some page into the aggregation named pages.
        addPage(oPage);

        // Attach event handler fnFunction to the 'afterNavigate' event of this sap.m.NavContainer.
        attachAfterNavigate(fnFunction, oListener?);
        attachAfterNavigate(oData, fnFunction, oListener?);

        // Attach event handler fnFunction to the 'navigate' event of this sap.m.NavContainer.
        attachNavigate(fnFunction, oListener?);
        attachNavigate(oData, fnFunction, oListener?);

        // Navigates back one level.
        back(oBackData?, oTransitionParameters?);

        // Navigates back to the nearest previous page in the NavContainer history with the given ID.
        backToPage(sPageId, oBackData, oTransitionParameters);

        // Navigates back to the initial/top level (this is the element aggregated as "initialPage", or the first added element).
        backToTop(oBackData, oTransitionParameters);

        // Returns whether the current page is the top/initial page.
        currentPageIsTopPage();

        // Destroys all the pages in the aggregation named pages.
        destroyPages();

        // Detach event handler fnFunction from the 'afterNavigate' event of this sap.m.NavContainer.
        detachAfterNavigate(fnFunction, oListener);

        // Detach event handler fnFunction from the 'navigate' event of this sap.m.NavContainer.
        detachNavigate(fnFunction, oListener);

        // Fire event afterNavigate to attached listeners.
        fireAfterNavigate(mArguments?);

        // Fire event navigate to attached listeners.
        fireNavigate(mArguments?);

        // Getter for property autoFocus.
        getAutoFocus();

        // Returns the currently displayed page-level control.
        getCurrentPage();

        // Getter for property defaultTransitionName.
        getDefaultTransitionName();

        // Getter for property height.
        getHeight();

        // Id of the element which is the current target of the initialPage association, or null.
        getInitialPage();

        // Returns the control with the given ID from the "pages" aggregation (if available).
        getPage(sId);

        // Getter for aggregation pages.
        getPages();

        // Returns the previous page (the page from which the user drilled down to the current page with "to()").
        getPreviousPage();

        // Getter for property visible.
        getVisible();

        // Getter for property width.
        getWidth();

        // Checks for the provided sap.ui.core.Control in the aggregation named pages.
        indexOfPage(oPage);

        // Inserts a page into the aggregation named pages.
        insertPage(oPage, iIndex);

        // Inserts the page/control with the specified ID into the navigation history stack of the NavContainer.
        insertPreviousPage(sPageId, sTransitionName, oData);

        // Removes all the controls in the aggregation named pages.
        removeAllPages();

        // Removes a page from the aggregation named pages.
        removePage(vPage);

        // Setter for property autoFocus.
        setAutoFocus(bAutoFocus);

        // Setter for property defaultTransitionName.
        setDefaultTransitionName(sDefaultTransitionName);

        // Setter for property height.
        setHeight(sHeight);

        // Setter for the associated initialPage.
        setInitialPage(oInitialPage);

        // Setter for property visible.
        setVisible(bVisible);

        // Setter for property width.
        setWidth(sWidth);

        // Navigates to the next page (with drill-down semantic) with the given (or default) animation.
        to(sPageId : string, sTransitionName:string, oData, oTransitionParameters);
    }
    class App extends NavContainer {

    }
    class Shell {

    }
    class ViewSettingsItem{

    }
    class ViewSettingsDialog {

    }
    namespace MessageToast {
        function show(sMessage: string, mOptions?): void;
    }
}
