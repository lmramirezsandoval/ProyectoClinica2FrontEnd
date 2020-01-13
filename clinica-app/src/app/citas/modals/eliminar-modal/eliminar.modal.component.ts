import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ViewChild,
  Inject,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CitasService } from '../../citas.service';

@Component({
  selector: 'eliminar-cita-modal',
  templateUrl: './eliminar.modal.component.html',
  styleUrls: ['./eliminar.modal.component.scss']
})
export class EliminarCitaModalComponent implements OnInit {
    dialogTitle:string = "Eliminar Cita";
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<EliminarCitaModalComponent>,
        private citasService: CitasService
    ) {

    }

    ngOnInit() {
        
    }

    
    submit() {
      this.citasService.cancelarCita(this.data).subscribe((result) => {
        this.dialogRef.close(true);
      });

    }

    cancel() {
        this.dialogRef.close(false);
    }
}
