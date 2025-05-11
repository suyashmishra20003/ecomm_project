import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { AppDataService } from 'src/app/app-data.service';
import { TableInputConfig, TableModuleName, UserDetail } from 'src/app/global-interfaces/custom-menu.interface';
import { CustomTableComponent } from "../../custom-table/custom-table.component";

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss'],
  standalone: true,
  imports: [FormsModule, SelectButtonModule, CommonModule, InputTextModule, ButtonModule, ToastModule, CustomTableComponent]
})
export class AdminUserComponent {
  userOptions: any[] = [{ label: 'Change Password', value: 'change-password' }, { label: 'User Control', value: 'user-control' }];
  selectedUserOption: string = 'change-password';
  oldPassword: string = '';
  newPassword: string = '';
  tableConfigObj: TableInputConfig<UserDetail> = {
      tableHeaders: []  ,
      enableActionColumn:true,
      tableRows:[],
      moduleName:TableModuleName.USER_CONTROL
    }


  constructor(private messageService: MessageService, private dataService:AppDataService) {

  }

  ngOninit(): void {

  } 


  userModelChange(event: string) {
    if(event == 'user-control') {
      this.tableConfigObj = {
        tableHeaders: [
          { field: 'name', header: 'Name' },
          { field: 'email', header: 'Email' },
        ]  ,
        enableActionColumn:true,
        tableRows:[
          { name: 'User 1', email: '7Z4Yt@example.com' },
          { name: 'User 2', email: '7Z4Yt@example.com' }
        ],
        moduleName:TableModuleName.USER_CONTROL
      }
    }
  }

  validatePassword(password:string): boolean {
    // Length check (8-64 characters)
    let passLength = !(password.length >= 8 && password.length <= 64);

    // Lowercase character check
    let lowercase = !/[a-z]/.test(password);

    // Uppercase character check
    let uppercase = !/[A-Z]/.test(password);

    // Number check
    let number = !/[0-9]/.test(password);

    // Special character check
    let special = !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    if(passLength && lowercase && uppercase && number && special) {
      return true
    }else {
      return false    
    }
  }

  applyPasswordChanges(){
    if (this.validatePassword(this.oldPassword)) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Old password mentioned is invalid' });
      return;
    }
  }

  outputConfigHandler(event:UserDetail){
    console.log(event);
  }
}
