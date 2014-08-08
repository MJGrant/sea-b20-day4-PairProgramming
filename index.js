// var URI = require('URIjs');




var url = document.getElementById("urlInput");
url.addEventListener("blur", blurEventHandler, false);

var radios = document.getElementsByName('domain');
console.log(radios);
for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener("click", radioEventHandler, false);
}


function radioEventHandler () {
  console.log("radio");
}


function blurEventHandler() {
  var url_value = url.value;
  var div = document.getElementById("result");
  result.innerHTML = url_value;

  // var results = URI(url)
  // .tld(domain)
}


      
      

