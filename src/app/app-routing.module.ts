import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path :'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'navbar', component:NavbarComponent
  },
  {
    path:'services',component:ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
