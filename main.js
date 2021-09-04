song = ""

function setup(){
    canvas = createCanvas(455, 405);
    canvas.position(550, 318);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 455, 405)
}

function preload(){
    song = loadSound("Janji - Heroes Tonight (feat. Johnning) [NCS Release].mp3", "Fareoh - Illuminati [NCS Release].mp3");
}


 song.play();
