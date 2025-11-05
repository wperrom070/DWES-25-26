//**** ORM --> Mapeo Objeto - Relacional ***** */

import { Address } from "src/common/entitties/address";
import { Usuario } from "src/modulos/usuarios/entities/usuario.entity";
import { BeforeInsert, Column, CreateDateColumn, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('cliente')
export class Cliente {
    
    @PrimaryColumn()
    nif: string

    @Column({ nullable:true,  length: 30})
    nombre: string;

    @Column({ nullable:true,  length: 30})
    apelllidos: string;

    @Column('int', {default: 18})
    edad: number;
    
    @Column({nullable: false, unique: true})
    email: string;
    
    @Column('float', {default: 0.3})
    comision: number;

    @Column(() => Address, { prefix: '' }) address: Address;
    
  
    // 1 Cliente --> 1 usuario
    // Relacion inversa (sin JoinColum)
@OneToOne (
    () => Usuario,
    (usuario) => usuario.cliente  
)
    usuario: Usuario
    //**** MECENISMOS DE SEGURIDAD  *****/
    //monitorizar y auditarlos registros de usuarios y 
    //tabla de accesos --> login/logout/change Profile ...  
   

    @BeforeInsert() //evento disparador
    CheckNif(){ // método manejador del evento
        console.log('Antes nif de insertar el usuario en la BD');
        if (!this.nif.includes('-')){
            const letra = this.nif.slice(-1).toUpperCase();
            const numeros = this.nif.slice(0, -1);
            this.nif = `${numeros}-${letra}`;   
        }

    }
    @BeforeInsert()
    checkName() {
        console.log('Antes de insertar el usuario en la BD');
        if (!this.nombre){
            this.nombre = 'invitado';
        }

        this.nombre = this.nombre
                    .replaceAll(' ', '_')
                    .toUpperCase();  
    }

    
}