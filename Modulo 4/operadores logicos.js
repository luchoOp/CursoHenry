function Mayor5Menor10yPar (num){
    if (num>5 && num<10 && num % 2 == 0){
        return true;
    }else{
        return false;
    }
}
Mayor5Menor10yPar(2);

function OperadorOr (str){
    if (str == "Henry" || str.length < 2){
        return true;
    }else{
        return false;
    }
}
OperadorOr ("Henry");

function Negacion (permiso){
    if (permiso !== true){
        return "tiene permiso";
    }
}
negacion (false);

function condicionCompleja(num){
    if (num > 9 && num % 2 == 0 || num === 3){
        return true;
    }
    else{
        return false;
    }
}

condicionCompleja(2);