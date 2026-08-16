<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <div class="section-tag tag-red">
          <MessageSquare :size="15" />
          <span>Get in Touch</span>
        </div>
        <h2 class="section-title">
          Contact <span class="text-gold">Syntax Institution</span>
        </h2>
        <p class="section-subtitle">
          Have questions regarding our Japanese JLPT batches, O/A Level coaching, or spoken English courses? Send us a message or visit our campuses.
        </p>
      </div>

      <div class="contact-layout-grid">
        <!-- Contact Form Card -->
        <div class="contact-card form-card">
          <div class="form-header">
            <h3 class="form-title">Send Admission & Course Inquiry</h3>
            <p class="form-sub">Fill in your details below and our academic advisors will contact you promptly.</p>
          </div>

          <!-- Success Alert State -->
          <div v-if="formSubmitted" class="success-banner">
            <div class="success-icon-wrap">
              <CheckCircle2 :size="32" class="text-success" />
            </div>
            <div class="success-details">
              <h4>Thank you, {{ formData.name }}!</h4>
              <p>Your inquiry for <strong>{{ formData.program }}</strong> has been received. Our team will contact you at <strong>{{ formData.phone }}</strong> shortly.</p>
              <div class="success-actions">
                <a 
                  :href="generateWhatsAppUrl" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn-whatsapp btn-sm"
                >
                  <MessageSquare :size="15" />
                  <span>Send details to WhatsApp</span>
                </a>
                <button @click="resetForm" class="btn btn-outline-white btn-sm">
                  <span>Send Another Message</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Active Form -->
          <form v-else @submit.prevent="handleSubmitForm" class="contact-form" novalidate>
            <div class="form-row-2">
              <!-- Full Name -->
              <div class="form-group">
                <label class="form-label" for="full-name">
                  Full Name <span class="required">*</span>
                </label>
                <div class="input-with-icon">
                  <User class="field-icon" :size="16" />
                  <input 
                    id="full-name" 
                    v-model="formData.name" 
                    type="text" 
                    class="form-control with-icon" 
                    placeholder="e.g. Tanvir Ahmed" 
                    required 
                  />
                </div>
                <span v-if="errors.name" class="field-error">{{ errors.name }}</span>
              </div>

              <!-- Email -->
              <div class="form-group">
                <label class="form-label" for="email-address">
                  Email Address <span class="required">*</span>
                </label>
                <div class="input-with-icon">
                  <Mail class="field-icon" :size="16" />
                  <input 
                    id="email-address" 
                    v-model="formData.email" 
                    type="email" 
                    class="form-control with-icon" 
                    placeholder="e.g. tanvir@gmail.com" 
                    required 
                  />
                </div>
                <span v-if="errors.email" class="field-error">{{ errors.email }}</span>
              </div>
            </div>

            <div class="form-row-2">
              <!-- Phone / WhatsApp -->
              <div class="form-group">
                <label class="form-label" for="phone-number">
                  Phone / WhatsApp Number <span class="required">*</span>
                </label>
                <div class="input-with-icon">
                  <Phone class="field-icon" :size="16" />
                  <input 
                    id="phone-number" 
                    v-model="formData.phone" 
                    type="tel" 
                    class="form-control with-icon" 
                    placeholder="e.g. +880 17XX-XXXXXX" 
                    required 
                  />
                </div>
                <span v-if="errors.phone" class="field-error">{{ errors.phone }}</span>
              </div>

              <!-- Program Selection -->
              <div class="form-group">
                <label class="form-label" for="program-select">
                  Interested Program <span class="required">*</span>
                </label>
                <div class="input-with-icon">
                  <GraduationCap class="field-icon" :size="16" />
                  <select 
                    id="program-select" 
                    v-model="formData.program" 
                    class="form-control with-icon" 
                    required
                  >
                    <option value="" disabled>Select a course...</option>
                    <option value="Japanese Language – JLPT N5 & N4">Japanese Language – JLPT N5 & N4</option>
                    <option value="O Level & A Level Preparation">O Level & A Level Preparation</option>
                    <option value="English Medium Academic Support">English Medium Academic Support (Class 1-A Level)</option>
                    <option value="Practical Spoken English">Practical Spoken English</option>
                    <option value="IELTS Preparation">IELTS Preparation (Academic/General)</option>
                    <option value="Basic to Intermediate English">Basic to Intermediate English</option>
                    <option value="General Free Counselling & Admission">General Free Counselling & Admission</option>
                  </select>
                </div>
                <span v-if="errors.program" class="field-error">{{ errors.program }}</span>
              </div>
            </div>

            <div class="form-row-2">
              <!-- Preferred Campus -->
              <div class="form-group">
                <label class="form-label" for="branch-select">Preferred Campus</label>
                <div class="input-with-icon">
                  <Building2 class="field-icon" :size="16" />
                  <select id="branch-select" v-model="formData.branch" class="form-control with-icon">
                    <option value="Dhanmondi Branch (Latimi Mall, Science Lab)">Dhanmondi Branch (Science Lab)</option>
                    <option value="Shyamoli Branch (Head Office)">Shyamoli Branch (Head Office)</option>
                    <option value="Online Only (Live Interactive)">Online Only (Live Interactive)</option>
                  </select>
                </div>
              </div>

              <!-- Learning Mode -->
              <div class="form-group">
                <label class="form-label" for="mode-select">Learning Mode</label>
                <div class="input-with-icon">
                  <Laptop class="field-icon" :size="16" />
                  <select id="mode-select" v-model="formData.mode" class="form-control with-icon">
                    <option value="Offline In-Person Campus Classes">Offline Campus Classes</option>
                    <option value="Live Online Interactive Sessions">Live Online Sessions</option>
                    <option value="Hybrid (Campus + Online)">Hybrid Mode</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Message Area -->
            <div class="form-group">
              <label class="form-label" for="message-input">Your Message / Questions (Optional)</label>
              <textarea 
                id="message-input" 
                v-model="formData.message" 
                rows="3" 
                class="form-control textarea-field" 
                placeholder="Tell us about your background, preferred timing, or any specific questions..."
              ></textarea>
            </div>

            <!-- Anti-Spam Security Captcha Section -->
            <div class="captcha-box">
              <div class="captcha-label-wrap">
                <label class="form-label" for="captcha-input">
                  Security Verification Captcha <span class="required">*</span>
                </label>
                <span class="captcha-hint">Type the characters shown in the security box</span>
              </div>

              <div class="captcha-interactive-row">
                <!-- Visual Canvas Captcha Display -->
                <div class="captcha-canvas-wrap" title="Security Captcha Image">
                  <canvas ref="captchaCanvas" width="160" height="48" class="captcha-canvas"></canvas>
                  <button 
                    type="button" 
                    @click="generateCaptcha" 
                    class="btn-refresh-captcha" 
                    title="Generate New Security Code"
                    aria-label="Refresh Captcha"
                  >
                    <RefreshCw :size="16" :class="{ 'is-spinning': isSpinning }" />
                  </button>
                </div>

                <!-- Captcha Input -->
                <div class="captcha-input-wrap">
                  <input 
                    id="captcha-input" 
                    v-model="userCaptchaInput" 
                    type="text" 
                    maxlength="6"
                    class="form-control captcha-input" 
                    placeholder="Enter security code" 
                    required 
                  />
                </div>
              </div>
              <span v-if="errors.captcha" class="field-error">{{ errors.captcha }}</span>
            </div>

            <!-- Submit Button & Feedback -->
            <div class="form-actions">
              <button 
                type="submit" 
                class="btn btn-primary btn-lg w-full" 
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">Submit Message & Book Free Counselling</span>
                <span v-else>Submitting Your Inquiry...</span>
                <Send v-if="!isSubmitting" :size="18" />
              </button>

              <div class="form-footer-note">
                <Lock :size="13" class="text-gold" />
                <span>Your information is confidential and will only be used to respond to your inquiry.</span>
              </div>
            </div>
          </form>
        </div>

        <!-- Contact Information & Live Google Map Card -->
        <div class="contact-info-col">
          <!-- Quick Channels Card -->
          <div class="contact-card info-card">
            <h3 class="info-title">Direct Contact Channels</h3>

            <div class="contact-methods">
              <!-- Phone Numbers -->
              <div class="method-item">
                <div class="method-icon-box text-red">
                  <PhoneCall :size="20" />
                </div>
                <div class="method-content">
                  <span class="method-label">Direct Calling & Helpline</span>
                  <div class="method-links">
                    <a href="tel:+8801737733026" class="method-value">+880 1737-733026</a>
                    <span class="sep">•</span>
                    <a href="tel:+8801711811639" class="method-value">+880 1711-811639</a>
                  </div>
                </div>
              </div>

              <!-- WhatsApp -->
              <div class="method-item">
                <div class="method-icon-box text-green">
                  <MessageSquare :size="20" />
                </div>
                <div class="method-content">
                  <span class="method-label">WhatsApp Live Chat</span>
                  <div class="method-links">
                    <a 
                      href="https://wa.me/8801737733026" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="method-value highlight-green"
                    >
                      +880 1737-733026 (Instant Reply)
                    </a>
                  </div>
                </div>
              </div>

              <!-- Official Email -->
              <div class="method-item">
                <div class="method-icon-box text-gold">
                  <Mail :size="20" />
                </div>
                <div class="method-content">
                  <span class="method-label">Official Email</span>
                  <a href="mailto:syntax.institution@gmail.com" class="method-value">
                    syntax.institution@gmail.com
                  </a>
                </div>
              </div>

              <!-- Social Links -->
              <div class="method-item">
                <div class="method-icon-box text-red">
                  <Globe :size="20" />
                </div>
                <div class="method-content">
                  <span class="method-label">Follow & Connect</span>
                  <div class="social-pills-row">
                    <a 
                      href="https://www.facebook.com/people/Syntax-Institution/61579199366752/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="social-link-pill fb"
                    >
                      <Facebook :size="14" />
                      <span>Facebook</span>
                    </a>
                    <a 
                      href="https://www.instagram.com/syntaxinstitution/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="social-link-pill insta"
                    >
                      <Instagram :size="14" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Working Hours -->
              <div class="method-item">
                <div class="method-icon-box text-gold">
                  <Clock :size="20" />
                </div>
                <div class="method-content">
                  <span class="method-label">Campus Hours</span>
                  <p class="hours-text">
                    <strong>Saturday – Thursday:</strong> 10:00 AM – 8:00 PM<br />
                    <strong>Friday:</strong> Special Batches & Placement Tests
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Embedded Google Map Card -->
          <div class="contact-card map-card">
            <div class="map-header">
              <div class="map-title-wrap">
                <MapPin :size="18" class="text-gold" />
                <h4>Dhanmondi Campus on Google Maps</h4>
              </div>
              <a 
                href="https://maps.app.goo.gl/tmzCf7yf5RPKm5DC9" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-outline-white btn-sm"
              >
                <Navigation :size="13" />
                <span>Get Directions</span>
              </a>
            </div>

            <!-- Responsive Google Maps Iframe -->
            <div class="map-iframe-container">
              <iframe 
                src="https://maps.google.com/maps?q=23.7376129,90.3839388&z=17&output=embed" 
                width="100%" 
                height="280" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Syntax Institution Google Maps Location"
              ></iframe>
            </div>

            <div class="map-footer-address">
              <span>📍 Latimi Shopping Mall, 1st Floor (Opp. Teacher's Training College, Science Lab), Dhaka</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, onMounted, nextTick } from 'vue'
import { 
  MessageSquare, 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  Building2, 
  Laptop, 
  RefreshCw, 
  Send, 
  CheckCircle2, 
  Lock, 
  PhoneCall, 
  Globe, 
  Facebook, 
  Instagram, 
  Clock, 
  MapPin, 
  Navigation 
} from 'lucide-vue-next'

const props = defineProps({
  preselectedCourse: {
    type: String,
    default: ''
  }
})

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  program: props.preselectedCourse || 'Japanese Language – JLPT N5 & N4',
  branch: 'Dhanmondi Branch (Latimi Mall, Science Lab)',
  mode: 'Offline In-Person Campus Classes',
  message: ''
})

