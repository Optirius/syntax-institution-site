<template>
  <section id="branches" class="section branches-section">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
        <div class="section-tag tag-red">
          <MapPin :size="16" />
          <span>Strategic Locations</span>
        </div>
        <h2 class="section-title">Our Campuses in Dhaka</h2>
        <p class="section-subtitle">
          Visit our modern, air-conditioned coaching facilities situated in central educational hubs of Dhaka.
        </p>
      </div>

      <!-- Branches Grid -->
      <div class="branches-grid">
        <!-- Dhanmondi Branch Card -->
        <div class="branch-card highlight-card">
          <div class="branch-badge">✨ New Office & Center</div>
          <div class="branch-header">
            <div class="branch-icon-box">
              <Building2 :size="24" class="text-gold" />
            </div>
            <div>
              <h3 class="branch-name">Dhanmondi Branch</h3>
              <span class="branch-type">Science Lab Hub</span>
            </div>
          </div>

          <div class="branch-address-block">
            <MapPin :size="18" class="icon-address text-gold" />
            <p class="address-text">
              <strong>32/2 Latimi Shopping Mall, 1st Floor</strong><br />
              Opposite to Teacher's Training College,<br />
              Science Lab, Dhaka 1205, Bangladesh.
            </p>
          </div>

          <div class="branch-features">
            <span class="feat-tag"><Check :size="12" /> JLPT Japanese Wing</span>
            <span class="feat-tag"><Check :size="12" /> AC High-Tech Classrooms</span>
            <span class="feat-tag"><Check :size="12" /> Central Dhaka Location</span>
            <span class="feat-tag"><Check :size="12" /> Admission & Counselling Desk</span>
          </div>

          <div class="branch-contact-links">
            <a href="tel:+8801737733026" class="contact-pill">
              <Phone :size="14" />
              <span>+880 1737-733026</span>
            </a>
            <a href="tel:+8801711811639" class="contact-pill">
              <Phone :size="14" />
              <span>+880 1711-811639</span>
            </a>
          </div>

          <div class="branch-card-actions">
            <a 
              href="https://maps.app.goo.gl/tmzCf7yf5RPKm5DC9" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-outline-white btn-sm w-full"
            >
              <Navigation :size="14" />
              <span>Open in Google Maps</span>
            </a>
            <a href="#contact" class="btn btn-primary btn-sm w-full">
              <span>Book Visit</span>
              <ArrowRight :size="14" />
            </a>
          </div>
        </div>

        <!-- Shyamoli Branch Card -->
        <div class="branch-card">
          <div class="branch-badge head-badge">🏛️ Head Office</div>
          <div class="branch-header">
            <div class="branch-icon-box">
              <Building2 :size="24" class="text-gold" />
            </div>
            <div>
              <h3 class="branch-name">Shyamoli Branch</h3>
              <span class="branch-type">Head Office & Academic Wing</span>
            </div>
          </div>

          <div class="branch-address-block">
            <MapPin :size="18" class="icon-address text-gold" />
            <p class="address-text">
              <strong>64/KC, PC Culture Housing Society</strong><br />
              Shyamoli,<br />
              Dhaka 1207, Bangladesh.
            </p>
          </div>

          <div class="branch-features">
            <span class="feat-tag"><Check :size="12" /> O & A Level Prep Wing</span>
            <span class="feat-tag"><Check :size="12" /> English Medium Support</span>
            <span class="feat-tag"><Check :size="12" /> Small Batch Study Rooms</span>
            <span class="feat-tag"><Check :size="12" /> Academic Counselling</span>
          </div>

          <div class="branch-contact-links">
            <a href="tel:+8801737733026" class="contact-pill">
              <Phone :size="14" />
              <span>+880 1737-733026</span>
            </a>
            <a href="tel:+8801711811639" class="contact-pill">
              <Phone :size="14" />
              <span>+880 1711-811639</span>
            </a>
          </div>

          <div class="branch-card-actions">
            <a 
              href="https://maps.app.goo.gl/tmzCf7yf5RPKm5DC9" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-outline-white btn-sm w-full"
            >
              <Navigation :size="14" />
              <span>Open in Google Maps</span>
            </a>
            <a href="#contact" class="btn btn-primary btn-sm w-full">
              <span>Book Visit</span>
              <ArrowRight :size="14" />
            </a>
          </div>
        </div>
      </div>

      <!-- Campus Sneak Peek Interactive Photo Slider -->
      <div 
        class="campus-photo-banner"
        @mouseenter="pauseAutoplay"
        @mouseleave="startAutoplay"
      >
        <div class="photo-banner-inner">
          <!-- Left Column: Content & Controls -->
          <div class="photo-banner-content">
            <div class="banner-header-row">
              <span class="photo-tag">Classroom & Center Sneak Peek</span>
              <span class="live-indicator">
                <span class="live-dot" :class="{ 'paused': isPaused }"></span>
                <span>{{ isPaused ? 'Paused' : 'Auto Rotating' }}</span>
              </span>
            </div>

            <h3>Modern, Distraction-Free Learning Spaces</h3>
            <p>
              Explore our study spaces equipped with climate control, interactive teaching boards, dedicated problem-solving areas, and small batch seating designed for focused individual attention.
            </p>

            <div class="facility-items">
              <div class="facility-item">
                <CheckCircle2 :size="16" class="text-gold" />
                <span>Fully Air Conditioned Study Rooms</span>
              </div>
              <div class="facility-item">
                <CheckCircle2 :size="16" class="text-gold" />
                <span>Audio-Visual JLPT Listening & Speaking Setup</span>
              </div>
              <div class="facility-item">
                <CheckCircle2 :size="16" class="text-gold" />
                <span>Prime Center at Science Lab & Shyamoli</span>
              </div>
            </div>

            <!-- Thumbnail Selector Tabs -->
            <div class="slider-tabs">
              <button 
                v-for="(photo, idx) in photos" 
                :key="photo.id"
                class="slider-tab-btn"
                :class="{ active: currentPhotoIndex === idx }"
                @click="goToPhoto(idx)"
              >
                <span class="tab-num">0{{ idx + 1 }}</span>
                <span class="tab-title">{{ photo.tabLabel }}</span>
              </button>
            </div>
          </div>

          <!-- Right Column: Interactive Image Carousel Frame -->
          <div class="photo-banner-media">
            <!-- Slides Container with Transition -->
            <div class="carousel-slide-container">
              <transition name="fade-slide" mode="out-in">
                <div 
                  :key="currentPhotoIndex" 
                  class="slide-wrapper clickable-slide"
                  @click="openModal(currentPhotoIndex)"
                  title="Click to view high-resolution photo in modal"
                >
                  <!-- Ambient blurred backdrop to fill letterbox gracefully -->
                  <div 
                    class="slide-backdrop" 
                    :style="{ backgroundImage: `url('${activePhoto.src}')` }"
                  ></div>
                  
                  <!-- Full Uncropped Foreground Image -->
                  <img 
                    :src="activePhoto.src" 
                    :alt="activePhoto.alt" 
                    class="sneak-peek-img"
                  />
                  
                  <!-- Floating Slide Badge -->
                  <div class="slide-badge-top">
                    <span class="badge-tag">{{ activePhoto.tag }}</span>
                    <span class="badge-counter">{{ currentPhotoIndex + 1 }} / {{ photos.length }}</span>
                  </div>

                  <!-- Zoom Hint Pill -->
                  <div class="zoom-pill">
                    <Maximize2 :size="13" />
                    <span>Click to enlarge</span>
                  </div>

                  <!-- Slide Caption Bar -->
                  <div class="photo-caption">
                    <span class="caption-text">{{ activePhoto.caption }}</span>
                  </div>
                </div>
              </transition>

              <!-- Left / Right Mouse Arrow Controls -->
              <button 
                class="slider-arrow prev" 
                @click.stop="prevPhoto" 
                aria-label="Previous image"
                title="Previous Photo"
              >
                <ChevronLeft :size="20" />
              </button>
              <button 
                class="slider-arrow next" 
                @click.stop="nextPhoto" 
                aria-label="Next image"
                title="Next Photo"
              >
                <ChevronRight :size="20" />
              </button>
            </div>

            <!-- Slide Progress Bar -->
            <div class="slider-progress-bar">
              <div 
                class="progress-fill" 
                :style="{ width: `${((currentPhotoIndex + 1) / photos.length) * 100}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- High-Resolution Lightbox Modal -->
    <Teleport to="body">
      <transition name="lightbox-fade">
        <div 
          v-if="isModalOpen" 
          class="lightbox-overlay"
          @click.self="closeModal"
        >
          <!-- Top Bar -->
          <div class="lightbox-header">
            <div class="lightbox-title-wrap">
              <span class="lightbox-tag">{{ modalPhoto.tag }}</span>
              <span class="lightbox-count">{{ modalPhotoIndex + 1 }} of {{ photos.length }}</span>
            </div>
            <button 
              class="lightbox-close-btn" 
              @click="closeModal" 
              title="Close Fullscreen (Esc)"
              aria-label="Close modal"
            >
              <X :size="24" />
            </button>
          </div>

          <!-- Main Stage -->
          <div class="lightbox-stage" @click.self="closeModal">
            <button 
              class="lightbox-nav-btn prev" 
              @click.stop="prevModalPhoto" 
              title="Previous photo (Left Arrow)"
              aria-label="Previous photo"
            >
              <ChevronLeft :size="32" />
            </button>

            <div class="lightbox-content-box">
              <transition name="fade-slide" mode="out-in">
                <img 
                  :key="modalPhotoIndex"
                  :src="modalPhoto.src" 
                  :alt="modalPhoto.alt" 
                  class="lightbox-img"
                />
              </transition>
            </div>

            <button 
              class="lightbox-nav-btn next" 
              @click.stop="nextModalPhoto" 
              title="Next photo (Right Arrow)"
              aria-label="Next photo"
            >
              <ChevronRight :size="32" />
            </button>
          </div>

          <!-- Bottom Caption Bar -->
          <div class="lightbox-footer">
            <p class="lightbox-caption">{{ modalPhoto.caption }}</p>
            <div class="lightbox-thumbnails">
              <button 
                v-for="(p, i) in photos" 
                :key="p.id"
                class="lightbox-thumb-btn"
                :class="{ active: modalPhotoIndex === i }"
                @click.stop="modalPhotoIndex = i"
              >
                <img :src="p.src" :alt="p.alt" class="thumb-mini-img" />
              </button>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { 
  MapPin, 
  Building2, 
  Check, 
  Phone, 
  Navigation, 
  ArrowRight, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X
} from 'lucide-vue-next'

