import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppDataService } from 'src/app/app-data.service';
import { CustomTableComponent } from 'src/app/custom-table/custom-table.component';
import { Product, TableInputConfig, TableModuleName } from 'src/app/global-interfaces/custom-menu.interface';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss'],
  standalone: true,
  imports: [CustomTableComponent,CommonModule,FormsModule]
})
export class AdminProductComponent {
  tableConfig:TableInputConfig<Product> = {
     tableRows:JSON.parse(JSON.stringify(this.dataService.productData)),
      tableHeaders:[
        { field: 'title', header: 'Name' },
        { field: 'price', header: 'Price' },
        { field: 'category', header: 'Category' },
        { field: 'description', header: 'Description' },

      ],
    enableActionColumn:true,
    moduleName:TableModuleName.PRODUCT
  } 

  constructor(public dataService:AppDataService){}
  ngOninit(){
   setTimeout(() => {
    this.tableConfig =  {
     tableRows:JSON.parse(JSON.stringify(this.dataService.productData)),
      tableHeaders:[
        { field: 'title', header: 'Name' },
        { field: 'price', header: 'Price' },
        { field: 'category', header: 'Category' },
        { field: 'description', header: 'Description' },

      ],
    enableActionColumn:true,
    moduleName:TableModuleName.PRODUCT
  } 
   }, 1000);
  }

  outputConfigHandler(event:Product){
    console.log(event);
  }
}
