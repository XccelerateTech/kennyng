console.log( $('input[name="phone"]') );
console.log( $(".row")[1] );
console.log( $("section") );
console.log( $('input[name=phone]').attr('placeholder') );
console.log( $("th") );

var t = $("<title>");
$("head").append(t);

var title = $('title').html();
title += "Kenny's contact list application";
$('title').html(title);

var fieldAtt = ['Name','Telephone_Number',"email"]
var newContact = ['Peter','123456789','peter@gmail.com']
var tr = $("<tr>", {id: "new"});
$("tbody").append(tr);
$("#new").addClass("row");
for(let i = 0 ; i< $("th").length ; i++){
    var td = $("<td>", {id: fieldAtt[i]});
    $("#new").append(td);
    let content = $(`#${fieldAtt[i]}`).html();
    content += newContact[i];
    $(`#${fieldAtt[i]}`).html(content);
};

var clear_row = $('<div>',{id : 'row-clear'})
$('#form1').append(clear_row);
var clear = $('<input>',{type: 'submit', value: 'clear'});
$('#row-clear').append(clear);

$('tr').css('color', 'blue');
$('td').css('color', 'red');


