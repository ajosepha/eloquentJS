// Write a constructor Vector that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

// Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.

// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

// // Your code here.



// // → Vector{x: -1, y: -1}
// console.log(new Vector(3, 4).length);
// → 5

function Vector(x, y){
	this.x = x;
	this.y = y;
	this.length = Math.sqrt(x*x + y*y)
}

Vector.prototype.test = "I am a Vector" 

Vector.prototype.plus = function(second){
	return new Vector(this.x + second.x, this.y + second.y)
}

Vector.prototype.minus = function(second){
	return new Vector(this.x - second.x, this.y - second.y)
}

// Vector.prototype.length = function(){
// 	return this.x + this.y;
// }

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);