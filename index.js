// code your solution here
const record = [
    { year: "2015", result: "N/A"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "N/A"},
    //...
  ]



function superbowlWin(array){
    let winningElement =  array.find(element => element.result === "W")
    if(winningElement){
       return winningElement.year
    }
}

console.log(superbowlWin(record));

