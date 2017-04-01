/**
 * Created by manishgiri on 3/31/17.
 */

function Stack() {
    collection = [];
    this.print = function () {
        console.log(collection);
    };
    // Only change code below this line
    this.push = function (element) {
        collection.push(element);
    };

    this.peek = function () {
        return collection[collection.length - 1];
    };

    this.isEmpty = function () {
        return collection.length === 0;
    };

    this.clear = function () {
        collection = [];
    };

    this.pop = function () {
        return collection.pop();
    };

    this.push = function (element) {
        collection.push(element);
    };

}
