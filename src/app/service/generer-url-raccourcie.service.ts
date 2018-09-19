import { UrlPersonalise } from './../home/url.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UrlRaccourcieService {
   private urlService : string = "http://localhost:8080/v1/urlshortener/";

    constructor (private http : HttpClient) {
    }

    obtenirUrlRaccourcie (url : UrlPersonalise) : Observable <HttpResponse<any>>{
        return this.http
            .post<HttpResponse<any>>(this.urlService + "save", url, {observe: 'response'});

    }

    obtenirUrlOriginal (url : UrlPersonalise) : Observable <HttpResponse<any>>{
        
        return this.http
            .get<HttpResponse<any>>(this.urlService + url.cleUrl, {observe: 'response'});
        
    }



}