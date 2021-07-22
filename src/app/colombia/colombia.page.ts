import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colombia',
  templateUrl: './colombia.page.html',
  styleUrls: ['./colombia.page.scss'],
})
export class ColombiaPage implements OnInit {

 
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
