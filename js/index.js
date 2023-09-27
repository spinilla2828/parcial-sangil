const estudiantes = [];

const agregarEstudiantes = (nombre, edad, asignaturas) => {
  const estudiante = {
    nombre,
    edad,
    asignaturas,
  };

  estudiantes.push(estudiante);
};

const buscarEstudiantes = (nombre) => {
  const estudianteEncontrado = estudiantes.find(
    (estudiante) => estudiante.nombre === nombre
  );

  if (estudianteEncontrado) {
    console.log("Información del estudiante:");
    console.log("Nombre:", estudianteEncontrado.nombre);
    console.log("Edad:", estudianteEncontrado.edad);
    console.log("Asignaturas:", estudianteEncontrado.asignaturas.join(", "));
  } else {
    console.log("¡Estudiante no está registrado!");
  }
};

const mostrarEstudiantes = () => {
  if (estudiantes.length === 0) {
    console.log("No hay estudiantes registrados.");
  } else {
    console.log("Todos los estudiantes:");
    estudiantes.forEach((estudiante, index) => {
      console.log("Estudiante", index + 1);
      console.log("Nombre:", estudiante.nombre);
      console.log("Edad:", estudiante.edad);
      console.log("Asignaturas:", estudiante.asignaturas.join(", "));
    });
  }
};

const buscarEstudiantesPorAsignatura = (asignatura) => {
  const estudiantesInscritos = estudiantes.filter((estudiante) =>
    estudiante.asignaturas.includes(asignatura)
  );

  if (estudiantesInscritos.length > 0) {
    console.log("Estudiantes inscritos en", asignatura);
    estudiantesInscritos.forEach((estudiante, index) => {
      console.log("Estudiante", index + 1);
      console.log("Nombre:", estudiante.nombre);
      console.log("Edad:", estudiante.edad);
    });
  } else {
    console.log("Ningún estudiante está inscrito en", asignatura);
  }
};

const programa = () => {
  let option;
  while (option !== "5") {
    console.log("Menú:");
    console.log("1. Agregar estudiante");
    console.log("2. Buscar estudiante por nombre");
    console.log("3. Buscar estudiantes por asignatura");
    console.log("4. Mostrar todos los estudiantes");
    console.log("5. Salir del programa");

    option = prompt("Ingrese el número de la opción que desea realizar:");

    switch (option) {
      case "1":
        const nombre = prompt("Ingrese el nombre del estudiante:");
        const edad = prompt("Ingrese la edad del estudiante:");
        const asignaturas = prompt(
          "Ingrese las asignaturas en las que está inscrito (separadas por coma):"
        ).split(",");
        agregarEstudiantes(nombre, edad, asignaturas);
        break;
      case "2":
        const nombreABuscar = prompt(
          "Ingrese el nombre del estudiante a buscar:"
        );
        buscarEstudiantes(nombreABuscar);
        break;
      case "3":
        const asignaturaABuscar = prompt("Ingrese la asignatura a buscar:");
        buscarEstudiantesPorAsignatura(asignaturaABuscar);
        break;
      case "4":
        mostrarEstudiantes();
        break;
      case "5":
        console.log("Saliendo del programa");
        break;
      default:
        console.log(
          "Opción no válida. Por favor, ingrese un número del 1 al 5."
        );
        break;
    }
  }
};

programa();
