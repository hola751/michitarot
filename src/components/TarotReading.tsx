import { useState, useEffect } from 'react';
import { TarotCard } from './TarotCard';
import { MichiTarotLogo } from './MichiTarotLogo';
import { motion } from 'motion/react';
import { RotateCcw, Sparkles } from 'lucide-react';

interface Card {
  id: number;
  name: string;
  image: string;
}

const TAROT_CARDS: Card[] = [
  { id: 0, name: "El Loco", image: "" },
  { id: 1, name: "El Mago", image: "" },
  { id: 2, name: "La Sacerdotisa", image: "" },
  { id: 3, name: "La Emperatriz", image: "" },
  { id: 4, name: "El Emperador", image: "" },
  { id: 5, name: "El Hierofante", image: "" },
  { id: 6, name: "Los Enamorados", image: "" },
  { id: 7, name: "El Carro", image: "" },
  { id: 8, name: "La Justicia", image: "" },
  { id: 9, name: "El Ermitaño", image: "" },
];

const ADVICES = [
  "confiar en su intuición y seguir adelante con determinación",
  "mantener el equilibrio entre razón y emoción",
  "abrazar el cambio con valentía y optimismo",
  "buscar la sabiduría interior antes de actuar",
  "mantener la fe en el proceso del universo",
  "honrar tanto su pasado como sus aspiraciones futuras",
  "tomar decisiones con el corazón abierto",
  "seguir su camino con coraje y autenticidad",
];

interface TarotReadingProps {
  onReset: () => void;
}

export function TarotReading({ onReset }: TarotReadingProps) {
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [revealedCards, setRevealedCards] = useState<boolean[]>([false, false, false]);
  const [allRevealed, setAllRevealed] = useState(false);

  useEffect(() => {
    // Select 3 unique random cards
    const shuffled = [...TAROT_CARDS].sort(() => Math.random() - 0.5);
    setSelectedCards(shuffled.slice(0, 3));
  }, []);

  const handleCardClick = (index: number) => {
    if (!revealedCards[index]) {
      const newRevealed = [...revealedCards];
      newRevealed[index] = true;
      setRevealedCards(newRevealed);

      // Check if all cards are revealed
      if (newRevealed.every(r => r)) {
        setTimeout(() => setAllRevealed(true), 800);
      }
    }
  };

  const getInterpretation = () => {
    if (selectedCards.length < 3) return "";
    
    const advice = ADVICES[Math.floor(Math.random() * ADVICES.length)];
    
    return `Esta tirada de MichiTarot revela que su Pasado (representado por ${selectedCards[0].name}) influye en su Presente (marcado por ${selectedCards[1].name}). Su Futuro potencial (indicado por ${selectedCards[2].name}) le aconseja ${advice}.`;
  };

  const positions = ["Pasado", "Presente", "Futuro"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0e9ff] from-[14.904%] via-[#63518d] via-[69.712%] to-[#000000] to-[96.635%] relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Constellation lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <line x1="10%" y1="20%" x2="25%" y2="15%" stroke="white" strokeWidth="0.5" />
          <line x1="25%" y1="15%" x2="30%" y2="30%" stroke="white" strokeWidth="0.5" />
          <line x1="70%" y1="25%" x2="85%" y2="20%" stroke="white" strokeWidth="0.5" />
          <line x1="85%" y1="20%" x2="90%" y2="35%" stroke="white" strokeWidth="0.5" />
          <line x1="15%" y1="70%" x2="20%" y2="85%" stroke="white" strokeWidth="0.5" />
          <line x1="80%" y1="75%" x2="88%" y2="80%" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="scale-75 md:scale-100">
            <MichiTarotLogo />
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-400/50" />
            <Sparkles className="w-3 h-3 text-purple-300" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400/50" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 max-w-5xl w-full">
          {selectedCards.map((card, index) => (
            <div key={card.id} className="flex flex-col items-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <TarotCard
                  card={card}
                  isRevealed={revealedCards[index]}
                  onClick={() => handleCardClick(index)}
                  index={index}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="text-center"
              >
                <p className="text-purple-200/80 tracking-wider">{positions[index]}</p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Interpretation */}
        {allRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl w-full mx-auto mb-8"
          >
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-400/30 rounded-lg p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-purple-300" />
                <h3 className="text-xl text-purple-100">Interpretación de la Tirada</h3>
                <Sparkles className="w-5 h-5 text-purple-300" />
              </div>
              <p className="text-purple-200/90 leading-relaxed">
                {getInterpretation()}
              </p>
            </div>
          </motion.div>
        )}

        {/* Reset button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onReset}
          className="group relative px-8 py-4 bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-400/30 rounded-lg overflow-hidden backdrop-blur-sm flex items-center gap-3"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <RotateCcw className="w-5 h-5 text-purple-100 group-hover:text-white transition-colors relative" />
          <span className="relative text-purple-100 group-hover:text-white transition-colors">
            Nueva Tirada
          </span>
        </motion.button>
      </div>
    </div>
  );
}