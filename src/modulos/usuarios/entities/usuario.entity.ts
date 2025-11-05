
//**** ORM --> Mapeo Objeto - Relacional ***** */
import { v4 as uuidv4 } from 'uuid';
import { Address } from "src/common/entitties/address";
import { Cliente } from "src/modulos/clientes/entities/cliente.entity";
import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

//create table usuario (id ....)
//LOGICA DE NEGOCIO DE LA ENTIDAD USUARIO. Hola


@Entity('usuario')
export class Usuario {
    
    @PrimaryGeneratedColumn('uuid')
    id: string = uuidv4(); 

    @Column({ nullable:true,  length: 30})
    username: string;

    @Column({ nullable:true,  length: 30})
    password: string;
    
    @Column({nullable: false, unique: true})
    email: string;
    
    @Column()
    foto: string;

    @Column()
    rol: string;

// 1 usuarios --> 1 cliente
// Relación Directa (con JoinColum)

      @OneToOne (
        () => Cliente,
        (cliente) => cliente.usuario, {cascade: true}
    )
        @JoinColumn({
            name: 'cliente',
            foreignKeyConstraintName: 'fk_cliente_en_usuario'
        })
        cliente: Cliente
        /* => usuario.cliente  
    )
        cliente: Cliente

    /* Crear un objeto embebido con las redes sociales*/

    //@Column(() => Address, { prefix: 'direccion' }) direccion: Address;
  
    //**** MECANISMOS DE SEGURIDAD  *****/
    //monitorizar y auditarlos registros de usuarios y 
    //tabla de accesos --> login/logout/change Profile ...  
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
    //deletedAt: Date;
    //@Before/After-Insert/Update/Remove 
/*

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
        if (!this.name){
            this.name = 'invitado';
        }

        this.name = this.name
                    .replaceAll(' ', '_')
                    .toUpperCase();  
    }
}*/