function test() {
    var x = document.getElementById("hidden_div");
    var sty=x.className;
    x.height=300;
    console.log(x.className);
    var pos = sty.search("d-flex");
    console.log(pos);
    if (pos!=-1) {
        
        var st = sty.replace("d-flex","d-none");
        console.log("true "+st);
        x.className=st;
    } else {
        var st = sty.replace("d-none","d-flex");
        console.log("false "+st);
        x.className=st;
    }
    /*if (x.className == "d-none") {
        x.className = "d-block";
        console.log(x.style.transitionDuration);
        
    } else {
        x.className = "d-none";
        
    }
    */

}