// Open Close Principle

class Shape {
  area() {
    throw new Error('Area method should be implemented')
  }
}

// If we want to create another figure Rectangle then we need to change multiple classes
// Instead we create parent class with method area() which must be in all our child-classes
class Square extends Shape {
  constructor(size) {
    super()
    // this.type = 'square'
    this.size = size
  }
  
  area() {
    return this.size ** 2
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    // this.type = 'circle'
    this.radius = radius
  }

  area() {
    return (this.radius ** 2) * Math.PI
  }
}

// Add another shape
class Rectangle extends Shape {
  constructor(width, height) {
    super()
    this.width = width
    this.shape = height
  }

  area() {
    return this.width * this.height
  }
}

class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes
  }

  sum() {
    return this.shapes.reduce((acc, shape) => {
      // if (shape.type === 'circle') {
      //   acc += (shape.radius ** 2) * Math.PI
      // } else if (shape.type === 'square') {
      //   acc += shape.size ** 2
      // }
      acc += shape.area()
      return acc
    }, 0)
  }

}

const calc = new AreaCalculator([
  new Square(10),
  new Circle(1),
  new Circle(5),
  new Rectangle(10, 20)
])

console.log(calc.sum());