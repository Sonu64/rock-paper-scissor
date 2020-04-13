options = ["rock", "paper", "scissors"];
const generateNumber = () => Math.floor(Math.random() * (2-0+1)) + 0;
const moveUser = (choice) => {
	const playerMove = choice;
	const userMove = document.getElementById('user-move');//user-rock.png
	const computerMove = moveComputer(options[generateNumber()]);
	userMove.src = "user-" + choice + ".png"; 
	// alert(playerMove);
	// alert(computerMove);
	updateScores(playerMove, computerMove);
}
const moveComputer = (choice) => {
	// alert(choice);
	const computerMove = document.getElementById('computer-move');
	computerMove.src = choice + ".png"; //user-rock.png	
	return choice;
}
const updateScores = (playerMove, computerMove) => {
	if(playerMove == 'rock') {
		// alert(playerMove);
		if (computerMove == 'paper') {
			let currentScore = parseInt(document.getElementById("computer-score-main").textContent);
			// alert(currentScore);
			document.getElementById("computer-score-main").innerHTML = currentScore + 1;
		}
		if (computerMove == 'scissors') {
			let currentScore = parseInt(document.getElementById("user-score-main").textContent);
			// alert(currentScore);
			document.getElementById("user-score-main").innerHTML = currentScore + 1;
		}
	}
	if(playerMove == 'paper') {
		if (computerMove == 'rock') {
			let currentScore = parseInt(document.getElementById("user-score-main").textContent);
			// alert(currentScore);
			document.getElementById("user-score-main").innerHTML = currentScore + 1;
		}
		if (computerMove == 'scissors') {
			let currentScore = parseInt(document.getElementById("computer-score-main").textContent);
			// alert(currentScore);
			document.getElementById("computer-score-main").innerHTML = currentScore + 1;
		}
	}
	if(playerMove == 'scissors') {
		if (computerMove == 'paper') {
			let currentScore = parseInt(document.getElementById("user-score-main").textContent);
			// alert(currentScore);
			document.getElementById("user-score-main").innerHTML = currentScore + 1;
		}
		if (computerMove == 'rock') {
			let currentScore = parseInt(document.getElementById("computer-score-main").textContent);
			// alert(currentScore);
			document.getElementById("computer-score-main").innerHTML = currentScore + 1;
		}
	}
	if(parseInt(document.getElementById("user-score-main").textContent) >= 5) {
		winUser();
	}
	if(parseInt(document.getElementById("computer-score-main").textContent) >= 5) {
		winComputer();
	}
}
const winUser = () => {
	playAudio("win");
	document.getElementById('board').style.display = "none";
	document.getElementById('result').style.display = "block";
	document.getElementById('user-win-text').style.display = "block";
	document.getElementById('user-lose-text').style.display = "none";
	document.getElementById('controls').style.display = "none";
}
const winComputer = () => {
	playAudio("lose");
	document.getElementById('board').style.display = "none";
	document.getElementById('result').style.display = "block";
	document.getElementById('user-win-text').style.display = "none";
	document.getElementById('user-lose-text').style.display = "block";
	document.getElementById('controls').style.display = "none";
}
const reset = () => {
	location.reload();
}
const playAudio = (status) => {
if (status === "win") {
 	var x = document.getElementById('win-sound');
	x.play();
}
else {
 	var x = document.getElementById('lose-sound');
	x.play();	
}
}