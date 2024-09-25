// src/components/Situations.tsx

import { situations } from "@/info/situations";
import { URL_BASE } from "@/config";

import { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Question from "./Question";
import Popup from "./Popup";

const URL_APP = URL_BASE + "app/";

const Situations = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const topGameSection = useRef<number>(0);
  const [modalisOpen, setModalIsOpen] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");

  useEffect(() => {
    topGameSection.current = document.getElementById("game")?.offsetTop || 0;
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const cardId = hash.replace("#", "");
      setSelectedCard(cardId);
    } else {
      setSelectedCard(null);
    }
  }, [location]);

  const selectedSituation = situations.find(
    (situation) => situation.id === selectedCard
  );

  const handleCardClick = (cardId: string) => {
    navigate(`${URL_APP}#${cardId}`);
    window.scrollTo({
      top: topGameSection.current,
      behavior: "smooth",
    });
  };

  const handleReset = () => {
    navigate(URL_APP);
    window.scrollTo({
      top: topGameSection.current,
      behavior: "smooth",
    });
  };

  // Función para manejar el botón "Adelante"
  const handleNext = () => {
    if (selectedSituation) {
      const currentIndex = situations.findIndex(
        (s) => s.id === selectedSituation.id
      );
      if (currentIndex < situations.length - 1) {
        const nextId = situations[currentIndex + 1].id;
        handleCardClick(nextId);
      }
    }
  };

  // Función para manejar el botón "Atrás"
  const handlePrev = () => {
    if (selectedSituation) {
      const currentIndex = situations.findIndex(
        (s) => s.id === selectedSituation.id
      );
      if (currentIndex > 0) {
        const prevId = situations[currentIndex - 1].id;
        handleCardClick(prevId);
      } else {
        // Si es la primera situación, resetear al componente principal
        handleReset();
      }
    }
  };

  // Determinar si la situación actual es la última
  const isLast =
    selectedSituation
      ? situations[situations.length - 1].id === selectedSituation.id
      : false;

  return (
    <div>
      {selectedCard === null && (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {situations.map((situation) => (
            <li
              key={situation.id} // Usar 'id' como clave
              className="bg-morado-abbott aspect-square rounded-3xl grid place-content-center p-4 cursor-pointer"
              onClick={() => handleCardClick(situation.id)}
            >
              <h3 className="font-brandon text-3xl lg:text-4xl uppercase font-bold">
                {situation.titulo}
              </h3>
            </li>
          ))}
        </ul>
      )}

      {selectedCard !== null && selectedSituation && (
        <Question
          selectedSituation={selectedSituation}
          handleReset={handleReset}
          setModalIsOpen={setModalIsOpen}
          setResponse={setResponse}
          handleNext={handleNext}
          handlePrev={handlePrev}
          isLast={isLast}
        />
      )}

      <Popup setModalIsOpen={setModalIsOpen} modalisOpen={modalisOpen}>
        {response}
      </Popup>
    </div>
  );
};

const GameSituations = () => (
  <Router>
    <Situations />
  </Router>
);

export default GameSituations;
