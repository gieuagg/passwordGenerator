charsArray = []

charsArray.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
charsArray.push("a", "b", "c", "d", "e", "f", "g", "e", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "/", "!", "?", ":")
console.log(charsArray)
//same thing happens with the following
//const alpha = Array.from(Array(26)).map((e, i) => i + 65);
//const alphabet = alpha.map((x) => String.fromCharCode(x));
//console.log(alphabet);

function generatePassword(){
  let passLength = document.getElementById("passLength").value  
  let customArr = []
  if(passLength > '7') {

            
            for(let i=0; i < 4; i++){  
            customArr = charsArray[Math.floor(Math.random() * passLength)]
                
                         console.log(customArr) 
                // document.getElementById("suggestion1").textContent = customArr[0]
                // document.getElementById("suggestion2").textContent = customArr[1]
                // document.getElementById("suggestion3").textContent = customArr[2]
                // document.getElementById("suggestion4").textContent = customArr[3]
                }
    }
    else{
        alert("Please choose a number above 7")
     }
    }   

generatePassword()