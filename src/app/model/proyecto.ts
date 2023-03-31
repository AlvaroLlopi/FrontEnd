export class Proyecto {
    id?: number;
    nombre: string;
    descripcion: string;
    imgp: string

    constructor(nombre: string, descripcion: string,imgp: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imgp = imgp;
    }
}
