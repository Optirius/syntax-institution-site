<template>
  <section id="programs" class="section programs-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <div class="section-tag tag-red">
          <GraduationCap :size="15" />
          <span>Our Specialized Programs</span>
        </div>
        <h2 class="section-title">
          Empowering Academic Success & <br />
          <span class="text-gold">Global Language Fluency</span>
        </h2>
        <p class="section-subtitle">
          Structured courses taught with concept-driven methodologies, small batch sizes, and focused exam preparation for school academics, career growth, and study abroad.
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="filter-tabs">
        <button 
          v-for="cat in categories" 
          :key="cat.id" 
          class="filter-btn"
          :class="{ active: activeCategory === cat.id }"
          @click="activeCategory = cat.id"
        >
          <component :is="cat.icon" :size="16" />
          <span>{{ cat.label }}</span>
        </button>
      </div>

      <!-- Programs Grid -->
      <div class="programs-grid">
        <div 
          v-for="program in filteredPrograms" 
          :key="program.id"
          class="program-card"
        >
          <!-- Card Header & Badge -->
          <div class="program-top">
            <div class="program-icon-box" :class="program.iconBgClass">
              <component :is="program.icon" :size="24" />
            </div>
            <span class="badge-mode">{{ program.mode }}</span>
          </div>

          <h3 class="program-name">{{ program.title }}</h3>
          <p class="program-desc">{{ program.description }}</p>

          <!-- Core Curriculum Bullets -->
          <div class="curriculum-highlights">
            <h4 class="highlights-heading">Key Focus Areas:</h4>
            <ul class="highlights-list">
              <li v-for="(feat, idx) in program.features" :key="idx">
                <CheckCircle2 :size="14" class="feat-check" />
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>

          <!-- Card Footer Action -->
          <div class="program-footer">
            <div class="program-meta">
              <span class="meta-item"><Users :size="14" /> {{ program.batchSize }}</span>
              <span class="meta-item"><Clock :size="14" /> {{ program.duration }}</span>
            </div>
            <button 
              @click="handleInquire(program.title)" 
              class="btn btn-outline-gold btn-sm w-full"
            >
              <span>Inquire for this Course</span>
              <ArrowRight :size="14" />
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Assessment & Course Finder Survey Box with QR Code -->
      <div class="program-consultation-prompt">
        <div class="prompt-text">
          <div class="prompt-badge">
            <Sparkles :size="14" class="text-gold" />
            <span>Fast Course Assessment</span>
          </div>
          <h4>Not sure which program matches your target?</h4>
          <p>Scan our QR code on your mobile device to take our 1-minute course assessment survey, find your ideal learning path, and complete your pre-admission inquiry.</p>
          <div class="prompt-cta-row">
            <a href="#contact" class="btn btn-primary btn-sm">
              <MessageSquare :size="15" />
              <span>Request Free Guidance</span>
            </a>
            <a 
              href="https://wa.me/8801737733026?text=Hi%20Syntax%20Institution,%20I%20would%20like%20course%20guidance." 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-whatsapp btn-sm"
            >
              <span>WhatsApp Advisor</span>
            </a>
          </div>
        </div>

        <div class="prompt-qr-card">
          <div class="prompt-qr-header">
            <QrCode :size="16" class="text-gold" />
            <span>SCAN TO ENROLL</span>
          </div>
          <div class="prompt-qr-img-wrap">
            <img src="/images/qr-code.jpg" alt="Scan to enroll & survey QR code" class="survey-qr-img" />
          </div>
          <span class="prompt-qr-caption">Choose Course & Enroll</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  GraduationCap, 
  BookOpen, 
  Languages, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Clock, 
  MessageSquare, 
  Award, 
  Sparkles, 
  QrCode 
} from 'lucide-vue-next'

const emit = defineEmits(['selectCourse'])

const activeCategory = ref('all')

const categories = [
  { id: 'all', label: 'All Programs', icon: GraduationCap },
  { id: 'language', label: 'Language Courses', icon: Languages },
  { id: 'academic', label: 'Academic & School Support', icon: BookOpen },
  { id: 'test-prep', label: 'IELTS & JLPT Exams', icon: Award }
]

