// Common code used throughout project.

Function.prototype.inheritsFrom = function (parentClassOrObject) {
  // Allows class inheritance.
  if (parentClassOrObject.constructor == Function) {
    // Normal Inheritance 
    this.prototype = new parentClassOrObject;
    this.prototype.constructor = this;
    this.prototype.parent = parentClassOrObject.prototype;
  }
  else {
    // Pure Virtual Inheritance 
    this.prototype = parentClassOrObject;
    this.prototype.constructor = this;
    this.prototype.parent = parentClassOrObject;
  }
  return this;
}
