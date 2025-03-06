function checkAnswer(){
    const correctAnswer = '4';
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value
    const feedback = document.getElementById('feedback');
    if(userAnswer === correctAnswer){
        feedback.innerText("Correct! Well done");
    }else{
        feedback.innerText("That's inccorrect. Try Again!");
    }
    
    document.getElementById("submit-answer").addEventListener("click", checkAnswer);
}