import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Contact } from './contact/contact-subscribe/contact';
import { ContactFormComponent } from './contact/contact-subscribe/contact-form.component';
import { HomeComponent } from './home/home.component';
import { ImpactComponent } from './impact/impact.component';



export const routerConfig: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'impact',
      component: ImpactComponent
  },
  {
      path: 'contact',
      component: ContactFormComponent
  },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routerConfig)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

}