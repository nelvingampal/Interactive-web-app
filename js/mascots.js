/* ============================================================
   FILIPINO PALENGKE MASCOTS & PATTERNS (SVG ASSETS)
   Aling Nena (Tindera) & Kuya Juan (Mamimili)
   100% Vector, Offline, Crisp at any resolution
   ============================================================ */

const Mascots = {
  // Aling Nena: Friendly palengke tindera
  // Poses: 'default' (welcoming/presenting), 'happy' (thumbs up/success), 'thinking' (explaining/pointing)
  alingNena: (pose = 'default', size = 120) => {
    return `
    <svg class="mascot-svg aling-nena mascot-${pose}" width="${size}" height="${size}" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Aling Nena Tindera">
      <defs>
        <radialGradient id="nenaSkin" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#FCD34D"/>
          <stop offset="100%" stop-color="#F59E0B"/>
        </radialGradient>
        <linearGradient id="nenaApron" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#EF4444"/>
          <stop offset="100%" stop-color="#B91C1C"/>
        </linearGradient>
        <linearGradient id="nenaBandana" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#F59E0B"/>
          <stop offset="100%" stop-color="#D97706"/>
        </linearGradient>
        <filter id="mascotShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.25"/>
        </filter>
      </defs>

      <g filter="url(#mascotShadow)">
        <!-- Body / Torso -->
        <path d="M45 125 C45 95, 115 95, 115 125 L125 160 L35 160 Z" fill="#475569"/>
        <!-- Red Palengke Apron -->
        <path d="M52 105 L108 105 L116 160 L44 160 Z" fill="url(#nenaApron)"/>
        <!-- Apron Straps -->
        <path d="M60 95 L65 105 M100 95 L95 105" stroke="#FEE2E2" stroke-width="4" stroke-linecap="round"/>
        <!-- Apron Pocket with ₱ Symbol -->
        <rect x="62" y="122" width="36" height="26" rx="4" fill="#991B1B" stroke="#FEF08A" stroke-width="2"/>
        <text x="80" y="141" font-family="'Space Grotesk',sans-serif" font-size="16" font-weight="900" fill="#FEF08A" text-anchor="middle">₱</text>

        <!-- Arms & Hands -->
        ${pose === 'happy' ? `
          <!-- Thumbs up gesture -->
          <path d="M46 112 C30 115, 25 100, 24 88 C24 80, 36 78, 38 88 L46 102" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
          <path d="M114 112 C130 115, 135 100, 136 88 C136 80, 124 78, 122 88 L114 102" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
          <circle cx="28" cy="82" r="7" fill="#FCD34D" stroke="#B45309" stroke-width="1.5"/>
          <circle cx="132" cy="82" r="7" fill="#FCD34D" stroke="#B45309" stroke-width="1.5"/>
        ` : pose === 'thinking' ? `
          <!-- Hand pointing up to lesson -->
          <path d="M46 112 C36 120, 28 135, 36 142" stroke="#F59E0B" stroke-width="10" stroke-linecap="round"/>
          <path d="M114 112 C125 100, 132 80, 132 65 L132 55" stroke="#F59E0B" stroke-width="10" stroke-linecap="round"/>
          <circle cx="132" cy="52" r="6" fill="#FCD34D"/>
        ` : `
          <!-- Welcoming open palms -->
          <path d="M46 110 C32 115, 20 128, 26 138 C32 144, 42 135, 48 122" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
          <path d="M114 110 C128 115, 140 128, 134 138 C128 144, 118 135, 112 122" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
        `}

        <!-- Neck -->
        <rect x="72" y="80" width="16" height="18" rx="4" fill="#F59E0B"/>

        <!-- Head / Face -->
        <ellipse cx="80" cy="58" rx="28" ry="30" fill="url(#nenaSkin)"/>

        <!-- Hair Bun / Bandana -->
        <circle cx="80" cy="22" r="16" fill="#1E293B"/>
        <path d="M52 48 C52 24, 108 24, 108 48 C108 34, 52 34, 52 48 Z" fill="#1E293B"/>
        <!-- Orange/Yellow Palengke Bandana / Visor -->
        <path d="M50 42 Q80 28 110 42 L112 50 Q80 36 48 50 Z" fill="url(#nenaBandana)" stroke="#B45309" stroke-width="1.5"/>
        <circle cx="80" cy="36" r="3" fill="#FFF"/>

        <!-- Eyes -->
        <ellipse cx="69" cy="56" rx="4" ry="5.5" fill="#1E293B"/>
        <ellipse cx="91" cy="56" rx="4" ry="5.5" fill="#1E293B"/>
        <circle cx="67.5" cy="54" r="1.5" fill="#FFF"/>
        <circle cx="89.5" cy="54" r="1.5" fill="#FFF"/>
        <!-- Eyebrows -->
        <path d="M64 48 Q70 45 75 48" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M85 48 Q90 45 96 48" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round" fill="none"/>

        <!-- Rosy Cheeks -->
        <ellipse cx="63" cy="65" rx="5" ry="3" fill="#F87171" opacity="0.6"/>
        <ellipse cx="97" cy="65" rx="5" ry="3" fill="#F87171" opacity="0.6"/>

        <!-- Nose -->
        <path d="M78 58 Q80 63 83 62" stroke="#B45309" stroke-width="2" stroke-linecap="round" fill="none"/>

        <!-- Warm Smile -->
        <path d="M70 68 Q80 78 90 68" stroke="#991B1B" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M72 69 Q80 76 88 69 Z" fill="#FFF"/>
      </g>
    </svg>`;
  },

  // Kuya Juan: Discerning student / consumer with bayong bag
  // Poses: 'default' (shopping/holding coin), 'happy' (celebrating), 'curious' (questioning)
  kuyaJuan: (pose = 'default', size = 120) => {
    return `
    <svg class="mascot-svg kuya-juan mascot-${pose}" width="${size}" height="${size}" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Kuya Juan Mamimili">
      <defs>
        <radialGradient id="juanSkin" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#FCD34D"/>
          <stop offset="100%" stop-color="#D97706"/>
        </radialGradient>
        <linearGradient id="juanShirt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0284C7"/>
          <stop offset="100%" stop-color="#0369A1"/>
        </linearGradient>
        <pattern id="bayongWeaveSmall" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M0 0 L8 8 M8 0 L0 8" stroke="#78350F" stroke-width="1.2"/>
        </pattern>
      </defs>

      <g filter="url(#mascotShadow)">
        <!-- Body / Shirt (Blue Polo) -->
        <path d="M45 125 C45 96, 115 96, 115 125 L125 160 L35 160 Z" fill="url(#juanShirt)"/>
        <!-- Polo Collar -->
        <path d="M68 98 L80 112 L72 120 L58 102 Z" fill="#38BDF8"/>
        <path d="M92 98 L80 112 L88 120 L102 102 Z" fill="#38BDF8"/>

        <!-- Woven Bayong Bag on Left Arm -->
        <g transform="translate(18, 105)">
          <!-- Bayong Handle -->
          <path d="M12 0 C12 -14, 28 -14, 28 0" stroke="#92400E" stroke-width="3" fill="none"/>
          <!-- Bayong Body -->
          <rect x="4" y="0" width="32" height="38" rx="4" fill="#D97706" stroke="#78350F" stroke-width="2"/>
          <rect x="4" y="0" width="32" height="38" rx="4" fill="url(#bayongWeaveSmall)" opacity="0.6"/>
          <!-- Produce peeking out (Talong & Carrots) -->
          <ellipse cx="14" cy="2" rx="4" ry="7" fill="#7C3AED" transform="rotate(-15 14 2)"/>
          <path d="M24 4 L30 -6 L34 2 Z" fill="#F97316"/>
        </g>

        <!-- Right Arm & Hand -->
        ${pose === 'happy' ? `
          <!-- Waving hand / cheering -->
          <path d="M115 110 C130 95, 138 78, 136 60" stroke="#D97706" stroke-width="10" stroke-linecap="round"/>
          <circle cx="136" cy="56" r="7" fill="#FCD34D"/>
        ` : pose === 'curious' ? `
          <!-- Hand scratching chin / thinking -->
          <path d="M115 115 C125 110, 126 95, 115 82 L102 80" stroke="#D97706" stroke-width="9" stroke-linecap="round"/>
          <circle cx="100" cy="78" r="6" fill="#FCD34D"/>
        ` : `
          <!-- Holding glowing ₱ Coin -->
          <path d="M114 112 C125 118, 134 118, 138 108" stroke="#D97706" stroke-width="9" stroke-linecap="round"/>
          <!-- Gold ₱ Coin -->
          <circle cx="140" cy="102" r="14" fill="#FBBF24" stroke="#B45309" stroke-width="2.5"/>
          <text x="140" y="108" font-family="'Space Grotesk',sans-serif" font-size="14" font-weight="900" fill="#78350F" text-anchor="middle">₱</text>
        `}

        <!-- Neck -->
        <rect x="72" y="80" width="16" height="18" rx="4" fill="#D97706"/>

        <!-- Head / Face -->
        <ellipse cx="80" cy="58" rx="27" ry="29" fill="url(#juanSkin)"/>

        <!-- Black Hair -->
        <path d="M52 46 C52 22, 108 22, 108 46 C98 34, 62 34, 52 46 Z" fill="#0F172A"/>
        <path d="M54 44 Q80 26 106 42 Q90 32 60 40 Z" fill="#334155"/>

        <!-- Eyes -->
        <ellipse cx="69" cy="56" rx="4" ry="5.5" fill="#0F172A"/>
        <ellipse cx="91" cy="56" rx="4" ry="5.5" fill="#0F172A"/>
        <circle cx="70.5" cy="54" r="1.5" fill="#FFF"/>
        <circle cx="92.5" cy="54" r="1.5" fill="#FFF"/>

        <!-- Eyebrows -->
        ${pose === 'curious' ? `
          <path d="M64 45 Q70 42 76 46" stroke="#0F172A" stroke-width="2.5" stroke-linecap="round" fill="none"/>
          <path d="M84 49 Q90 44 96 46" stroke="#0F172A" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        ` : `
          <path d="M64 48 Q70 44 76 47" stroke="#0F172A" stroke-width="2.5" stroke-linecap="round" fill="none"/>
          <path d="M84 47 Q90 44 96 48" stroke="#0F172A" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        `}

        <!-- Nose -->
        <path d="M78 58 Q80 63 83 62" stroke="#92400E" stroke-width="2" stroke-linecap="round" fill="none"/>

        <!-- Friendly Smile -->
        <path d="M71 68 Q80 78 89 68" stroke="#0F172A" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      </g>
    </svg>`;
  },

  // Speech Bubble component generator for mascots
  speechBubble: (text, direction = 'left', color = 'yellow') => {
    const isLeft = direction === 'left';
    return `
    <div class="mascot-bubble bubble-${direction} bubble-${color}">
      <span class="bubble-text">${text}</span>
    </div>`;
  },

  // 3D Palengke Sack of Rice & Fresh Tomatoes Crate (Left Market Prop)
  leftMarketPropSVG: () => `
    <svg width="140" height="120" viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="riceBag" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#D97706"/>
          <stop offset="70%" stop-color="#92400E"/>
          <stop offset="100%" stop-color="#78350F"/>
        </radialGradient>
        <linearGradient id="crateWood" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#B45309"/>
          <stop offset="100%" stop-color="#78350F"/>
        </linearGradient>
      </defs>
      <!-- Sack of Bigas (Jute Sack) -->
      <path d="M12 60 C8 35, 24 25, 48 24 C72 23, 86 35, 82 60 L80 110 C80 116, 16 116, 14 110 Z" fill="url(#riceBag)"/>
      <!-- Sack Fold & Rope Tie -->
      <ellipse cx="48" cy="26" rx="34" ry="12" fill="#78350F"/>
      <!-- Open Top White Rice Grains with Glow -->
      <ellipse cx="48" cy="24" rx="30" ry="9" fill="#FFFFFF"/>
      <ellipse cx="48" cy="24" rx="26" ry="7" fill="#FEF08A" opacity="0.8"/>
      <text x="48" y="78" font-family="'Space Grotesk',sans-serif" font-size="12" font-weight="900" fill="#FEF08A" text-anchor="middle">BIGAS</text>
      <text x="48" y="92" font-family="'Space Grotesk',sans-serif" font-size="10" font-weight="900" fill="#FDE047" text-anchor="middle">₱52/kg</text>

      <!-- Wooden Crate of Red Tomatoes -->
      <g transform="translate(68, 55)">
        <rect x="0" y="20" width="65" height="42" rx="4" fill="url(#crateWood)" stroke="#451A03" stroke-width="2"/>
        <line x1="0" y1="34" x2="65" y2="34" stroke="#451A03" stroke-width="2"/>
        <line x1="0" y1="48" x2="65" y2="48" stroke="#451A03" stroke-width="2"/>
        <!-- Fresh Tomatoes -->
        <circle cx="14" cy="18" r="9" fill="#EF4444"/>
        <circle cx="12" cy="15" r="2.5" fill="#F87171"/>
        <circle cx="32" cy="16" r="9.5" fill="#DC2626"/>
        <circle cx="50" cy="18" r="9" fill="#EF4444"/>
        <circle cx="22" cy="8" r="8.5" fill="#EF4444"/>
        <circle cx="40" cy="9" r="8.5" fill="#DC2626"/>
        <!-- Green Calyx leaves -->
        <path d="M22 2 L20 6 L24 6 Z M40 3 L38 7 L42 7 Z" fill="#22C55E"/>
      </g>
    </svg>
  `,

  // 3D Stack of Golden ₱ Coins (Right Market Prop)
  rightMarketPropSVG: () => `
    <svg width="130" height="110" viewBox="0 0 130 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldEdge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FDE047"/>
          <stop offset="50%" stop-color="#D97706"/>
          <stop offset="100%" stop-color="#78350F"/>
        </linearGradient>
        <radialGradient id="goldFace" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#FFFBEB"/>
          <stop offset="40%" stop-color="#FDE047"/>
          <stop offset="80%" stop-color="#F59E0B"/>
          <stop offset="100%" stop-color="#B45309"/>
        </radialGradient>
      </defs>

      <!-- Stacked Base Coins -->
      <g transform="translate(15, 45)">
        <path d="M0 25 C0 15, 60 15, 60 25 L60 40 C60 50, 0 50, 0 40 Z" fill="url(#goldEdge)"/>
        <ellipse cx="30" cy="25" rx="30" ry="12" fill="url(#goldFace)"/>
        <path d="M0 12 C0 2, 60 2, 60 12 L60 26 C60 36, 0 36, 0 26 Z" fill="url(#goldEdge)"/>
        <ellipse cx="30" cy="12" rx="30" ry="12" fill="url(#goldFace)"/>
        <text x="30" y="16" font-family="'Space Grotesk',sans-serif" font-size="13" font-weight="900" fill="#78350F" text-anchor="middle">₱</text>
      </g>

      <!-- Big Front Golden ₱ Coin -->
      <g transform="translate(48, 10)">
        <path d="M0 45 C0 20, 68 20, 68 45 L68 62 C68 87, 0 87, 0 62 Z" fill="url(#goldEdge)"/>
        <ellipse cx="34" cy="45" rx="34" ry="22" fill="url(#goldFace)" stroke="#FEF08A" stroke-width="2"/>
        <ellipse cx="34" cy="45" rx="27" ry="17" fill="none" stroke="#B45309" stroke-width="2" stroke-dasharray="4 2"/>
        <text x="34" y="52" font-family="'Bungee',Impact,sans-serif" font-size="24" font-weight="900" fill="#78350F" text-anchor="middle">₱</text>
      </g>
    </svg>
  `,

  // Generate glowing marquee bulbs around border
  renderMarqueeBulbs: (count = 24) => {
    // Generate evenly spaced bulbs around a rectangle
    const bulbs = [];
    for (let i = 0; i < count; i++) {
      let top = 0, left = 0;
      const pct = (i / count);
      if (pct < 0.3) {
        // Top edge
        top = 2;
        left = (pct / 0.3) * 100;
      } else if (pct < 0.5) {
        // Right edge
        top = ((pct - 0.3) / 0.2) * 100;
        left = 99;
      } else if (pct < 0.8) {
        // Bottom edge
        top = 98;
        left = 100 - (((pct - 0.5) / 0.3) * 100);
      } else {
        // Left edge
        top = 100 - (((pct - 0.8) / 0.2) * 100);
        left = 1;
      }
      const delay = (i % 3) * 0.45;
      bulbs.push(`<div class="marquee-bulb" style="top:${top}%; left:${left}%; animation-delay:${delay}s;"></div>`);
    }
    return bulbs.join('');
  }
};
