<template>
  <transition name="popupFade">
    <div class="message__container">
      <span @click="close" style="color: black" class="popup__delete__close">
        &times;
      </span>
      <div class="gallery__container message__wrapper">
        <div class="gallery__body">
          <div class="gallery__category">
            <div class="gallery__main">
              <div class="w-100 text-center">Message</div>
            </div>
            <div class="gallery__sub justify-between">
              <div>
                <p class="gallery__p" style="border-left: none; padding: 0">
                  Fullname:
                </p>
              </div>
              <div>{{ message.full_name }}</div>
            </div>
            <div class="gallery__sub justify-between">
              <div>
                <p class="gallery__p" style="border-left: none; padding: 0">
                  Email:
                </p>
              </div>
              <div>{{ message.email }}</div>
            </div>
            <div class="gallery__sub justify-between">
              <div>
                <p class="gallery__p" style="border-left: none; padding: 0">
                  Phone:
                </p>
              </div>
              <div>{{ message.phone }}</div>
            </div>
            <div class="gallery__sub justify-between">
              <div>
                <p class="gallery__p" style="border-left: none; padding: 0">
                  Created:
                </p>
              </div>
              <div>
                {{
                  message.created_at
                    .split('')
                    .slice(0, 10)
                    .join('')
                    .split('-')
                    .reverse()
                    .join('-')
                }}
              </div>
            </div>
            <div
              class="gallery__sub justify-between"
              style="align-items: flex-start"
            >
              <div class="mr-5">
                <p class="gallery__p" style="border-left: none; padding: 0">
                  Message:
                </p>
              </div>
              <div style="word-break: break-all">
                {{ message.message }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['message'],
  methods: {
    close() {
      this.$emit('closeMessage', false)
    },
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
  },
  mounted() {
    this.scrollTop()
  },
}
</script>

<style></style>
