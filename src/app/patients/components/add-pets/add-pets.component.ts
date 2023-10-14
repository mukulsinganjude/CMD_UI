import { Component, OnInit } from '@angular/core';
import { AddPetsService } from '../../services/add-pets.service';
@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent implements OnInit {

  constructor(private addpet:AddPetsService) { }

  ngOnInit(): void {
  }
  addPatientData(data:any){
this.addpet.postData(data).subscribe((result) =>{
  console.warn(result);
})
  }

}
