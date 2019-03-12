var marks = [

    { mark: 99 }, { mark: 80 }, { mark: 60 }, { mark: 70 }, { mark: 50 },

    { mark: 67.6 }, { mark: 62.4 }, { mark: 87.5 }, { mark: 55 }
    ];

var markArray = (marks.map(function(marks){
    return marks.mark
}));

console.log(markArray);

var SumOfMark = markArray.reduce (function(SumMark,mark){
    return SumMark+mark;
});

console.log(Math.round(SumOfMark/marks.length));

