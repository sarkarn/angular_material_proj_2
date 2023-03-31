import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import {MaterialModule} from "./material/material.module";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login-service.service'
import {StrategyService} from './strategy.service'
import {EmployeeService} from './employee.service'
import {StrategyDetailService} from './strategy-detail.service'


import { HttpClientModule } from '@angular/common/http';
import { StrategyMgmtComponent } from './strategy-mgmt/strategy-mgmt.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InvestmentGoalMgmtComponent } from './investment-goal-mgmt/investment-goal-mgmt.component';
import { ClientInvitationComponent } from './client-invitation/client-invitation.component';
import { AccountMgmtComponent } from './account-mgmt/account-mgmt.component';
import { EmployeeComponent } from './employee/employee.component';
import { StrategyDetailComponent } from './strategy-detail/strategy-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    LoginComponent,
    routingComponents,
    StrategyMgmtComponent,
    PageNotFoundComponent,
    InvestmentGoalMgmtComponent,
    ClientInvitationComponent,
    AccountMgmtComponent,
    EmployeeComponent,
    StrategyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService,StrategyService, EmployeeService, StrategyDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
