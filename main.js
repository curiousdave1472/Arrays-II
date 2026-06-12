

//Assigned the array as words
var words = [ "Hi", "Butterfly", "Tiger", "Deer"];

//Create function to find the word inside the variable "WORDS".
function findElement(words, word){

//Create the for loop to search inside the array.

for(var i=0; i < words.length; i = i + 1) {

//Set the condition of the search
    if (words[i] === word)

//Set the return values
    {return true;}
}
    return false;;
}
// Else did not work!

console.log(findElement(words, "Butterfly"));

console.log(findElement(words, "Deer"));

console.log(findElement(words, "Buffalo"));

// The result should be True , True and false.