/**
 * Created by manishgiri on 3/31/17.
 */

function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
        (console.log(this.collection));
    };
    // Only change code below this line
    this.enqueue = function(arr) {
        //let item = arr[0];
        var priority = arr[1];
        //console.log(`Priority = ${priority}`);
        //check if collection is empty
        if(!this.collection.length) {
            this.collection.push(arr);
        }
        else {
            for(var i = 0; i < this.collection.length; i++) {

                if(priority >= this.collection[i][1]) {
                    //current item has higher priority
                    //console.log("in if");
                    this.collection.splice(i, 0, arr);
                    return;
                }

            }

            //outside the for, if return has still not executed, then current item being inserted has
            //lowest priority
            this.collection.push(arr);
        }

    };


    this.dequeue = function(){
        var removed = this.collection.pop();
        return removed[0];
    };

    this.size = function() {
        return this.collection.length;
    };

    this.isEmpty = function() {
        return this.collection.length === 0;
    };

    this.front = function() {
        return this.collection[this.collection.length - 1];
    };


    // Only change code above this line
}

var test = new PriorityQueue();
test.printCollection();
test.enqueue(['Taco', 1]);
test.printCollection();
test.enqueue(['Kitty', 1]);
test.printCollection();
console.log(test.dequeue());
test.printCollection();