const userCaptchaInput = ref('')
const generatedCaptchaCode = ref('')
const captchaCanvas = ref(null)
const isSpinning = ref(false)
const isSubmitting = ref(false)
const formSubmitted = ref(false)

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  program: '',
  captcha: ''
})

// Generate randomized alphanumeric captcha
const generateCaptcha = () => {
  isSpinning.value = true
  setTimeout(() => {
    isSpinning.value = false
  }, 400)

  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'
  let result = ''
  for (let i = 0; i < 5; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  generatedCaptchaCode.value = result

  drawCaptcha(result)
}

const drawCaptcha = (code) => {
  nextTick(() => {
    const canvas = captchaCanvas.value
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Background gradient in pure black / dark charcoal
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    grad.addColorStop(0, '#000000')
    grad.addColorStop(1, '#181818')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Random distractor noise lines
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = i % 2 === 0 ? 'rgba(249, 169, 0, 0.4)' : 'rgba(229, 9, 20, 0.4)'
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height)
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height)
      ctx.stroke()
    }

    // Distractor dots
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
      ctx.beginPath()
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1.2, 0, Math.PI * 2)
      ctx.fill()
    }

    // Draw characters with rotation & spacing
    ctx.font = 'bold 24px "Plus Jakarta Sans", monospace'
    ctx.textBaseline = 'middle'

    const startX = 20
    const spacing = 24

    for (let i = 0; i < code.length; i++) {
      ctx.save()
      const charX = startX + (i * spacing)
      const charY = canvas.height / 2 + (Math.random() * 4 - 2)
      const angle = (Math.random() - 0.5) * 0.4

      ctx.translate(charX, charY)
      ctx.rotate(angle)
      ctx.fillStyle = i % 2 === 0 ? '#F9A900' : '#FFFFFF'
      ctx.shadowColor = 'rgba(0, 0, 0, 0.9)'
      ctx.shadowBlur = 4
      ctx.fillText(code[i], -8, 0)
      ctx.restore()
    }
  })
}

