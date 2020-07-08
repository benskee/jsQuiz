// Create a 2-dimensional array with 5 questions and 5 answers
var questions = [
  ['What year was the greatest country in the world founded?', '1776'],
  ['What is your quest?', 'to seek the Holy Grail'],
  ['What is the best college football team?', 'gators'],
  ['Despite what Collin says, what is the best space saga?', 'Star Wars'],
  ['What should you do?', 'buy bitcoin']
];

var wrongAns = [];
var rightAns = [];


// This code snippet creates a print function which will allow you to call it later when you want to dispay something to the page
function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

// This code snippet builds out the HTML list. 
function buildList(arr) {
  var listHTML = "<ol>";
    for(var i=0;i<arr.length;i++) {
      listHTML += "<li>" + arr[i] + "</li>";
    }
  listHTML += "</ol>";
  return listHTML;
}

function askQuestions(arr) {
  for (var i = 0; i < arr.length; i++) {
    var quest = arr[i][0];
    var ans = prompt(quest)

    if (ans.toLowerCase() !== arr[i][1].toLowerCase()) {
      wrongAns.push(arr[i][0])
    }
    else {
      rightAns.push(arr[i][0])
    }
  }
  var outputDiv = document.getElementById("wrongs");
  outputDiv.innerHTML = buildList(wrongAns);
  var outputDiv = document.getElementById("rights");
  outputDiv.innerHTML = buildList(rightAns);
  var outputDiv = document.getElementById("tally");
  outputDiv.innerHTML = `You got ${rightAns.length} question(s) right.`;
  
}

askQuestions(questions)



// Create a FOR loop that loops through your 2-dimantional array. Create variables for quesions, answers and reponses respectively. Make sure the
// questions show up in a prompt box. Next, within your FOR loop, add a conditional statement that adds keeps track of how many answers have
// correct and how many answers you have wrong. 
//
// EXTRA CREDIT: Make it so that if the user types in a correct reponse, they can do so without making it case-sensitive to your answer. Knowing how
// to accomplish this is very beneficial. Do your best!
// for() {
    
// }

// For the last part, you need to write your code so that it prints out your code exactly as it appears on the screenshot.png file inside the project folder.
