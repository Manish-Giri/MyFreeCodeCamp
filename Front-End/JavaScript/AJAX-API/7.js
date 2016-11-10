// Waypoint: Get Geolocation Data
// Another cool thing we can do is access our user's current location. Every browser has a built in navigator that can give us this information.

// The navigator will get our user's current longitude and latitude.

// You will see a prompt to allow or block this site from knowing your current location. The challenge can be completed either way, as long as the code is correct.

// By selecting allow you will see the text on the output phone change to your latitude and longitude

// Here's some code that does this:

// if (navigator.geolocation) {

//   navigator.geolocation.getCurrentPosition(function(position) {

//     $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);

//   });

// }

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug
// You should make use of the navigator.geolocation to access the users current location.

<script>
  // Only change code below this line.
  
    if (navigator.geolocation) {

          navigator.geolocation.getCurrentPosition(function(position) {

        $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);

      });

    }
  
  // Only change code above this line.
</script>
<div id = "data">
  <h4>You are here:</h4>
  
</div>
