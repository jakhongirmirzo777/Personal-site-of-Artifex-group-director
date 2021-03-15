<template>
  <transition name="popupFade">
    <div class="popup__imageAdd__container">
      <span @click="close" class="popup__imageAdd__close"> &times; </span>
      <b-form
        class="popup__imageAdd__form"
        @submit.prevent="onSubmit"
        @reset.prevent="onReset"
      >
        <b-form-group label-size="sm" label="Type of file:" label-for="input-7">
          <b-form-select
            id="input-7"
            size="sm"
            required
            v-model="form.selected"
            :options="options"
          ></b-form-select>
        </b-form-group>
        <b-form-group label="New file:" label-size="sm">
          <b-form-file
            :required="editFile ? false : true"
            @change="valChange"
            browse-text="Upload"
            size="sm"
          ></b-form-file>
        </b-form-group>
        <!-- <b-form-group
          label-size="sm"
          label="File caption in English:"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            size="sm"
            v-model="form.captionEn"
            placeholder="Enter file caption in English"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label-size="sm"
          label="File caption in Russian:"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            size="sm"
            v-model="form.captionRu"
            placeholder="Enter file caption in Russian"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label-size="sm"
          label="File caption in Uzbek:"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            size="sm"
            v-model="form.captionUz"
            placeholder="Enter file caption in Uzbek"
            required
          ></b-form-input>
        </b-form-group> -->
        <div class="popup__add__btn mt-4">
          <div class="mr-5 mb-3">
            <b-button type="submit" variant="info">
              {{ editFile ? 'Edit' : 'Submit' }}
            </b-button>
            <b-button v-if="!editFile" type="reset" variant="danger"
              >Reset</b-button
            >
          </div>
          <div class="mb-3">
            <b-progress
              v-if="showProgress"
              :value="value"
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
  props: ['id', 'editFile'],
  data() {
    return {
      form: {
        selected: this.editFile ? this.editFile.file_type : 'image',
        file: null,
        // captionUz: this.editFile ? this.editFile.caption_uz : '',
        // captionRu: this.editFile ? this.editFile.caption_ru : '',
        // captionEn: this.editFile ? this.editFile.caption_en : '',
      },
      value: 0,
      showProgress: false,
      valChanged: false,
      options: [
        { value: 'image', text: 'This is Image gallery card' },
        { value: 'video', text: 'This is Video card' },
      ],
    }
  },
  methods: {
    valChange(e) {
      this.valChanged = true
      this.form.file = e.target.files[0]
    },
    async onSubmit() {
      try {
        this.showProgress = true
        const credentials = this.$store.getters['adminPage/getAdminData']
        const formData = new FormData()
        if (this.valChanged) {
          formData.append('file', this.form.file)
        }
        formData.append('gallery', this.id)
        formData.append('file_type', this.form.selected)
        // formData.append('caption_uz', this.form.captionUz)
        // formData.append('caption_ru', this.form.captionRu)
        // formData.append('caption_en', this.form.captionEn)
        const resAccess = await this.$axios.post('/login/', credentials)
        if (resAccess.data.access) {
          if (this.editFile) {
            const { data } = await this.$axios.patch(
              `/files/${this.editFile.id}/`,
              formData,
              {
                headers: { Authorization: `Bearer ${resAccess.data.access}` },
                onUploadProgress: (uploadEvent) => {
                  this.value = Math.round(
                    (uploadEvent.loaded / uploadEvent.total) * 100
                  )
                },
              }
            )
          } else {
            const { data } = await this.$axios.post('/files/', formData, {
              headers: { Authorization: `Bearer ${resAccess.data.access}` },
              onUploadProgress: (uploadEvent) => {
                this.value = Math.round(
                  (uploadEvent.loaded / uploadEvent.total) * 100
                )
              },
            })
            this.form.selected = 'image'
            // this.form.captionUz = ''
            // this.form.captionRu = ''
            // this.form.captionEn = ''
            this.file = null
          }
          this.showProgress = false
          this.value = 0
          this.$store.dispatch('adminPage/initAllData')
        }
        this.close()
      } catch (err) {
        console.log(err)
      }
    },
    onReset() {
      this.form.selected = 'image'
      // this.form.captionUz = ''
      // this.form.captionRu = ''
      // this.form.captionEn = ''
      this.file = null
    },
    close() {
      this.$emit('closeImageAddPop', false)
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
