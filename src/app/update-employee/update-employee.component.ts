import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent {
  employee: Employee = new Employee(0, '', '', '');
  id: number = 0;
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  goToEmployeeList() {
    this.router.navigate(['/employees']).then(() => {
      window.location.reload();
    });
  }
  onSubmit() {
    this.id = this.route.snapshot.params['id'];
    this.employeeService
      .updateEmployee(this.id, this.employee)
      .subscribe((data) => {
        console.log(data);
      });
    this.goToEmployeeList();
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeByID(this.id).subscribe((data) => {
      this.employee = data;
    });
  }
}
