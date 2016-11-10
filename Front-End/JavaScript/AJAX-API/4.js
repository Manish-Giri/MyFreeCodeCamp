// Waypoint: Convert JSON Data to HTML
// Now that we're getting data from a JSON API, let's display it in our HTML.

// We can use the .forEach() method to loop through our data and modify our HTML elements.

// First, let's declare an html variable with var html = "";.

// Then, let's loop through our JSON, adding more HTML to that variable. When the loop is finished, we'll render it.

// Here's the code that does this:

// json.forEach(function(val) {

//   var keys = Object.keys(val);

//   html += "<div class = 'cat'>";

//   keys.forEach(function(key) {

//     html += "<b>" + key + "</b>: " + val[key] + "<br>";

//   });

//   html += "</div><br>";

// });

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug
// The message box should have something in it.
<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {

        var html = "";
        // Only change code below this line.
        
        json.forEach(function(val) {

          var keys = Object.keys(val);

          html += "<div class = 'cat'>";

          keys.forEach(function(key) {

            html += "<b>" + key + "</b>: " + val[key] + "<br>";

          });

          html += "</div><br>";

        });
        
        // Only change code above this line.

        $(".message").html(html);

      });
    });
  });
</script>

<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
   </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>
