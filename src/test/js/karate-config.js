function setup() {
  var config = {};
  var env = karate.properties['ENV'];
  var testsuite = karate.properties['SUT'];
  if (env) {
    karate.log("env passed in was ", env);
    karate.log("...Loading env properties based on the passed in env");
    //read the json file for urls
    var properties = karate.read('classpath:' + env + '-urls.json');
   // karate.log(properties);
    if (properties[env]["isUnsecure"] === "true") {
      var http_prefix = "http://"
      if (testsuite == 'ip') {
        config["baseUrl"] = http_prefix + properties[env]["baseurl_ip"];
      } else if (testsuite === 'posts') {
        config["baseUrl"] = http_prefix + properties[env]["baseurl_headers"];
      }

    }
    else if (properties[env]["isUnsecure"] === "false") {
      var http_prefix = "https://"
      if (testsuite == 'ip') {
        config["baseUrl"] = http_prefix + properties[env]["baseurl_ip"];
      } else if (testsuite === 'posts') {
        config["baseUrl"] = http_prefix + properties[env]["baseurl_headers"];
      }
    }
    else{
      config["baseUrl"]=null;
    }
    karate.configure('connectTimeout', 5000)
    karate.configure('readTimeout', 10000)
    karate.log("config" + JSON.stringify(config));
    return config;
  }
}