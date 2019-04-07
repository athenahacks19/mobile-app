import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

interface SentimentResult {
  documents: {
    id: string;
    score: number;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get(userId: string) {
    return this.http.get(`${environment.server}/user?userId=${userId}`).toPromise();
  }

  analyzeText(text: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Ocp-Apim-Subscription-Key': environment.csKey
      })
    };
    return this.http.post(`${environment.csServer}//text/analytics/v2.0/sentiment`, {
      documents: [
        {
          language: 'en',
          id: '1',
          text
        }
      ]
    }, httpOptions)
    .toPromise()
    .then((result: SentimentResult) => result.documents[0].score);
  }
}
