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