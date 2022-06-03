let pantalla = "";
let resultado = 0;
let valor1 = 0;
let valor2 = 0;
let operacion = "";

function ingresarValor(caracter){

    if(caracter!= "AC"){
        if(operacion == ""){
            if(caracter!="+" && caracter!="-" && caracter!="/" && caracter!="*"){
                pantalla += caracter;
            }
            else if(caracter=="+" || caracter=="-" || caracter=="/" || caracter=="*"){
                valor1 = parseInt(pantalla);
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
                valor2 = parseInt(pantalla);
                if(operacion=="+"){
                    pantalla = valor1+valor2;
                }
                else if(operacion=="-"){
                    pantalla = valor1-valor2;
                }
                else if(operacion=="*"){
                    pantalla = valor1*valor2;
                }
                else if(operacion=="/"){
                    pantalla = valor1/valor2;
                }   
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
