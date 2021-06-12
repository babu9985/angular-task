import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeeDetails : any;

  constructor(private hservice : HomeService) { }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }

  getEmployeeDetails(){
    this.hservice.employeeDetails().subscribe(data=>{
      this.employeeDetails = data;
    });
  }

}
