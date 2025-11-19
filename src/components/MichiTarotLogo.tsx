import imgAgrupar1 from "figma:asset/d62472b24df847f59b9e7157543abe166f613a25.png";

export function MichiTarotLogo() {
  return (
    <div className="relative h-[62px] w-[309px]">
      <img 
        alt="MichiTarot Logo" 
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
        src={imgAgrupar1} 
      />
    </div>
  );
}
