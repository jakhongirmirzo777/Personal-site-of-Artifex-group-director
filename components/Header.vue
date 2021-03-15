<template>
  <div class="header__container">
    <Navbar />
    <div class="header__body">
      <div data-aos="fade-up" class="container-fluid">
        <div class="row">
          <div class="col-md-5 col-sm-5 col header__man__box">
            &nbsp;
            <!-- <img
            class="header__man"
            src="~assets/sass/images/header-man.png"
            alt="man-image"
          /> -->
          </div>
          <div class="col-md-7 col-sm-7 col header__box">
            <div class="header__content">
              <div class="header__content__left">
                <h3>{{ $t('header.me') }}</h3>
                <div>
                  <h1>
                    {{ userName && userName.fName ? userName.fName : '' }}
                    <br />
                    {{ userName && userName.lName ? userName.lName : '' }}
                  </h1>
                  <h2>
                    {{
                      profileData && profileData.info ? profileData.info : ''
                    }}
                  </h2>
                </div>
              </div>
              <div class="header__content__right">
                <a
                  :href="
                    profileData && profileData.telegram
                      ? profileData.telegram
                      : ''
                  "
                >
                  <i class="fab fa-telegram-plane header__icons" />
                </a>
                <a
                  :href="
                    profileData && profileData.instagram
                      ? profileData.instagram
                      : ''
                  "
                  ><i class="fab fa-instagram header__icons"
                /></a>
                <a
                  :href="
                    profileData && profileData.facebook
                      ? profileData.facebook
                      : ''
                  "
                >
                  <i class="fab fa-facebook-square header__icons"
                /></a>
                <a
                  :href="
                    profileData && profileData.linkedin
                      ? profileData.linkedin
                      : ''
                  "
                >
                  <i class="fab fa-linkedin-in header__icons"
                /></a>
                <a
                  :href="
                    profileData && profileData.twitter
                      ? profileData.twitter
                      : ''
                  "
                >
                  <i class="fab fa-twitter header__icons" />
                </a>
                <!-- <nuxt-link
                :to="
                  profileData && profileData.telegram
                    ? profileData.telegram
                    : ''
                "
              >
                <i class="fab fa-telegram-plane header__icons" />
              </nuxt-link> -->
                <!-- <nuxt-link
                :to="
                  profileData && profileData.instagram
                    ? profileData.instagram
                    : ''
                "
              >
                <i class="fab fa-instagram header__icons" />
              </nuxt-link> -->
                <!-- <nuxt-link
                :to="
                  profileData && profileData.facebook
                    ? profileData.facebook
                    : ''
                "
              >
                <i class="fab fa-facebook-square header__icons" />
              </nuxt-link>
              <nuxt-link
                :to="
                  profileData && profileData.linkedin
                    ? profileData.linkedin
                    : ''
                "
              >
                <i class="fab fa-linkedin-in header__icons" />
              </nuxt-link>
              <nuxt-link
                :to="
                  profileData && profileData.twitter ? profileData.twitter : ''
                "
              >
                <i class="fab fa-twitter header__icons" />
              </nuxt-link> -->
              </div>
            </div>
            <div>
              <div class="header__projects">
                <div class="header__projects__box">
                  <h2>
                    {{
                      profileData && profileData.years ? profileData.years : ''
                    }}
                  </h2>
                  <p>{{ $t('header.years') }}</p>
                </div>
                <div class="header__projects__box">
                  <h2>
                    {{
                      profileData && profileData.projects
                        ? profileData.projects
                        : ''
                    }}
                  </h2>
                  <p>{{ $t('header.projects') }}</p>
                </div>
                <div class="header__projects__box">
                  <h2>
                    {{
                      profileData && profileData.clients
                        ? profileData.clients
                        : ''
                    }}
                  </h2>
                  <p>{{ $t('header.clients') }}</p>
                </div>
              </div>
              <div class="header__content__right header__content__visible">
                <a
                  :href="
                    profileData && profileData.telegram
                      ? profileData.telegram
                      : ''
                  "
                >
                  <i class="fab fa-telegram-plane header__icons" />
                </a>
                <a
                  :href="
                    profileData && profileData.instagram
                      ? profileData.instagram
                      : ''
                  "
                  ><i class="fab fa-instagram header__icons"
                /></a>
                <a
                  :href="
                    profileData && profileData.facebook
                      ? profileData.facebook
                      : ''
                  "
                >
                  <i class="fab fa-facebook-square header__icons"
                /></a>
                <a
                  :href="
                    profileData && profileData.linkedin
                      ? profileData.linkedin
                      : ''
                  "
                >
                  <i class="fab fa-linkedin-in header__icons"
                /></a>
                <a
                  :href="
                    profileData && profileData.twitter
                      ? profileData.twitter
                      : ''
                  "
                >
                  <i class="fab fa-twitter header__icons" />
                </a>
                <!-- <nuxt-link
                :to="
                  profileData && profileData.telegram
                    ? profileData.telegram
                    : ''
                "
              >
                <i class="fab fa-telegram-plane header__icons" />
              </nuxt-link>
              <nuxt-link
                :to="
                  profileData && profileData.instagram
                    ? profileData.instagram
                    : ''
                "
              >
                <i class="fab fa-instagram header__icons" />
              </nuxt-link>
              <nuxt-link
                :to="
                  profileData && profileData.facebook
                    ? profileData.facebook
                    : ''
                "
              >
                <i class="fab fa-facebook-square header__icons" />
              </nuxt-link>
              <nuxt-link
                :to="
                  profileData && profileData.linkedin
                    ? profileData.linkedin
                    : ''
                "
              >
                <i class="fab fa-linkedin-in header__icons" />
              </nuxt-link>
              <nuxt-link
                :to="
                  profileData && profileData.twitter ? profileData.twitter : ''
                "
              >
                <i class="fab fa-twitter header__icons" />
              </nuxt-link> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
export default {
  components: { Navbar },
  props: ['profileData'],
  data() {
    return {}
  },
  computed: {
    userName() {
      if (this.profileData) {
        const first = this.profileData.full_name
          .split(' ')
          .slice(0, 2)
          .join(' ')
        const second = this.profileData.full_name.split(' ').slice(2).join(' ')
        return {
          fName: first,
          lName: second,
        }
      }
    },
  },
}
</script>

<style></style>
