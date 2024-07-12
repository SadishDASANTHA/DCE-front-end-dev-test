import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-listuser',
  standalone: true,
  imports: [MatGridListModule,MatListModule,HttpClientModule,
    CommonModule,RouterLink,MatPaginatorModule],
  templateUrl: './listuser.component.html',
  styleUrl: './listuser.component.css',
  providers: [HttpClient]
})
export class ListuserComponent implements OnInit {

  listUsers!: any;

  constructor(private http: HttpClient){ }

  ngOnInit(): void {
      this.http.get('https://reqres.in/api/users?page=2').subscribe
      (data=>{this.listUsers = data;
        console.log(data);})
  }
}