// Validation
const validate = () => {
  let isValid = true
  errors.name = ''
  errors.email = ''
  errors.phone = ''
  errors.program = ''
  errors.captcha = ''

  if (!formData.name.trim()) {
    errors.name = 'Please enter your full name.'
    isValid = false
  }

  if (!formData.email.trim()) {
    errors.email = 'Please provide a valid email address.'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email format.'
    isValid = false
  }

  if (!formData.phone.trim()) {
    errors.phone = 'Please enter your contact phone or WhatsApp number.'
    isValid = false
  }

  if (!formData.program) {
    errors.program = 'Please select a program of interest.'
    isValid = false
  }

  if (!userCaptchaInput.value.trim()) {
    errors.captcha = 'Please enter the security verification code.'
    isValid = false
  } else if (userCaptchaInput.value.trim().toUpperCase() !== generatedCaptchaCode.value.toUpperCase()) {
    errors.captcha = 'Security code does not match. Please try again.'
    isValid = false
    generateCaptcha()
    userCaptchaInput.value = ''
  }

  return isValid
}

const handleSubmitForm = () => {
  if (!validate()) return

  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    formSubmitted.value = true
  }, 900)
}

const resetForm = () => {
  formData.name = ''
  formData.email = ''
  formData.phone = ''
  formData.message = ''
  userCaptchaInput.value = ''
  formSubmitted.value = false
  generateCaptcha()
}

