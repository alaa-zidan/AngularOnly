import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from  './Component/home/home.component';
import{AddFormComponent} from  './Component/add-form/add-form.component';
import{EmployeesDetalisComponent} from  './Component/employees-detalis/employees-detalis.component';
import{EmployeesComponent} from  './Component/employees/employees.component';
import{LoginComponent} from  './Component/login/login.component';
import{NotFoundComponent} from  './Component/not-found/not-found.component';



const routes: Routes = [
  {path:'home' ,component:HomeComponent},
  {path:'employees' ,component:EmployeesComponent},
  {path:'employees/:id' ,component:EmployeesDetalisComponent},
  {path:'employees/:id/Edit' ,component:AddFormComponent},
  {path:'login' ,component:LoginComponent},
  {path:'**' ,component:NotFoundComponent},
  {path:'not-found' ,component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
