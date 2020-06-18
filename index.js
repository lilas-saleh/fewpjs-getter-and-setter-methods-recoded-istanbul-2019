// Add your Circle class here
class Circle{
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2
    }
    get circumference() {
        return this.radius * 2 * Math.PI
    }
    get area() {
        return this.radius ** 2 * Math.PI
    }
    set diameter(newDiameter) {
        this.radius = newDiameter / 2
    }
    set circumference(newDircumference) {
        this.radius = newDircumference / Math.PI / 2
    }
    set area(newArea) {
        this.radius = Math.sqrt(newArea) / Math.PI
    }
}