const generateWhatsAppUrl = computed(() => {
  const text = `*New Admission Inquiry for Syntax Institution*%0A%0A` +
    `*Name:* ${encodeURIComponent(formData.name)}%0A` +
    `*Email:* ${encodeURIComponent(formData.email)}%0A` +
    `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
    `*Program:* ${encodeURIComponent(formData.program)}%0A` +
    `*Campus:* ${encodeURIComponent(formData.branch)}%0A` +
    `*Mode:* ${encodeURIComponent(formData.mode)}%0A` +
    (formData.message ? `*Message:* ${encodeURIComponent(formData.message)}` : '')

  return `https://wa.me/8801737733026?text=${text}`
})

onMounted(() => {
  generateCaptcha()
})

defineExpose({
  setProgram(programName) {
    formData.program = programName
  }
})
</script>

<style scoped>
.contact-section {
  background: #000000;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.text-gold {
  color: var(--color-gold);
}

.text-red {
  color: var(--color-red);
}

.text-green {
  color: #25D366;
}

.text-success {
  color: #10B981;
}

.contact-layout-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 2.5rem;
  align-items: start;
}

.contact-card {
  background: #0D0D0D;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-xl);
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
}

/* Form Styles */
.form-card {
  border-color: rgba(249, 169, 0, 0.2);
}

