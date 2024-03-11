

/*const sumar = (n1, n2) => n1 + n2;

const restar = (n1, n2) => n1 - n2;

const multiplicar = (n1, n2) => n1 * n2;*/

/*const verificacion=(err,exito)=>{
    if(err){
        return err
    }else{
        return exito
    }
}*/

/*function dividir(n1, n2) {
    const myPromise = new Promise((resolve, reject) => {
        if (n2 !== 0) {
            resolve(n1 / n2)
        } else {
            reject("No se puede dividir por cero")
        }
    })
    return myPromise;
}



const calcular = (n1, n2, operacion) => {
    const resultadoDeLaOperacion = operacion(n1, n2);
    return resultadoDeLaOperacion;
}

const res1 = calcular(5, 2, dividir);
console.log(res1)
res1.then(response => console.log(response))
    .catch(err => console.log(err))*/

class NotesManager {
    static #notes = [];
    create(data) {
        try {
            const note = {
                id: NotesManager.#notes.length + 1,
                type: data.type || `to do`,
                text: data.text,
                date: data.date || new Date()
            }
            if (data.text) {
                NotesManager.#notes.push(note)
                NotesManager.#notes.length + 1

            } else {
                throw new Error(`No ingreso texto`)
            }
        }
        catch (error) {
            console.log(`hubo un error: ${error}`)
        }
    }
    read() {
        try {
            if (NotesManager.#notes.length !== 0) {
                return NotesManager.#notes;
            } else {
                throw new Error(`No hay notas`)
            }
        }
        catch (error) {
            console.log(`hubo un error: ${error}`)
        }

       
    }
    readOne(id){

        try {
            const one = NotesManager.#notes.find(note=>note.id===id)
                if (one) {
                    return one
                } else {
                    throw new Error(`No se encontro la nota`)
                }
            }

        
        catch (error) {
            console.log(`hubo un error: ${error.message}`)
        }

    }
    destroy(id){
      
        try{ 
           const one= this.readOne(id)
           
        if(one){
         
            const within=NotesManager.#notes.filter(note=>note.id!==id)
            NotesManager.#notes=within
            console.log("se elimino nota")
        }else{
            throw new Error("one no esta definido")
        }
                
        
        }
        catch(error){
            console.log(`se genero un error: ${error.message}`)
        }
        
    }
}








const note = new NotesManager()
console.log(note.read())
note.create({ text: `nota1` })
note.create({ text: `nota2` })
note.create({ text: `nota3` })
note.create({ text: `nota4` })
note.create({ text: `nota5` })
console.log(note.read())
console.log(note.readOne(2))
console.log(note.destroy(10))


