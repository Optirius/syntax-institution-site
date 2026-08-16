<template>
  <section id="hero" class="hero-section">
    <!-- Ambient Background Glows -->
    <div class="hero-glow hero-glow-red"></div>
    <div class="hero-glow hero-glow-gold"></div>

    <div class="container hero-container">
      <div class="hero-grid">
        <!-- Hero Text Content -->
        <div class="hero-content">
          <!-- Collaboration Badge -->
          <div class="hero-collab-badge">
            <span class="badge-dot"></span>
            <span>Academic Collaboration with <strong>Mainichikotoba</strong></span>
          </div>

          <!-- Main Slogan & Title -->
          <h1 class="hero-title">
            Excellence in Thought.
            <span class="highlight-red">Power in Language.</span>
          </h1>

          <p class="hero-description">
            Welcome to <strong>Syntax Institution</strong> — your trusted academic coaching center in Dhaka. 
            Empowering students with concept-driven <strong>O & A Level preparation</strong>, 
            authentic <strong>Japanese Language (JLPT N5 & N4)</strong> training, 
            <strong>English Medium Academic Support</strong>, and <strong>IELTS & Spoken English</strong> mastery.
          </p>

          <!-- Core Value Highlights -->
          <div class="hero-highlights">
            <div class="highlight-pill">
              <CheckCircle2 class="pill-icon text-gold" :size="16" />
              <span>Offline & Online Live Classes</span>
            </div>
            <div class="highlight-pill">
              <CheckCircle2 class="pill-icon text-red" :size="16" />
              <span>Small Batch & Individual Care</span>
            </div>
            <div class="highlight-pill">
              <CheckCircle2 class="pill-icon text-gold" :size="16" />
              <span>Experienced Faculty Mentorship</span>
            </div>
            <div class="highlight-pill">
              <CheckCircle2 class="pill-icon text-red" :size="16" />
              <span>Result-Oriented Concept Teaching</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="hero-cta-group">
            <a href="#contact" class="btn btn-primary btn-lg">
              <span>Book Free Counselling</span>
              <ArrowRight :size="18" />
            </a>
            <a href="#programs" class="btn btn-outline-white btn-lg">
              <span>Explore Programs</span>
              <BookOpen :size="18" />
            </a>
            <a 
              href="https://wa.me/8801737733026?text=Hello%20Syntax%20Institution,%20I%20would%20like%20to%20know%20more%20about%20your%20courses." 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-whatsapp btn-lg btn-icon-only"
              title="Chat directly on WhatsApp"
            >
              <MessageSquare :size="20" />
            </a>
          </div>

          <!-- Quick Stats Row -->
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">2</span>
              <span class="stat-label">Dhaka Campuses<br/><small>Shyamoli & Dhanmondi</small></span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">6+</span>
              <span class="stat-label">Specialized<br/>Academic Programs</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Concept-Based<br/>Teaching</span>
            </div>
          </div>
        </div>

        <!-- Hero Media / Card Showcase -->
        <div class="hero-visual">
          <div class="hero-card-frame">
            <!-- Collaboration Banner Card -->
            <div class="banner-preview-card">
              <img 
                src="/images/banner.jpg" 
                alt="Syntax Institution and Mainichikotoba Collaboration" 
                class="banner-img"
              />
              <div class="banner-overlay-bar">
                <span class="overlay-tag">Official Partner</span>
                <span class="overlay-text">JLPT N5 & N4 Comprehensive Training</span>
              </div>
            </div>

            <!-- Floating Admission Perk Card -->
            <div class="floating-badge-card">
              <div class="badge-icon-wrap">
                <Sparkles class="icon-sparkle" :size="24" />
              </div>
              <div class="badge-content">
                <span class="badge-title">Free Student Counselling</span>
                <span class="badge-sub">20% Discount on Admission Fees</span>
              </div>
            </div>

            <!-- Floating Branches Summary Card -->
            <div class="floating-location-card">
              <MapPin class="icon-pin text-red" :size="20" />
              <div>
                <strong>Dhanmondi & Shyamoli</strong>
                <p>Air-Conditioned Modern Classrooms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  MessageSquare, 
  MapPin, 
  Sparkles 
} from 'lucide-vue-next'
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 90vh;
  padding-top: 140px;
  padding-bottom: 5rem;
  background: #000000;
  overflow: hidden;
  display: flex;
  align-items: center;
}

