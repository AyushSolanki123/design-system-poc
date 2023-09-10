import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {mergeMap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ReadCssVariablesService {
  constructor(private http: HttpClient) {}
  filePath = '/assets/output.json'

  getScssVariables(): Observable<any> {
    return this.http
      .get(this.filePath)
  }
}
