<template>
  <transition name="scroll">
    <a @click="scrollTop" v-show="visible" class="scroll__up">
      <i class="fas fa-chevron-up" />
    </a>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener(e) {
      this.visible = window.scrollY > 290
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  },
}
</script>

<style scoped>
.scroll-enter-active,
.scroll-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.scroll-enter,
.scroll-leave-to {
  opacity: 0;
}
</style>
