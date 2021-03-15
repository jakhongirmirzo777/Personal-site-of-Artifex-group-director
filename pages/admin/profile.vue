<template>
  <div class="profile__container">
    <div class="profile__wrapper">
      <div class="profile__head">
        <h1>Personal information</h1>
      </div>
      <div class="profile__body">
        <!-- <div class="profile__photo">
          <div class="profile__photo__bg">
            <img :src="form.image" class="profile__photo__img" alt="user" />
          </div>
        </div> -->
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="profile__group">
                <div>
                  <b-form-group label-size="sm" label="Fullname in English:">
                    <b-form-input
                      size="sm"
                      placeholder="Enter fullname in English"
                      v-model="form.fNameEn"
                      :disabled="formOpen"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="profile__group">
                <div>
                  <b-form-group label-size="sm" label="Fullname in Russian:">
                    <b-form-input
                      size="sm"
                      placeholder="Enter fullname in Russian"
                      v-model="form.fNameRu"
                      :disabled="formOpen"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="profile__group">
                <div>
                  <b-form-group label-size="sm" label="Fullname in Uzbek:">
                    <b-form-input
                      size="sm"
                      placeholder="Enter fullname in Uzbek"
                      v-model="form.fNameUz"
                      :disabled="formOpen"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="profile__group">
                <div>
                  <b-form-group
                    label-size="sm"
                    label="Personal information in English:"
                  >
                    <b-form-input
                      size="sm"
                      placeholder="Enter personal information in English"
                      v-model="form.infoEn"
                      :disabled="formOpen"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="profile__group">
                <div>
                  <b-form-group
                    label-size="sm"
                    label="Personal information in Russian:"
                  >
                    <b-form-input
                      size="sm"
                      placeholder="Enter personal information in Russian"
                      v-model="form.infoRu"
                      :disabled="formOpen"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="profile__group">
                <div>
                  <b-form-group
                    label-size="sm"
                    label="Personal information in Uzbek:"
                  >
                    <b-form-input
                      size="sm"
                      placeholder="Enter personal information in Uzbek"
                      v-model="form.infoUz"
                      :disabled="formOpen"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="profile__group">
                <div>
                  <b-form-group label-size="sm" label="Years of experience:">
                    <b-form-input
                      size="sm"
                      type="number"
                      placeholder="Enter years of experience"
                      v-model="form.years"
                      :disabled="formOpen"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="profile__group">
                <div>
                  <b-form-group
                    label-size="sm"
                    label="Number of satisfied clients:"
                  >
                    <b-form-input
                      type="number"
                      size="sm"
                      placeholder="Enter number of satisfied clients"
                      v-model="form.clients"
                      :disabled="formOpen"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="profile__group">
                <div>
                  <b-form-group
                    label-size="sm"
                    label="Number of completed projects:"
                  >
                    <b-form-input
                      size="sm"
                      type="number"
                      placeholder="Enter number of completed projects"
                      v-model="form.projects"
                      :disabled="formOpen"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="profile__group">
                <div>
                  <b-form-group label-size="sm" label="E-mail address:">
                    <b-form-input
                      size="sm"
                      placeholder="Enter e-mail address"
                      v-model="form.email"
                      :disabled="formOpen"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="profile__group">
                <div>
                  <b-form-group label-size="sm" label="Facebook account link:">
                    <b-form-input
                      size="sm"
                      placeholder="Enter facebook account link"
                      v-model="form.facebook"
                      :disabled="formOpen"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="profile__group">
                <div>
                  <b-form-group label-size="sm" label="Instagram account link:">
                    <b-form-input
                      size="sm"
                      placeholder="Enter instagram account link"
                      v-model="form.instagram"
                      :disabled="formOpen"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="profile__group">
                <div>
                  <b-form-group label-size="sm" label="Twitter account link:">
                    <b-form-input
                      size="sm"
                      placeholder="Enter twitter account link"
                      v-model="form.twitter"
                      :disabled="formOpen"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="profile__group">
                <div>
                  <b-form-group label-size="sm" label="Linkedin account link:">
                    <b-form-input
                      size="sm"
                      placeholder="Enter linkedin account link"
                      v-model="form.linkedin"
                      :disabled="formOpen"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <div class="profile__group">
                <div>
                  <b-form-group label-size="sm" label="Telegram account link:">
                    <b-form-input
                      size="sm"
                      placeholder="Enter telegram account link"
                      v-model="form.telegram"
                      :disabled="formOpen"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>
              <!-- <div class="profile__group">
                <div>
                  <b-form-group label="Personal image:" label-size="sm">
                    <b-form-file
                      @change="valChange"
                      browse-text="Upload"
                      :disabled="formOpen"
                      size="sm"
                    ></b-form-file>
                  </b-form-group>
                </div>
              </div> -->
              <div class="profile__btn">
                <b-button @click="handleSave" type="button" variant="info">
                  {{ formOpen ? 'Edit' : 'Save' }}
                </b-button>
                <div class="profile__progress">
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
      </div>
    </div>
  </div>
