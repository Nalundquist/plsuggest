// Business Logic

function quizTabulate(){

	const albumVal = parseInt(document.querySelector("input[name='albumInput']:checked").value);
	const wordVal = parseInt(document.querySelector("input[name='wordInput']:checked").value);
	const peanutVal = parseInt(document.querySelector("input[name='peanutInput']:checked").value);
	const sMVal = parseInt(document.querySelector("input[name='sMInput']:checked").value);
	const candyVal = parseInt(document.querySelector("input[name='candyInput']:checked").value);

	const quizVal = albumVal + wordVal + peanutVal + sMVal + candyVal;
	return quizVal;
	return nameResult
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

	ruby.classList.add("hidden");
	python.classList.add("hidden");
	javaScript.classList.add("hidden");
	cSharp.classList.add("hidden");
	swift.classList.add("hidden");
	
	const nameFill = document.getElementById("nameInput").value;
	
	document.querySelector("nameResult").innerText = nameFill;

	if (globalQuizVal >= 5 && globalQuizVal < 11) {
		const ruby = document.getElementById("ruby");
		ruby.removeAttribute("class");
		ruby.classList.add("displayResult");
	}  else if (globalQuizVal >= 11 && globalQuizVal < 16) {
		const python = document.getElementById("python");
		python.removeAttribute("class");
		python.classList.add("displayResult");
	}  else if (globalQuizVal >= 16 && globalQuizVal < 21) {
		const javaScript = document.getElementById("javaScript");
		javaScript.removeAttribute("class");
		javaScript.classList.add("displayResult");
	}  else if (globalQuizVal >= 21 && globalQuizVal < 25) {
		const cSharp = document.getElementById("cSharp");
		cSharp.removeAttribute("class");
		cSharp.classList.add("displayResult");
	}  else if (globalQuizVal > 500) {
		const swift = document.getElementById("swift");
		swift.removeAttribute("class");
		swift.classList.add("displayResult");
	} 

}

window.addEventListener("load", function() {
	let form = document.getElementById("plsuggester");
	form.addEventListener("submit", quizResult);
}

)