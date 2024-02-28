import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatenewaccountComponent } from './createnewaccount/createnewaccount.component';
import { DepositsComponent } from './deposits/deposits.component';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch:'full'
  // },
  {
    path: 'accounts',
    component: CreatenewaccountComponent,
  },
  {
    path: 'deposits',
    component: DepositsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], 
exports: [RouterModule],
})
export class AppRoutingModule {}
