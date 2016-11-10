"use strict";

/*Waypoint: Bring your JavaScript Slot Machine to Life
Now we can detect a win. Let's get this slot machine working.

Let's use the jQuery selector $(".slot") to select all of the slots.

Once they are all selected, we can use bracket notation to access each individual slot:

$($(".slot")[0]).html(slotOne);

This jQuery will select the first and update the slot's HTML to display the correct number.

Use the above selector to display each number in its corresponding slot.*/

function runSlots() {
  var slotOne;
  var slotTwo;
  var slotThree;

  var images = ["http://i.imgur.com/9H17QFk.png", "http://i.imgur.com/9RmpXTy.png", "http://i.imgur.com/VJnmtt5.png"];

  slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  $(".logger").html("");
  $(".logger").html("Not A Win");

  // Only change code below this line.
  $($(".slot")[0]).html(slotOne);
  $($(".slot")[1]).html(slotTwo);
  $($(".slot")[2]).html(slotThree);

  // Only change code above this line.

  if (slotOne === slotTwo && slotTwo === slotThree) {
    return slotOne;
  }

  if (slotOne !== undefined && slotTwo !== undefined && slotThree !== undefined) {
    $(".logger").html(slotOne);
    $(".logger").append(" " + slotTwo);
    $(".logger").append(" " + slotThree);
  }

  return [slotOne, slotTwo, slotThree];
}

$(document).ready(function () {
  $(".go").click(function () {
    runSlots();
  });
});

//# sourceMappingURL=44-compiled.js.map