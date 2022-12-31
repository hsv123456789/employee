import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee(0, '', '', '');
  constructor(
    private employeeService: EmployeeService,
    private route: Router
  ) {}
  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe((data) => {
      console.log(data);
    });
  }
  routeToView() {
    this.route.navigate(['/employees']);
  }
  onSubmit() {
    this.saveEmployee();
  }
}
