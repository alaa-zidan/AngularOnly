import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{EmployeeService} from 'src/app/Servises/employee.service'
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  empid:any;
  employ:any;
  constructor(private employeesrvise:EmployeeService,
    private router:Router ,private activtedrouter:ActivatedRoute){

    }
  ngOnInit(): void {
    this.empid=this.activtedrouter.snapshot.paramMap.get("id");
   if(this.empid!=0){
    this.employeesrvise.getById(this.empid).subscribe({
      next:(response)=>{
        this.employ=response;
        this.getname.setValue(this.employ.name);
        this.getmail.setValue(this.employ.email);
        this.getpass.setValue(this.employ.password);
      },
    })
   }
  }

myform =new FormGroup({
name:new FormControl('',[Validators.required,Validators.minLength(4)]),
email:new FormControl('',[Validators.required]),
password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern("[a-z0-9]+")])
});

get getname(){
  return this.myform.controls["name"];
}
get getmail(){
  return this.myform.controls["email"];
}
get getpass(){
  return this.myform.controls["password"];
}
formHandler(e:any){
  e.preventDefault();
  if(this.myform.status=="VALID"){
    //add
    if(this.empid==0){
   this.employeesrvise.addEmployee(this.myform.value).subscribe({
    next:()=>{
      this.router.navigate(['/employees'])
    }
   })
  }
  //Edit
  else(
     this.employeesrvise.editEmployee(this.myform.value,this.empid).subscribe({
      next:()=>{
        this.router.navigate(['/employees'])
      }
     })
  )
}
  else{
    console.log("error")
  }
}
}
