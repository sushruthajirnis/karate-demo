Feature: test some expected Ip

Background: 
* url baseUrl
* configure headers = read('classpath:headers.js') ({'accept_type':'json'})

@ipfeatureTest
Scenario: Call a simple Get
Given path 'users'
When method get
Then status 200
# And match response == read('classpath:expectedIp.json') 
