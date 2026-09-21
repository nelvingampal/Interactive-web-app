/* ============================================================
   SLIDE DEFINITIONS & RENDERERS (23 SLIDES — ZERO SCROLL)
   DepEd Grade 9 Araling Panlipunan: Pamilihan Lesson
   Includes Filipino Mascots (Aling Nena & Kuya Juan)
   Section-Specific Theme Assignment & 16:9 Optimizations
   ============================================================ */

const slides = [];
function registerSlide(cfg) {
  slides.push(cfg);
}

/* 1. TITLE & KAGAMITAN */
registerSlide({
  id: "title",
  nav: "Pamagat at Kagamitan",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; align-items:center; text-align:center; justify-content:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="background:var(--market-red); color:#FFF; padding:18px 36px; border-radius:16px; border:4px solid var(--market-yellow); box-shadow:0 10px 30px rgba(0,0,0,0.25); max-width:960px; width:100%; margin-bottom:16px;">
        <div style="font-family:'Space Grotesk',sans-serif; font-size:14.5px; font-weight:800; color:var(--market-yellow); letter-spacing:0.12em; text-transform:uppercase; margin-bottom:6px;">
          KAGAWARAN NG EDUKASYON · ARALING PANLIPUNAN 9 (EKONOMIKS)
        </div>
        <h1 style="font-family:'Bungee',Impact,sans-serif; font-size:35px; line-height:1.2; margin-bottom:6px;">
          KAHULUGAN AT ESTRAKTURA NG PAMILIHAN
        </h1>
        <div style="font-size:16.5px; font-weight:800; color:#FEF08A;">
          MELC: AP9MYK-IHe-11 · Ikalawang Markahan
        </div>
      </div>

      <!-- Mascots Welcoming the Class -->
      <div class="anim-fade-up stagger-2" style="display:flex; align-items:center; justify-content:center; gap:36px; margin-bottom:16px;">
        <div style="display:flex; align-items:center; gap:12px;">
          ${Mascots.alingNena('default', 95)}
          ${Mascots.speechBubble('Maligayang pagdating sa ating talakayan sa pamilihan!', 'left', 'yellow')}
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          ${Mascots.speechBubble('Handa na ba tayong mag-aral ng presyo at kumpetisyon?', 'right', 'green')}
          ${Mascots.kuyaJuan('default', 95)}
        </div>
      </div>

      <!-- Kagamitan at Sanggunian -->
      <div class="anim-fade-up stagger-3" style="display:grid; grid-template-columns:1fr 1fr; gap:18px; width:100%; max-width:960px; text-align:left;">
        <div class="meta-card yellow" style="padding:14px 18px;">
          <h3 style="font-family:'Space Grotesk',sans-serif; font-size:17px; color:var(--market-red); margin-bottom:4px;">
            📦 Mga Kagamitan:
          </h3>
          <p style="font-size:15.5px; font-weight:700; line-height:1.45;">
            PowerPoint / Interactive Presentation, mga larawan/logo ng produkto at kumpanya, <b>manila paper</b>, <b>marker</b>, at <b>meta-cards</b>.
          </p>
        </div>
        <div class="meta-card green" style="padding:14px 18px;">
          <h3 style="font-family:'Space Grotesk',sans-serif; font-size:17px; color:var(--market-green); margin-bottom:4px;">
            📚 Sanggunian:
          </h3>
          <p style="font-size:15.5px; font-weight:700; line-height:1.45;">
            <b>Ekonomiks 9</b> (Modyul ng Mag-aaral sa Araling Panlipunan), K-12 Most Essential Learning Competencies (MELCs) AP9.
          </p>
        </div>
      </div>

      <div class="anim-fade-up stagger-4" style="margin-top:16px;">
        <button class="btn primary" style="font-size:17px; padding:10px 32px;" onclick="App.jumpToId('menu')">
          Simulan ang Aralin ➔
        </button>
      </div>
    </div>`
});

/* 2. HOME MENU */
registerSlide({
  id: "menu",
  nav: "Talaan ng Aralin (Pangunahing Talaan)",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; flex-shrink:0;">
        <h2 class="slide-h2" style="font-size:22px; margin-bottom:0;">Talaan ng Nilalaman at Daloy ng Aralin (4A's)</h2>
        <span class="cue-badge gold" style="margin-bottom:0; font-size:11px; padding:3px 10px;">Pindutin ang bahaging nais talakayin</span>
      </div>

      <div class="anim-fade-up stagger-2" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px; flex:1; min-height:0;">
        <button class="meta-card yellow" style="cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 10px;" onclick="App.jumpToId('prayer')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#78350F; color:#FEF08A; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">PANIMULA</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#991B1B; margin-bottom:2px;">📜 1. Panalangin at Pagbati</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">Panalangin, masiglang pagbati, at pagtala ng liban.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#B45309;">Pumunta ➔</span>
        </button>

        <button class="meta-card green" style="cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 10px;" onclick="App.jumpToId('rules')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#14532D; color:#BBF7D0; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">PANIMULA</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#166534; margin-bottom:2px;">🎯 2. Patakaran at Layunin</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">Mga patakaran sa silid-aralan at mga layunin ng MELC.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#15803D;">Pumunta ➔</span>
        </button>

        <button class="meta-card white" style="cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 10px;" onclick="App.jumpToId('review')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#0F172A; color:#94A3B8; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">BALIK-ARAL</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#0F172A; margin-bottom:2px;">⚖️ 3. Demand at Supply</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">Interaksyon ng mamimili at nagtitinda sa presyo.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#C5221F;">Pumunta ➔</span>
        </button>

        <button class="meta-card pink" style="cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 10px;" onclick="App.jumpToId('motivation-intro')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#881337; color:#FECDD3; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">4A'S: GAWAIN</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#9F1239; margin-bottom:2px;">🧺 4. "Saan Sila Nabibilang?"</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">Laro ng pag-uuri sa 13 produkto ng pamilihan.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#BE123C;">Pumunta ➔</span>
        </button>

        <button class="meta-card blue" style="cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 10px;" onclick="App.jumpToId('analysis-0')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#0C4A6E; color:#BAE6FD; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">4A'S: PAGSUSURI</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#0369A1; margin-bottom:2px;">💡 5. Pagsusuri (5 Tanong)</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">Mga pamprosesong tanong at talakayan.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#0284C7;">Pumunta ➔</span>
        </button>

        <button class="meta-card yellow" style="cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 10px;" onclick="App.jumpToId('abs-def')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#78350F; color:#FEF08A; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">4A'S: PAGTALAKAY</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#991B1B; margin-bottom:2px;">🏪 6. Kahulugan ng Pamilihan</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">Mekanismo ng ugnayan ng mamimili at nagtitinda.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#B45309;">Pumunta ➔</span>
        </button>

        <button class="meta-card green" style="cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 10px;" onclick="App.jumpToId('abs-perfect')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#14532D; color:#BBF7D0; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">4A'S: PAGTALAKAY</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#166534; margin-bottom:2px;">🏛️ 7. Estraktura ng Pamilihan</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">Estruktura: Ganap at Hindi Ganap na Kompetisyon.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#15803D;">Pumunta ➔</span>
        </button>

        <button class="meta-card pink" style="cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 10px;" onclick="App.jumpToId('application')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#881337; color:#FECDD3; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">4A'S: PAGLALAPAT</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#9F1239; margin-bottom:2px;">🎭 8. "Suriin at Isadula!"</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">4 na Sobre ng Dula-Dulaan at Rubrik sa Pagmamarka.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#BE123C;">Pumunta ➔</span>
        </button>

        <button class="meta-card blue" style="grid-column: span 2; cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 12px;" onclick="App.jumpToId('quiz')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#0C4A6E; color:#BAE6FD; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">PAGTATAYA</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#0369A1; margin-bottom:2px;">🏆 9. Pagtataya (Pagsusulit na may 5 Aytem)</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">Pagtataya at pagsusulit na may awtomatikong pagmamarka.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#0284C7;">Pumunta ➔</span>
        </button>

        <button class="meta-card yellow" style="grid-column: span 2; cursor:pointer; text-align:left; display:flex; flex-direction:column; justify-content:space-between; padding:8px 12px;" onclick="App.jumpToId('assignment')">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; background:#78350F; color:#FEF08A; padding:2px 6px; border-radius:5px; width:fit-content; letter-spacing:0.06em;">KASUNDUAN</span>
          <div>
            <h4 style="font-size:15px; font-weight:900; color:#B45309; margin-bottom:2px;">📝 10. Takdang-Aralin at Pagtatapos</h4>
            <p style="font-size:11.5px; font-weight:700; color:#475569; line-height:1.3;">Replektibong sanaysay sa kuwaderno at pagtatapos.</p>
          </div>
          <span style="font-size:11px; font-weight:900; color:#B45309;">Pumunta ➔</span>
        </button>
      </div>
    </div>`
});

