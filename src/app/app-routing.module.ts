import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PrivacyComponent } from './privacy/privacy.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
