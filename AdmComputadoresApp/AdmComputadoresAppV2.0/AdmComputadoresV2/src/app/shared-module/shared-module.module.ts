import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppModule,
    AppComponent
  ],
  exports: [AppComponent]
})
export class SharedModuleModule { }
