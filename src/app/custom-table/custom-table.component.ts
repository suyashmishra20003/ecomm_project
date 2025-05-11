import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { Product, TableAction, TableInputConfig, TableModuleName, UserDetail } from '../global-interfaces/custom-menu.interface';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  standalone:true,
  imports:[CommonModule, FormsModule, TableModule, ButtonModule, TooltipModule,DialogModule,InputTextModule]
})
export class CustomTableComponent {
  
  @Input() set  tableConfig(config:TableInputConfig){
    this.tableConfigHandler(config)
  }
  @Output() outPutConfig:EventEmitter<any>  = new EventEmitter()

  tableRows:any[] = []
  enableActionCol:boolean = false
  tableHeaders:{field:string,header:string}[] = []
  showDialog: boolean = false
  dialogState:TableAction = TableAction.EDIT
  dalogModuleName = TableModuleName.USER_CONTROL
  dailogHeading:string = ''


  tableState:any = TableAction
  tableModuleName = TableModuleName

  // user Control
  userName:string = ''
  eMail:string = ''

  // Product
  productName:string = ''
  productDesc:string = ''
  productCategory:string = ''
  productPrice:number = 0
  productId:number = 0



  ngOninint(){

  }

  editRowHandler(rowData:any, rowIndex?:number){

    let row;
    this.dialogState = TableAction.EDIT
    this.showDialog = true

    if(this.dalogModuleName === TableModuleName.USER_CONTROL){
      row = rowData as UserDetail
      this.userName = row.name
      this.eMail = row.email
    }

    if(this.dalogModuleName === TableModuleName.PRODUCT){
      row = rowData as Product
      this.productName = row.title
      this.productDesc = row.description
      this.productCategory = row.category
      this.productPrice = row.price
    }


    
  }
  deleteRowHandler(rowData:any){
    this.dialogState = TableAction.DELETE
    this.showDialog = false

  }

  tableConfigHandler(config:TableInputConfig){
    this.tableRows = JSON.parse(JSON.stringify(config.tableRows))
    this.enableActionCol = config.enableActionColumn
    this.tableHeaders = config.tableHeaders
    this.dialogState = TableAction.EDIT
    this.dalogModuleName = config.moduleName

    if(this.dalogModuleName === TableModuleName.USER_CONTROL){
      this.dailogHeading = 'Edit User Details'
    }
    if(this.dalogModuleName === TableModuleName.PRODUCT){
      this.dailogHeading = 'Edit Product Details'
    }
 
  }

  applyDialogChanges(){
    this.showDialog = false

    let finalOutput; 

    if(this.dalogModuleName === TableModuleName.USER_CONTROL){
      let output:UserDetail = {
        name : this.userName,
        email : this.eMail
      }

      finalOutput = {...output}
    }

    if(this.dalogModuleName === TableModuleName.PRODUCT){
      let output:Product = {
        id : this.productId,
        title : this.productName,
        price : this.productPrice,
        description : this.productDesc,
        category : this.productCategory
       
      }
      finalOutput = {...output}
    }
    this.outPutConfig.emit(finalOutput)
  }

  closeDailog(){
    this.showDialog = false
  }
}
