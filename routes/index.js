var express = require('express');
var router = express.Router();

var controladorPreguntas=require("../controladores/controlador_preguntas");
var controladorAutores=require("../controladores/controlador_autores");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titulo: 'Preguntas' });
});


router.get("/preguntas/pregunta", controladorPreguntas.pregunta);
router.get("/preguntas/respuesta", controladorPreguntas.respuesta);

router.get("/autores", controladorAutores.autores);


module.exports = router;
