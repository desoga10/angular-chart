import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const apiKey = 'coinrankingc032026f93e3b94c047c89523ca837327c4dac81e1070686';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-My-Custom-Header': `${apiKey}`,
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://api.coinranking.com/v2/coins';
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {}

  cryptoData() {
    const url = `${this.proxyUrl}${this.baseUrl}`;
    return this.http
      .get(url, httpOptions)
      .toPromise()
      .then((data) => {
        return data;
      });
  }
}
