// Waypoint: Render Images from Data Sources
// We've seen from the last two lessons that each object in our JSON array contains an imageLink key with a value that is the url of a cat's image.

// When we're looping through these objects, let's use this imageLink property to display this image in an img element.

// Here's the code that does this:

//   html += "<img src = '" + val.imageLink + "'>";

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug
// You should have used the imageLink property to display the images.
<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {

        var html = "";

        json.forEach(function(val) {

          html += "<div class = 'cat'>";

          // Only change code below this line.
          
              html += "<img src = '" + val.imageLink + "'>";
          
          // Only change code above this line.

          html += "</div>";

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
