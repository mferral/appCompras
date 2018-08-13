import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturasComponent } from './facturas/facturas.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forRoot(),
    ReactiveFormsModule,
    HttpModule,
  ],
  // exports: [
  //   FacturasComponent
  // ],
  declarations: [FacturasComponent]
})
export class FacturasModule { }
