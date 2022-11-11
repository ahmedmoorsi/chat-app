import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: string = '';
  group: string = '';
  error: string = '';

  groups: string[] = ['Angular', 'React', 'Vue'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public register(): void {
    if (!(this.name || this.group) || this.name === '' || this.group === ''
     || this.name === undefined || this.group === undefined) {
      // alert('Please enter a name and group');
      this.error = 'Please enter a name and group';
      return;
    }

    this.error = '';
    console.log(`Name: ${this.name} Group: ${this.group}`);

    this.router.navigate(['/chat']);
  }

}
