import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { UrlRaccourcieService } from './../service/generer-url-raccourcie.service';
import { Observable } from 'rxjs';
import { UrlPersonalise } from './url.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ushort-home-component',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
   
   url : UrlPersonalise = {};
   path : string;
   urlRaccourcie : string;
   urlNouvelle : string;
   
   urlOriginal : string;
   urlCleGenere : string;

  constructor(private urlservice : UrlRaccourcieService,
              private router : Router) { }

  ngOnInit() {
    this.path = window.location.href;
   
  }

 
  obtenirUrlRaccourcie(urlOriginal : string) {
    let request : UrlPersonalise = {};
    request.urlOriginale = urlOriginal;

    this.urlservice.obtenirUrlRaccourcie(request).subscribe (
      res=> {
        console.log(res)
        if (res.status===200) {
          this.url= res.body;
          this.urlRaccourcie = this.path + this.url.cleUrl
        } 
      },
      err=> {
        console.log(err)
        if (err.status===500){

        }
      });
  
    }

    obtenirUrlOriginal(url : string) {

      let request : UrlPersonalise = {};
      
      if(url!== undefined && this.urlOriginal !== null && url !== "") {

         request.cleUrl = url.substring(this.path.length);
  
         this.urlservice.obtenirUrlOriginal(request).subscribe (
         res=> {
            console.log(res)
            if (res.status===200) {
              this.url= res.body;
              this.urlOriginal = this.url.urlOriginale;    
              if (this.urlOriginal === undefined || this.urlOriginal === null || this.urlOriginal ===""){
                this.urlOriginal="Ce n'est pas possible de trouver l'url";
              }        
            } 
          },
          err=> {
            console.log(err);
            if (err.status===500){
  
            }
          });
        }
      }

     nettoyerReponseUrlComplet() {
      this.urlOriginal="";
     } 

}
