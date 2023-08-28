import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardDetails:any
  rating:number = 0

  constructor(){
  }

  onRating(rating:number){
    this.rating = rating
  }
}
