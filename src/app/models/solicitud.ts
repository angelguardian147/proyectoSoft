import { CoAutor } from "./coautor";
import { Colaborador } from "./colaborador";
import { Memoria } from "./memoria";
import { ObraInv } from "./obraInv";


export class Solicitud {
    titulo!: string;
    area!: string;
    subarea!: string;
    coautorA!: CoAutor;
    coautorB!: CoAutor;
    colaboradorA!: Colaborador;
    colaboradorB!: Colaborador;
    tipo!: string;
    obraInv!: ObraInv;
    memoria!: Memoria;
    publico!: string;
    formato!: string;
    paginas!: number;
    graficos!: number;
    fotosBN!: number;
    fotosC!: number;
    tablas!: number;
    pregunta1!: string;
    pregunta2!: string;
    pregunta3!: string;
    pregunta4!: string;
    pregunta5!: string;
}