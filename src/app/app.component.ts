import { Component } from '@angular/core';
import { AppDataService } from './app-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-ecommerce';
  productData:any 
  navSearch:string = ''
  private dataSubscription: Subscription;


  constructor(private dataService : AppDataService){
  this.dataSubscription =  dataService.fetchData().subscribe(
    (data)=>{
      this.productData =  data
    }
  )
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe()
    
  }
}
