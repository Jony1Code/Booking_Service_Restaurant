import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface authData {
  username: string;
  email?: string;
  password: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public form!: FormGroup;
  public model: authData = {
    username: '',
    email: '',
    password: '',
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      authType: new FormControl('login'),
    });
  }

  onSubmit(): void {
    console.log(this.model);
  }
}
