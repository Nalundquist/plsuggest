// Business Logic

function quizTabulate(){

	const albumVal = parseInt(document.querySelector("input[name='albumInput']:checked").value);
	const wordVal = parseInt(document.querySelector("input[name='wordInput']:checked").value);
	const peanutVal = parseInt(document.querySelector("input[name='peanutInput']:checked").value);
	const sMVal = parseInt(document.querySelector("input[name='sMInput']:checked").value);
	const candyVal = parseInt(document.querySelector("input[name='candyInput']:checked").value);

	const quizVal = albumVal + wordVal + peanutVal + sMVal + candyVal;
	return quizVal;
}

// User Interface Logic
function quizResult(event){
	event.preventDefault();
	const globalQuizVal = quizTabulate();

	const ruby = document.getElementById("ruby");
	const python = document.getElementById("python");
	const javaScript = document.getElementById("javaScript");
	const cSharp = document.getElementById("cSharp");
	const swift = document.getElementById("swift");
	const error = document.getElementById("error");

	ruby.classList.add("hidden");
	python.classList.add("hidden");
	javaScript.classList.add("hidden");
	cSharp.classList.add("hidden");
	swift.classList.add("hidden");
	error.classList.add("hidden");
	
	const nameFill = document.getElementById("nameInput").value;

	if (globalQuizVal >= 5 && globalQuizVal < 11) {
		document.querySelector("span#nameRuby").innerText = nameFill
		ruby.removeAttribute("class");
		ruby.classList.add("displayResultRuby");
		document.querySelector("body").setAttribute("class", "bodyRuby");
		document.getElementById("btn").setAttribute("class", "btnRuby");
		document.getElementById("header").setAttribute("class", "headerRuby");
		document.getElementById("nameDisplay").setAttribute("class", "qdisplayRuby");
		document.getElementById("q1").setAttribute("class", "qdisplayRuby");
		document.getElementById("q2").setAttribute("class", "qdisplayRuby");
		document.getElementById("q3").setAttribute("class", "qdisplayRuby");
		document.getElementById("q4").setAttribute("class", "qdisplayRuby");
		document.getElementById("q5").setAttribute("class", "qdisplayRuby");
		document.getElementById("submit").setAttribute("class", "qdisplayRuby");
	}  else if (globalQuizVal >= 11 && globalQuizVal < 15) {
		document.querySelector("span#namePython").innerText = nameFill;
		python.removeAttribute("class");
		python.classList.add("displayResult");
	}  else if (globalQuizVal >= 15 && globalQuizVal < 19) {
		document.querySelector("span#nameJS").innerText = nameFill;
		javaScript.removeAttribute("class");
		javaScript.classList.add("displayResult");
	}  else if (globalQuizVal >= 19 && globalQuizVal < 25) {
		document.querySelector("span#nameCS").innerText = nameFill;
		cSharp.removeAttribute("class");
		cSharp.classList.add("displayResult");
	}  else if (globalQuizVal > 500) {
		document.querySelector("span#nameSwift").innerText = nameFill;
		swift.removeAttribute("class");
		swift.classList.add("displayResult");
	} else {
		document.querySelector("span#nameError").innerText = nameFill;
		error.removeAttribute("class");
		error.classList.add("displayResult");
	}

}

window.addEventListener("load", function() {
	let form = document.getElementById("plsuggester");
	form.addEventListener("submit", quizResult);
}

)