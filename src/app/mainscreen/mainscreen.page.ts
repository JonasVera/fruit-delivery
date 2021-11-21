import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.page.html',
  styleUrls: ['./mainscreen.page.scss'],
})
export class MainscreenPage implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  loginPage() {
    this.route.navigate(['login']);
  }
}
