export type Type_URL_BASE = string;

export interface Opcion {
  id: string;
  respuesta: string;
  correcta: boolean;
}

export interface Situacion {
  id: string;
  titulo: string;
  pregunta: string;
  opciones: Opcion[];
}