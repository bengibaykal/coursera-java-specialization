function swapRedGreen(img){
    var img;
    pixel.setGreen(pixel.getRed());
    pixel.setRed(pixel.getGreen());
}

var img = new SimpleImage("smallhands.png");
img.setSize(90,90);
print(img);

for ( var pixel of img.values() ){
swapRedGreen(pixel);
}
print(img);