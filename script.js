
document.addEventListener('DOMContentLoaded', () => {
var list = [
  "Within seven years, one single pair of unfixed cats and their offspring can produce up to 420,000 kittens.",
  "Cats cannot taste sweet foods, due to a lack of sweet taste buds.",
  "While cats can climb up trees face-first, they cannot climb down the same way, because their claws curve backwards.",
  "A cat's range of hearing is about 3 times that of a human, which means cats have superior sound-detection skills.",
  "Adult cats only meow at humans - not at other cats. Kittens meow at their mother to let them know when they are cold or hungry, but once they enter adulthood, they no longer meow at other cats.",
];

var display = document.getElementById("hello");
var button = document.getElementById("button");

var fact = document.getElementById("fact");
var btn = document.getElementById("ahh");
var i=0;
  
button.addEventListener("click", displayName);
btn.addEventListener("click", displayFact);

function displayName(){
  var text = document.getElementById("text").value;
  display.innerHTML = "Hello " + text + "! Ready to make a change?";
}

function displayFact(){
  console.log("e");
  fact.innerHTML = list[i];
  i++;
  if (i==list.length){
    i=0;
  }
}
  });