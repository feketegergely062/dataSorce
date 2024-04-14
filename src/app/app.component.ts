import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mhei2';
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('hu');
    this.translateService.use(localStorage.getItem('lang')||'hu')
  }

  
}
