import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { ApplicationRef, DoBootstrap, NgModule, importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControl, Validators, ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [AppService, importProvidersFrom(HttpClientModule)]
})
export class AppModule implements DoBootstrap {
  constructor(){
    bootstrapApplication(AppComponent)
    withFetch()
    provideHttpClient()
    this.ngDoBootstrap
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    appRef.bootstrap(AppComponent);
  }
}

