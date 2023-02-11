import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServiceRestService } from '../../serviceRest/service-rest.service';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent {

  @ViewChild("nombre") nombre!: ElementRef;
  @ViewChild("apPaterno") apPaterno!: ElementRef;
  @ViewChild("apMaterno") apMaterno!: ElementRef;
  @ViewChild("edad") edad!: ElementRef;
  @ViewChild("correo") correo!: ElementRef;

  constructor(private service: ServiceRestService){}

  registrarUsuario(): void{
    const nombre: String = this.nombre.nativeElement.value;
    const apPaterno: String = this.apPaterno.nativeElement.value;
    const apMaterno: String = this.apMaterno.nativeElement.value;
    const edad: String = this.edad.nativeElement.value;
    const correo: String = this.correo.nativeElement.value;

    this.service.guardarUsuario(nombre, apPaterno, apMaterno, edad, correo);
  }

}
