import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { ProjectteamComponent } from './projectteam/projectteam.component';


const routes: Routes = [ {
  path: "", component : MainComponent
},{
  path: "news" ,component : NewsComponent
}, {
  path:"about",component : AboutComponent
},
{
  path:"details/:id", component : DetailsComponent
},{
  path: "projectteam", component : ProjectteamComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