/* Ambient Glows */
.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  pointer-events: none;
  z-index: 1;
}

.hero-glow-red {
  top: 10%;
  left: -5%;
  width: 450px;
  height: 450px;
  background: rgba(229, 9, 20, 0.12);
}

.hero-glow-gold {
  bottom: 5%;
  right: -5%;
  width: 500px;
  height: 500px;
  background: rgba(249, 169, 0, 0.1);
}

.hero-container {
  position: relative;
  z-index: 2;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3.5rem;
  align-items: center;
}

/* Hero Content */
.hero-content {
  display: flex;
  flex-direction: column;
}

.hero-collab-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.85rem;
  color: var(--color-white);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(249, 169, 0, 0.35);
  padding: 0.4rem 1rem;
  border-radius: var(--radius-pill);
  width: fit-content;
  margin-bottom: 1.5rem;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-gold);
  box-shadow: 0 0 10px var(--color-gold);
}

.hero-collab-badge strong {
  color: var(--color-gold);
}

.hero-title {
  font-size: 3.25rem;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 1.25rem;
  color: var(--color-white);
}

.highlight-red {
  color: var(--color-red);
  display: block;
  text-shadow: 0 0 30px rgba(229, 9, 20, 0.3);
}

.hero-description {
  font-size: 1.12rem;
  line-height: 1.7;
  color: #c0ccdc;
  margin-bottom: 2rem;
  max-width: 620px;
}

.hero-description strong {
  color: var(--color-white);
}

/* Highlights */
.hero-highlights {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem 1.25rem;
  margin-bottom: 2.25rem;
}

.highlight-pill {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-white);
}

.text-gold {
  color: var(--color-gold);
}

.text-red {
  color: var(--color-red);
}

/* CTA Group */
.hero-cta-group {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.75rem;
}

.btn-icon-only {
  padding: 0.95rem 1.2rem;
}

/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--color-slate-light);
  line-height: 1.3;
}

.stat-label small {
  color: #8899a6;
  font-size: 0.75rem;
}

.stat-divider {
  width: 1px;
  height: 38px;
  background: rgba(255, 255, 255, 0.12);
}

/* Visual Frame */
.hero-visual {
  position: relative;
}

.hero-card-frame {
  position: relative;
  border-radius: var(--radius-xl);
  padding: 0.75rem;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.06), #0a0a0a);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
}

.banner-preview-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: #000;
}

.banner-img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  display: block;
  transition: transform 0.5s ease;
}

.banner-preview-card:hover .banner-img {
  transform: scale(1.02);
}

.banner-overlay-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.85rem 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.4));
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.overlay-tag {
  background: var(--color-gold);
  color: #000000;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-sm);
}

.overlay-text {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-white);
}

/* Floating Badges */
.floating-badge-card {
  position: absolute;
  top: -24px;
  right: -20px;
  background: #0D0D0D;
  border: 1px solid rgba(249, 169, 0, 0.4);
  padding: 0.85rem 1.1rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  animation: floatSlow 4s ease-in-out infinite;
}

.badge-icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-gold-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gold);
}

.badge-content {
  display: flex;
  flex-direction: column;
}

.badge-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-white);
}

.badge-sub {
  font-size: 0.75rem;
  color: #ff5e65;
  font-weight: 600;
}

.floating-location-card {
  position: absolute;
  bottom: -24px;
  left: -20px;
  background: #0D0D0D;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0.85rem 1.1rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  animation: floatSlow 4s ease-in-out infinite 2s;
}

.floating-location-card strong {
  font-size: 0.88rem;
  color: var(--color-white);
  display: block;
}

.floating-location-card p {
  font-size: 0.75rem;
  color: var(--color-slate-light);
  margin: 0;
}

@keyframes floatSlow {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-title {
    font-size: 2.75rem;
  }

  .floating-badge-card {
    right: 0;
  }

  .floating-location-card {
    left: 0;
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding-top: 100px;
  }

  .hero-title {
    font-size: 2.15rem;
  }

  .hero-highlights {
    grid-template-columns: 1fr;
  }

  .hero-stats {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }

  .stat-divider {
    display: none;
  }

  .floating-badge-card,
  .floating-location-card {
    position: static;
    margin-top: 1rem;
    animation: none;
  }
}
</style>
