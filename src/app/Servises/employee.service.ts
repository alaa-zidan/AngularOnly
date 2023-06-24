import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl:string='http://localhost:3005/employee';
  constructor(private Http:HttpClient) {
  }
  getAllEmployees(){
  return this.Http.get(this.baseUrl);
  }

  getById(id:any){
    return this.Http.get(`${this.baseUrl}/${id}`);
  }
  addEmployee(employee:any){
    return this.Http.post(this.baseUrl,employee);
  }
  deleteEmployee(id:any){
    return this.Http.delete(`${this.baseUrl}/${id}`);
  }
  editEmployee(employee:any ,id:any){
    return this.Http.put(`${this.baseUrl}/${id}`,employee);
  }
}
