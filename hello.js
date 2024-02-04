function clicked()
{
    var id = document.getElementById("sidedivision");
    var id1 = document.getElementById('first');
    var id2 = document.getElementById('second');
    var id3 = document.getElementById('third');
    var id4 = document.getElementById('four');
    var id5 = document.getElementById('five');
    var sidebar = document.getElementsByClassName('sidebar');

    var value = window.screenY;
    if(id.style.visibility==='visible')
    {
        id.style.width=0+'%';
        id.style.height=0+'vh';
        id.style.top=value+50+'';
        id.style.paddingRight = 2+'px';
        id.style.visibility='hidden';
        id1.style.visibility='hidden';
        id2.style.visibility='hidden';
        id3.style.visibility='hidden';
        id4.style.visibility='hidden';
        id5.style.visibility='hidden';
    }
    else{
        id.style.width=35+'%';
        id.style.height=700+'px';
        id.style.visibility = "visible";
        id1.style.visibility='visible';
        id2.style.visibility='visible';
        id3.style.visibility='visible';
        id4.style.visibility='visible';
        id5.style.visibility='visible';
    }

}
