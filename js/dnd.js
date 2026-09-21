/* ============================================================
   REAL DRAG-AND-DROP SORTING GAME CONTROLLER
   DepEd Grade 9 Araling Panlipunan: Pamilihan Lesson
   Supports:
   1. Pointer-Based Drag & Drop (Touchscreen, Stylus & Mouse)
   2. Native HTML5 Drag & Drop (Desktop Dragging)
   3. Single-Tap / Click-to-Place Accessibility Fallback
   4. Instant Clean Game Reset (Re-populates 13 Chips)
   ============================================================ */

const DnDController = {
  draggedItem: null,
  selectedTapItem: null,
  placedCount: 0,
  ghostEl: null,

  init: () => {
    DnDController.ghostEl = document.getElementById('dragGhost');
    DnDController.setupDropZones();
    DnDController.resetGame();
  },

  setupDropZones: () => {
    if (!lessonData || !lessonData.sortCategories) return;

    lessonData.sortCategories.forEach(cat => {
      const zoneEl = document.getElementById('zone-' + cat.id);
      if (!zoneEl) return;

      // Clean old listeners by cloning or direct attachment
      // Native HTML5 dragover & drop
      zoneEl.ondragover = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        zoneEl.classList.add('drag-hover');
      };

      zoneEl.ondragleave = () => {
        zoneEl.classList.remove('drag-hover');
      };

      zoneEl.ondrop = (e) => {
        e.preventDefault();
        zoneEl.classList.remove('drag-hover');
        const itemId = e.dataTransfer.getData('text/plain');
        const item = lessonData.sortItems.find(i => i.id === itemId) || DnDController.draggedItem;
        if (item) {
          DnDController.placeItem(item, cat.id);
        }
        DnDController.draggedItem = null;
      };

      // Tap-to-Place Fallback click listener
      zoneEl.onclick = () => {
        if (DnDController.selectedTapItem) {
          DnDController.placeItem(DnDController.selectedTapItem, cat.id);
          DnDController.clearTapSelection();
        }
      };
    });
  },

  renderPoolChips: () => {
    const poolEl = document.getElementById('sortChipsPool');
    if (!poolEl || !lessonData || !lessonData.sortItems) return;
    poolEl.innerHTML = '';

    lessonData.sortItems.forEach(item => {
      const chip = document.createElement('div');
      chip.className = 'drag-chip anim-fade-up';
      chip.id = 'chip-' + item.id;
      chip.setAttribute('draggable', 'true');
      chip.setAttribute('data-id', item.id);
      chip.innerHTML = `
        <span>${item.label}</span>
        <span class="peso-tag" style="font-size:11px; padding:2px 6px;">${item.price}</span>
      `;

      // HTML5 native dragstart
      chip.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.id);
        e.dataTransfer.effectAllowed = 'move';
        DnDController.draggedItem = item;
        DnDController.clearTapSelection();
      });

      // Pointer dragstart & fallback click handler
      chip.addEventListener('pointerdown', (e) => DnDController.onPointerDown(e, item));

      poolEl.appendChild(chip);
    });
  },

  resetGame: () => {
    DnDController.placedCount = 0;
    DnDController.draggedItem = null;
    DnDController.clearTapSelection();

    // Re-populate all 13 chips in the pool
    DnDController.renderPoolChips();

    // Clear all 5 drop zones
    if (lessonData && lessonData.sortCategories) {
      lessonData.sortCategories.forEach(cat => {
        const itemsContainer = document.getElementById('items-' + cat.id);
        if (itemsContainer) itemsContainer.innerHTML = '';
      });
    }

    // Reset remaining items badge
    const total = lessonData ? lessonData.sortItems.length : 13;
    const remEl = document.getElementById('sortRemainingBadge');
    if (remEl) remEl.textContent = `Natitira: ${total} / ${total}`;

    // Hide completion banner
    const banner = document.getElementById('sortAllDoneBanner');
    if (banner) banner.style.display = 'none';

    // Hide ghost if visible
    if (DnDController.ghostEl) DnDController.ghostEl.style.display = 'none';
  },

  onPointerDown: (e, item) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;

    const startX = e.clientX;
    const startY = e.clientY;
    let isDragging = false;
    const ghost = DnDController.ghostEl;

    const onPointerMove = (moveEvent) => {
      const dist = Math.hypot(moveEvent.clientX - startX, moveEvent.clientY - startY);
      if (!isDragging && dist > 5) {
        isDragging = true;
        DnDController.draggedItem = item;
        if (ghost) {
          ghost.innerHTML = `<span>${item.label}</span> <span class="peso-tag" style="font-size:11px; margin-left:6px;">${item.price}</span>`;
          ghost.style.display = 'block';
        }
        DnDController.clearTapSelection();
      }

      if (isDragging && ghost) {
        ghost.style.left = moveEvent.clientX + 'px';
        ghost.style.top = moveEvent.clientY + 'px';
        DnDController.highlightDropZoneAtPoint(moveEvent.clientX, moveEvent.clientY);
      }
    };

    const onPointerUp = (upEvent) => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);

      if (isDragging) {
        if (ghost) ghost.style.display = 'none';
        const targetCategory = DnDController.getDropZoneCategoryAtPoint(upEvent.clientX, upEvent.clientY);
        DnDController.clearDropZoneHighlights();
        if (targetCategory) {
          DnDController.placeItem(item, targetCategory);
        }
        DnDController.draggedItem = null;
      } else {
        // Single tap/click selection
        DnDController.toggleTapItem(item);
      }
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  },

  highlightDropZoneAtPoint: (x, y) => {
    DnDController.clearDropZoneHighlights();
    const cat = DnDController.getDropZoneCategoryAtPoint(x, y);
    if (cat) {
      const zone = document.getElementById('zone-' + cat);
      if (zone) zone.classList.add('drag-hover');
    }
  },

  clearDropZoneHighlights: () => {
    document.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('drag-hover'));
  },

  getDropZoneCategoryAtPoint: (x, y) => {
    const elements = document.elementsFromPoint(x, y);
    for (const el of elements) {
      const zone = el.closest('.drop-zone');
      if (zone && zone.dataset.category) {
        return zone.dataset.category;
      }
    }
    return null;
  },

  toggleTapItem: (item) => {
    if (typeof App !== 'undefined' && App.ensureGameMusicPlaying) {
      App.ensureGameMusicPlaying('motivation-game');
    }
    const chip = document.getElementById('chip-' + item.id);
    if (!chip) return;

    if (DnDController.selectedTapItem && DnDController.selectedTapItem.id === item.id) {
      DnDController.clearTapSelection();
    } else {
      DnDController.clearTapSelection();
      DnDController.selectedTapItem = item;
      chip.classList.add('selected-tap');
    }
  },

  clearTapSelection: () => {
    DnDController.selectedTapItem = null;
    document.querySelectorAll('.drag-chip').forEach(c => c.classList.remove('selected-tap'));
  },

  placeItem: (item, categoryId) => {
    const chip = document.getElementById('chip-' + item.id);
    if (!chip || chip.classList.contains('placed')) return;

    chip.classList.add('placed');
    chip.style.display = 'none'; // Cleanly hide from pool so remaining chips re-flow

    const container = document.getElementById('items-' + categoryId);
    if (container) {
      const isCorrect = item.correct === categoryId;
      if (typeof App !== 'undefined') {
        if (App.playSfx) App.playSfx(isCorrect ? 'correct' : 'wrong');
        if (App.ensureGameMusicPlaying) App.ensureGameMusicPlaying('motivation-game');
      }
      const badge = document.createElement('div');
      badge.className = 'placed-badge ' + (isCorrect ? 'correct' : 'wrong');
      badge.innerHTML = `${item.label} ${isCorrect ? '✓' : '✕ (Iwasto)'}`;
      container.appendChild(badge);
      container.scrollTop = container.scrollHeight;

      DnDController.placedCount++;
      const rem = lessonData.sortItems.length - DnDController.placedCount;
      const remEl = document.getElementById('sortRemainingBadge');
      if (remEl) remEl.textContent = `Natitira: ${rem} / ${lessonData.sortItems.length}`;

      if (DnDController.placedCount >= lessonData.sortItems.length) {
        const banner = document.getElementById('sortAllDoneBanner');
        if (banner) banner.style.display = 'block';
        App.addScore(50);
      }
    }
  }
};
