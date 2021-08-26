import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PostModule { 
  $key: number = 0;
  fullName: string = '';
  email: string = '';
  mobile: string = '';
  city: string = '';
  gender: string = '';
  department: number = 0;
  dob: string = '';
  isPermanent: boolean = false;
}
