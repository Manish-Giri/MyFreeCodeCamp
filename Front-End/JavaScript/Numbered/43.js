/*Waypoint: Add your JavaScript Slot Machine Slots
Now that our slots will each generate random numbers, we need to check whether they've all returned the same number.

If they have, we should notify our user that they've won.

Otherwise, we should return null, which is a JavaScript data structure that means nothing.

If all three numbers match, we should return the number that we have in three of slots or leave it as null.

Let's create an if statement with multiple conditions in order to check whether all numbers are equal.

if(slotOne !== slotTwo || slotTwo !== slotThree){

  return null;

}*/

function runSlots(){
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
    if(slotOne !== slotTwo || slotTwo !== slotThree){

  return null;

}
    else 
      return slotOne;
    
    
    // Only change code above this line.
    
    if(slotOne !== undefined && slotTwo !== undefined && slotThree !== undefined){
      $(".logger").html(slotOne);
      $(".logger").append(" " + slotTwo);
      $(".logger").append(" " + slotThree);
    }
    return [slotOne, slotTwo, slotThree];
  }

  $(document).ready(function(){
     $(".go").click(function(){
       runSlots();
     });
   });