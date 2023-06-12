function mayoromenor(n1, n2, mayor){
    if (n1 > n2){
        mayor = n1;
    }else if (n1 < n2){
        mayor = n2;
    }else{
        mayor = mayor;
    }
    console.log(mayor);
    return mayor;
}
mayoromenor(4 , 3, "son iguales");
