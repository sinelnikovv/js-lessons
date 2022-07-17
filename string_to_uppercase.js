
class MyString {

  reverse(text) { 
    return text.split('').reverse().join('');
  }

  ucFirst(text) {    
    return text[0].toUpperCase() + text.substr(1);
  }

  ucWords(text) {
     text = text.split(" ");
    
    for (let i=0; i < text.length; i++){
      text[i] = text[i][0].toUpperCase() + text[i].substr(1);

    }

    return text.join(" ");

    
  }
}

let str = new MyString;

