import { UrlPersonalise } from './../home/url.model';
import { UrlRaccourcieService } from './../service/generer-url-raccourcie.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ushort-url',
  templateUrl: './url.component.html'
})
export class UrlComponent implements OnInit {
  
  url : UrlPersonalise = {};
  cle : string;

  constructor(private urlservice : UrlRaccourcieService,
    private route: ActivatedRoute) { 
      
      this.route.params.subscribe(res => this.cle=res.cle);
    }

  ngOnInit() {
    this.obtenirUrlOriginal(this.cle);
  }

  obtenirUrlOriginal(cleUrl : string) {
    let request : UrlPersonalise = {};
  
    request.cleUrl = cleUrl;

    this.urlservice.obtenirUrlOriginal(request).subscribe (
      res=> {
        console.log(res)
        if (res.status===200) {
          this.url= res.body;
          console.log(this.url.urlOriginale)
          window.location.href = this.url.urlOriginale;
        } 
      },
      err=> {
        console.log(err)
        console.log(err);
        if (err.status===500){

        }
      });
    }
}
