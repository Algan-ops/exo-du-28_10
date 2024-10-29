// function mostFrequent(arr) {
//     let occurrences = {};
//     let maxCount = 0;
//     let mostFrequentElement = null;

//     for (let element of arr) {
//         occurrences[element] = (occurrences[element] || 0) + 1;

//         if (occurrences[element] > maxCount) {
//             maxCount = occurrences[element];
//             mostFrequentElement = element;
//         }
//     }
//     return mostFrequentElement;
// }
// const tableau = ["arr", "value", "arr", "value", "arr", "value", "value"];
// console.log(mostFrequent(tableau));




                        //----------exo14----------//



// function palindrome(str) {

//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
//     return cleanedStr === cleanedStr.split('').reverse().join('');
// }
// console.log(palindrome("eye"));                          
// console.log(palindrome("_eye"));                         
// console.log(palindrome("race car"));                     
// console.log(palindrome("not a palindrome"));             
// console.log(palindrome("A man, a plan, a canal. Panama"));
// console.log(palindrome("never odd or even"));            
// console.log(palindrome("nope"));                         
// console.log(palindrome("almostomla"));                   
// console.log(palindrome("My age is 0, 0 si ega ym."));    
// console.log(palindrome("1 eye for of 1 eye."));          
// console.log(palindrome("0_0 (: /-\\ 🙂 0-0"));          
// console.log(palindrome("five|_/|four"));

                            // exo jsp //

// function afficherMessage() {
//     const userInput = document.getElementById("userInput").value;
//     const messageElement = document.getElementById("message");

//     if (userInput === "Bonjour") {
//         messageElement.textContent = "Bonne journée !";
//         messageElement.style.color = "green";
//     } else if (userInput === "Au revoir") {
//         messageElement.textContent = "À la prochaine !";
//         messageElement.style.color = "green";
//     } else {
//         messageElement.textContent = "Je ne comprends pas";
//         messageElement.style.color = "red";
//     }
// }

                               // exo jsp //

// function calculateSum() {
//     const number1 = parseFloat(document.getElementById("number1").value);
//     const number2 = parseFloat(document.getElementById("number2").value);

//     if (isNaN(number1) || isNaN(number2)) {
//         document.getElementById("result").textContent = "Résultat : Veuillez entrer des nombres valides.";
//         return;
//     }
//     const sum = number1 + number2;
//     document.getElementById("result").textContent = "Résultat : " + sum;
// }

