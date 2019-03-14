var section = document.getElementById('hero');
var icon1 = document.getElementById('icon1');
var icon2 = document.getElementById('icon2');
var icon3 = document.getElementById('icon3');
var icon4 = document.getElementById('icon4');
var heading = document.getElementById('heading');
var button = document.getElementById('button');
console.log(icon1.clientHeight);
console.log(heading.childNodes[1].innerHTML);
console.log(heading);

function action(){
    section.removeChild(section.childNodes[1]);
    heading.childNodes[1].innerHTML = "welcome to my flower shop";
    heading.childNodes[3].innerHTML ="buy flowers";
    button.style.backgroundColor = "red";
    button.removeEventListener('click', action);
}

button.addEventListener("click",action);

icon1.addEventListener("mouseover",function(){
    icon1.style.height = "240px";
    icon1.style.width = "240px";
});
icon1.addEventListener("mouseout",function(){
    icon1.style.height = "112px";
    icon1.style.width = "112px";
});

icon2.addEventListener("mouseover",function(){
    icon2.style.height = "240px";
    icon2.style.width = "240px";
});
icon2.addEventListener("mouseout",function(){
    icon2.style.height = "112px";
    icon2.style.width = "112px";
});
icon3.addEventListener("mouseover",function(){
    icon3.style.height = "240px";
    icon3.style.width = "240px";
});
icon3.addEventListener("mouseout",function(){
    icon3.style.height = "112px";
    icon3.style.width = "112px";
});
icon4.addEventListener("mouseover",function(){
    icon4.style.height = "240px";
    icon4.style.width = "240px";
});
icon4.addEventListener("mouseout",function(){
    icon4.style.height = "112px";
    icon4.style.width = "112px";
});