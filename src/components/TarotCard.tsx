import { motion } from 'motion/react';
import { CARD_ILLUSTRATIONS } from './TarotCardIllustrations';

interface Card {
  id: number;
  name: string;
  image: string;
}

interface TarotCardProps {
  card: Card;
  isRevealed: boolean;
  onClick: () => void;
  index: number;
}

export function TarotCard({ card, isRevealed, onClick, index }: TarotCardProps) {
  return (
    <motion.div
      className="perspective-1000 cursor-pointer"
      onClick={onClick}
      whileHover={!isRevealed ? { y: -10 } : {}}
      animate={!isRevealed ? {
        y: [0, -8, 0],
      } : {}}
      transition={!isRevealed ? {
        duration: 3,
        repeat: Infinity,
        delay: index * 0.3,
        ease: "easeInOut"
      } : {}}
    >
      <motion.div
        className="relative w-48 h-72 md:w-56 md:h-80"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isRevealed ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
      >
        {/* Card Back */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-900 to-blue-900 border-4 border-white rounded-lg shadow-2xl shadow-purple-500/50 flex items-center justify-center overflow-hidden relative">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 200 300">
                {/* Center ornament */}
                <circle cx="100" cy="150" r="40" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="100" cy="150" r="50" fill="none" stroke="white" strokeWidth="1" />
                <circle cx="100" cy="150" r="30" fill="none" stroke="white" strokeWidth="1.5" />
                
                {/* Stars */}
                <path d="M100,120 L102,128 L110,130 L102,132 L100,140 L98,132 L90,130 L98,128 Z" fill="white" />
                <path d="M100,160 L102,168 L110,170 L102,172 L100,180 L98,172 L90,170 L98,168 Z" fill="white" />
                
                {/* Corner decorations */}
                <line x1="20" y1="20" x2="40" y2="20" stroke="white" strokeWidth="2" />
                <line x1="20" y1="20" x2="20" y2="40" stroke="white" strokeWidth="2" />
                
                <line x1="180" y1="20" x2="160" y2="20" stroke="white" strokeWidth="2" />
                <line x1="180" y1="20" x2="180" y2="40" stroke="white" strokeWidth="2" />
                
                <line x1="20" y1="280" x2="40" y2="280" stroke="white" strokeWidth="2" />
                <line x1="20" y1="280" x2="20" y2="260" stroke="white" strokeWidth="2" />
                
                <line x1="180" y1="280" x2="160" y2="280" stroke="white" strokeWidth="2" />
                <line x1="180" y1="280" x2="180" y2="260" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            
            {/* Center text */}
            <div className="relative z-10 text-center">
              <p className="text-white text-xl tracking-widest">MICHI</p>
              <p className="text-white/80 text-sm tracking-widest mt-1">TAROT</p>
            </div>

            {/* Animated glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20"
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            />
          </div>
        </div>

        {/* Card Front */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="w-full h-full bg-white border-4 border-black rounded-lg shadow-2xl shadow-purple-500/50 overflow-hidden">
            {/* Card illustration */}
            <div className="relative h-4/5 overflow-hidden flex items-center justify-center p-2">
              {CARD_ILLUSTRATIONS[card.id as keyof typeof CARD_ILLUSTRATIONS]}
            </div>
            
            {/* Card name */}
            <div className="h-1/5 bg-white border-t-4 border-black flex flex-col items-center justify-center px-4">
              <p className="text-black text-center tracking-wider">
                {card.id}
              </p>
              <p className="text-black text-center tracking-wider uppercase">
                {card.name}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Click hint */}
      {!isRevealed && (
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-purple-200/60 text-sm whitespace-nowrap"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          Toca para revelar
        </motion.div>
      )}
    </motion.div>
  );
}