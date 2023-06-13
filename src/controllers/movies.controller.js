const Movie=require('../models/movie.model');
const moviesController={};

moviesController.obtenerMovies=async(req,res)=>{
    const movies = await Movie.find();
    res.json(movies);
};


moviesController.obtenerMovie=async(req,res)=>{
    const movie=await Movie.findOne({codigobarras:req.params.cb});

    if (movie!=null)
        res.json(movie);
    else
        res.json({status:"Not Found"});    
};


moviesController.insertarMovie=async(req,res)=>{
    const movieInsertada=new Movie(req.body);
    await movieInsertada.save();
    if (movieInsertada != null){
        res.json({status:"movie insertada"})
    }
}
moviesController.actualizarMovie=async(req,res)=>{
    const updaetmovie = await Movie.findOneAndUpdate({codigobarras:req.params.cb},req.body);
    if(updaetmovie!=null)
        res.json({status:"Movie actualizada"});
    else
        res.json({status:"Not Found"});
};

moviesController.eliminarMovie=async(req,res)=>{
    const deletmocivie = await Movie.findOneAndDelete({codigobarras:req.params.cb});
    if(deletmocivie!=null)
        res.json({status:"Movie Eliminada"});
    else
        res.json({status:"Not Found"});
};


module.exports=moviesController;
