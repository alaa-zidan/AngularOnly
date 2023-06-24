import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{EmployeeService} from 'src/app/Servises/employee.service'

@Component({
  selector: 'app-employees-detalis',
  templateUrl: './employees-detalis.component.html',
  styleUrls: ['./employees-detalis.component.css']
})
export class EmployeesDetalisComponent implements OnInit  {
  empid: any;
  employe:any;
  constructor(private employeesrvice:EmployeeService,private activatedRoute: ActivatedRoute, private router: Router){
   this.empid=this.activatedRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.employeesrvice.getById(this.empid).subscribe({
      next:(response)=>{this.employe=response},
      error:(error)=>{error}
    })
  }
  backToHome() {
    this.router.navigate(['/employees']);
  }
}
