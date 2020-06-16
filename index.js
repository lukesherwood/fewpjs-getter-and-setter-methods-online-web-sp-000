// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }
  
  get diameter(){
    return this.radius * 2
  }
  
  get circumference() {
    return Math.PI * (this.radius * 2)
  }
  
  get area() {
    return Math.PI * (this.radius * this.radius)
  }
  
  set diameter(diameter) {
    this.diameter = diameter
    this.radius = diameter / 2
  }
  
  set circumference(circumference){
    this.circumference = circumference
    this.radius = (circumference / Math.PI) / 2
  }
  
  set area(area){
    this.area = area
    this.radius = sqr(area / Math.PI)
  }
}