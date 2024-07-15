import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { HeaderComponent } from './shared/header/header.component';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { FamilyhistoryComponent } from './familyhistory/familyhistory.component';
import { FamilyHistoryDisplayComponent } from './family-history-display/family-history-display.component';
import { PastComponent } from './past/past.component';
const routes: Routes = [{ path: 'login', component: LoginComponent }];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FacultyComponent,
    BasicinfoComponent,
    HeaderComponent,
    MedicalHistoryComponent,
    FamilyhistoryComponent,
    FamilyHistoryDisplayComponent,
    PastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
