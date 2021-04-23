import {Schema,model,Document, Mongoose, Types} from 'mongoose';
var mongoose = require('mongoose');
var SchemaMongo = mongoose.Schema;

//Realitzem el esquema de mongoose i la interficie

const schemaPacient = new Schema({
    name: String,
    surname: String,
    birthDate: Date,
    vaccineDate: Date,
    vaccineApplied: {type: String, enum: ["ASTRAZENECA", "PFIZER","MODERNA", "JANSSEN", "SPUTNIK", "ALTRES"], required:true},
    profession: String,

});

interface IPacient extends Document {
    name: string,
    surname: string,
    birthDate: Date,
    vaccineDate: Date,
    vaccineApplied: string,
    profession: string,

};

export default model<IPacient>('Pacient',schemaPacient);
