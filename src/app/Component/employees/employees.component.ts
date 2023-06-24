import { Component,OnInit ,OnChanges, SimpleChanges} from '@angular/core';
import {EmployeeService} from 'src/app/Servises/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent  implements OnInit ,OnChanges {
emplist:any;
empid:any;
constructor(private employeesrevice:EmployeeService
           ,private activatedRoute: ActivatedRoute,
            private router: Router){
             this.empid= this.activatedRoute.snapshot.paramMap.get('id');
             console.log(this.empid)
            }
  ngOnChanges(changes: SimpleChanges): void {

  }

ngOnInit(): void {
  this.employeesrevice.getAllEmployees().subscribe({
    next:(response)=>{this.emplist=response},
    error:(error)=>{console.log(error)},


  });
}
// // emplist:Iproduct[]=productsList;
remove(id:any){
 // this. emplist = this. emplist.filter((item, index) => index != i);
 this.employeesrevice.deleteEmployee(id).subscribe({
  next:()=>{
    this. emplist = this. emplist.filter((item:any) => item.id !=id)
  }
})}
}