const programs = [
  {
    id: 'japanese-jlpt',
    category: ['language', 'test-prep'],
    title: 'Japanese Language – JLPT N5 & N4',
    description: 'Comprehensive Japanese training covering Kanji, vocabulary, grammar, reading comprehension, and listening in academic partnership with Mainichikotoba.',
    features: [
      'Hiragana, Katakana & 200+ Core Kanji Characters',
      'JLPT N5 & N4 structured syllabus & mock tests',
      'Native pronunciation & Japanese culture etiquette',
      'Academic pathway guidance for higher studies in Japan'
    ],
    mode: 'Campus & Live Online',
    batchSize: 'Small Batches (8-12 students)',
    duration: '3 - 6 Months Track',
    icon: Languages,
    iconBgClass: 'bg-red-glow'
  },
  {
    id: 'olevel-alevel',
    category: ['academic', 'test-prep'],
    title: 'O Level & A Level Preparation',
    description: 'Structured Cambridge & Edexcel curriculum coaching with concept-based explanations, past paper problem-solving, and intensive exam preparation.',
    features: [
      'Concept-first breakdown of difficult syllabus topics',
      '10+ years past paper drills & mark-scheme techniques',
      'Continuous weekly chapter tests & mock exams',
      'Individual subject mentorship & doubt-clearing'
    ],
    mode: 'Campus & Online',
    batchSize: 'Focused Batch / 1-on-1',
    duration: 'Academic Session',
    icon: GraduationCap,
    iconBgClass: 'bg-gold-glow'
  },
  {
    id: 'english-medium',
    category: ['academic'],
    title: 'English Medium Academic Support',
    description: 'Personalized academic guidance for English Medium students (Class 1 to A Level), fostering deep conceptual understanding and academic confidence.',
    features: [
      'Comprehensive coverage of school curriculum & homework support',
      'Mathematics, Science, English & Business studies guidance',
      'Regular evaluation & progress reports to parents',
      'Supportive environment to eliminate exam anxiety'
    ],
    mode: 'Campus & Online',
    batchSize: 'Individual & Small Group',
    duration: 'Year-Round Support',
    icon: BookOpen,
    iconBgClass: 'bg-red-glow'
  },
  {
    id: 'spoken-english',
    category: ['language'],
    title: 'Practical Spoken English',
    description: 'Interactive conversation course engineered to build natural English speaking fluency, correct pronunciation, sentence construction, and presentation skills.',
    features: [
      'Daily conversational drills & role-playing scenarios',
      'Pronunciation tuning & common grammatical error correction',
      'Public speaking, debate, and impromptu speaking drills',
      'Professional communication & interview preparation'
    ],
    mode: 'Offline & Online',
    batchSize: 'Interactive Circles',
    duration: '2 - 3 Months Track',
    icon: MessageSquare,
    iconBgClass: 'bg-gold-glow'
  },
  {
    id: 'ielts-prep',
    category: ['language', 'test-prep'],
    title: 'IELTS Preparation (Academic & General)',
    description: 'Target-driven IELTS mentorship focused on all 4 modules: Listening, Reading, Writing (Task 1 & 2), and Speaking to achieve Band 7.5+.',
    features: [
      'Proven test strategies for Reading & Listening speed mastery',
      'High-scoring vocabulary & grammar structures for Writing',
      '1-on-1 live mock speaking assessments with instant feedback',
      'Full-length computer & paper-based simulation tests'
    ],
    mode: 'Offline & Online',
    batchSize: 'Target 7.5+ Cohort',
    duration: '2 - 3 Months Track',
    icon: Award,
    iconBgClass: 'bg-red-glow'
  },
  {
    id: 'basic-english',
    category: ['language'],
    title: 'Basic to Intermediate English',
    description: 'Strengthen core English grammar, expand active vocabulary, improve sentence construction, and develop everyday English writing and speaking capability.',
    features: [
      'Fundamentals of English grammar, tenses & prepositions',
      'Essential vocabulary building for daily communication',
      'Reading comprehension and guided essay/paragraph writing',
      'Step-by-step transition from hesitant to confident English'
    ],
    mode: 'Offline & Live Online',
    batchSize: 'Small Batch Care',
    duration: '2 - 3 Months Track',
    icon: Globe,
    iconBgClass: 'bg-gold-glow'
  }
]

const filteredPrograms = computed(() => {
  if (activeCategory.value === 'all') return programs
  return programs.filter(p => p.category.includes(activeCategory.value))
})