/* 3. PANALANGIN */
registerSlide({
  id: "prayer",
  nav: "Panimula: Panalangin",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%;">
      <span class="cue-badge gold anim-fade-up stagger-1">⏱ Panimula · 1. Panalangin</span>
      <h2 class="slide-h2 anim-fade-up stagger-2" style="font-size:32px; margin-bottom:14px;">Panimulang Panalangin</h2>
      
      <div class="anim-fade-up stagger-3" style="display:flex; align-items:center; justify-content:center; gap:20px; margin-bottom:16px;">
        ${Mascots.kuyaJuan('curious', 105)}
        ${Mascots.speechBubble('Panginoon, gabayan Mo po kami sa aming pag-aaral ng ekonomiks at pamilihan ngayong araw.', 'left', 'yellow')}
      </div>

      <div class="meta-card white anim-fade-up stagger-4" style="max-width:760px; font-size:20px; font-weight:700; line-height:1.6; padding:24px 32px;">
        <p style="color:var(--slate-board); margin-bottom:10px;">
          "Tumayo ang lahat para sa ating panalangin. Manahimik at damhin ang presensya ng Poong Maykapal..."
        </p>
        <p style="font-size:16px; font-weight:800; color:var(--market-gold-dark);">
          🙏 Panalangin bago magsimula ang klase
        </p>
      </div>
    </div>`
});

/* 4. PAGBATI */
registerSlide({
  id: "greeting",
  nav: "Panimula: Masiglang Pagbati",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%;">
      <span class="cue-badge green anim-fade-up stagger-1">⏱ Panimula · Pagbati</span>
      <h1 class="slide-h1 anim-fade-up stagger-2" style="font-size:42px; margin-bottom:16px;">
        Magandang Araw, Baitang 9!
      </h1>

      <div class="anim-fade-up stagger-3" style="display:flex; align-items:center; justify-content:center; gap:24px; margin-bottom:18px;">
        ${Mascots.alingNena('happy', 110)}
        ${Mascots.speechBubble('Kumusta kayong lahat? Handa na ba ang inyong isipan para sa ating masayang aralin sa pamilihan?', 'left', 'green')}
      </div>

      <div class="meta-card yellow anim-fade-up stagger-4" style="max-width:760px; font-size:22px; font-weight:800; color:var(--market-red); padding:18px 30px;">
        "Isang pinagpalang araw sa inyong lahat! Ihanda ang inyong mga kagamitan at magsaya sa ating talakayan."
      </div>
    </div>`
});

