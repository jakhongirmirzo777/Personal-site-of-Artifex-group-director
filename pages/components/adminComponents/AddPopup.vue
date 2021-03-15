<template>
  <transition name="popupFade">
    <div :key="update" id="add" class="popup__add__container">
      <span @click="close" class="popup__add__close"> &times; </span>
      <b-form
        class="popup__add__form"
        @submit.prevent="onSubmit"
        @reset.prevent="onReset"
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <b-form-group
                label-size="sm"
                label="Card title in English:"
                label-for="input-1"
              >
                <b-form-input
                  size="sm"
                  id="input-1"
                  v-model="form.titleEn"
                  placeholder="Enter title in English"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                label-size="sm"
                label="Card title in Russian:"
                label-for="input-2"
              >
                <b-form-input
                  size="sm"
                  id="input-2"
                  v-model="form.titleRu"
                  placeholder="Enter title in Russian"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                label-size="sm"
                label="Card title in Uzbek:"
                label-for="input-3"
              >
                <b-form-input
                  size="sm"
                  id="input-3"
                  v-model="form.titleUz"
                  placeholder="Enter title in Uzbek"
                  required
                ></b-form-input>
              </b-form-group>
              <!-- <b-form-group
                label-size="sm"
                label="Card description in English:"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  size="sm"
                  v-model="form.descriptionEn"
                  placeholder="Enter description in English"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                label-size="sm"
                label="Card description in Russian:"
                label-for="input-5"
              >
                <b-form-input
                  id="input-5"
                  size="sm"
                  v-model="form.descriptionRu"
                  placeholder="Enter description in Russian"
                  required
                ></b-form-input>
              </b-form-group> -->
            </div>
            <div class="col-lg-6 col-md-6">
              <!-- <b-form-group
                label-size="sm"
                label="Card description in Uzbek:"
                label-for="input-6"
              >
                <b-form-input
                  id="input-6"
                  size="sm"
                  v-model="form.descriptionUz"
                  placeholder="Enter description in Uzbek"
                  required
                ></b-form-input>
              </b-form-group>  -->

              <b-form-group
                label-size="sm"
                label="Card date:"
                label-for="example-datepicker"
              >
                <b-form-datepicker
                  size="sm"
                  id="example-datepicker"
                  v-model="form.date"
                  required
                  class="mb-2"
                ></b-form-datepicker>
              </b-form-group>

              <b-form-group label="Poster:" label-size="sm">
                <b-form-file
                  :required="edit ? false : true"
                  @change="valChangePoster"
                  browse-text="Upload"
                  size="sm"
                ></b-form-file>
              </b-form-group>
              <div class="popup__add__btn mt-4">
                <div class="mr-5 mb-3">
                  <b-button type="submit" variant="info">
                    {{ edit ? 'Edit' : 'Submit' }}
                  </b-button>
                  <b-button v-if="!edit" type="reset" variant="danger"
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
            </div>
          </div>
        </div>
      </b-form>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['edit'],
  data() {
    return {
      form: {
        titleEn: this.edit ? this.edit.title_en : '',
        titleRu: this.edit ? this.edit.title_ru : '',
        titleUz: this.edit ? this.edit.title_uz : '',
        // descriptionEn: this.edit ? this.edit.description_en : '',
        // descriptionRu: this.edit ? this.edit.description_ru : '',
        // descriptionUz: this.edit ? this.edit.description_uz : '',
        date: this.edit ? this.edit.date : '',
        poster: null,
      },
      showProgress: false,
      value: 0,
      valChanged: false,
      update: 1,
    }
  },
  methods: {
    valChangePoster(event) {
      this.valChanged = true
      this.form.poster = event.target.files[0]
    },
    async onSubmit() {
      try {
        this.showProgress = true
        const credentials = this.$store.getters['adminPage/getAdminData']
        const formData = new FormData()
        formData.append('title_en', this.form.titleEn)
        formData.append('title_ru', this.form.titleRu)
        formData.append('title_uz', this.form.titleUz)
        // formData.append('description_en', this.form.descriptionEn)
        // formData.append('description_ru', this.form.descriptionRu)
        // formData.append('description_uz', this.form.descriptionUz)
        formData.append('date', this.form.date)
        if (this.valChanged) {
          formData.append('poster', this.form.poster)
        }
        const resAccess = await this.$axios.post('/login/', credentials)
        if (resAccess.data.access) {
          if (this.edit) {
            const { data } = await this.$axios.patch(
              `/galleries/${this.edit.id}/`,
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
            const { data } = await this.$axios.post('/galleries/', formData, {
              headers: { Authorization: `Bearer ${resAccess.data.access}` },
              onUploadProgress: (uploadEvent) => {
                this.value = Math.round(
                  (uploadEvent.loaded / uploadEvent.total) * 100
                )
              },
            })
            this.form.titleEn = ''
            this.form.titleRu = ''
            this.form.titleUz = ''
            // this.form.descriptionEn = ''
            // this.form.descriptionRu = ''
            // this.form.descriptionUz = ''
            this.form.date = ''
            this.form.poster = null
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
      this.form.titleEn = ''
      this.form.titleRu = ''
      this.form.titleUz = ''
      // this.form.descriptionEn = ''
      // this.form.descriptionRu = ''
      // this.form.descriptionUz = ''
      this.form.date = ''
      this.form.poster = null
    },
    close() {
      this.$emit('closeAddPop', false)
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
