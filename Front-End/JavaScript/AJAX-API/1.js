// Waypoint: Trigger Click Events with jQuery
// In this section, we'll learn how to get data from APIs. APIs - or Application Programming Interfaces - are tools that computers use to communicate with one another.

// We'll also learn how to update HTML with the data we get from these APIs using a technology called Ajax.

// First, let's review what the $(document).ready() function does. This function makes it so all code inside of it only runs once our page loads.

// Let's make our "Get Message" button change the text of the element with the class message.

// Before we can do this, we need to implement a click event inside of our $(document).ready() function by adding this code:

// $("#getMessage").on("click", function(){

// });

//   Run tests (ctrl + enter)
//   Reset	  Help	  Bug
// Bind the click event to the button with the ID of getMessage
// Be sure to close your functions with });

<script>
  $(document).ready(function() {
    // Only change code below this line.
    $("#getMessage").on("click", function() {});
    // Only change code above this line.
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
