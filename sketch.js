
var c = "";
var x = 0;
var y = 0;
var r,g,b;

function setup() {
  createCanvas(255 * 2, 255 * 2);
  document.write("write javascript for the r,g,b of each pixel x and y are the variables var is unnecessary for x, y, r, g, and b r = red g = green b = blue tab to finish");
}

function keyPressed(){
  if(keyCode != TAB && keyCode != RETURN && keyCode != SHIFT && keyCode != BACKSPACE){
    background(255);
    c += key;
    text(c, 20, 20);
  }
  else if(keyCode == RETURN){
    c += "\n";
  }
  else if(keyCode == BACKSPACE){
    c = c.substring(0, c.length-1);
    background(255);
    text(c, 20, 20);
  }
  else if(keyCode == SHIFT){
    
  }
  else{
    background(255);
    for(x = 0; x < width; x++){
      for(y = 0; y < height; y++){
        r = 0;
        g = 0;
        b = 0;
        let brightness = 0;
        try{
          let F=new Function (c);
          
          F();
          stroke((r + brightness) % 255, (g + brightness) % 255, (b + brightness) % 255);
          point(x, y);
        }
        catch{
          
        }
      }
    }
    c = "";
  }
}
