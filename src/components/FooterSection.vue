<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Col 1: Brand & Slogan -->
        <div class="footer-col footer-col-brand">
          <div class="footer-brand">
            <img src="/images/logo.jpg" alt="Syntax Institution" class="footer-logo-img" />
            <div>
              <span class="footer-brand-title">SYNTAX INSTITUTION</span>
              <span class="footer-brand-tagline">EXCELLENCE IN THOUGHT • POWER IN LANGUAGE</span>
            </div>
          </div>
          <p class="footer-desc">
            Premier educational coaching institution in Dhaka providing concept-based O/A Level tuition, official Japanese JLPT language programs, and comprehensive English language development.
          </p>
          <div class="collab-badge-mini">
            <Sparkles :size="14" class="text-gold" />
            <span>Academic Partner: <strong>MAINICHIKOTOBA</strong></span>
          </div>
        </div>

        <!-- Col 2: Specialized Programs -->
        <div class="footer-col">
          <h4 class="footer-heading">Our Programs</h4>
          <ul class="footer-links">
            <li>
              <a href="#programs" @click="emitCourse('Japanese Language – JLPT N5 & N4')">Japanese JLPT (N5 & N4)</a>
            </li>
            <li>
              <a href="#programs" @click="emitCourse('O Level & A Level Preparation')">O & A Level Preparation</a>
            </li>
            <li>
              <a href="#programs" @click="emitCourse('English Medium Academic Support')">English Medium Academic Tutoring</a>
            </li>
            <li>
              <a href="#programs" @click="emitCourse('Practical Spoken English')">Practical Spoken English</a>
            </li>
            <li>
              <a href="#programs" @click="emitCourse('IELTS Preparation (Academic & General)')">IELTS Preparation (7.5+)</a>
            </li>
            <li>
              <a href="#programs" @click="emitCourse('Basic to Intermediate English')">Basic to Intermediate English</a>
            </li>
          </ul>
        </div>

        <!-- Col 3: Quick Navigation -->
        <div class="footer-col">
          <h4 class="footer-heading">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#programs">Courses & Curricula</a></li>
            <li><a href="#collaboration">Japanese Language Wing</a></li>
            <li><a href="#why-us">Why Choose Us</a></li>
            <li><a href="#branches">Campuses & Centers</a></li>
            <li><a href="#contact">Admission Inquiry</a></li>
          </ul>
        </div>

        <!-- Col 4: Contact & Campuses -->
        <div class="footer-col">
          <h4 class="footer-heading">Campuses & Contact</h4>
          <div class="footer-contact-items">
            <div class="f-contact-item">
              <MapPin :size="16" class="text-gold flex-shrink" />
              <div>
                <strong>Dhanmondi Center (Science Lab):</strong>
                <p>32/2 Latimi Shopping Mall, 1st Floor, Dhaka 1205</p>
              </div>
            </div>

            <div class="f-contact-item">
              <MapPin :size="16" class="text-gold flex-shrink" />
              <div>
                <strong>Shyamoli Branch (Head Office):</strong>
                <p>64/KC, PC Culture Housing Society, Dhaka 1207</p>
              </div>
            </div>

            <div class="f-contact-item">
              <Phone :size="16" class="text-gold flex-shrink" />
              <div>
                <a href="tel:+8801737733026">+880 1737-733026</a> / 
                <a href="tel:+8801711811639">+880 1711-811639</a>
              </div>
            </div>

            <div class="f-contact-item">
              <Mail :size="16" class="text-gold flex-shrink" />
              <a href="mailto:syntax.institution@gmail.com">syntax.institution@gmail.com</a>
            </div>
          </div>

          <div class="footer-socials">
            <a href="https://wa.me/8801737733026" target="_blank" rel="noopener noreferrer" class="f-social-btn whatsapp" title="WhatsApp Chat">
              <MessageSquare :size="16" />
            </a>
            <a href="https://www.facebook.com/people/Syntax-Institution/61579199366752/" target="_blank" rel="noopener noreferrer" class="f-social-btn fb" title="Facebook Page">
              <Facebook :size="16" />
            </a>
            <a href="https://www.instagram.com/syntaxinstitution/" target="_blank" rel="noopener noreferrer" class="f-social-btn insta" title="Instagram">
              <Instagram :size="16" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p class="copyright-text">
          &copy; {{ new Date().getFullYear() }} <strong>Syntax Institution</strong>. All Rights Reserved. Excellence in Thought. Power in Language.
        </p>
        <div class="footer-legal">
          <span>Academic Collaboration with MAINICHIKOTOBA Japanese Language Training Centre</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Facebook, 
  Instagram 
} from 'lucide-vue-next'

const emit = defineEmits(['selectCourse'])

const emitCourse = (courseName) => {
  emit('selectCourse', courseName)
}
</script>

<style scoped>
.site-footer {
  background: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  padding-top: 5rem;
  padding-bottom: 2.5rem;
  position: relative;
  transition: background-color var(--transition-normal);
}

.text-gold {
  color: var(--color-gold);
}

.text-red {
  color: var(--color-red);
}

.flex-shrink {
  flex-shrink: 0;
  margin-top: 3px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 0.9fr 1.3fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

/* Col 1 */
.footer-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.footer-logo-img {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(249, 169, 0, 0.4);
}

.footer-brand-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--text-heading);
  line-height: 1.1;
}

.footer-brand-tagline {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--color-gold);
  display: block;
  margin-top: 2px;
}

.footer-desc {
  font-size: 0.9rem;
  color: var(--text-sub);
  line-height: 1.65;
  margin-bottom: 1.5rem;
}

.collab-badge-mini {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: var(--text-muted);
  background: var(--bg-tag-badge);
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(249, 169, 0, 0.25);
}

.collab-badge-mini strong {
  color: var(--color-gold);
}

/* Headings */
.footer-heading {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 24px;
  height: 2px;
  background: var(--color-red);
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  font-size: 0.88rem;
  color: var(--text-muted);
  transition: all var(--transition-fast);
}

.footer-links a:hover {
  color: var(--color-gold);
  padding-left: 4px;
}

/* Contact Items */
.footer-contact-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.f-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.85rem;
  color: var(--text-sub);
}

.f-contact-item strong {
  color: var(--text-heading);
  display: block;
}

.f-contact-item p {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin: 0;
}

.f-contact-item a {
  color: var(--text-main);
  transition: color var(--transition-fast);
}

.f-contact-item a:hover {
  color: var(--color-gold);
}

/* Socials */
.footer-socials {
  display: flex;
  gap: 0.75rem;
}

.f-social-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-main);
  background: var(--bg-tag-badge);
  border: 1px solid var(--border-subtle);
  transition: all var(--transition-fast);
}

.f-social-btn.whatsapp:hover {
  background: #25D366;
  border-color: #25D366;
  color: #FFFFFF;
  transform: translateY(-2px);
}

.f-social-btn.fb:hover {
  background: #1877F2;
  border-color: #1877F2;
  color: #FFFFFF;
  transform: translateY(-2px);
}

.f-social-btn.insta:hover {
  background: #E4405F;
  border-color: #E4405F;
  color: #FFFFFF;
  transform: translateY(-2px);
}

/* Bottom Bar */
.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  font-size: 0.82rem;
  color: var(--text-muted);
  flex-wrap: wrap;
}

.copyright-text strong {
  color: var(--text-heading);
}

.footer-legal {
  color: var(--color-gold);
  font-size: 0.78rem;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
