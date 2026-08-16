<template>
  <section id="why-us" class="section why-section">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">
          <ShieldCheck :size="15" />
          <span>The Syntax Advantage</span>
        </div>
        <h2 class="section-title">
          Why Choose <span class="text-gold">Syntax Institution</span>?
        </h2>
        <p class="section-subtitle">
          We combine academic rigor with supportive mentoring to help every student achieve their personal best.
        </p>
      </div>

      <div class="why-grid">
        <div v-for="(item, idx) in reasons" :key="idx" class="why-card">
          <div class="why-icon-box">
            <component :is="item.icon" :size="26" class="why-icon" />
          </div>
          <h3 class="why-card-title">{{ item.title }}</h3>
          <p class="why-card-desc">{{ item.description }}</p>
        </div>
      </div>

      <!-- Slogan Banner -->
      <div class="slogan-strip">
        <div class="slogan-inner">
          <span class="slogan-quote">“</span>
          <span class="slogan-text">Excellence in Thought. Power in Language.</span>
          <span class="slogan-sub">— SYNTAX INSTITUTION PHILOSOPHY</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  ShieldCheck, 
  BrainCircuit, 
  Users, 
  Laptop, 
  Award, 
  TrendingUp, 
  Compass 
} from 'lucide-vue-next'

const reasons = [
  {
    icon: BrainCircuit,
    title: 'Concept-Based Teaching',
    description: 'We prioritize core conceptual mastery over blind memorization, ensuring long-term understanding and problem-solving agility for competitive exams.'
  },
  {
    icon: Users,
    title: 'Small Batches & Individual Care',
    description: 'Our small batch size (8–12 students) guarantees personalized attention, continuous doubt-clearing, and targeted guidance for every learner.'
  },
  {
    icon: Award,
    title: 'Experienced Faculty Mentors',
    description: 'Learn from seasoned academic teachers and certified Japanese trainers who bring years of classroom success and exam strategy mastery.'
  },
  {
    icon: Laptop,
    title: 'Flexible Dual-Mode Classes',
    description: 'Attend physically at our modern Dhanmondi or Shyamoli campuses, or connect to interactive live online classes with full digital whiteboard support.'
  },
  {
    icon: TrendingUp,
    title: 'Mock Exams & Progress Tracking',
    description: 'Frequent chapter-wise assessments, full-length timed mock tests, and actionable performance analytics keep students ahead of their test schedules.'
  },
  {
    icon: Compass,
    title: 'Free Academic & Study Counselling',
    description: 'Every student receives complimentary admission counselling and international study guidance for higher education and language careers.'
  }
]
</script>

<style scoped>
.why-section {
  background: #000000;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.text-gold {
  color: var(--color-gold);
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3.5rem;
}

.why-card {
  background: #0D0D0D;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  padding: 2.25rem 2rem;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.why-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--color-red), var(--color-gold));
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.why-card:hover {
  transform: translateY(-5px);
  border-color: rgba(249, 169, 0, 0.35);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.8);
}

.why-card:hover::before {
  opacity: 1;
}

.why-icon-box {
  width: 54px;
  height: 54px;
  border-radius: var(--radius-md);
  background: rgba(249, 169, 0, 0.1);
  border: 1px solid rgba(249, 169, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.why-icon {
  color: var(--color-gold);
}

.why-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 0.75rem;
}

.why-card-desc {
  font-size: 0.92rem;
  color: #9cb1c9;
  line-height: 1.6;
  margin: 0;
}

/* Slogan Strip */
.slogan-strip {
  background: linear-gradient(135deg, #0a0a0a 0%, #141414 100%);
  border: 1px solid rgba(249, 169, 0, 0.3);
  border-radius: var(--radius-lg);
  padding: 2.25rem 2rem;
  text-align: center;
}

.slogan-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.slogan-quote {
  font-family: var(--font-serif);
  font-size: 3rem;
  color: var(--color-red);
  line-height: 0.5;
  margin-bottom: 0.25rem;
}

.slogan-text {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: var(--color-white);
}

.slogan-sub {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--color-gold);
  margin-top: 0.35rem;
}

@media (max-width: 1024px) {
  .why-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .why-grid {
    grid-template-columns: 1fr;
  }

  .slogan-text {
    font-size: 1.35rem;
  }
}
</style>
