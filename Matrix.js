function add() {
	let a11=parseFloat(document.getElementById("a11").value);
	let a12=parseFloat(document.getElementById("a12").value);
	let a21=parseFloat(document.getElementById("a21").value);
	let a22=parseFloat(document.getElementById("a22").value);
	let b11=parseFloat(document.getElementById("b11").value);
	let b12=parseFloat(document.getElementById("b12").value);
	let b21=parseFloat(document.getElementById("b21").value);
	let b22=parseFloat(document.getElementById("b22").value);
	
	document.getElementById("c11").value = a11+b11;
	document.getElementById("c12").value = a12+b12;
	document.getElementById("c21").value = a21+b21;
	document.getElementById("c22").value = a22+b22;
}
	
function Multiply() {
	let a11=parseFloat(document.getElementById("a11").value);
	let a12=parseFloat(document.getElementById("a12").value);
	let a21=parseFloat(document.getElementById("a21").value);
	let a22=parseFloat(document.getElementById("a22").value);
	let b11=parseFloat(document.getElementById("b11").value);
	let b12=parseFloat(document.getElementById("b12").value);
	let b21=parseFloat(document.getElementById("b21").value);
	let b22=parseFloat(document.getElementById("b22").value);
	
	document.getElementById("c11").value = (a11*b11+a12*b21);
	document.getElementById("c12").value = (a11*b12+a12*b22);
	document.getElementById("c21").value = (a21*b11+a22*b21);
	document.getElementById("c22").value = (a21*b12+a22*b22);
}
