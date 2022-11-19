var val = 0;
var operation;

function changeValue(val){
    var screen = document.getElementById("screen");
    if(screen.innerHTML == 0){
        screen.innerHTML = val.innerHTML;
    }
    else{
        screen.innerHTML = `${screen.innerHTML}` + val.innerHTML;
    }
}
function calc(op){
    var screen = document.getElementById("screen");
    val = screen.innerHTML;
    // console.log(screen.innerHTML);
    console.log(op.innerHTML);
    screen.innerHTML = "0";
    operation=op.innerHTML;

}

function execute(){
    var screen = document.getElementById("screen");
    var val2 = screen.innerHTML;
    console.log(val, operation, val2);
    var sol = 0;
    if(operation == "+"){
        sol = parseInt(val) + parseInt(val2);
    }
    else if(operation == "-"){
        sol = parseInt(val) - parseInt(val2);
    }
    else if(operation == "*"){
        sol = parseInt(val) * parseInt(val2);
    }
    else if(operation == "/"){
        sol = parseInt(val) / parseInt(val2);
    }
    screen.innerHTML = sol;
}

function clearValues(){
    val = 0;
    var screen = document.getElementById("screen");
    console.log(screen.innerHTML);
    screen.innerHTML = 0;
}