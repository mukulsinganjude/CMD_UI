import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from '../../services/admin-dashboard.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  dashboData : any;
  dashdocname : any;
  constructor(private addDash:AdminDashboardService) {
    this.addDash.getData().subscribe((data) =>{
      console.warn("date",data);
      this.dashboData = data;
    })
    this.addDash.getData2().subscribe((data2) =>{
      console.warn("date",data2);
      this.dashdocname = data2;
    })
   }
 
  ngOnInit(): void {
  }

}
