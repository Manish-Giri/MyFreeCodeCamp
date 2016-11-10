// Waypoint: Get JSON with the jQuery getJSON Method
// You can also request data from an external source. This is where APIs come into play.

// Remember that APIs - or Application Programming Interfaces - are tools that computers use to communicate with one another.

// Most web APIs transfer data in a format called JSON. JSON stands for JavaScript Object Notation.

// You've already been using JSON whenever you create a JavaScript object. JSON is nothing more than object properties and their current values, sandwiched between a { and a }.

// These properties and their values are often referred to as "key-value pairs".

// Let's get the JSON from Free Code Camp's Cat Photo API.

// Here's the code you can put in your click event to do this:

//   $.getJSON("/json/cats.json", function(json) {

//     $(".message").html(JSON.stringify(json));

//   });

// Once you've added this, click the "Get Message" button. Your Ajax function will replace the "The message will go here" text with the raw JSON output from the Free Code Camp Cat Photo API.

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug
// You should have a click handler on the getMessage button to trigger the AJAX request.
// You should have at least one closing set of brackets and parenthesis.
// Each callback function should have a closing set of brackets and parenthesis.
// You should be making use of the getJSON method given in the description to load data from the json file.
// Don't forget to make the .html change the contents of the message box so that it contains the result of the getJSON.
<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function(){
      // Only change code below this line.
         $.getJSON("/json/cats.json", function(json) {

          $(".message").html(JSON.stringify(json));

        });
      
      
      // Only change code above this line.
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
