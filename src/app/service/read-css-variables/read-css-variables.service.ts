import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {mergeMap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ReadCssVariablesService {
  constructor(private http: HttpClient) {}
  filePath = 'src/app/scss/_variables.scss'

  getScssVariables(): Observable<any> {
    return this.http
      .get(this.filePath, { responseType: 'text' })
      .pipe(
        mergeMap((scssContent: any) => {
          // Parse the SCSS content and extract variables
          const variableRegex = /\$([a-zA-Z0-9-]+):\s*(.*?);/g;
          const variables = [];
          let match;
  
          while ((match = variableRegex.exec(scssContent)) !== null) {
            const name = match[1];
            const value = match[2];
            variables.push({ name, value });
          }
  
          return variables;
        })
      )
  }
}
