import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {} 

  /*//取得project.json
  getDataFileProject(): Observable<any> {
    return this.http.get('./assets/data/project.json');
  }

  //取得publication.json
  getDataFilePublication(): Observable<any> {
    return this.http.get('./assets/data/publication.json');
  }*/

  getDataFromFile(fileName: string): Observable<any> {
    return this.http.get(`assets/${fileName}`);}
}
