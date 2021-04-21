'use strict'
class Shape{
  static circleRate = 3.14;
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }
  inputDraw(a,b){//매개변수 추가 : 값을 받아와서 그리기
    console.log(a+','+b);
    //this.width = a;
    //this.height = b;
  }
  draw(){
    console.log('도형그리기');
  }
  getArea(){
    console.log(this.width * this.height);
  }
}

class Rectangle extends Shape{}

class Triangle extends Shape{
  draw(){
    super.draw();
    console.log('삼각형 그리기 로직');//오버라이딩 시 해당 함수내에서 부모함수 불러오기 가능 (super. 키워드 사용)
  }
  getArea(){
    console.log((this.width * this.height)/2);
  }
}

class Circle extends Shape{
  constructor(radius, color){
    super();
    this.radius = radius;
    this.color = color;
  }
  getArea(){
    console.log(Shape.circleRate * this.radius * this.radius);
  }
  rotate(){
    console.log('원형도형 회전하기');
  }
}

class Parallelogram extends Shape{
  constructor(width, height, angle, color){
    super();
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.color = color;
  }
  draw(){
    console.log('평행사변형 그리기');
  }
  getArea(){
    console.log(this.width * this.height * this.angle);
  }
}

// let shapeObj = new Shape(250, 300, 'red');
// console.log(shapeObj.width+','+shapeObj.height+','+shapeObj.color);
// shapeObj.inputDraw(20,30);
// shapeObj.draw();
// shapeObj.getArea();

// console.log(rect)
// rect.inputDraw(50, 10);

// console.log(tri);
// tri.draw();
// tri.getArea();

let rect = new Rectangle(30, 20,'blue');
let tri = new Triangle(30,10,'green');
let circle = new Circle(10,'yellow');
let parallelogram = new Parallelogram(30,40,0.707);

rect.getArea();
console.log(rect.color);
rect.inputDraw(10,'도형 그리기');
rect.draw();

/* tri */
tri.getArea();
console.log(tri.color);
tri.draw();

parallelogram.getArea();
