
//Connection to mongosb atlas
const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://200931:uriel123@200931-umc.zjgoj.mongodb.net/movies?retryWrites=true&w=majority") // connect to the database
    .then(db => console.log("Mongodb atlas connected")) // log a success message
    .catch(err => console.error(err)); // log any errors

