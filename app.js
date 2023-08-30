const generateEducationalPrograms = () => {
  const programs = ["Análisis de sistemas", "Asistente terapéutico", "Emergencias en Salud", "Gestión ambiental y salud", "Industria textil e indumentaria"];
  // for (const program of [
  //   "Computer Science",
  //   "Data Science",
  //   "Engineering",
  //   "Mathematics",
  //   "Physics"
  // ]) {
  //   programs.push({
  //     name: program,
  //     description: `The study of ${program}.`
  //     
  //   });
  // }
  // return programs;
  const select = document.querySelector("select[name='programa']");
  for (let program of programs) {
    const option = document.createElement("option");
    option.textContent = program;
    select.append(option);
  }
};

generateEducationalPrograms();

