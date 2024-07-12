
import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table'; 

export interface Users {
  email: string;
  id: number;
  first_name: string
  last_name: string;
  avatar: string;
}

const ELEMENT_DATA: Users[] = [ ];

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [MatGridListModule,MatListModule,HttpClientModule,
    CommonModule,RouterLink,MatPaginatorModule,MatTableModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css',
  providers: [HttpClient]
})
export class ListingComponent implements OnInit{


  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name', 'avatar'];
  //dataSource = ELEMENT_DATA;
  listUsers: Users[] = [];

  constructor(private http: HttpClient){ }

  ngOnInit(): void {
      this.http.get<Users[]>('https://reqres.in/api/users?page=2').subscribe
      (data=>{this.listUsers = data;
        console.log(data);})
  }
}
