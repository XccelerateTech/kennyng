function informMe(endpoint, value,callback){
    var http = new XMLHttpRequest();

    http.open('GET', `https://restcountries.eu/rest/v2/${endpoint}/${value}`);



    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
        
        let data = http.responseText ;  
        callback(data);
      
        } else {
        console.log('error occurred' + http.status);
        }
    }   
// onreadystatechange should be before http.send()
    http.send();

; // Return the Data by calling callback with the resulting data 
}

informMe("currency","cop",function(data){
  console.log(JSON.parse(data));
  let obj = JSON.parse(data)
  console.log(obj[0].capital)
});