/* 5. PAGTALA NG LIBAN */
registerSlide({
  id: "attendance",
  nav: "Panimula: Pagtala ng Liban",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
      <!-- Header Row & Quick 1-Click Button -->
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="cue-badge red" style="margin-bottom:0;">⏱ Panimula · Pagtala ng Liban</span>
          <h2 class="slide-h2" style="margin-top:2px;">Ulat ng Pagtatala ng Liban sa Bawat Pangkat</h2>
        </div>
        <button class="btn gold anim-pulse" id="btnMarkAllPresent" style="font-size:14px; padding:10px 20px; border-radius:12px; box-shadow:0 0 16px rgba(251, 191, 36, 0.5);" onclick="App.markAllPresent()">
          🎉 ISANG PINDOT: LAHAT NARIRITO! (WALANG LIBAN)
        </button>
      </div>

      <!-- 4 Group Attendance Cards (Instant Single-Tap Toggles) -->
      <div class="anim-fade-up stagger-2" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:14px; margin:8px 0;">
        ${[
          { num: 1, medal: '🥇', col: '#D97706', name: 'Pangkat 1' },
          { num: 2, medal: '🥈', col: '#475569', name: 'Pangkat 2' },
          { num: 3, medal: '🥉', col: '#B45309', name: 'Pangkat 3' },
          { num: 4, medal: '🏅', col: '#15803D', name: 'Pangkat 4' }
        ].map(p => {
          const absCount = App.attendanceTally[p.num] || 0;
          const isComplete = absCount === 0;
          const pillClass = isComplete ? 'complete' : (absCount === 1 ? 'absent' : 'warning');
          const statusText = isComplete ? '✅ KOMPLETO (100%)' : (absCount === 1 ? '⚠️ 1 Lumiban' : `⚠️ ${absCount} Lumiban`);
          return `
            <div class="meta-card white att-card" id="attCard-${p.num}">
              <div>
                <div style="font-size:26px; margin-bottom:2px;">${p.medal}</div>
                <h3 style="font-family:'Space Grotesk',sans-serif; font-size:20px; font-weight:900; color:${p.col}; margin-bottom:2px;">
                  ${p.name}
                </h3>
                <div style="font-size:11px; font-weight:800; color:#64748B; text-transform:uppercase; letter-spacing:0.06em;">Kalagayan ng Pangkat:</div>
              </div>

              <!-- Main Status Pill -->
              <div class="att-status-pill ${pillClass}" id="attStatus-${p.num}">
                ${statusText}
              </div>

              <!-- Quick 1-Tap Chips (No tedious counting!) -->
              <div class="att-chips-row">
                <button class="att-chip ${absCount === 0 ? 'active-complete' : ''}" onclick="App.setGroupAttendance(${p.num}, 0)" title="Itakda bilang Kompleto">
                  ✅ 0 Liban
                </button>
                <button class="att-chip ${absCount === 1 ? 'active-absent' : ''}" onclick="App.setGroupAttendance(${p.num}, 1)" title="May 1 Lumiban">
                  ⚠️ 1
                </button>
                <button class="att-chip ${absCount >= 2 ? 'active-warning' : ''}" onclick="App.setGroupAttendance(${p.num}, 2)" title="May 2 o higit pang lumiban">
                  ⚠️ 2+
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Live Summary & Confirmation Actions Bar -->
      <div class="anim-fade-up stagger-3" style="display:flex; justify-content:space-between; align-items:center; background:rgba(6,24,54,0.85); border:1.5px solid #1E4976; border-radius:12px; padding:8px 18px;">
        <div id="attSummaryText" style="font-family:'Space Grotesk',sans-serif; font-size:14px; font-weight:900; color:#F8FAFC; display:flex; align-items:center; gap:8px;">
          ${App.getAttendanceSummaryHTML()}
        </div>
        <div style="display:flex; gap:10px;">
          <button class="btn primary" style="font-size:12px; padding:6px 16px;" onclick="App.confirmAttendance()">
            💾 Kumpirmahin ang Talaan (+50 XP)
          </button>
          <button class="btn" style="font-size:12px; padding:6px 14px; background:#1E293B; border-color:#475569;" onclick="App.resetAttendance()">
            🔄 Ibalik sa Simula
          </button>
        </div>
      </div>
    </div>`
});

/* 6. PATAKARAN SA KLASE */
registerSlide({
  id: "rules",
  nav: "Panimula: Patakaran sa Klase",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <div>
          <span class="cue-badge gold" style="margin-bottom:0;">⏱ Panimula · Patakaran sa Klase</span>
          <h2 class="slide-h2" style="margin-top:2px;">Mga Patakaran sa Ating Klase</h2>
        </div>
        ${Mascots.kuyaJuan('default', 75)}
      </div>

      <div class="anim-fade-up stagger-2" style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:8px;">
        ${lessonData.rules.slice(0, 4).map(r => `
          <div class="meta-card white" style="display:flex; align-items:center; gap:16px; font-size:17.5px; font-weight:700;">
            <span style="font-size:34px;">${r.icon}</span>
            <div>${r.text}</div>
          </div>
        `).join('')}
        <div class="meta-card white" style="grid-column: span 2; display:flex; align-items:center; gap:16px; font-size:17.5px; font-weight:700;">
          <span style="font-size:34px;">${lessonData.rules[4].icon}</span>
          <div>${lessonData.rules[4].text}</div>
        </div>
      </div>
    </div>`
});

/* 7. MGA TIYAK NA LAYUNIN */
registerSlide({
  id: "objectives",
  nav: "Mga Tiyak na Layunin (MELC)",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <div>
          <span class="cue-badge green" style="margin-bottom:0;">🎯 ${lessonData.melcCode}</span>
          <h2 class="slide-h2" style="font-size:24px; margin-top:2px;">${lessonData.competency}</h2>
        </div>
        ${Mascots.alingNena('thinking', 75)}
      </div>

      <div class="anim-fade-up stagger-2" style="display:flex; flex-direction:column; gap:12px;">
        ${lessonData.objectives.map(obj => `
          <div class="meta-card ${obj.color}" style="padding:14px 20px;">
            <div style="font-family:'Space Grotesk',sans-serif; font-size:13.5px; font-weight:800; color:var(--market-red); text-transform:uppercase; margin-bottom:3px;">
              ${obj.type}
            </div>
            <div style="font-size:18.5px; font-weight:700; line-height:1.45;">
              ${obj.text}
            </div>
          </div>
        `).join('')}
      </div>
    </div>`
});

/* 8. BALIK-ARAL */
registerSlide({
  id: "review",
  nav: "Panimula: Balik-Aral",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
        <span class="cue-badge gold" style="margin-bottom:0;">⏱ Panimula · 3. Balik-Aral (Interaksyon ng Demand at Supply)</span>
        ${Mascots.kuyaJuan('curious', 85)}
      </div>
      <h2 class="slide-h2 anim-fade-up stagger-2" style="margin-top:6px; margin-bottom:12px;">Tanong ng Guro:</h2>

      <div class="meta-card yellow anim-fade-up stagger-3" style="font-size:25px; font-weight:900; color:var(--market-red); margin-bottom:18px; padding:22px 28px; line-height:1.5;">
        ${lessonData.review.question}
      </div>

      <div id="reviewPrompt" class="anim-fade-up stagger-4" style="text-align:center; margin:16px 0;">
        <button class="btn gold" style="font-size:20px; font-weight:800; padding:14px 36px;" onclick="App.revealReview()">
          🔍 Pindutin upang Ipakita ang Gabay na Sagot
        </button>
      </div>

      <div id="reviewAnswer" class="meta-card green anim-fade-up" style="display:none; font-size:22px; font-weight:800; line-height:1.55; padding:22px 28px;">
        <h3 style="font-family:'Space Grotesk',sans-serif; font-size:20px; font-weight:900; color:var(--market-green-dark); margin-bottom:8px;">
          💡 Gabay na Sagot sa Talakayan:
        </h3>
        <p>${lessonData.review.answer}</p>
      </div>
    </div>`
});

/* 9. ACTIVITY INTRO: "SAAN SILA NABIBILANG?" */
registerSlide({
  id: "motivation-intro",
  nav: "Gawain: Panuto (Saan Sila Nabibilang?)",
  theme: "theme-market",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="cue-badge red" style="margin-bottom:0;">⏱ 4A's: 1. GAWAIN · Pangkatang Gawain</span>
          <h1 class="slide-h1" style="font-size:32px; margin-top:4px;">Gawain: "Saan Sila Nabibilang?"</h1>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          ${Mascots.alingNena('default', 90)}
        </div>
      </div>

      <div class="anim-fade-up stagger-2" style="display:grid; grid-template-columns:1.2fr 1fr; gap:18px; margin-top:14px;">
        <div class="meta-card yellow" style="padding:16px 20px;">
          <h3 style="font-family:'Space Grotesk',sans-serif; font-size:19px; color:var(--market-red); margin-bottom:8px;">
            📋 Panuto para sa Apat (4) na Pangkat:
          </h3>
          <p style="font-size:17px; font-weight:700; line-height:1.5;">
            Ang bawat pangkat ay makatatanggap ng sobre na naglalaman ng mga larawan/logo ng iba't ibang produkto at kumpanya: 
            <i>Bigas, Gulay sa palengke, Meralco, Maynilad, Petron, Shell, Globe, Smart, Jollibee, McDonald's, Tide, Surf, at Pulis/Sundalo</i>.
          </p>
        </div>

        <div class="meta-card green" style="padding:16px 20px;">
          <h3 style="font-family:'Space Grotesk',sans-serif; font-size:19px; color:var(--market-green); margin-bottom:8px;">
            ⚖️ Dalawang (2) Batayan sa Pagpapangkat:
          </h3>
          <ul style="font-size:17px; font-weight:700; line-height:1.5; padding-left:22px;">
            <li><b>(1)</b> Dami ng nagtitinda o gumagawa ng produkto.</li>
            <li><b>(2)</b> Mayroon ba silang katunggali o kaagaw sa negosyo.</li>
          </ul>
        </div>
      </div>

      <div class="meta-card white anim-fade-up stagger-3" style="margin-top:14px; padding:14px 20px;">
        <p style="font-size:17px; font-weight:700; line-height:1.5;">
          📝 <b>Pisikal na Gawain:</b> Ipoposte ng bawat pangkat ang kanilang gawa sa pisara gamit ang <b>manila paper</b> at <b>marker</b> sa loob ng <b>5 minuto</b>.
        </p>
      </div>

      <div class="anim-fade-up stagger-4" style="margin-top:14px; text-align:center;">
        <button class="btn primary" style="font-size:18px; padding:10px 32px;" onclick="App.jumpToId('motivation-game')">
          Buksan ang Lupon ng Pag-uuri ➔
        </button>
      </div>
    </div>`
});

/* 10. REAL POINTER DRAG AND DROP SORTING GAME */
registerSlide({
  id: "motivation-game",
  nav: "Gawain: Laro sa Pag-uuri",
  theme: "theme-market",
  render: () => `
    <div style="display:flex; flex-direction:column; height:100%; justify-content:space-between;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
        <div style="display:flex; align-items:center; gap:12px;">
          <span class="cue-badge gold" style="margin-bottom:0;">⏱ Pangkatang Gawain sa Pag-uuri</span>
          <span style="font-size:16.5px; font-weight:800;">Hilahin o pindutin ang produkto, at ilagay sa tamang kategorya:</span>
        </div>
        <button class="btn" style="font-size:13px; padding:6px 16px;" onclick="DnDController.resetGame()">🔄 Ibalik sa Simula</button>
      </div>

      <div class="drag-layout anim-fade-up stagger-2">
        <!-- Draggable Chips Pool -->
        <div class="drag-pool-container">
          <div style="display:flex; justify-content:space-between; font-size:13.5px; font-weight:800; color:#93C5FD;">
            <span>MGA PRODUKTO AT KUMPANYA (13 AYTEM):</span>
            <span class="peso-tag" id="sortRemainingBadge" style="background:var(--slate-board);">Natitira: 13 / 13</span>
          </div>
          <div class="pool-chips-wrap" id="sortChipsPool"></div>
          <div id="sortAllDoneBanner" style="display:none; background:var(--market-green-light); border:2px solid var(--market-green); padding:10px; border-radius:8px; text-align:center; font-size:15.5px; font-weight:800; color:var(--market-green);">
            🎉 Mahusay! Lahat ng 13 produkto at kumpanya ay matagumpay na naipangkat!
          </div>
        </div>

        <!-- 5 Drop Zones -->
        <div class="drop-zones-grid">
          ${lessonData.sortCategories.map(cat => `
            <div class="drop-zone" id="zone-${cat.id}" data-category="${cat.id}">
              <div class="drop-zone-header">${cat.label}</div>
              <div class="drop-zone-items" id="items-${cat.id}"></div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>`,
  afterRender: () => DnDController.init()
});

/* 11-15. INTERACTIVE ANALYSIS QUESTIONS */
lessonData.analysisQuestions.forEach((item, index) => {
  registerSlide({
    id: "analysis-" + index,
    nav: "Pagsusuri: Tanong " + (index + 1),
    theme: "theme-analysis",
    render: () => `
      <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
        <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
          <span class="cue-badge gold" style="margin-bottom:0;">⏱ 5 Minuto · 2. ANALYSIS (Pagsusuri)</span>
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="peso-tag" style="background:var(--slate-board); font-size:14px;">Tanong ${index + 1} ng ${lessonData.analysisQuestions.length}</div>
            ${index % 2 === 0 ? Mascots.kuyaJuan('curious', 60) : Mascots.alingNena('thinking', 60)}
          </div>
        </div>

        <!-- 5-Dot Progress Tracker -->
        <div class="quiz-dots anim-fade-up stagger-2" id="anDots-${index}">
          ${lessonData.analysisQuestions.map((_, dIdx) => `
            <div class="quiz-dot ${App.analysisAnswered[dIdx] ? 'done' : ''} ${dIdx === index ? 'current' : ''}"></div>
          `).join('')}
        </div>

        <div class="meta-card yellow anim-fade-up stagger-3" style="margin-bottom:12px; padding:18px 24px;">
          <div style="font-family:'Space Grotesk',sans-serif; font-size:15px; font-weight:900; color:var(--market-red); text-transform:uppercase; letter-spacing:0.05em;">
            Gabay na Katanungan #${index + 1}
          </div>
          <h2 class="slide-h2" style="font-size:26px; font-weight:900; color:var(--slate-board); margin:6px 0 0; line-height:1.35;">
            ${item.q}
          </h2>
        </div>

        <div class="anim-fade-up stagger-4" style="font-size:18px; font-weight:800; color:#93C5FD; margin-bottom:10px;">
          💬 Piliin ang pinakamalapit at matalinong pagsusuri ng mag-aaral:
        </div>

        <div class="anim-fade-up stagger-5" id="anChoices-${index}">
          ${item.choices.map((ch, cIdx) => `
            <button class="choice-btn" id="anBtn-${index}-${cIdx}" onclick="App.handleAnalysisChoice(${index}, ${cIdx})">
              <span>${ch}</span>
            </button>
          `).join('')}
        </div>

        <div id="anFeedback-${index}" style="min-height:50px; margin-top:4px;"></div>
      </div>`,
    afterRender: () => App.renderAnalysisSlideState(index)
  });
});

/* 16. ABSTRACTION A - KAHULUGAN NG PAMILIHAN */
registerSlide({
  id: "abs-def",
  nav: "Kahulugan ng Pamilihan",
  theme: "theme-abstraction",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <span class="cue-badge gold" style="font-size:15px; padding:6px 14px; margin-bottom:0;">⏱ 12 Minuto · 3. ABSTRACTION (Aralin)</span>
        <div style="display:flex; align-items:center; gap:8px;">
          ${Mascots.alingNena('default', 75)}
          ${Mascots.kuyaJuan('default', 75)}
        </div>
      </div>

      <h1 class="slide-h1 anim-fade-up stagger-2" style="color:var(--slate-board); font-size:36px; margin-bottom:12px;">
        A. Kahulugan ng Pamilihan
      </h1>

      <div class="meta-card yellow anim-fade-up stagger-3" style="font-size:24px; font-weight:800; line-height:1.55; margin-bottom:18px; padding:22px 28px;">
        <p style="color:#0F172A; margin:0;">
          Ang <b>pamilihan</b> ay isang mekanismo kung saan ang <b>mamimili (consumer)</b> at <b>nagtitinda (prodyuser)</b> ay nagkakaroon ng interaksyon upang magkasundo sa <b>presyo (₱)</b> at <b>dami</b> ng produkto o serbisyo.
        </p>
        <p style="margin-top:10px; font-size:20px; font-weight:900; color:#991B1B;">
          📌 Hindi lamang ito tumutukoy sa pisikal na lugar (tulad ng palengke o mall), kundi sa anumang sistema ng bentahan (tulad ng online shopping).
        </p>
      </div>

      <div class="anim-fade-up stagger-4" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px;">
        <div class="meta-card white" style="text-align:center; border-top:6px solid var(--market-green); padding:18px 16px;">
          <div style="font-size:46px;">🛒</div>
          <h3 style="font-family:'Space Grotesk',sans-serif; font-size:24px; font-weight:900; margin-top:6px; color:#0F172A;">Mamimili (Consumer)</h3>
          <p style="font-size:18px; font-weight:800; color:#1E293B; margin-top:6px; line-height:1.45;">Bumibili ayon sa badyet at pangangailangan (Demand).</p>
        </div>
        <div class="meta-card white" style="text-align:center; border-top:6px solid var(--market-gold); padding:18px 16px;">
          <div style="font-size:46px;">🤝 ₱</div>
          <h3 style="font-family:'Space Grotesk',sans-serif; font-size:24px; font-weight:900; margin-top:6px; color:#0F172A;">Presyo at Dami</h3>
          <p style="font-size:18px; font-weight:800; color:#1E293B; margin-top:6px; line-height:1.45;">Punto ng pagkakasundo (Presyong Ekwilibriyo sa Pamilihan).</p>
        </div>
        <div class="meta-card white" style="text-align:center; border-top:6px solid var(--market-red); padding:18px 16px;">
          <div style="font-size:46px;">🏪</div>
          <h3 style="font-family:'Space Grotesk',sans-serif; font-size:24px; font-weight:900; margin-top:6px; color:#0F172A;">Nagtitinda (Prodyuser)</h3>
          <p style="font-size:18px; font-weight:800; color:#1E293B; margin-top:6px; line-height:1.45;">Nagbibili ng produkto upang kumita ng tubo (Supply).</p>
        </div>
      </div>
    </div>`
});

/* 17. ABSTRACTION B1 - TIER 1: GANAP NA KOMPETISYON */
registerSlide({
  id: "abs-perfect",
  nav: "1. Ganap na Kompetisyon",
  theme: "theme-abstraction",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <span class="cue-badge gold" style="font-size:15px; padding:6px 14px; margin-bottom:0;">B. Iba't Ibang Estraktura ng Pamilihan</span>
        <span class="cue-badge green" style="font-size:15px; padding:6px 14px; margin-bottom:0;">Kategorya 1 ng 2: Standalone Cluster</span>
      </div>
      <h2 class="slide-h2 anim-fade-up stagger-2" style="font-size:28px; margin-bottom:12px;">1. Pamilihang May Ganap na Kompetisyon (Perfect Competition)</h2>

      <div class="anim-fade-up stagger-3" style="display:grid; grid-template-columns:1.25fr 1fr; gap:18px; min-height:430px; flex:1;">
        <div class="meta-card yellow" style="display:flex; flex-direction:column; justify-content:space-between; padding:22px 24px;">
          <div>
            <span class="peso-tag" style="background:var(--market-green); font-size:16px; font-weight:900; padding:4px 12px; margin-bottom:10px;">PRICE TAKER</span>
            <h3 style="font-family:'Space Grotesk',sans-serif; font-size:25px; font-weight:900; color:var(--market-red); margin-bottom:12px;">
              Mga Pangunahing Katangian:
            </h3>
            <ul style="font-size:20.5px; font-weight:800; line-height:1.6; color:#0F172A; padding-left:24px;">
              <li><b>Napakaraming mamimili at nagtitinda</b> sa industriya.</li>
              <li><b>Magkakatulad ang mga produkto</b> (homogeneous) — walang natatanging tatak o lasa.</li>
              <li><b>Malayang nakapapasok at nakalalabas</b> ang sinumang negosyante.</li>
              <li><b>Walang sinuman ang nakakakontrol sa presyo (₱)</b> — ang merkado ang nagtatakda.</li>
            </ul>
          </div>
          <div style="background:rgba(255,255,255,0.85); padding:12px 16px; border-radius:10px; border:2px solid var(--manila-border); font-size:19px; font-weight:800; color:#0F172A;">
            💡 <i>Price Taker</i>: Tanggap lamang ng negosyante ang umiiral na presyo sa palengke.
          </div>
        </div>

        <div class="meta-card white" style="display:flex; flex-direction:column; justify-content:space-between; padding:22px 24px; text-align:center;">
          <div>
            <div style="font-size:64px; margin-bottom:6px;">🌾 🐟 🥬</div>
            <h3 style="font-family:'Space Grotesk',sans-serif; font-size:25px; font-weight:900; color:var(--market-green); margin-bottom:8px;">
              Halimbawa sa Palengke:
            </h3>
            <p style="font-size:22px; font-weight:800; line-height:1.5; color:#0F172A;">
              Mga nagtitinda ng <b>bigas</b>, <b>sariwang isda</b>, at <b>gulay</b> sa pampublikong palengke.
            </p>
          </div>
          <div style="background:var(--card-green); padding:14px 16px; border-radius:10px; border:2px solid var(--card-green-border); text-align:left;">
            <p style="font-size:18px; font-weight:800; line-height:1.5; color:#064E3B; margin:0;">
              Kapag nagtaas ng presyo ang isang pwesto nang walang dahilan, madaling lilipat ang mamimili sa katabing pwesto dahil pareho lang ang produkto.
            </p>
          </div>
        </div>
      </div>
    </div>`
});

/* 18. ABSTRACTION B2 - TIER 2: HINDI GANAP NA KOMPETISYON (3D FLIP TILES) */
registerSlide({
  id: "abs-imperfect",
  nav: "2. Hindi Ganap na Kompetisyon",
  theme: "theme-abstraction",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="cue-badge red" style="font-size:14.5px; padding:6px 12px; margin-bottom:0;">Kategorya 2 ng 2: Umbrella Container (Price Maker)</span>
          <h2 class="slide-h2" style="font-size:27px; margin-top:2px;">2. Pamilihang May Hindi Ganap na Kompetisyon (Imperfect Competition)</h2>
        </div>
        <span class="cue-badge gold" style="font-size:14.5px; padding:6px 12px; margin-bottom:0;">Pindutin ang kard para Baliktarin ➔</span>
      </div>

      <div class="anim-fade-up stagger-2" style="background:#FEE2E2; border:2.5px dashed var(--market-red); border-radius:10px; padding:8px 16px; font-size:18px; font-weight:900; line-height:1.45; color:var(--market-red);">
        📌 <b>PRICE MAKER (TAGAPAGTAKDA NG PRESYO):</b> Sa estrukturang ito, may kapangyarihan ang isa o iilang negosyante na maimpluwensyahan o kontrolin ang presyo (₱) sa merkado.
      </div>

      <!-- 4 3D Flip Tiles -->
      <div class="anim-fade-up stagger-3" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; flex:1; min-height:0; margin-top:8px;">
        <!-- Card a: Monopolyo -->
        <div class="flip-card-wrap" id="card-monopolyo" onclick="App.toggleCardFlip('monopolyo')" style="cursor:pointer;">
          <div class="flip-card-inner">
            <div class="flip-card-front meta-card yellow" style="display:flex; flex-direction:column; justify-content:space-between; padding:16px 14px;">
              <div>
                <div style="font-size:42px; margin-bottom:4px;">⚡ 🚰</div>
                <h4 style="font-size:21px; font-weight:900; color:var(--market-red);">a. Monopolyo</h4>
                <p style="font-size:16.5px; font-weight:800; color:#1E293B; line-height:1.4; margin-top:8px;">Iisa ang tagaprodyus; walang direktang kapalit.</p>
              </div>
              <div class="peso-tag" style="font-size:12.5px; font-weight:900; padding:4px 10px; align-self:center;">Pindutin para Baliktarin ⟳</div>
            </div>
            <div class="flip-card-back meta-card white" style="display:flex; flex-direction:column; justify-content:space-between; padding:16px 14px; border:2.5px solid var(--market-red);">
              <div>
                <h4 style="font-size:18.5px; font-weight:900; color:var(--market-red); margin-bottom:6px;">Katangian at Halimbawa:</h4>
                <p style="font-size:16px; font-weight:800; line-height:1.4; color:#0F172A;">
                  May hadlang sa pagpasok ng bagong negosyo (barriers to entry). Walang kalaban.
                </p>
                <div style="margin-top:8px; font-size:16px; font-weight:900; color:var(--market-gold-dark); line-height:1.4;">
                  Halimbawa: Meralco (kuryente), Maynilad (tubig).
                </div>
              </div>
              <span style="font-size:12.5px; font-weight:900; color:#475569; text-align:center;">Pindutin muli upang ibalik</span>
            </div>
          </div>
        </div>

        <!-- Card b: Monopsonyo -->
        <div class="flip-card-wrap" id="card-monopsonyo" onclick="App.toggleCardFlip('monopsonyo')" style="cursor:pointer;">
          <div class="flip-card-inner">
            <div class="flip-card-front meta-card blue" style="display:flex; flex-direction:column; justify-content:space-between; padding:16px 14px;">
              <div>
                <div style="font-size:42px; margin-bottom:4px;">👮 🎖️</div>
                <h4 style="font-size:21px; font-weight:900; color:#0369A1;">b. Monopsonyo</h4>
                <p style="font-size:16.5px; font-weight:800; color:#1E293B; line-height:1.4; margin-top:8px;">Iisa ang mamimili ngunit maraming tagaprodyus.</p>
              </div>
              <div class="peso-tag" style="background:#0284C7; font-size:12.5px; font-weight:900; padding:4px 10px; align-self:center;">Pindutin para Baliktarin ⟳</div>
            </div>
            <div class="flip-card-back meta-card white" style="display:flex; flex-direction:column; justify-content:space-between; padding:16px 14px; border:2.5px solid #0369A1;">
              <div>
                <h4 style="font-size:18.5px; font-weight:900; color:#0369A1; margin-bottom:6px;">Katangian at Halimbawa:</h4>
                <p style="font-size:16px; font-weight:800; line-height:1.4; color:#0F172A;">
                  Ang mamimili ang may kontrol sa pasahod at presyo ng produkto/serbisyo.
                </p>
                <div style="margin-top:8px; font-size:16px; font-weight:900; color:#0284C7; line-height:1.4;">
                  Halimbawa: Pamahalaan (iisang bumibili ng serbisyo ng pulis at sundalo).
                </div>
              </div>
              <span style="font-size:12.5px; font-weight:900; color:#475569; text-align:center;">Pindutin muli upang ibalik</span>
            </div>
          </div>
        </div>

        <!-- Card c: Oligopolyo -->
        <div class="flip-card-wrap" id="card-oligopolyo" onclick="App.toggleCardFlip('oligopolyo')" style="cursor:pointer;">
          <div class="flip-card-inner">
            <div class="flip-card-front meta-card green" style="display:flex; flex-direction:column; justify-content:space-between; padding:16px 14px;">
              <div>
                <div style="font-size:42px; margin-bottom:4px;">⛽ 📶</div>
                <h4 style="font-size:21px; font-weight:900; color:var(--market-green);">c. Oligopolyo</h4>
                <p style="font-size:16.5px; font-weight:800; color:#1E293B; line-height:1.4; margin-top:8px;">Kakaunti ang nagtitinda; magkakaugnay ang presyo.</p>
              </div>
              <div class="peso-tag" style="background:var(--market-green); font-size:12.5px; font-weight:900; padding:4px 10px; align-self:center;">Pindutin para Baliktarin ⟳</div>
            </div>
            <div class="flip-card-back meta-card white" style="display:flex; flex-direction:column; justify-content:space-between; padding:16px 14px; border:2.5px solid var(--market-green);">
              <div>
                <h4 style="font-size:18.5px; font-weight:900; color:var(--market-green); margin-bottom:6px;">Katangian at Halimbawa:</h4>
                <p style="font-size:16px; font-weight:800; line-height:1.4; color:#0F172A;">
                  May hindi hayag na kasunduan sa presyo (collusion / cartel).
                </p>
                <div style="margin-top:8px; font-size:16px; font-weight:900; color:var(--market-green); line-height:1.4;">
                  Halimbawa: Petron, Shell, Caltex; Globe, Smart, DITO.
                </div>
              </div>
              <span style="font-size:12.5px; font-weight:900; color:#475569; text-align:center;">Pindutin muli upang ibalik</span>
            </div>
          </div>
        </div>

        <!-- Card d: Monopolistic Competition -->
        <div class="flip-card-wrap" id="card-monopolistic" onclick="App.toggleCardFlip('monopolistic')" style="cursor:pointer;">
          <div class="flip-card-inner">
            <div class="flip-card-front meta-card pink" style="display:flex; flex-direction:column; justify-content:space-between; padding:16px 14px;">
              <div>
                <div style="font-size:42px; margin-bottom:4px;">🍔 🧼</div>
                <h4 style="font-size:21px; font-weight:900; color:var(--market-red);">d. Monopolistic</h4>
                <p style="font-size:16.5px; font-weight:800; color:#1E293B; line-height:1.4; margin-top:8px;">Maraming nagtitinda ngunit differentiated ang produkto.</p>
              </div>
              <div class="peso-tag" style="background:var(--market-red); font-size:12.5px; font-weight:900; padding:4px 10px; align-self:center;">Pindutin para Baliktarin ⟳</div>
            </div>
            <div class="flip-card-back meta-card white" style="display:flex; flex-direction:column; justify-content:space-between; padding:16px 14px; border:2.5px solid var(--market-red);">
              <div>
                <h4 style="font-size:18.5px; font-weight:900; color:var(--market-red); margin-bottom:6px;">Katangian at Halimbawa:</h4>
                <p style="font-size:16px; font-weight:800; line-height:1.4; color:#0F172A;">
                  May kaunting pagkakaiba sa tatak, amoy, o lasa. Gumagamit ng patalastas.
                </p>
                <div style="margin-top:8px; font-size:16px; font-weight:900; color:var(--market-red); line-height:1.4;">
                  Halimbawa: Jollibee, McDonald's; Tide, Surf, Safeguard.
                </div>
              </div>
              <span style="font-size:12.5px; font-weight:900; color:#475569; text-align:center;">Pindutin muli upang ibalik</span>
            </div>
          </div>
        </div>
      </div>
    </div>`
});

/* 19. APPLICATION: "SURIIN AT I-ARTE!" (4 ENVELOPES) */
registerSlide({
  id: "application",
  nav: "Gawain: Suriin at I-Arte!",
  theme: "theme-application",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="cue-badge gold" style="margin-bottom:0;">⏱ 10 Minuto · 4. APPLICATION (Paglalapat)</span>
          <h2 class="slide-h2" style="font-size:25px; margin-top:2px;">Pangkatang Dula-Dulaan: "Suriin at I-Arte!"</h2>
        </div>
        <div style="display:flex; gap:10px;">
          <button class="btn" style="font-size:12px; padding:6px 14px;" onclick="App.resetEnvelopes()">🔄 Isara ang mga Sobre</button>
          <button class="btn gold" style="font-size:12px; padding:6px 14px;" onclick="App.jumpToId('rubric')">Tingnan ang Rubrik ➔</button>
        </div>
      </div>

      <div class="meta-card yellow anim-fade-up stagger-2" style="padding:10px 18px; font-size:15.5px; font-weight:700;">
        <b>Panuto:</b> Ang bawat pangkat ay bubunot ng isang sobre at maghahanda ng maikling dula-dulaan (<b>1–2 minuto</b>) na nagpapakita ng totoong sitwasyon ng bentahan. Pindutin ang sobre upang buksan ang sitwasyon:
      </div>

      <!-- 4 Roleplay Envelopes -->
      <div class="anim-fade-up stagger-3" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; height:350px;">
        ${lessonData.rolePlayGroups.map((grp, idx) => `
          <div class="meta-card white" id="envCard-${idx}" style="cursor:pointer; display:flex; flex-direction:column; justify-content:space-between; text-align:center; padding:16px;" onclick="App.openRoleEnvelope(${idx})">
            <div>
              <div style="font-size:38px;">${grp.icon}</div>
              <h3 style="font-family:'Space Grotesk',sans-serif; font-size:18px; color:var(--market-red); margin:4px 0;">${grp.label}</h3>
              <div class="peso-tag" style="background:var(--slate-board); font-size:11px;">${grp.structure.split('(')[0]}</div>
            </div>

            <div id="envStatus-${idx}" style="margin:16px 0;">
              <div style="font-size:42px;">✉️</div>
              <div style="font-size:13px; font-weight:800; color:var(--market-gold); margin-top:4px;">Pindutin upang Buksan</div>
            </div>

            <div id="envScenario-${idx}" style="display:none; text-align:left; background:#FFFFFF; padding:12px 14px; border-radius:10px; border:2px solid #D97706; font-size:14px; font-weight:800; line-height:1.45; color:#0F172A; box-shadow:0 3px 10px rgba(0,0,0,0.1);">
              <div style="font-family:'Space Grotesk',sans-serif; font-size:11px; font-weight:900; color:#B45309; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:4px;">
                📜 Sitwasyon ng Dula-Dulaan:
              </div>
              ${grp.scenario}
            </div>

            <span style="font-family:'Space Grotesk',sans-serif; font-size:12px; font-weight:900; color:#334155; margin-top:6px;">⏱ Oras: 1–2 Minuto</span>
          </div>
        `).join('')}
      </div>
    </div>`
});

/* 20. RUBRIC TABLE */
registerSlide({
  id: "rubric",
  nav: "Pamantayan sa Pagmamarka (Rubrik)",
  theme: "theme-application",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <div>
          <span class="cue-badge green" style="margin-bottom:0;">Pamantayan sa Pagmamarka</span>
          <h2 class="slide-h2" style="font-size:26px; margin-top:2px;">Rubrik sa Pangkatang Dula-Dulaan</h2>
        </div>
        <button class="btn primary" style="font-size:13px; padding:6px 18px;" onclick="App.jumpToId('quiz')">
          Tumuloy sa Pagtataya ➔
        </button>
      </div>

      <div class="anim-fade-up stagger-2">
        <table class="rubric-table">
          <thead>
            <tr>
              <th style="width:38%;">Pamantayan</th>
              <th style="width:18%;">Puntos</th>
              <th style="width:44%;">Deskripsyon</th>
            </tr>
          </thead>
          <tbody>
            ${lessonData.rubric.map(r => `
              <tr>
                <td><b>${r.criteria}</b></td>
                <td><span class="peso-tag" style="background:var(--market-red); font-size:14px;">${r.pts}</span></td>
                <td>${r.desc}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>`
});

/* 21. PAGTATAYA (5-ITEM SCORED EVALUATION QUIZ) */
/* 21. PAGTATAYA (5-ITEM SCORED EVALUATION QUIZ - ARCADE QUEST) */
registerSlide({
  id: "quiz",
  nav: "Pagtataya sa Aralin",
  theme: "theme-exam",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
      
      <!-- 5 Quest Cards Row (Matching Reference Image) -->
      <div class="anim-fade-up stagger-1" style="display:grid; grid-template-columns:repeat(5, 1fr); gap:8px; height:78px; margin-bottom:6px;">
        <!-- Card 1: Pamilihan -->
        <div class="quest-card" id="qcard-0" onclick="App.renderQuizQuestion(0)" style="cursor:pointer;">
          <div class="quest-num-badge">1</div>
          <div style="font-size:20px; margin-top:2px;">🏪</div>
          <div style="font-family:'Space Grotesk',sans-serif; font-size:10.5px; font-weight:900; color:#0F172A; text-transform:uppercase; line-height:1.1;">PAMILIHAN</div>
          <div class="quest-lock-pill" id="qlock-0"><span>🔒</span></div>
        </div>

        <!-- Card 2: Monopolyo -->
        <div class="quest-card" id="qcard-1" onclick="App.renderQuizQuestion(1)" style="cursor:pointer;">
          <div class="quest-num-badge">2</div>
          <div style="font-size:20px; margin-top:2px;">🏢</div>
          <div style="font-family:'Space Grotesk',sans-serif; font-size:10.5px; font-weight:900; color:#0F172A; text-transform:uppercase; line-height:1.1;">MONOPOLYO</div>
          <div class="quest-lock-pill" id="qlock-1"><span>🔒</span></div>
        </div>

        <!-- Card 3: Demand & Supply Interaction -->
        <div class="quest-card" id="qcard-2" onclick="App.renderQuizQuestion(2)" style="cursor:pointer;">
          <div class="quest-num-badge">3</div>
          <div style="font-size:20px; margin-top:2px;">⚖️</div>
          <div style="font-family:'Space Grotesk',sans-serif; font-size:10px; font-weight:900; color:#0F172A; text-transform:uppercase; line-height:1.1;">PRICE TAKER</div>
          <div class="quest-lock-pill" id="qlock-2"><span>🔒</span></div>
        </div>

        <!-- Card 4: Oligopolyo -->
        <div class="quest-card" id="qcard-3" onclick="App.renderQuizQuestion(3)" style="cursor:pointer;">
          <div class="quest-num-badge">4</div>
          <div style="font-size:20px; margin-top:2px;">🏬</div>
          <div style="font-family:'Space Grotesk',sans-serif; font-size:10.5px; font-weight:900; color:#0F172A; text-transform:uppercase; line-height:1.1;">OLIGOPOLYO</div>
          <div class="quest-lock-pill" id="qlock-3"><span>🔒</span></div>
        </div>

        <!-- Card 5: Monopsonyo -->
        <div class="quest-card" id="qcard-4" onclick="App.renderQuizQuestion(4)" style="cursor:pointer;">
          <div class="quest-num-badge">5</div>
          <div style="font-size:20px; margin-top:2px;">🏛️</div>
          <div style="font-family:'Space Grotesk',sans-serif; font-size:10.5px; font-weight:900; color:#0F172A; text-transform:uppercase; line-height:1.1;">MONOPSONYO</div>
          <div class="quest-lock-pill" id="qlock-4"><span>🔒</span></div>
        </div>
      </div>

      <!-- Question Prompt Box -->
      <div class="anim-fade-up stagger-2" style="background:linear-gradient(180deg, #0B254E 0%, #051833 100%); border:2px solid #1E4976; border-radius:10px; padding:8px 14px; margin-bottom:6px; box-shadow:0 4px 12px rgba(0,0,0,0.5);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2px;">
          <span style="font-family:'Space Grotesk',sans-serif; font-size:10.5px; font-weight:900; color:#FBBF24; text-transform:uppercase;" id="quizProgressTag">Tanong 1 ng 5</span>
          <span style="font-size:10.5px; font-weight:800; color:#38BDF8;">Piliin ang pinakatamang sagot sa ibaba:</span>
        </div>
        <h3 id="quizQuestionText" style="font-family:'Space Grotesk',sans-serif; font-size:15.5px; color:#FFFFFF; margin:0; line-height:1.35;"></h3>
      </div>

      <!-- Choices Area -->
      <div class="anim-fade-up stagger-3" id="quizChoicesWrap" style="display:grid; grid-template-columns:1fr 1fr; gap:8px;"></div>

      <!-- Instant Feedback Box -->
      <div id="quizFeedbackBox" style="min-height:42px;"></div>

      <!-- Summary Box when Done -->
      <div id="quizSummaryBox" style="display:none; text-align:center; padding:14px; background:rgba(6, 30, 66, 0.95); border:2px solid #FBBF24; border-radius:12px; margin-top:6px;"></div>
    </div>`,
  afterRender: () => App.renderQuizQuestion(App.quizCurrentIndex)
});

/* 22. TAKDANG-ARALIN (ASSIGNMENT) */
registerSlide({
  id: "assignment",
  nav: "V. Takdang-Aralin",
  theme: "theme-exam",
  render: () => `
    <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <div>
          <span class="cue-badge gold" style="margin-bottom:0;">⏱ V. TAKDANG-ARALIN</span>
          <h2 class="slide-h2" style="font-size:28px; margin-top:4px;">Kasunduan at Repleksyon sa Kuwaderno</h2>
        </div>
        ${Mascots.kuyaJuan('curious', 85)}
      </div>

      <div class="meta-card yellow anim-fade-up stagger-2" style="padding:24px 28px; margin-bottom:18px;">
        <h3 style="font-family:'Space Grotesk',sans-serif; font-size:18px; color:var(--market-red); margin-bottom:8px;">
          📝 Katanungan para sa Takdang-Aralin:
        </h3>
        <p style="font-size:22px; font-weight:800; line-height:1.5; color:var(--slate-board);">
          ${lessonData.assignment.prompt}
        </p>
      </div>

      <div class="meta-card white anim-fade-up stagger-3" style="padding:16px 24px; font-size:18px; font-weight:700;">
        📌 <b>Pormat ng Pagsusumite:</b> ${lessonData.assignment.format} Ibahagi sa klase bukas.
      </div>
    </div>`
});

/* 23. CLOSING / PAGTATAPOS */
registerSlide({
  id: "closing",
  nav: "Pagtatapos ng Aralin",
  theme: "theme-classroom",
  render: () => `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%;">
      <div class="anim-fade-up stagger-1" style="display:flex; align-items:center; justify-content:center; gap:28px; margin-bottom:18px;">
        ${Mascots.alingNena('happy', 115)}
        ${Mascots.speechBubble('Maraming salamat sa inyong aktibong pakikilahok at pagsusuri sa pamilihan!', 'left', 'yellow')}
        ${Mascots.kuyaJuan('happy', 115)}
      </div>

      <h1 class="slide-h1 anim-fade-up stagger-2" style="font-size:42px; margin-bottom:12px;">
        Maraming Salamat, Baitang 9!
      </h1>

      <div class="meta-card green anim-fade-up stagger-3" style="max-width:760px; font-size:20px; font-weight:800; color:var(--market-green-dark); padding:16px 28px; margin-bottom:20px;">
        "Maging mapanuring mamimili at responsableng negosyante para sa maunlad na ekonomiya ng bansa."
      </div>

      <div class="anim-fade-up stagger-4">
        <button class="btn outline" style="font-size:16px; padding:10px 28px;" onclick="App.jumpToId('title')">
          🔄 Bumalik sa Simula ng Presentasyon
        </button>
      </div>
    </div>`
});
