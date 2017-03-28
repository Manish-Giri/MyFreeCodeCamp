"use strict";

//this version features the client auth required by twitch

$(document).ready(function () {
    //enable tooltips
    $('[data-toggle="tooltip"]').tooltip();

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

    var onlineChannelsHidden = false;
    var offlineChannelsHidden = false;
    var closedChannelsHidden = false;

    //function to create URL API call
    function prepareURL(type, name) {
        return baseURL + "/" + type + "/" + name;
    }

    //function to create an HTML element
    function createElement(elem) {
        return document.createElement(elem);
    }

    //function to make the API call
    var status = "";
    var name = "";
    $.each(users, function (index, value) {

        $.ajax({
            url: prepareURL("streams", value),
            method: 'GET',
            dataType: "json",
            headers: {
                'Client-ID': 'ltif1ex1ujg3tinoj2vtfyoby7uv9a'
            },
            success: function success(data) {
                //case 1 - channel is offline
                if (data.stream === null) {
                    //console.log("inside null stream");
                    status = "offline";
                    //console.log("Status is " + status);

                    //when a stream is offline, channel object is not returned
                    //so make another API call to get the channel object
                    $.ajax({
                        url: prepareURL("channels", value),
                        method: 'GET',
                        dataType: "json",
                        headers: {
                            'Client-ID': 'ltif1ex1ujg3tinoj2vtfyoby7uv9a'
                        },
                        success: function success(data) {

                            //-----------------------------------------------
                            //------create and style the logo ----------
                            //-----------------------------------------------

                            logo = createElement("img");
                            //create img's src based on logo object
                            if (data.logo != null) {
                                logo.setAttribute("src", data.logo);
                            } else {
                                logo.setAttribute("src", "https://dl.dropbox.com/s/phzvn2vrt2eroc8/placeholder-profile.jpeg?dl=0");
                            }

                            //style the logo
                            if (logo && logo.style) {
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
                            innerDiv1.classList.add("ultra-xs", "col-xs-offset-1", "col-xs-2", "col-sm-offset-1", "col-sm-2", "col-md-offset-1", "col-md-2");
                            //append logo to innerDiv
                            innerDiv1.appendChild(logo);

                            //--------------------------------------------------------
                            //-------the inner div 2 holds the user name ----------
                            //-------------------------------------------------------

                            var innerDiv2 = createElement("div");
                            //innerDiv2.className = "col-md-2";
                            innerDiv2.classList.add("ultra-xs", "col-xs-offset-1", "col-xs-4", "col-sm-offset-1", "col-sm-3", "col-md-offset-1", "col-md-3");
                            innerDiv2.appendChild(userName);

                            //--------------------------------------------------------
                            //-------the inner div 3 holds the chanel status --------
                            //-------------------------------------------------------
                            var innerDiv3 = createElement("div");
                            //innerDiv3.className = "col-md-2";
                            innerDiv3.classList.add("ultra-xs", "col-xs-offset-1", "col-xs-2", "col-sm-offset-1", "col-sm-2", "col-md-offset-1", "col-md-2");
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
                            totalViewers.appendChild(document.createTextNode("Views " + " " + ": " + " "));
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
                            totalFollowers.appendChild(document.createTextNode("Followers " + " " + ": " + " "));
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
                            container.classList.add("offline-user");
                            container.style.border = "1px solid floralwhite";

                            container.style.padding = "5px";
                            container.style.margin = "30px";
                            //append first row to main div
                            container.appendChild(outerDiv1);
                            //append second row
                            container.appendChild(outerDiv2);

                            $("#results-div").append(container);
                        }
                    });
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
                    if (data.stream.channel.logo != null) {
                        //console.log("Online logo = " + data.stream.channel.logo);
                        logo.setAttribute("src", data.stream.channel.logo);
                    } else {
                        logo.setAttribute("src", "https://dl.dropbox.com/s/phzvn2vrt2eroc8/placeholder-profile.jpeg?dl=0");
                    }

                    //style the logo
                    if (logo && logo.style) {
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
                    innerDiv1.classList.add("ultra-xs", "col-xs-offset-1", "col-xs-2", "col-sm-offset-1", "col-sm-2", "col-md-offset-1", "col-md-2");
                    //append logo to innerDiv
                    innerDiv1.appendChild(logo);

                    //--------------------------------------------------------
                    //-------the inner div 2 holds the user name ----------
                    //-------------------------------------------------------
                    var innerDiv2 = createElement("div");
                    //innerDiv2.className = "col-md-2";
                    innerDiv2.classList.add("ultra-xs", "col-xs-offset-1", "col-xs-3", "col-sm-offset-1", "col-sm-3", "col-md-offset-1", "col-md-3");
                    innerDiv2.appendChild(userName);

                    //--------------------------------------------------------
                    //-------the inner div 2 holds the preview image ----------
                    //-------------------------------------------------------
                    var innerDiv3 = createElement("div");
                    innerDiv3.classList.add("ultra-xs", "col-xs-offset-1", "col-xs-4", "col-sm-offset-1", "col-sm-4", "col-md-offset-2", "col-md-3");
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

                    //create a div with class = row
                    var outerDiv2 = createElement("div");
                    outerDiv2.className = "row";
                    //-----------------------------------------------
                    //------create and style the game name ----------
                    //-----------------------------------------------
                    var gameName = createElement("h2");
                    gameName.appendChild(document.createTextNode(data.stream.game));
                    gameName.style.fontSize = "1.4em";

                    //gameName.style.paddingLeft = "10px";

                    //-----------------------------------------------
                    //------create and style the game status ----------
                    //-----------------------------------------------
                    channelStatus = createElement("h2");
                    channelStatus.appendChild(document.createTextNode(data.stream.channel.status));
                    channelStatus.style.fontSize = "1.4em";

                    //-----------------------------------------------
                    //-------the second inner div 1 holds game name ----------
                    //-----------------------------------------------
                    var secondInnerDiv1 = createElement("div");
                    secondInnerDiv1.classList.add("col-md-offset-1", "col-md-3", "online-game-name");
                    secondInnerDiv1.appendChild(gameName);

                    //-----------------------------------------------
                    //-------the second inner div 2 holds status ----------
                    //-----------------------------------------------
                    var secondInnerDiv2 = createElement("div");
                    secondInnerDiv2.classList.add("col-md-7", "online-channel-status");
                    secondInnerDiv2.style.textAlign = "left";
                    secondInnerDiv2.appendChild(channelStatus);

                    //append game name to outerdiv2
                    outerDiv2.appendChild(secondInnerDiv1);
                    //append game status to outerdiv2
                    outerDiv2.appendChild(secondInnerDiv2);

                    //-----------------------------------------------
                    //      ROW 3 - live + views + followers
                    //-----------------------------------------------

                    //create a div with class = row
                    var outerDiv3 = createElement("div");
                    outerDiv3.className = "row";

                    //-----------------------------------------------
                    //------create and style the live viewers ----------
                    //-----------------------------------------------
                    liveViewers = createElement("h3");
                    liveViewers.appendChild(document.createTextNode("Watching " + " " + ": " + " "));
                    liveViewersCount = document.createTextNode(data.stream.viewers);
                    liveViewers.appendChild(liveViewersCount);

                    //-----------------------------------------------
                    //------create and style the total viewers ----------
                    //-----------------------------------------------
                    totalViewers = createElement("h3");
                    totalViewers.appendChild(document.createTextNode("Views " + " " + ": " + " "));
                    totalViewersCount = document.createTextNode(data.stream.channel.views);
                    totalViewers.appendChild(totalViewersCount);

                    //-----------------------------------------------
                    //------create and style the total followers ----------
                    //-----------------------------------------------
                    totalFollowers = createElement("h3");
                    totalFollowers.appendChild(document.createTextNode("Followers " + " " + ": " + " "));
                    totalFollowersCount = document.createTextNode(data.stream.channel.followers);
                    totalFollowers.appendChild(totalFollowersCount);

                    //-----------------------------------------------
                    //-------the third inner div 1 holds live watching
                    //-----------------------------------------------
                    var thirdInnerDiv1 = createElement("div");
                    thirdInnerDiv1.classList.add("col-md-4");
                    thirdInnerDiv1.appendChild(liveViewers);

                    //-----------------------------------------------
                    //-------the third inner div 2 holds views
                    //-----------------------------------------------
                    var thirdInnerDiv2 = createElement("div");
                    thirdInnerDiv2.classList.add("col-md-4");
                    thirdInnerDiv2.appendChild(totalViewers);

                    //-----------------------------------------------
                    //-------the third inner div 3 holds followers
                    //-----------------------------------------------
                    var thirdInnerDiv3 = createElement("div");
                    thirdInnerDiv3.classList.add("col-md-4");
                    thirdInnerDiv3.appendChild(totalFollowers);

                    //append live watching to outerdiv3
                    outerDiv3.appendChild(thirdInnerDiv1);
                    //append total viewers to outerdiv3
                    outerDiv3.appendChild(thirdInnerDiv2);
                    //append total followers to outerdiv3
                    outerDiv3.appendChild(thirdInnerDiv3);

                    //-----------------------------------------------
                    //------create and style the row containers ----------
                    //-----------------------------------------------
                    //create container div
                    var container = createElement("div");
                    container.className = "container-fluid";
                    container.classList.add("online-user");
                    container.style.border = "1px solid floralwhite";

                    container.style.padding = "5px";
                    container.style.margin = "30px";
                    //append first row to main div
                    container.appendChild(outerDiv1);
                    //append second row
                    container.appendChild(outerDiv2);
                    //append third row
                    container.appendChild(outerDiv3);

                    $("#results-div").append(container);
                }
            },
            error: function error(err) {

                name = value;
                //status = "Account closed";
                //generateHTML();

                var outerDiv = createElement("div");
                outerDiv.className = "row";

                //-----------------------------------------------
                //------create and style the logo ----------
                //-----------------------------------------------

                logo = createElement("img");

                logo.setAttribute("src", "https://dl.dropbox.com/s/phzvn2vrt2eroc8/placeholder-profile.jpeg?dl=0");

                //style the logo
                if (logo && logo.style) {
                    logo.style.width = "100px";
                    logo.style.height = "100px";
                    logo.style.border = "2px solid black";
                    logo.style.borderRadius = "100%";
                }

                //-----------------------------------------------
                //------create and style the name ----------
                //-----------------------------------------------
                userName = createElement("h2");
                userNameText = document.createTextNode(value);
                userName.appendChild(userNameText);

                //-----------------------------------------------
                //------create and style the status ----------
                //-----------------------------------------------
                channelStatus = createElement("h2");
                channelStatus.appendChild(document.createTextNode("Account closed"));

                //-----------------------------------------------
                //-------the inner div 1 holds logo ----------
                //-----------------------------------------------

                //create child div with class="col-md-3" for holding logo
                var failinnerDiv1 = createElement("div");
                //innerDiv1.className = "col-md-2";
                failinnerDiv1.classList.add("col-xs-offset-1", "col-xs-3", "col-sm-offset-1", "col-sm-2", "col-md-offset-1", "col-md-2");
                //append logo to innerDiv
                failinnerDiv1.appendChild(logo);

                //--------------------------------------------------------
                //-------the inner div 2 holds the user name ----------
                //-------------------------------------------------------

                var failinnerDiv2 = createElement("div");
                //innerDiv2.className = "col-md-2";
                failinnerDiv2.classList.add("col-xs-4", "col-sm-offset-1", "col-sm-3", "col-md-offset-1", "col-md-3");
                failinnerDiv2.appendChild(userName);

                //--------------------------------------------------------
                //-------the inner div 3 holds the chanel status --------
                //-------------------------------------------------------
                var failinnerDiv3 = createElement("div");
                //innerDiv3.className = "col-md-2";
                failinnerDiv3.classList.add("col-xs-4", "col-sm-offset-1", "col-sm-4", "col-md-offset-1", "col-md-3");
                failinnerDiv3.appendChild(channelStatus);

                //append innerdiv1 to outerdiv
                outerDiv.appendChild(failinnerDiv1);
                //append innerdiv2 to outerdiv
                outerDiv.appendChild(failinnerDiv2);
                //append innerdiv3 to outerdiv
                outerDiv.appendChild(failinnerDiv3);

                //-----------------------------------------------
                //------create and style the row containers ----------
                //-----------------------------------------------
                //create container div
                var container = createElement("div");
                container.className = "container-fluid";
                container.classList.add("closed-user");
                container.style.border = "1px solid floralwhite";

                container.style.padding = "5px";
                container.style.margin = "30px";
                //append first row to main div
                container.appendChild(outerDiv);

                $("#results-div").append(container);
            }
        });

        //old version
        /*
        $.getJSON(prepareURL("streams", value), function(data) {
                //console.log("------------------------");
                 //case 1 - channel is offline
                if (data.stream === null) {
                    //console.log("inside null stream");
                    status = "offline";
                    //console.log("Status is " + status);
                     //when a stream is offline, channel object is not returned
                    //so make another API call to get the channel object
                    $.getJSON(prepareURL("channels", value), function(data) {
                         //-----------------------------------------------
                        //------create and style the logo ----------
                        //-----------------------------------------------
                         logo = createElement("img");
                        //create img's src based on logo object
                        if (data.logo != null) {
                            logo.setAttribute("src", data.logo);
                        } else {
                            logo.setAttribute("src", "https://dl.dropbox.com/s/phzvn2vrt2eroc8/placeholder-profile.jpeg?dl=0");
                        }
                         //style the logo
                        if (logo && logo.style) {
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
                        innerDiv1.classList.add("ultra-xs", "col-xs-offset-1", "col-xs-2","col-sm-offset-1", "col-sm-2", "col-md-offset-1", "col-md-2");
                        //append logo to innerDiv
                        innerDiv1.appendChild(logo);
                          //--------------------------------------------------------
                        //-------the inner div 2 holds the user name ----------
                        //-------------------------------------------------------
                         var innerDiv2 = createElement("div");
                        //innerDiv2.className = "col-md-2";
                        innerDiv2.classList.add("ultra-xs", "col-xs-offset-1", "col-xs-4", "col-sm-offset-1", "col-sm-3","col-md-offset-1", "col-md-3");
                        innerDiv2.appendChild(userName);
                          //--------------------------------------------------------
                        //-------the inner div 3 holds the chanel status --------
                        //-------------------------------------------------------
                        var innerDiv3 = createElement("div");
                        //innerDiv3.className = "col-md-2";
                        innerDiv3.classList.add("ultra-xs", "col-xs-offset-1", "col-xs-2", "col-sm-offset-1", "col-sm-2","col-md-offset-1", "col-md-2");
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
                        totalViewers.appendChild(document.createTextNode("Views " + "\u00A0" + ": " + "\u00A0"));
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
                        totalFollowers.appendChild(document.createTextNode("Followers " + "\u00A0" + ": " + "\u00A0"));
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
                        container.classList.add("offline-user");
                        container.style.border = "1px solid floralwhite";
                         container.style.padding = "5px";
                        container.style.margin = "30px";
                        //append first row to main div
                        container.appendChild(outerDiv1);
                        //append second row
                        container.appendChild(outerDiv2);
                         $("#results-div").append(container);
                      });
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
                    if (data.stream.channel.logo != null) {
                        //console.log("Online logo = " + data.stream.channel.logo);
                        logo.setAttribute("src", data.stream.channel.logo);
                    } else {
                        logo.setAttribute("src", "https://dl.dropbox.com/s/phzvn2vrt2eroc8/placeholder-profile.jpeg?dl=0");
                    }
                     //style the logo
                    if (logo && logo.style) {
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
                    innerDiv1.classList.add("ultra-xs", "col-xs-offset-1", "col-xs-2", "col-sm-offset-1", "col-sm-2", "col-md-offset-1", "col-md-2");
                    //append logo to innerDiv
                    innerDiv1.appendChild(logo);
                     //--------------------------------------------------------
                    //-------the inner div 2 holds the user name ----------
                    //-------------------------------------------------------
                    var innerDiv2 = createElement("div");
                    //innerDiv2.className = "col-md-2";
                    innerDiv2.classList.add("ultra-xs", "col-xs-offset-1","col-xs-3", "col-sm-offset-1", "col-sm-3", "col-md-offset-1", "col-md-3");
                    innerDiv2.appendChild(userName);
                     //--------------------------------------------------------
                    //-------the inner div 2 holds the preview image ----------
                    //-------------------------------------------------------
                    var innerDiv3 = createElement("div");
                    innerDiv3.classList.add("ultra-xs", "col-xs-offset-1","col-xs-4","col-sm-offset-1", "col-sm-4", "col-md-offset-2", "col-md-3");
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
                     //create a div with class = row
                    var outerDiv2 = createElement("div");
                    outerDiv2.className = "row";
                    //-----------------------------------------------
                    //------create and style the game name ----------
                    //-----------------------------------------------
                    var gameName = createElement("h2");
                    gameName.appendChild(document.createTextNode(data.stream.game));
                    gameName.style.fontSize = "1.4em";
                     //gameName.style.paddingLeft = "10px";
                     //-----------------------------------------------
                    //------create and style the game status ----------
                    //-----------------------------------------------
                    channelStatus = createElement("h2");
                    channelStatus.appendChild(document.createTextNode(data.stream.channel.status));
                    channelStatus.style.fontSize = "1.4em";
                     //-----------------------------------------------
                    //-------the second inner div 1 holds game name ----------
                    //-----------------------------------------------
                    var secondInnerDiv1 = createElement("div");
                    secondInnerDiv1.classList.add("col-md-offset-1", "col-md-3", "online-game-name");
                    secondInnerDiv1.appendChild(gameName);
                     //-----------------------------------------------
                    //-------the second inner div 2 holds status ----------
                    //-----------------------------------------------
                    var secondInnerDiv2 = createElement("div");
                    secondInnerDiv2.classList.add("col-md-7", "online-channel-status");
                    secondInnerDiv2.style.textAlign = "left";
                    secondInnerDiv2.appendChild(channelStatus);
                     //append game name to outerdiv2
                    outerDiv2.appendChild(secondInnerDiv1);
                    //append game status to outerdiv2
                    outerDiv2.appendChild(secondInnerDiv2);
                     //-----------------------------------------------
                    //      ROW 3 - live + views + followers
                    //-----------------------------------------------
                     //create a div with class = row
                    var outerDiv3 = createElement("div");
                    outerDiv3.className = "row";
                     //-----------------------------------------------
                    //------create and style the live viewers ----------
                    //-----------------------------------------------
                    liveViewers = createElement("h3");
                    liveViewers.appendChild(document.createTextNode("Watching " + "\u00A0" + ": " + "\u00A0"));
                    liveViewersCount = document.createTextNode(data.stream.viewers);
                    liveViewers.appendChild(liveViewersCount);
                     //-----------------------------------------------
                    //------create and style the total viewers ----------
                    //-----------------------------------------------
                    totalViewers = createElement("h3");
                    totalViewers.appendChild(document.createTextNode("Views " + "\u00A0" + ": " + "\u00A0"));
                    totalViewersCount = document.createTextNode(data.stream.channel.views);
                    totalViewers.appendChild(totalViewersCount);
                     //-----------------------------------------------
                    //------create and style the total followers ----------
                    //-----------------------------------------------
                    totalFollowers = createElement("h3");
                    totalFollowers.appendChild(document.createTextNode("Followers " + "\u00A0" + ": " + "\u00A0"));
                    totalFollowersCount = document.createTextNode(data.stream.channel.followers);
                    totalFollowers.appendChild(totalFollowersCount);
                     //-----------------------------------------------
                    //-------the third inner div 1 holds live watching
                    //-----------------------------------------------
                    var thirdInnerDiv1 = createElement("div");
                    thirdInnerDiv1.classList.add("col-md-4");
                    thirdInnerDiv1.appendChild(liveViewers);
                     //-----------------------------------------------
                    //-------the third inner div 2 holds views
                    //-----------------------------------------------
                    var thirdInnerDiv2 = createElement("div");
                    thirdInnerDiv2.classList.add("col-md-4");
                    thirdInnerDiv2.appendChild(totalViewers);
                     //-----------------------------------------------
                    //-------the third inner div 3 holds followers
                    //-----------------------------------------------
                    var thirdInnerDiv3 = createElement("div");
                    thirdInnerDiv3.classList.add("col-md-4");
                    thirdInnerDiv3.appendChild(totalFollowers);
                      //append live watching to outerdiv3
                    outerDiv3.appendChild(thirdInnerDiv1);
                    //append total viewers to outerdiv3
                    outerDiv3.appendChild(thirdInnerDiv2);
                    //append total followers to outerdiv3
                    outerDiv3.appendChild(thirdInnerDiv3);
                     //-----------------------------------------------
                    //------create and style the row containers ----------
                    //-----------------------------------------------
                    //create container div
                    var container = createElement("div");
                    container.className = "container-fluid";
                    container.classList.add("online-user");
                    container.style.border = "1px solid floralwhite";
                     container.style.padding = "5px";
                    container.style.margin = "30px";
                    //append first row to main div
                    container.appendChild(outerDiv1);
                    //append second row
                    container.appendChild(outerDiv2);
                    //append third row
                    container.appendChild(outerDiv3);
                     $("#results-div").append(container);
                 }
             })
            //if channel is closed, it will return JSON containing error, message and status fields
            .fail(function(err) {
                 name = value;
                //status = "Account closed";
                //generateHTML();
                 var outerDiv = createElement("div");
                outerDiv.className = "row";
                 //-----------------------------------------------
                //------create and style the logo ----------
                //-----------------------------------------------
                 logo = createElement("img");
                 logo.setAttribute("src", "https://dl.dropbox.com/s/phzvn2vrt2eroc8/placeholder-profile.jpeg?dl=0");
                 //style the logo
                if (logo && logo.style) {
                    logo.style.width = "100px";
                    logo.style.height = "100px";
                    logo.style.border = "2px solid black";
                    logo.style.borderRadius = "100%";
                }
                 //-----------------------------------------------
                //------create and style the name ----------
                //-----------------------------------------------
                userName = createElement("h2");
                userNameText = document.createTextNode(value);
                userName.appendChild(userNameText);
                  //-----------------------------------------------
                //------create and style the status ----------
                //-----------------------------------------------
                channelStatus = createElement("h2");
                channelStatus.appendChild(document.createTextNode("Account closed"));
                  //-----------------------------------------------
                //-------the inner div 1 holds logo ----------
                //-----------------------------------------------
                 //create child div with class="col-md-3" for holding logo
                var failinnerDiv1 = createElement("div");
                //innerDiv1.className = "col-md-2";
                failinnerDiv1.classList.add("col-xs-offset-1", "col-xs-3", "col-sm-offset-1", "col-sm-2", "col-md-offset-1", "col-md-2");
                //append logo to innerDiv
                failinnerDiv1.appendChild(logo);
                  //--------------------------------------------------------
                //-------the inner div 2 holds the user name ----------
                //-------------------------------------------------------
                 var failinnerDiv2 = createElement("div");
                //innerDiv2.className = "col-md-2";
                failinnerDiv2.classList.add("col-xs-4", "col-sm-offset-1", "col-sm-3","col-md-offset-1", "col-md-3");
                failinnerDiv2.appendChild(userName);
                  //--------------------------------------------------------
                //-------the inner div 3 holds the chanel status --------
                //-------------------------------------------------------
                var failinnerDiv3 = createElement("div");
                //innerDiv3.className = "col-md-2";
                failinnerDiv3.classList.add("col-xs-4","col-sm-offset-1", "col-sm-4","col-md-offset-1", "col-md-3");
                failinnerDiv3.appendChild(channelStatus);
                 //append innerdiv1 to outerdiv
                outerDiv.appendChild(failinnerDiv1);
                //append innerdiv2 to outerdiv
                outerDiv.appendChild(failinnerDiv2);
                //append innerdiv3 to outerdiv
                outerDiv.appendChild(failinnerDiv3);
                  //-----------------------------------------------
                //------create and style the row containers ----------
                //-----------------------------------------------
                //create container div
                var container = createElement("div");
                container.className = "container-fluid";
                container.classList.add("closed-user");
                container.style.border = "1px solid floralwhite";
                 container.style.padding = "5px";
                container.style.margin = "30px";
                //append first row to main div
                container.appendChild(outerDiv);
                 $("#results-div").append(container);
             });
        //console.log(name);
        //console.log(status);
        */
        console.log("*****************");
    });

    /*
    $("#online button").click(function() {
        //if online channels are already hidden through slidetoggle in offline, unhide online and hide offline & closed
        if(onlineChannelsHidden) {
            $(".offline-user").hide();
            $(".closed-user").hide();
            $(".online-user").delay(600).show();
            onlineChannelsHidden = false;
            offlineChannelsHidden = true;
         }
        else {
            $(".offline-user, .closed-user").slideToggle("slow", function() {
                offlineChannelsHidden = !offlineChannelsHidden;
            });
        }
     });
     $("#offline button").click(function() {
        //if offline channels are already hidden through slidetoggle in online, unhide offline & hide online
        if(offlineChannelsHidden) {
            $(".online-user").hide();
            $(".closed-user").hide();
            $(".offline-user").delay(600).show();
             onlineChannelsHidden = true;
            offlineChannelsHidden = false;
        }
        else {
            $(".online-user, .closed-user").slideToggle("slow", function() {
                onlineChannelsHidden = !onlineChannelsHidden;
            });
        }
     });*/

    //-------------------------------------------------------------------------------------

    //-----------BUTTON CLICKS---------------------------
    //function to make a button shake using setTimeout()
    function shakeButton($button) {
        console.log("Shaking button");
        $button.removeClass("animated shake");
        setTimeout(function () {
            $button.addClass("animated shake");
        }, 25);
    }

    //------ALL CHANNELS-------
    $("#all button").click(function () {
        //show all channels
        //use function to shake button
        shakeButton($(this));
        $(".online-user, .offline-user, .closed-user").delay(600).slideDown();
        onlineChannelsHidden = false;
        offlineChannelsHidden = false;
        closedChannelsHidden = false;
    });

    //------ONLINE CHANNELS-------
    $("#online button").click(function () {
        //if online channels are already hidden through slidetoggle in offline, unhide online and hide offline & closed
        //use function to shake button
        shakeButton($(this));
        if (onlineChannelsHidden) {
            $(".offline-user, .closed-user").slideUp();
            //$(".closed-user").hide();
            $(".online-user").delay(600).slideDown();
            onlineChannelsHidden = false;
            offlineChannelsHidden = true;
            closedChannelsHidden = true;
        } else {
            // $(".offline-user, .closed-user").slideToggle("slow", function() {
            //     offlineChannelsHidden = !offlineChannelsHidden;
            //     closedChannelsHidden = !closedChannelsHidden;
            //     console.log("In online else, offline channels = " + offlineChannelsHidden);
            //     console.log("In online else, closed channels = " + closedChannelsHidden);
            // });
            $(".offline-user, .closed-user").delay(600).slideUp();
            offlineChannelsHidden = true;
            closedChannelsHidden = true;

            // $(".offline-user, .closed-user").slideUp();
            // offlineChannelsHidden = true;
            // closedChannelsHidden = true;
        }
    });

    //------OFFLINE CHANNELS-------
    $("#offline button").click(function () {
        //if offline channels are already hidden through slidetoggle in online, unhide offline & hide online
        //use function to shake button
        shakeButton($(this));
        if (offlineChannelsHidden) {
            $(".online-user, .closed-user").slideUp();
            //$(".closed-user").hide();
            $(".offline-user").delay(600).slideDown();
            offlineChannelsHidden = false;
            onlineChannelsHidden = true;
            closedChannelsHidden = true;
        } else {
            // $(".online-user, .closed-user").slideToggle("slow", function() {
            //     onlineChannelsHidden = !onlineChannelsHidden;
            //     closedChannelsHidden = !closedChannelsHidden;
            // });
            $(".online-user, .closed-user").delay(600).slideUp();
            onlineChannelsHidden = true;
            closedChannelsHidden = true;
        }
    });

    //--------------SHOW FOOTER --------------------
    var $footer = $("footer");
    // if(!$footer.is(":visible")) {
    //     $footer.fadeIn("slow");
    // }
    $footer.hide().delay(1500).fadeIn(2200);
});

//# sourceMappingURL=script-compiled.js.map