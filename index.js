// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    return Math.abs (distance - 42)

}
function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks  (distance)*264;
} 
function distanceTravelledInFeet  (a,b){
    return Math.abs((a-b)*264)
}

function calculatesFarePrice (a,b) {
const x = distanceTravelledInFeet  (a,b)
if (x <400){
    return 0;
}
else if (x < 2000 && x > 400){ 
    return (x - 400) * 0.02; 
}
else if (x< 2500 && x > 2000){
    return 25;
}
else  if ( x > 2500){
    return 'cannot travel that far';
}
}