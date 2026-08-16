<template>
  <div class="floating-actions-container">
    <!-- Scroll To Top Button -->
    <button 
      v-if="showScrollTop" 
      @click="scrollToTop" 
      class="float-btn float-top-btn" 
      aria-label="Scroll to top"
      title="Scroll to Top"
    >
      <ArrowUp :size="18" />
    </button>

    <!-- Quick Call Button -->
    <a 
      href="tel:+8801737733026" 
      class="float-btn float-call-btn" 
      aria-label="Call Syntax Institution"
      title="Call Helpline: +880 1737-733026"
    >
      <Phone :size="20" />
    </a>

    <!-- Quick WhatsApp Button with Pulsing Ping -->
    <a 
      href="https://wa.me/8801737733026?text=Hello%20Syntax%20Institution,%20I%20would%20like%20to%20know%20more%20about%20your%20courses." 
      target="_blank" 
      rel="noopener noreferrer" 
      class="float-btn float-whatsapp-btn" 
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span class="ping-circle"></span>
      <MessageSquare :size="22" />
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp, Phone, MessageSquare } from 'lucide-vue-next'

const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.floating-actions-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.float-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  border: none;
  transition: all var(--transition-normal);
  position: relative;
}

.float-btn:hover {
  transform: scale(1.1) translateY(-2px);
}

.float-top-btn {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  color: var(--color-gold);
}

.float-top-btn:hover {
  background: #F9A900;
  color: #000000;
  border-color: #F9A900;
}

.float-call-btn {
  background: var(--color-red);
}

.float-call-btn:hover {
  background: var(--color-red-hover);
  box-shadow: 0 8px 24px rgba(229, 9, 20, 0.5);
}

.float-whatsapp-btn {
  background: #25D366;
  width: 54px;
  height: 54px;
}

.float-whatsapp-btn:hover {
  background: #20BA5A;
  box-shadow: 0 10px 28px rgba(37, 211, 102, 0.55);
}

/* Pulsing Ping */
.ping-circle {
  position: absolute;
  top: -3px;
  right: -3px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0 0 10px #FFFFFF;
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2.2);
    opacity: 0;
  }
}

@media (max-width: 640px) {
  .floating-actions-container {
    bottom: 16px;
    right: 16px;
    gap: 10px;
  }

  .float-btn {
    width: 44px;
    height: 44px;
  }

  .float-whatsapp-btn {
    width: 50px;
    height: 50px;
  }
}
</style>
