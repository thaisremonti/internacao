import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorIntl } from '@angular/material/paginator';

import { MaskDirective } from './directives/mask.directive';
// import { PtBrMatPaginatorIntl, TipoPipe, DataPipe } from './';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MaskDirective,
    // TipoPipe,
    // DataPipe
  ],
  exports: [
    MaskDirective,
    // TipoPipe,
    // DataPipe
  ],
  providers: [
    // PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }
