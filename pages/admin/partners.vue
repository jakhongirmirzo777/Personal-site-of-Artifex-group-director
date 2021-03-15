<template>
  <div class="gallery__container">
    <div class="gallery__add">
      <b-button @click="showImagePopNew" variant="info">+Add</b-button>
    </div>
    <div class="gallery__body">
      <div class="gallery__category">
        <div class="gallery__main">
          <div class="d-flex w-100">
            <span class="mr-1">№</span>
            <div class="w-100 text-center">My Partners</div>
          </div>
        </div>
        <div v-for="(item, i) in allPartners" :key="i" class="gallery__sub">
          <div class="d-flex">
            <span class="gallery__num"> {{ i + 1 }} </span>
            <p class="gallery__p"></p>
            <!-- {{ item.info }} -->
          </div>
          <div>
            <img :src="item.logo" alt="image" />
            <i
              @click="showDelPopNew(item)"
              class="far fa-trash-alt gallery__delete"
            />
          </div>
        </div>
      </div>
    </div>
    <AddPartnerPopup
      v-if="showImageAddPop"
      @closeImageAddPop="showImageAddPop = !showImageAddPop"
    />
    <DeletePopup
      :deletePartner="deletePartner"
      v-if="showDelPopup"
      @closeDelPop="showDelPopup = !showDelPopup"
    >
      Are you sure to delete all data of your partner? Note that if you delete
      it, you can't restore your partner's data
    </DeletePopup>
  </div>
</template>

<script>
import { adminRedirect } from '~/middleware'
import { adminOtherPages } from '~/middleware'
import AddPartnerPopup from '~/components/adminComponents/AddPartnerPopup'
import DeletePopup from '~/components/adminComponents/DeletePopup'
export default {
  components: { DeletePopup, AddPartnerPopup },
  middleware: [adminRedirect, adminOtherPages],
  data() {
    return {
      showDelPopup: false,
      showImageAddPop: false,
      deletePartner: null,
    }
  },
  methods: {
    showImagePopNew() {
      this.showImageAddPop = !this.showImageAddPop
      this.$emit('showImagePartPopNew', false)
    },
    showDelPopNew(item) {
      this.deletePartner = item
      this.showDelPopup = !this.showDelPopup
      this.$emit('showDelPartPopNew', false)
    },
  },
  created() {
    if (process.client) {
      this.$emit('showDelPopNew', false)
    }
  },
  computed: {
    allPartners() {
      if (this.$store.getters['adminPage/getAllPartners']) {
        return this.$store.getters['adminPage/getAllPartners']
          .slice(0)
          .sort((a, b) => a.id - b.id)
      }
    },
  },
}
</script>

<style></style>
