import { situations } from "@/info/situations";
import { URL_BASE } from "@/config";

import { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Question from "./Question";

const URL_APP = URL_BASE + "app/";

const Situations = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const topGameSection = useRef<number>(0);
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
    console.log({
      top: topGameSection.current,
      behavior: "smooth",
    });
    window.scrollTo({
      top: topGameSection.current,
      behavior: "smooth",
    });
  };

  const handleReset = () => {
    navigate(URL_APP);
    console.log({
      top: topGameSection.current,
      behavior: "smooth",
    });
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
        <Question selectedSituation={selectedSituation} onReset={handleReset} />
      )}
    </div>
  );
};

const GameSituations = () => (
  <Router>
    <Situations />
  </Router>
);

export default GameSituations;
