const button = document.getElementById("submitAnswer");

//event listener on click
button.addEventListener('click', quizSubmit, false)

function quizSubmit() {
    var total = 5;
    var score = 0;
    var wrong = 0;
    var empty = 0;
    var answers = ["b", "a", "b", "a", "c"];

    //Get selected elements from the form 
    var question1 = document.querySelector('input[name="question1"]:checked')
    var question2 = document.querySelector('input[name="question2"]:checked')
    var question3 = document.querySelector('input[name="question3"]:checked')
    var question4 = document.querySelector('input[name="question4"]:checked')
    var question5 = document.querySelector('input[name="question5"]:checked')

    // check submissions
    for (var i = 1; i <= total; i++) {
        if (eval('question' + i) == null || eval('question' + i) == '') {
            empty++;
            // console.log('you got empty')
        } else if (eval('question' + i) == answers[i - 1]) {
            score++;
            // console.log('you got correct')
        } else {
            wrong++;
            //  console.log('you got wrong')
        }
    }

    // score = encodeURIComponent(score);
    // wrong = encodeURIComponent(wrong);
    // empty = encodeURIComponent(empty);

    window.location.href = '/result.html?score=' + score + '&wrong=' + wrong + '&empty=' + empty;

}