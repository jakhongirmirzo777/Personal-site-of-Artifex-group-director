<template>
  <div class="gallery__container">
    <div class="gallery__body">
      <div class="gallery__category">
        <div class="gallery__main">
          <div class="d-flex w-100">
            <span class="mr-1">№</span>
            <div class="w-100 text-center">Messages</div>
          </div>
        </div>
        <div v-for="(item, i) in allMessages" :key="i" class="gallery__sub">
          <div class="d-flex">
            <span class="gallery__num"> {{ i + 1 }} </span>
            <p class="gallery__p">{{ item.full_name }}</p>
          </div>
          <div class="d-flex">
            <p class="m-0 p-0 mr-3">
              {{
                item.created_at
                  .split('')
                  .slice(0, 10)
                  .join('')
                  .split('-')
                  .reverse()
                  .join('-')
              }}
            </p>

            <i
              @click="showViewPop(item)"
              class="far fa-eye gallery__edit gallery__delete__center"
            />
            <i
              @click="showDelPopNew(item)"
              class="far fa-trash-alt gallery__delete gallery__delete__center"
            />
          </div>
        </div>
      </div>
    </div>
    <DeletePopup
      :deleteMessage="deleteMessage"
      v-if="showDelPopup"
      @closeDelPop="showDelPopup = !showDelPopup"
    >
      Are you sure to delete this message? Note that if you delete this message,
      you can't restore it.
    </DeletePopup>
    <Message
      :message="message"
      @closeMessage="showMessage = !showMessage"
      v-if="showMessage"
    />
  </div>
</template>

<script>
import { adminRedirect } from '~/middleware'
import { adminOtherPages } from '~/middleware'
import DeletePopup from '~/components/adminComponents/DeletePopup'
import Message from '~/components/adminComponents/Message'
export default {
  components: {
    DeletePopup,
    Message,
  },
  middleware: [adminRedirect, adminOtherPages],
  data() {
    return {
      showDelPopup: false,
      deleteMessage: null,
      showMessage: false,
      message: null,
    }
  },
  methods: {
    showDelPopNew(item) {
      this.deleteMessage = item
      this.showDelPopup = !this.showDelPopup
      this.$emit('showDelPartPopNew', false)
    },
    showViewPop(item) {
      this.message = item
      this.showMessage = !this.showMessage
      this.$emit('showDelPartPopNew', false)
    },
  },

  created() {
    if (process.client) {
      this.$emit('showDelPopNew', false)
    }
  },
  computed: {
    allMessages() {
      if (this.$store.getters['adminPage/getAllMessages']) {
        return this.$store.getters['adminPage/getAllMessages']
          .slice(0)
          .sort((a, b) => a.id - b.id)
      }
    },
  },
}
</script>

<style></style>
