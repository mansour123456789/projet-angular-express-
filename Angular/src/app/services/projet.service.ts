import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private apiUrl = 'http://localhost:3000/api/terrain';
  constructor(private http: HttpClient) { }


}

