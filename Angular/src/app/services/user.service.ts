import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api/terrain';
  constructor(private http: HttpClient) { }


  

  all() {
    return this.http.get(this.apiUrl);
  }

  get(id: any) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  /*
   * Create a new course
   * @param course new course to create
   */
  create(user: any) {
    return this.http.post(this.apiUrl, user);
  }

  /*
   * Update a course with the given id
   * @param id course id to update
   * @param course new course data
   */
  update(id: string, user: any) {
    return this.http.put(this.apiUrl + '/' + id, user);
  }

  /*
   * Delete a course with the given id
   * @param id course id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id)
  }

}
