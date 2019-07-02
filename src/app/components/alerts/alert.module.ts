import { NgModule } from '@angular/core';
import { AlertComponent } from './alert.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';
import { FailureComponent } from './failure/failure.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  //// Declarations
  declarations: [
    AlertComponent,
    SuccessComponent,
    WarningComponent,
    FailureComponent
  ],
  //// Imports
  imports: [
    BrowserModule,
  ],
  //// Providers
  providers: [

  ],
  exports: [
    AlertComponent,
  ],
})

export class AlertModule { }


