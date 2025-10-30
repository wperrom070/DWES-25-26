export declare class Address {
    calle: string;
    pais: string;
    numero: number;
}
export declare class Cliente {
    nif: string;
    name: string;
    edad: number;
    email: string;
    comision: string;
    address: Address;
    createdAt: Date;
    updatedAt: Date;
    checkNif(): void;
    checkName(): void;
}
