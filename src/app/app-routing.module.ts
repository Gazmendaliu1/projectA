import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [ {
  
  path: "news" ,component : NewsComponent
}, {
  path:"about",component : AboutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
