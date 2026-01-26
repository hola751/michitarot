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
import Ocho from '@/assets/images/10_ocho_copas.png';
import Rueda from '@/assets/images/11_rueda.png';
import Cuatroc from '@/assets/images/12_cuatro_copas.png';
import CincoC from '@/assets/images/13_cinco_copas.png';
import Seisc from '@/assets/images/14_seis_copas.png';
import AsC from '@/assets/images/15_copas.png';
import DosC from '@/assets/images/16_dos_copas.png';
import TresC from '@/assets/images/17_tres_copas.png';
import CaballeroBastos from '@/assets/images/18_caballero_bastos.png';
import ReinaBastos from '@/assets/images/19_reina_bastos.png';
import ReyBastos from '@/assets/images/20_rey de bastos.png';
import NueveBastos from '@/assets/images/21_nueve_bastos.png';
import DiezBastos from '@/assets/images/22_diez_bastos.png';
import DosBastos from '@/assets/images/23_dos_bastos.png';
import LaMuerte from '@/assets/images/24_la_muerte.png';
import ElColgado from '@/assets/images/25_el_colgado.png';
import MichiTemplanza from '@/assets/images/26_templanza.png';
import Mundo from '@/assets/images/27_el_mundo.png';
import Sol from '@/assets/images/28_el sol.png';
import Estrella from '@/assets/images/29_la_estrella.png';
import TresBastos from '@/assets/images/30_tres_bastos.png';
import DiezCopas from '@/assets/images/31_Diez_copas.png';
import AsBastos from '@/assets/images/32_as_bastos.png';
import SotaCopas from '@/assets/images/33_Sota_copas.png';
import Luna from '@/assets/images/34_Luna.png';
import Juicio from '@/assets/images/35_juicio.png';
import LaTorrre from '@/assets/images/36_La_Torre.png';
import ReinaCopas from '@/assets/images/37_Reina_copas.png';
import Reicopas from '@/assets/images/38_Rey_copas.png';
import AsEspadas from '@/assets/images/39_as_espadas.png';
import DosEspadas from '@/assets/images/40_Dos_espadas.png';
import TresEspadas from '@/assets/images/41_Tres_espadas.png';
import CuatroEspadas from '@/assets/images/42_Cuatro_espadas.png';


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

 
 {
    id: 10,
    nombre: "8 de Copas",
    imagen: Ocho,
    significado_clave: "Abandono, búsqueda de sentido, dejar atrás.",
  },
  {
    id: 11,
    nombre: "La Rueda Michi",
    imagen: Rueda, 
    significado_clave: "Cambio, ciclos, suerte.",
  },

  {
    id: 12,
    nombre: "4 de Copas",
    imagen: Cuatroc,
    significado_clave: "Apatía, aburrimiento, meditación, desconexión.",
  },
  {
    id: 13,
    nombre: "5 de Copas",
    imagen: CincoC,
    significado_clave: "Pérdida, arrepentimiento, duelo, tristeza.",
  },
  {
    id: 14,
    nombre: "6 de Copas",
    imagen: Seisc,
    significado_clave: "Nostalgia, recuerdos, infancia, inocencia.",
  },
   {
    id: 15,
    nombre: "As de copas",
    imagen: AsC,
    significado_clave: "Amor, nuevos sentimientos, compasión.",
  },

  {
    id: 16,
    nombre: "2 de copas",
    imagen: DosC,
    significado_clave: "Amor, nuevos sentimientos, compasión.",
  },
   {
    id: 17,
    nombre: "3 de copas",
    imagen: TresC,
    significado_clave: "Amistad, comunidad, celebración grupal.",
  },
    {
    id: 18,
    nombre: "Michicaballero de Bastos",
    imagen: CaballeroBastos,
    significado_clave: "Acción, impulsividad, aventura, pasión.",
  },
    {
    id: 19,
    nombre: "Reina Michi de Bastos",
    imagen: ReinaBastos,
    significado_clave: "Confianza, calidez, determinación social.",
  },
   {
    id: 20,
    nombre: "Rey Michi de Bastos",
    imagen:ReyBastos,
    significado_clave: "Liderazgo, visión, emprendimiento, honor.",
  },
  {
    id: 21,
    nombre: "Nueve de Bastos",
    imagen:NueveBastos,
    significado_clave: "Resiliencia, coraje, persistencia, última defensa.",
  },
  {
    id: 22,
    nombre: "Diez de Bastos",
    imagen:DiezBastos,
    significado_clave: "Carga, responsabilidad, estrés, trabajo duro.",
  },
  {
    id: 23,
    nombre: "Dos de Bastos",
    imagen:DosBastos,
    significado_clave: "Planificación, decisiones futuras, progreso.",
  },
   {
    id: 24,
    nombre: "La MichiMuerte",
    imagen:LaMuerte,
    significado_clave: "Finales, transformación, transición.",
  },
     {
    id: 25,
    nombre: "EL Michicolgado",
    imagen:ElColgado,
    significado_clave: "Pausa, rendición, nueva perspectiva.",
  },
      {
    id: 26,
    nombre: "Michitemplanza",
    imagen:MichiTemplanza,
    significado_clave: "Equilibrio, paciencia, moderación.",
  },
     {
    id: 27,
    nombre: "Mundo Michi",
    imagen:Mundo,
    significado_clave: "Completitud, logro, viaje, totalidad.",
  },
    {
    id: 28,
    nombre: "El Sol",
    imagen:Sol,
    significado_clave: "Alegría, éxito, celebración, vitalidad.",
  },
   {
    id: 29,
    nombre: "La Estrella",
    imagen:Estrella,
    significado_clave: "Esperanza, fe, propósito, renovación.",
  },
   {
    id: 30,
    nombre: "Tres de Bastos",
    imagen:TresBastos,
    significado_clave: "Expansión, previsión, oportunidades de ultramar.",
  },
  {
    id: 31,
    nombre: "Diez de Copas",
    imagen:DiezCopas,
    significado_clave: "Felicidad familiar, armonía, dicha total.",
  },
  {
    id: 32,
    nombre: "As de Bastos",
    imagen:AsBastos,
    significado_clave: "Inspiración, nueva energía, potencial.",
  },
  {
    id: 33,
    nombre: "Sota de Copas",
    imagen:SotaCopas,
    significado_clave: "Mensaje creativo, curiosidad emocional, intuición.",
  },
   {
    id: 34,
    nombre: "Luna Michi",
    imagen:Luna,
    significado_clave: "Ilusión, miedo, ansiedad, subconsciente.",
  },
    {
    id: 35,
    nombre: "Juicio Michi",
    imagen:Juicio,
    significado_clave: "Renacimiento, llamada interior, perdón.",
  },
   {
    id: 36,
    nombre: "Torre Michi",
    imagen:LaTorrre,
    significado_clave: "Caos repentino, revelación, destrucción.",
  },
     {
    id: 37,
    nombre: "Reina de copas michi",
    imagen:ReinaCopas,
    significado_clave: "Compasión, calma, estabilidad emocional.",
  },
     {
    id: 38,
    nombre: "Rey de copas michi",
    imagen:Reicopas,
    significado_clave: "Control emocional, equilibrio, diplomacia.",
  },
      {
    id: 39,
    nombre: "As de Espadas Michi",
    imagen:AsEspadas,
    significado_clave: "Claridad mental, nueva idea, verdad.",
  },
      {
    id: 40,
    nombre: "Dos de Espadas Michi",
    imagen:DosEspadas,
    significado_clave: "Indecisión, bloqueo, evitar la verdad.",
  },
       {
    id: 41,
    nombre: "Tres de Espadas Michi",
    imagen:TresEspadas,
    significado_clave: "Corazón roto, dolor, separación, tristeza.",
  },
   {
    id: 42,
    nombre: "Cuatro de Espadas Michi",
    imagen:CuatroEspadas,
    significado_clave: "Descanso, recuperación, contemplación.",
  },
];


// 🎴 EXPORTAR TAMBIÉN EL TIPO (para TypeScript en React)
export type { CartaMichi };
