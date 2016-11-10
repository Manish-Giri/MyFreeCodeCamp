// Waypoint: Prefilter JSON
// If we don't want to render every cat photo we get from our Free Code Camp's Cat Photo JSON API, we can pre-filter the json before we loop through it.

// Let's filter out the cat whose "id" key has a value of 1.

// Here's the code to do this:

// json = json.filter(function(val) {

//   return(val.id !== 1);

// });

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug
// You should be making use of the .filter method.
<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {

        var html = "";

        // Only change code below this line.
        
          json = json.filter(function(val) {

  return(val.id !== 1);

});
        
        // Only change code above this line.

        json.forEach(function(val) {

          html += "<div class = 'cat'>"

          html += "<img src = '" + val.imageLink + "'>"

          html += "</div>"

        });

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