const currentPhotoIndex = ref(0)
const isPaused = ref(false)
let autoplayTimer = null

// Modal state
const isModalOpen = ref(false)
const modalPhotoIndex = ref(0)

const photos = [
  {
    id: 1,
    src: '/images/center sneak peak banner.jpg',
    alt: 'Syntax Institution Dhanmondi Center Reception & Entrance',
    tag: 'Classroom Entrance',
    tabLabel: 'Front Reception Desk',
    caption: 'Dhanmondi Science Lab Center Reception & Admission Desk'
  },
  {
    id: 2,
    src: '/images/center-classroom-1.jpg',
    alt: 'Syntax Institution Air-Conditioned Classroom & Study Desks',
    tag: 'Classroom',
    tabLabel: 'Lecture & Study Room',
    caption: 'Spacious Study Desks, Lecture Whiteboard & Climate Control'
  },
  {
    id: 3,
    src: '/images/center-faculty-wall.jpg',
    alt: 'Syntax Institution Meet Our Faculty & Curriculum Board',
    tag: 'Faculty & Curriculum',
    tabLabel: 'Faculty & Courses Board',
    caption: 'Core Leadership, Cambridge O/A Level & JLPT Course Showcase'
  }
]

const activePhoto = computed(() => photos[currentPhotoIndex.value])
const modalPhoto = computed(() => photos[modalPhotoIndex.value])

