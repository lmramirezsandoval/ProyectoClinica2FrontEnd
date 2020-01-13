import { PacientesService } from '../../../pacientes/paciente.service';
import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ViewChild,
  Inject,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Paciente } from 'src/app/models/pacientes.model';
import { CitasService } from '../../citas.service';
import { Cita } from 'src/app/models/cita.model';
import { TiposCitasService } from 'src/app/tipoCitas/tipoCitas.service';
import { TiposCita } from 'src/app/models/tiposCitas.model';

@Component({
  selector: 'crear-cita-modal',
  templateUrl: './crear.modal.component.html',
  styleUrls: ['./crear.modal.component.scss']
})
export class CrearCitaModalComponent implements OnInit {
    dialogTitle:string = "Crear Cita";
    pacientes: Paciente[];
    pacienteSeleccionado:Paciente = null;

    tiposCitas: TiposCita[];
    tipoCitaSeleccionado: TiposCita = null;

    public citaFecha: string = null;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<CrearCitaModalComponent>,
        private pacienteService: PacientesService,
        private citasService: CitasService,
        private tiposCitasService: TiposCitasService
    ) {

    }

    ngOnInit() {
      this.pacienteService.getPacientes().subscribe((result) => {
          this.pacientes = result;
      });
      this.tiposCitasService.getTipos().subscribe((result) => {
        this.tiposCitas = result;
      });
    }

    
    submit() {

      if(this.citaFecha == null || this.pacienteSeleccionado == null || this.tipoCitaSeleccionado == null){
        alert("Debe ingresar todos los campos");
        return;
      }

      let citaNueva = new Cita(0, this.citaFecha, this.pacienteSeleccionado.PacienteId, this.pacienteSeleccionado, this.tipoCitaSeleccionado.TiposCitaId, this.tipoCitaSeleccionado);
      this.citasService.agregarCita(citaNueva).subscribe((result) => {
        this.dialogRef.close(true);
      })
    }

    cancel() {
        this.dialogRef.close(false);
    }

    public onSelectChange(pacienteId:Paciente): void {
      this.pacienteSeleccionado = pacienteId;
    }

    public onSelectChangeTipo(tipo:TiposCita): void {
      this.tipoCitaSeleccionado = tipo;
    }

    public getPacienteFullName(paciente: Paciente): string {
      return paciente.PacienteNombre + " " + paciente.PacienteApellidos;
  }
}
