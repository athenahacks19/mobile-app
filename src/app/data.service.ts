import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

interface SentimentResult {
  documents: {
    id: string;
    score: number;
  }[];
}

interface DescribeResult {
  description: {
    tags: string[];
    captions: {
      text: string;
    }[];
  };
}

interface Image {
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  savedImages: Image[] = [];

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
    return this.http.post(`${environment.csServer}/text/analytics/v2.0/sentiment`, {
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

  async describeImage(image: string) {
    const imageRes = await fetch(image);
    const blob = await imageRes.blob();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key': environment.csKey
      }),
    };
    const describeResult = await this.http.post(`${environment.csServer}/vision/v1.0/describe`, blob, httpOptions)
    .toPromise() as DescribeResult;
    return describeResult.description.captions[0].text;
  }

  saveImage(image: string, description: string) {
    this.savedImages.push({ image, description });
  }

  getImages() {
    return this.savedImages;
  }

  saveSchedule(userId: string, schedule: any[]) {
    return this.http.post(`${environment.server}/schedule?userId=${userId}`, schedule).toPromise();
  }
}
