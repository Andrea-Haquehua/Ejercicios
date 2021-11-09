let a = prompt("Ingrese un número");
let b = prompt("Ingrese otro número");
let c = prompt("Ingrese otro número");

if(Math.abs(a - b)< Math.abs(c) && Math.abs(c) < Math.abs(a+b)){
    if(a==b && b==c){
        alert("Es equilátero");
    }else if(a==b || b==c || c==a){
        alert("Es isosceles");
    }else{
        alert("Es escaleno");
    }
}else{
    alert("El triángulo no existe");
}