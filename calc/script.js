function calc(){
    var op1 = parseInt(document.querySelector("#op1").value);
    var op2 = parseInt(document.querySelector("#op2").value);
    var op = document.querySelector("#op").value;
    var calculate;

    if (op == "add"){
        calculate = op1 + op2;
    }
    else if (op == "sub"){
        calculate = op1 - op2;
    }

    else if (op == "mul"){
        calculate = op1 * op2;
    }

    else if (op == "div"){
        calculate = op1 / op2;
    }

    document.querySelector("#result").innerHTML = calculate;
}