// Aligns the letters in circles to spell "POWER BALL"
let letterP = document.getElementById("headerLetterP");
letterP.textContent = 'P';

let letterO = document.getElementById("headerLetterO");
letterO.textContent = 'O';

let letterW = document.getElementById("headerLetterW");
letterW.textContent = 'W';

let letterE = document.getElementById("headerLetterE");
letterE.textContent = 'E';

let letterR = document.getElementById("headerLetterR");
letterR.textContent = 'R';

let wordBALL = document.getElementById("headerBALL");
wordBALL.textContent = 'BALL';

// react to generate button press and run function
document.getElementById("button").onclick = function(){

  // Generate 5 random numbers ranging from 1 to 69 and the 
  // 6th number from 1 to 26
  let num1 = Math.floor((Math.random()* 69) + 1);
  document.getElementById("num1").innerHTML = num1;

  let num2 = Math.floor((Math.random()* 69) + 1);
  document.getElementById("num2").innerHTML = num2;

  let num3 = Math.floor((Math.random()* 69) + 1);
  document.getElementById("num3").innerHTML = num3;

  let num4 = Math.floor((Math.random()* 69) + 1);
  document.getElementById("num4").innerHTML = num4;

  let num5 = Math.floor((Math.random()* 69) + 1);
  document.getElementById("num5").innerHTML = num5;

  let num6 = Math.floor((Math.random()* 26) + 1);
  document.getElementById("num6").innerHTML = num6;
}

// let headerClass = document.getElementsByClassName("header");
// headerClass = headerClass.replace(/(\r\n|\n|\r)/gm,"")