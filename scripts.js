let countRound = 1;

let scoreOne = 0;
let scoreTwo = 0;
let sumScoreOne = 0;
let sumScoreTwo = 0;

let scoreRoundOne = 0;
let scoreRoundTwo = 0;


function startGame() {
	document.getElementById("openGame").style.display = "block";
}

function clickPlayer1() {
	scoreOne = randomScores()
	sumScoreOne += scoreOne;
	document.getElementById("countScoreOne").innerHTML = sumScoreOne;
	document.getElementById("players1").disabled = true;
	document.getElementById("players2").disabled = false;
	ComprasionScore();
}

function clickPlayer2() {
	scoreTwo = randomScores()
	sumScoreTwo += scoreTwo;
	document.getElementById("countScoreTwo").innerHTML = sumScoreTwo;
	document.getElementById("players2").disabled = true;
	document.getElementById("players1").disabled = false;
	ComprasionScore();
}

function ComprasionScore() {
	if (scoreTwo != 0 && scoreOne != 0) {
		if (sumScoreOne > sumScoreTwo) {
			animationRounds('60px', 'white')
			animationScore('roundScoreOne', '90px', '#00D22E')
			animationRandomNumber('countScoreTwo', 'red')
			blockButtons()
			document.getElementById("hatFill").innerHTML = "Player 1 won !";
			scoreRoundOne++;
			document.getElementById("roundScoreOne").innerHTML = scoreRoundOne;
			scoreTwo = 0;
			scoreOne = 0;
			setTimeout(Counter, 1500)
		} else if (sumScoreOne < sumScoreTwo) {
			animationRounds('60px', 'white')
			animationScore('roundScoreTwo', '90px', '#00D22E')
			animationRandomNumber('countScoreOne', 'red')
			blockButtons()
			document.getElementById("hatFill").innerHTML = "Player 2 won !";
			scoreRoundTwo++;
			document.getElementById("roundScoreTwo").innerHTML = scoreRoundTwo;
			scoreTwo = 0;
			scoreOne = 0;
			setTimeout(Counter, 1500)
		}
		else {
			animationRounds('60px', 'white')
			blockButtons()
			document.getElementById("hatFill").innerHTML = "Ops...";
			scoreTwo = 0;
			scoreOne = 0;
			countRound--;
			setTimeout(Counter, 1500)
		}
	}
}

function Counter() {
	if (countRound < 10) {
		animationRounds('46px', 'black')
		countRound++;
		document.getElementById("hatFill").innerHTML = "ROUND " + countRound;
		document.getElementById("players1").disabled = false;
		document.getElementById("players2").disabled = false;
	} else {
		animationRounds('70px', 'yellow')
		document.getElementById("hatFill").innerHTML = "GAME OVER";
		blockButtons()
		setTimeout(cancel, 2000)
	}
	animationScore('roundScoreOne', '80px', 'black')
	animationScore('roundScoreTwo', '80px', 'black')
	animationRandomNumber('countScoreTwo', 'black')
	animationRandomNumber('countScoreOne', 'black')
}

function cancel() {
	countRound = 1;
	document.getElementById("hatFill").innerHTML = "ROUND " + countRound;
	document.getElementById("openGame").style.display = "none";
	document.getElementById("start").innerHTML = "RESTART?";
	document.getElementById("countScoreOne").innerHTML = scoreOne = 0;
	document.getElementById("countScoreTwo").innerHTML = scoreTwo = 0;
	document.getElementById("roundScoreOne").innerHTML = scoreRoundOne = 0;
	document.getElementById("roundScoreTwo").innerHTML = scoreRoundTwo = 0;
	document.getElementById("players1").disabled = false;
	document.getElementById("players2").disabled = false;
	document.getElementById("divFillResult").style.display = "flex"
	animationRounds('46px', 'black')
	document.getElementById("divFillResult").style.fontSize = "50px"
	document.getElementById("divFillResult").style.fontStyle = "italic"
	if (sumScoreOne > sumScoreTwo) {
		document.getElementById("divResultGame").innerHTML =
			"PLAYER 1 WON !"
	} else {
		document.getElementById("divResultGame").innerHTML =
			"PLAYER 2 WON !";
	}
}

function randomScores() {
	return Math.floor(Math.random() * 20 + 1);
}

function blockButtons() {
	document.getElementById("players1").disabled = true;
	document.getElementById("players2").disabled = true;
}

function animationRounds(size, color) {
	document.getElementById("hatFill").style.fontSize = size;
	document.getElementById("hatFill").style.color = color;
}
function animationScore(id, size, color) {
	document.getElementById(id).style.fontSize = size;
	document.getElementById(id).style.color = color;
}
function animationRandomNumber(id, color) {
	document.getElementById(id).style.color = color;
}