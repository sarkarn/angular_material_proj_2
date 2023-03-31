import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountMgmtComponent } from './account-mgmt/account-mgmt.component';
import { ClientInvitationComponent } from './client-invitation/client-invitation.component';
import { EmployeeService } from './employee.service';
import { InvestmentGoalMgmtComponent } from './investment-goal-mgmt/investment-goal-mgmt.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StrategyMgmtComponent } from './strategy-mgmt/strategy-mgmt.component';
import { EmployeeComponent } from './employee/employee.component';
import { StrategyDetailComponent } from './strategy-detail/strategy-detail.component';

const routes: Routes = [
  {path: '', redirectTo: "/strategymgmt", pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'strategymgmt', component: StrategyMgmtComponent},
  {path: 'strategymgmt/:id', component: StrategyDetailComponent},
  {path: 'investmgmtgoalmgmt', component: InvestmentGoalMgmtComponent},
  {path: 'clientinvitation', component: ClientInvitationComponent},
  {path: 'accountmgmt', component: AccountMgmtComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent]
