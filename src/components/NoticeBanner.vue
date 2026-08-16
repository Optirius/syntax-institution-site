<template>
  <div class="admission-banner-wrapper">
    <div class="container">
      <div class="admission-banner-card">
        <!-- Left: Discount Badge & Info -->
        <div class="banner-left">
          <div class="discount-badge">
            <span class="discount-label">LIMITED-TIME OFFER</span>
            <div class="discount-value">
              <span class="pct">20%</span>
              <span class="off">OFF</span>
            </div>
            <span class="on-fees">ON ADMISSION FEES</span>
          </div>

          <div class="banner-info">
            <div class="banner-tagline-wrap">
              <Megaphone class="icon-megaphone" :size="22" />
              <h3 class="banner-headline">FREE STUDENT COUNSELLING & ADMISSION INQUIRY</h3>
            </div>
            <p class="banner-subtext">
              Take the first step towards academic & language mastery. Book a one-on-one session with our experienced subject advisors.
            </p>
            <div class="features-pill-row">
              <span class="feat-pill"><Check :size="13" /> Offline & Online Classes</span>
              <span class="feat-pill"><Check :size="13" /> Small Batch Sizes</span>
              <span class="feat-pill"><Check :size="13" /> Experienced Faculty</span>
              <span class="feat-pill"><Check :size="13" /> Result Oriented</span>
            </div>
          </div>
        </div>

        <!-- Center: Interactive Course Finder Survey QR Code Card -->
        <div class="banner-qr-card">
          <div class="qr-card-header">
            <QrCode :size="15" class="text-gold" />
            <span class="qr-title">SCAN TO GET STARTED</span>
          </div>
          <div class="qr-img-wrapper">
            <img src="/images/qr-code.jpg" alt="Course Finder Survey QR Code" class="qr-code-image" />
          </div>
          <span class="qr-caption">Choose course & enroll</span>
        </div>

        <!-- Right: Action Buttons -->
        <div class="banner-actions">
          <a href="#contact" class="btn btn-gold btn-lg banner-btn">
            <Calendar :size="18" />
            <span>Book Counselling Now</span>
          </a>
          <a 
            href="https://wa.me/8801737733026?text=Hi%20Syntax%20Institution,%20I%20am%20interested%20in%20the%2020%%20Discount%20Admission%20offer%20and%20Free%20Counselling." 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-outline-white banner-btn"
          >
            <PhoneCall :size="16" />
            <span>Call +880 1737-733026</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  Megaphone, 
  Check, 
  Calendar, 
  PhoneCall, 
  QrCode 
} from 'lucide-vue-next'
</script>

<style scoped>
.admission-banner-wrapper {
  margin-top: -2.5rem;
  position: relative;
  z-index: 10;
  padding-bottom: 2rem;
  background-color: transparent;
}

.admission-banner-card {
  background: var(--bg-card);
  border: 2px solid var(--color-red);
  border-radius: var(--radius-xl);
  padding: 1.75rem 2rem;
  box-shadow: var(--shadow-elevated), 0 0 25px rgba(229, 9, 20, 0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  transition: all var(--transition-normal);
}

.banner-left {
  display: flex;
  align-items: center;
  gap: 1.75rem;
  flex: 1;
}

/* Discount Badge */
.discount-badge {
  background: var(--color-red);
  color: #FFFFFF;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 140px;
  box-shadow: 0 8px 20px rgba(229, 9, 20, 0.4);
  transform: rotate(-2deg);
  flex-shrink: 0;
}

.discount-label {
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  background: rgba(0, 0, 0, 0.4);
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-sm);
  margin-bottom: 0.2rem;
}

.discount-value {
  display: flex;
  align-items: baseline;
  line-height: 1;
}

.pct {
  font-size: 2.2rem;
  font-weight: 900;
  font-family: var(--font-heading);
}

.off {
  font-size: 1.15rem;
  font-weight: 800;
  margin-left: 3px;
}

.on-fees {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Info */
.banner-info {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.banner-tagline-wrap {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.icon-megaphone {
  color: var(--color-gold);
  flex-shrink: 0;
}

.banner-headline {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-heading);
  letter-spacing: 0.02em;
}

.banner-subtext {
  font-size: 0.9rem;
  color: var(--text-sub);
  margin: 0;
}

.features-pill-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-top: 0.4rem;
}

.feat-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.76rem;
  font-weight: 600;
  color: var(--color-gold);
  background: var(--color-gold-light);
  border: 1px solid rgba(249, 169, 0, 0.25);
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-pill);
}

/* QR Code Card */
.banner-qr-card {
  background: var(--bg-surface);
  border: 1px solid rgba(249, 169, 0, 0.35);
  border-radius: var(--radius-md);
  padding: 0.75rem 0.85rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast);
}

.banner-qr-card:hover {
  transform: scale(1.03);
  border-color: var(--color-gold);
}

.qr-card-header {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 0.4rem;
}

.qr-title {
  font-size: 0.68rem;
  font-weight: 800;
  color: var(--color-gold);
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.qr-img-wrapper {
  background: #FFFFFF;
  padding: 6px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.qr-code-image {
  width: 118px;
  height: 118px;
  display: block;
  object-fit: contain;
}

.qr-caption {
  font-size: 0.65rem;
  color: var(--text-muted);
  font-weight: 600;
  margin-top: 0.35rem;
  white-space: nowrap;
}

/* Actions */
.banner-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 220px;
  flex-shrink: 0;
}

.banner-btn {
  width: 100%;
}

@media (max-width: 1200px) {
  .admission-banner-card {
    flex-wrap: wrap;
  }

  .banner-actions {
    width: 100%;
    flex-direction: row;
  }
}

@media (max-width: 900px) {
  .admission-banner-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.75rem;
  }

  .banner-left {
    flex-direction: column;
    align-items: center;
  }

  .banner-tagline-wrap {
    justify-content: center;
  }

  .features-pill-row {
    justify-content: center;
  }

  .discount-badge {
    transform: none;
  }

  .banner-actions {
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .admission-banner-card {
    padding: 1.25rem;
  }

  .banner-headline {
    font-size: 1.1rem;
  }
}
</style>
