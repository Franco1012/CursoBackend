/*const obj={
    
    edad:38,
    ciudad:`Córdoba`,
    mascota:`perro`
}
obj.nombre||(obj.nombre =`Ana`);
console.log(obj);*/

/*function dividir(n1, n2) {
    const promise = new Promise((resolve, reject) => {
        if (n2 !== 0) {
            resolve(n1 / n2)
        }else{
            reject("No se puede dividir por cero");
        }
       
    })
    return promise
}

const res1=dividir(10,0)
res1.then(response=>console.log(response)).catch(err=>console.log(err))*/

function crearArray(){
    const array = [];
    for (let i = 0; i < 10; i++) {
        array.push(i)
    }
    return array
}

 let array1=crearArray()
 console.log(array1)
 console.log(crearArray());
 console.log(array1)
array1=crearArray()