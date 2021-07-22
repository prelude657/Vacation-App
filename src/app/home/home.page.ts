import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router) {}

  Homepage() {
    this.route.navigate(['/home']);
  }
  Greecepage() {
    this.route.navigate(['/greece']);
  }
  
  Colombiapage() {
    this.route.navigate(['/colombia']);
  }
  Hawaiipage() {
    this.route.navigate(['/hawaii']);
  }

}
