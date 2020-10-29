import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../movie/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'https://api.themoviedb.org/3/';
  private movieBaseUrl = `${this.baseUrl}movie/#placeholder#?api_key=8aa3400478b6a0a0adf83dba55249902`;

  constructor(private http: HttpClient) { }

  getMovie(id: string): Observable<Movie> {
    return this.http.get(`${this.movieBaseUrl.replace('#placeholder#', id)}`) as Observable<Movie>;
  }

  // Type it to the Record response we receive
  getMovies(type: string): Observable<any> {
    return this.http.get(`${this.movieBaseUrl.replace('#placeholder#', type)}`);
  }

}

