import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServiceRestService {

  constructor(private clienteHttp: HttpClient, private router: Router) { }

  validarCorreo(email:String): void{
    const headers = new HttpHeaders()
    .set('Authorization', 'Basic YWtaW46YWRtaW4=');

    this.clienteHttp.post("http://localhost:8080/api/escuela/validaciones",
    {correo: email}, {headers: headers, observe: "response"}).subscribe((resp:any)=>{
      console.log(resp.body.response);
      if(resp.body.response.message == "correo válido"){
        Swal.fire({
          title: "Ok",
          icon: 'success',
          text: resp.body.response.message,
          confirmButtonText: "OK"
        }).then((result)=>{
          if(result.isConfirmed){
            
          }
        })
      } else {
        Swal.fire({
          title: "Error",
          icon: 'error',
          text: resp.body.response.correo,
          confirmButtonText: "ok"
        }).then((result)=>{
          if(result.isConfirmed){
            
          }
        })
      }
    });
  }

  guardarUsuario(nombre:String, apPat:String, apMat:String, edad:String, correo:String): void{
    this.clienteHttp.post("http://localhost:8080/registraUsuario", {
      nombre: nombre, apellidoPaterno: apPat, apellidoMaterno: apMat, edad: edad, correo: correo
    }).subscribe((resp:any)=>{
      console.log(resp);
      Swal.fire({
        title: "Ok",
        icon: 'success',
        text: "se guardó correctamente el usuario con el id "+resp,
        confirmButtonText: "ok"
      }).then((result)=>{
        if(result.isConfirmed){
          this.router.navigate(["/usuario/alta"])
        }
      })
    })
  }

}
