import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {

  constructor( private depart:DepartmentService ) { }

  ngOnInit(): void {
  }
  addDepartments(data:any){
this.depart.departmenpost(data).subscribe((result) =>{
    console.log(result);
  })
  }
}
