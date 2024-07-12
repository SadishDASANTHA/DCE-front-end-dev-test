import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-deleteuser',
  standalone: true,
  imports: [MatGridListModule,MatListModule,HttpClientModule,
    CommonModule,RouterLink,MatPaginatorModule],
  templateUrl: './deleteuser.component.html',
  styleUrl: './deleteuser.component.css',
  providers: [HttpClient]
})
export class DeleteuserComponent implements OnInit{


  constructor(private http: HttpClient,private _snackBar: MatSnackBar){ }

  ngOnInit(): void {
    
    this.http.delete('https://reqres.in/api/users/2').subscribe(data => {
        this._snackBar.open('Delete user successfully');
        
  }, err => { 
    this._snackBar.open('Delete user failed');
  })
  }
    
}

