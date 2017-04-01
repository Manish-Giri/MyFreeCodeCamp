/**
 * Created by manishgiri on 3/31/17.
 */

function Queue () {
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.enqueue = function(element) {
        collection.unshift(element);
    };

    this.dequeue = function() {
        return collection.pop();
    };

    this.front = function() {
        return collection[collection.length - 1];
    };

    this.size = function() {
        return collection.length;
    };

    this.isEmpty = function() {
        return collection.length ===0;
    };

    // Only change code above this line
}
