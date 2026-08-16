<template>
  <section id="collaboration" class="section collab-section">
    <div class="container">
      <div class="collab-grid">
        <!-- Collab Image Banner Showcase -->
        <div class="collab-visual">
          <div class="collab-card">
            <img 
              src="/images/banner.jpg" 
              alt="Academic Collaboration: Syntax Institution and Mainichikotoba" 
              class="collab-banner-img"
            />
            <div class="collab-badge-floating">
              <Sparkles class="icon-star text-gold" :size="20" />
              <div>
                <strong>Official Academic Tie-Up</strong>
                <span>JLPT N5 & N4 Direct Pathway</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Collab Information -->
        <div class="collab-info">
          <div class="section-tag tag-red">
            <Globe :size="15" />
            <span>International Language Pathway</span>
          </div>

          <h2 class="collab-title">
            Academic Collaboration with <br />
            <span class="text-gold">MAINICHIKOTOBA</span> Japanese Training Centre
          </h2>

          <p class="collab-desc">
            To provide our students with the highest standard of Japanese language proficiency, 
            <strong>Syntax Institution</strong> has partnered with <strong>Mainichikotoba (まいにちことば)</strong>. 
            Together, we deliver immersive JLPT training mapped directly to the Japanese Language Proficiency Test standards.
          </p>

          <!-- Core Japanese Features -->
          <div class="collab-points">
            <div class="point-item">
              <div class="point-icon-box">
                <CheckCircle2 :size="18" class="text-gold" />
              </div>
              <div class="point-content">
                <h4>Complete JLPT N5 & N4 Syllabus</h4>
                <p>Master 200+ Kanji, core Hiragana & Katakana, 1,500+ vocabulary words, and essential sentence structures.</p>
              </div>
            </div>

            <div class="point-item">
              <div class="point-icon-box">
                <CheckCircle2 :size="18" class="text-red" />
              </div>
              <div class="point-content">
                <h4>Dedicated Audio & Listening Drills</h4>
                <p>Practice with genuine Japanese native audio recordings and timed JLPT mock listening sections.</p>
              </div>
            </div>

            <div class="point-item">
              <div class="point-icon-box">
                <CheckCircle2 :size="18" class="text-gold" />
              </div>
              <div class="point-content">
                <h4>Pathway to Higher Studies & Jobs in Japan</h4>
                <p>Guidance on SSW (Specified Skilled Worker), Student Visa eligibility, and Japanese cultural workplace etiquette.</p>
              </div>
            </div>
          </div>

          <div class="collab-cta-row">
            <button @click="handleInquireJapanese" class="btn btn-primary btn-lg">
              <span>Enroll for Japanese Language</span>
              <ArrowRight :size="16" />
            </button>
            <a 
              href="https://wa.me/8801737733026?text=Hi%20Syntax%20Institution,%20I%20want%20information%20regarding%20JLPT%20Japanese%20Language%20classes." 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-whatsapp btn-lg"
            >
              <MessageSquare :size="16" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  Globe, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare 
} from 'lucide-vue-next'

const emit = defineEmits(['selectCourse'])

const handleInquireJapanese = () => {
  emit('selectCourse', 'Japanese Language – JLPT N5 & N4')
  const contactEl = document.getElementById('contact')
  if (contactEl) {
    contactEl.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.collab-section {
  background: #000000;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
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
  border: 1px solid rgba(249, 169, 0, 0.3);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.85);
  background: #000000;
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
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(249, 169, 0, 0.4);
  padding: 0.85rem 1.25rem;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.collab-badge-floating strong {
  display: block;
  font-size: 0.9rem;
  color: var(--color-white);
}

.collab-badge-floating span {
  font-size: 0.78rem;
  color: var(--color-gold);
}

/* Info */
.collab-title {
  font-size: 2.3rem;
  font-weight: 800;
  color: var(--color-white);
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
  color: #b0c0d4;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.collab-desc strong {
  color: var(--color-white);
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
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.point-content h4 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 0.25rem;
}

.point-content p {
  font-size: 0.88rem;
  color: #94a3b8;
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
