var status = 0;
var light = document.getElementById("light");

function switch_light() {
 var temp=light.src;
 if (temp.search('bon')!=-1) {
    light.src='./pic_bulboff.gif'
     console.log(temp.search('bon'))
 } else {
    light.src='./pic_bulbon.gif'
 }
}
