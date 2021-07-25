({
    fetchDebts : function(component, event, helper) {
        // var action = component.get("c.getData");
        helper.fetchDebtsHelper(component, event, helper);
    },
    
    addRow : function (component, event, helper) {
        helper.addDebtHelper(component, event, helper);
    },
    
    removeRow : function (component, event, helper) {
        helper.removeDebtHelper(component, event, helper);
    },
    
    getSelectedName: function (component, event) {
        var selectedRowCount= 0;
        var totalBalance = 0.00;
        var selectedRows = event.getParam('selectedRows');
        console.log('totalBalance'+totalBalance);
        for (var i = 0; i < selectedRows.length; i++){
            totalBalance += selectedRows[i].balance;
            console.log('totalBalance'+totalBalance);
        }
        console.log(totalBalance.toFixed(2));
        component.set("v.totalBalance",totalBalance.toFixed(2));
        component.set("v.chekedRowCount",selectedRows.length);
    }

   
})