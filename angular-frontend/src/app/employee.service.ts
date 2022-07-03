import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private baseURL = "http://localhost:8080/employees"; // 2. here we have created propert called private baseUrl

  constructor(private httpClient: HttpClient) { } //1.(here inside const.. private httpClient: HttpClient is injected)
  getEmployeesList(): Observable<Employee[]>{               //3. get method is applied.
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);  //4. here return is applied.
    
  }
  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }
}
