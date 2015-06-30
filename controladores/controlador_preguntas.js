// GET /preguntas/pregunta
exports.pregunta= function(req,res){
	res.render("preguntas/pregunta", {pregunta: "Capital de Italia"});
};

// GET /preguntas/respuesta
exports.respuesta=function(req,res){
	if(req.query.respuesta === "Roma"){
		res.render("preguntas/respuesta", {respuesta: "Correcto"});
	}else{
		res.render("preguntas/respuesta", {respuesta: "Inorrecto"});
	}
};
