<template>
  <div class="navbar__container">
    <div class="navbar__hamburger"><span></span><span></span><span></span></div>
    <b-navbar toggleable="lg">
      <b-navbar-brand :to="localePath('/')">
        <img
          class="navbar__logo"
          src="~/assets/sass/images/logo.png"
          alt="logo"
        />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav
          class="ml-auto align-items-center navbar__contact__btn__box"
        >
          <b-nav-item @click="scrollBottom" class="navbar__contact__btn">
            {{ $t('header.contact') }}
          </b-nav-item>
          <b-navbar-nav class="navbar__lang">
            <b-nav-item
              :class="{ navbar__activeLang: $i18n.locale == 'en' }"
              :to="switchLocalePath('en')"
              class="navbar__item"
            >
              En
            </b-nav-item>
            <b-nav-item
              :class="{ navbar__activeLang: $i18n.locale == 'ru' }"
              :to="switchLocalePath('ru')"
              class="navbar__item"
            >
              Ru
            </b-nav-item>
            <b-nav-item
              :class="{ navbar__activeLang: $i18n.locale == 'uz' }"
              :to="switchLocalePath('uz')"
              class="navbar__item"
            >
              Uz
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    scrollBottom() {
      const contact = document.getElementById('contact')
      contact.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      })
    },
  },
}
</script>

<style></style>
