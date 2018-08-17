var status=0;
var light=document.getElementById('light')

function switch_light() {
   
    
    console.log(light);
    console.log(status);
    if (status==1) {
        light.src='./pic_bulboff.gif';
        status=0;
    }else if (status==0) {
        light.src='./pic_bulbon.gif';
        status=1;
    } 
    
   

}