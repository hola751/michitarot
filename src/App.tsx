import React, { useState, useEffect } from 'react';
import logo from './assets/images/michi-tarot-logo.png';
import { michiArcanos, CartaMichi } from './data/TarotData.jsx';
import { generarLecturaIA } from './services/aiService';

// Función auxiliar para obtener 3 cartas al azar
const obtenerTresCartas = (baraja: CartaMichi[]): CartaMichi[] => {
  const cartasSeleccionadas: CartaMichi[] = [];
  const copiaBaraja = [...baraja];
  
  if (copiaBaraja.length < 3) {
    console.error("No hay suficientes cartas");
    return [];
  }

  for (let i = 0; i < 3; i++) {
    const indiceAleatorio = Math.floor(Math.random() * copiaBaraja.length);
    cartasSeleccionadas.push(copiaBaraja[indiceAleatorio]);
    copiaBaraja.splice(indiceAleatorio, 1);
  }
  return cartasSeleccionadas;
};

// Componente para estrella flotante animada
const Estrella = ({ delay, left, top }: { delay: number; left: number; top: number }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${left}%`,
        top: `${top}%`,
        width: '4px',
        height: '4px',
        backgroundColor: 'white',
        borderRadius: '50%',
        opacity: 0.6,
        animation: `parpadeo ${3 + Math.random() * 2}s ease-in-out ${delay}s infinite`,
      }}
    />
  );
};

function App() {
  const [cartasTiradas, setCartasTiradas] = useState<CartaMichi[]>([]);
  const [lecturaIA, setLecturaIA] = useState("");
  const [cargando, setCargando] = useState(false);
  const [estrellas, setEstrellas] = useState<Array<{ id: number; left: number; top: number; delay: number }>>([]);

  const posiciones = ["Pasado", "Presente", "Futuro"];

  // Generar estrellas aleatorias al montar el componente
  useEffect(() => {
    const nuevasEstrellas = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setEstrellas(nuevasEstrellas);
  }, []);

  const tirarCartas = () => {
    if (michiArcanos.length < 3) {
      alert("Necesitas al menos 3 cartas en tu TarotData.jsx");
      return;
    }
    const nuevasCartas = obtenerTresCartas(michiArcanos);
    setCartasTiradas(nuevasCartas);
    setLecturaIA("");
    setCargando(false);
  };

  const obtenerLectura = async () => {
    if (cartasTiradas.length !== 3) return;

    setCargando(true);
    setLecturaIA("");
    
    try {
      const textoLectura = await generarLecturaIA(cartasTiradas);
      setLecturaIA(textoLectura);
    } catch (error) {
      setLecturaIA("¡El oráculo Michi está dormido! Error en la conexión.");
      console.error("Error:", error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #d8bff4ff 10%, #3e2a6bff 50%, #000000 96.635%)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Georgia', serif",
    }}>
      <style>{`
        @keyframes parpadeo {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes girar {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Fondo con elementos cósmicos */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}>
        {/* Estrellas con componente */}
        {estrellas.map(estrella => (
          <Estrella
            key={estrella.id}
            left={estrella.left}
            top={estrella.top}
            delay={estrella.delay}
          />
        ))}

        {/* Círculos rotativos */}
        <div style={{
          position: 'absolute',
          width: '384px',
          height: '384px',
          border: '1px solid rgba(168, 85, 247, 0.1)',
          borderRadius: '50%',
          left: '10%',
          top: '20%',
          animation: 'girar 30s linear infinite',
        }} />
        
        <div style={{
          position: 'absolute',
          width: '288px',
          height: '288px',
          border: '1px solid rgba(59, 130, 246, 0.1)',
          borderRadius: '50%',
          right: '15%',
          bottom: '25%',
          animation: 'girar 25s linear reverse infinite',
        }} />

        {/* Líneas de constelación */}
        <svg style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.2,
        }}>
          <line x1="10%" y1="20%" x2="25%" y2="15%" stroke="white" strokeWidth="0.5" />
          <line x1="25%" y1="15%" x2="30%" y2="30%" stroke="white" strokeWidth="0.5" />
          <line x1="70%" y1="25%" x2="85%" y2="20%" stroke="white" strokeWidth="0.5" />
          <line x1="85%" y1="20%" x2="90%" y2="35%" stroke="white" strokeWidth="0.5" />
          <line x1="15%" y1="70%" x2="20%" y2="85%" stroke="white" strokeWidth="0.5" />
          <line x1="80%" y1="75%" x2="88%" y2="80%" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Contenido principal */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px',
        maxWidth: '80rem',
        margin: '0 auto',
        color: 'white',
        minHeight: '100vh',
      }}>

        {/* Logo */}
        <img src={logo} alt="Logo MichiTarot" style={{
          width: '300px',
          height: 'auto',
          marginBottom: '20px',
          filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))'
        }} />

        {/* Subtítulo */}
        <p style={{
          fontSize: '1.125rem',
          marginBottom: '32px',
          color: 'rgba(255, 255, 255, 0.8)',
          textAlign: 'center',
          maxWidth: '500px',
          lineHeight: '1.6',
        }}>
          Descubre los misterios del pasado, presente y futuro a través de las cartas místicas de los michis
        </p>

        {/* Botón principal */}
        <button
          onClick={tirarCartas}
          style={{
            background: 'linear-gradient(90deg, rgba(168,85,247,0.3), rgba(59,130,246,0.3))',
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            padding: '15px 40px',
            borderRadius: '12px',
            border: '2px solid rgba(168, 85, 247, 0.5)',
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
            transition: 'all 0.3s ease',
            marginBottom: '48px',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(168, 85, 247, 0.6)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(168, 85, 247, 0.3)';
          }}
        >
          Tirada de Michicartas
        </button>

        {/* Mostrar cartas */}
        {cartasTiradas.length === 3 && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            maxWidth: '1000px',
            gap: '32px',
            marginBottom: '48px',
            flexWrap: 'wrap',
          }}>
            {cartasTiradas.map((carta, index) => (
              <div
                key={carta.id}
                style={{
                  width: '240px',
                  padding: '20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: '0 0 30px rgba(168, 85, 247, 0.2)',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 50px rgba(168, 85, 247, 0.5)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px rgba(168, 85, 247, 0.2)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                }}
              >
                <h3 style={{
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  color: 'rgba(216, 180, 254, 0.9)',
                  letterSpacing: '2px',
                  fontWeight: 'bold',
                }}>
                  {posiciones[index]}
                </h3>
                <img
                  src={carta.imagen}
                  alt={carta.nombre}
                  style={{
                    width: '100%',
                    maxWidth: '180px',
                    height: 'auto',
                    borderRadius: '8px',
                    border: '3px solid white',
                  }}
                />
                <p style={{
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  textAlign: 'center',
                  color: 'white',
                }}>
                  {carta.nombre}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Área de lectura - ANTES QUE EL BOTÓN */}
        {cartasTiradas.length === 3 && (
          <div style={{
            marginTop: '32px',
            padding: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '700px',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            marginBottom: '24px',
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '16px',
              textAlign: 'center',
              color: '#d8b4fe',
            }}>
              ✨ Interpretación de la Tirada ✨
            </h2>
            <p style={{
              minHeight: '120px',
              color: 'rgba(255, 255, 255, 0.8)',
              whiteSpace: 'pre-wrap',
              lineHeight: '1.8',
              textAlign: 'left',
              fontStyle: 'normal',
              fontSize: '0.95rem',
            }}>
              {cargando
                ? '🌙 El oráculo Michi está meditando...'
                : lecturaIA ||
                  'Haz clic en "Interpretación del Oráculo Michi" para que el oráculo revele los secretos de tus cartas.'}
            </p>
          </div>
        )}

        {/* Botón de lectura de IA - DESPUÉS DE LA LECTURA */}
        {cartasTiradas.length === 3 && (
          <button
            onClick={obtenerLectura}
            disabled={cargando}
            style={{
              backgroundColor: cargando ? '#6b7280' : '#9333ea',
              color: 'white',
              padding: '16px 40px',
              fontSize: '1rem',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '8px',
              cursor: cargando ? 'not-allowed' : 'pointer',
              marginBottom: '32px',
              transition: 'all 0.3s ease',
              boxShadow: `0 0 20px ${cargando ? 'rgba(107, 114, 128, 0.4)' : 'rgba(147, 51, 234, 0.4)'}`,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseOver={(e) => {
              if (!cargando) {
                (e.target as HTMLButtonElement).style.backgroundColor = '#7e22ce';
                (e.target as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(147, 51, 234, 0.8)';
              }
            }}
            onMouseOut={(e) => {
              if (!cargando) {
                (e.target as HTMLButtonElement).style.backgroundColor = '#9333ea';
                (e.target as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(147, 51, 234, 0.4)';
              }
            }}
          >
            
            {cargando ? 'El oráculo medita...' : 'Interpretación del Oráculo Michi'}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;