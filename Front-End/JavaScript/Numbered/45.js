/*Waypoint: Give your JavaScript Slot Machine some Stylish Images
Now let's add some images to our slots.

We've already set up the images for you in an array called images. We can use different indexes to grab each of these.

Here's how we would set the first slot to show a different image depending on which number its random number generates:

$($('.slot')[0]).html('<img src = "' + images[slotOne-1] + '">');

Set up all three slots like this, then click the "Go" button to play the slot machine.*/

  function runSlots(){
    var slotOne;
    var slotTwo;
    var slotThree;
    
    var images = ["http://i.imgur.com/9H17QFk.png", "http://i.imgur.com/9RmpXTy.png", "http://i.imgur.com/VJnmtt5.png"];
    
    slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    $('.logger').html('');
    $('.logger').html('Not A Win');
    
    // Only change code below this line.
    
    $($('.slot')[0]).html('<img src = "' + images[slotOne-1] + '">');
    $($('.slot')[1]).html('<img src = "' + images[slotTwo-1] + '">');
    $($('.slot')[2]).html('<img src = "' + images[slotThree-1] + '">');
    
    // Only change code above this line.
    
    if (slotOne === slotTwo && slotTwo === slotThree) {
      return slotOne;
    }
    
    if(slotOne !== undefined && slotTwo !== undefined && slotThree !== undefined){
      $('.logger').html(slotOne);
      $('.logger').append(' ' + slotTwo);
      $('.logger').append(' ' + slotThree);
    }
    
    return [slotOne, slotTwo, slotThree];
  }

  $(document).ready(function(){
     $('.go').click(function(){
       runSlots();
     });
   });