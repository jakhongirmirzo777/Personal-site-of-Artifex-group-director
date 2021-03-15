<template>
  <div
    :key="update"
    class="carousel__container"
    :class="{ carousel__change: detectMob }"
  >
    <VueSlickCarousel v-bind="settings">
      <div v-for="(item, i) in partnersData ? partnersData : 5" :key="i">
        <div class="carousel__box">
          <img
            class="carousel__img"
            :src="item.logo ? item.logo : ''"
            alt="carousel-image"
          />
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
  props: ['partnersData'],
  data() {
    return {
      settings: {
        arrows: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        rows: 1,
        autoplaySpeed: 2000,
        touchMove: true,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 670,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    }
  },
  created() {
    this.update++
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
      return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem)
      })
    },
  },
}
</script>

<style></style>
