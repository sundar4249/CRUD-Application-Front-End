import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();          //applied get method
    // this.employees = [{
    //   "id": 1,               
    //   "firstName": "Ashish",               // dommy data
    //   "lastName": "Chaudhary",                     
    //   "emailId": "ashish@gmail.com",
    // },
    // {
    //   "id": 2,
    //   "firstName": "Arun",
    //   "lastName": "Pandey",
    //   "emailId": "arun@gmail.com"
    // },
    // {
    //   "id": 3,
    //   "firstName": "Uttam",
    //   "lastName": "Chaudhary",
    //   "emailId": "uttam.chaudhary@gmail.com"
    // }]
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data =>{
      this.employees = data
    });
  }


}
