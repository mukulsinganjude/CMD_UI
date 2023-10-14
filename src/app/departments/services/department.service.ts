import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
url = "http://localhost:3000/department";
  constructor(private http:HttpClient) { }
  departmentget(){
    return this.http.get(this.url)
  }
  departmenpost(data:any){
    return this.http.post(this.url, data)
  }
  departmendelete(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
}
