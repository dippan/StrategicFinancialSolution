public class StrategicFSApex {
    
    @AuraEnabled
    public static List<Debts> getJsonData() {
        HTTP http = new HTTP();
        HTTPRequest request = new HTTPRequest();
        request.setEndpoint('https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json');
        request.setMethod('GET');
        HTTPResponse response = http.send(request);
        List<Debts> debts = new  List<Debts>();
        if(response.getStatusCode() == 200) {
            System.debug('Response:   ' + response);
            System.debug('Response Body:' + response.getBody());
		    debts = (List<Debts>)JSON.deserialize(response.getBody(), List<Debts>.class);
        }
       System.debug('debts: ' + debts);
       return debts;

    }

       
}