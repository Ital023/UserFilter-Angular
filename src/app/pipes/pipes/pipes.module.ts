import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';



@NgModule({
  declarations: [
    PhonePipe,
    AddressPipe,
    StatusPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PhonePipe,
    AddressPipe,
    StatusPipe
  ]
})
export class PipesModule { }
