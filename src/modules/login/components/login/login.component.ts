import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginFields } from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm: FormGroup;
loginFields: LoginFields

  constructor() { }

  ngOnInit() {
    this.loginFields = {
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    }
    this.loginForm = new FormGroup({username: this.loginFields.username, password: this.loginFields.password})
  }

}
