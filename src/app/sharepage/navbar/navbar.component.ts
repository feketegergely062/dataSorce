import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  lang:string ='';

  currentUser:any
  SAdmin=false

ngOnInit(): void {
  

  this.lang = localStorage.getItem('lang') ||'hu';
}

  constructor(private auth:AuthService, private router:Router,private translateService:TranslateService,private spinner:NgxSpinnerService){
    this.auth.getCurrentUser().subscribe(
      (user)=>this.currentUser=user
    )
    this.auth.SadminSub.subscribe(
      (res)=> this.SAdmin=res
    )
  }

  logout(){
    this.auth.logout()
    this.router.navigate([''])
  }
  ChangeLanguage(lang:any){
    const selectedLanguage = lang.target.value;

    localStorage.setItem('lang',selectedLanguage);

    this.translateService.use(selectedLanguage);
  }
  openSpinner(){
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    }, 3500)
  }
}
