<template>
  <section id="programs" class="section programs-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <div class="section-tag">
          <GraduationCap :size="16" />
          <span>Specialized Curricula</span>
        </div>
        <h2 class="section-title">Academic & Language Excellence</h2>
        <p class="section-subtitle">
          Structured curricula designed for measurable score growth, concept mastery, and global communication proficiency.
        </p>
      </div>

      <!-- Filter Tabs -->
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
          <!-- Program Card Top -->
          <div class="program-top">
            <div class="program-icon-box" :class="program.iconBgClass">
              <component :is="program.icon" :size="24" />
            </div>
            <span class="badge-mode">{{ program.mode }}</span>
          </div>

          <h3 class="program-name">{{ program.title }}</h3>
          <p class="program-desc">{{ program.description }}</p>

          <!-- Curriculum Highlights -->
          <div class="curriculum-highlights">
            <div class="highlights-heading">Key Features:</div>
            <ul class="highlights-list">
              <li v-for="(feat, idx) in program.features" :key="idx">
                <CheckCircle2 :size="14" class="feat-check" />
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>

          <!-- Card Footer & Action -->
          <div class="program-footer">
            <div class="program-meta">
              <span class="meta-item">
                <Users :size="14" />
                <span>{{ program.batchSize }}</span>
              </span>
              <span class="meta-item">
                <Clock :size="14" />
                <span>{{ program.duration }}</span>
              </span>
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
    description: 'Conducted in official Academic Collaboration with MAINICHIKOTOBA Japanese Language Training Centre. Comprehensive preparation covering Kanji, Grammar, Vocabulary, Reading, and Listening.',
    features: [
      'Original Japanese curriculum & native-standard accents',
      'Regular JLPT mock exams with question dissection',
      'Visa guidance & Japanese university study pathway counselling',
      'Interactive kanji memorization mnemonics & listening audio labs'
    ],
    mode: 'Offline & Live Online',
    batchSize: 'Small Batches (12-15)',
    duration: '3 - 6 Months Track',
    icon: Languages,
    iconBgClass: 'bg-red-glow'
  },
  {
    id: 'o-a-level',
    category: ['academic', 'test-prep'],
    title: 'O Level & A Level Preparation',
    description: 'Rigorous, concept-based coaching for Cambridge (CAIE) and Edexcel curricula across STEM, Commerce, and Humanities disciplines.',
    features: [
      'Top-tier experienced faculty with stellar past results',
      'Chapter-wise categorized past paper solving sessions',
      'Regular full-syllabus mock exams replicating real test conditions',
      'Specialized 1-on-1 problem-solving clinics before exams'
    ],
    mode: 'Offline & Online',
    batchSize: 'Limited 10-12 Students',
    duration: 'Year-Round & Crash Prep',
    icon: GraduationCap,
    iconBgClass: 'bg-gold-glow'
  },
  {
    id: 'english-medium-academic',
    category: ['academic'],
    title: 'English Medium Academic Support',
    description: 'Continuous academic tutoring for Class 1 to A Level students following British and International English medium curricula.',
    features: [
      'Subject mastery in Math, Physics, Chemistry, Biology & English',
      'Daily school homework tracking and syllabus coverage',
      'Weekly progress evaluations and parent update reports',
      'Building deep logical foundations and analytical reasoning'
    ],
    mode: 'Offline & Online',
    batchSize: 'Individual Care Groups',
    duration: 'Full Academic Term',
    icon: BookOpen,
    iconBgClass: 'bg-red-glow'
  },
  {
    id: 'spoken-english',
    category: ['language'],
    title: 'Practical Spoken English',
    description: 'Dynamic conversational practice designed to eliminate speaking hesitation, build natural fluency, and refine pronunciation and voice modulation.',
    features: [
      'Daily conversational drills, debates, and presentation modules',
      'Accent softening and phonetic pronunciation improvement',
      'Real-world situational role-playing & workplace scenarios',
      'Constructive feedback and public speaking confidence drills'
    ],
    mode: 'Offline & Live Online',
    batchSize: 'Interactive Cohorts',
    duration: '8 - 12 Weeks Track',
    icon: Globe,
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
  background: var(--bg-body);
  border-top: 1px solid var(--border-subtle);
  transition: background-color var(--transition-normal);
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
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  color: var(--text-muted);
  padding: 0.6rem 1.3rem;
  border-radius: var(--radius-pill);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  border-color: var(--color-gold);
  color: var(--text-heading);
}

.filter-btn.active {
  background: #F9A900;
  border-color: #F9A900;
  color: #000000;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(249, 169, 0, 0.35);
}

/* Programs Grid */
.programs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3.5rem;
}

.program-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-lg);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-card);
  transition: all var(--transition-normal);
  position: relative;
}

.program-card:hover {
  transform: translateY(-6px);
  border-color: rgba(249, 169, 0, 0.4);
  box-shadow: var(--shadow-elevated), 0 0 20px rgba(249, 169, 0, 0.1);
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
  background: var(--bg-icon-box);
}

.bg-red-glow {
  background: var(--color-red-light);
  color: var(--color-red);
  border: 1px solid rgba(229, 9, 20, 0.25);
}

.bg-gold-glow {
  background: var(--color-gold-light);
  color: var(--color-gold);
  border: 1px solid rgba(249, 169, 0, 0.25);
}

.badge-mode {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-pill);
  background: var(--bg-tag-badge);
  color: var(--text-muted);
  border: 1px solid var(--border-card);
}

.program-name {
  font-size: 1.28rem;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.program-desc {
  font-size: 0.9rem;
  color: var(--text-sub);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* Highlights */
.curriculum-highlights {
  background: var(--bg-card-subtle);
  border-radius: var(--radius-md);
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid var(--border-subtle);
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
  color: var(--text-main);
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
  border-top: 1px solid var(--border-subtle);
}

.program-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.78rem;
  color: var(--text-muted);
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
  background: var(--bg-collab-strip);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-lg);
  padding: 2.25rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  box-shadow: var(--shadow-card);
}

.prompt-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--color-gold);
  background: var(--color-gold-light);
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
  color: var(--text-heading);
  margin-bottom: 0.5rem;
}

.prompt-text p {
  font-size: 0.95rem;
  color: var(--text-sub);
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
  background: var(--bg-card);
  border: 1px solid rgba(249, 169, 0, 0.35);
  border-radius: var(--radius-md);
  padding: 0.9rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  box-shadow: var(--shadow-card);
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
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
}

.survey-qr-img {
  width: 140px;
  height: 140px;
  display: block;
  object-fit: contain;
}

.prompt-qr-caption {
  font-size: 0.7rem;
  color: var(--text-muted);
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
