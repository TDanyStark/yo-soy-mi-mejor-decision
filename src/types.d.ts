export type Type_URL_BASE = string;

export interface Opcion {
  respuesta: string;
  correcta: boolean;
}

export interface Situacion {
  titulo: string;
  pregunta: string;
  opciones: Opcion[];
}