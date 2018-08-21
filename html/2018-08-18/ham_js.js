function test() {
    var x = document.getElementById("hidden_div");
    var y=document.getElementById("show_div");
    var sty=x.className;
    x.height=300;
    console.log(x.style.display);
    var pos = sty.search("d-flex");
    console.log(pos);
    if (pos!=-1) {
        
        var st = sty.replace("d-flex","d-none");
        console.log("true "+st);
        x.className=st;
        y.classList.add("position-fixed");
        y.classList.add("bg-dark");
        y.style.top="0";
        y.style.zIndex=100;
        
    } else {
        var st = sty.replace("d-none","d-flex");
        console.log("false "+st);
        x.className=st;
        y.classList.remove("position-fixed");
        y.classList.remove("bg-dark");
        y.style.removeProperty("top");
    }
    /*if (x.className == "d-none") {
        x.className = "d-block";
        console.log(x.style.transitionDuration);
        
    } else {
        x.className = "d-none";
        
    }
    */
   
}
