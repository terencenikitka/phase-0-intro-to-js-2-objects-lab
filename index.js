// Write your solution in this file!
let employee = {
    name:'et1',
    streetAddress:'et2'
}
function  updateEmployeeWithKeyAndValue(employee, key, value){
    let result = {...employee}
    result[key]=value
    return result
}
function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee
}
function  deleteFromEmployeeByKey(employee, key){
    let result = {...employee}
    delete result[key]
    return result
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}