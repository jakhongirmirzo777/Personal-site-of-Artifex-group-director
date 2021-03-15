<template>
  <transition name="popupFade">
    <div
      v-if="showPop"
      @click.self="close"
      class="popup__container"
      :class="{ popup__change: detectMob }"
    >
      <span @click="close">&times;</span>
      <VueSlickCarousel
        v-if="data.files.length > 0"
        class="popup__carousel"
        v-bind="settings"
      >
        <div
          v-for="(item, i) in data.files.length > 0 ? data.files : 1"
          :key="item.id"
        >
          <div class="popup__carousel__box">
            <video
              :key="i"
              controls
              v-if="item.file_type == 'video'"
              class="popup__carousel__video"
              :src="item ? item.file : ''"
            ></video>
            <img
              v-if="item.file_type == 'image'"
              class="popup__carousel__img"
              :src="item ? item.file : ''"
              alt="carousel-image"
            />
            <!-- <caption>
              {{
                item ? item.caption : ''
              }}
            </caption> -->
          </div>
        </div>
      </VueSlickCarousel>
      <VueSlickCarousel
        v-if="data.files.length == 0"
        class="popup__carousel"
        v-bind="settings"
      >
        <div v-for="(item, i) in 1" :key="i">
          <div class="popup__carousel__box">
            <img
              class="popup__carousel__img"
              :src="data ? data.poster : ''"
              alt="carousel-image"
            />
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </transition>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
  props: ['data', 'showPop'],
  data() {
    return {
      settings: {
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        touchMove: true,
      },
      update: 1,
    }
  },
  methods: {
    close() {
      this.$emit('close', false)
    },
  },
  computed: {
    detectMob() {
      const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
      ]
      console.log(
        toMatch.some((toMatchItem) => {
          return navigator.userAgent.match(toMatchItem)
        })
      )
      return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem)
      })
    },
  },
}
</script>

<style>
.popupFade-enter-active,
.popupFade-leave-active {
  transition: opacity 0.3s;
}
.popupFade-enter,
.popupFade-leave-to {
  opacity: 0;
}
</style>
