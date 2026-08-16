<template>
  <section id="collaboration" class="section collab-section">
    <div class="container">
      <div class="collab-grid">
        <!-- Visual Column -->
        <div class="collab-visual">
          <div class="collab-card">
            <img 
              src="/images/banner.jpg" 
              alt="Syntax Institution and Mainichikotoba Japanese Center" 
              class="collab-banner-img"
            />
            <div class="collab-badge-floating">
              <Sparkles :size="20" class="text-gold" />
              <div>
                <strong>MAINICHIKOTOBA</strong>
                <span>Official Japanese Language Training Centre</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Column -->
        <div class="collab-content">
          <div class="section-tag tag-red">
            <Globe2 :size="16" />
            <span>Academic Collaboration</span>
          </div>

          <h2 class="collab-title">
            Master the Japanese Language with 
            <span class="text-gold">Authentic Methodology</span>
          </h2>

          <p class="collab-desc">
            Through our strategic academic partnership with <strong>MAINICHIKOTOBA Japanese Language Training Centre</strong>, 
            Syntax Institution provides comprehensive training for <strong>JLPT N5 and N4</strong> proficiency. 
            Students learn native Japanese pronunciation, script mastery (Hiragana, Katakana, and Kanji), 
            and essential cultural etiquette required for career and university pathways in Japan.
          </p>

          <div class="collab-points">
            <div class="point-item">
              <div class="point-icon-box">
                <BookCheck :size="18" class="text-gold" />
              </div>
              <div class="point-content">
                <h4>Comprehensive JLPT N5 & N4 Syllabus</h4>
                <p>Structured lessons covering core vocabulary, standard grammar patterns, Kanji writing, and active audio listening drills.</p>
              </div>
            </div>

            <div class="point-item">
              <div class="point-icon-box">
                <GraduationCap :size="18" class="text-red" />
              </div>
              <div class="point-content">
                <h4>Higher Education & Visa Pathway Counselling</h4>
                <p>Guidance on studying in Japan, language school admissions, university application requirements, and student visa procedures.</p>
              </div>
            </div>

            <div class="point-item">
              <div class="point-icon-box">
                <Clock :size="18" class="text-gold" />
              </div>
              <div class="point-content">
                <h4>Flexible Online & Campus Batches</h4>
                <p>Available on weekdays and weekends at both Dhanmondi and Shyamoli campuses with interactive live online sessions.</p>
              </div>
            </div>
          </div>

          <div class="collab-cta-row">
            <a href="#contact" class="btn btn-primary btn-lg">
              <span>Enroll for Japanese Language</span>
              <ArrowRight :size="16" />
            </a>
            <a 
              href="https://wa.me/8801737733026?text=Hi%20Syntax%20Institution,%20I%20want%20information%20regarding%20JLPT%20Japanese%20Language%20classes." 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-outline-white btn-lg"
            >
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  Globe2, 
  Sparkles, 
  BookCheck, 
  GraduationCap, 
  Clock, 
  ArrowRight 
} from 'lucide-vue-next'
</script>

<style scoped>
.collab-section {
  background: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  position: relative;
  transition: background-color var(--transition-normal);
}

.collab-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 4rem;
  align-items: center;
}

.collab-visual {
  position: relative;
}

.collab-card {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--border-card);
  box-shadow: var(--shadow-elevated);
  background: var(--bg-card);
}

.collab-banner-img {
  width: 100%;
  height: auto;
  display: block;
}

.collab-badge-floating {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background: var(--bg-header-scrolled);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(249, 169, 0, 0.4);
  padding: 0.85rem 1.25rem;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: 0.85rem;
  box-shadow: var(--shadow-card);
}

.collab-badge-floating strong {
  display: block;
  font-size: 0.9rem;
  color: var(--text-heading);
}

.collab-badge-floating span {
  font-size: 0.78rem;
  color: var(--color-gold);
}

/* Info */
.collab-title {
  font-size: 2.3rem;
  font-weight: 800;
  color: var(--text-heading);
  line-height: 1.25;
  margin-bottom: 1.25rem;
}

.text-gold {
  color: var(--color-gold);
}

.text-red {
  color: var(--color-red);
}

.collab-desc {
  font-size: 1.05rem;
  color: var(--text-sub);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.collab-desc strong {
  color: var(--text-heading);
}

/* Points */
.collab-points {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.25rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.point-icon-box {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bg-icon-box);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid var(--border-card);
}

.point-content h4 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 0.25rem;
}

.point-content p {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.5;
}

/* CTA */
.collab-cta-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .collab-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 640px) {
  .collab-title {
    font-size: 1.85rem;
  }

  .collab-badge-floating {
    position: static;
    margin: 1rem;
  }
}
</style>
