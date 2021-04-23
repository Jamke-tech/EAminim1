import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Pacient } from 'src/app/shared/models/pacient';
import { PacientService } from 'src/app/shared/services/pacient.service';

@Component({
  selector: 'app-register-pacient',
  templateUrl: './register-pacient.component.html',
  styleUrls: ['./register-pacient.component.css']
})
export class RegisterPacientComponent implements OnInit {

  constructor(private fb:FormBuilder,private authSvc:PacientService,private router:Router) { }
  registro = new FormGroup({
    name: new FormControl('',[Validators.required]),
    surname: new FormControl('',[Validators.required]),
    birthDate: new FormControl('',[Validators.required]),
    vaccineDate: new FormControl('',[Validators.required]),
    vaccine: new FormControl('',[Validators.required]),
    profession: new FormControl('',[Validators.required]),
    

  })

  ngOnInit(): void {
    try{
      this.registro = this.fb.group({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        username: new FormControl(''),
        phone: new FormControl(''),
        birthDay: new FormControl(''),
        email:new FormControl(''),
        password: new FormControl(''),
        profilePhoto: new FormControl(null)
      })
    }
    catch{
      throw new Error('Method not implemented.');
    }



  }

  addPacient(name:string,surname:string,birthDate:string,vaccineDate:string,vaccine:string,profession:string){
    if(this.registro.valid){


      //const fileUpload: this.fileUpload.nativeElement;


      let pacient: Pacient;
      this.authSvc.registerPacient(name,surname,new Date(birthDate),new Date(vaccineDate),vaccine,profession)
      .pipe(take(1)).subscribe((res: any) =>{
        //Miramos que respuesta nos envia 
        if(res.code = "200"){
          //si es correcte tornarem a la pagina de tots els usauris
          this.router.navigate(['/pacient-list']);
        }
        else if(res.code="403"){
          alert("Error en les dades del pacient")
        }
        else{
          alert("Pacient no creado correctamente")
        }
      });
      

    }

    else{
      
    }






  }

}
