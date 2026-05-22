/* ========================================
   HAKO - App Đọc Truyện
   Main Application Logic
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHomeTabs();
  initCarousel();
  initCategoryChips();
  initLibraryTabs();
  initForumTabs();
  initSearchOverlay();
});

/* ==========================================
   HOME TABS (Sáng tác / Truyện dịch / AI dịch)
   ========================================== */
function initHomeTabs() {
  const tabs = document.querySelectorAll('.home-tab');
  const contents = document.querySelectorAll('.home-tab-content');
  const indicator = document.getElementById('home-tab-indicator');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.homeTab;

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Slide indicator
      if (indicator) {
        indicator.style.transform = `translateX(${index * 100}%)`;
      }

      // Switch content
      contents.forEach(content => {
        if (content.id === `home-content-${target}`) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });

      // Scroll to top
      const pageContent = document.querySelector('.home-page-content');
      if (pageContent) {
        pageContent.scrollTop = 0;
      }
    });
  });
}

/* ==========================================
   BOTTOM NAVIGATION (4 tabs)
   ========================================== */
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const pages = document.querySelectorAll('.page');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetPage = item.dataset.page;

      // Update nav items
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      // Haptic feedback (if supported)
      if (navigator.vibrate) {
        navigator.vibrate(10);
      }

      // Switch pages with animation
      pages.forEach(page => {
        if (page.id === `page-${targetPage}`) {
          page.style.display = 'block';
          // Force reflow for animation
          void page.offsetHeight;
          page.classList.add('active');
        } else {
          page.classList.remove('active');
          // Delay hiding to allow fade out
          setTimeout(() => {
            if (!page.classList.contains('active')) {
              page.style.display = 'none';
            }
          }, 350);
        }
      });
    });
  });
}

/* ==========================================
   BANNER CAROUSEL
   ========================================== */
const bannerMockData = [
  {
    imageUrl: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=800&auto=format&fit=crop",
    targetUrl: "novel_detail.html"
  },
  {
    imageUrl: "https://docln.sbs/images/banners/2026/summer/lm.png",
    targetUrl: "novel_detail.html"
  },
  {
    imageUrl: "https://docln.sbs/images/banners/2026/summer/dm.png",
    targetUrl: "novel_detail.html"
  }
];

function renderBanners() {
  const carousels = document.querySelectorAll('.banner-carousel');
  carousels.forEach(carousel => {
    let track = carousel.querySelector('.carousel-track');
    let dotsContainer = carousel.querySelector('.carousel-dots');
    
    // Add dots container if missing (for single-slide carousels)
    if (!dotsContainer) {
      dotsContainer = document.createElement('div');
      dotsContainer.className = 'carousel-dots';
      carousel.appendChild(dotsContainer);
    }
    
    if (track) {
      track.innerHTML = '';
      dotsContainer.innerHTML = '';
      
      bannerMockData.forEach((item, index) => {
        // Slide
        const slide = document.createElement('div');
        slide.className = `banner-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
          <a href="${item.targetUrl}" style="display:block; width:100%; height:100%; position:relative; z-index:2;">
            <img src="${item.imageUrl}" alt="Banner" style="width:100%; height:100%; object-fit:cover; border-radius: var(--radius-xl);">
          </a>
        `;
        track.appendChild(slide);
        
        // Dot
        const dot = document.createElement('span');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dotsContainer.appendChild(dot);
      });
    }
  });

  // Set initial hero blur background
  const heroBlur = document.getElementById('hero-blur-bg');
  if (heroBlur && bannerMockData.length > 0) {
    heroBlur.style.backgroundImage = `url('${bannerMockData[0].imageUrl}')`;
  }
}

function initCarousel() {
  renderBanners();
  const carousels = document.querySelectorAll('.banner-carousel');

  carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll('.banner-slide');
    const dots = carousel.querySelectorAll('.dot');
    const track = carousel.querySelector('.carousel-track');
    if (!slides.length) return;

    let currentSlide = 0;
    let autoplayInterval;
    let touchStartX = 0;
    let touchEndX = 0;

    function goToSlide(index) {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));

      currentSlide = index;
      if (currentSlide >= slides.length) currentSlide = 0;
      if (currentSlide < 0) currentSlide = slides.length - 1;

      slides[currentSlide].classList.add('active');
      if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
      }

      // Sync hero blur background with active slide (only from visible tab)
      const parentTab = carousel.closest('.home-tab-content');
      const isVisible = !parentTab || parentTab.classList.contains('active');
      if (isVisible) {
        const heroBlur = document.getElementById('hero-blur-bg');
        if (heroBlur && bannerMockData[currentSlide]) {
          heroBlur.style.backgroundImage = `url('${bannerMockData[currentSlide].imageUrl}')`;
        }
      }
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
      }
    }

    // Dot clicks
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        startAutoplay();
      });
    });

    // Touch swipe support
    if (track) {
      track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoplay();
      }, { passive: true });

      track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            goToSlide(currentSlide + 1);
          } else {
            goToSlide(currentSlide - 1);
          }
        }
        startAutoplay();
      }, { passive: true });
    }

    // Start autoplay
    startAutoplay();

    // Pause on visibility change
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    });
  });
}