const nextPhoto = () => {
  currentPhotoIndex.value = (currentPhotoIndex.value + 1) % photos.length
}

const prevPhoto = () => {
  currentPhotoIndex.value = (currentPhotoIndex.value - 1 + photos.length) % photos.length
}

const goToPhoto = (index) => {
  currentPhotoIndex.value = index
}

const startAutoplay = () => {
  if (isModalOpen.value) return
  isPaused.value = false
  clearInterval(autoplayTimer)
  autoplayTimer = setInterval(() => {
    nextPhoto()
  }, 3800)
}

const pauseAutoplay = () => {
  isPaused.value = true
  clearInterval(autoplayTimer)
}

// Modal functions
const openModal = (index) => {
  modalPhotoIndex.value = index
  isModalOpen.value = true
  pauseAutoplay()
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closeModal = () => {
  isModalOpen.value = false
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
  startAutoplay()
}

const nextModalPhoto = () => {
  modalPhotoIndex.value = (modalPhotoIndex.value + 1) % photos.length
}

const prevModalPhoto = () => {
  modalPhotoIndex.value = (modalPhotoIndex.value - 1 + photos.length) % photos.length
}

const handleKeydown = (e) => {
  if (!isModalOpen.value) return
  if (e.key === 'Escape') {
    closeModal()
  } else if (e.key === 'ArrowRight') {
    nextModalPhoto()
  } else if (e.key === 'ArrowLeft') {
    prevModalPhoto()
  }
}

onMounted(() => {
  startAutoplay()
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  clearInterval(autoplayTimer)
  window.removeEventListener('keydown', handleKeydown)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.branches-section {
  background: var(--bg-body);
  border-top: 1px solid var(--border-subtle);
  transition: background-color var(--transition-normal);
}

.text-gold {
  color: var(--color-gold);
}

.text-red {
  color: var(--color-red);
}

.branches-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-bottom: 4rem;
}

.branch-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-xl);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: var(--shadow-card);
  transition: all var(--transition-normal);
}

