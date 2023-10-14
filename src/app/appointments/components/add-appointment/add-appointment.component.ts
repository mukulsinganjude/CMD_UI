import { Component, OnInit } from '@angular/core';
import { AddAppiontmentService } from '../../services/add-appiontment.service';
@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

    // Variable declaration and initialization
    departname:any;
  // Dependency Injection inside constructor

  constructor(private addappoi:AddAppiontmentService) { 
    this.addappoi.departmentget().subscribe((department) =>{
       console.warn(department);
       this.departname = department;
    })
  }
  getAppointmentData(data:any){
    this.addappoi.appointmentpost(data).subscribe((add) =>{
      console.warn(add);
    })
  }

  ngOnInit(): void {

    // Fetch / Load data


    // Validation Logic
  }



  // Logic for the submit
  onSubmit() {

  }
}
