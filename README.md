# 🎮 Marketplace Economics Quest (Interaktibong Aralin sa Ekonomiks)

Isang modernong interaktibong web application at gamified slide presentation para sa **Araling Panlipunan Baitang 9 (Ekonomiks)**, alinsunod sa DepEd Most Essential Learning Competencies (MELC).

---

## 📌 Paksa at Kasanayan
- **Paksa:** Kahulugan at Iba't Ibang Estraktura ng Pamilihan
- **Baitang:** Grade 9 (Araling Panlipunan - Ekonomiks)
- **MELC Code:** `AP9MYK-IHe-11`
- **Mga Layunin (Cognitive, Affective, Psychomotor):**
  1. **Pangkabatiran (Cognitive):** Naipaliliwanag ang kahulugan ng pamilihan at naiisa-isa ang mga estraktura nito.
  2. **Pandamdamin (Affective):** Napahahalagahan ang papel ng pamilihan sa pang-araw-araw na pamumuhay at paggawa ng matalinong desisyon bilang konsyumer at prodyuser.
  3. **Saykomotor (Psychomotor):** Nakalalahok nang masigla sa mga pangkatang gawain at nakapag-uuri ng iba't ibang halimbawa ng estraktura ng pamilihan.

---

## ✨ Mga Pangunahing Katangian (Features)

1. **24 Modular Interactive Slides:**
   - Panimulang Panalangin na may Naka-embed na Bidyo (`videos/prayer.mp4`), Pagbati, at Smart Attendance Check
   - Mga Patakaran sa Silid-Aralan at Pagsusuri ng Layunin
   - Balik-Aral at Pagganyak na may Masiglang Musika (`audio/game-bgm.mp3`)
   - Interaktibong Drag and Drop Classification Game ("Saan Sila Nabibilang?")
   - 5-Aytem na Pamprosesong Tanong sa Pagsusuri (Analysis)
   - Bagong Slide: Panimulang Bidyo ng Aralin (`videos/Istraktura ng Pamilihan.mp4`) bago ang talakayan
   - Talakayan na may 3D Cards para sa Ganap at Hindi Ganap na Kompetisyon (Monopoly, Monopsony, Oligopoly, Monopolistic Competition)
   - Pangkatang Gawain ("Suriin at Isadula!") na may 4 na Sobre at Rubrik sa Pagmamarka
   - Real-time Scored Quiz na may Arcade Theme BGM (`audio/game-bgm-2.mp3`) at Victory SFX (`audio/game-sfx.mp3`)
   - Paglalahat, Takdang-Aralin, at Pangwakas na Panalangin

2. **Arcade UI & Gamification Engine:**
   - Real-time score counter, XP bar, at Level progression
   - Dynamic Sound Effects (Web Audio API synthesis — walang external audio dependencies)
   - Dynamic Leaderboard at Badge rewards

3. **Filipino Mascots (Inline SVG):**
   - **Aling Nena** (Guro / Tindera Guide)
   - **Kuya Juan** (Matalinong Mamimili)
   - Emotive facial expressions at speech bubble feedback

4. **Classroom-Ready Presentation Controls:**
   - Fullscreen Presentation Mode (`F` key o Fullscreen button)
   - Responsive Fluid Stage (16:9 aspect ratio na angkop sa projector, smart TV, monitor, o tablet)
   - Flexible navigation bar (Previous, Next, Jump to Slide, Notes, Reset)

---

## 📂 Istruktura ng Proyekto (File Structure)

```
interactive-web-app/
├── index.html              # Pangunahing presentation application
├── pamilihan-lesson.html   # Standalone copy para sa direct classroom serving
├── README.md               # Dokumentasyon ng proyekto
├── validate_modular.js     # QA validation script para sa 24 slides
├── css/
│   ├── main.css            # Base typography, layout, variables, at stage
│   ├── components.css      # UI components (cards, quiz, attendance, envelopes)
│   ├── animations.css      # Keyframes, transitions, 3D flip card transforms
│   └── backgrounds.css     # Themed dynamic background gradients
└── js/
    ├── app.js              # State manager, sound engine, event coordination
    ├── data.js             # Lesson content, quiz items, attendance list, scenarios
    ├── slides.js           # 24 Slide templates at interactive renderers
    ├── stage.js            # Viewport scaler, aspect ratio, at presentation controls
    ├── dnd.js              # HTML5 drag-and-drop classification module
    └── mascots.js          # SVG character rendering at animations
```

---

## 🚀 Paano Gamitin (Quick Start)

Walang kailangang build tools o package manager — purong **Vanilla HTML5, CSS3, at ES6 JavaScript**.

1. **I-clone ang repository:**
   ```bash
   git clone https://github.com/nelvingampal/Interactive-web-app.git
   ```
2. **Buksan ang aplikasyon:**
   - I-double click lamang ang `index.html` o `pamilihan-lesson.html` gamit ang alinmang modernong web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
   - O magpatakbo ng local development server:
     ```bash
     npx serve .
     ```

3. **Mga Shortcut Keys:**
   - `→` / `Space` : Susunod na slide
   - `←` : Nakaraang slide
   - `F` : Toggle Fullscreen presentation mode
   - `Esc` : Exit Fullscreen mode
   - `M` : Toggle Music mute/unmute

---

## 🧪 Pagsusuri sa Kalidad (Quality Assurance)

Maaaring patakbuhin ang kasamang automated validation script:
```bash
node validate_modular.js
```
*Lahat ng 24 slides at interactive modules ay sumailalim sa 100% QA audit pass.*

---

## 👤 May-Akda (Author)
- **Nelvin Gampal**
- Email: `nelvin.gampal@msugensan.edu.ph`
- Mindanao State University - General Santos City
