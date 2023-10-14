import { Component, OnInit } from '@angular/core';
import { AddVetService } from '../../services/add-vet.service';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  docData: any;
  name:any;
  constructor(private addoc: AddVetService) {
    this.addoc.doctorget().subscribe((data) => {
      console.warn("date", data);
      this.docData = data;
    })
  }

  ngOnInit(): void {
  }

  list: boolean = false;
  card: boolean = true;

  lists() {
    this.list = !this.list;
    this.card = !this.card;
  }
  cards() {
    this.card = !this.card;
    this.list = !this.list;
  }

}
