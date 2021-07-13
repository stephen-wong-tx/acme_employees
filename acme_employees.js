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


// console.log(findCoworkersFor(findEmployeeByName('larry', employees), employees));


//given an employee and a list of employees, return a the management chain for that employee. The management chain starts from the employee with no manager with the passed in employees manager 
// console.log(findManagementChainForEmployee(findEmployeeByName('moe', employees), employees));//[  ]

// console.log(findManagementChainForEmployee(findEmployeeByName('shep Jr.', employees), employees));/*
// [ { id: 1, name: 'moe' },
//   { id: 2, name: 'larry', managerId: 1 },
//   { id: 4, name: 'shep', managerId: 2 }]

const findManagementChainForEmployee = (func, array) => {
  console.log('func: ', func);

  let result = [];

  if (func['managerId'] === undefined) return func;
  let manager = findManagerFor(func, array);

  result.push({...manager});
  console.log('result', result);
  return result.push(findManagementChainForEmployee(manager, array));
}
console.log('final result: ', findManagementChainForEmployee(findEmployeeByName('shep Jr.', employees), employees))
// const findManagementChainForEmployee = (func, array) => {
//   let result = [];
//   let manager = findManagerFor(func, array);
//   if (manager === undefined) {
//     return result;
//   }
//   else {
//     result.push({...manager});
//     let chain = array.reduce((chain, employee) => {
//       let pointer = result[0];
//       if (employee === pointer) {
//         chain.unshift(findManagerFor(pointer, array));
//       }
//       return chain;  
//     }, result)
//   }
// }