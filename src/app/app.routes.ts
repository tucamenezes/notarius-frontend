import { UrlComponent } from './url/url.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {path : '', component : HomeComponent},
    {path : ':cle', component : UrlComponent},
    {path : 'url', component : UrlComponent},  
    {path : 'url/:cle', component : UrlComponent}
 ]