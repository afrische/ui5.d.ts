declare namespace sap.m {
    namespace semantic {

    }
    class NavContainer extends sap.ui.core.Control {
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
        to(sPageId:string, sTransitionName?:string, oData?, oTransitionParameters?);
    }
    class App extends NavContainer {

    }
    interface SapMShellOptions {
        title?: string
        logo?: any //sap.ui.core.URI
        showLogout?: boolean
        headerRightText?: string
        appWidthLimited?: boolean
        backgroundColor?: any //sap.ui.core.CSSColor
        backgroundImage?: any //sap.ui.core.URI
        backgroundRepeat?: boolean
        backgroundOpacity?: number
        homeIcon?: any // object
        app: sap.ui.core.Control
    }
    class Shell extends sap.ui.core.Control {
        constructor(sId?:string, mSettings?:SapMShellOptions);
        constructor(mSettings:SapMShellOptions);

    }
    class ViewSettingsItem extends sap.ui.core.Item {
        // Getter for property selected. 
        getSelected();

        // Setter for property selected.
        setSelected(bSelected);
    }
    class Tile extends sap.ui.core.Control {
    }
    class StandardTile extends Tile {
    }
    class ViewSettingsCustomTab extends sap.ui.core.Item {

    }
    interface SapMViewSettingsDialogOptions {
        title?: string
        sortDescending?: boolean
        groupDescending?: boolean
        sortItems?: sap.m.ViewSettingsItem[]
        groupItems?: sap.m.ViewSettingsItem[]
        filterItems?: sap.m.ViewSettingsItem[]
        presetFilterItems?: sap.m.ViewSettingsItem[]
        customTabs?: sap.m.ViewSettingsCustomTab[]
        confirm?: any
        cancel?: any
        resetFilters?: any
    }
    interface ViewSettingsItemConfirmEventParameter {
        /**
         * The selected sort item.
         */
        sortItem?:sap.m.ViewSettingsItem;
        /**
         * The selected sort order (true = descending, false = ascending).
         */
        sortDescending?:boolean;
        /**
         * The selected group item.
         */
        groupItem?:sap.m.ViewSettingsItem;
        /**
         * The selected group order (true = descending, false = ascending).
         */
        groupDescending?:boolean;
        /**
         * The selected preset filter item.
         */
        presetFilterItem?:sap.m.ViewSettingsItem;
        /**
         * The selected filters in an array of ViewSettingsItem.
         */
        filterItems?:sap.m.ViewSettingsItem[];
        /**
         * The selected filter items in an object notation format: { key: boolean }. If a custom control filter was displayed (for example, the user clicked on the filter item), the value for its key is set to true to indicate that there has been an interaction with the control.
         */
        filterKeys?:any;
        /**
         * The selected filter items in a string format to display in the control's header bar in format "Filtered by: key (subkey1, subkey2, subkey3)".
         */
        filterString?:string;
        id:string;
    }
    class ViewSettingsDialog extends sap.ui.core.Control {
        constructor(sId?:string, mSettings?:SapMViewSettingsDialogOptions);
        constructor(mSettings?:SapMViewSettingsDialogOptions);

        // Adds some filterItem into the aggregation named filterItems. 
        addFilterItem(oFilterItem);

        // Adds a group item and sets the association to reflect the selected state
        addGroupItem(oItem);

        // Adds a preset filter item and sets the association to reflect the selected state
        addPresetFilterItem(oItem);

        // Adds a sort item and sets the association to reflect the selected state
        addSortItem(oItem);

        // Attach event handler fnFunction to the 'cancel' event of this sap.m.ViewSettingsDialog.
        attachCancel(fnFunction, oListener?);
        attachCancel(oData, fnFunction, oListener?);

        // Attach event handler fnFunction to the 'confirm' event of this sap.m.ViewSettingsDialog.
        attachConfirm(fnFunction, oListener?);
        attachConfirm(oData, fnFunction, oListener?);

        // Attach event handler fnFunction to the 'resetFilters' event of this sap.m.ViewSettingsDialog.
        attachResetFilters(fnFunction, oListener?);
        attachResetFilters(oData, fnFunction, oListener?);

        // Binder for aggregation customTabs.
        bindCustomTabs(oBindingInfo);

        // Binder for aggregation filterItems.
        bindFilterItems(oBindingInfo);

        // Binder for aggregation groupItems.
        bindGroupItems(oBindingInfo);

        // Binder for aggregation presetFilterItems.
        bindPresetFilterItems(oBindingInfo);

        // Binder for aggregation sortItems.
        bindSortItems(oBindingInfo);

        // Destroys all the customTabs in the aggregation named customTabs.
        destroyCustomTabs();

        // Destroys all the filterItems in the aggregation named filterItems.
        destroyFilterItems();

        // Destroys all the groupItems in the aggregation named groupItems.
        destroyGroupItems();

        // Destroys all the presetFilterItems in the aggregation named presetFilterItems.
        destroyPresetFilterItems();

        // Destroys all the sortItems in the aggregation named sortItems.
        destroySortItems();

        // Detach event handler fnFunction from the 'cancel' event of this sap.m.ViewSettingsDialog.
        detachCancel(fnFunction, oListener);

        // Detach event handler fnFunction from the 'confirm' event of this sap.m.ViewSettingsDialog.
        detachConfirm(fnFunction, oListener);

        // Detach event handler fnFunction from the 'resetFilters' event of this sap.m.ViewSettingsDialog.
        detachResetFilters(fnFunction, oListener);

        // Fire event cancel to attached listeners.
        fireCancel(mArguments?);

        // Fire event confirm to attached listeners.
        fireConfirm(mArguments?);

        // Fire event resetFilters to attached listeners.
        fireResetFilters(mArguments?);

        // Getter for aggregation customTabs.
        getCustomTabs();

        // Getter for aggregation filterItems.
        getFilterItems();

        // Getter for property groupDescending.
        getGroupDescending();

        // Getter for aggregation groupItems.
        getGroupItems();

        // Getter for aggregation presetFilterItems.
        getPresetFilterItems();

        // Returns the selected filters as an array of ViewSettingsItems.
        getSelectedFilterItems();

        // Get the selected filter object in format {key: boolean}.
        getSelectedFilterKeys();

        // Get the filter string in the format "filter name (subfilter1 name, subfilter2 name, .
        getSelectedFilterString();

        // Id of the element which is the current target of the selectedGroupItem association, or null.
        getSelectedGroupItem();

        // Id of the element which is the current target of the selectedPresetFilterItem association, or null.
        getSelectedPresetFilterItem();

        // Id of the element which is the current target of the selectedSortItem association, or null.
        getSelectedSortItem();

        // Getter for property sortDescending.
        getSortDescending();

        // Getter for aggregation sortItems.
        getSortItems();

        // Getter for property title.
        getTitle();

        // Checks for the provided sap.m.ViewSettingsCustomTab in the aggregation named customTabs.
        indexOfCustomTab(oCustomTab);

        // Checks for the provided sap.m.ViewSettingsItem in the aggregation named filterItems.
        indexOfFilterItem(oFilterItem);

        // Checks for the provided sap.m.ViewSettingsItem in the aggregation named groupItems.
        indexOfGroupItem(oGroupItem);

        // Checks for the provided sap.m.ViewSettingsItem in the aggregation named presetFilterItems.
        indexOfPresetFilterItem(oPresetFilterItem);

        // Checks for the provided sap.m.ViewSettingsItem in the aggregation named sortItems.
        indexOfSortItem(oSortItem);

        // Inserts a customTab into the aggregation named customTabs.
        insertCustomTab(oCustomTab, iIndex);

        // Inserts a filterItem into the aggregation named filterItems.
        insertFilterItem(oFilterItem, iIndex);

        // Inserts a groupItem into the aggregation named groupItems.
        insertGroupItem(oGroupItem, iIndex);

        // Inserts a presetFilterItem into the aggregation named presetFilterItems.
        insertPresetFilterItem(oPresetFilterItem, iIndex);

        // Inserts a sortItem into the aggregation named sortItems.
        insertSortItem(oSortItem, iIndex);

        // Opens the view settings dialog relative to the parent control
        open(sPageId?:string);

        // Removes all the controls in the aggregation named customTabs.
        removeAllCustomTabs();

        // Removes all the controls in the aggregation named groupItems.
        removeAllGroupItems();

        // Removes all the controls in the aggregation named presetFilterItems.
        removeAllPresetFilterItems();

        // Removes all the controls in the aggregation named sortItems.
        removeAllSortItems();

        // Removes a customTab from the aggregation named customTabs.
        removeCustomTab(vCustomTab);

        // Removes a groupItem from the aggregation named groupItems.
        removeGroupItem(vGroupItem);

        // Removes a presetFilterItem from the aggregation named presetFilterItems.
        removePresetFilterItem(vPresetFilterItem);

        // Removes a sortItem from the aggregation named sortItems.
        removeSortItem(vSortItem);

        // Setter for property groupDescending.
        setGroupDescending(bGroupDescending);

        // Set the selected filter object in format {key: boolean}
        setSelectedFilterKeys(oSelectedFilterKeys);

        // Set the selected group item (either by key or by item)
        setSelectedGroupItem(oItem);

        // Set the selected preset filter item
        setSelectedPresetFilterItem(oItem);

        // Set the selected sort item (either by key or by item)
        setSelectedSortItem(oItem);

        // Setter for property sortDescending.
        setSortDescending(bSortDescending);

        // Set the title of the internal dialog
        setTitle(sTitle);

        // Unbinder for aggregation customTabs.
        unbindCustomTabs();

        // Unbinder for aggregation filterItems.
        unbindFilterItems();

        // Unbinder for aggregation groupItems.
        unbindGroupItems();

        // Unbinder for aggregation presetFilterItems.
        unbindPresetFilterItems();

        // Unbinder for aggregation sortItems.
        unbindSortItems();
    }
    namespace MessageToast {
        function show(sMessage:string, mOptions?):void;
    }
}
