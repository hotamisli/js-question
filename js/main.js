// function selected() {
//     var continent = document.getElementsByName('continent')

//     for (var i = 0; i < continent.length; i++) {
//         if (continent[i].checked) {

//             if (continent[i].value != '7') {
//                 alert('it is wrong')
//             } else {
//                 alert("Answer is correct!");
//             }
//             break;
//         }

//     }
// }

function quizSubmit() {
    var total = 5;

    //Get selected elements from the form 
    var question1 = document.forms["quiz"]["question1"].value;
    var question2 = document.forms["quiz"]["question2"].value;
    var question3 = document.forms["quiz"]["question3"].value;
    var question4 = document.forms["quiz"]["question4"].value;
    var question5 = document.forms["quiz"]["question5"].value;

    // check empty submission
    for (var i = 1; i <= total; i++) {
        if (eval('question' + i) == null || eval('question' + i) == '') {
            alert("answer all questions ");
            return false;
        }
    }

    //answers
    var answers = ["b", "a", "b", "a", "c"]

    //check answers
    for (var i = 1; i <= total; i++) {
        //question numbers
        var questions = [1, 2, 3, 4, 5]
            //alert user if answer is correct or not
        if (eval('question' + i) == answers[i - 1]) {
            alert("Question " + questions[i - 1] + " is correct")
        } else {
            alert('Question ' + questions[i - 1] + ' is not correct. Correct answer is ' + answers[i - 1])
        }
    }

    return false;
}