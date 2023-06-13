const {Router}=require('express');
const moviesController=require('../controllers/movies.controller');

const router=Router();
router.get('/',moviesController.obtenerMovies); 
router.get('/:cb',moviesController.obtenerMovie);
router.post('/insertar',moviesController.insertarMovie);
router.put('/actualizar/:cb',moviesController.actualizarMovie);
router.delete('/eliminar/:cb',moviesController.eliminarMovie);
module.exports=router; 