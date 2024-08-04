const ButtonClick = document.querySelector('#add_employee');
ButtonClick.addEventListener('click', e=>{
 const name =document.querySelector('#nameField').value;
 const salary =document.querySelector('#salaryField').value;
 const Tax =document.querySelector('#TaxField').value;
 const employeeUI =new EmployeeUI();
 if(name==='' || salary==='' || Tax ==='')
  {
   employeeUI.alertMessage('danger',"PLease enter the form")
  }
  else
  {
    const employee =new Employee(name,salary,Tax);

    //assign random id to employee;
    employee.id=employee.generateId();
    employee.Netsalary =employee.Calculatesalary();
   
    employeeUI.addEmployee(employee);
    storeEmployee.addEmployee(employee);
    employeeUI.alertMessage('success',"employee is added successfully")
    employeeUI.clearField();
  }
});

document.querySelector('tbody').addEventListener('click',e=>{
  const employeeUi =new EmployeeUI();
  const isDeleted = employeeUi.deleteEmployee(e.target);

  storeEmployee.removeEmployee(e.target.parentElement.parentElement.
                               firstElementChild.textContent);
  if(isDeleted)
    {
      employeeUi.alertMessage('success',"deleted successfully")
    }
})

class Employee{
  constructor(Name,salary,Tax){
  this.name =Name;
  this.salary =salary;
  this.Tax =Tax;
  }
  Calculatesalary(){
    this.Netsalary =Math.round(this.salary -((this.Tax /100)* this.salary));
    return this.Netsalary;
  }
  generateId(){
    this.id =Math.floor(Math.random() *100000);
    return this.id;
  }
}

class EmployeeUI{
  addEmployee(Employee){
    const employeeList =document.querySelector('tbody');
    const markup =` <tr>
                  <th scope="row">${Employee.id}</th>
                  <th scope="row">${Employee.name}</th>
                  <th scope="row">$${Employee.salary}</th>
                  <th scope="row">${Employee.Tax}%</th>
                  <th scope="row">$${Employee.Netsalary}</th>
                  <th><a href="#" class="btn btn-danger delete">Delete</a></th>
                </tr>`
          employeeList.insertAdjacentHTML('afterbegin',markup);
  }

  clearField(){
    const name =document.querySelector('#nameField').value='';
    const salary =document.querySelector('#salaryField').value ='';
    const Tax =document.querySelector('#TaxField').value ='';
  }

  alertMessage(typemessage,message){
    const markup=`<div class="alert alert-${typemessage}" role="alert">${message}</div>`;

    const form =document.querySelector('form');
    form.insertAdjacentHTML("beforebegin",markup);
    setTimeout(()=>{
     document.querySelector('.alert').remove();
    },2000)
  }

  deleteEmployee(target){
       if(target.matches('.delete')){
        target.parentElement.parentElement.remove();
        return true;
       }
  }

}

class storeEmployee{
  //static method if we are using then no need to af creationg the new object like New 
  static getEmployee(){
    let employees;
    if(localStorage.getItem('employees') === null){
      employees=[];
    }
    else{
      employees =JSON.parse(localStorage.getItem('employees'));
    }
    return employees;
  }

  static displayEmployee(){
    const employees =storeEmployee.getEmployee();
    const employeeUi =new EmployeeUI();

    employees.forEach(employee => {
      employeeUi.addEmployee(employee);
    });

  }
  static addEmployee(employee)
  {
    const employees = storeEmployee.getEmployee();
    employees.push(employee);
    localStorage.setItem('employees',JSON.stringify(employees));
  }

  static removeEmployee(id){
    const employees = storeEmployee.getEmployee();
    employees.forEach((employee,index)=>{
      if(employee.id === parseInt(id)){
        employees.splice(index,1);
      }
    });
    localStorage.setItem('employees',JSON.stringify(employees));
  }
}

const stoploading = document.querySelector('#employee_form');
stoploading.addEventListener('submit', e=>{
  e.preventDefault();
})

storeEmployee.displayEmployee();