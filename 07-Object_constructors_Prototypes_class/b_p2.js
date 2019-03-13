function player (name,health){
    this.name = name;
    this.health = health;
};

player.prototype.attack = function (opponent){
    opponent.health-=10;
};

player.prototype.heal = function (player){
    player.health+=10;
};

var p1 = new player("Kenny",40);
var p2 = new player("Sam",40)
var lastAttacker = null;
var p1count = 0;
var p2count = 0;


while (p1.health>0&&p2.health>0){
    let att = Math.round(Math.random());
    if (att==0){
        if (lastAttacker == p1.name){
            if(p1count%3==0){
                p1.attack(p2);
                lastAttacker=p1.name;
                p1.heal(p1);
                p1count=0;
                console.log(p1.name+" win this round")
                console.log(p2.name+" health is "+p2.health)
                console.log(lastAttacker);
                console.log(p1count);

            }else{
                p1.attack(p2);
                lastAttacker = p1.name;
                p1count++;
                console.log(p1.name+" win this round")
                console.log(p2.name+" health is "+p2.health)
                console.log(lastAttacker);
                console.log(p1count);
            }

        }else{
            p1.attack(p2);
            lastAttacker=p1.name;
            p1count = 0;
            p1count++;
            console.log(p1.name+" win this round")
            console.log(p2.name+" health is "+p2.health)
            console.log(lastAttacker);
            console.log(p1count);
        }
    }
    else{
        if (lastAttacker == p2.name){
            if(p2count%3==0){
                p2.attack(p1);
                lastAttacker=p2.name;
                p2.heal(p2);
                p2count=0;
                console.log(p2.name+" win this round")
                console.log(p1.name+" health is "+p1.health)
                console.log(lastAttacker);
                console.log(p2count);

            }else{
                p2.attack(p1);
                lastAttacker = p2.name;
                p2count++;
                console.log(p2.name+" win this round")
                console.log(p1.name+" health is "+p1.health)
                console.log(lastAttacker);
                console.log(p2count);
            }

        }else{
            p2.attack(p1);
            lastAttacker=p2.name;
            p2count = 0;
            p2count++;
            console.log(p2.name+" win this round")
            console.log(p1.name+" health is "+p1.health)
            console.log(lastAttacker);
            console.log(p2count);
        }
        };
    };
if (p2.health>p1.health){
    console.log(p2.name+" win this game");
}
else{
    console.log(p1.name+" win this game");
}