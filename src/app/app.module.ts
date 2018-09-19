
import { UrlRaccourcieService } from './service/generer-url-raccourcie.service';
import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UrlComponent } from './url/url.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UrlComponent,
    HomeComponent
  ],
  exports: [ RouterModule ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UrlRaccourcieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
