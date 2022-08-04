import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndividualViewComponent } from './Layouts/individual-view/individual-view.component';
import { ProductHomeComponent } from './Layouts/product-home/product-home.component';

import { ProductService } from './services/product.service';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Layouts/header/header.component';
import { FooterComponent } from './Layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IndividualViewComponent,
    ProductHomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
