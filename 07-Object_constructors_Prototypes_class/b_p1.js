function player (name,health){
    this.name = name;
    this.health = health;
};

player.prototype.attack = function (opponent){
    opponent.health-=10;
};

var p1 = new player("Kenny",40);
var p2 = new player("Sam",40)

while (p1.health>0&&p2.health>0){
    let att = Math.round(Math.random());
    if (att==0){
        p1.attack(p2);
        console.log(p1.name+" won this round");
        console.log(p2.name+" Health "+p2.health);
    }
    else{
        p2.attack(p1);
        console.log(p2.name+" won this round");
        console.log(p1.name+" Health "+p1.health);
    };
};
if (p2.health>p1.health){
    console.log(p2.name+" win this game");
}
else{
    console.log(p1.name+" win this game");
}