class Circle{
  #radius;
  constructor(radius){
    this.#radius = radius;
  } 

  area(){
    return Math.PI * this.#radius * this.#radius;
  }

  perimeter(){
    return 2 * Math.PI * this.#radius;
  }      
    
}

class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  getSquare() {
    return this.#width * this.#height;
  }

  getPerimeter() {
    return 2 * (this.#width + this.#height);
  }

  getRatio() {
    return this.getSquare() / this.getPerimeter();
  }

}

class Text {
  #text;
  constructor(text) {
    this.#text = text;
  }

  getLength() {
    return this.#text.length;
  }

  getNumberOfWords() {
    return this.#text.split(" ").length;
  }

  getCounterOfLetters() {
    let rx = /[a-zA-Z]/gi;
    let count = this.#text.match(rx);
    return count.length;
  }

  getCounterOfSpaces() {
    let rx = /\s/gi;
    let count = this.#text.match(rx);
    return count.length;
  }

  getCounterOfChars() {
    return this.getLength() - this.getCounterOfSpaces();
  }

  getWordsArray() {
    return this.#text.split(" ");
  }

  getSentencesArray() {
    return this.#text.split(". ");
  }
}
    
class Reriod {
  #start;
  #end;
  constructor(start, end) {
    this.#start = start;
    this.#end = end;
  }

  getDuration() {
    return (this.#end - this.#start) / 1000;
  }

  
}
