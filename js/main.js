// FUNCIONES 
function esBisiesto( anio ){
    
    let b = false;

    if( anio%4==0 ){
        if( anio%100==0 ){
            if( anio%400==0 ){
                b = true;
            }
        }
        else{
            b = true;
        }
    }
    return b;
}
function calcularEdad( fechaNacimiento, fechaActual ){
    let edad = fechaActual.anio - fechaNacimiento.anio;
    if( fechaNacimiento.mes == fechaActual.mes ){
        if( fechaNacimiento.dia > fechaActual.mes ){
            edad -= 1;
        }
        else if( fechaNacimiento.mes > fechaActual.mes ){
            edad -=1;
        }
    }
    return edad;
}
 function calcularSiglo( anio ){
    return parseInt(anio/100+1);
 }

// CODIGO PRINCIPAL
const fechaActual = {
    dia: 25,
    mes: 8,
    anio: 2025
};
console.log( "Fecha actual por defecto: ", fechaActual );
alert("A continuacion se le pedira ingresar la fecha actual.")
fechaActual.dia = parseInt(prompt( "Dia:" ));
fechaActual.mes = parseInt(prompt( "Mes:" ));
fechaActual.anio = parseInt(prompt( "Año:" ));
console.log( "Fecha Actual:", fechaActual );

let anio = prompt("Ingrese un año");
anio = parseInt(anio);

switch( parseInt (prompt( "Elija una opcion:\n1. Analizar si el año es bisiesto.\n2. Calcular edad.\n3. Indicar siglo del año" )) ){
    case 1:
        if( esBisiesto(anio) ){
            console.log( "El año es bisiesto" );
        }
        else{
            console.log( "El año no es bisiesto" );
        }
        break;
    case 2:
        const fechaNacimiento ={
            dia: parseInt(prompt( "Dia de nacimiento")),
            mes: parseInt(prompt( "Mes de nacimiento")),
            anio: anio
        };
        console.log( "Edad: ", calcularEdad( fechaNacimiento, fechaActual ), " años."  );
        break;
    case 3:
        console.log( anio, " pertence al siglo ", calcularSiglo(anio) );
        break;
    default:
        console.log( "ERROR: Opcion invalida" );
        break;
}