import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../model/department.model';

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
    this.http.get<Department[]>('http://localhost:8000/docker/department').subscribe((response) => {
      this.departments=response;
    })
  }

}
