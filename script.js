function unitConverter(valNum) {
document.getElementById("num1-el").innerHTML=valNum
document.getElementById("outputMeters").innerHTML=Math.round(valNum*3.2808 * 1000)/1000;
document.getElementById("num2-el").innerHTML=valNum
document.getElementById("outputFeet").innerHTML=Math.round(valNum/3.2808 * 1000)/1000;
document.getElementById("num3-el").innerHTML=valNum
document.getElementById("outputLiters").innerHTML=Math.round(valNum*0.264172 * 1000)/1000;
document.getElementById("num4-el").innerHTML=valNum
document.getElementById("outputGallons").innerHTML=Math.round(valNum/0.264172 * 1000)/1000;
document.getElementById("num5-el").innerHTML=valNum
document.getElementById("outputKilos").innerHTML=Math.round(valNum*2.20462262185 *1000)/1000;
document.getElementById("num6-el").innerHTML=valNum
document.getElementById("outputPounds").innerHTML=Math.round(valNum/2.20462262185 *1000)/1000;
}