window.onload = function any_function_name()
{

var questionTimer = 40;

var intervalId;

var userPick;

var correctGuess =0;

var incorrectGuess=0;

var GreysAnswers= {
	a1: "Seattle Grace",
	a2: "It's a great day to save lives", 
};


$("#startTrivia").click(start)


$("#startTrivia").click(function(){
	$("#questionBank").show();
});








function decrement (){
	questionTimer --;
	$("#showTimer").html("<h2>" + questionTimer + "</h2>");

	if (questionTimer === 0){
		stop();
		alert("You are out of Time!");
		document.getElementById("questionBank").innerHTML= "Correct Answers: " + correctGuess +  "Incorrect Answers: " + incorrectGuess;
		document.getElementById("Startbuttons").innerHTML="";
	}

}

function start(){

	intervalId = setInterval(decrement, 1000);	
}




function stop(){
	clearInterval(intervalId);

	
}





$("#question1").html("Which hospital does this show take place in(First name before being changed?)");
$("#question2").html("What did Dereck normally say before surgery?");
$("#question3").html("Denny Duquette the heart patient asks whom to marry him?")
$("#question4").html("Why did Addison originally come to Seattle?")
$("#question5").html("Where did Cristina move to?")
$("#question6").html("Where the hell are Meredith's children?")




$("#submit").click(submit);

function submit () {
	var a1 = "";
	if (a1 = document.getElementById("hospital1").checked) {
	console.log(a1);
	document.getElementById("options1").append("Correct");
	correctGuess++;
	console.log(correctGuess);
	}
	else { document.getElementById("options1").append("Wrong");
	incorrectGuess++;};


	var a2 = "";
	if (a2 = document.getElementById("Dereck2").checked) {
	console.log(a2);
	document.getElementById("option2").append("Correct");
	correctGuess++;
	console.log(correctGuess);
	}
	else { document.getElementById("option2").append("Wrong");
	incorrectGuess++;};

	var a3 = "";
	if (a3 = document.getElementById("Denny1").checked) {
	console.log(a3);
	document.getElementById("option3").append("Correct");
	correctGuess++;
	console.log(correctGuess);
	}
	else { document.getElementById("option3").append("Wrong");
	incorrectGuess++;};

	var a4 = "";
	if (a4 = document.getElementById("Addison4").checked) {
	console.log(a4);
	document.getElementById("option4").append("Correct");
	correctGuess++;
	console.log(correctGuess);
	}
	else { document.getElementById("option4").append("Wrong");
	incorrectGuess++;};

	var a5 = "";
	if (a5 = document.getElementById("Cristina2").checked) {
	console.log(a5);
	document.getElementById("option5").append("Correct");
	correctGuess++;
	console.log(correctGuess);
	}
	else { document.getElementById("option5").append("Wrong");
	incorrectGuess++;};

	var a6 = "";
	if (a6 = document.getElementById("Children1").checked) {
	console.log(a2);
	document.getElementById("option6").append("Correct");
	correctGuess++;
	console.log(correctGuess);
	}
	else { document.getElementById("option6").append("Wrong");
	incorrectGuess++;};





	stop();
	
	document.getElementById("questionBank").innerHTML=  "Correct Answers: " + correctGuess + "Incorrect Answers: " + incorrectGuess;
	document.getElementById("Startbuttons").innerHTML="";
};


}
