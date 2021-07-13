const employees = [
  { id: 1, name: 'moe'},
  { id: 2, name: 'larry', managerId: 1},
  { id: 4, name: 'shep', managerId: 2},
  { id: 3, name: 'curly', managerId: 1},
  { id: 5, name: 'groucho', managerId: 3},
  { id: 6, name: 'harpo', managerId: 5},
  { id: 8, name: 'shep Jr.', managerId: 4},
  { id: 99, name: 'lucy', managerId: 1}
];

const findEmployeeByName = (string, array) => {
  let result = array.filter(element => element.name === string);
  return result[0];  
}

const findManagerFor = (func, array) => {
  let managerId = func['managerId'];
  let manager = array.filter(element => element.id === managerId);
  return manager[0];
}

const findCoworkersFor = (func, array) => {
  let managerId = func['managerId'];
  let coworkers = array.filter(element => element.managerId === managerId && element.name !== func.name);
  return coworkers;
}


console.log(findCoworkersFor(findEmployeeByName('larry', employees), employees));