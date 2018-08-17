var status=0;
var lighton=document.getElementById('lighton')
var lightoff=document.getElementById('lightoff')
function switch_light() {
   
    
    console.log(lighton);
    console.log(status);
    if (status==1) {
        lighton.src='./pic_bulboff.gif';
        status=0;
    }else if (status==0) {
        lighton.src='./pic_bulbon.gif';
        status=1;
    } 
    
   

}