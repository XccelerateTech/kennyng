function removeElements(){
    let elementsList = document.getElementById("info-field");
    console.log(elementsList);
    elementsList.removeChild(elementsList.childNodes[1])
};

removeElements();