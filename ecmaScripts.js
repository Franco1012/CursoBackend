//método includes()

/*const palabra1=`bet`
const palabra2=`beto`
const incluye_bet=palabra2.includes(palabra1);
console.log(incluye_bet)


const frutas = ['manzana', 'banana', 'pera', 'naranja'];

console.log(frutas.includes('ban')); // true
console.log(frutas.includes('sandía')); // false*/


//creamos la promesa

/*const fetchDataFromServer = () =>
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Datos obtenidos del servidor');
  }, 1000);
});

//función asíncrona utilizando async away

async function fetchData() {
    try {
      const data = await fetchDataFromServer();
      console.log(data);
    } catch (error) {
        360
      console.error('Error al obtener los datos:', error);
    }
  }
fetchData()
console.log(`hola se ejecuto codigo`)*/

//Object.keys

/*const producto={
    nombre:'camisa',
    precio:'20',
    color:'rojo',
}

const detalles=Object.keys(producto).map((key)=>{
    console.log(`${key}:${producto[key]}`)

})*/

//desestructuración de un objeto

/*const producto={
    nombre:'camisa',
    precio:'20',
    color:'rojo',
}

const {precio,color}=producto

console.log(precio)*/

//desestructuración de un array

/*const productos=[`yerba`,`mate`,`vaso`]
const [,,vaso]=productos
console.log(vaso)*/
//estructuración

/*const nombre=`Franco`
const edad=38;
const ciudad=`Córdoba`
const persona={nombre,edad,ciudad}
console.log(persona);*/

//operador spreat,rompe el objeto

/*const datos={
    nombre:`Ana`,
    edad:37,
    
}
const ciudad=`Córdoba`

const masDatos={...datos,ciudad}
console.log(masDatos)*/

//operador spreat,rompe el array
/*const datos = [`franco`, 38]
const ciudad = `córdoba`
const masDatos = [...datos, ciudad]
console.log(masDatos)*/

//operador rest con obejeto
/*const datos={
    nombre:`Ana`,
    edad:37,
    ciudad:`Córdoba`
}
const {nombre,...rest}=datos
console.log(nombre)
console.log(rest);*/

//operador rest con array

const datos=[`Franco`,35,`Córdoba`]

const [nombre,...rest]=datos
console.log(rest)