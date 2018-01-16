var img = new SimpleImage("drewRobert.png");
var change = new SimpleImage("dinos.png");
var output = new SimpleImage();

img.setSize(100,100);
change.setSize(100,100);
output.setSize(100,100);


for ( var pixel of img.values() ){
 var x = pixel.getX();
 var y = pixel.getY();
    
if( pixel.getGreen() > pixel.getRed() + pixel.getBlue() ){
    
    output.setPixel(x,y,change.getPixel(x,y));
}
else{
    output.setPixel(x,y,img.getPixel(x,y));
}
}
print(output);