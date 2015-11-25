declare namespace sap.m.semantic {
    /**
     * A MessagesIndicator button has default semantic-specific properties and is eligible for aggregation content of a sap.m.semantic.SemanticPage.
     */
    class MessagesIndicator extends SemanticButton {
        //no methods
    }
    class SemanticButton extends SemanticControl {
        /**
         * Attaches event handler fnFunction to the 'press' event of this sap.m.semantic.SemanticButton.
         */
        attachPress(fnFunction, oListener?);
        attachPress(oData, fnFunction, oListener?);

        /**
         * Detaches event handler fnFunction from the 'press' event of this sap.m.semantic.SemanticButton.
         */
        detachPress(fnFunction, oListener);

        /**
         * Fires event press to attached listeners.
         */
        firePress(mArguments?);

        /**
         * Gets current value of property enabled.
         */
        getEnabled();

        /**
         * Sets a new value for property enabled.
         */
        setEnabled(bEnabled);
    }
    class SemanticSelect extends SemanticControl {
        /**
         * Adds some item into the aggregation named items.
         */
        addItem(oItem);

        /**
         * Attaches event handler fnFunction to the 'change' event of this sap.m.semantic.SemanticSelect.
         */
        attachChange(fnFunction, oListener?);
        attachChange(oData, fnFunction, oListener?);

        /**
         * Binds aggregation items to model data.
         */
        bindItems(oBindingInfo);

        /**
         * Destroys all the items in the aggregation named items.
         */
        destroyItems();

        /**
         * Detaches event handler fnFunction from the 'change' event of this sap.m.semantic.SemanticSelect.
         */
        detachChange(fnFunction, oListener);

        /**
         * Fires event change to attached listeners.
         */
        fireChange(mArguments?);

        /**
         * Gets current value of property enabled.
         */
        getEnabled();

        /**
         * Gets content of aggregation items.
         */
        getItems();

        /**
         * ID of the element which is the current target of the selectedItem association, or null.
         */
        getSelectedItem();

        /**
         * Gets current value of property selectedKey.
         */
        getSelectedKey();

        /**
         * Checks for the provided sap.ui.core.Item in the aggregation named items.
         */
        indexOfItem(oItem);

        /**
         * Inserts a item into the aggregation named items.
         */
        insertItem(oItem, iIndex);

        /**
         * Removes all the controls in the aggregation named items.
         */
        removeAllItems();

        /**
         * Removes a item from the aggregation named items.
         */
        removeItem(vItem);

        /**
         * Sets a new value for property enabled.
         */
        setEnabled(bEnabled);

        /**
         * Sets the associated selectedItem.
         */
        setSelectedItem(oSelectedItem);

        /**
         * Sets a new value for property selectedKey.
         */
        setSelectedKey(sSelectedKey);

        /**
         * Unbinds aggregation items from model data.
         */
        unbindItems();
    }
    class SemanticControl extends sap.ui.core.Element {
        /**
         * Gets current value of property visible.
         */
        getVisible();

        /**
         * Sets a new value for property visible.
         */
        setVisible(bVisible);
    }
}
