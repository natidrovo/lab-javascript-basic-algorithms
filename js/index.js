// Iteration 1: Names and Input

let uppercased = hacker1.toUpperCase().split('').join (' '); 

console.log (uppercased)

// Iteration 2: Conditionals

let letterHacker1 = hacker1[0];

let letterHacker2 = hacker2[0];

console.log (letterHacker1)

if (letterHacker1 >letterHacker2) {
    console.log ("The driver's name goes first.")
    }
else if (letterHacker1 < letterHacker2) {
  console.log("Yo, the navigator goes first definitely")
}
else if(letterHacker1 = letterHacker2) {
  console.log ("What?! You both have the same name?")
}

// Iteration 3: Loops


let newStr = hacker1.split('').reverse().join('');

console.log(newStr)

//BONUS 1
let text1 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
let text2 = "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. "
let text3 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
let textElements = [];
textElements = text2.split (" ");
  for ( i=0; i>textElements.length;i++) {
    textElements [i];
  }
console.log (textElements.length)

//BONUS 2
function phraseToCheck (str) {
    var reg = /[\W\s]/g;
    //reg = expresión regular que sirve para definir patrones, en este caso, he escogido \W (any non-alphanumerical character) y \s (any space) en todo el string (g) con el que probaremos la función.
    var strReg = str.toLowerCase().replace(reg,"");
    //replace (reg,"") nos dice que todos los caracteres que coinciden con el pattern declarado en la var reg deben ser remplazados por un espacio vacío..
    console.log (strReg);
    var reversed = strReg.split("").reverse().join("");
    if (strReg == reversed) {
      console.log ("This word is a palindrome");
    } else {
      console.log ("This word is not a palindrome");
    }
  }