import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomValidator } from 'src/app/Validators/custom.validator';
import { Security } from 'src/app/utils/security.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {
  
  public form: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private serice: DataService, 
    private fb: FormBuilder
    ) {
        this.form = this.fb.group({
          username: ['', Validators.compose([
            Validators.minLength(14),
            Validators.maxLength(14),
            Validators.required,
            CustomValidator.isCpf()
          ])],
          password: ['', Validators.compose([
            Validators.minLength(6),
            Validators.maxLength(20),
            Validators.required
          ])]
        })
      }

  ngOnInit() {
    const token = Security.getToken();
    if(token){
      console.log('Autenticando');
      this.busy = true;
      this.serice
      .refreshToken()
      .subscribe((data: any) =>{
        console.log(data);
        this.busy = false;
        this.setUser(data.customer, data.token);        
      },
      (err) => {
        console.log(err);
        this.busy = false;
        Security.clear();
      })
    }
  }

  submit(){
    this.busy = true;
    this.serice
    .authenticate(this.form.value)
    .subscribe((data: any) =>{
      console.log(data);
      this.setUser(data.customer, data.token);
      this.busy = false;
    },
    (err) => {
      console.log(err);
      this.busy = false;
    })
  }

  setUser(User, token){
    Security.set(User, token);
    this.router.navigate(['/']);
  }

}
