const mongoose = require('mongoose');
//crear un objeto Schema
let Schema = mongoose.Schema;
//Definir mi colección
let pintoresSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'ingresar name']
    },
    corriente:{
        type: String,
        required: [true, 'ingresar pass']
        
    
},
nacionalidad:{
    type: String,
},
pintura:{
    type: String 
}
    

});

module.exports = mongoose.model('pintores',pintoresSchema);
dule.exports = mongoose.model('Pintores', PintoresSchema)
