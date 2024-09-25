// src/components/Question.tsx

import type { Situacion } from "@/types";
import { URL_BASE } from "@/config";

interface Props {
  selectedSituation: Situacion;
  handleReset: () => void;
  setModalIsOpen: (isOpen: boolean) => void;
  setResponse: (response: string) => void;
  handleNext: () => void;
  handlePrev: () => void;
  isLast: boolean;
}

const Question = ({
  selectedSituation,
  setModalIsOpen,
  setResponse,
  handleReset,
  handleNext,
  handlePrev,
  isLast,
}: Props) => {
  const handlerClick = (opcionId: string) => {
    const selectedAnswer = selectedSituation.opciones.find(
      (opcion) => opcion.id === opcionId
    );

    if (selectedAnswer?.correcta === true) {
      setModalIsOpen(true);
      setResponse("¡Correcto!");
    } else {
      setModalIsOpen(true);
      setResponse("¡Incorrecto!");
    }
  };

  const preguntaFormateada = selectedSituation.pregunta.replace(
    /\*(.*?)\*/g,
    "<strong>$1</strong>"
  );

  return (
    <div className="mt-14">
      <div className="text-azul-abbott-corp mb-6 flex justify-between select-none">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="cursor-pointer mr-4 h-8 w-8"
            onClick={handlePrev} // Usar handlePrev
            aria-label="Atrás"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          <div className="text-white inline-block w-fit cursor-pointer" onClick={handleReset}>
            <img
              src={URL_BASE + "img/home.webp"}
              alt="Go home"
              width="29"
              height="29"
            />
          </div>
        </div>
        <div>
          {!isLast && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="cursor-pointer ml-4 h-8 w-8"
              onClick={handleNext} // Usar handleNext
              aria-label="Adelante"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          )}
        </div>
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
          {selectedSituation.opciones.map((opcion) => (
            <li
              key={opcion.id} // Usar 'id' como clave
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
