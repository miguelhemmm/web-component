import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private http: HttpClient) { }


  getFruits(): Observable<any> {
    return this.http.get('assets/fruits.json')
  }


}
