<template>
  <section id="why-us" class="section why-section">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
        <div class="section-tag">
          <ShieldCheck :size="16" />
          <span>The Syntax Difference</span>
        </div>
        <h2 class="section-title">Why Choose Syntax Institution?</h2>
        <p class="section-subtitle">
          We combine academic rigor with personalized mentorship to turn conceptual understanding into exceptional results.
        </p>
      </div>

      <!-- Why Grid -->
      <div class="why-grid">
        <div 
          v-for="item in reasons" 
          :key="item.id"
          class="why-card"
        >
          <div class="why-icon-box">
            <component :is="item.icon" :size="26" class="why-icon" />
          </div>
          <h3 class="why-card-title">{{ item.title }}</h3>
          <p class="why-card-desc">{{ item.description }}</p>
        </div>
      </div>

      <!-- Institution Quote / Slogan Strip -->
      <div class="slogan-strip">
        <div class="slogan-inner">
          <span class="slogan-quote">“</span>
          <h3 class="slogan-text">LEARN • GROW • ACHIEVE</h3>
          <span class="slogan-sub">EXCELLENCE IN THOUGHT. POWER IN LANGUAGE.</span>
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
  Award, 
  Laptop, 
  FileCheck2, 
  HeartHandshake 
} from 'lucide-vue-next'

const reasons = [
  {
    id: 1,
    title: 'Concept-Based Pedagogy',
    description: 'We prioritize core conceptual mastery and logical reasoning rather than superficial rote learning, ensuring deep analytical mastery.',
    icon: BrainCircuit
  },
  {
    id: 2,
    title: 'Small Batches & Individual Care',
    description: 'Strict batch size limits (10-15 students) guarantee that every student receives dedicated faculty attention and tailored feedback.',
    icon: Users
  },
  {
    id: 3,
    title: 'Expert Subject Mentors',
    description: 'Our faculty consists of certified educators, native Japanese instructors, and Cambridge/Edexcel top-grade track record mentors.',
    icon: Award
  },
  {
    id: 4,
    title: 'Dual Learning Mode (Offline & Online)',
    description: 'Enjoy air-conditioned modern campus facilities at Dhanmondi & Shyamoli, with seamless high-definition interactive live online classes.',
    icon: Laptop
  },
  {
    id: 5,
    title: 'Rigorous Mock Testing Systems',
    description: 'Regular chapter quizzes, past-paper analysis, and full-length exam simulations to build real exam temperament and time management.',
    icon: FileCheck2
  },
  {
    id: 6,
    title: 'Free Student Counselling',
    description: 'Get free one-on-one academic, career, and overseas study guidance to map out clear university and language goals with experts.',
    icon: HeartHandshake
  }
]
</script>

<style scoped>
.why-section {
  background: var(--bg-body);
  position: relative;
  border-top: 1px solid var(--border-subtle);
  transition: background-color var(--transition-normal);
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
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-lg);
  padding: 2.25rem 2rem;
  box-shadow: var(--shadow-card);
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
  box-shadow: var(--shadow-elevated);
}

.why-card:hover::before {
  opacity: 1;
}

.why-icon-box {
  width: 54px;
  height: 54px;
  border-radius: var(--radius-md);
  background: var(--color-gold-light);
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
  color: var(--text-heading);
  margin-bottom: 0.75rem;
}

.why-card-desc {
  font-size: 0.92rem;
  color: var(--text-sub);
  line-height: 1.6;
  margin: 0;
}

/* Slogan Strip */
.slogan-strip {
  background: var(--bg-card);
  border: 1px solid rgba(249, 169, 0, 0.3);
  border-radius: var(--radius-lg);
  padding: 2.25rem 2rem;
  text-align: center;
  box-shadow: var(--shadow-card);
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
  color: var(--text-heading);
}

.slogan-sub {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--color-gold);
  text-transform: uppercase;
}

@media (max-width: 1024px) {
  .why-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .why-grid {
    grid-template-columns: 1fr;
  }

  .slogan-text {
    font-size: 1.35rem;
  }
}
</style>
