function quizSubmit() {
    var total = 5;
    var score = 0;
    var wrong = 0;
    var empty = 0;
    var answers = ["b", "a", "b", "a", "c"]

    //Get selected elements from the form 
    var question1 = document.forms["quiz"]["question1"].value;
    var question2 = document.forms["quiz"]["question2"].value;
    var question3 = document.forms["quiz"]["question3"].value;
    var question4 = document.forms["quiz"]["question4"].value;
    var question5 = document.forms["quiz"]["question5"].value;


    // check submissions
    for (var i = 1; i <= total; i++) {
        if (eval('question' + i) == null || eval('question' + i) == '') {
            empty++
            // console.log('you got empty')
        } else if (eval('question' + i) == answers[i - 1]) {
            score++
            // console.log('you got correct')
        } else {
            wrong++;
            //  console.log('you got wrong')
        }
    }
    var parsedUrl = new URL(window.location.href);
    console.log(parsedUrl.searchParams.get("wrong", "score")); // 123

    // score = encodeURIComponent(score);
    // wrong = encodeURIComponent(wrong);
    // empty = encodeURIComponent(empty);
    // var string_url = '/result.html/?score=' + score + '&wrong=' + wrong + '&empty=' + empty;

    // window.location.href = string_url;


}