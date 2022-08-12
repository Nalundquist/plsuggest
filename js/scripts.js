// Business Logic

function quizTabulate(){

	const nameResult = document.getElementById("nameInput").value;
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

	const error = document.getElementById("error")
	const ruby = document.getElementById("ruby")
	const python = document.getElementById("python")
	const javaScript = document.getElementById("javaScript")
	const cSharp = document.getElementById("cSharp")
	const swift = document.getElementById("swift")

	error.classList.add("hidden")
	ruby.classList.add("hidden")
	python.classList.add("hidden")
	javaScript.classList.add("hidden")
	cSharp.classList.add("hidden")
	swift.classList.add("hidden")

	if (globalQuizVal < 5){
		const error = document.getElementById("error")
		error.removeAttribute("class")
	}  else if (globalQuizVal >= 5 && globalQuizVal < 11) {
		const ruby = document.getElementById("ruby")
		ruby.removeAttribute("class")
	}  else if (globalQuizVal >= 11 && globalQuizVal < 16) {
		const python = document.getElementById("python")
		python.removeAttribute("class")
	}  else if (globalQuizVal >= 16 && globalQuizVal < 21) {
		const javaScript = document.getElementById("javaScript")
		javaScript.removeAttribute("class")
	}  else if (globalQuizVal >= 21 && globalQuizVal < 25) {
		const cSharp = document.getElementById("cSharp")
		cSharp.removeAttribute("class")
	}  else if (globalQuizVal > 500) {
		const swift = document.getElementById("swift")
		swift.removeAttribute("class")
	}  else {
		const error = document.getElementById("error")
		error.removeAttribute("class")
	}


	
}

window.addEventListener("load", function() {
	let form = document.getElementById("plsuggester")
	form.addEventListener("submit", quizResult)
}

)