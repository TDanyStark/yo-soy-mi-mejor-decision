import type { Situacion } from "@/types";
import { useState } from "react";

interface Props {
  selectedSituation: Situacion;
  onReset: () => void;
}

const Question = ({ selectedSituation, onReset }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>();

  const handlerClick = (opcionId: string) => {
    const selectedAnswer = selectedSituation.opciones.find((opcion) => opcion.id === opcionId);

    if (
      selectedAnswer?.correcta === true 
    ) {
      alert("Respuesta correcta");
    } else {
      alert("Respuesta incorrecta");
    }
  };

  const preguntaFormateada = selectedSituation.pregunta.replace(
    /\*(.*?)\*/g,
    "<strong>$1</strong>"
  );

  return (
    <div className="mt-14">
      <div className="text-morado-abbott mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="cursor-pointer mr-4 h-8 w-8"
          onClick={onReset}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
      </div>
      <h2 className="font-brandon text-4xl lg:text-5xl uppercase font-bold text-morado-abbott">
        {selectedSituation.titulo}
      </h2>
      <div className="mt-8 p-6 bg-rosado-abbott">
        <p
          className="text-3xl"
          dangerouslySetInnerHTML={{ __html: preguntaFormateada }}
        />
      </div>
      <div>
        <ul className="mt-12 space-y-6">
          {selectedSituation.opciones.map((opcion, index) => (
            <li
              key={index}
              className="cursor-pointer p-6 bg-morado-abbott rounded-3xl"
              onClick={() => handlerClick(opcion.id)}
            >
              <p className="text-2xl">{opcion.respuesta}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Question;
