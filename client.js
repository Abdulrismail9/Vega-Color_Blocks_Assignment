console.log('Client is up');

$(document).ready(onReady);

function onReady(){
    console.log('JQ');
    $('#red').on('click', redBox);
    $('#blue').on('click', blueBox);
    $('#green').on('click', greenBox);
    $('#yellow').on('click', yellowBox);
    $('#boxes').on('click', '.box1', deleteRedBlck);
    $('#boxes').on('click', '.box2', deleteBlueBlck);
    $('#boxes').on('click', '.box3', deleteGreenBlck);
    $('#boxes').on('click', '.box4', deleteYellowBlck);
}
let redCount = 1;
let blueCount = 1;
let greenCount = 1;
let yellowCount = 1;
// function to produce more red boxes
function redBox(){
    console.log('red button clicked');
    $('#boxes').append('<div class="box1"> </div>');
    $('.redBlocks').empty();
    $('.redBlocks').append(redCount ++);
}
// function to produce more blue boxes
function blueBox(){
    console.log('blue button clicked');
    $('#boxes').append('<div class="box2"> </div>');
    $('.blueBlocks').empty();
    $('.blueBlocks').append(blueCount ++);
}
// function to produce more green boxes
function greenBox(){
    console.log('green button clicked');
    $('#boxes').append('<div class="box3"> </div>');
    $('.greenBlocks').empty();
    $('.greenBlocks').append(greenCount ++);
}
// function to produce more yellow boxes
function yellowBox(){
    console.log('yellow button clicked');
    $('#boxes').append('<div class="box4"> </div>');
    $('.yellowBlocks').empty();
    $('.yellowBlocks').append(yellowCount ++);
}

// delete function for each block
function deleteRedBlck() {
    $(this).remove();
    $('.redBlocks').empty(redCount);
    $('.redBlocks').append(redCount -= 1);
}
function deleteBlueBlck() {
    $(this).remove();
    $('.blueBlocks').empty(blueCount);
    $('.blueBlocks').append(blueCount -= 1);
}
function deleteGreenBlck() {
    $(this).remove();
    $('.greenBlocks').empty(greenCount);
    $('.greenBlocks').append(greenCount -= 1);
}
function deleteYellowBlck() {
    $(this).remove();
    $('.yellowBlocks').empty(yellowCount);
    $('.yellowBlocks').append(yellowCount -= 1);
}

