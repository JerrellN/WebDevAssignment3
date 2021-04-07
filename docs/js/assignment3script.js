

var modal = document.getElementsByClassName('modal');



var btn = document.getElementsByClassName("btn");



var span = document.getElementsByClassName("close");

btn[0].onclick = function() {
    modal[0].style.display = "block";
}

btn[1].onclick = function() {
    modal[1].style.display = "block";
}


span[0].onclick = function() {
    modal[0].style.display = "none";
}

span[1].onclick = function() {
    modal[1].style.display = "none";
}




window.onclick = function(event) {
    if (event.target == modal[0]) {
        modal[0].style.display = "none";
    }

    if (event.target == modal[1]) {
        modal[1].style.display = "none";
    }

    
}

function inputFocus(i){
    if (i.value== i.defaultValue) {
        i.value = " "; i.style.color = "#000";
    }
}

function inputBlur(i){
    if (i.value == " " || i.value =="") {
        i.value = i.defaultValue; i.style.color="#888";
    }
    
}