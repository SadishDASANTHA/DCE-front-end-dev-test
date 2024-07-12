import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import { MatCard } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import { CommonModule } from '@angular/common';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-edituser',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule,MatFormFieldModule,
    MatInputModule,MatIconModule,MatCard,MatButton,MatCardModule,
    CommonModule,MatSnackBarModule
  ],
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.css',
  providers: [HttpClient]
})
export class EdituserComponent implements OnInit{

  listUsers!: any;
  UserDetails : any;
  editUserForm: FormGroup = new FormGroup({});
  dataloaded : boolean = false;  // will be used to wait until data is loaded to form

  constructor(private http: HttpClient, 
    private formBuilder:FormBuilder,
    private _snackBar: MatSnackBar){ }

  ngOnInit(): void {
    this.dataloaded = false;
    //get the user details
    this.http.get('https://reqres.in/api/users/2').toPromise()
    .then(data => {this.UserDetails  = data;
      console.log(this.UserDetails);
    
    //edit form
    this.editUserForm = this.formBuilder.group({
      'email': new FormControl(this.UserDetails.data.email),
      'first_name': new FormControl(this.UserDetails.data.first_name),
      'last_name': new FormControl(this.UserDetails.data.last_name),
      'avatar': new FormControl(this.UserDetails.data.avatar),
    })
    this.dataloaded = true;
  })
  .catch(err => {
    console.log(err);
  })
}
  updateUser() {
      console.log(this.editUserForm.value)
      this.http.put('https://reqres.in/api/users/2',this.editUserForm.value).
        subscribe(data => {
          this._snackBar.open("User updated successfully");
          console.log("user created")},
        err => {this._snackBar.open("Unable to update user");
          console.log(err);}
        )

  }
}
