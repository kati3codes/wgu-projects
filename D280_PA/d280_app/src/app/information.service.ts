import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  constructor(private http: HttpClient) { }

  public search(list: string) {
    return
this.http.get('http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: list,
        origin: '*'
      }
    });
  }
}
