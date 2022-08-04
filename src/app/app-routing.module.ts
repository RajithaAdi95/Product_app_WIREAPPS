import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHomeComponent } from './Layouts/product-home/product-home.component';
import { IndividualViewComponent } from './Layouts/individual-view/individual-view.component';

const routes: Routes = [
  { path: '', redirectTo:"home", pathMatch:"full"},
  { path: 'home', component: ProductHomeComponent },
  { path: 'product/:id', component: IndividualViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
