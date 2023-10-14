import { Injectable } from '@angular/core';
import { AppointmentRepositoryService } from '../repository/appointment-repository.service';
import { HttpClient } from '@angular/common/http';
//There will one service per component. But other components can also use the
//service allocated for another component via there distributers
//This layer interacts with the repository layer and has business logic
@Injectable({
  providedIn: 'root'
})
export class AddAppiontmentService {

  // Inject Repository in the constructor
  constructor(private http: HttpClient) { }
  
   departmentget(){
    return this.http.get('http://localhost:3000/department')
   }
  // call the repository to get,post and put the data
  appointmentget(){
    return this.http.get('http://localhost:3000/appointments')
  }
  appointmentpost(data:any){
    return this.http.post('http://localhost:3000/appointments', data)
  }
  appointmentdelete(id:number){
    return this.http.delete(`http://localhost:3000/appointments${id}`)
  }

}
