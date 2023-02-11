import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServiceRestService } from '../../serviceRest/service-rest.service';

@Component({
  selector: 'app-validar-email',
  templateUrl: './validar-email.component.html',
  styleUrls: ['./validar-email.component.css']
})
export class ValidarEmailComponent {
  
  @ViewChild("email") correo!: ElementRef; 
  

  constructor(private serviceRest: ServiceRestService){
  }

  verificarCorreo(): void{
    const correo: String = this.correo.nativeElement.value;
    console.log(correo);
    this.serviceRest.validarCorreo(correo);
  }

}
