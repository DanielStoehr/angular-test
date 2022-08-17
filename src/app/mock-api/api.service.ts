import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Data {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllData() {
    return this.http.get<Data[]>('http://localhost:3000');
  }
}
