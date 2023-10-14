import { Component, OnInit } from '@angular/core';
import { AllAppointmentsService } from '../../services/all-appointments.service';
@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {
  allappodata :any;
  constructor(private allAppoData:AllAppointmentsService) {
    this.allAppoData.getData().subscribe((data) =>{
      console.warn("data",data);
      this.allappodata = data;
    })
   }

  ngOnInit(): void {
  }


  list:boolean=false;
  card:boolean=true;

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }

}
