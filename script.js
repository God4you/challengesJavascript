//challenge 1: your age in days

function ageInDays() {
  var birthYear = prompt("What year were you born?");
  var ageConvertInDays = (2020 - birthYear) * 365;
  //creating h1 html element
  var h1 = document.createElement("h1");
  // the answer to parse to our h1 element
  var textAnswer = document.createTextNode(
    "You are " +
      ageConvertInDays +
      " days old since your birthyear " +
      birthYear
  );
  // giving h1 the id
  h1.setAttribute("id", "showDays");
  // giving the answer to h1 element
  h1.appendChild(textAnswer);
  //giving the direction for showcase of our h1 result
  document.getElementById("flex-box-result").appendChild(h1);
  console.log(ageConvertInDays);
}
//Remove the result for the user.
function reset() {
  document.getElementById("showDays").remove();
}
