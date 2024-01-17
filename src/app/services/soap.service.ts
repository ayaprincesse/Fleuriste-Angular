// soap.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { parseString } from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class SoapService {
  private soapHeaders = new HttpHeaders({
    'Content-Type': 'text/xml'
  });

  constructor(private http: HttpClient) {}

  sendSoapRequest(soapRequest: string, url: string): Observable<any> {
    return this.http.post(url, soapRequest, {
      headers: this.soapHeaders,
      responseType: 'text'
    });
  }

  parseXmlResponse(xml: string): Observable<any> {
    return new Observable((observer) => {
      parseString(xml, { explicitArray: false }, (error, result) => {
        if (error) {
          observer.error(error);
        } else {
          observer.next(result);
        }
        observer.complete();
      });
    });
  }
}
