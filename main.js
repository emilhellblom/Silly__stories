// Enables JS to alter HTML elements (DOM manipulation)
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
// Defines a function to call on a random string stored within variables further down in the code
function randomValueFromArray(array){
  var random = Math.floor(Math.random()*array.length);
  return array[random];
}
// Defines the variable "storyText". Also note the :insertx: etc within the string, these are placeholders that we will be able to change further down in the code
var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
// In these variables we have used arrays to store multiple strings withing a single variable, these are the strings that will alter the story down in the "result" function
var insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
var insertY = ['the soup kitchen','Disneyland','the White House'];
var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

// This line makes the "Generate random story"-button clickable
randomize.addEventListener('click', result);

// Here we define the function "result"
function result() {
// By defining a new variable "newStory" we can make changes within the function to what will be displayed on the website without having to change the text in the "storyText"-variable
  var newStory = storyText;
// These new variables calls on a random string from the "insertX" etc variables we defined above
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);
// Using replace here we call on a random string from xItem etc to replace the placeholders we used in the "storyText"-variable
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
// Here we call on the input the user makes into the customName field and replaces the placeholder "Bob" with what ever the user chose
  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob',name);
  }
// If the user checks the UK box we here alter the "newStory"-variable to display UK measurements instead
  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.071429) + ' stone';
    var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
// Here we see what line the code actually alters, we remove the lines and replace them with the finished formula defined in "weight" and "temperature"-variables above
    newStory = newStory.replace('94 farenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }
// We dont want the user to see the original storyText that contains the placeholders so we have hidden the paragraph in the HTML document (see line 25-29), this line below changes the paragraph to visible and shows the altered "newStory"-variable with the user input name and the randomized strings instead of the original
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
