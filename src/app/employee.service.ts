import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:8080/api/v1/employees';

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}`);
  }
  createEmployee(employee: Employee): Observable<Object> {
    return this.http.post(`${this.url}`, employee);
  }
  getEmployeeByID(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/${id}`);
  }
  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, employee);
  }
  deleteEmployee(id: number): Observable<Object> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
