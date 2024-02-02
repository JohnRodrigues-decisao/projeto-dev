import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Módulos
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Pages
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';

// Components
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DashboardBodyComponent } from './components/dashboard/dashboard-body/dashboard-body.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { ClientListComponent } from './components/dashboard/client-list/client-list.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DashClientComponent } from './pages/dash-client/dash-client.component';
import { ClientEditComponent } from './components/dashboard/client-edit/client-edit.component';
import { ClientAddComponent } from './components/dashboard/client-add/client-add.component';
import { ClientLocationComponent } from './components/dashboard/client-location/client-location.component';
import { ClientRepresentativesComponent } from './components/dashboard/client-representatives/client-representatives.component';

// ----------> User component
import { EditUserComponent } from './components/dashboard/profile/edit-user/edit-user.component';

// Directive

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardBodyComponent,
    SpinnerComponent,
    ClientListComponent,
    FooterComponent,
    DashClientComponent,
    ClientEditComponent,
    ClientAddComponent,
    ClientLocationComponent,
    ClientRepresentativesComponent,
    EditUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxMaskDirective,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [provideNgxMask({ /* opções de cfg */ })],
  bootstrap: [AppComponent],
})
export class AppModule {}
