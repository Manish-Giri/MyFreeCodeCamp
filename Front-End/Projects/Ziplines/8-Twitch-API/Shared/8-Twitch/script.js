$(document).ready(function () {

    //global variables
    var users = ["ESL_SC2", "ESL_CSGO", "freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "brunofin", "comster404", "test_channel", "cretetion", "sheevergaming", "TR7K", "OgamingSC2", "monstercat", "pink_sparkles"];

    var baseURL = "https://api.twitch.tv/kraken";

    var logo;
    var userName;
    var userNameText;
    var channelStatus;
    var liveViewers;
    var liveViewersCount;
    var totalViewers;
    var totalViewersCount;
    var totalFollowers;
    var totalFollowersCount;

    //function to create URL API call 
    function prepareURL(type, name) {
        return baseURL + "/" + type + "/" + name;
    }

    //function to create HTML elements
    function generateHTML() {
        var container = document.createElement("div");
        var playerName = document.createElement("h1");
        var playerStatus = document.createElement("p");

        var playerNameText = document.createTextNode(name);
        var playerStatusText = document.createTextNode(status);

        playerName.appendChild(playerNameText);
        playerStatus.appendChild(playerStatusText);
        container.appendChild(playerName);
        container.appendChild(playerStatus);

        $("#results-div").append(container);
    }
    
    //function to create an HTML element
    function createElement(elem) {
        return document.createElement(elem);
    }


    //function to make the API call
    var status = "";
    var name = "";
    $.each(users, function (index, value) {
        //console.log(value);
        $.getJSON(prepareURL("streams", value), function (data) {
                console.log(data);
                console.log("------------------------");

                //if channel is closed, it will return JSON containing error, message and status fields
                //case 1 - channel is offline
                if (data.stream === null) {
                    //console.log("inside null stream");
                    status = "offline";
                    //console.log("Status is " + status);

                    //when a stream is offline, channel object is not returned
                    //so make another API call to get the channel object
                    $.getJSON(prepareURL("channels", value), function (data) {

                        //-----------------------------------------------
                        //------create and style the logo ----------
                        //-----------------------------------------------

                        logo = createElement("img");
                        //create img's src based on logo object
                        if(data.logo != null) {
                            logo.setAttribute("src", data.logo);
                        }
                        else {
                            logo.setAttribute("src", "https://dl.dropbox.com/s/phzvn2vrt2eroc8/placeholder-profile.jpeg?dl=0");
                        }

                        //style the logo
                        if(logo && logo.style) {
                            logo.style.width = "100px";
                            logo.style.height = "100px";
                            logo.style.border = "2px solid red";
                            logo.style.borderRadius = "100%";
                        }

                        //-----------------------------------------------
                        //------create and style the name ----------
                        //-----------------------------------------------
                        userName = createElement("h2");
                        userNameText = document.createTextNode(data.display_name);
                        userName.appendChild(userNameText);


                        //-----------------------------------------------
                        //------create and style the status ----------
                        //-----------------------------------------------
                        channelStatus = createElement("h2");
                        channelStatus.appendChild(document.createTextNode("Offline"));


                        //-----------------------------------------------
                                //----the first outer row contents-------
                        //-----------------------------------------------
                        //create a div with class = row
                        var outerDiv1 = createElement("div");
                        outerDiv1.className = "row";

                        //-----------------------------------------------
                        //-------the inner div 1 holds logo ----------
                        //-----------------------------------------------

                        //create child div with class="col-md-3" for holding logo
                        var innerDiv1 = createElement("div");
                        //innerDiv1.className = "col-md-2";
                        innerDiv1.classList.add( "col-md-offset-1", "col-md-2");
                        //append logo to innerDiv
                        innerDiv1.appendChild(logo);


                        //--------------------------------------------------------
                        //-------the inner div 2 holds the user name ----------
                        //-------------------------------------------------------

                        var innerDiv2 = createElement("div");
                        //innerDiv2.className = "col-md-2";
                        innerDiv2.classList.add( "col-md-offset-1", "col-md-3");
                        innerDiv2.appendChild(userName);


                        //--------------------------------------------------------
                        //-------the inner div 3 holds the chanel status --------
                        //-------------------------------------------------------
                        var innerDiv3 = createElement("div");
                        //innerDiv3.className = "col-md-2";
                        innerDiv3.classList.add( "col-md-offset-1", "col-md-2");
                        innerDiv3.appendChild(channelStatus);

                        //append innerdiv1 to outerdiv
                        outerDiv1.appendChild(innerDiv1);
                        //append innerdiv2 to outerdiv
                        outerDiv1.appendChild(innerDiv2);
                        //append innerdiv3 to outerdiv
                        outerDiv1.appendChild(innerDiv3);


                        //-----------------------------------------------
                        //------the second outer row contents ----------
                        //-----------------------------------------------
                        //create a div with class = row
                        var outerDiv2 = createElement("div");
                        outerDiv2.className = "row";

                        //-----------------------------------------------
                        //------create and style the total viewers ----------
                        //-----------------------------------------------
                        totalViewers = createElement("h3");
                        totalViewers.appendChild(document.createTextNode("Views " + "\u00A0"  + ": " + "\u00A0"));
                        totalViewersCount = document.createTextNode(data.views);
                        totalViewers.appendChild(totalViewersCount);

                        //--------------------------------------------------
                        //-------the second inner div 1 holds viewers count
                        //--------------------------------------------------
                        var secondInnerDiv1 = createElement("div");
                        //second inner row has a sub row inside it
                        //secondInnerDiv1.className = "row";
                        secondInnerDiv1.classList.add("col-md-offset-2", "col-md-4");
                        secondInnerDiv1.appendChild(totalViewers);
                        //secondInnerDiv1.appendChild(offlineViewersCountDiv);


                        //-----------------------------------------------
                        //------create and style the total followers ----------
                        //-----------------------------------------------
                        totalFollowers = createElement("h3");
                        totalFollowers.appendChild(document.createTextNode("Followers " + "\u00A0"  + ": " + "\u00A0"));
                        totalFollowersCount = document.createTextNode(data.followers);
                        totalFollowers.appendChild(totalFollowersCount);


                        //--------------------------------------------------
                        //-------the second inner div 2 holds followers count
                        //--------------------------------------------------
                        //--------------------------------------------------
                        var secondInnerDiv2 = createElement("div");
                        //second inner row has a sub row inside it
                        //secondInnerDiv1.className = "row";
                        secondInnerDiv2.classList.add("col-md-4");
                        secondInnerDiv2.appendChild(totalFollowers);
                        //secondInnerDiv1.appendChild(offlineViewersCountDiv);

                        //append viewers div to second outer div
                        outerDiv2.appendChild(secondInnerDiv1);
                        //append followers div to second outer div
                        outerDiv2.appendChild(secondInnerDiv2);

                        //-----------------------------------------------
                        //------create and style the row containers ----------
                        //-----------------------------------------------
                        //create container div
                        var container = createElement("div");
                        container.className = "container-fluid";
                        container.style.border = "1px solid floralwhite";
                        
                        container.style.padding = "5px";
                        container.style.margin = "30px";
                        //append first row to main div
                        container.appendChild(outerDiv1);
                        //append second row
                        container.appendChild(outerDiv2);

                        $("#results-div").append(container);


                    })

                } else {

                    //-----------------------------------------------
                    //---in this else, all channels are online
                    //------------------------------------------------
                    status = data.stream.game;
                    //console.log("Status is " + status);
                    name = value;
                    //generateHTML();


                    //-----------------------------------------------
                    //      ROW 1 logo, name, preview
                    //-----------------------------------------------

                    //-----------------------------------------------
                    //------create and style the logo ----------
                    //-----------------------------------------------

                    logo = createElement("img");
                    //create img's src based on logo object
                    if(data.stream.channel.logo != null) {
                        //console.log("Online logo = " + data.stream.channel.logo);
                        logo.setAttribute("src", data.stream.channel.logo);
                    }
                    else {
                        logo.setAttribute("src", "https://dl.dropbox.com/s/phzvn2vrt2eroc8/placeholder-profile.jpeg?dl=0");
                    }

                    //style the logo
                    if(logo && logo.style) {
                        logo.style.width = "100px";
                        logo.style.height = "100px";
                        logo.style.border = "2px solid green";
                        logo.style.borderRadius = "100%";
                    }



                    //-----------------------------------------------
                    //------create and style the name ----------
                    //-----------------------------------------------
                    userName = createElement("h2");
                    userNameText = document.createTextNode(data.stream.channel.display_name);
                    userName.appendChild(userNameText);




                    //-----------------------------------------------
                    //------create and style the preview image ----------
                    //-----------------------------------------------
                    var preview = createElement("img");
                    preview.setAttribute("src", data.stream.preview.medium);
                    preview.style.height = "100px";



                    //-----------------------------------------------
                    //----the first outer row contents-------
                    //-----------------------------------------------
                    //create a div with class = row
                    var outerDiv1 = createElement("div");
                    outerDiv1.className = "row";

                    //-----------------------------------------------
                    //-------the inner div 1 holds logo ----------
                    //-----------------------------------------------

                    //create child div with class="col-md-3" for holding logo
                    var innerDiv1 = createElement("div");
                    //innerDiv1.className = "col-md-2";
                    innerDiv1.classList.add( "col-md-offset-1", "col-md-2");
                    //append logo to innerDiv
                    innerDiv1.appendChild(logo);


                    //--------------------------------------------------------
                    //-------the inner div 2 holds the user name ----------
                    //-------------------------------------------------------
                    var innerDiv2 = createElement("div");
                    //innerDiv2.className = "col-md-2";
                    innerDiv2.classList.add( "col-md-offset-1", "col-md-3");
                    innerDiv2.appendChild(userName);



                    //--------------------------------------------------------
                    //-------the inner div 2 holds the preview image ----------
                    //-------------------------------------------------------
                    var innerDiv3 = createElement("div");
                    innerDiv3.classList.add("col-md-offset-2", "col-md-3");
                    innerDiv3.appendChild(preview);




                    //append innerdiv1 to outerdiv1
                    outerDiv1.appendChild(innerDiv1);
                    //append innerdiv2(username) to outerdiv1
                    outerDiv1.appendChild(innerDiv2);
                    //append innerdiv3(preview) to outerdiv1
                    outerDiv1.appendChild(innerDiv3);


                    //-----------------------------------------------
                    //      ROW 2 - game + status
                    //-----------------------------------------------
                    

























                    //-----------------------------------------------
                    //------create and style the row containers ----------
                    //-----------------------------------------------
                    //create container div
                    var container = createElement("div");
                    container.className = "container-fluid";
                    container.style.border = "1px solid floralwhite";

                    container.style.padding = "5px";
                    container.style.margin = "30px";
                    //append first row to main div
                    container.appendChild(outerDiv1);
                    //append second row
                    //container.appendChild(outerDiv2);

                    $("#results-div").append(container);


                }



            })
            .fail(function (err) {

                name = value;
                status = "Account closed";
                generateHTML();

            });
        //console.log(name);
        //console.log(status);
        console.log("*****************");


    });

});