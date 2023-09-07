noseX = 0;
noseY = 0;
leftwrist_X = 0;
rightwrist_X = 0;
Size_square = 0;

function preload() {
    
}

function setup() {
 canvas = createCanvas(730,450);
 canvas.position(560,150);

 video = createCapture(VIDEO);
 video.size(550,550)

 poseNet = ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses)
}


function modelLoaded() {
    console.log("Model is Loaded");
}

function gotPoses(results){
    if (results.length > 0) {
        console.log("RESULTS!!!");
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftwrist_X = results[0].pose.leftWrist.x;
        rightwrist_X = results[0].pose.rightWrist.x;
        Size_square = floor(leftwrist_X - rightwrist_X);
    }
}

function draw() {
    background('#dcdcdc');

    fill('blue');
    stroke('green');
    square(noseX,noseY,Size_square);
    document.getElementById("Width&Height").innerHTML = Size_square ;
}