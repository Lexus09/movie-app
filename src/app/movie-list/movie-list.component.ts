import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { tap, map, distinctUntilChanged } from 'rxjs/operators';
import { MovieTypes, Movie } from '../movie/movie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies$: Observable<Partial<Movie[]>>;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies$ = this.movieService.getMovies(MovieTypes.TopRated)
      .pipe(
        tap(console.log),
        map((response) => response.results),
        distinctUntilChanged()
      );
  }

}
