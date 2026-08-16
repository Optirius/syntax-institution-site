<template>
  <header class="site-header">
    <!-- Top Announcement & Quick Contact Bar -->
    <div class="top-bar">
      <div class="container top-bar-inner">
        <!-- Left: Quick Contact Hotlines -->
        <div class="top-bar-left">
          <a href="tel:+8801737733026" class="top-link hotline-primary" title="Call primary hotline">
            <Phone class="icon" :size="13" />
            <span>+880 1737-733026</span>
          </a>
          <span class="divider">/</span>
          <a href="tel:+8801711811639" class="top-link secondary-phone" title="Call secondary contact">
            <span>+880 1711-811639</span>
          </a>
          <span class="divider pipe-divider">|</span>
          <a href="mailto:syntax.institution@gmail.com" class="top-link email-link" title="Send Email">
            <Mail class="icon" :size="13" />
            <span>syntax.institution@gmail.com</span>
          </a>
        </div>

        <!-- Right: Branches & Social Badges -->
        <div class="top-bar-right">
          <div class="location-badge">
            <span class="gold-dot"></span>
            <span>Campuses: Shyamoli & Dhanmondi</span>
          </div>
          <div class="top-socials">
            <a 
              href="https://wa.me/8801737733026" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="social-icon whatsapp-icon" 
              title="Chat on WhatsApp"
            >
              <MessageSquare :size="13" />
            </a>
            <a 
              href="https://www.facebook.com/people/Syntax-Institution/61579199366752/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="social-icon" 
              title="Facebook Page"
            >
              <Facebook :size="13" />
            </a>
            <a 
              href="https://www.instagram.com/syntaxinstitution/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="social-icon" 
              title="Instagram"
            >
              <Instagram :size="13" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <nav class="main-nav" :class="{ 'is-scrolled': isScrolled }">
      <div class="container nav-inner">
        <!-- Brand Logo & Title -->
        <a href="#hero" class="brand-logo-link" @click="closeMobileMenu">
          <img src="/images/logo.jpg" alt="Syntax Institution Logo" class="brand-logo-img" />
          <div class="brand-text">
            <span class="brand-title">SYNTAX INSTITUTION</span>
            <span class="brand-tagline">EXCELLENCE IN THOUGHT • POWER IN LANGUAGE</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <div class="nav-links-desktop">
          <a href="#hero" class="nav-link" :class="{ active: activeSection === 'hero' }">Home</a>
          <a href="#programs" class="nav-link" :class="{ active: activeSection === 'programs' }">Programs</a>
          <a href="#collaboration" class="nav-link" :class="{ active: activeSection === 'collaboration' }">Japanese Center</a>
          <a href="#why-us" class="nav-link" :class="{ active: activeSection === 'why-us' }">Why SI</a>
          <a href="#branches" class="nav-link" :class="{ active: activeSection === 'branches' }">Campuses</a>
          <a href="#contact" class="nav-link" :class="{ active: activeSection === 'contact' }">Contact</a>
        </div>

        <!-- Action Button & Mobile Toggle -->
        <div class="nav-actions">
          <a href="#contact" class="btn btn-primary btn-sm nav-cta-btn">
            <span>Free Counselling</span>
            <ArrowRight :size="14" />
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button 
            class="mobile-toggle-btn" 
            @click="toggleMobileMenu" 
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle navigation menu"
          >
            <Menu v-if="!mobileMenuOpen" :size="24" />
            <X v-else :size="24" />
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div class="mobile-menu-drawer" :class="{ 'is-open': mobileMenuOpen }">
        <div class="mobile-menu-inner">
          <a href="#hero" class="mobile-nav-link" @click="closeMobileMenu">
            <span>Home</span>
          </a>
          <a href="#programs" class="mobile-nav-link" @click="closeMobileMenu">
            <span>Specialized Programs</span>
          </a>
          <a href="#collaboration" class="mobile-nav-link" @click="closeMobileMenu">
            <span>Japanese Language Center (Mainichikotoba)</span>
          </a>
          <a href="#why-us" class="mobile-nav-link" @click="closeMobileMenu">
            <span>Why Syntax Institution</span>
          </a>
          <a href="#branches" class="mobile-nav-link" @click="closeMobileMenu">
            <span>Our Campuses (Dhanmondi & Shyamoli)</span>
          </a>
          <a href="#contact" class="mobile-nav-link" @click="closeMobileMenu">
            <span>Contact Us & Map</span>
          </a>

          <div class="mobile-menu-cta">
            <a href="#contact" class="btn btn-primary btn-lg w-full" @click="closeMobileMenu">
              <span>Book Free Counselling</span>
              <ArrowRight :size="16" />
            </a>
            <a 
              href="https://wa.me/8801737733026?text=Hi%20Syntax%20Institution,%20I%20have%20an%20inquiry." 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-whatsapp btn-lg w-full"
            >
              <MessageSquare :size="16" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ArrowRight, 
  MessageSquare, 
  Facebook, 
  Instagram 
} from 'lucide-vue-next'

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('hero')

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20

  const sections = ['hero', 'programs', 'collaboration', 'why-us', 'branches', 'contact']
  const scrollPosition = window.scrollY + 200

  for (const sectionId of sections) {
    const el = document.getElementById(sectionId)
    if (el) {
      const top = el.offsetTop
      const height = el.offsetHeight
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = sectionId
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
}

/* ==========================================================================
   Top Announcement Bar
   ========================================================================== */
.top-bar {
  background: #000000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.8rem;
  padding: 0.45rem 0;
  color: var(--color-slate-light);
}

.top-bar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}

