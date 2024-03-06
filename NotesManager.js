class NotesManager {
    static quantity = 0;
    static #notes = [];
    create(data) {
        data.id = NotesManager.quantity + 1;
        data.type = data.type || `to do`;
        data.text ? NotesManager.#notes.push(data) && (NotesManager.quantity = NotesManager.quantity + 1) : console.log(`Ingrese una propiedad text?`)

        /* const note={
             id:NotesManager.quantity+1,
             type:data.type || `to do`,
             text:data.text,
             date:data.date || new Date()
         }*/




    }
    read() {
        return NotesManager.#notes;
    }

}

const note = new NotesManager()
note.create({})
note.create({ text: `primera nota` })
note.create({ text: `segunda nota` })
note.create({ text: `tercera nota` })
console.log(note.read());