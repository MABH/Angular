import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
loading = false;
employee: Employee;
idEmployee: number;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {
    this.idEmployee = +this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.loadEmployee();
  }

  loadEmployee(){
    this.loading = true;
    this.employeeService.loadEmployee(this.idEmployee).subscribe(data=> {
      this.loading = false;
      this.employee= data;
    })
  }
}
