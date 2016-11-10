"use strict";

$(document).ready(function () {

    //the random wiki articles
    $("#random-article").click(function () {
        //if previous search results are displayed, remove them
        $("#results").empty();
        $("#user-input").val('');

        var url = 'http://en.wikipedia.org/wiki/Special:Random';
        window.open(url, '_blank');
        //  window.location.assign("http://www.w3schools.com");
    });

    //as soon as page loads, hide the box and the after div
    $("#before input").hide();
    $("#after").hide();

    //when before search icon is clicked, show the text box and the div below
    $("#before-search").click(function () {
        //hide the original search
        $("#before-search").hide();

        //bring up the text input
        $("#before input").show();

        //bring up lower div
        $("#after").show();
    });

    //when after search is clicked, display search results
    //get user input from input

    $("#after-search").click(function () {

        var userInput = $("#user-input").val();
        console.log(userInput);
        //prepare the URL for api call
        var link = 'https://en.wikipedia.org//w/api.php?action=opensearch&format=json&search=' + userInput + '&limit=12&callback=';

        $.ajax({

            url: link,
            type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
            data: {}, // Additional parameters here
            dataType: 'jsonp',
            success: function success(data) {
                console.log(data);
                //number of results returned is 12
                //clear previous search results
                $("#results").empty();

                for (var i = 0; i < 12; i++) {
                    var container = document.createElement('div');
                    var topic = document.createElement("h2");
                    var content = document.createElement("p");

                    var reference = document.createElement("a");
                    var referenceText = document.createTextNode("Read more about it.");
                    reference.appendChild(referenceText);

                    var topicText = document.createTextNode(data[1][i]);
                    var contentText = document.createTextNode(data[2][i]);
                    reference.setAttribute("href", data[3][i]);
                    reference.setAttribute("target", "_blank");

                    topic.appendChild(topicText);
                    content.appendChild(contentText);

                    container.appendChild(topic);
                    container.appendChild(content);
                    container.appendChild(reference);

                    //add this div to the main results div
                    document.getElementById("results").appendChild(container);
                }
            },
            error: function error(err) {
                alert(err);
            },
            beforeSend: function beforeSend(xhr) {
                //xhr.setRequestHeader("X-Mashape-Authorization", "32ROUuaq9wmshfk8uIxfd5dMc6H7p1lqdZSjsnXkB5bQtBteLK"); // Enter here your Mashape key
            }
        });
    });

    //when the cross icon is clicked, empty the text field
    $("#clear").click(function () {
        console.log("Remove clicked");
        $("#user-input").val('');
    });
});

//# sourceMappingURL=1-compiled.js.map