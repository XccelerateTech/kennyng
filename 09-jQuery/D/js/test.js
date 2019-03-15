$('#update-form').submit(function(e){
    e.preventDefault();
    var newContactArry = [`${e.target.name.value}`,`${e.target.phone.value}`,`${e.target.email.value}`];
    for(let i = 0 ; i< $("th").length ; i++){
        var td = $("<td>", {id: fieldAtt[i]});
        var tr = $("<tr>", {id: `new${i}`, class: 'row'});
        $("tbody").append(tr);
        $(`new${i}`).append(td);
        let content = $(`#${fieldAtt[i]}`).html();
        content += newContactArry[i];
        $(`#${fieldAtt[i]}`).html(content);
    };
});
