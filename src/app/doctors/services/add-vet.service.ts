import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddVetService {
 
  constructor(private http: HttpClient) { }
  departmentget(){
    return this.http.get('http://localhost:3000/department')
   }



  doctorget(){
    return this.http.get('http://localhost:3000/doctors')
  }
  doctorpost(data:any){
    return this.http.post('http://localhost:3000/doctors', data)
  }
  doctordelete(id:number){
    return this.http.delete(`http://localhost:3000/doctors${id}`)
  }

}
