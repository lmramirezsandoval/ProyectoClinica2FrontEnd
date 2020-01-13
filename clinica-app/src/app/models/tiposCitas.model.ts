export class TiposCita {
    static mapFromResponse(data: any): TiposCita[] {
        return data.map((data) => new TiposCita(
            data.TiposCitaId,
            data.TiposCitaDescripcion,
        ));

    }
    
    constructor(
        public TiposCitaId: number,
        public TiposCitaDescripcion: string
    ) {}
}