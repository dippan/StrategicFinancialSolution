({
    
    fetchDebtsHelper : function(component, event, helper) {
        component.set('v.mycolumns', [
               {label: 'Creditor', fieldName: 'creditorName', type: 'text'},
                {label: 'FirstName', fieldName: 'firstName', type: 'text'},
                {label: 'LastName', fieldName: 'lastName', type: 'text'},
                {label: 'Min Pay%', fieldName: 'minPaymentPercentage', type: 'number '},
                {label: 'Balance', fieldName: 'balance', type: 'number', typeAttributes: { minimumFractionDigits: '2' }}
            ]);
        var action = component.get("c.getJsonData");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.Debts", response.getReturnValue());
                console.log(response.getReturnValue());
                //alert('Result = ' + JSON.stringify(response.getReturnValue()));
            }
        });
        $A.enqueueAction(action);
    }, 
    
    addDebtHelper : function(component, event, helper) 
    {
    	 var myData = component.get("v.Debts"); 

   		  myData.push(
    	 	{
                id:myData.length+1,
            	creditorName: "NavyFCU",
            	balance: 3000.00
         	}
		);
		component.set("v.Debts", myData);  	
	},
    removeDebtHelper : function(component, event, helper) 
    {
    	 var myData = component.get("v.Debts"); 
         myData.pop();
   		 
		component.set("v.Debts", myData);  	
	}
})