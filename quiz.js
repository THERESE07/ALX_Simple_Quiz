function checkAnswer(){
    let correctAnswer = '4';
    let userAnswer = document.querySelector('input[name="quiz"]:checked')?.value
    if(userAnswer === correctAnswer){
        let feed = document.querySelector('feedback');
        feed.textContent= 'Correct! Well done';
    }else{
        let feed = document.querySelector('feedback');
        feed.textContent= "That's inccorrect. Try Again!";
    }
    
    document.getElementById("submit-answer").addEventListener("click", checkAnswer);
}