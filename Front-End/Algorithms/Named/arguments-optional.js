function add() {

    if(arguments.length === 2) {
    //if(Number.isNaN(arguments[0]) || Number.isNaN(arguments[1]))
        
        if(typeof arguments[0] !== "number" || typeof arguments[1] !== "number") {
      return undefined;
    }
    else {
      return arguments[0] + arguments[1];
    }
  }
  else {
        var num1 = arguments[0];
        if (typeof num1 !== "number") {
            return undefined;
        }
        else {
            return function(num) {
                if(typeof num !== "number") {
                    return undefined;
                }
                
                  
                    return num1 + num;
                
            };
       }
  }
  return false;
}

add(2,3);
