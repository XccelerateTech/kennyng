var http = new XMLHttpRequest();

http.open('GET', '../data/file.json');



http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        console.log(JSON.parse(http.responseText));
        // let print = JSON.parse(http.responseText);
        document.getElementById("text").innerHTML = JSON.parse(http.responseText).name;
    } else {
        console.log('error occurred' + http.status);
    }
}
// onreadystatechange should be before http.send()
http.send();

