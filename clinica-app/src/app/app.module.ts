import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule,  MatSnackBarModule, MatCardModule, 
  MatTableModule, MatIconModule, MatButtonModule, MatDialogModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { APP_CONFIG_TOKEN, IAppConfig } from './models/iapp-config.model';
import { environment } from 'src/environments/environment';
import { REQUEST_CONFIG_TOKEN, REQUEST_CONFIG } from './authentication/service/request-config';

import { AuthenticationModule } from './authentication/authentication.module';

import { CitasComponent } from './citas/citas.component';
import { CitasService } from './citas/citas.service';
import { PacientesService } from './pacientes/paciente.service';
import { ModalHeaderComponent } from './shared/modal-header/modal-header.component';
import { CrearCitaModalComponent } from './citas/modals/crear-modal/crear.modal.component';
import { EliminarCitaModalComponent } from './citas/modals/eliminar-modal/eliminar.modal.component';
import { TiposCitasService } from './tipoCitas/tipoCitas.service';
import { VerPacienteModalComponent } from './pacientes/modals/ver-modal/ver.modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CitasComponent,
    ModalHeaderComponent,
    CrearCitaModalComponent,
    EliminarCitaModalComponent,
    VerPacienteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    FormsModule,
    AuthenticationModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [
    { provide: APP_CONFIG_TOKEN, useValue: environment as IAppConfig },
    { provide: REQUEST_CONFIG_TOKEN, useValue: REQUEST_CONFIG },
    AuthenticationModule,
    CitasService,
    PacientesService,
    TiposCitasService,
    VerPacienteModalComponent
  ],
  entryComponents : [
    CrearCitaModalComponent,
    EliminarCitaModalComponent,
    VerPacienteModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
