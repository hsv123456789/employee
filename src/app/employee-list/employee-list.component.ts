import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  employees: Employee[] = [];
  constructor(
    private employeeService: EmployeeService,
    private route: Router,
    private employeeservice: EmployeeService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }
  updateEmployee(id: number) {
    this.route.navigate(['update-employee', id]);
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      console.log(data);
      this.getEmployees();
    });
  }
  employeeDetails(id: number) {
    this.route.navigate(['employee-details', id]);
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employees = data;
    });
  }
}
