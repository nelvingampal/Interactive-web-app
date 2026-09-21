/* ============================================================
   MAIN APPLICATION ROUTER & STATE CONTROLLER
   Marketplace Economics Quest: Arcade UI, Scoring, XP & Stepper
   ============================================================ */

const App = {
  currentSlideIdx: 0,
  isTransitioning: false,

  // Gamified Economy Stats
  score: 250,
  level: 1,
  xp: 250,
  maxXp: 500,

  // Attendance Tally State
  attendanceTally: { 1: 0, 2: 0, 3: 0, 4: 0 },
  attendanceConfirmed: false,

  // Group Leaderboard Scores
  groupScores: { 1: 500, 2: 350, 3: 250, 4: 200 },

  // Analysis Questions State
  analysisAnswered: [false, false, false, false, false],
  analysisPicks: [null, null, null, null, null],

  // Quiz State
  quizCurrentIndex: 0,
  quizAnswers: [null, null, null, null, null],
  quizScore: 0,

  init: () => {
    StageController.init();

    // Render Market Props (Sack of Rice & Coins)
    const leftProp = document.getElementById('leftMarketPropContainer');
    if (leftProp && typeof Mascots.leftMarketPropSVG === 'function') {
      leftProp.innerHTML = Mascots.leftMarketPropSVG();
    }
    const rightCoin = document.getElementById('coinStackWrap');
    if (rightCoin && typeof Mascots.rightMarketPropSVG === 'function') {
      rightCoin.innerHTML = Mascots.rightMarketPropSVG();
    }

    // Render Glowing Marquee Bulbs
    const bulbsWrap = document.getElementById('marqueeBulbsContainer');
    if (bulbsWrap && typeof Mascots.renderMarqueeBulbs === 'function') {
      bulbsWrap.innerHTML = Mascots.renderMarqueeBulbs(28);
    }

    App.updateHudStats();
    App.updateLeaderboardUI();
    App.renderSlide(0, 'init');
  },

  addScore: (pts = 50) => {
    App.score += pts;
    App.xp += pts;
    if (App.xp >= App.maxXp) {
      App.level++;
      App.xp = App.xp - App.maxXp;
      App.maxXp += 250;
    }
    App.updateHudStats(true);
  },

  updateHudStats: (animate = false) => {
    const scoreVal = document.getElementById('hudScoreVal');
    if (scoreVal) {
      scoreVal.textContent = App.score;
      if (animate) {
        scoreVal.classList.remove('anim-celebrate');
        void scoreVal.offsetWidth;
        scoreVal.classList.add('anim-celebrate');
      }
    }

    const levelNum = document.getElementById('hudLevelNum');
    if (levelNum) levelNum.textContent = App.level;

    const xpText = document.getElementById('hudXpText');
    if (xpText) xpText.textContent = `${App.xp} / ${App.maxXp}`;

    const xpBar = document.getElementById('hudXpBar');
    if (xpBar) {
      const pct = Math.min(100, (App.xp / App.maxXp) * 100);
      xpBar.style.width = pct + '%';
    }
  },

  // 3D Perspective Slide Transition Handler
  renderSlide: (targetIdx, direction = 'next') => {
    if (targetIdx < 0 || targetIdx >= slides.length) return;
    if (App.isTransitioning && direction !== 'init') return;

    const canvas = document.getElementById('slideCanvas');
    if (!canvas) return;

    const oldSlideView = canvas.querySelector('.slide-view.active');
    const newSlideCfg = slides[targetIdx];
    App.currentSlideIdx = targetIdx;

    // Update Marquee Titles based on Slide
    App.updateMarqueeHeaders(newSlideCfg, targetIdx);

    // Create new slide container
    const newSlideView = document.createElement('div');
    newSlideView.className = 'slide-view';
    newSlideView.id = 'slide-' + newSlideCfg.id;
    newSlideView.innerHTML = newSlideCfg.render();

    if (direction === 'init') {
      canvas.innerHTML = '';
      newSlideView.classList.add('active');
      canvas.appendChild(newSlideView);
      if (typeof newSlideCfg.afterRender === 'function') {
        newSlideCfg.afterRender();
      }
      App.updateNavigationLabels(targetIdx);
      return;
    }

    App.isTransitioning = true;

    // Position new slide for 3D entry
    if (direction === 'next') {
      newSlideView.classList.add('enter-next');
      if (oldSlideView) oldSlideView.classList.add('exit-left');
    } else {
      newSlideView.classList.add('enter-prev');
      if (oldSlideView) oldSlideView.classList.add('exit-right');
    }

    canvas.appendChild(newSlideView);
    void newSlideView.offsetWidth;

    newSlideView.classList.remove('enter-next', 'enter-prev');
    newSlideView.classList.add('active');

    setTimeout(() => {
      if (oldSlideView && oldSlideView.parentNode === canvas) {
        canvas.removeChild(oldSlideView);
      }
      if (typeof newSlideCfg.afterRender === 'function') {
        newSlideCfg.afterRender();
      }
      App.isTransitioning = false;
    }, 400);

    App.updateNavigationLabels(targetIdx);
  },

  updateMarqueeHeaders: (slideCfg, index) => {
    const titleEl = document.getElementById('marqueeTitle');
    const subtitleEl = document.getElementById('marqueeSubtitle');
    if (!titleEl || !subtitleEl) return;

    if (slideCfg.id === 'quiz') {
      titleEl.textContent = "PAGTATAYA SA ARALIN!";
      subtitleEl.textContent = "★ ★ PILIIN ANG TAMANG SAGOT! ★ ★";
    } else if (slideCfg.id.startsWith('analysis')) {
      titleEl.textContent = "PAGSUSURI SA ARALIN!";
      subtitleEl.textContent = "★ ★ MATALINONG PAGSUSURI NG MAG-AARAL ★ ★";
    } else if (slideCfg.id === 'motivation-game') {
      titleEl.textContent = "HAMON SA PAG-UURI NG PAMILIHAN!";
      subtitleEl.textContent = "★ ★ HILAHIN AT I-PANGKAT ANG MGA PRODUKTO ★ ★";
    } else if (slideCfg.id === 'abs-def' || slideCfg.id.startsWith('abs-')) {
      titleEl.textContent = "ESTRAKTURA NG PAMILIHAN";
      subtitleEl.textContent = "★ ★ ARALIN AT MGA KATANGIAN ★ ★";
    } else if (slideCfg.id === 'application' || slideCfg.id === 'rubric') {
      titleEl.textContent = "SURIIN AT ISADULA!";
      subtitleEl.textContent = "★ ★ PANGKATANG DULA-DULAAN ★ ★";
    } else {
      titleEl.textContent = slideCfg.nav.toUpperCase();
      subtitleEl.textContent = "★ ★ EKONOMIKS 9 · ARALING PANLIPUNAN ★ ★";
    }
  },

  updateNavigationLabels: (index) => {
    const total = slides.length;
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const backLabel = document.getElementById('backPageLabel');
    const nextLabel = document.getElementById('nextPageLabel');

    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === total - 1;

    if (backLabel) backLabel.textContent = `(PAHINA ${Math.max(1, index)})`;
    if (nextLabel) nextLabel.textContent = `(PAHINA ${Math.min(total, index + 2)})`;

    // Update bottom stepper (1 to 5 mapping across major phases)
    let activeStep = 1;
    if (index >= 2 && index <= 7) activeStep = 1; // Panimula
    else if (index >= 8 && index <= 9) activeStep = 2; // Activity
    else if (index >= 10 && index <= 14) activeStep = 3; // Analysis
    else if (index >= 15 && index <= 17) activeStep = 4; // Abstraction
    else if (index >= 18) activeStep = 5; // Application & Evaluation

    for (let i = 1; i <= 5; i++) {
      const node = document.getElementById(`stepNode-${i}`);
      if (node) {
        node.className = 'step-node';
        if (i === activeStep) node.classList.add('active');
        else if (i < activeStep) node.classList.add('done');
      }
    }
  },

  nextSlide: () => {
    if (App.currentSlideIdx < slides.length - 1) {
      App.renderSlide(App.currentSlideIdx + 1, 'next');
    }
  },

  prevSlide: () => {
    if (App.currentSlideIdx > 0) {
      App.renderSlide(App.currentSlideIdx - 1, 'prev');
    }
  },

  jumpToId: (slideId) => {
    const idx = slides.findIndex(s => s.id === slideId);
    if (idx !== -1) {
      const dir = idx >= App.currentSlideIdx ? 'next' : 'prev';
      App.renderSlide(idx, dir);
    } else {
      console.warn(`Slide ID "${slideId}" not found`);
    }
  },

  // Group Leaderboard Dynamic Updates
  updateLeaderboardUI: () => {
    [1, 2, 3, 4].forEach(num => {
      const el = document.getElementById(`lbScore${num}`);
      if (el) {
        el.textContent = App.groupScores[num];
        el.classList.remove('anim-celebrate');
        void el.offsetWidth;
        el.classList.add('anim-celebrate');
      }
    });
  },

  // Quick Attendance Logic (Single-Tap & 1-Click System)
  setGroupAttendance: (groupNum, count) => {
    App.attendanceTally[groupNum] = count;
    App.updateAttendanceCardUI(groupNum);
    App.updateAttendanceSummaryUI();
  },

  updateAttendance: (groupNum, delta) => {
    const current = App.attendanceTally[groupNum] || 0;
    App.setGroupAttendance(groupNum, Math.max(0, current + delta));
  },

  updateAttendanceCardUI: (groupNum) => {
    const card = document.getElementById(`attCard-${groupNum}`);
    const pill = document.getElementById(`attStatus-${groupNum}`);
    if (!pill || !card) return;

    const absCount = App.attendanceTally[groupNum] || 0;
    const isComplete = absCount === 0;

    pill.className = 'att-status-pill ' + (isComplete ? 'complete' : (absCount === 1 ? 'absent' : 'warning'));
    pill.textContent = isComplete ? '✅ KOMPLETO (100%)' : (absCount === 1 ? '⚠️ 1 Lumiban' : `⚠️ ${absCount} Lumiban`);

    // Update active chip classes
    const chips = card.querySelectorAll('.att-chip');
    if (chips.length >= 3) {
      chips[0].className = 'att-chip' + (absCount === 0 ? ' active-complete' : '');
      chips[1].className = 'att-chip' + (absCount === 1 ? ' active-absent' : '');
      chips[2].className = 'att-chip' + (absCount >= 2 ? ' active-warning' : '');
    }
  },

  markAllPresent: () => {
    [1, 2, 3, 4].forEach(g => {
      App.attendanceTally[g] = 0;
      App.updateAttendanceCardUI(g);
    });
    App.attendanceConfirmed = true;
    App.addScore(50);
    // Award +50 bonus to all 4 groups on leaderboard
    [1, 2, 3, 4].forEach(g => {
      App.groupScores[g] = (App.groupScores[g] || 200) + 50;
    });
    App.updateLeaderboardUI();
    App.updateAttendanceSummaryUI();

    // Visual celebration animation on summary banner
    const summary = document.getElementById('attSummaryText');
    if (summary) {
      summary.classList.remove('anim-celebrate');
      void summary.offsetWidth;
      summary.classList.add('anim-celebrate');
    }
  },

  confirmAttendance: () => {
    App.attendanceConfirmed = true;
    const totalAbsent = Object.values(App.attendanceTally).reduce((a, b) => a + b, 0);
    if (totalAbsent === 0) {
      App.addScore(50);
      [1, 2, 3, 4].forEach(g => {
        App.groupScores[g] = (App.groupScores[g] || 200) + 50;
      });
      App.updateLeaderboardUI();
    } else {
      App.addScore(25);
    }
    App.updateAttendanceSummaryUI();
  },

  resetAttendance: () => {
    [1, 2, 3, 4].forEach(g => {
      App.attendanceTally[g] = 0;
      App.updateAttendanceCardUI(g);
    });
    App.attendanceConfirmed = false;
    App.updateAttendanceSummaryUI();
  },

  getAttendanceSummaryHTML: () => {
    const totalAbsent = Object.values(App.attendanceTally).reduce((a, b) => a + b, 0);
    const completeCount = [1, 2, 3, 4].filter(g => (App.attendanceTally[g] || 0) === 0).length;

    if (totalAbsent === 0) {
      return `<span style="color:#4ADE80; font-size:18px;">🌟</span> <span><b>100% PAGDALO:</b> Lahat ng 4 na Pangkat ay Kompleto! (+50 Karagdagang XP)</span>`;
    } else {
      return `<span style="color:#FBBF24; font-size:18px;">📋</span> <span><b>TALAAN:</b> ${completeCount} sa 4 na Pangkat ang Kompleto · May kabuuang <b>${totalAbsent} lumiban</b>.</span>`;
    }
  },

  updateAttendanceSummaryUI: () => {
    const summary = document.getElementById('attSummaryText');
    if (summary) {
      summary.innerHTML = App.getAttendanceSummaryHTML();
    }
  },

  // Balik-Aral Reveal Logic
  revealReview: () => {
    const prompt = document.getElementById('reviewPrompt');
    const ans = document.getElementById('reviewAnswer');
    if (prompt && ans) {
      prompt.style.display = 'none';
      ans.style.display = 'block';
      App.addScore(25);
    }
  },

  // 3D Flip Card Toggle
  toggleCardFlip: (structureId) => {
    const card = document.getElementById('card-' + structureId);
    if (card) {
      card.classList.toggle('flipped');
    }
  },

  // Roleplay Envelopes Reveal
  openRoleEnvelope: (idx) => {
    const status = document.getElementById('envStatus-' + idx);
    const scenario = document.getElementById('envScenario-' + idx);
    const card = document.getElementById('envCard-' + idx);
    if (status && scenario && card) {
      status.style.display = 'none';
      scenario.style.display = 'block';
      card.style.background = 'linear-gradient(180deg, #FFFBEB 0%, #FEF3C7 100%)';
      card.style.borderColor = '#F59E0B';
      card.style.boxShadow = '0 0 18px rgba(251, 191, 36, 0.45), 0 8px 22px rgba(0, 0, 0, 0.25)';
      App.addScore(20);
    }
  },

  resetEnvelopes: () => {
    lessonData.rolePlayGroups.forEach((_, idx) => {
      const status = document.getElementById('envStatus-' + idx);
      const scenario = document.getElementById('envScenario-' + idx);
      const card = document.getElementById('envCard-' + idx);
      if (status && scenario && card) {
        status.style.display = 'block';
        scenario.style.display = 'none';
        card.style.background = 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)';
        card.style.borderColor = '#CBD5E1';
        card.style.boxShadow = '0 5px 0 #94A3B8, 0 8px 18px rgba(0, 0, 0, 0.2)';
      }
    });
  },

  // Interactive Analysis Question Handlers
  handleAnalysisChoice: (qIdx, choiceIdx) => {
    const item = lessonData.analysisQuestions[qIdx];
    App.analysisAnswered[qIdx] = true;
    App.analysisPicks[qIdx] = choiceIdx;

    const isBest = choiceIdx === item.bestIndex;
    if (isBest) {
      App.addScore(50);
    }

    item.choices.forEach((_, cIdx) => {
      const btn = document.getElementById(`anBtn-${qIdx}-${cIdx}`);
      if (btn) {
        btn.disabled = true;
        if (cIdx === item.bestIndex) {
          btn.classList.add('best-pick');
          btn.innerHTML = `<span>${item.choices[cIdx]}</span><span style="font-weight:800; font-size:20px;">✓</span>`;
        }
        if (cIdx === choiceIdx && choiceIdx !== item.bestIndex) {
          btn.classList.add('wrong');
          btn.innerHTML = `<span>${item.choices[cIdx]}</span><span style="font-weight:800; font-size:20px;">✕</span>`;
        }
      }
    });

    const fb = document.getElementById('anFeedback-' + qIdx);
    if (fb) {
      fb.innerHTML = `
        <div class="anim-fade-up ${isBest ? 'anim-celebrate' : 'anim-shake'}" style="padding:12px 18px; border-radius:10px; background:${isBest ? 'rgba(20, 83, 45, 0.95)' : 'rgba(120, 53, 15, 0.95)'}; border:2px solid ${isBest ? '#22C55E' : '#F59E0B'}; box-shadow:0 0 16px ${isBest ? 'rgba(34, 197, 94, 0.6)' : 'rgba(245, 158, 11, 0.6)'};">
          <div style="font-family:'Space Grotesk',sans-serif; font-weight:900; font-size:18px; color:${isBest ? '#86EFAC' : '#FDE047'}; margin-bottom:4px;">
            ${isBest ? '🎉 Pinakamalapit sa tamang pagsusuri ✓ (+50 PUNTOS!)' : '💡 Pagpapalalim ng Guro sa Talakayan:'}
          </div>
          <p style="font-size:17px; font-weight:800; line-height:1.45; color:#FFFFFF; margin:0;">
            ${item.insight}
          </p>
          <div style="margin-top:10px;">
            ${qIdx < lessonData.analysisQuestions.length - 1 
              ? `<button class="btn-arcade-gold" style="font-size:14px; padding:8px 22px; font-weight:800;" onclick="App.nextSlide()">Susunod na Tanong (Tanong ${qIdx + 2}) ➔</button>`
              : `<button class="btn-arcade-gold" style="font-size:14px; padding:8px 22px; font-weight:800;" onclick="App.jumpToId('abs-def')">Magpatuloy sa Pagtalakay sa Aralin ➔</button>`
            }
          </div>
        </div>`;
    }
  },

  renderAnalysisSlideState: (qIdx) => {
    if (!App.analysisAnswered[qIdx]) return;
    const item = lessonData.analysisQuestions[qIdx];
    const picked = App.analysisPicks[qIdx];
    const isBest = picked === item.bestIndex;

    item.choices.forEach((_, cIdx) => {
      const btn = document.getElementById(`anBtn-${qIdx}-${cIdx}`);
      if (btn) {
        btn.disabled = true;
        if (cIdx === item.bestIndex) {
          btn.classList.add('best-pick');
          btn.innerHTML = `<span>${item.choices[cIdx]}</span><span style="font-weight:800; font-size:20px;">✓</span>`;
        }
        if (cIdx === picked && picked !== item.bestIndex) {
          btn.classList.add('wrong');
          btn.innerHTML = `<span>${item.choices[cIdx]}</span><span style="font-weight:800; font-size:20px;">✕</span>`;
        }
      }
    });

    const fb = document.getElementById('anFeedback-' + qIdx);
    if (fb && !fb.innerHTML.trim()) {
      fb.innerHTML = `
        <div class="anim-fade-up" style="padding:12px 18px; border-radius:10px; background:${isBest ? 'rgba(20, 83, 45, 0.95)' : 'rgba(120, 53, 15, 0.95)'}; border:2px solid ${isBest ? '#22C55E' : '#F59E0B'};">
          <div style="font-family:'Space Grotesk',sans-serif; font-weight:900; font-size:18px; color:${isBest ? '#86EFAC' : '#FDE047'}; margin-bottom:4px;">
            ${isBest ? '🎉 Pinakamalapit sa tamang pagsusuri ✓' : '💡 Pagpapalalim ng Guro sa Talakayan:'}
          </div>
          <p style="font-size:17px; font-weight:800; line-height:1.45; color:#FFFFFF; margin:0;">
            ${item.insight}
          </p>
          <div style="margin-top:10px;">
            ${qIdx < lessonData.analysisQuestions.length - 1 
              ? `<button class="btn-arcade-gold" style="font-size:14px; padding:8px 22px; font-weight:800;" onclick="App.nextSlide()">Susunod na Tanong (Tanong ${qIdx + 2}) ➔</button>`
              : `<button class="btn-arcade-gold" style="font-size:14px; padding:8px 22px; font-weight:800;" onclick="App.jumpToId('abs-def')">Magpatuloy sa Pagtalakay sa Aralin ➔</button>`
            }
          </div>
        </div>`;
    }
  },

  // Interactive Quiz Handlers (Verbatim Question Rendering & Scoring)
  renderQuizQuestion: (qIdx) => {
    App.quizCurrentIndex = qIdx;
    const q = lessonData.quizQuestions[qIdx];
    const qText = document.getElementById('quizQuestionText');
    const cWrap = document.getElementById('quizChoicesWrap');
    const fbBox = document.getElementById('quizFeedbackBox');
    const sumBox = document.getElementById('quizSummaryBox');

    if (!qText || !cWrap) return;

    if (sumBox) sumBox.style.display = 'none';
    if (fbBox) {
      fbBox.style.display = 'block';
      fbBox.innerHTML = '';
    }

    qText.textContent = q.q;

    // Update 5 Quest Cards states (Matching reference image)
    for (let i = 0; i < 5; i++) {
      const cardEl = document.getElementById(`qcard-${i}`);
      const lockEl = document.getElementById(`qlock-${i}`);
      if (cardEl) {
        if (i === qIdx) cardEl.classList.add('active-quest');
        else cardEl.classList.remove('active-quest');
      }
      if (lockEl) {
        const isAns = App.quizAnswers[i] !== null;
        if (isAns) {
          const isCorr = App.quizAnswers[i] === lessonData.quizQuestions[i].correct;
          lockEl.className = 'quest-lock-pill unlocked';
          lockEl.style.background = isCorr ? 'linear-gradient(135deg, #16A34A, #15803D)' : 'linear-gradient(135deg, #DC2626, #991B1B)';
          lockEl.style.color = '#FFFFFF';
          lockEl.innerHTML = `<span>${isCorr ? '✓' : '✕'}</span> <span>${isCorr ? 'TAMA' : 'MALI'}</span>`;
        } else {
          lockEl.className = 'quest-lock-pill';
          lockEl.style.background = '#334155';
          lockEl.style.color = '#94A3B8';
          lockEl.innerHTML = `<span>🔒</span>`;
        }
      }
    }

    const answered = App.quizAnswers[qIdx] !== null;
    const pickedIdx = App.quizAnswers[qIdx];

    cWrap.innerHTML = q.choices.map((ch, cIdx) => {
      let extraClass = '';
      let mark = '';
      if (answered) {
        if (cIdx === q.correct) {
          extraClass = 'correct';
          mark = '✓';
        } else if (cIdx === pickedIdx) {
          extraClass = 'wrong';
          mark = '✕';
        }
      }
      return `
        <button class="arcade-choice-btn ${extraClass}" id="quizBtn-${cIdx}" ${answered ? 'disabled' : ''} onclick="App.handleQuizChoice(${cIdx})">
          <span>${ch}</span>
          ${mark ? `<span style="font-weight:900; font-size:18px;">${mark}</span>` : ''}
        </button>
      `;
    }).join('');

    if (answered && fbBox) {
      const isCorrect = pickedIdx === q.correct;
      fbBox.innerHTML = `
        <div class="anim-fade-up" style="padding:8px 14px; border-radius:8px; background:${isCorrect ? 'rgba(20, 83, 45, 0.95)' : 'rgba(127, 29, 29, 0.95)'}; border:2px solid ${isCorrect ? '#22C55E' : '#EF4444'}; box-shadow:0 0 14px ${isCorrect ? 'rgba(34, 197, 94, 0.6)' : 'rgba(239, 68, 68, 0.6)'};">
          <div style="font-weight:900; font-size:14.5px; color:${isCorrect ? '#86EFAC' : '#FCA5A5'}; margin-bottom:2px;">
            ${isCorrect ? '✓ TAMA ANG SAGOT! (+50 PUNTOS!)' : '✕ MALI ANG SAGOT!'}
          </div>
          <p style="font-size:13.5px; font-weight:700; color:#F8FAFC; margin:0;">
            ${q.explanation}
          </p>
          <div style="margin-top:6px;">
            ${qIdx < lessonData.quizQuestions.length - 1 
              ? `<button class="btn-arcade-gold" style="font-size:12px; padding:4px 16px;" onclick="App.renderQuizQuestion(${qIdx + 1})">Susunod na Tanong ➔</button>`
              : `<button class="btn-arcade-gold" style="font-size:12px; padding:4px 16px;" onclick="App.showQuizSummary()">Tingnan ang Resulta ➔</button>`
            }
          </div>
        </div>
      `;
    }
  },

  handleQuizChoice: (choiceIdx) => {
    const qIdx = App.quizCurrentIndex;
    const q = lessonData.quizQuestions[qIdx];
    App.quizAnswers[qIdx] = choiceIdx;

    if (choiceIdx === q.correct) {
      App.quizScore++;
      App.addScore(50);
    }

    App.renderQuizQuestion(qIdx);
  },

  showQuizSummary: () => {
    const fbBox = document.getElementById('quizFeedbackBox');
    const sumBox = document.getElementById('quizSummaryBox');
    const cWrap = document.getElementById('quizChoicesWrap');
    const qText = document.getElementById('quizQuestionText');

    if (fbBox) fbBox.style.display = 'none';
    if (cWrap) cWrap.innerHTML = '';
    if (qText) qText.textContent = 'Pagtataya: Resulta ng Pagsusulit';

    if (sumBox) {
      sumBox.style.display = 'block';
      const pct = (App.quizScore / lessonData.quizQuestions.length) * 100;
      sumBox.innerHTML = `
        <div class="anim-fade-up anim-celebrate">
          <h2 style="font-family:'Bungee',sans-serif; font-size:26px; color:#FDE047; text-shadow:0 0 16px rgba(253, 224, 71, 0.7); margin-bottom:4px;">
            KABUUANG ISKOR: ${App.quizScore} / ${lessonData.quizQuestions.length} (${pct}%)
          </h2>
          <p style="font-size:16px; font-weight:800; color:#F8FAFC; margin-bottom:12px;">
            ${App.quizScore >= 4 ? '🎉 Napakahusay! Nakamit mo ang Medalya ng Henyo sa Pagsusulit!' : '💡 Magaling! Pagbalik-aralan ang mga katangian ng bawat estraktura.'}
          </p>
          <div style="display:flex; justify-content:center; gap:14px;">
            <button class="btn-arcade-blue" style="font-size:12px; padding:6px 18px;" onclick="App.resetQuiz()">🔄 Ulitin ang Pagsusulit</button>
            <button class="btn-arcade-gold" style="font-size:12px; padding:6px 18px;" onclick="App.jumpToId('assignment')">Tumuloy sa Takdang-Aralin ➔</button>
          </div>
        </div>
      `;
    }
  },

  resetQuiz: () => {
    App.quizCurrentIndex = 0;
    App.quizAnswers = [null, null, null, null, null];
    App.quizScore = 0;
    App.renderQuizQuestion(0);
  }
};

window.addEventListener('DOMContentLoaded', () => {
  App.init();
});
