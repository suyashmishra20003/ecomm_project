import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger | undefined;
  navSearch:string = '';
  options: string[] = ['One', 'Two', 'Three'];   
  menuTriggerArr:any = []
  constructor(){}

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

  mouseLeaveHandler(menuTrigger: MatMenuTrigger){
    menuTrigger.closeMenu();
      
  }

}
