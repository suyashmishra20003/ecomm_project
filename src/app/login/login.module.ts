import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule],
    exports: [LoginComponent]
})

export class LoginModule { }