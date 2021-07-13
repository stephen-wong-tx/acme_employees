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

const findManagementChainForEmployee = (func, array) => {
  let result = [];
  let manager = findManagerFor(func, array);
  while (manager !== undefined) {
    let nextManager = manager.name;
    result.unshift(manager);
    manager = findManagerFor(findEmployeeByName(nextManager, array), array);
  }
  return result;
}

const generateManagementTree = (array) => {
  let topBoss = array.filter(employeeObj => employeeObj.managerId === undefined)[0];

  function getBranch(currentEmployee) {
    branch = array.filter(employee => employee.managerId === currentEmployee.id);
    currentEmployee.reports = branch;
    if (branch === []) return branch;  
    else branch.forEach(suboordinate => getBranch(suboordinate));   
  }

  getBranch(topBoss);
  console.log('FINAL RESULT: ', topBoss);
  return topBoss;
}

console.log(generateManagementTree(employees));

// const displayManagementTree = tree => {
//   console.log(tree.name);
//   let flatTree = tree.reports.flat();
  
//   function dashCounts(branch) {
//     let dashCounts = 1;
//     if (branch.reports.length === 0) {
//       return dashCounts;
//     }
//     else {
//       dashCounts += 1; 
//       return dashCounts += dashCounts(branch);
//     }
//   }

//   flatTree.forEach(employee => {
//     console.log(`${dashCounts(employee)}${employee.name}`)
//   })
// }
// console.log(displayManagementTree(generateManagementTree(employees)));
