import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FacultyComponent } from './faculty/faculty.component';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { FamilyhistoryComponent } from './familyhistory/familyhistory.component';
import { FamilyHistoryDisplayComponent } from './family-history-display/family-history-display.component';
import { PastComponent } from './past/past.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'basicinfo', component: BasicinfoComponent },
  { path: 'medicalhistory', component: MedicalHistoryComponent },
  { path: 'familyhistory', component: FamilyhistoryComponent },
  { path: 'family-history-display', component: FamilyHistoryDisplayComponent },
  { path: 'past', component: PastComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
