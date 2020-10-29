import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;

  posterUrl: string | undefined;
  isFlipped = false;

  constructor() { }

  ngOnInit(): void {
    this.posterUrl = `https://image.tmdb.org/t/p/original${this.movie.poster_path}`;
  }

  onClickToggleClass(): void {
    this.isFlipped = !this.isFlipped;
  }

}
