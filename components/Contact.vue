<template>
  <div data-aos="fade-up" class="contact">
    <h1>{{ $t('contact.heading') }}</h1>
    <form @submit.prevent="submitMessage" class="contact__container">
      <div class="contact__wrapper">
        <div class="contact__box contact__box-1">
          <div class="contact__group">
            <input
              autocomplete="off"
              required
              v-model="fName"
              :placeholder="
                $i18n.locale == 'en'
                  ? 'First name'
                  : $i18n.locale == 'ru'
                  ? 'Имя'
                  : 'Ism'
              "
              id="fName"
              type="text"
            />
            <label for="fName">{{ $t('contact.fName') }}</label>
          </div>
          <div class="contact__group">
            <input
              autocomplete="off"
              required
              v-model="lName"
              :placeholder="
                $i18n.locale == 'en'
                  ? 'Last name'
                  : $i18n.locale == 'ru'
                  ? 'Фамилия'
                  : 'Familiya'
              "
              id="lName"
              type="text"
            />
            <label for="lName">{{ $t('contact.lName') }}</label>
          </div>
          <div class="contact__group">
            <input
              autocomplete="off"
              v-model="email"
              placeholder="E-mail"
              id="email"
              type="email"
            />
            <label for="email">E-mail</label>
          </div>
          <div class="contact__group">
            <input
              autocomplete="off"
              required
              v-model="phone"
              placeholder="+9989- --- -- --"
              id="Phone"
              type="tel"
            />
            <label for="Phone">{{ $t('contact.phone') }}</label>
          </div>
        </div>
        <div class="contact__box contact__box-2">
          <textarea
            v-model="message"
            :placeholder="
              $i18n.locale == 'en'
                ? 'Your message to me'
                : $i18n.locale == 'ru'
                ? 'Ваше сообщение мне'
                : 'Sizning menga xabaringiz'
            "
            name="textArea"
            id="textArea"
          ></textarea>
        </div>
      </div>
      <div class="contact__btn">
        <button type="submit">{{ $t('contact.btn') }}</button>
      </div>
    </form>
  </div>
</template>

<script>
import Toast from '~/utils/toast.js'
export default {
  mixins: [Toast],
  data() {
    return {
      fName: '',
      lName: '',
      phone: '+9989',
      message: '',
      email: '',
    }
  },
  methods: {
    submitMessage() {
      if (this.phone.split('').length !== 13) {
        if (this.$i18n.locale == 'en') {
          this.showToast(
            'danger',
            'Error',
            'Phone number should be no more or less than 9 characters'
          )
          return
        } else if (this.$i18n.locale == 'ru') {
          this.showToast(
            'danger',
            'Ошибка',
            'Номер телефона должен быть не более или менее 9 символов.'
          )
          return
        } else {
          this.showToast(
            'danger',
            'Xatolik',
            "Telefon raqami kamida yoki ko'pi bilan 9 ta raqamdan iborat bo'lishi kerak"
          )
          return
        }
      }
      const data = {
        full_name: this.fName + ' ' + this.lName,
        email: this.email,
        phone: this.phone.split('').slice(4).join(''),
        message: this.message,
      }
      this.$store.dispatch('homePage/sendMessage', data).then((res) => {
        this.fName = ''
        this.lName = ''
        this.email = ''
        this.phone = '+9989'
        this.message = ''
        if (this.$i18n.locale == 'en') {
          this.showToast(
            'info',
            'Success',
            'Your message have been successfully sent'
          )
          return
        } else if (this.$i18n.locale == 'ru') {
          this.showToast(
            'info',
            'Успех',
            'Ваше сообщение было успешно отправлено'
          )
          return
        } else {
          this.showToast(
            'info',
            'Muvaffaqiyat',
            'Sizning xabaringiz muvaffaqiyatli yuborildi'
          )
          return
        }
      })
    },
  },
}
</script>

<style></style>
