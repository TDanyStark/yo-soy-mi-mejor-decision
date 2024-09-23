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

  return (
    <div>
      {selectedCard === null && (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {situations.map((situation, index) => (
            <li
              key={index}
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
        <Question selectedSituation={selectedSituation} onReset={handleReset} setModalIsOpen={setModalIsOpen} setResponse={setResponse} />
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
