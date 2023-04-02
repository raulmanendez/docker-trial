import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../model/department.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private http:HttpClient) { }

  departments:Department[]=[];

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments(){
    this.http.get<Department[]>(`${environment.BASE_URL}department`).subscribe((response) => {
      this.departments=response;
    })
  }

}