.form-header {
  margin-bottom: 2rem;
}

.form-title {
  font-size: 1.65rem;
  font-weight: 800;
  color: var(--color-white);
  margin-bottom: 0.35rem;
}

.form-sub {
  font-size: 0.92rem;
  color: #9cb1c9;
  margin: 0;
}

.form-row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.field-icon {
  position: absolute;
  left: 1rem;
  color: var(--color-gold);
  pointer-events: none;
}

.form-control.with-icon {
  padding-left: 2.75rem;
}

.textarea-field {
  resize: vertical;
  min-height: 80px;
}

.field-error {
  font-size: 0.78rem;
  color: #ff5e65;
  font-weight: 600;
  margin-top: 0.25rem;
}

/* Captcha */
.captcha-box {
  background: #050505;
  border: 1px dashed rgba(249, 169, 0, 0.35);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  margin-bottom: 1.5rem;
}

.captcha-label-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.captcha-hint {
  font-size: 0.76rem;
  color: #8fa0b5;
}

.captcha-interactive-row {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 1rem;
  align-items: center;
}

.captcha-canvas-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: #000000;
}

.captcha-canvas {
  display: block;
}

.btn-refresh-captcha {
  position: absolute;
  right: 4px;
  top: 4px;
  bottom: 4px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: var(--color-gold);
  cursor: pointer;
  padding: 0 0.5rem;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.btn-refresh-captcha:hover {
  background: var(--color-red);
  color: var(--color-white);
}

.is-spinning {
  animation: spin 0.5s linear;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.captcha-input {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  font-size: 1.05rem;
}

/* Form Actions */
.form-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.form-footer-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: #8fa0b5;
  text-align: center;
}

/* Success Banner */
.success-banner {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.35);
  border-radius: var(--radius-lg);
  padding: 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.success-icon-wrap {
  flex-shrink: 0;
}

.success-details h4 {
  font-size: 1.35rem;
  font-weight: 800;
  color: #10B981;
  margin-bottom: 0.5rem;
}

.success-details p {
  font-size: 0.95rem;
  color: #d1fae5;
  margin-bottom: 1.5rem;
}

.success-details strong {
  color: var(--color-white);
}

.success-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Info Column */
.contact-info-col {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--color-white);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.method-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.method-icon-box {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.method-content {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.method-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-slate-light);
}

.method-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.method-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-white);
}

.method-value:hover {
  color: var(--color-gold);
}

.highlight-green {
  color: #25D366;
  font-weight: 700;
}

.sep {
  color: rgba(255, 255, 255, 0.2);
}

.social-pills-row {
  display: flex;
  gap: 0.6rem;
  margin-top: 0.35rem;
}

.social-link-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-pill);
  color: var(--color-white);
}

.social-link-pill.fb {
  background: #1877F2;
}

.social-link-pill.insta {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

.social-link-pill:hover {
  transform: translateY(-2px);
  filter: brightness(1.15);
}

.hours-text {
  font-size: 0.88rem;
  color: #b0c0d4;
  margin: 0;
  line-height: 1.5;
}

.hours-text strong {
  color: var(--color-white);
}

/* Map Card */
.map-card {
  padding: 1.5rem;
}

.map-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 1rem;
}

.map-title-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.map-title-wrap h4 {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0;
}

.map-iframe-container {
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
}

.map-footer-address {
  font-size: 0.78rem;
  color: #9cb1c9;
  margin-top: 0.75rem;
  line-height: 1.4;
}

@media (max-width: 1024px) {
  .contact-layout-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .contact-card {
    padding: 1.5rem;
  }

  .form-row-2 {
    grid-template-columns: 1fr;
  }

  .captcha-interactive-row {
    grid-template-columns: 1fr;
  }
}
</style>