.branch-card.highlight-card {
  border-color: rgba(229, 9, 20, 0.4);
  background: var(--bg-card-highlight);
  box-shadow: var(--shadow-elevated), 0 0 20px rgba(229, 9, 20, 0.1);
}

.branch-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-gold);
}

.branch-badge {
  position: absolute;
  top: -14px;
  right: 24px;
  background: var(--color-red);
  color: #FFFFFF;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-pill);
  box-shadow: 0 4px 12px rgba(229, 9, 20, 0.35);
}

.branch-badge.head-badge {
  background: #F9A900;
  color: #000000;
  box-shadow: 0 4px 12px rgba(249, 169, 0, 0.35);
}

.branch-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.branch-icon-box {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  background: var(--bg-icon-box);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-card);
}

.branch-name {
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--text-heading);
  line-height: 1.2;
}

.branch-type {
  font-size: 0.85rem;
  color: var(--color-gold);
  font-weight: 600;
}

.branch-address-block {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  background: var(--bg-card-subtle);
  padding: 1.2rem;
  border-radius: var(--radius-md);
  margin-bottom: 1.5rem;
  border: 1px solid var(--border-subtle);
}

.icon-address {
  flex-shrink: 0;
  margin-top: 3px;
}

.address-text {
  font-size: 0.92rem;
  color: var(--text-sub);
  line-height: 1.6;
  margin: 0;
}

.address-text strong {
  color: var(--text-heading);
}

.branch-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.feat-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--bg-tag-badge);
  padding: 0.25rem 0.6rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
}

.branch-contact-links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.75rem;
}

.contact-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-gold);
  background: var(--color-gold-light);
  border: 1px solid rgba(249, 169, 0, 0.25);
  padding: 0.4rem 0.8rem;
  border-radius: var(--radius-pill);
  transition: all var(--transition-fast);
}

.contact-pill:hover {
  background: #F9A900;
  color: #000000;
}

.branch-card-actions {
  margin-top: auto;
  display: flex;
  gap: 0.85rem;
}

.w-full {
  width: 100%;
}

/* ==========================================================================
   Campus Photo Sneak Peek & Interactive Carousel
   ========================================================================== */
.campus-photo-banner {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-card);
}

.photo-banner-inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: stretch;
}

.photo-banner-content {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.banner-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  gap: 1rem;
}

.photo-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-gold);
}

.live-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  color: var(--text-muted);
  font-weight: 600;
}

.live-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10B981;
  box-shadow: 0 0 6px #10B981;
  animation: pulseDot 2s infinite;
}

.live-dot.paused {
  background: #F59E0B;
  box-shadow: 0 0 6px #F59E0B;
  animation: none;
}

@keyframes pulseDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}

.photo-banner-content h3 {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-heading);
  margin-bottom: 1rem;
}

.photo-banner-content p {
  font-size: 0.95rem;
  color: var(--text-sub);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.facility-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.facility-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-main);
}

/* Slider Tabs */
.slider-tabs {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.slider-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.85rem;
  border-radius: var(--radius-sm);
  background: var(--bg-card-subtle);
  border: 1px solid var(--border-card);
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.slider-tab-btn .tab-num {
  color: var(--color-gold);
  font-weight: 700;
  font-size: 0.74rem;
}

.slider-tab-btn:hover {
  border-color: var(--color-gold);
  color: var(--text-heading);
}

.slider-tab-btn.active {
  background: var(--bg-tag-badge);
  border-color: var(--color-gold);
  color: var(--text-heading);
  box-shadow: 0 2px 8px rgba(249, 169, 0, 0.2);
}

/* Media Column & Carousel Frame */
.photo-banner-media {
  position: relative;
  display: flex;
  flex-direction: column;
  background: #000000;
  min-height: 420px;
}

.carousel-slide-container {
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: hidden;
}

.slide-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  overflow: hidden;
}

