// MDB Lightbox Init
$(function  () {
	left = parseInt(imgObj.style.left, 10);

    if (10 >= left) {
        imgObj.style.left = (left + 5) + 'px';
        imgObj.style.visibility='visible';

        animate = setTimeout(function(){moveRight();},20); // call moveRight in 20msec

        //stopanimate = setTimeout(moveRight,20);
    } else {
        stop();
    }
$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
}); 
