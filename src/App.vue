<template>
  <div class="app-root">
    <!-- Navigation Bar -->
    <Navbar />

    <!-- Main Content Container -->
    <main>
      <!-- Hero Section -->
      <HeroSection />

      <!-- Notice & Admission Offer Banner -->
      <NoticeBanner />

      <!-- Specialized Academic & Language Programs -->
      <ProgramsSection @select-course="handleCourseSelection" />

      <!-- Academic Collaboration with Mainichikotoba -->
      <CollaborationSection @select-course="handleCourseSelection" />

      <!-- Why Choose Us -->
      <WhyChooseUs />

      <!-- Dhaka Campuses (Shyamoli & Dhanmondi) -->
      <BranchesSection />

      <!-- Core Functionality: Contact Us, Captcha Form & Google Maps -->
      <ContactSection 
        ref="contactSectionRef" 
        :preselected-course="selectedCourse" 
      />
    </main>

    <!-- Global Footer -->
    <FooterSection @select-course="handleCourseSelection" />

    <!-- Floating WhatsApp & Quick Contact Helpers -->
    <FloatingQuickActions />
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import NoticeBanner from './components/NoticeBanner.vue'
import ProgramsSection from './components/ProgramsSection.vue'
import CollaborationSection from './components/CollaborationSection.vue'
import WhyChooseUs from './components/WhyChooseUs.vue'
import BranchesSection from './components/BranchesSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import FloatingQuickActions from './components/FloatingQuickActions.vue'

const selectedCourse = ref('Japanese Language – JLPT N5 & N4')
const contactSectionRef = ref(null)

const handleCourseSelection = (courseTitle) => {
  selectedCourse.value = courseTitle
  if (contactSectionRef.value && contactSectionRef.value.setProgram) {
    contactSectionRef.value.setProgram(courseTitle)
  }

  nextTick(() => {
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  })
}
</script>

<style scoped>
.app-root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
