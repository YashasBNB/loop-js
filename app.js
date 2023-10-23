// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
const driver = "Kalvian-1"
console.log(`The driver's name is ${driver}`);
const navigator = "Kalvian-2";
console.log(`The navigator's name is ${navigator}`);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (driver.length > navigator.length) {
  console.log(`The driver has the longest name, it has ${driver.length} characters.`);
} else if (driver.length < navigator.length) {
  console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${driver.length} characters!`);
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 
function print(name) {
  var vowels = "";
  for (var i = 0; i < name.length; i++) {
    const char = name[i].toLowerCase();
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      vowels += `${name[i]} `;
    }
  }
  if (vowels === "") {
    console.log("No vowels");
  } else {
    console.log(`${name} ${vowels}${vowels.trim().split(" ").map((vowel, index) => index + 1).join(" ")}`);
  }
}
print(driver);
print(navigator)
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
function Case(name) {
  var upperCaseCount = 0;
  var lowerCaseCount = 0;
  for (var i = 0; i < name.length; i++) {
    if (name[i].toUpperCase() === name[i]) {
      upperCaseCount++;
    } else if (name[i].toLowerCase() === name[i]) {
      lowerCaseCount++;
    }
  }
  console.log(`Upper case characters: ${upperCaseCount}`);
  console.log(`Lower case characters: ${lowerCaseCount}`);
}
Case(driver);
Case(navigator);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
console.log(driver.split("").join(" ").toUpperCase());
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
console.log(navigator.split("").reverse().join(""));
// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
const merged = `${driver} ${navigator}`;
console.log(merged);
const reversed = `${navigator} ${driver}`;
console.log(reversed);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (driver.localeCompare(navigator) < 0) {
  console.log("The driver's name goes first.");
} else if (driver.localeCompare(navigator) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
const Text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Integer vel risus quis lorem tristique rhoncus. 
  Etiam eu sapien in lectus dapibus eleifend. 
  In eu erat vel est auctor elementum in a justo. 
  Proin tincidunt nec elit non volutpat. 
  Sed eget velit sed eros suscipit hendrerit. 
  Suspendisse luctus non risus in faucibus. 
  Fusce id euismod ante. 
  Sed cursus, ex vel fermentum tincidunt, nunc tortor fringilla sapien, ac fermentum sapien arcu ac quam. 
  Vestibulum in purus ut elit auctor dapibus. 
  Morbi eleifend justo et luctus bibendum.
`;
const words = Text.split(/\s+/).filter(word => word.trim() !== "").length;
console.log(`Number of words in the text: ${words}`);

const latinWordCount = (Text.match(/\bet\b/gi) || []).length;
console.log(`Number of times the Latin word "et" appears: ${latinWordCount}`);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
function Palindrome(phrase) {
  const clean= phrase.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  const length = clean.length;
  
  for (var i = 0; i < length / 2; i++) {
    if (clean[i] !== clean[length - 1 - i]) {
      return false;
    }
  }
  
  return true; 
}
const phrase1 = "A man, a plan, a canal, Panama!";
const phrase2 = "race car";

console.log(Palindrome(phrase1)); 
console.log(Palindrome(phrase2)); 
