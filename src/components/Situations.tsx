import { situations } from "@/info/situations";
import { URL_BASE } from "@/config";


import {useState, useEffect} from 'react';
import { BrowserRouter as Router, useNavigate, useLocation } from 'react-router-dom';

const CardComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const cardId = hash.replace('#', '');
      setSelectedCard(cardId);
    } else {
      setSelectedCard(null);
    }
  }, [location]);

  const handleCardClick = (cardId: string) => {
    setSelectedCard(cardId);
    navigate(`${URL_BASE}app/#${cardId}`);
  };

  const handleReset = () => {
    setSelectedCard(null);
    navigate(URL_BASE + "app/");
  };

  return (
    <div>
      {selectedCard === null && (
        <div className="card-container">
          <div className="card" onClick={() => handleCardClick('card1')}>
            Card 1
          </div>
          <div className="card" onClick={() => handleCardClick('card2')}>
            Card 2
          </div>
          <div className="card" onClick={() => handleCardClick('card3')}>
            Card 3
          </div>
        </div>
      )}

      {selectedCard === 'card1' && <div className="card">Card 1 Content</div>}
      {selectedCard === 'card2' && <div className="card">Card 2 Content</div>}
      {selectedCard === 'card3' && <div className="card">Card 3 Content</div>}

      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

const Situations = () => (
  <Router>
    <CardComponent />
  </Router>
);


// const Situations = () => {
//   const navigate = useNavigate();
//   const location = useLocation();


//   return (
//     <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//       {situations.map((situation, index) => (
//         <li
//           key={index}
//           className="bg-morado-abbott aspect-square rounded-3xl grid place-content-center p-4 cursor-pointer"
//         >
//           <h3 className="font-brandon text-3xl lg:text-4xl uppercase font-bold">
//             {situation.titulo}
//           </h3>
//         </li>
//       ))}
//     </ul>
//   );
// };

export default Situations;
