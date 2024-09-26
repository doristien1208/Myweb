import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {} 

  //個別取得方式
  /*//取得project.json
  getDataFileProject(): Observable<any> {
    return this.http.get('./assets/data/project.json');
  }
  //取得publication.json
  getDataFilePublication(): Observable<any> {
    return this.http.get('./assets/data/publication.json');
  }*/
 
  //參數化取得方式
  getDataFromFile(fileName: string): Observable<any> {
    return this.http.get(`assets/${fileName}`);}
}
