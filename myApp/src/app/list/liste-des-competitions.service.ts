import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListeDesCompetitionsService {
  
  constructor(public http: HttpClient) { }

 public loadListeCompetitons(){
    return new Promise<any>((resolve, reject) => {
        this.http
      .get('http://localhost:8083/competitions')
      .toPromise()
      .then(response => {
        resolve(response)
      })
      .catch(reject)
    })
  }
}
