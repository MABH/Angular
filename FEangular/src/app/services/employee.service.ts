import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  myAppUrl ='https://localhost:44388/';
  myApiUrl = 'api/employee/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getListEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.myAppUrl + this.myApiUrl);
  }

  deleteEmployee(id:number): Observable<Employee> {
    return this.http.delete<Employee>(this.myAppUrl + this.myApiUrl + id);
  }

  saveEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.myAppUrl + this.myApiUrl, employee, this.httpOptions);
  }

  loadEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.myAppUrl + this.myApiUrl + id);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.myAppUrl + this.myApiUrl+id, employee, this.httpOptions);
  }
  
}

