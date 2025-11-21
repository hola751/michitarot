// Fuente/App.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { michiArcanos, CartaMichi } from './data/TarotData.jsx';
import { generarLecturaIA } from './services/aiService'; 

// FUNCIÓN AUXILIAR: Selecciona 3 cartas únicas al azar
const obtenerTresCartas = (baraja: CartaMichi[]): CartaMichi[] => {
  const cartasSeleccionadas: CartaMichi[] = [];
  const copiaBaraja = [...baraja]; 
  
  if (copiaBaraja.length < 3) {
      console.error("No hay suficientes cartas para una tirada de tres.");
      return [];
  }

  for (let i = 0; i < 3; i++) {
    const indiceAleatorio = Math.floor(Math.random() * copiaBaraja.length);
    cartasSeleccionadas.push(copiaBaraja[indiceAleatorio]);
    copiaBaraja.splice(indiceAleatorio, 1);
  }
  return cartasSeleccionadas;
};

function App() {
  const [cartasTiradas, setCartasTiradas] = useState<CartaMichi[]>([]);
  const [lecturaIA, setLecturaIA] = useState("");
  const [cargando, setCargando] = useState(false);
  
  const posiciones = ["Pasado", "Presente", "Futuro"];
  
  // Función para tirar cartas
  const tirarCartas = () => {
    if (michiArcanos.length < 3) {
        alert("Necesitas al menos 3 cartas en tu TarotData.jsx para hacer la tirada.");
        return;
    }
    const nuevasCartas = obtenerTresCartas(michiArcanos);
    setCartasTiradas(nuevasCartas);
    setLecturaIA("");
    setCargando(false);
  };

  // Función para obtener la lectura de la IA
  const obtenerLectura = async () => {
      if (cartasTiradas.length !== 3) return;

      setCargando(true);
      setLecturaIA("");
      
      try {
          const textoLectura = await generarLecturaIA(cartasTiradas);
          setLecturaIA(textoLectura);
      } catch (error) {
          setLecturaIA("¡El oráculo Michi está dormido! Error en la conexión.");
          console.error("Error al obtener la lectura:", error);
      } finally {
          setCargando(false);
      }
  };

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
      
      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 max-w-5xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-8">🐱 Oráculo Michi 🐱</h1>
        
        {/* Botón para la tirada */}
        <button 
            onClick={tirarCartas}
            className="bg-purple-500 hover:bg-purple-600 font-medium py-3 px-6 rounded-lg transition-colors text-white mb-8"
        >
            🎴 Tirar 3 Cartas Michi
        </button>

        {/* Mostrar las cartas tiradas */}
        {cartasTiradas.length === 3 && (
          <div className="flex justify-around w-full max-w-3xl mt-8 gap-4">
              {cartasTiradas.map((carta, index) => (
                <div key={carta.id} className="w-40 p-4 bg-white/10 border border-purple-400/30 rounded-lg shadow-2xl shadow-purple-500/50 flex flex-col items-center gap-2 backdrop-blur-sm">
                  <h2 className="text-sm uppercase text-purple-200/90 tracking-widest">{posiciones[index]}</h2>
                  <img 
                    src={carta.imagen} 
                    alt={carta.nombre} 
                    className="w-full h-auto border-4 border-white rounded-lg" 
                    style={{ maxWidth: '150px' }}
                  />
                  <p className="font-medium text-white tracking-wide text-sm">{carta.nombre}</p>
                </div>
              ))}
          </div>
        )}
        
        {/* Botón para la lectura de IA */}
        {cartasTiradas.length === 3 && ( 
            <button 
                onClick={obtenerLectura}
                disabled={cargando} 
                className={`mt-8 py-3 px-8 rounded-lg font-medium transition-colors ${
                  cargando 
                    ? 'bg-gray-500 text-white cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
            >
                {cargando ? '⏳ Miau-cifrando el destino...' : '✨ Obtener Lectura Michi'}
            </button>
        )}

        {/* Área de la Lectura de IA */}
        <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg w-full max-w-3xl">
            <h2 className="text-xl font-medium mb-3 text-white">✨ Lectura del Oráculo Michi ✨</h2>
            <p className="text-white/80 whitespace-pre-wrap leading-relaxed" style={{ minHeight: '120px', textAlign: 'left' }}>
                {cargando 
                  ? '🌙 El oráculo Michi está meditando...' 
                  : lecturaIA || (cartasTiradas.length === 3 
                      ? `Haz clic en "Obtener Lectura Michi" para que el oráculo hable.` 
                      : "Tira las cartas para empezar."
                    )
                }
            </p>
        </div>
      </div>
    </div>
  );
}

export default App;