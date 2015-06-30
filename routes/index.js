var express = require('express');
var router = express.Router();

var controladorPreguntas=require("../controladores/controlador_preguntas");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titulo: 'Preguntas' });
});


router.get("/preguntas/pregunta", controladorPreguntas.pregunta);
router.get("/preguntas/respuesta", controladorPreguntas.respuesta);

module.exports = router;