.top-bar-left {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-shrink: 0;
}

.top-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: #a0b2c6;
  white-space: nowrap;
  transition: color var(--transition-fast);
}

.top-link:hover {
  color: var(--color-gold);
}

.hotline-primary {
  font-weight: 600;
  color: #FFFFFF;
}

.divider {
  color: rgba(255, 255, 255, 0.2);
  user-select: none;
}

.top-bar-right {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-shrink: 0;
}

.location-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.76rem;
  color: var(--color-gold);
  font-weight: 600;
  white-space: nowrap;
}

.gold-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-gold);
  box-shadow: 0 0 8px var(--color-gold);
}

.top-socials {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.social-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  transition: all var(--transition-fast);
}

.social-icon:hover {
  background: var(--color-red);
  color: var(--color-white);
  transform: translateY(-1px);
}

.social-icon.whatsapp-icon:hover {
  background: #25D366;
}

/* ==========================================================================
   Main Navbar
   ========================================================================== */
.main-nav {
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: all var(--transition-normal);
}

.main-nav.is-scrolled {
  background: rgba(0, 0, 0, 0.98);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.8);
  border-bottom-color: rgba(249, 169, 0, 0.25);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 74px;
  gap: 1.5rem;
}

/* Brand */
.brand-logo-link {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  flex-shrink: 0;
  text-decoration: none;
}

.brand-logo-img {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  object-fit: cover;
  border: 1px solid rgba(249, 169, 0, 0.35);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  flex-shrink: 0;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-family: var(--font-heading);
  font-size: 1.18rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: var(--color-white);
  line-height: 1.1;
  white-space: nowrap;
}

.brand-tagline {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--color-gold);
  text-transform: uppercase;
  margin-top: 2px;
  white-space: nowrap;
}

/* Desktop Links */
.nav-links-desktop {
  display: flex;
  align-items: center;
  gap: 1.75rem;
  margin-left: auto;
  margin-right: 1.5rem;
}

.nav-link {
  font-size: 0.92rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.82);
  padding: 0.45rem 0;
  position: relative;
  white-space: nowrap;
  transition: color var(--transition-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-red);
  transition: width var(--transition-normal);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-white);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  flex-shrink: 0;
}

.nav-cta-btn {
  flex-shrink: 0;
  white-space: nowrap;
}

.mobile-toggle-btn {
  display: none;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--color-white);
  cursor: pointer;
  padding: 0.45rem;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.mobile-toggle-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  color: var(--color-gold);
}

.mobile-toggle-btn:focus-visible {
  outline: 2px solid var(--color-gold);
}

/* Mobile Drawer */
.mobile-menu-drawer {
  display: none;
}

/* ==========================================================================
   Responsive Breakpoints (Clean breakpoint at 1180px)
   ========================================================================== */
@media (max-width: 1240px) {
  .nav-links-desktop {
    gap: 1.2rem;
    margin-right: 1rem;
  }

  .brand-tagline {
    display: none;
  }
}

@media (max-width: 1120px) {
  .top-bar-left .email-link,
  .top-bar-left .pipe-divider {
    display: none;
  }

  .nav-links-desktop,
  .nav-cta-btn {
    display: none;
  }

  .mobile-toggle-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mobile-menu-drawer {
    display: block;
    max-height: 0;
    overflow: hidden;
    background: #080808;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    transition: max-height 0.4s ease;
  }

  .mobile-menu-drawer.is-open {
    max-height: 560px;
    border-bottom: 2px solid var(--color-red);
  }

  .mobile-menu-inner {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  .mobile-nav-link {
    font-size: 1.02rem;
    font-weight: 600;
    color: var(--color-white);
    padding: 0.65rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    transition: all var(--transition-fast);
  }

  .mobile-nav-link:hover {
    color: var(--color-gold);
    padding-left: 0.5rem;
  }

  .mobile-menu-cta {
    margin-top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .w-full {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .top-bar {
    display: none;
  }

  .nav-inner {
    height: 64px;
  }

  .brand-logo-img {
    width: 38px;
    height: 38px;
  }

  .brand-title {
    font-size: 1.02rem;
  }
}
</style>
