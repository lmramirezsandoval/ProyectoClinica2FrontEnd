import { Component, OnInit } from '@angular/core';
import { CitasService } from './citas.service';
import { Cita } from '../models/cita.model';
import { PacientesService } from '../pacientes/paciente.service';
import { CrearCitaModalComponent } from './modals/crear-modal/crear.modal.component';
import { EliminarCitaModalComponent } from './modals/eliminar-modal/eliminar.modal.component';
import { MatDialog } from '@angular/material';
import { Observable, of } from 'rxjs';
import { VerPacienteModalComponent } from '../pacientes/modals/ver-modal/ver.modal.component';
import { Paciente } from '../models/pacientes.model';

@Component({
  selector: 'citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit{
    
    title = 'Citas';
    citas: Cita[];
    displayedColumns: string[] = ['Id', 'Paciente', 'Fecha', 'Tipo', 'Acciones'];

    constructor(
        private citasService: CitasService,
        private modal: MatDialog
        ){

    }

    ngOnInit(): void {
        this.GetCitas();
    }

    public openCrearCitaModal() {
        let crearModal =this.modal.open(CrearCitaModalComponent, {
            panelClass: 'crear-modal-panel'
        });

        crearModal.afterClosed().subscribe((response: any) => {
            this.GetCitas();
        });
    }

    public openCancelarCitaModal(cita: Cita): void {
        let eliminarModal = this.modal.open(EliminarCitaModalComponent, {
            data: cita.CitaId,
            panelClass: 'eliminar-modal-panel'
        });

        eliminarModal.afterClosed().subscribe((response: any) => {
            this.GetCitas();
        });
    }

    public openPacienteModal(paciente: Paciente) {
        this.modal.open(VerPacienteModalComponent, {
            data: paciente,
            panelClass: 'paciente-modal-panel'
        });
    }

    public getPacienteFullName(cita:Cita): string {
        return cita.Paciente.PacienteNombre + " " + cita.Paciente.PacienteApellidos;
    }

    public getTipoDescripcion(cita:Cita): string {
        return cita.TiposCita.TiposCitaDescripcion;
    }

    private GetCitas(): void {
        this.citasService.getCitas().subscribe((result) => {
            this.citas = result;
        });
    }
}
