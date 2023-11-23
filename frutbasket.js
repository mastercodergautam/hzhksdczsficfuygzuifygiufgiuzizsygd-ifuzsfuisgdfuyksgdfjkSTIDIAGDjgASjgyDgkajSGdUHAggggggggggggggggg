function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Object";
}
img="";
status="";
objects="";
function preload(){
img=loadImage("fruit basket.jpg")
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
        r=random(255);
        g=random(255);
        b=random(255);
      
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status;Object Dectected";
           
            fill (r,g,b);
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+ percent +"%",objects[i].x,objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
   
    }
   

}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img,gotresult);
}
function gotresult(error,results){
    if(error){
        console.log(error);
    }
    objects=results
    console.log(results);
}