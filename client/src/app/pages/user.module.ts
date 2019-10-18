import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
//import { SharedModule } from '../../../shared/shared.module';
import { UserComponent } from './user.component';
import { UserService } from '../_services/user.service';
import { MaterialModule } from '../material.module';


@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    UserRoutingModule,
    FormsModule
    //SharedModule
  ],
  declarations: [
    UserComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
