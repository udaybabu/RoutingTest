import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.scss']
})
export class MyLibraryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  viewProfile() {
    this.router.navigate(['profile', 'Uday', 'one']);
  }

}
