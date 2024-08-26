import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class JsondataService {

  private http = inject(HttpClient);
  readonly api_url = 'https://jsonplaceholder.typicode.com/posts';

  constructor() { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.api_url, { observe: 'body'});
  }

  // getData() {}
}
