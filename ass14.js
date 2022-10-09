function fun1(x,s) {

    var all_div = document.getElementsByClassName('tabdiv');
    for (var i = 0; i < all_div.length; i++) {
        all_div[i].style.display = "none";
    }
    document.getElementById(x).style.display = "block";
     
    var btn= document.getElementsByClassName('btn');
    for(var a = 0 ; a<btn.length; a++){
        btn[a].style.backgroundColor="white";

    }
    s.style.backgroundColor ="#ff6138"

}