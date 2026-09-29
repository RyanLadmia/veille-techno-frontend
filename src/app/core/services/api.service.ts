import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl = `http://localhost:${config.API_PORT}`;

  constructor(private http: HttpClient) {}

  getHome(): Observable<string> {
    return this.http.get(this.apiUrl, {
      responseType: 'text'
    });
  }
}