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


@Component({
  selector: 'ver-paciente-modal',
  templateUrl: './ver.modal.component.html',
  styleUrls: ['./ver.modal.component.scss']
})
export class VerPacienteModalComponent implements OnInit {
    dialogTitle:string = "Paciente";
    paciente: Paciente;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<VerPacienteModalComponent>,
    ) {

    }

    ngOnInit() {
      this.paciente = this.data;
    }

    cancel() {
        this.dialogRef.close(false);
    }

    public getPacienteFullName(paciente: Paciente): string {
      return paciente.PacienteNombre + " " + paciente.PacienteApellidos;
  }
}
