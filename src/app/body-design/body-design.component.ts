import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppDataService } from '../app-data.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-body-design',
  templateUrl: './body-design.component.html',
  styleUrls: ['./body-design.component.scss']
})
export class BodyDesignComponent {
  cardArray:any = []
  dataSub:Subscription | undefined
  imageArray : string[] = [
    'acer', 'apple', 'asus','poco','hp','lenovo','samsung','xiaomi','vivo','boat','oneplus','microsoft'
  ]
  constructor(
      private dataService:AppDataService,
      private router :Router 
    ){

  }
 
  ngOnInit(): void {
     this.dataSub = this.dataService.fetchData().subscribe(
      data => {
        this.cardArray = data;
    console.log(this.cardArray);

      } 
    )
    
  }

  ngOnDestroy(): void {
    this.dataSub?.unsubscribe()
  }

  cardClickHandler(){
    this.router.navigateByUrl('productPageComp');
  }
}
