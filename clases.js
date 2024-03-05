//las clases se declaran con la palabra reservada class
//se delara con PascalCase
//se delara en singular
//se declara representativo del recurso y en inglés

class Persona {
  static cantidadPersonas = 0;
  constructor(nombre, edad, ciudad, vida) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.vida = vida || 100;
    Persona.cantidadPersonas++;
  }
  //metodos
  comer(cantidad) {
    this.vida < 150
      ? (this.vida = this.vida + cantidad)
      : console.log(`${this.nombre} no puedes comer mas`);
  }
  entrenar(cantidad) {
    this.vida > 50 && cantidad < this.vida
      ? (this.vida = this.vida - cantidad)
      : console.log(`${this.nombre} no puedes entrenar`);
  }
}

const persona1 = new Persona("Luis", 20, "Barcelona", 100);
persona1.comer(160);
console.log(persona1);
persona1.comer(10);
persona1.entrenar(220);
console.log(persona1);
persona1.entrenar(10);
