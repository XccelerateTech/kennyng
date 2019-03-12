var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

console.log(players.filter(players => players.club === "FC Barcelona"));

console.log(players.map(function (item,index, array){
    if (item.club ==="FC Barcelona"){
        return item;
    }
    return false;
    }
));