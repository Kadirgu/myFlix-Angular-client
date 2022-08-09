import { Component, OnInit, Input } from '@angular/core';

//closing dialog on success
import { MatDialogRef } from '@angular/material/dialog';
//connecting to our API
import { FetchApiDataService } from '../fetch-api-data.service';
//display notif.back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  /**
   * sending form inputs for user registration to backend via fetchApiData Service
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
      // Logic for successfull registration!
      this.dialogRef.close(); // Close the modal on success
      console.log(Response);
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    }, (result) => {
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
  }
}