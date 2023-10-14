import { Component, OnInit } from '@angular/core';
import { AddPetsService } from '../../services/add-pets.service';
@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  patDate : any;
  constructor(private patData:AddPetsService) { 
    this.patData.getData().subscribe((data) =>{
      console.warn("date",data);
      this.patDate = data;
    })
  }

  ngOnInit(): void {
  }
  list:boolean=true;
  card:boolean=false;

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }
}
