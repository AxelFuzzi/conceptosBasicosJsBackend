class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas
    }
    
    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota){
        return this.mascotas.push(mascota)
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombre, autor){
        return this.libros.push({'nombre': nombre, 'autor': autor})
    }

    getBookNames(){
        return this.libros.map(bookNames)
    }
}

let bookNames = (libro) => Object.values(libro)[0]

    
    


const Pablo = new Usuario('Pablo', 'gutierrez', [], [])

console.log(Pablo.getFullName());

Pablo.addMascota('scot');
Pablo.addMascota('chuchu');
Pablo.addMascota('silvie');


console.log(Pablo.countMascotas());

Pablo.addBook('El señor de las moscas','William Golding')
Pablo.addBook('Fundacion','Isaac Asimov')
Pablo.addBook('Orgullo y prejuicio','Jane Austen')

console.log(Pablo.getBookNames());

console.log(Pablo);







