function selected() {
    var continent = document.getElementsByName('continent')

    for (var i = 0; i < continent.length; i++) {
        if (continent[i].checked) {

            if (continent[i].value != '7') {
                alert('it is wrong')
            } else {
                alert("Answer is correct!");
            }
            break;
        }
        // var option = document.querySelector('input[name="continent"]:checked').value

    }


}