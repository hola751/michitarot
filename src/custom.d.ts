// Fuente/custom.d.ts

// Esta línea le dice a TypeScript que cualquier importación que termine
// en '.js' o '.jsx' es segura de usar, incluso si no tiene una
// declaración de tipo TypeScript (.d.ts) explícita.
declare module '*.js'; 
declare module '*.jsx'; 

// Esta línea ayuda a TypeScript a entender que los assets (imágenes)
// que importamos son cadenas de texto (sus rutas de archivo).
declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.jpg' {
  const value: string;
  export default value;
}