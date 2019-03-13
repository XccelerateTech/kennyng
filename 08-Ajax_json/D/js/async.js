
    function CreateUser(numberOfUser,callback){    
    var http = new XMLHttpRequest();

    http.open('GET', `https://randomuser.me/api/?results=${numberOfUser}`);

    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
            let users = http.responseText;
            callback (users);
        } else {
        console.log('error occurred' + http.status);
        }
    }   
// onreadystatechange should be before http.send()
    http.send();
}
 class User {
    constructor(userList){
      this.firstName = userList.name.first;
      this.lastName = userList.name.last;
      this.email = userList.email;
      this.DoB = userList.dob.date;
    }
  }
CreateUser(5,function(users){
  let usersList = JSON.parse(users);
  // console.log(usersList);
  // let i=0;
 
  // for(i=0,i<usersList.length,i++){
  //   const user = new User({firstName:usersList.result)
  // }

  console.log(usersList)
  let b = usersList.results.map(function(user){
    return new User(user)
  })
  console.log('hello ' + usersList.results)
  console.log(b)

});

