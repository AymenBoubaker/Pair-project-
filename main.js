
// el function values kool tamlelhom clear :
function clearScreen() {
    $("#result").val("") 
}


// el function dhedhy ta3ml display lel values
function display(value) {
    $("#result").val($("#result").val()+value) 
}

    

// el function hedhy te7sbelna result ml inputed value  : 
function calculate() {
    var p = $("#result").val();
// eval t7wel string lel number !!!!!!****
    var q = eval(p);
   $("#result").val(q) 
}