import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppDataService } from 'src/app/app-data.service';
import { CustomTableComponent } from 'src/app/custom-table/custom-table.component';
import { Product, TableInputConfig, TableModuleName } from 'src/app/global-interfaces/custom-menu.interface';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss'],
  standalone: true,
  imports: [CustomTableComponent,CommonModule,FormsModule]
})
export class AdminOrderComponent {
  tableConfig: TableInputConfig<Product> = {
    tableRows: JSON.parse(JSON.stringify(this.dataService.productData)),
    tableHeaders: [
      { field: 'title', header: 'Name' },
      { field: 'price', header: 'Price' },
      { field: 'category', header: 'Category' },
      { field: 'description', header: 'Description' },

    ],
    enableActionColumn: false,
    moduleName: TableModuleName.PRODUCT
  }

  constructor(public dataService: AppDataService) { }

  ngOninit() {
    setTimeout(() => {
      this.tableConfig = {
        tableRows: JSON.parse(JSON.stringify(this.dataService.productData)),
        tableHeaders: [
          { field: 'title', header: 'Name' },
          { field: 'price', header: 'Price' },
          { field: 'category', header: 'Category' },
          { field: 'description', header: 'Description' },

        ],
        enableActionColumn: false,
        moduleName: TableModuleName.PRODUCT
      }
    }, 1000);
  }


}
