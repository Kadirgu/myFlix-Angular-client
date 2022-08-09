import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * navigates to movies (main) page
   */
  goToMovies(): void {
    this.router.navigate(['movies']);
  }

  /**
   * navigates to user profile
   */
  goToProfile(): void {
    this.router.navigate(['profile']);
  }

  /**
   * logs out users, clears local storage to reset token and user
   */
  logOut(): void {
    localStorage.clear();
    this.router.navigate(['welcome']);
  }


}