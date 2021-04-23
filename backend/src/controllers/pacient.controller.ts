import { Request, Response } from "express";
import Pacient from "../models/Pacient";

//Creem tres funcions una per crear el usuari, una altre per llistar tots els usuaris i l'altre per modificar l'usuari


export async function createPacient ( req: Request, res: Response): Promise<Response> {

    //Rebem la info del pacient mitjantçant
    const{name,  surname, birthDate,vaccineDate, vaccineApplied, profession} = req.body;

    //Creem el esquema del nou pacient
    const newPacient = ({
        name: name,
        surname: surname,
        birthDate: birthDate,
        vaccineDate: vaccineDate,
        vaccineApplied: vaccineApplied,
        profession: profession,
    });

    try{
        var errorSave = false;
        const pacient = new Pacient(newPacient); //Es crea el pacient per introduir en la base de dades
        await pacient.save(function(err){

            if(err){
                errorSave=true
            }
        }
        );//guardem en la base de dades

        if(errorSave){
            return res.json({
                code: '403',
                message: "Error en los datos introducidos",
              });

        }
        else{
            return res.json({
                code: '200',
                message: "Paciente añadido correctamente",
              });
        }
    }
    catch{
        return res.json({
            code: '505',
            message: "Server Not available",
          });
    }
}

export async function getPacients(req: Request, res: Response): Promise<Response> {
    try{
    //Hem de buscar en la base de dades tots els pacients dissponibles
      const Pacients = await Pacient.find();
      
      return res.json({
        code: "200",
        message: "Listado de Pacientes actualizado",
        pacientsList: Pacients
      }
        );
    }
    catch{
      return res.json({
        code: "500",
        message: "Error en los serivdores o en la BBDD",
        usersList: null
      }
        );
    }
  
}

export async function updatePacient ( req: Request, res: Response): Promise<Response> {

    //Recollim de path params el id del pacient
    const { id } = req.params;

    //Rebem la info del paceint que volem actualitzar 
    const{name,  surname, birthDate,vaccineDate, vaccineApplied, profession} = req.body;

    console.log(req.body);

    

    try{
        const updatepacient = Pacient.findByIdAndUpdate(id,{
            name: name,
            surname: surname,
            birthDate: birthDate,
            vaccineDate: vaccineDate,
            vaccineApplied: vaccineApplied,
            profession: profession,
        },
        {new:true}); //Es crea el pacient per introduir en la base de dades
        
        return res.json({
            code: '200',
            message: "Paciente correctamente modificado",
            updatePacient: updatepacient
          });

    }
    catch{
        return res.json({
            code: '505',
            message: "Server Not available",
          });
    }
}

export async function getPacient(req: Request, res: Response): Promise<Response> {
    try{
        const { id } = req.params;
        console.log(id);
    //Hem de buscar en la base de dades tots els pacients dissponibles
      const pacient = await Pacient.findById(id);
      console.log(pacient);
      
      return res.json({
        code: "200",
        message: "Paciente",
        pacient: pacient
      }
        );
    }
    catch{
      return res.json({
        code: "500",
        message: "Error en los serivdores o en la BBDD",
        pacient: null
      }
        );
    }
  
}





