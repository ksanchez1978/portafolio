function callmenu (){
  let noejercicio = parseInt (
    prompt ("Ingrese el número de ejercicio que quiere ejecutar: \r\n 1.Suma \r\n 2.Promedio de Ecamenes \r\n 3.Area del Rectangulo \r\n 4.Area del triangulo \r\n 5.Area de la Circunferencia \r\n 6.Calcular Salario Semanal \r\n 7. Convertir a Pulgadas  \r\n 8. Cambiar Dolares \r\n 9. Edad \r\n 10. Calcular el menor \r\n 11. Bono \r\n 12. Incremento de Salario \r\n 13. Aprobados y Desaprobados \r\n 14. Compañia de Focos \r\n 15. Determinar si persona vota")
  );
  if (isNaN(noejercicio)){
    alert("Por favor ingresa valores númericos");
  }
  else {
    Menuejercicio(noejercicio)
  }
}

function Menuejercicio(noejercicio){
  switch(noejercicio){
    case 1:
      let valor1 = parseFloat(prompt ("Ingrese el valor número 1 a sumar"));
      let valor2 = parseFloat(prompt ("Ingrese el valor número 2 a sumar"));
      alert (ej1_sumarvalores(valor1,valor2));
    break;
   case 2:
      let nota1 = parseFloat(prompt ("Ingrese la nota del primer examen"));
      let nota2 = parseFloat(prompt ("Ingrese la nota del segundo examen"));
      let nota3 = parseFloat(prompt ("Ingrese la nota del tercer examen"));
      let nota4 = parseFloat(prompt ("Ingrese la nota del cuarto examen"));
      alert (calcularprom(nota1,nota2,nota3,nota4));
    break;
 
    case 3:
      let ancho = parseFloat(prompt ("Ingrese el ancho del rectangulo"));
      let largo = parseFloat(prompt ("Ingrese el largo del rectangulo"));
      alert (arearectangulo(ancho,largo));
    break;

    case 4:
      let base = parseFloat(prompt ("Ingrese la base del triangulo"));
      let altura = parseFloat(prompt ("Ingrese la altura del triangulo"));
      alert (areatriangulo(base,valtura));
    break;

    case 5:
      let radio = parseFloat(prompt ("Ingrese el radio de la circunferencia"));
      alert (areacirculo(radio));
    break;

    case 6:
      let horas = parseFloat(prompt ("Ingrese las Horas Trabajadas"));
      let salario = parseFloat(prompt ("Ingrese el salario de hora hombre"));
      alert (sueldo(horas,salario));
    break;

    case 7:
      let metros = parseFloat(prompt ("Ingrese las medidas en metro"));
      alert (pulgadas(metros));
    break;

    case 8:
      let dinero = parseFloat(prompt ("Ingrese la cantidad en soles"));
      let tc = parseFloat(prompt ("Ingrese el Tipo de cambio"));
      alert (cambio(dinero,tc));
    break;

    case 9:
      let anoactual = parseFloat(prompt ("Ingrese el año actual"));
      let nacimiento = parseFloat(prompt ("Ingrese el año en que nacieron"));
      alert (edad(anoactual,nacimiento));
    break;

    case 10:
      let  nombre1 = parseFloat(prompt ("Ingrese el nombre de la primera persona"));
      let edad1 = parseFloat(prompt ("Ingrese la edad de la primera persona"));
      let nombre2 = parseFloat(prompt ("Ingrese el nombre de la segunda persona"));
      let edad2 = parseFloat(prompt ("Ingrese la edad de la segunda persona"));
      let nombre3 = parseFloat(prompt ("Ingrese el nombre de la tercera persona"));
      let edad3 = parseFloat(prompt ("Ingrese la edad de la tercera persona"));
      alert (menor(nombre1,edad1,nombre2,edad2,nombre3,edad3));
    break;

    case 11:
      let ano = (prompt ("Ingrese el año de ingreso del trabajador "));
      alert (bono(2022-ano));
    break;

    case 12:
      let salarioinicial = parseFloat(prompt ("Ingrese el salario inicial"));
      alert (incremento(salarioinicial));
    break;

    case 13:
      let cantalumnos = parseFloat(prompt ("Ingrese la cantidad de alumnos"));
      alert (aprobados(cantalumnos));
    break;

    case 14:
      let cantalumnos1 = parseFloat(prompt ("Ingrese la cantidad de alumnos"));
      alert (aprobados(cantalumnos1));
    break;

    case 15:
      let votacion = parseFloat(prompt ("Ingrese su edad"));
      alert (votar(votacion));
    break;



  }
}



