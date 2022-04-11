function calc()
{

let n1 =parseInt(document.getElementById('n1').value);
let n2 =parseInt(document.getElementById('n2').value);

let oper = document.getElementById('operators').value;

if(oper === '+'){
	document.getElementById('result').value = n1+n2;
}

if(oper === '-'){
	document.getElementById('result').value = n1-n2;
}

if(oper === '*'){
	document.getElementById('result').value = n1*n2;
}

if (oper === '/') {
	document.getElementById('result').value = n1/n2;
}

}



function guessTheNum(){
	document.getElementById('look').value = Math.floor(Math.random() * 11);
}



function changeToUppercase(){

	let lower = document.getElementById('inputString').value;
	let res = lower.toUpperCase();
	
	document.getElementById('inputString').value = res;
	console.log(res)
	
}


function changeToLowerCase(){
	let lower = document.getElementById('inputString').value;
	let res = lower.toLowerCase();
	document.getElementById('inputString').value = res;	
}

function countChars(){
	let res = document.getElementById('inputString').value;
	let count = res.length
	document.getElementById('numRes').value = count;
}

function countSpaces(){
	
	let res = document.getElementById('inputString').value
	let spaces = res.split(" ").length - 1

	document.getElementById('numRes').value = spaces;
}


function showMsg(){	
	match = Math.floor(Math.random() * 6);
	switch (match) {
		case 1:
			let g1 = "You are good!"; 
		 	document.getElementById('goodMsg').value = g1;
				 
		  break;
		case 2:
			let b1 = "You are bad!";
			document.getElementById('badMsg').value = b1;
			
		  break;
		case 3:
			let g2 = "You are really good!";
			document.getElementById('goodMsg').value = g2;
			
		  break;
		  case 4:
			let b2 = "You are really bad!";
			document.getElementById('badMsg').value = b2;
				
		  break;
		case 5:
			let g3 = "You are pretty awesome!";
			document.getElementById('goodMsg').value = g3;
			
		  break;
		  case 6:
			let b3 = "You are pretty nasty!";
			document.getElementById('badMsg').value = b3;
	
		  break;
		  default:
			console.log("Press one more time");
			break;
	  }
 	
	}




