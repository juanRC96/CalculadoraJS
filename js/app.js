let pantalla = "";
let valor1 = 0;
let valor2 = 0;
let operacion = "";

let ingresarValor = (caracter) =>{
    if(caracter!= "AC"){
        if(operacion == ""){
            if(caracter!="+" && caracter!="-" && caracter!="/" && caracter!="*"){
                pantalla += caracter;
            }
            else if(caracter=="+" || caracter=="-" || caracter=="/" || caracter=="*"){
                valor1 = parseFloat(pantalla);
                pantalla = "";
                operacion = caracter;
            }
            return display.innerHTML = pantalla;
        }
        else if(operacion != ""){
            if(caracter!="+" && caracter!="-" && caracter!="/" && caracter!="*" && caracter!="="){
                pantalla += caracter;
            }
            else if(caracter=="="){
                valor2 = parseFloat(pantalla);
                pantalla = "" + valor1 + operacion + valor2 + " = " + calcularResultado(valor1,valor2,operacion);
            }
            return display.innerHTML = pantalla;
        }
    }
    else if(caracter=="AC"){
        pantalla="";
        valor1=0;
        valor2=0;
        operacion="";
        return display.innerHTML = pantalla;
    }
}

let calcularResultado = (v1,v2,opc) =>{
    let resultado=0;

    if(opc=="+"){
        resultado = v1+v2;
    }
    else if(opc=="-"){
        resultado = v1-v2;
    }
    else if(opc=="*"){
        resultado = v1*v2;
    }
    else if(opc=="/"){
        resultado = v1/v2;
    }   
    return resultado.toLocaleString();;
}
