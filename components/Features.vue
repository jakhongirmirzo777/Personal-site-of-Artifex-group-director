<template>
  <div>
    <div class="features__container">
      <div class="features__top">
        <div class="container-fluid features__wrapper">
          <div class="row">
            <div
              data-aos="fade-up"
              v-for="(item, i) in galleriesData ? galleriesData : 4"
              :key="i"
              class="col-lg-3 col-md-4 col-sm-6 col-xs-12"
            >
              <div
                class="features__box"
                :class="{ features__box__change: detectMob }"
              >
                <img
                  @click="detectMob ? openPopup(item) : ''"
                  class="features__img"
                  :src="item.poster"
                  alt="image"
                />
                <caption
                  v-if="!detectMob"
                  @click="openPopup(item)"
                  class="features__box__caption"
                >
                  <i class="far fa-play-circle" />
                  <div>
                    <p>{{ item ? item.title : '' }}</p>
                    <p>{{ item.date | reverseDate }}</p>
                  </div>
                </caption>
                <caption
                  v-if="detectMob"
                  class="features__box__caption__change"
                >
                  <div>
                    <p>{{ item ? item.title : '' }}</p>
                    <p>{{ item.date | reverseDate }}</p>
                  </div>
                </caption>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" class="features__bottom">
        <h1>{{ $t('features.heading') }}</h1>
        <Carousel :partnersData="partners" />
      </div>
      <Popup :data="popupData" :showPop="showPopup" @close="closePopup" />
    </div>
  </div>
</template>

<script>
import Carousel from '~/components/Carousel'
import Popup from '~/components/Popup.vue'
export default {
  components: {
    Carousel,
    Popup,
  },
  props: ['galleriesData'],
  data() {
    return {
      showPopup: false,
      popupData: null,
    }
  },
  methods: {
    openPopup(item) {
      if (item.files) {
        this.showPopup = true
        this.popupData = item
      } else {
        this.showPopup = true
        this.popupData = item
      }
    },
    closePopup() {
      this.popupData = null
      this.showPopup = false
    },
  },
  filters: {
    reverseDate(string) {
      return string.split('-').reverse().join('-')
    },
  },
  computed: {
    partners() {
      if (this.$store.getters['homePage/getPartners']) {
        return this.$store.getters['homePage/getPartners']
      }
    },
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
