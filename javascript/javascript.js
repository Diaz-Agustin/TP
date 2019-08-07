(function(){

	var lista = document.getElementById("lista"),
		ingresarTarea = document.getElementById("ingresar tarea"),
		botonNuevaTarea = document.getElementById("botonaso");
	var agregarTarea = function(){
		var tarea = ingresarTarea.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			ingresarTarea.setAttribute("placeholder", "Agrega una tarea valida");
			ingresarTarea.className = "error";
			return false;
		}

		enlace.appendChild(contenido);
		enlace.setAttribute("href", "#");
		nuevaTarea.appendChild(enlace);
		lista.appendChild(nuevaTarea);

		ingresarTarea.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};
	var comprobarInput = function(){
		ingresarTarea.className = "";
		ingresarTarea.setAttribute("placeholder", "Agrega tu tarea");
	};

	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};
	botonNuevaTarea.addEventListener("click", agregarTarea);
	ingresarTarea.addEventListener("click", comprobarInput);


	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
}());
