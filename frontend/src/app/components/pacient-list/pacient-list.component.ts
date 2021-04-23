import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Pacient } from 'src/app/shared/models/pacient';
import { PacientService } from 'src/app/shared/services/pacient.service';

@Component({
  selector: 'app-pacient-list',
  templateUrl: './pacient-list.component.html',
  styleUrls: ['./pacient-list.component.css']
})
export class PacientListComponent implements OnInit {

  pacients: Pacient[]=[];
  
  constructor(private pacientSvc: PacientService) { }

  ngOnInit(): void {
    this.getDatafromBBDD();

  }

  //Generem la funció per carregar la llista
  private getDatafromBBDD(): void {
    this.pacientSvc.getPacients().pipe(take(1)).subscribe((res: any) => {

      console.log(res);

      if (res.code == "200") {
         
        this.pacients = res.pacientsList;

        console.log(this.pacients);
        
      } else {
        this.pacients = [];
      }
    

    })


  }


    







}
