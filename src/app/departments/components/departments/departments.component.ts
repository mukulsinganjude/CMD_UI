import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  delete:any =[];
  constructor(private depa:DepartmentService) { }
    department : any;
  ngOnInit(): void {
    this.depa.departmentget().subscribe((result) => {
      this.department = result;
    })
    }
    deleteData(data:any){
      this.depa.departmendelete(data).subscribe((deleted) => {
        console.log(deleted);
        this.delete = "is deleted";
      })
    }

}
