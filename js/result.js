// var getParams = function(url) {
//set up an object to push our parameters into.
//     var params = {};
/*
create a link, assign our URL as it’s href value, and then grab the search portion (ie. the query string) of the URL.
*/
//     var parser = document.createElement('a');
//     parser.href = url;
//     var query = parser.search.substring(1);
//split it into an array
//     var vars = query.split('&'); 
//     for (var i = 0; i < vars.length; i++) {
//         var pair = vars[i].split('=');
//         params[pair[0]] = decodeURIComponent(pair[1]);

//     }
//     console.log(params)
//     return params;

// };

// // Get parameters from the current URL
// getParams(window.location.href);

// // Get parameters from a URL string
// var url = window.location.href;
// getParams(url);
var parsedUrl = new URL(window.location.href);
for (var pair of parsedUrl.searchParams.entries()) {
    if (pair[0] == 'score') {
        document.getElementById('score').value = pair[1];
    } else if (pair[0] == 'wrong') {
        document.getElementById('wrong').value = pair[1];
    } else {
        document.getElementById('empty').value = pair[1];
    }

    console.log(pair[0] + " : " + pair[1]);
}