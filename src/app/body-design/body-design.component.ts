import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-body-design',
  templateUrl: './body-design.component.html',
  styleUrls: ['./body-design.component.scss']
})
export class BodyDesignComponent {
  cardArray:any = []
  dataSub:Subscription | undefined
  constructor(private dataService:AppDataService){
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
}
