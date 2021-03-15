<template>
  <transition name="popupFade">
    <div
      id="del"
      class="popup__delete__container"
      @click.self="$emit('closeDelPop', false)"
    >
      <span @click="close" class="popup__delete__close"> &times; </span>
      <form @submit.prevent="handleDelete" class="popup__delete__form">
        <h1>
          <slot></slot>
        </h1>
        <div class="popup__delete__btn">
          <b-button type="submit" variant="danger">Yes</b-button>
          <b-button @click="close" type="button" variant="info">No</b-button>
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['deleteGallery', 'deleteFile', 'deletePartner', 'deleteMessage'],
  methods: {
    async handleDelete() {
      try {
        const credentials = this.$store.getters['adminPage/getAdminData']
        const resAccess = await this.$axios.post('/login/', credentials)
        if (resAccess.data.access) {
          if (this.deleteGallery) {
            const { data } = await this.$axios.delete(
              `/galleries/${this.deleteGallery.id}/`,
              {
                headers: { Authorization: `Bearer ${resAccess.data.access}` },
              }
            )
          } else if (this.deleteFile) {
            const { data } = await this.$axios.delete(
              `/files/${this.deleteFile.id}/`,
              {
                headers: { Authorization: `Bearer ${resAccess.data.access}` },
              }
            )
          } else if (this.deletePartner) {
            const { data } = await this.$axios.delete(
              `/partners/${this.deletePartner.id}/`,
              {
                headers: { Authorization: `Bearer ${resAccess.data.access}` },
              }
            )
          } else if (this.deleteMessage) {
            const { data } = await this.$axios.delete(
              `/contacts/${this.deleteMessage.id}/`,
              {
                headers: { Authorization: `Bearer ${resAccess.data.access}` },
              }
            )
          }
          this.$store.dispatch('adminPage/initAllData')
          this.close()
        }
      } catch (err) {
        console.log(err)
      }
    },
    close() {
      this.$emit('closeDelPop', false)
    },
    // scrollTop() {
    //   this.intervalId = setInterval(() => {
    //     if (window.pageYOffset === 0) {
    //       clearInterval(this.intervalId)
    //     }
    //     window.scroll(0, window.pageYOffset - 50)
    //   }, 20)
    // },
  },
  // mounted() {
  //   this.scrollTop()
  // },
}
</script>

<style></style>
