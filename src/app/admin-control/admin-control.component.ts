import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ListboxModule } from 'primeng/listbox';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-admin-control',
  templateUrl: './admin-control.component.html',
  styleUrls: ['./admin-control.component.scss'],
  standalone: true,
  imports:[ListboxModule,FormsModule,RouterModule]
})
export class AdminControlComponent implements AfterViewInit {
    adminOptions!: { name: string; code: string }[];
    selectedAdminOption:  { name: string; code: string } =  { name: 'Admin' , code:'admin-user' };

    constructor(private router:Router){}

    ngOnInit() {
        this.adminOptions = [
            { name: 'Admin' , code:'admin-user' },
            { name: 'Product', code:'admin-product' },
            { name: 'Order', code:'admin-order' },   
        ];
       
    }

    ngAfterViewInit(): void {
        this.listModelChange(this.selectedAdminOption)
        
    }

    listModelChange(event: { name: string; code: string }) {
        this.router.navigateByUrl(`body/admin-control/${event.code}`);
    }
}
