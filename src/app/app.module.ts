import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormatPrixPipe } from './format-prix.pipe';
import { TdformComponent } from './tdform/tdform.component';
import { DemoServiceComponent } from './demo-service/demo-service.component';
import { DemoService } from './services/demo.service';
import { DemoService2Component } from './demo-service2/demo-service2.component';
import { DemoHttpComponent } from './demo-http/demo-http.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PipeComponent,
    FormatPrixPipe,
    TdformComponent,
    DemoServiceComponent,
    DemoService2Component,
    DemoHttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
