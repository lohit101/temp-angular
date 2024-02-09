import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiRoot = 'https://geo.api.gouv.fr/'

const httpOptions = {
  header: new HttpHeaders({
    'content-type': 'application/json',
    'Accept': 'text/html, application/xhtml+xml, */*',
  }),
  responseType: 'json' as 'json'
}

@Injectable({
  providedIn: 'root',
})

export class apiService {

  constructor(private http: HttpClient) {}

}
