var a,b,c;


function calculator(){
    a = prompt('enter first number');
    b = prompt('enter second number');
    c = prompt("What do you want \n 1. addition \n 2. Subtraction \n 3.Multiplication \n 4. Division");
    if(c==1){
        add();
    }
    else if(c==2){
        sub();
    }
    else if(c==3){
        mul();
    }
    else if(c==4){
        div();
    }
    else{
        console.log("wrong input");
        document.getElementById("output").innerHTML = "wrong input";
    }
}


function add(){
    var ans = parseInt(a)+parseInt(b);
    console.log(ans);
    document.getElementById("output").innerHTML = ans;
}
function sub(){
    var ans = parseInt(a)-parseInt(b);
    console.log(ans);
    document.getElementById("output").innerHTML = ans;
}
function mul(){
    var ans = parseInt(a)*parseInt(b);
    console.log(ans);
    document.getElementById("output").innerHTML = ans;
}
function div(){
    var ans = parseInt(a)/parseInt(b);
    console.log(ans);
    document.getElementById("output").innerHTML = ans;
}

calculator();