</template>

<script>
import { adminRedirect } from '~/middleware'
import { adminOtherPages } from '~/middleware'
export default {
  middleware: [adminRedirect, adminOtherPages],
  data() {
    return {
      form: {
        fNameEn: '',
        fNameRu: '',
        fNameUz: '',
        infoEn: '',
        infoRu: '',
        infoUz: '',
        years: '',
        clients: '',
        projects: '',
        email: '',
        facebook: '',
        twitter: '',
        instagram: '',
        telegram: '',
        linkedin: '',
        // image: '',
        // newImage: null,
      },
      formOpen: true,
      // valChanged: false,
      showProgress: false,
      value: 0,
    }
  },
  methods: {
    // valChange(e) {
    //   // this.valChanged = true
    //   this.form.newImage = e.target.files[0]
    // },
    async handleSave() {
      try {
        if (!this.formOpen) {
          this.showProgress = true
          const credentials = this.$store.getters['adminPage/getAdminData']
          const formData = new FormData()
          if (this.form.fNameEn) {
            formData.append('full_name_en', this.form.fNameEn)
          }
          if (this.form.fNameRu) {
            formData.append('full_name_ru', this.form.fNameRu)
          }
          if (this.form.fNameUz) {
            formData.append('full_name_uz', this.form.fNameUz)
          }
          if (this.form.infoEn) {
            formData.append('info_en', this.form.infoEn)
          }
          if (this.form.infoRu) {
            formData.append('info_ru', this.form.infoRu)
          }
          if (this.form.infoUz) {
            formData.append('info_uz', this.form.infoUz)
          }
          if (this.form.years) {
            formData.append('years', this.form.years)
          }
          if (this.form.clients) {
            formData.append('clients', this.form.clients)
          }
          if (this.form.projects) {
            formData.append('projects', this.form.projects)
          }
          if (this.form.email) {
            formData.append('email', this.form.email)
          }
          if (this.form.facebook) {
            formData.append('facebook', this.form.facebook)
          }
          if (this.form.instagram) {
            formData.append('instagram', this.form.instagram)
          }
          if (this.form.telegram) {
            formData.append('telegram', this.form.telegram)
          }
          if (this.form.twitter) {
            formData.append('twitter', this.form.twitter)
          }
          if (this.form.linkedin) {
            formData.append('linkedin', this.form.linkedin)
          }
          // if (this.valChanged) {
          //   formData.append('image', this.form.newImage)
          // }
          const resAccess = await this.$axios.post('/login/', credentials)
          if (resAccess.data.access) {
            const { data } = await this.$axios.patch(`/ceos/1/`, formData, {
              headers: { Authorization: `Bearer ${resAccess.data.access}` },
              onUploadProgress: (uploadEvent) => {
                this.value = Math.round(
                  (uploadEvent.loaded / uploadEvent.total) * 100
                )
              },
            })
            this.showProgress = false
            this.value = 0
            // this.newImage = null
            this.changeProfileData()
          }
          this.formOpen = true
        } else {
          this.formOpen = false
        }
      } catch (err) {
        console.log(err)
      }
    },

    async changeProfileData() {
      try {
        const credentials = this.$store.getters['adminPage/getAdminData']
        const resAccess = await this.$axios.post('/login/', credentials)
        if (resAccess.data.access) {
          await this.$axios
            .get('/ceos/1/', {
              headers: { Authorization: `Bearer ${resAccess.data.access}` },
            })
            .then((res) => {
              this.form.fNameEn = res.data.full_name_en
              this.form.fNameRu = res.data.full_name_ru
              this.form.fNameUz = res.data.full_name_uz
              this.form.infoEn = res.data.info_en
              this.form.infoRu = res.data.info_ru
              this.form.infoUz = res.data.info_uz
              this.form.years = res.data.years
              this.form.clients = res.data.clients
              this.form.projects = res.data.projects
              this.form.email = res.data.email
              this.form.facebook = res.data.facebook
              this.form.twitter = res.data.twitter
              this.form.instagram = res.data.instagram
              this.form.telegram = res.data.telegram
              this.form.linkedin = res.data.linkedin
              // this.form.image = res.data.image
            })
        }
      } catch (err) {
        console.log(err)
      }
    },
  },
  async created() {
    this.changeProfileData()
    if (process.client) {
      this.$emit('showDelPopNew', false)
    }
  },
}
</script>

<style></style>
