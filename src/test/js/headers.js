function defaultHeader(args) {
    //args is any json passed in through feature file 
    //can override the default headers
    karate.log(args)
    var isCustom = true;
    var header = {};
    if (isCustom) {
        header["txid_header"] = java.util.UUID.randomUUID().toString();
        header["orignating_ip"] = "127.0.0.1";
        if (args && args["accept_type"] === 'json') {
            header["Accept"]="application/json; charset=utf-8";
        }
        return header;
    } else {
        header;
    }
}