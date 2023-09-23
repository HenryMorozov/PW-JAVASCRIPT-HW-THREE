
let amount = prompt('Please enter the number of balls: ') 
 
for(let ball = 1; ball <= amount; ball++) { 
  if(ball == 1) { 
    console.log(ball + ' ball'); 
  }else { 
    console.log(ball + ' balls'); 
  }
} 

let number = prompt('Please enter your number: '); 
let degree = prompt('Please enter your degree: '); 
let res = 1 
 
if(isNaN(number) || isNaN(degree)) { 
  alert('You entered an incorrect value!') 
}else { 
  res = 1; 
} 
 
for(let i = 0; i < degree; i++) { 
  res = number * res 
}
alert('Your value: ' + res);

output = +prompt('Please enter a number: ');
averageValue = prompt('Please enter an indent character: ');
finalValue = prompt('Please enter ending character: ');

let outcome = ' '; 
for (let i = 0; i < output; i++) { 
  if(outcome == 0) { 
    outcome = finalValue 
  }else { 
   outcome = averageValue + outcome 
  } 
 console.log(outcome); 
}