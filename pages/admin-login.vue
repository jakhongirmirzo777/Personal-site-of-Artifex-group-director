<template>
  <div class="login__popup">
    <form @submit.prevent="submitLogin" class="login__popup__form">
      <b-form-group
        class="mb-4"
        label-size="md"
        label="Username:"
        label-for="input-1"
      >
        <b-form-input
          size="md"
          id="input-1"
          v-model="form.username"
          placeholder="Enter your username"
          autocomplete="off"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        class="mb-4"
        label-size="md"
        label="Password:"
        label-for="input-2"
      >
        <b-form-input
          size="md"
          id="input-2"
          type="password"
          v-model="form.password"
          placeholder="Enter your password"
          autocomplete="off"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-button size="md" type="submit" variant="success">Login</b-button>
        <b-button @click="clearData" size="md" type="button" variant="info"
          >Reset</b-button
        >
        <b-button @click="redirect" size="md" type="button" variant="danger"
          >Exit</b-button
        >
      </b-form-group>
    </form>
  </div>
</template>

<script>
import Toast from '~/utils/toast.js'
export default {
  mixins: [Toast],
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    async submitLogin() {
      try {
        await this.$axios.post('/login/', this.form)
        this.$store.dispatch('adminPage/initAdminData', this.form)
        this.$store.dispatch('adminPage/initShowAdmin', true)
        this.form.username = ''
        this.form.password = ''
        this.$router.push(this.localePath({ name: 'admin' }))
      } catch (err) {
        this.showToast(
          'danger',
          'Xatolik',
          "Login yoki parol xato terilgan! Iltimos qayta urinib ko'ring"
        )
        console.log(err)
      }
    },
    clearData() {
      this.form.username = ''
      this.form.password = ''
    },
    redirect() {
      this.$router.push(this.localePath({ name: 'index' }))
    },
  },
}
</script>

<style></style>
