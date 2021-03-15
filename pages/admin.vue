<template>
  <section :key="update" class="admin">
    <nav class="admin__nav">
      <i
        @click="sideBarToggler = !sideBarToggler"
        class="fas fa-bars admin__toggler"
      />
    </nav>
    <div class="admin__container">
      <div
        class="admin__sidebar"
        :class="{ admin__sideToggle: sideBarToggler }"
      >
        <ul class="admin__list">
          <li>
            <nuxt-link class="admin__link" :to="localePath('/admin/galleries')"
              ><i class="fas fa-photo-video" /> Gallery</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="admin__link" :to="localePath('/admin/partners')"
              ><i class="far fa-handshake" /> Partners</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="admin__link" :to="localePath('/admin/messages')"
              ><i class="far fa-envelope" /> Messages</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="admin__link" :to="localePath('/admin/profile')"
              ><i class="fas fa-user-tie" /> Profile</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="admin__link" :to="localePath('/')">
              <i class="fas fa-home" /> Home</nuxt-link
            >
          </li>
          <li>
            <span @click="clearData" style="cursor: pointer" class="admin__link"
              ><i class="fas fa-door-open" /> Exit</span
            >
          </li>
        </ul>
      </div>
      <div class="admin__main" :class="{ admin__mainToggle: sideBarToggler }">
        <NuxtChild
          @showDelPartPopNew="toggleSideBar"
          @showImagePartPopNew="toggleSideBar"
          @showDelPopNew="toggleSideBar"
          @showAddPopNew="toggleSideBar"
          @showFilePopNew="toggleSideBar"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { adminRedirect } from '~/middleware'
import { adminOtherPages } from '~/middleware'
export default {
  middleware: [adminRedirect, adminOtherPages],
  data() {
    return {
      update: 1,
      sideBarToggler: false,
    }
  },
  async created() {
    this.$store.dispatch('adminPage/initAllData')
    this.update++
  },
  methods: {
    toggleSideBar() {
      const wW = window.innerWidth
      if (wW > 800) {
        if (!this.sideBarToggler) {
          this.sideBarToggler = !this.sideBarToggler
        }
      } else if (wW < 800) {
        if (this.sideBarToggler) {
          this.sideBarToggler = !this.sideBarToggler
        }
      }
    },
    clearData() {
      this.$store.dispatch('adminPage/clearAdminData')
      this.$store.dispatch('adminPage/clearShowAdmin')
      this.$router.push(this.localePath({ name: 'index' }))
    },
  },
}
</script>

<style></style>
