function projectsCreation(data) {
  let name = data[0];
  let numberOfProjects = Number(data[1]);
  let neededHours = numberOfProjects * 3;
  let result = `The architect ${name} will need ${neededHours} hours to complete ${numberOfProjects} project/s.`;
  console.log(result);
}; 
