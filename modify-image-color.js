var img = new SimpleImage("dinos.png");
img.setSize(90,90);
print(img);
for ( var pixel of img.values() ){

if (pixel.getX() <= 30){
pixel.setRed(255);
pixel.setAlpha(1200);
}
else if (30 < pixel.getX() < 60){
pixel.setGreen(255);
pixel.setAlpha(1200);
}
if (pixel.getX() >= 60) {
pixel.setBlue(255);
pixel.setAlpha(1200);
}
}
print(img);