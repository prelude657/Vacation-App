import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greece',
  templateUrl: './greece.page.html',
  styleUrls: ['./greece.page.scss'],
})
export class GreecePage implements OnInit {

  constructor(private route: Router) {}

  Homepage() {
    this.route.navigate(['/home']);
  }
  Greecepage() {
    this.route.navigate(['/greece']);
  }


  ngOnInit() {
  }

}
