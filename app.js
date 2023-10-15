function generateEducationalPrograms() {
  const programs = [
    "Análisis de sistemas",
    "Asistente terapéutico",
    "Emergencias en Salud",
    "Logística",
    "Gestión ambiental y salud",
    "Industria textil e indumentaria",
    "Turismo",
  ];
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
  console.log(select);
  let option;
  for (let program of programs) {
    option = document.createElement("option");
    option.value = program;
    option.textContent = program;
    select.append(option);
  }
}

generateEducationalPrograms();
