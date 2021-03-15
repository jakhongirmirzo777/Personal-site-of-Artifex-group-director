<template>
  <div class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-4 mb-5 footer__wrapper">
          <div class="footer__box">
            <img
              src="~/assets/sass/images/logo.png"
              alt="logo"
              class="footer__logo"
            />
          </div>
        </div>
        <div class="col-lg-4 col-md-4 footer__wrapper">
          <div class="footer__box footer__content">
            <div class="footer__icons__box">
              <a
                :href="
                  profileData && profileData.telegram
                    ? profileData.telegram
                    : ''
                "
              >
                <i class="fab fa-telegram-plane footer__icons" />
              </a>
              <a
                :href="
                  profileData && profileData.instagram
                    ? profileData.instagram
                    : ''
                "
                ><i class="fab fa-instagram footer__icons"
              /></a>
              <a
                :href="
                  profileData && profileData.facebook
                    ? profileData.facebook
                    : ''
                "
              >
                <i class="fab fa-facebook-square footer__icons"
              /></a>
              <a
                :href="
                  profileData && profileData.linkedin
                    ? profileData.linkedin
                    : ''
                "
              >
                <i class="fab fa-linkedin-in footer__icons"
              /></a>
              <a
                :href="
                  profileData && profileData.twitter ? profileData.twitter : ''
                "
              >
                <i class="fab fa-twitter footer__icons" />
              </a>
              <!-- <nuxt-link
                :to="
                  profileData && profileData.telegram
                    ? profileData.telegram
                    : ''
                "
              >
                <i class="fab fa-telegram-plane footer__icons" />
              </nuxt-link>
              <nuxt-link
                :to="
                  profileData && profileData.instagram
                    ? profileData.instagram
                    : ''
                "
              >
                <i class="fab fa-instagram footer__icons" />
              </nuxt-link>
              <nuxt-link
                :to="
                  profileData && profileData.facebook
                    ? profileData.facebook
                    : ''
                "
              >
                <i class="fab fa-facebook-square footer__icons" />
              </nuxt-link>
              <nuxt-link
                :to="
                  profileData && profileData.linkedin
                    ? profileData.linkedin
                    : ''
                "
              >
                <i class="fab fa-linkedin-in footer__icons" />
              </nuxt-link>
              <nuxt-link
                :to="
                  profileData && profileData.twitter ? profileData.twitter : ''
                "
              >
                <i class="fab fa-twitter footer__icons" />
              </nuxt-link> -->
            </div>
            <div
              class="d-lg-none d-md-none col-lg-4 col-md-4 mb-5 d-sm-block d-xs-block footer__wrapper"
            >
              <div class="footer__box footer__envelope">
                <i class="far fa-envelope footer__icons" />
                <p>
                  {{
                    profileData && profileData.email ? profileData.email : ''
                  }}
                </p>
              </div>
            </div>
            <div class="footer__copy text-center">
              <p>Artifex 2021 | {{ $t('footer.rights') }}</p>
              <p>
                {{ $t('footer.developed') }}
                <a href="https://greatsoft.uz/">{{ $t('footer.company') }}</a>
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-lg-4 d-none d-lg-block d-md-block col-md-4 footer__wrapper"
        >
          <div class="footer__box footer__envelope">
            <i class="far fa-envelope footer__icons" />
            <p>
              {{ profileData && profileData.email ? profileData.email : '' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['profileData'],
}
</script>

<style></style>
