var URI = require('URIjs');

var url = document.getElementById("urlInput");
var radios = document.getElementsByName('domain');

for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener("click", radioEventHandler, false);
}

function radioEventHandler () {
  var url_value = url.value;
  var div = document.getElementById("result");
  var domain = this.value;
  var results = URI(url_value).tld(domain);
  div.innerHTML = results;
  document.getElementById('searchResults').className = "show";
}


      
      

