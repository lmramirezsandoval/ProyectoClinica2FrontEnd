export class Paciente {
    static mapFromResponse(data: any): Paciente[] {
        return data.map(
            (data:any) => new Paciente (
            data.PacienteId,
            data.PacienteNombre,
            data.PacienteApellidos,
            data.PacienteFechaNacimiento,
            data.PacienteTelefono
        ));
    }
    
    constructor(
        public PacienteId: number,
        public PacienteNombre: string,
        public PacienteApellidos: string,
        public PacienteFechaNacimiento: string,
        public PacienteTelefono: number
    ) {}
}

