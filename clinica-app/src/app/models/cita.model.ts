import { Paciente } from './pacientes.model';
import { TiposCita } from './tiposCitas.model';

export class Cita {
    static mapFromResponse(data: any): Cita[] {
        let citas: Cita[] = [];
        citas = data.map(
            (data:any) => new Cita(
            data.CitaId,
            data.CitaFecha,
            data.PacienteId,
            Paciente.mapFromResponse([data.Paciente])[0],
            data.TiposCitaId,
            TiposCita.mapFromResponse([data.TiposCita])[0]
        ));
        return citas;
      }
    
    constructor(
        public CitaId: number,
        public CitaFecha: string,
        public PacienteId: number,
        public Paciente: Paciente,
        public TiposCitaId: number,
        public TiposCita: TiposCita
    ) {}
}