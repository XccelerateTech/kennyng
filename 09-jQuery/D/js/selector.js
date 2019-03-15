console.log( $('input[name="phone"]') );
console.log( $(".row")[1] );
console.log( $("section") );
console.log( $('input[name=phone]').attr('placeholder') );
console.log( $("th") );

//-----------------------------------B-------------------------//
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

var clear = $('<input>',{type: 'reset', value: 'clear', id: "clear_btn"});
$('#row-submit').append(clear);

$('tr').css('color', 'blue');
$('td').css('color', 'red');
//-----------------------------------B-------------------------//

//-----------------------------------D-------------------------//

$('input[name="name"]').on('keydown',function(e){
    let input = e.target.value;
    if (input.length>50){
        $(this).css('border-color', 'red')
    }else{
        $(this).css('border-color', 'green')
    }
}
  );

  $('input[name="phone"]').on('keydown',function(e){
    let input = e.target.value;
    if (input.length<6||input.length>16||isNaN(input)){
        $(this).css('border-color', 'red')
    }else{
        $(this).css('border-color', 'green')
    }
}

  );






