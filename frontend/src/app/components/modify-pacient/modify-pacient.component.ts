import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { PacientService } from 'src/app/shared/services/pacient.service';

@Component({
  selector: 'app-modify-pacient',
  templateUrl: './modify-pacient.component.html',
  styleUrls: ['./modify-pacient.component.css']
})
export class ModifyPacientComponent implements OnInit {
  
  
  pacient: any ;

  constructor(private authSvc:PacientService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    

    //Recuperem les dades dels usuaris per reomplir els valors 
    this.route.params.pipe(take(1)).subscribe((params)=>{
      const id = params['id'];
     // const name = params['name']
     this.authSvc.getPacient(id).subscribe(data => {


      if(data.code = "200"){
        //tenim resposat correcta
        
        this.pacient = data.pacient;
        console.log(this.pacient);

      }
      else{
        console.log("Error: Dades d'usuario incorrecte")
      }
      
      }); 
      
  });
  }

updatePacient (name:string,surname:string,birthDate:string,vaccineDate:string,vaccine:string,profession:string) {
    //Recuperem els id del path params
    this.route.params.pipe(take(1)).subscribe((params)=>{
      const id = params['id'];

      

    //enviem les dades al servei de l'usuari
    this.authSvc.updatePacient(id,name, surname, new Date(birthDate), new Date(vaccineDate) , vaccine, profession).subscribe(res => {

      console.log(res);

      //Comprovem la resposta que ens dona de la bbdd
      if(res.code = "200"){
        //si es correcte tornarem a la pagina de tots els usauris
        

        this.router.navigate(['/pacients-list']);
      }
      else{
        alert("Usuario no creado correctamente")
      }
    });
  });
    
 } 

}
