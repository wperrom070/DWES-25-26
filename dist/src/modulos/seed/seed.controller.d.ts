import { SeedService } from './seed.service';
export declare class SeedController {
    private readonly seedService;
    constructor(seedService: SeedService);
    loadData(): {
        message: string;
        data: {
            nif: string;
            nombre: string;
            apellidos: string;
            edad: number;
            comision: number;
            address: {
                pais: string;
                ciudad: string;
                provincia: string;
                calle: string;
                numero: string;
                cpostal: string;
            };
        }[];
    };
}
