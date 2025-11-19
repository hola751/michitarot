// SVG illustrations for each tarot card in black and white cat theme
export const CARD_ILLUSTRATIONS = {
  0: ( // El Loco
    <svg viewBox="0 0 200 280" className="w-full h-full">
      <rect width="200" height="280" fill="white"/>
      
      {/* Sun in corner */}
      <circle cx="170" cy="40" r="20" fill="none" stroke="black" strokeWidth="2"/>
      <line x1="170" y1="25" x2="170" y2="15" stroke="black" strokeWidth="2"/>
      <line x1="185" y1="40" x2="195" y2="40" stroke="black" strokeWidth="2"/>
      <line x1="180" y1="30" x2="187" y2="23" stroke="black" strokeWidth="2"/>
      <line x1="180" y1="50" x2="187" y2="57" stroke="black" strokeWidth="2"/>
      
      {/* Butterfly */}
      <path d="M 130 50 Q 125 45 120 50 Q 115 55 120 60 Q 125 55 130 60 Q 135 55 130 50" fill="black"/>
      
      {/* Mountain outline */}
      <path d="M 20 200 L 50 150 L 80 180 L 60 200 Z" fill="none" stroke="black" strokeWidth="2"/>
      <path d="M 120 200 L 150 160 L 180 200 Z" fill="none" stroke="black" strokeWidth="2"/>
      
      {/* Cat silhouette on cliff */}
      <ellipse cx="100" cy="140" rx="15" ry="12" fill="black"/> {/* Head */}
      <circle cx="95" cy="138" r="3" fill="white"/> {/* Left eye */}
      <circle cx="105" cy="138" r="3" fill="white"/> {/* Right eye */}
      <path d="M 90 130 L 85 120 L 95 128 Z" fill="black"/> {/* Left ear */}
      <path d="M 110 130 L 115 120 L 105 128 Z" fill="black"/> {/* Right ear */}
      <ellipse cx="100" cy="165" rx="20" ry="25" fill="black"/> {/* Body */}
      <ellipse cx="90" cy="180" rx="6" ry="8" fill="black"/> {/* Left leg */}
      <ellipse cx="110" cy="180" rx="6" ry="8" fill="black"/> {/* Right leg */}
      <path d="M 118 165 Q 135 170 140 155" fill="none" stroke="black" strokeWidth="4"/> {/* Tail */}
      
      {/* Collar */}
      <ellipse cx="100" cy="153" rx="12" ry="4" fill="none" stroke="black" strokeWidth="2"/>
      <line x1="88" y1="153" x2="95" y2="160" stroke="black" strokeWidth="2"/>
      <line x1="112" y1="153" x2="105" y2="160" stroke="black" strokeWidth="2"/>
      
      {/* Rose in mouth */}
      <circle cx="115" cy="143" r="4" fill="none" stroke="black" strokeWidth="1.5"/>
      <path d="M 115 143 L 125 145" stroke="black" strokeWidth="1.5"/>
      <path d="M 122 143 L 123 138" stroke="black" strokeWidth="1"/>
      
      {/* Cliff */}
      <path d="M 60 190 L 140 190 L 150 210 L 50 210 Z" fill="none" stroke="black" strokeWidth="2"/>
    </svg>
  ),
  1: ( // El Mago
    <svg viewBox="0 0 200 280" className="w-full h-full">
      <rect width="200" height="280" fill="white"/>
      {/* Infinity symbol */}
      <path d="M 60 30 Q 70 20 80 30 Q 90 40 100 30 Q 110 20 120 30 Q 130 40 120 50 Q 110 60 100 50 Q 90 40 80 50 Q 70 60 60 50 Q 50 40 60 30 Z" fill="none" stroke="black" strokeWidth="2"/>
      
      {/* Cat sitting upright */}
      <ellipse cx="100" cy="100" rx="18" ry="15" fill="black"/> {/* Head */}
      <circle cx="93" cy="98" r="3" fill="white"/> {/* Left eye */}
      <circle cx="107" cy="98" r="3" fill="white"/> {/* Right eye */}
      <path d="M 85 92 L 78 80 L 90 90 Z" fill="black"/> {/* Left ear */}
      <path d="M 115 92 L 122 80 L 110 90 Z" fill="black"/> {/* Right ear */}
      
      {/* Body */}
      <ellipse cx="100" cy="140" rx="25" ry="35" fill="black"/>
      
      {/* Front paws */}
      <rect x="85" y="170" width="10" height="20" fill="black" rx="3"/>
      <rect x="105" y="170" width="10" height="20" fill="black" rx="3"/>
      
      {/* Wand/Staff */}
      <line x1="120" y1="120" x2="140" y2="60" stroke="black" strokeWidth="3"/>
      <circle cx="140" cy="55" r="5" fill="black"/>
      <path d="M 135 50 L 140 40 L 145 50 Z" fill="black"/>
      
      {/* Table with symbols */}
      <rect x="50" y="200" width="100" height="8" fill="none" stroke="black" strokeWidth="2"/>
      <circle cx="70" cy="210" r="5" fill="none" stroke="black" strokeWidth="1.5"/>
      <path d="M 90 205 L 95 215 L 100 205 M 95 210 L 95 220" stroke="black" strokeWidth="1.5" fill="none"/>
      <path d="M 115 205 L 125 215 M 125 205 L 115 215" stroke="black" strokeWidth="1.5"/>
    </svg>
  ),
  2: ( // La Sacerdotisa
    <svg viewBox="0 0 200 280" className="w-full h-full">
      <rect width="200" height="280" fill="white"/>
      {/* Moon crescent */}
      <path d="M 90 25 Q 85 40 90 55 Q 100 50 100 40 Q 100 30 90 25 Z" fill="none" stroke="black" strokeWidth="2"/>
      <path d="M 110 25 Q 100 30 100 40 Q 100 50 110 55 Q 115 40 110 25 Z" fill="black"/>
      
      {/* Pillars */}
      <rect x="30" y="80" width="15" height="120" fill="none" stroke="black" strokeWidth="2"/>
      <rect x="155" y="80" width="15" height="120" fill="none" stroke="black" strokeWidth="2"/>
      
      {/* Cat sitting regally */}
      <ellipse cx="100" cy="110" rx="20" ry="18" fill="black"/> {/* Head */}
      <circle cx="92" cy="108" r="4" fill="white"/> {/* Left eye */}
      <circle cx="108" cy="108" r="4" fill="white"/> {/* Right eye */}
      <path d="M 83 100 L 75 85 L 88 98 Z" fill="black"/> {/* Left ear */}
      <path d="M 117 100 L 125 85 L 112 98 Z" fill="black"/> {/* Right ear */}
      
      {/* Body draped */}
      <path d="M 80 125 Q 100 130 120 125 L 120 180 Q 100 185 80 180 Z" fill="black"/>
      
      {/* Scroll/Book */}
      <rect x="85" y="145" width="30" height="25" fill="white" stroke="black" strokeWidth="2"/>
      <line x1="90" y1="152" x2="110" y2="152" stroke="black" strokeWidth="1"/>
      <line x1="90" y1="158" x2="110" y2="158" stroke="black" strokeWidth="1"/>
      <line x1="90" y1="164" x2="110" y2="164" stroke="black" strokeWidth="1"/>
      
      {/* Stars */}
      <path d="M 50 50 L 52 56 L 58 58 L 52 60 L 50 66 L 48 60 L 42 58 L 48 56 Z" fill="black"/>
      <path d="M 150 50 L 152 56 L 158 58 L 152 60 L 150 66 L 148 60 L 142 58 L 148 56 Z" fill="black"/>
    </svg>
  ),
  3: ( // La Emperatriz
    <svg viewBox="0 0 200 280" className="w-full h-full">
      <rect width="200" height="280" fill="white"/>
      {/* Venus symbol */}
      <circle cx="100" cy="30" r="8" fill="none" stroke="black" strokeWidth="2"/>
      <line x1="100" y1="38" x2="100" y2="50" stroke="black" strokeWidth="2"/>
      <line x1="92" y1="45" x2="108" y2="45" stroke="black" strokeWidth="2"/>
      
      {/* Crown */}
      <path d="M 75 95 L 80 85 L 90 90 L 100 80 L 110 90 L 120 85 L 125 95 Z" fill="none" stroke="black" strokeWidth="2"/>
      <circle cx="100" cy="75" r="3" fill="black"/>
      
      {/* Cat on throne */}
      <ellipse cx="100" cy="115" rx="22" ry="20" fill="black"/> {/* Head */}
      <circle cx="92" cy="112" r="4" fill="white"/>
      <circle cx="108" cy="112" r="4" fill="white"/>
      <path d="M 82 105 L 73 92 L 87 103 Z" fill="black"/>
      <path d="M 118 105 L 127 92 L 113 103 Z" fill="black"/>
      
      {/* Body */}
      <ellipse cx="100" cy="160" rx="30" ry="40" fill="black"/>
      
      {/* Wheat/Nature elements */}
      <path d="M 50 140 Q 45 135 50 130 Q 55 135 50 140 M 45 135 L 40 120" stroke="black" strokeWidth="2" fill="none"/>
      <path d="M 150 140 Q 145 135 150 130 Q 155 135 150 140 M 155 135 L 160 120" stroke="black" strokeWidth="2" fill="none"/>
      
      {/* Heart symbol */}
      <path d="M 100 150 Q 95 145 90 150 Q 85 155 90 162 Q 95 168 100 173 Q 105 168 110 162 Q 115 155 110 150 Q 105 145 100 150 Z" fill="white" stroke="black" strokeWidth="1.5"/>
      
      {/* Throne */}
      <path d="M 65 185 L 65 210 M 135 185 L 135 210" stroke="black" strokeWidth="3"/>
      <rect x="70" y="200" width="60" height="15" fill="none" stroke="black" strokeWidth="2"/>
    </svg>
  ),
  4: ( // El Emperador
    <svg viewBox="0 0 200 280" className="w-full h-full">
      <rect width="200" height="280" fill="white"/>
      {/* Ram horns symbol */}
      <path d="M 80 30 Q 70 35 70 45 Q 75 40 80 40" fill="none" stroke="black" strokeWidth="2"/>
      <path d="M 120 30 Q 130 35 130 45 Q 125 40 120 40" fill="none" stroke="black" strokeWidth="2"/>
      <circle cx="75" cy="40" r="3" fill="black"/>
      <circle cx="125" cy="40" r="3" fill="black"/>
      
      {/* Crown */}
      <rect x="85" y="85" width="30" height="8" fill="none" stroke="black" strokeWidth="2"/>
      <path d="M 85 85 L 90 75 L 95 85 L 100 75 L 105 85 L 110 75 L 115 85" fill="none" stroke="black" strokeWidth="2"/>
      
      {/* Cat sitting on throne */}
      <ellipse cx="100" cy="115" rx="22" ry="20" fill="black"/>
      <circle cx="92" cy="112" r="4" fill="white"/>
      <circle cx="108" cy="112" r="4" fill="white"/>
      <path d="M 82 105 L 74 93 L 87 103 Z" fill="black"/>
      <path d="M 118 105 L 126 93 L 113 103 Z" fill="black"/>
      
      {/* Body */}
      <path d="M 75 130 L 75 190 L 125 190 L 125 130 Q 115 135 100 135 Q 85 135 75 130 Z" fill="black"/>
      
      {/* Orb/Scepter */}
      <line x1="70" y1="150" x2="50" y2="170" stroke="black" strokeWidth="3"/>
      <circle cx="47" cy="173" r="7" fill="none" stroke="black" strokeWidth="2"/>
      <path d="M 44 173 L 50 173 M 47 170 L 47 176" stroke="black" strokeWidth="1.5"/>
      
      {/* Shield */}
      <path d="M 130 140 L 150 145 L 150 170 L 140 180 L 130 170 Z" fill="none" stroke="black" strokeWidth="2"/>
      <path d="M 135 150 L 145 155 M 145 155 L 135 160" stroke="black" strokeWidth="2"/>
      
      {/* Throne */}
      <rect x="60" y="190" width="15" height="30" fill="none" stroke="black" strokeWidth="2"/>
      <rect x="125" y="190" width="15" height="30" fill="none" stroke="black" strokeWidth="2"/>
      <rect x="70" y="210" width="60" height="15" fill="none" stroke="black" strokeWidth="2"/>
    </svg>
  ),
  5: ( // El Hierofante
    <svg viewBox="0 0 200 280" className="w-full h-full">
      <rect width="200" height="280" fill="white"/>
      {/* Triple crown */}
      <path d="M 85 80 L 88 70 L 92 80 L 96 70 L 100 80 L 104 70 L 108 80 L 112 70 L 115 80" fill="none" stroke="black" strokeWidth="1.5"/>
      <rect x="85" y="80" width="30" height="5" fill="none" stroke="black" strokeWidth="1.5"/>
      <rect x="87" y="85" width="26" height="5" fill="none" stroke="black" strokeWidth="1.5"/>
      
      {/* Cat priest */}
      <ellipse cx="100" cy="115" rx="20" ry="18" fill="black"/>
      <circle cx="93" cy="113" r="3" fill="white"/>
      <circle cx="107" cy="113" r="3" fill="white"/>
      <path d="M 83 107 L 76 95 L 88 105 Z" fill="black"/>
      <path d="M 117 107 L 124 95 L 112 105 Z" fill="black"/>
      
      {/* Robes */}
      <path d="M 78 130 Q 100 135 122 130 L 125 200 Q 100 205 75 200 Z" fill="black"/>
      
      {/* Cross staff */}
      <line x1="60" y1="120" x2="60" y2="180" stroke="black" strokeWidth="3"/>
      <line x1="50" y1="130" x2="70" y2="130" stroke="black" strokeWidth="3"/>
      <line x1="55" y1="138" x2="65" y2="138" stroke="black" strokeWidth="2"/>
      <line x1="57" y1="145" x2="63" y2="145" stroke="black" strokeWidth="1.5"/>
      
      {/* Keys crossed */}
      <path d="M 130 160 L 145 145 M 145 145 L 148 148 L 145 151 L 142 148 L 145 145" stroke="black" strokeWidth="2" fill="none"/>
      <path d="M 145 160 L 130 145 M 130 145 L 127 148 L 130 151 L 133 148 L 130 145" stroke="black" strokeWidth="2" fill="none"/>
      
      {/* Followers - small cats */}
      <ellipse cx="70" cy="220" rx="8" ry="7" fill="black"/>
      <path d="M 65 215 L 62 210 L 67 214 Z" fill="black"/>
      <path d="M 75 215 L 78 210 L 73 214 Z" fill="black"/>
      
      <ellipse cx="130" cy="220" rx="8" ry="7" fill="black"/>
      <path d="M 125 215 L 122 210 L 127 214 Z" fill="black"/>
      <path d="M 135 215 L 138 210 L 133 214 Z" fill="black"/>
    </svg>
  ),
  6: ( // Los Enamorados
    <svg viewBox="0 0 200 280" className="w-full h-full">
      <rect width="200" height="280" fill="white"/>
      {/* Sun/Angel above */}
      <circle cx="100" cy="35" r="15" fill="none" stroke="black" strokeWidth="2"/>
      <path d="M 95 30 L 100 20 L 105 30" fill="none" stroke="black" strokeWidth="2"/>
      {/* Rays */}
      <line x1="100" y1="20" x2="100" y2="10" stroke="black" strokeWidth="1.5"/>
      <line x1="115" y1="25" x2="123" y2="17" stroke="black" strokeWidth="1.5"/>
      <line x1="85" y1="25" x2="77" y2="17" stroke="black" strokeWidth="1.5"/>
      
      {/* Two cats facing each other */}
      {/* Left cat */}
      <ellipse cx="70" cy="130" rx="18" ry="16" fill="black"/>
      <circle cx="75" cy="128" r="3" fill="white"/>
      <path d="M 56 122 L 50 110 L 62 120 Z" fill="black"/>
      <path d="M 68 122 L 70 108 L 73 120 Z" fill="black"/>
      <ellipse cx="70" cy="160" rx="20" ry="28" fill="black"/>
      
      {/* Right cat */}
      <ellipse cx="130" cy="130" rx="18" ry="16" fill="black"/>
      <circle cx="125" cy="128" r="3" fill="white"/>
      <path d="M 144 122 L 150 110 L 138 120 Z" fill="black"/>
      <path d="M 132 122 L 130 108 L 127 120 Z" fill="black"/>
      <ellipse cx="130" cy="160" rx="20" ry="28" fill="black"/>
      
      {/* Heart between them */}
      <path d="M 100 145 Q 95 140 90 145 Q 85 150 90 157 Q 95 163 100 168 Q 105 163 110 157 Q 115 150 110 145 Q 105 140 100 145 Z" fill="none" stroke="black" strokeWidth="2"/>
      
      {/* Tree/Apple tree */}
      <line x1="100" y1="190" x2="100" y2="230" stroke="black" strokeWidth="3"/>
      <circle cx="95" cy="195" r="8" fill="none" stroke="black" strokeWidth="1.5"/>
      <circle cx="105" cy="195" r="8" fill="none" stroke="black" strokeWidth="1.5"/>
      <circle cx="100" cy="185" r="8" fill="none" stroke="black" strokeWidth="1.5"/>
      {/* Apples */}
      <circle cx="98" cy="188" r="3" fill="black"/>
      <circle cx="92" cy="198" r="3" fill="black"/>
    </svg>
  ),
  7: ( // El Carro
    <svg viewBox="0 0 200 280" className="w-full h-full">
      <rect width="200" height="280" fill="white"/>
      {/* Star/Crown */}
      <path d="M 100 30 L 103 40 L 113 43 L 103 46 L 100 56 L 97 46 L 87 43 L 97 40 Z" fill="black"/>
      
      {/* Canopy */}
      <path d="M 60 90 Q 100 80 140 90" fill="none" stroke="black" strokeWidth="2"/>
      <line x1="70" y1="90" x2="70" y2="100" stroke="black" strokeWidth="2"/>
      <line x1="130" y1="90" x2="130" y2="100" stroke="black" strokeWidth="2"/>
      
      {/* Cat warrior on chariot */}
      <ellipse cx="100" cy="120" rx="20" ry="18" fill="black"/>
      <circle cx="93" cy="118" r="3" fill="white"/>
      <circle cx="107" cy="118" r="3" fill="white"/>
      <path d="M 83 112 L 76 100 L 88 110 Z" fill="black"/>
      <path d="M 117 112 L 124 100 L 112 110 Z" fill="black"/>
      
      {/* Armor/Body */}
      <rect x="80" y="135" width="40" height="40" fill="black" rx="5"/>
      <circle cx="100" cy="155" r="8" fill="white"/>
      
      {/* Shield */}
      <path d="M 88 145 L 92 142 L 92 150 Z" fill="white"/>
      
      {/* Chariot base */}
      <rect x="65" y="175" width="70" height="25" fill="none" stroke="black" strokeWidth="2"/>
      
      {/* Two sphinx cats pulling */}
      {/* Left sphinx */}
      <ellipse cx="55" cy="210" rx="12" ry="10" fill="black"/>
      <path d="M 47 205 L 43 197 L 51 203 Z" fill="black"/>
      <path d="M 63 205 L 67 197 L 59 203 Z" fill="black"/>
      <ellipse cx="55" cy="225" rx="10" ry="8" fill="black"/>
      
      {/* Right sphinx */}
      <ellipse cx="145" cy="210" rx="12" ry="10" fill="black"/>
      <path d="M 137 205 L 133 197 L 141 203 Z" fill="black"/>
      <path d="M 153 205 L 157 197 L 149 203 Z" fill="black"/>
      <ellipse cx="145" cy="225" rx="10" ry="8" fill="black"/>
      
      {/* Wheels */}
      <circle cx="75" cy="205" r="10" fill="none" stroke="black" strokeWidth="2"/>
      <circle cx="125" cy="205" r="10" fill="none" stroke="black" strokeWidth="2"/>
      <line x1="75" y1="195" x2="75" y2="215" stroke="black" strokeWidth="1"/>
      <line x1="65" y1="205" x2="85" y2="205" stroke="black" strokeWidth="1"/>
      <line x1="125" y1="195" x2="125" y2="215" stroke="black" strokeWidth="1"/>
      <line x1="115" y1="205" x2="135" y2="205" stroke="black" strokeWidth="1"/>
    </svg>
  ),
  8: ( // La Justicia
    <svg viewBox="0 0 200 280" className="w-full h-full">
      <rect width="200" height="280" fill="white"/>
      {/* Crown */}
      <rect x="85" y="80" width="30" height="6" fill="none" stroke="black" strokeWidth="2"/>
      <path d="M 85 80 L 90 70 L 95 80 L 100 70 L 105 80 L 110 70 L 115 80" fill="none" stroke="black" strokeWidth="2"/>
      
      {/* Pillars */}
      <rect x="40" y="90" width="10" height="100" fill="none" stroke="black" strokeWidth="2"/>
      <rect x="150" y="90" width="10" height="100" fill="none" stroke="black" strokeWidth="2"/>
      
      {/* Cat judge */}
      <ellipse cx="100" cy="115" rx="20" ry="18" fill="black"/>
      <circle cx="93" cy="113" r="3" fill="white"/>
      <circle cx="107" cy="113" r="3" fill="white"/>
      <path d="M 83 107 L 76 95 L 88 105 Z" fill="black"/>
      <path d="M 117 107 L 124 95 L 112 105 Z" fill="black"/>
      
      {/* Robes */}
      <path d="M 78 130 Q 100 135 122 130 L 125 200 Q 100 205 75 200 Z" fill="black"/>
      
      {/* Sword upright */}
      <line x1="70" y1="140" x2="70" y2="200" stroke="black" strokeWidth="3"/>
      <path d="M 60 140 L 80 140 L 75 130 L 65 130 Z" fill="black"/>
      <rect x="68" y="135" width="4" height="10" fill="black"/>
      
      {/* Scales */}
      <line x1="120" y1="145" x2="145" y2="145" stroke="black" strokeWidth="2"/>
      <line x1="132.5" y1="145" x2="132.5" y2="160" stroke="black" strokeWidth="2"/>
      {/* Left pan */}
      <path d="M 115 145 L 110 150 L 120 150 Z" fill="none" stroke="black" strokeWidth="1.5"/>
      {/* Right pan */}
      <path d="M 150 145 L 145 150 L 155 150 Z" fill="none" stroke="black" strokeWidth="1.5"/>
      
      {/* Veil/Curtain behind */}
      <path d="M 50 90 Q 55 100 50 110 Q 55 120 50 130" stroke="black" strokeWidth="1.5" fill="none"/>
      <path d="M 150 90 Q 145 100 150 110 Q 145 120 150 130" stroke="black" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  9: ( // El Ermitaño
    <svg viewBox="0 0 200 280" className="w-full h-full">
      <rect width="200" height="280" fill="white"/>
      {/* Mountains */}
      <path d="M 20 220 L 60 150 L 100 200 L 80 220 Z" fill="none" stroke="black" strokeWidth="2"/>
      <path d="M 100 220 L 140 160 L 180 220 Z" fill="none" stroke="black" strokeWidth="2"/>
      
      {/* Stars in sky */}
      <path d="M 40 40 L 42 46 L 48 48 L 42 50 L 40 56 L 38 50 L 32 48 L 38 46 Z" fill="black"/>
      <path d="M 160 50 L 162 56 L 168 58 L 162 60 L 160 66 L 158 60 L 152 58 L 158 56 Z" fill="black"/>
      <circle cx="80" cy="60" r="1.5" fill="black"/>
      <circle cx="120" cy="35" r="1.5" fill="black"/>
      
      {/* Cat hermit with lantern */}
      <ellipse cx="100" cy="120" rx="18" ry="16" fill="black"/>
      <circle cx="94" cy="118" r="3" fill="white"/>
      <circle cx="106" cy="118" r="3" fill="white"/>
      <path d="M 85 112 L 79 100 L 90 110 Z" fill="black"/>
      <path d="M 115 112 L 121 100 L 110 110 Z" fill="black"/>
      
      {/* Hooded robe */}
      <path d="M 82 132 Q 100 135 118 132 L 120 190 L 80 190 Z" fill="black"/>
      
      {/* Staff */}
      <line x1="75" y1="150" x2="65" y2="210" stroke="black" strokeWidth="3"/>
      <circle cx="63" cy="213" r="3" fill="black"/>
      
      {/* Lantern with light */}
      <rect x="120" y="140" width="20" height="25" fill="none" stroke="black" strokeWidth="2"/>
      <path d="M 120 140 L 125 135 L 135 135 L 140 140" fill="none" stroke="black" strokeWidth="2"/>
      <circle cx="130" cy="152" r="6" fill="yellow" stroke="black" strokeWidth="1.5"/>
      {/* Light rays */}
      <line x1="130" y1="152" x2="145" y2="145" stroke="black" strokeWidth="1" opacity="0.5"/>
      <line x1="130" y1="152" x2="150" y2="152" stroke="black" strokeWidth="1" opacity="0.5"/>
      <line x1="130" y1="152" x2="145" y2="160" stroke="black" strokeWidth="1" opacity="0.5"/>
      
      {/* Snow/Ground */}
      <path d="M 0 230 Q 50 225 100 230 Q 150 235 200 230" fill="none" stroke="black" strokeWidth="2"/>
    </svg>
  ),
};
