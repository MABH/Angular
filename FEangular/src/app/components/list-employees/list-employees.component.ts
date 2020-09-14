import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
listEmployees: Employee[];
loading = false;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {    
    this.loadEmployee();
  }

  loadEmployee() {
    this.loading=true;
    this.employeeService.getListEmployee().subscribe(data=> {
      this.loading=false;
      this.listEmployees = data;
    })
  }

  delete(id: number){
    this.loading = true;
    this.employeeService.deleteEmployee(id).subscribe(data => {
      this.loadEmployee();
      this.loading = false;
    })
  }
}


