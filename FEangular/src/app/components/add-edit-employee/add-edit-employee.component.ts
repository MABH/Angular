import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {
  employees: FormGroup;
  idEmployee = 0;
  accion = 'Add';
  loading = false;
  employee:Employee;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private employeeService: EmployeeService, private router: Router) {
    this.employees = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      position: ['', Validators.required],
      salary: ['', Validators.required]
    });
    if (+this.route.snapshot.paramMap.get('id') > 0) {
      this.idEmployee = +this.route.snapshot.paramMap.get('id');
    }
   }

  ngOnInit(): void {
    this.esEdit();
  }
  saveEmployee(){
    if(this.accion==='Add'){
      const employee: Employee = {
        surname: this.employees.get('surname').value,
        name: this.employees.get('name').value,
        position: this.employees.get('position').value,
        salary: this.employees.get('salary').value
      };
      this.employeeService.saveEmployee(employee).subscribe(data=>{
        this.router.navigate(['/']);
      });
    }else{
      const employee: Employee = {
        id: this.employee.id,
        surname: this.employees.get('surname').value,
        name: this.employees.get('name').value,
        position: this.employees.get('position').value,
        salary: this.employees.get('salary').value
      };
      this.employeeService.updateEmployee(this.idEmployee, employee).subscribe(data=>{
        this.router.navigate(['/']);
      })
    }
    console.log(this.employees);
  }  

  esEdit(){
    if (this.idEmployee > 0) {
      this.accion = 'Edit';
      this.employeeService.loadEmployee(this.idEmployee).subscribe(data=>{
        this.employee = data;
        this.employees.patchValue({
          name: data.name,
          surname: data.surname,
          position: data.position,
          salary: data.salary

        })
      })
      
    }
  }
}