function ej1_sumarvalores(a,b){
  if(isNaN(a) || isNaN(b))
  {
    return " Por favor ingrese valores ";
  }
  else {
     return `La Suma de ${a} y ${b} es ${a+b}`;
  }
}

function calcularprom(a,b,c,d){
  if(isNaN(a)|| isNaN(b) || isNaN(c) || isNaN(d))
  {
    return " Por favor ingrese valores ";
  }
  else {
      return `El promedio de las notas de ${a}, ${b}, ${c}, ${d} es ${(a+b+c+d)/4}`;
  }
}

function arearectangulo(a,b){
  if(isNaN(a) || isNaN(b))
  {
    return " Por favor ingrese valores ";
  }
  else {
    return `El área del rectangulo es ${a*b}`;
  }
}


function areatriangulo(a,b){
  if(isNaN(a) || isNaN(b))
  {
    return " Por favor ingrese valores ";
  }
  else {
    return `El área del triángulo es ${(a*b)/2}`;

  }
}

function areacirculo(a){
  if(isNaN(a))
  {
    return " Por favor ingrese valores ";
  }
  else {
    return `El área de la cirncunferencia es ${(a**2)*3.1416}`;
  }
}

function sueldo(a,b){
  if(isNaN(a) || isNaN(b))
  {
    return " Por favor ingrese valores ";
  }
  else {
    return `El sueldo semanal del trabajador es ${a*b}`;
  }
}

function pulgadas(a){
  if(isNaN(a))
  {
    return " Por favor ingrese valores ";
  }
  else {
    return `La medida de las telas en pulgadas es  ${a/0.0254}`;
  }
}

function cambio(a,b){
  if(isNaN(a) || isNaN(b))
  {
    return " Por favor ingrese valores ";
  }
  else {
    return `Cuenta con ${a/b} dólares`;
  }
}


function menor(a,b,c,d,e,f){
  if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e) || isNaN(f))
  {
    return " Por favor ingrese valores ";
  }
  else {
    if (b<d && b<f){
      return `La persona ${a} es el menor`;
    }
    else {
        if (d<b && d<f){
        return `La persona ${c} es el menor`;
      }
        else{
          if (f<b && f<d) {
            return `La persona ${e} es el menor`;
          }
        }
         }
    }
      }

      function bono(b){
        if(isNaN(b))
        {
          return " Por favor ingrese valores ";
        }
        else {
          if (b>5){
            return " Recibirá un Bono de $ 1000 ";
          }
          else {
            if (b==1){
              return " Recibirá un Bono de $ 100 ";
            }
            if (b==2){
              return " Recibirá un Bono de $ 200 ";
            }
            if (b==3){
              return " Recibirá un Bono de $ 300 ";
            }
            if (b==4){
              return " Recibirá un Bono de $ 400 ";
            }
          }
          return a*b;
        }
      }

      function incremento(a){
        if(isNaN(a))
        {
          return " Por favor ingrese valores ";
        }
        else {
          return `El Salario al cabo de 6 años es : ${a*(1.1**6)} \r\n El primer año es ${a*(1.1**1)} \r\n El segundo año es ${a*(1.1**2)} \r\n El tercer año es ${a*(1.1**3)} \r\n El cuarto año es ${a*(1.1**4)} \r\n El quinto año es ${a*(1.1**5)} \r\n El sexto año es ${a*(1.1**6)} `;
        }
      }

    
      function votar(b){
        if(isNaN(b))
        {
          return " Por favor ingrese valores ";
        }
        else {
          if (b<18){
            return " Usted no puede votar ";
          }
          else {
            if (b>60){
              return " Su participación en las votaciones no es obligatoria ";
            }
            else {
              return " Usted esta obligado a votar en las próximas elecciones";
            }
          }
         }
      }