const handleInquire = (courseTitle) => {
  emit('selectCourse', courseTitle)
  const contactEl = document.getElementById('contact')
  if (contactEl) {
    contactEl.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.programs-section {
  background: #000000;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.text-gold {
  color: var(--color-gold);
}

/* Filter Tabs */
.filter-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
}

.filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #0D0D0D;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--color-slate-light);
  padding: 0.6rem 1.3rem;
  border-radius: var(--radius-pill);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  border-color: var(--color-gold);
  color: var(--color-white);
}

.filter-btn.active {
  background: var(--color-gold);
  border-color: var(--color-gold);
  color: #000000;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(249, 169, 0, 0.3);
}

/* Programs Grid */
.programs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3.5rem;
}

.program-card {
  background: #0D0D0D;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-normal);
  position: relative;
}

.program-card:hover {
  transform: translateY(-6px);
  border-color: rgba(249, 169, 0, 0.4);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.7), 0 0 20px rgba(249, 169, 0, 0.1);
}

.program-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.program-icon-box {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
}

.bg-red-glow {
  background: rgba(229, 9, 20, 0.12);
  color: #ff5e65;
  border: 1px solid rgba(229, 9, 20, 0.3);
}

.bg-gold-glow {
  background: rgba(249, 169, 0, 0.12);
  color: var(--color-gold);
  border: 1px solid rgba(249, 169, 0, 0.3);
}

.badge-mode {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.06);
  color: #a0b2c6;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.program-name {
  font-size: 1.28rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.program-desc {
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* Highlights */
.curriculum-highlights {
  background: #050505;
  border-radius: var(--radius-md);
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.highlights-heading {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-gold);
  letter-spacing: 0.05em;
  margin-bottom: 0.6rem;
}

.highlights-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.highlights-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: #c9d5e4;
  line-height: 1.4;
}

.feat-check {
  color: var(--color-gold);
  flex-shrink: 0;
  margin-top: 2px;
}

/* Footer of Card */
.program-footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.program-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.78rem;
  color: var(--color-slate-light);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.w-full {
  width: 100%;
}

/* Bottom Prompt */
.program-consultation-prompt {
  background: linear-gradient(135deg, rgba(229, 9, 20, 0.15), #0a0a0a);
  border: 1px solid rgba(229, 9, 20, 0.3);
  border-radius: var(--radius-lg);
  padding: 2.25rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
}

.prompt-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--color-gold);
  background: rgba(249, 169, 0, 0.1);
  border: 1px solid rgba(249, 169, 0, 0.25);
  padding: 0.2rem 0.65rem;
  border-radius: var(--radius-pill);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.prompt-text h4 {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--color-white);
  margin-bottom: 0.5rem;
}

.prompt-text p {
  font-size: 0.95rem;
  color: #a0b2c6;
  margin-bottom: 1.25rem;
  line-height: 1.6;
  max-width: 680px;
}

.prompt-cta-row {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  flex-wrap: wrap;
}

/* Prompt QR Card */
.prompt-qr-card {
  background: #000000;
  border: 1px solid rgba(249, 169, 0, 0.35);
  border-radius: var(--radius-md);
  padding: 0.9rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.7);
  transition: transform var(--transition-fast);
}

.prompt-qr-card:hover {
  transform: scale(1.04);
  border-color: var(--color-gold);
}

.prompt-qr-header {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--color-gold);
  letter-spacing: 0.06em;
  margin-bottom: 0.5rem;
  white-space: nowrap;
}

.prompt-qr-img-wrap {
  background: #FFFFFF;
  padding: 8px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6);
}

.survey-qr-img {
  width: 140px;
  height: 140px;
  display: block;
  object-fit: contain;
}

.prompt-qr-caption {
  font-size: 0.7rem;
  color: #9cb1c9;
  font-weight: 600;
  margin-top: 0.45rem;
  white-space: nowrap;
}

@media (max-width: 1024px) {
  .programs-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .program-consultation-prompt {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
  }

  .prompt-badge {
    margin-left: auto;
    margin-right: auto;
  }

  .prompt-cta-row {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .programs-grid {
    grid-template-columns: 1fr;
  }

  .prompt-text h4 {
    font-size: 1.15rem;
  }
}
</style>
