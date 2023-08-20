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
  isOpen:boolean = false;

  menuEnterHandler(){
    this.isOpen = true;
  }
  menuLeaveHandler(){
    setTimeout(() => {
      this.isOpen = false;
      
    }, 200);
  }
}
