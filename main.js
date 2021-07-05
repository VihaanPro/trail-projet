song="";
song1="";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;

function preload(){

	song=loadSound("music.mp3");
	song1=loadSound("music2.mp3");
if(rightWristY>0){
	song.play();
}

if(leftWristY>0){
	song1.play();
}

}
function setup(){

	canvas=createCanvas(600,500);
	canvas.center();

	video= createCapture(VIDEO);
	video.hide();

}

