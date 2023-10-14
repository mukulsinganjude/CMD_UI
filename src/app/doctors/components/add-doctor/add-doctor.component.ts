import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AddVetService } from '../../services/add-vet.service';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  docData:any;
  error = new Subject<string>();
  departname:any;
  constructor(private addocs: AddVetService) {
    this.addocs.departmentget().subscribe((department) =>{
      console.warn(department);
      this.departname = department;
   })
  }
  getDoctorsData(data: any) {

    this.addocs.doctorpost(data).subscribe((result) => {
      console.warn(result);
      this.docData = result;
    },err => {
      this.error.next(err.message);
    })
  }
  ngOnInit(): void {
  }

}
