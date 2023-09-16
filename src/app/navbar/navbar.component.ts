import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,OnDestroy {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger | undefined;
  navSearch:string = '';
  options: string[] = ['One', 'Two', 'Three'];   
  menuTriggerArr:any = []
  cartLength:number = 0
  constructor(private router:Router,public dataService:AppDataService){}
 

  ngOnInit(): void {
    this.cartLength = this.dataService.cartData.length
  }

  openMyMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
    if(this.menuTriggerArr.includes(menuTrigger) === false){
      this.menuTriggerArr.push(menuTrigger)
      for (let i = 0; i < this.menuTriggerArr.length; i++) {
        const element = this.menuTriggerArr[i];
        element.closeMenu()
      }
      
    }
  }

  // mouseLeaveHandler(menuTrigger: MatMenuTrigger){
  //   menuTrigger.closeMenu();
      
  // }
  
  routeClickHandler(string:string){
    this.router.navigateByUrl(string)
  }
  cartRouteClickHandler(string:string){
    if(this.dataService.cartData.length > 0){
      this.router.navigateByUrl(string)
    }
  }
  ngOnDestroy(): void {
    this.dataService.cartData = []
  }
}
