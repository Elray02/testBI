import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BankSchematicComponent } from './bank-schematic/bank-schematic.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';

import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BankSchematicComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    ChartsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
