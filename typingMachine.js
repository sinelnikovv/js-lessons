let text = "To be, or not to be, that is the question",
  author = "William Shakespeare, from `Hamlet`",
  sec = 100,
  i = 0;

function sh() {
  
  if (i < text.length){    
    write = document.write(text[i]);
    i++;
    setTimeout(sh, 200);
   
  }
  else {
    write = document.write('<br/>' + author);
  }
    
  }
    