.clickable-slide {
  cursor: zoom-in;
}

.slide-backdrop {
  position: absolute;
  inset: -20px;
  background-size: cover;
  background-position: center;
  filter: blur(24px) brightness(0.22);
  transform: scale(1.15);
  pointer-events: none;
  z-index: 1;
}

.sneak-peek-img {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  max-height: 480px;
  object-fit: contain;
  display: block;
  transition: transform 0.3s ease;
}

.clickable-slide:hover .sneak-peek-img {
  transform: scale(1.02);
}

.slide-badge-top {
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
  z-index: 3;
}

.badge-tag {
  background: #E50914;
  color: #FFFFFF;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-sm);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.badge-counter {
  background: rgba(0, 0, 0, 0.75);
  color: #FFFFFF;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.25rem 0.55rem;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.zoom-pill {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  color: #FFFFFF;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 0.35rem;
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.clickable-slide:hover .zoom-pill {
  opacity: 1;
  transform: translateX(-50%) translateY(2px);
}

.photo-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.85rem 1.25rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.65) 70%, transparent 100%);
  color: #FFFFFF;
  z-index: 3;
}

.caption-text {
  font-size: 0.84rem;
  font-weight: 600;
  color: #FFFFFF;
  display: block;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
}

/* Arrow Buttons */
.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  z-index: 10;
}

.slider-arrow:hover {
  background: var(--color-red);
  border-color: var(--color-red);
  transform: translateY(-50%) scale(1.1);
}

.slider-arrow.prev {
  left: 12px;
}

.slider-arrow.next {
  right: 12px;
}

/* Progress Fill */
.slider-progress-bar {
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-red), var(--color-gold));
  transition: width 0.4s ease;
}

/* ==========================================================================
   Lightbox Fullscreen Modal Styles
   ========================================================================== */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.94);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  user-select: none;
}

.lightbox-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
}

.lightbox-title-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.lightbox-tag {
  background: #E50914;
  color: #FFFFFF;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.3rem 0.8rem;
  border-radius: var(--radius-pill);
}

.lightbox-count {
  font-size: 0.88rem;
  font-weight: 600;
  color: #CBD5E1;
}

.lightbox-close-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.lightbox-close-btn:hover {
  background: var(--color-red);
  border-color: var(--color-red);
  transform: rotate(90deg) scale(1.05);
}

.lightbox-stage {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  max-height: 80vh;
}

.lightbox-content-box {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 88vw;
  max-height: 75vh;
  margin: 0 auto;
}

.lightbox-img {
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border-radius: var(--radius-md);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.lightbox-nav-btn {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  z-index: 10;
  flex-shrink: 0;
}

.lightbox-nav-btn:hover {
  background: var(--color-red);
  border-color: var(--color-red);
  transform: scale(1.1);
}

.lightbox-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  z-index: 10;
}

.lightbox-caption {
  font-size: 0.95rem;
  font-weight: 600;
  color: #F8FAFC;
  margin: 0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
}

.lightbox-thumbnails {
  display: flex;
  gap: 0.6rem;
  align-items: center;
}

.lightbox-thumb-btn {
  width: 54px;
  height: 38px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: #000000;
  cursor: pointer;
  padding: 0;
  transition: all var(--transition-fast);
}

.lightbox-thumb-btn:hover,
.lightbox-thumb-btn.active {
  border-color: #F9A900;
  transform: scale(1.08);
}

.thumb-mini-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Lightbox Transitions */
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: scale(1.03);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

@media (max-width: 1024px) {
  .branches-grid {
    grid-template-columns: 1fr;
  }

  .photo-banner-inner {
    grid-template-columns: 1fr;
  }

  .photo-banner-content {
    padding: 2rem;
  }

  .photo-banner-media {
    min-height: 320px;
  }

  .lightbox-overlay {
    padding: 1rem;
  }

  .lightbox-nav-btn {
    width: 42px;
    height: 42px;
  }
}

@media (max-width: 640px) {
  .photo-banner-content {
    padding: 1.5rem 1rem;
  }

  .photo-banner-content h3 {
    font-size: 1.35rem;
  }

  .slider-tabs {
    flex-direction: column;
  }

  .slider-tab-btn {
    width: 100%;
    justify-content: flex-start;
  }

  .lightbox-stage {
    padding: 0.5rem 0;
  }

  .lightbox-nav-btn {
    width: 36px;
    height: 36px;
  }
}
</style>
