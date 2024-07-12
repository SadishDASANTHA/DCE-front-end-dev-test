import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import { MatCard } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'; 

import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,
    MatIconModule,ReactiveFormsModule,MatCard,MatButton,
    MatCardModule,HttpClientModule,MatSnackBarModule,
    ],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css',
  providers: [HttpClient,{provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue:{duration:200}}] 
})
export class AdduserComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({}); 

  constructor(private formBuilder: FormBuilder
    ,private http: HttpClient, 
    private _snackBar: MatSnackBar){}

  ngOnInit(): void {
      this.addUserForm= this.formBuilder.group({
        'name' : new FormControl('',[Validators.required, Validators.minLength(3)]),
        'job' : new FormControl('',[Validators.required, Validators.minLength(3)]),
  })

}
  createUser(){
    console.log(this.addUserForm.value);
    this.http.post('https://reqres.in/api/users', this.addUserForm.value).
    subscribe(data => {
      this._snackBar.open("User created successfully");
      console.log("user created")},
    err => {this._snackBar.open("Unable to create user");
      console.log(err);}

    )
    
  }


}
