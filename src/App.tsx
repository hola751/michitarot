import { useState } from 'react';
import { TarotReading } from './components/TarotReading';
import { MichiTarotLogo } from './components/MichiTarotLogo';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [showReading, setShowReading] = useState(false);

  const handleStartReading = () => {
    setShowReading(true);
  };

  const handleReset = () => {
    setShowReading(false);
  };

  if (showReading) {
    return <TarotReading onReset={handleReset} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0e9ff] from-[14.904%] via-[#63518d] via-[69.712%] to-[#000000] to-[96.635%] relative overflow-hidden flex items-center justify-center">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        {Array.from({ length: 50 }).map((_, i) => (
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

        {/* Cosmic circles */}
        <motion.div
          className="absolute w-96 h-96 border border-purple-500/10 rounded-full"
          style={{ left: '10%', top: '20%' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-72 h-72 border border-blue-500/10 rounded-full"
          style={{ right: '15%', bottom: '25%' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-12 px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <MichiTarotLogo />
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400/50" />
            <Sparkles className="w-4 h-4 text-purple-300" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400/50" />
          </div>
        </motion.div>

        {/* Start button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStartReading}
          className="group relative px-12 py-6 bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-2 border-purple-400/30 rounded-lg overflow-hidden backdrop-blur-sm"
        >
          {/* Animated background */}
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
          
          <span className="relative text-2xl text-purple-100 tracking-wide group-hover:text-white transition-colors">
            Tirada de Michicartas
          </span>
          
          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 bg-purple-400/10 blur-xl" />
          </div>
        </motion.button>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-purple-200/60 text-center max-w-md"
        >
          Descubre los misterios del pasado, presente y futuro a través de las cartas místicas
        </motion.p>
      </div>
    </div>
  );
}