$(function(){ 
    $.ajax({
        url:"../data/data.json",
        beforeSend:function(xhr){
            // This function will be run before sending ajax.
        },
        type: "GET"
    }).done(function(data){
        console.log("This function will be run if the ajax is successful");
    }).fail(function(data){
        console.log("This function will be run if the ajax if failed");
    }).always(function(data){
        console.log("This function runs no matter success or fail.");
    });
});