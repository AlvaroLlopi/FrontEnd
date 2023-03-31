import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombre: string ;
  descripcion: string ;
  imgp: string;

  constructor(private sProyecto: ProyectoService, private router: Router, private activatedRouter: ActivatedRoute, public ImageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proy = new Proyecto(this.nombre, this.descripcion,this.imgp);
    this.sProyecto.save(proy).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
    }
    uploadImage($event : any){
      const id= this.activatedRouter.snapshot.params['id'];
      const name = "proyecto_" + id;
      this.ImageService.uploadImage($event, name);
    }
  

}
