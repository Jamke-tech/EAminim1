import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacientService {

  constructor(private http: HttpClient) { }


//Funció per actualitzar usuari

updatePacient(id: string, name: string,surname: string, birthDate: Date, vaccineDate: Date, vaccineApplied: string,profession: string): Observable<any> {
  return this.http.post(`${environment.baseUrlAPI}/pacient/${id}`, 
  
  {
    name: name,
    surname: surname,
    birthDate: birthDate,
    vaccineDate: vaccineDate,
    vaccineApplied: vaccineApplied,
    profession: profession
  });
}


//funció per registrar un pacient a la bbdd
registerPacient(name: string,surname: string, birthDate: Date, vaccineDate: Date, vaccineApplied: string,profession: string): Observable<any> {
  return this.http.post(`${environment.baseUrlAPI}/pacient`, 
  {
    name: name,
    surname: surname,
    birthDate: birthDate,
    vaccineDate: vaccineDate,
    vaccineApplied: vaccineApplied,
    profession: profession
  });
}

//Funció que retorna tots els pacients de la base de dades
getPacients():Observable<any> {
  return this.http.get(`${environment.baseUrlAPI}/pacient`);
}

getPacient(id:string):Observable<any> {
  return this.http.get(`${environment.baseUrlAPI}/pacient/${id}`);
}

}




