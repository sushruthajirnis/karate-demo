Feature: test some expected header

Background: 
* url baseUrl
* configure headers = read('classpath:headers.js') ({'accept_type':'json'})

@postfeature
Scenario: Call a simple Get
Given path '/posts'
When method get
Then status 200
And match response == read('classpath:expectedPosts.json') 
