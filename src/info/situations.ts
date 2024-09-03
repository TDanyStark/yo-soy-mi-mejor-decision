import type { Situacion } from "@/types";


export const situations:Situacion[] = [
  {
    id: "situacion1",
    titulo: "Situación 1",
    pregunta: "*Sara y Juan están en una fiesta de fin de semestre.* Aunque aún no se conocen bien, deciden tener un encuentro sexual, pero no tienen preservativo.",
    opciones: [
      {
        id: "opcion1",
        respuesta: "Toman la decisión de posponer el encuentro para no correr riesgos.",
        correcta: true,
      },
      {
        id: "opcion2",
        respuesta: "La oportunidad no se puede desaprovechar. Sara cree que no está en la etapa fértil de su ciclo, así que no hay mayor riesgo. Luego puede tomar una píldora de emergencia.",
        correcta: false,
      },
    ]
  },
  {
    id: "situacion2",
    titulo: "Situación 2",
    pregunta: "*Natalia está en una relación con Federico.* Desde hace unos meses ella está usando anticonceptivos, según la recomendación de su médico. Sin embargo, como la relación es abierta, Natalia le pide a Federico que use preservativo, pero él se molesta y amenaza con terminar la relación.",
    opciones: [
      {
        id: "opcion1",
        respuesta: "Natalia le pone límites a Federico y le hace saber que el uso del preservativo no es negociable.",
        correcta: true,
      },
      {
        id: "opcion2",
        respuesta: "Natalia accede a tener relaciones sexuales con Federico sin preservativo porque, después de todo, está protegida contra un embarazo no deseado y no quiere perderlo.",
        correcta: false,
      },
    ]
  },
  {
    id: "situacion3",
    titulo: "Situación 3",
    pregunta: "*Valentina y Daniel son novios hace un par de meses.* Aunque ambos conocen toda la información sobre los métodos anticonceptivos para evitar un embarazo no deseado o una infección de trasmisión sexual, aún no han usado ninguno. Daniel dice que el coito interrumpido es eficaz.",
    opciones: [
      {
        id: "opcion1",
        respuesta: "Valentina y Daniel dejan que la relación fluya un poco más antes de decidir usar un método seguro, pues hasta ahora todo ha salido bien.",
        correcta: true,
      },
      {
        id: "opcion2",
        respuesta: "Valentina y Daniel deciden acudir al servicio de orientación en salud sexual y reproductiva de su universidad para elegir un método anticonceptivo seguro.",
        correcta: false,
      },
    ]
  }
];