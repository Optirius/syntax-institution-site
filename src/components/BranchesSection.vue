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

      <!-- Campus Sneak Peek Photo Banner -->
      <div class="campus-photo-banner">
        <div class="photo-banner-inner">
          <div class="photo-banner-content">
            <span class="photo-tag">Classroom & Center Sneak Peek</span>
            <h3>Modern, Distraction-Free Learning Spaces</h3>
            <p>
              Designed for optimal student engagement with climate-controlled study rooms, multimedia interactive boards, ergonomic seating, and comprehensive library resource collections.
            </p>
            <div class="facility-items">
              <div class="facility-item">
                <CheckCircle2 :size="16" class="text-gold" />
                <span>Fully Air Conditioned Classrooms</span>
              </div>
              <div class="facility-item">
                <CheckCircle2 :size="16" class="text-gold" />
                <span>Audio-Visual JLPT Listening Setup</span>
              </div>
              <div class="facility-item">
                <CheckCircle2 :size="16" class="text-gold" />
                <span>Centralized in Heart of Dhaka</span>
              </div>
            </div>
          </div>
          <div class="photo-banner-media">
            <img 
              src="/images/center sneak peak banner.jpg" 
              alt="Syntax Institution Dhanmondi Center Sneak Peek" 
              class="sneak-peek-img"
            />
            <div class="photo-caption">Dhanmondi Science Lab Center Reception & Classrooms</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  MapPin, 
  Building2, 
  Check, 
  Phone, 
  Navigation, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-vue-next'
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

/* Campus Photo Showcase */
.campus-photo-banner {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-card);
}

.photo-banner-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.photo-banner-content {
  padding: 3rem;
}

.photo-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-gold);
  margin-bottom: 0.75rem;
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
}

.facility-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.facility-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-main);
}

.photo-banner-media {
  position: relative;
  height: 100%;
  min-height: 320px;
}

.sneak-peek-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.photo-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.75rem 1.25rem;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  font-size: 0.8rem;
  color: #F9A900;
  font-weight: 600;
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
}
</style>
