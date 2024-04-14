import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient  } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { KezdolapComponent } from './pages/kezdolap/kezdolap.component';
import { FooldalComponent } from './pages/fooldal/fooldal.component';
import { JegyComponent } from './pages/jegy/jegy.component';
import { KapcsolatComponent } from './pages/kapcsolat/kapcsolat.component';
import { KornyezetvedelemComponent } from './pages/kornyezetvedelem/kornyezetvedelem.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserListComponent } from './pages/user-list/user-list.component';

import { TicketComponent } from './additional-pages/ticket/ticket.component';
import { FishingShopComponent } from './additional-pages/fishing-shop/fishing-shop.component';
import { FishComponent } from './additional-pages/fish/fish.component';
import { AdditionalComponent } from './additional-pages/additional/additional.component';
import { EventsComponent } from './additional-pages/events/events.component';
import { VersenyekComponent } from './additional-pages/versenyek/versenyek.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { ErrorComponent } from './pages/error/error.component';




export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    KezdolapComponent,
    JegyComponent,
    KapcsolatComponent,
    KornyezetvedelemComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserListComponent,
    TicketComponent,
    FishingShopComponent,
    FishComponent,
    AdditionalComponent,
    EventsComponent,
    VersenyekComponent,
    FooldalComponent,
    ErrorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
