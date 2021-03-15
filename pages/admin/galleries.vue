<template>
  <div class="gallery__container">
    <div class="gallery__add">
      <b-button @click="showAddPopNew" variant="info">+Add</b-button>
    </div>
    <div class="gallery__body">
      <div
        v-for="(item, i) in allGalleries"
        :key="i"
        class="gallery__category mb-4"
      >
        <div class="gallery__main">
          <div class="d-flex justify-content-between w-100">
            <span class="mr-1">№</span>
            <div class="text-center">{{ item.title }}</div>
            <div>
              <i
                @click="editGalleryHandle(item)"
                class="fas fa-pencil-alt gallery__edit"
              />
              <i
                @click="showDelPopNew(item)"
                class="far fa-trash-alt gallery__delete"
              />
            </div>
          </div>
        </div>
        <div v-for="(file, i) in item.files" :key="i" class="gallery__sub">
          <div class="d-flex">
            <span class="gallery__num"> {{ i + 1 }} </span>
            <p class="gallery__p"></p>
          </div>
          <div>
            <img
              :src="file.file_type == 'image' ? file.file : item.poster"
              alt="image"
            />
            <i
              @click="editFileHandle(file, item)"
              class="fas fa-pencil-alt gallery__edit"
            />
            <i
              @click="showDelFile(file)"
              class="far fa-trash-alt gallery__delete"
            />
          </div>
        </div>
        <b-button @click="showFilePopNew(item)" class="mt-4" variant="info"
          >+Add file</b-button
        >
      </div>
    </div>
    <AddPopup
      :edit="editGallery"
      v-if="showAddPopup"
      @closeAddPop="showAddPopup = !showAddPopup"
    />
    <DeletePopup
      :deleteGallery="deleteGallery"
      :deleteFile="deleteFile"
      v-if="showDelPopup"
      @closeDelPop="showDelPopup = !showDelPopup"
    >
      {{
        deleteGallery
          ? 'Are you sure to delete this card? Note that if you delete this card all data inside it will be deleted together!'
          : deleteFile
          ? 'Are you sure to delete this file? Note that if you delete this file, you cannot restore it!'
          : ''
      }}
    </DeletePopup>
    <AddFilePopup
      :editFile="editFile"
      :id="galleryId"
      v-if="showFileAddPop"
      @closeImageAddPop="showFileAddPop = !showFileAddPop"
    />
  </div>
</template>

<script>
import { adminRedirect } from '~/middleware'
import { adminOtherPages } from '~/middleware'
import AddPopup from '~/components/adminComponents/AddPopup'
import AddFilePopup from '~/components/adminComponents/AddFilePopup'
import DeletePopup from '~/components/adminComponents/DeletePopup'
export default {
  components: { AddPopup, DeletePopup, AddFilePopup },
  middleware: [adminRedirect, adminOtherPages],
  data() {
    return {
      showAddPopup: false,
      showDelPopup: false,
      editGallery: null,
      deleteGallery: null,
      showFileAddPop: false,
      galleryId: null,
      editFile: null,
      deleteFile: null,
    }
  },
  methods: {
    showAddPopNew() {
      this.editGallery = null
      this.showAddPopup = !this.showAddPopup
      this.$emit('showAddPopNew', false)
    },
    editGalleryHandle(item) {
      this.editGallery = item
      this.showAddPopup = !this.showAddPopup
      this.$emit('showAddPopNew', false)
    },
    showDelPopNew(item) {
      this.deleteGallery = item
      this.deleteFile = null
      this.showDelPopup = !this.showDelPopup
      this.$emit('showDelPopNew', false)
    },
    showFilePopNew(item) {
      this.editFile = null
      this.galleryId = item.id
      this.showFileAddPop = !this.showFileAddPop
      this.$emit('showFilePopNew', false)
    },
    editFileHandle(file, gallery) {
      this.galleryId = gallery.id
      this.editFile = file
      this.showFileAddPop = !this.showFileAddPop
      this.$emit('showFilePopNew', false)
    },
    showDelFile(file) {
      this.deleteFile = file
      this.deleteGallery = null
      this.showDelPopup = !this.showDelPopup
      this.$emit('showDelPopNew', false)
    },
  },

  created() {
    if (process.client) {
      this.$emit('showDelPopNew', false)
    }
  },

  computed: {
    allGalleries() {
      if (this.$store.getters['adminPage/getAllGalleries']) {
        return this.$store.getters['adminPage/getAllGalleries']
          .slice(0)
          .sort((a, b) => a.id - b.id)
      }
    },
  },
}
</script>

<style></style>
