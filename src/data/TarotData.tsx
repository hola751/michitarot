// Fuente/data/TarotData.tsx
/**
 * @typedef {object} CartaMichi
 * @property {number} id - ID numérico de la carta.
 * @property {string} nombre - Nombre descriptivo de la carta.
 * @property {string} imagen - Ruta de la imagen importada (la variable).
 * @property {string} significado_clave - Breve significado.
 */



import Mago from '@/assets/images/01_el_mago.png';
import Sacerdotiza from '@/assets/images/02_la_suma_sacerdotiza.png'; 
import Emperatriz from '@/assets/images/03_la_emperatriz.png'; 
import Emperador from '@/assets/images/04_el_emperador.png';
import Papa from '@/assets/images/05_el_papa.png';
import Enamorados from '@/assets/images/06_los_enamorados.png';
import Carro from '@/assets/images/07_el_carro.png';
import Fuerza from '@/assets/images/08_La_Fuerza.png';
import Hermitaño from '@/assets/images/09_el_hermitaño.png';





export const michiArcanos = [
  {
    id: 1,
    nombre: "El Mago Michi",
    imagen: Mago,
    significado_clave: "Iniciativa, habilidad.",
  },
  {
    id: 2,
    nombre: "La Papisa Michi",
    imagen: Sacerdotiza,
    significado_clave: "Intuición, misterio.",
  },
  {
    id: 3,
    nombre: "La Emperatriz Michi",
    imagen: Emperatriz,
    significado_clave: "Abundancia, creatividad.",
  },
  {
    id: 4,
    nombre: "El Emperador Michi",
    imagen: Emperador,
    significado_clave: "Autoridad, estructura.",
  },
  {
    id: 5,
    nombre: "El Papa Michi",
    imagen: Papa,
    significado_clave: "Tradición, guía espiritual, enseñanza.",
  },
  {
    id: 6,
    nombre: "Los enamorados Michi",
    imagen: Enamorados,
    significado_clave: "Elecciones, relaciones, valores, unión.",
  },
  {
    id: 7,
    nombre: "El Carro Michi",
    imagen: Carro,
    significado_clave: "Voluntad, victoria, dirección, control.",
  },
  {
    id: 8,
    nombre: "La Fuerza Michi",
    imagen: Fuerza,
    significado_clave: "Coraje, autocontrol, paciencia, compasión.",
  },
  {
    id: 9,
    nombre: "El Hermitaño Michi",
    imagen: Hermitaño,
    significado_clave: "Introspección, soledad, búsqueda interior.",
  },
  // },
];

// 🎴 EXPORTAR TAMBIÉN EL TIPO (para TypeScript en React)
export type { CartaMichi };
