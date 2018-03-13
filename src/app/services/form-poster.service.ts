import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Employee } from '../models/employee.module';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class FormPoster {

  constructor(private http: Http){

  }


  getLanguages(): Observable<any>{

    return this.http.get('http://localhost:3100/get-languages')
            .delay(1000)
            .map(this.extractLanguages)
            .catch(this.handleError);
  }

  postEmployeeForm(employee: Employee):Observable<any>{
    //validate form
    let body = JSON.stringify(employee);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('http://localhost:3100/postemployee', body, options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractLanguages(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private extractData(res: Response){
    let body = res.json();
    return body.fields || { };
  }

  private handleError(error: any){
    console.error('post error ', error);
    return Observable.throw(error.statusText);
  }

}
