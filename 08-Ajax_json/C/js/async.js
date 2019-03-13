
    function whoIsInSpace(callback){    
    var http = new XMLHttpRequest();

    http.open('GET', `http://api.open-notify.org/astros.json`);

    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
          let data = JSON.parse(http.responseText);
          let i=0;
          let nameList =[];
          for(i=0;i<data.people.length;i++){
            nameList.push(data.people[i].name);
            
          }
          callback(nameList);

        } else {
        console.log('error occurred' + http.status);
        }
    }   
// onreadystatechange should be before http.send()
    http.send();
}

whoIsInSpace(function(nameList){
  console.log(nameList);
})

