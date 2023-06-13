const {Schema,model}=require('mongoose');
const moviesSchema=new Schema({
    codigobarras:{
        type:String,
        unique:true,
        require:true
    },
titulo:String,
director: String,
año:Number,
genero:String,
descripcion:String,
},{
versionKey:false,
timestamps:true
});
module.exports=model('moviessssssss',moviesSchema);
