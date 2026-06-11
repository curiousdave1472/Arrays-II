//Assigned the array as words
var words = [ "Hi", "Butterfly", "Tiger", "Deer"];

//Create function to find the word inside the variable "WORDS".
function findElement(words, word){

//Create the for loop to search inside the array.

for(var i=0; i < words.length; i++) {

//Set the condition of the search
    if (words[i] === word)

//Set the return values
    return true;
}
    return false;
};

console.log(findElement(words, "Leo"));

console.log(findElement(words, "Deer"))
