import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditEmployeeComponent } from './components/add-edit-employee/add-edit-employee.component';
import { ShowEmployeeComponent } from './components/show-employee/show-employee.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';


const routes: Routes = [
  { path: 'add', component: AddEditEmployeeComponent },
  { path: 'edit/:id', component: AddEditEmployeeComponent },
  { path: 'show/:id', component: ShowEmployeeComponent },
  { path: '', component: ListEmployeesComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
