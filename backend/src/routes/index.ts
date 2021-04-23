import { Router } from "express";
import { createPacient, getPacient, getPacients, updatePacient } from "../controllers/pacient.controller";


//Creem un router per la nostra API

const router = Router();

router.route("/pacient")
    .post(createPacient)
    .get(getPacients)

router.route("/pacient/:id")
    .post(updatePacient)  
    .get(getPacient) 

//Rutes de la API
//Exemple:
/* router.route("/")
    .post(Helloworld)*/

export default router;