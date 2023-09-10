import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input() cardDetails:any
  productPrice:number = 1
  rating:number = 0

  constructor(){
   
    
  }
  
  onRating(rating:number){
    this.rating = rating
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productPrice =  Math.ceil(
      this.cardDetails.price * 83.12
    )
  }
}
