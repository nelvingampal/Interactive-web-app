/* ============================================================
   STAGE & FULLSCREEN PRESENT MODE CONTROLLER
   DepEd Grade 9 Araling Panlipunan: Pamilihan Lesson
   Fluid Web Sizing & Flexible Fullscreen Present Mode
   ============================================================ */

const StageController = {
  stageEl: null,
  presentBtn: null,
  exitNoticeEl: null,

  init: () => {
    StageController.stageEl = document.getElementById('slideStage');
    StageController.presentBtn = document.getElementById('presentModeBtn');
    StageController.exitNoticeEl = document.getElementById('fullscreenExitNotice');

    // Handle resize & orientation changes
    window.addEventListener('resize', StageController.handleResize);
    window.addEventListener('orientationchange', StageController.handleResize);

    // Fullscreen API Events
    document.addEventListener('fullscreenchange', StageController.onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', StageController.onFullscreenChange);

    if (StageController.presentBtn) {
      StageController.presentBtn.addEventListener('click', StageController.toggleFullscreen);
    }
    if (StageController.exitNoticeEl) {
      StageController.exitNoticeEl.addEventListener('click', StageController.exitFullscreen);
    }

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        App.nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        App.prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        StageController.toggleFullscreen();
      } else if (e.key === 'm' || e.key === 'M') {
        if (typeof App.toggleMusic === 'function') {
          App.toggleMusic();
        }
      }
    });

    StageController.handleResize();
  },

  // Responsive fluid handler: Native fluid web view & flexible fullscreen
  handleResize: () => {
    if (!StageController.stageEl) return;
    const isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement);

    // Ensure fluid 100% dimensions without rigid transforms
    StageController.stageEl.style.transform = 'none';
    StageController.stageEl.style.width = '100%';
    StageController.stageEl.style.height = '100%';

    if (isFullscreen) {
      document.body.classList.add('is-fullscreen');
    } else {
      document.body.classList.remove('is-fullscreen');
    }
  },

  // Fullscreen Present Mode Toggle
  toggleFullscreen: () => {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      const el = document.documentElement;
      if (el.requestFullscreen) {
        el.requestFullscreen().catch(err => console.warn('Fullscreen error:', err));
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      }
    } else {
      StageController.exitFullscreen();
    }
  },

  exitFullscreen: () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  },

  onFullscreenChange: () => {
    const isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement);
    if (StageController.presentBtn) {
      if (isFullscreen) {
        StageController.presentBtn.innerHTML = `<span>✕</span><span class="hud-fs-label">UMALIS</span>`;
        StageController.presentBtn.style.background = 'linear-gradient(135deg, #DC2626, #991B1B)';
      } else {
        StageController.presentBtn.innerHTML = `<span>📺</span><span class="hud-fs-label">BUONG SCREEN</span>`;
        StageController.presentBtn.style.background = '';
      }
    }
    if (StageController.exitNoticeEl) {
      StageController.exitNoticeEl.style.display = isFullscreen ? 'flex' : 'none';
    }
    StageController.handleResize();
  }
};
