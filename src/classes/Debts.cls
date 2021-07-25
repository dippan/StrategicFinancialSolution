public class Debts {

	@AuraEnabled
    public Integer id {get;set;}
    	
    @AuraEnabled
	public String creditorName {get;set;}
    
    @AuraEnabled
	public String firstName {get;set;}
    
    @AuraEnabled
	public String lastName {get;set;}
    
    @AuraEnabled
	public Decimal minPaymentPercentage {get;set;}
    
    @AuraEnabled
	public Decimal balance {get;set;}

	
	public static List<Debts> parse(String json) {
		return (List<Debts>) System.JSON.deserialize(json, List<Debts>.class);
	}
}