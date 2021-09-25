song = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
song2 = "";
function setup(){
    canvas = createCanvas(455, 405);
    canvas.position(550, 318);
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 455, 405);
}

function preload(){
    song = loadSound("Janji - Heroes Tonight (feat. Johnning) [NCS Release].mp3");
    song2 = loadSound("Fareoh - Illuminati [NCS Release].mp3");
}

function modelLoaded(){
    console.log('PoseNet Is Intialzed');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX + "leftWristY =" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX + "rightWristY =" + rightWristY);
    }
if(leftWristX > 0){

    song.play();
    song.setVolume(1);
    song.rate(1);
    document.getElementById("song").innerHTML = "Janji - Heroes Tonight (feat. Johnning) [NCS Release].mp3";
    }
    if(rightWristX > 0){
        song2.play()
        song2.setVolume(1);
        song2.rate(1);
        document.getElementById("song").innerHTML = "Fareoh - Illuminati [NCS Release].mp3";
    }
}