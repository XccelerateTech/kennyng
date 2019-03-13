const reverse_array = (input_number) =>{
    let numString = input_number.toString();
    let numSplit = numString.split("");
    return numSplit.sort(function (a,b){return b-a}).map(str => parseInt(str));
}


console.log (reverse_array(12345));