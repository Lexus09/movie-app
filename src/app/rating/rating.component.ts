import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() ratingOutOf10: number;

  noOfStars: number[];

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.noOfStars = new Array(Math.ceil(this.ratingOutOf10)).fill(0);
    const lastStarClipPercentage = 100 - ((this.ratingOutOf10 - Math.floor(this.ratingOutOf10)) * 100);
    this.renderer.setStyle(this.elementRef.nativeElement.firstChild, '--rightClipPercentage', `${lastStarClipPercentage}%`, 2);
  }

}
