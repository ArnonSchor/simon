var gamePattern=[];
var buttonColors = ["red", "blue", "green", "yellow"];
var level= 0;
var userClickedPattern=[];
var started=false;

function nextSequence() {
     userClickedPattern=[]
    level++
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColor= buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(50).fadeIn(50);
playSound(randomChosenColor);
$("#level-title").text("Level "+level);



}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
}
  
$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });


$(".btn").click (function(event){
    var userChosenColor=event.target.id;
userClickedPattern.push(userChosenColor);
playSound(userChosenColor);
animatePress(userChosenColor);
checkAnswer(userClickedPattern.length-1);
})

function checkAnswer(currentLevel){
if (gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    if (userClickedPattern.length===gamePattern.length){
    setTimeout(nextSequence, 1000)
}}
else{
new Audio('sounds/wrong.mp3').play();
$("body").addClass('game-over');
setTimeout(function(){ $("body").removeClass("game-over");},200);
$("h1").text("Game over, press any key to restart");
startOver();
}}


function playSound(name){
   var audio= new Audio('sounds/'+name+'.mp3');
   audio.play();

}
function startOver(){
    level= [];
    gamePattern= [];
started=false;
   };
