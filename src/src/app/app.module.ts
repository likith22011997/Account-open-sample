import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatenewaccountComponent } from './createnewaccount/createnewaccount.component';
import { AppRoutingModule } from './app-routing.module';
import { DropdownDirective } from './shared/dropdown-derivative';
import { DepositsComponent } from './deposits/deposits.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatenewaccountComponent,
    DropdownDirective,
    DepositsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
