<template>
  <transition name="popupFade">
    <div class="popup__imageAdd__container">
      <span @click="close" class="popup__imageAdd__close"> &times; </span>
      <b-form
        class="popup__imageAdd__form"
        @submit.prevent="onSubmit"
        @reset.prevent="onReset"
      >
        <h1>You can add a new partner data here!</h1>
        <!-- <b-form-group
          label-size="sm"
          label="Partner information:"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            v-model="info"
            size="sm"
            placeholder="Enter partner information"
            required
          ></b-form-input>
        </b-form-group> -->
        <b-form-group label="Partner logo:" label-size="sm">
          <b-form-file
            @change="valueChange"
            browse-text="Upload"
            size="sm"
          ></b-form-file>
        </b-form-group>
        <div class="popup__add__btn mt-4">
          <div class="mr-5 mb-3">
            <b-button type="submit" variant="info">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </div>
          <div class="mb-3">
            <b-progress
              :value="value"
              v-if="showProgress"
              variant="info"
              :show-progress="true"
              striped
              :animated="true"
              height="1.5rem"
            ></b-progress>
          </div>
        </div>
      </b-form>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      // info: '',
      logo: null,
      showProgress: false,
      value: 0,
    }
  },
  methods: {
    valueChange(e) {
      this.logo = e.target.files[0]
    },
    async onSubmit() {
      try {
        this.showProgress = true
        const credentials = this.$store.getters['adminPage/getAdminData']
        const formData = new FormData()
        // formData.append('info_en', this.info)
        // formData.append('info_ru', this.info)
        // formData.append('info_uz', this.info)
        formData.append('logo', this.logo)
        const resAccess = await this.$axios.post('/login/', credentials)
        if (resAccess.data.access) {
          const { data } = await this.$axios.post('/partners/', formData, {
            headers: { Authorization: `Bearer ${resAccess.data.access}` },
            onUploadProgress: (uploadEvent) => {
              this.value = Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              )
            },
          })
          this.showProgress = false
          this.$store.dispatch('adminPage/initAllData')
        }
        this.close()
      } catch (err) {
        console.log(err)
      }
    },
    onReset() {
      // this.info = ''
      this.logo = null
    },
    close() {
      this.$emit('closeImageAddPop', false)
    },
  },
}
</script>

<style></style>
