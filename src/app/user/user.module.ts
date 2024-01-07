import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SupportTsComponent } from './support.ts/support.ts.component';



@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailComponent,
    SupportTsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