/* ==========================================
   CATEGORY CHIPS
   ========================================== */
function initCategoryChips() {
  const chips = document.querySelectorAll('.category-chip');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      // Find all sibling chips within the same quick-categories container
      const parentContainer = chip.closest('.quick-categories');
      if (parentContainer) {
        const siblingChips = parentContainer.querySelectorAll('.category-chip');
        siblingChips.forEach(c => c.classList.remove('active'));
      }
      chip.classList.add('active');

      // Subtle scale animation
      chip.style.transform = 'scale(0.92)';
      setTimeout(() => {
        chip.style.transform = 'scale(1)';
      }, 150);

      // Perform real filtering if this is in Toàn bộ tab
      const tabContent = chip.closest('#home-content-toanbo');
      if (tabContent) {
        const targetCategory = chip.dataset.category;
        const sections = tabContent.querySelectorAll('.novel-section');
        
        sections.forEach(section => {
          const type = section.dataset.sectionType;
          if (targetCategory === 'all' || type === targetCategory) {
            section.style.display = 'block';
            section.style.animation = 'fadeInUp 0.3s ease-out';
          } else {
            section.style.display = 'none';
          }
        });
      }
    });
  });

  // Enable horizontal scroll with mouse wheel (for desktop testing)
  document.querySelectorAll('.quick-categories').forEach(container => {
    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }, { passive: false });
  });
}

/* ==========================================
   LIBRARY TABS
   ========================================== */
function initLibraryTabs() {
  const tabs = document.querySelectorAll('.lib-tab');
  const tabContents = document.querySelectorAll('.lib-tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.libTab;

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Switch content
      tabContents.forEach(content => {
        if (content.id === `lib-content-${target}`) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });
}

/* ==========================================
   BOOKMARK TOGGLE (Explore page)
   ========================================== */
document.querySelectorAll('.trending-bookmark').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const svg = btn.querySelector('svg');
    const isActive = btn.classList.toggle('bookmarked');

    if (isActive) {
      svg.setAttribute('fill', 'currentColor');
      btn.style.color = '#3b82f6';
    } else {
      svg.setAttribute('fill', 'none');
      btn.style.color = '';
    }

    // Bounce animation
    btn.style.transform = 'scale(0.7)';
    setTimeout(() => {
      btn.style.transform = 'scale(1.15)';
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
      }, 150);
    }, 100);
  });
});

/* ==========================================
   HORIZONTAL SCROLL (mouse wheel for desktop)
   ========================================== */
document.querySelectorAll('.horizontal-scroll, .achievements-scroll').forEach(container => {
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  }, { passive: false });
});

/* ==========================================
   FORUM TABS
   ========================================== */
function initForumTabs() {
  const tabs = document.querySelectorAll('.forum-tab');
  const tabContents = document.querySelectorAll('.forum-tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.forumTab;

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Switch content
      tabContents.forEach(content => {
        if (content.id === `forum-content-${target}`) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });
}

/* ==========================================
   SEARCH OVERLAY
   ========================================== */
function initSearchOverlay() {
  const searchOverlay = document.getElementById('search-overlay');
  const triggerBtn = document.getElementById('btn-search-trigger');
  const backBtn = document.getElementById('btn-search-back');
  const clearBtn = document.getElementById('btn-search-clear');
  const searchInput = document.getElementById('search-overlay-input');

  if (!searchOverlay) return;

  // Open overlay
  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      setTimeout(() => {
        if (searchInput) searchInput.focus();
      }, 300);
    });
  }

  // Close overlay
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
      if (searchInput) {
        searchInput.value = '';
        searchInput.blur();
      }
      if (clearBtn) clearBtn.style.display = 'none';
    });
  }

  // Handle clear input and keyup
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      if (searchInput.value.trim().length > 0) {
        if (clearBtn) clearBtn.style.display = 'flex';
      } else {
        if (clearBtn) clearBtn.style.display = 'none';
      }
    });
  }

  // Clear input action
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      clearBtn.style.display = 'none';
    });
  }
}
