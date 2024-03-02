/*const sumar=(num1,num2)=>num1+num2;
console.log(sumar(7,5));*/

const superHeroes=[
{nombre:"Batman"},
{nombre:"Superman"},
{nombre:"Aquaman"},
{nombre:"Spiderman"},
{nombre:"Shazam"}]

const printName=(x)=>console.log(`El nombre del superheroe es ${x.nombre}`)

const printAll=(array,funcion)=>{
    array.forEach((superheroe)=>{
        funcion(superheroe)
    })

}

printAll(superHeroes,printName);