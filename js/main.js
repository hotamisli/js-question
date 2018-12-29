//redirect page on click
// var submit = document.getElementById('submit');
// if (submit) {
//     submit.addEventListener('click', () => {
//         window.location.href = 'result.html'
//     })
// }

function quizSubmit() {
    var total = 5;
    var wrongAnswer = 0;
    var correct = 0;
    var unAnsweredQuestion = 0;

    //Get selected elements from the form 
    var question1 = document.forms["quiz"]["question1"].value;
    var question2 = document.forms["quiz"]["question2"].value;
    var question3 = document.forms["quiz"]["question3"].value;
    var question4 = document.forms["quiz"]["question4"].value;
    var question5 = document.forms["quiz"]["question5"].value;

    //answers
    var answers = ["b", "a", "b", "a", "c"]

    // check submissions
    for (var i = 1; i <= total; i++) {
        if (eval('question' + i) == null || eval('question' + i) == '') {
            unAnsweredQuestion++
        } else if (eval('question' + i) == answers[i - 1]) {
            correct++
        } else {
            wrongAnswer++;
        }
    }
    /*
        document.write('You got ' + correct + ' correct answer(s) and ' + wrongAnswer + "wrong answer(s) and you didn't attempt " + unAnsweredQuestion + " questions.")

        */

    document.getElementById('report').style.visibility = 'visible';
    // document.getElementsByClassName('uk-input').style.visibility = 'visible';
    document.getElementById('correct').value = "You got " + correct + " correct.";
    document.getElementById('wrong').value = "You got " + wrongAnswer + " correct.";
    document.getElementById('empty').value = "You got " + unAnsweredQuestion + " correct.";

    return false;
}