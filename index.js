// Write your solution in this file!


const employee = {
  name: "Bill",
  streetAddress: "333 West Trade St"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newObj = { ...obj };

  newObj[key] = value;

  return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  
  return obj;
}

function deleteFromEmployeeByKey(employee, key) {
  const newObj = { ...employee };
  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  
  return employee;
}




  // function updateEmployeeWithKeyAndValue(obj, key, value) {
  //   const newObj = { ...obj };
  
  //   newObj[key] = value;
  
  //   return newObj;
  // }
  
  // const newEmployee = updateEmployeeWithKeyAndValue(newEmployee, "Sam", "11 Broadway");






























// const employee = {
//     name: "Will",
//     streetAddress: "Wills address",
// };

// function updateEmployeeWithKeyAndValue(obj, key, value) {
//     const newObj = { ...obj };
  
//     newObj[key] = value;
  
//     return newObj;
//   }
  
//   const newEmployee = updateEmployeeWithKeyAndValue(newEmployee, "Sam", "11 Broadway");

//   function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     const newObj = { ...obj };
//     newObj[key] = value;

//   return newObj;
//   }

//   const updatedEmployee = nondestructivelyUpdateObject(
//     tuesdayMenu,
//     "fries",
//     "Shoestring"
//   );
  

  


