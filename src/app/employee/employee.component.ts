import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees = [];
  public errorMessage;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
      this._employeeService.getEmployees().subscribe(data => this.employees=data,
        error => this.errorMessage = error);
        console.log(this.employees.length)
  }

}
