export const state = () => ({
  showAdmin: false,
  adminData: {
    username: '',
    password: '',
  },
  allGalleries: null,
  allPartners: null,
  allMessages: null,
})

export const mutations = {
  setShowAdmin(state, data) {
    state.showAdmin = data
  },
  setAdminData(state, data) {
    state.adminData.username = data.username
    state.adminData.password = data.password
  },
  emptyShowAdmin(state) {
    state.showAdmin = false
  },
  emptyAdminData(state) {
    state.adminData.username = ''
    state.adminData.password = ''
  },
  setAllGalleries(state, data) {
    state.allGalleries = data
  },
  setAllPartners(state, data) {
    state.allPartners = data
  },
  setAllMessages(state, data) {
    state.allMessages = data
  },
}

export const actions = {
  async initAllData({ commit, state }) {
    try {
      const resAccess = await this.$axios.post('/login/', state.adminData)
      if (resAccess.data.access) {
        const resGalleries = this.$axios
          .get('/galleries/', {
            headers: { 'Accept-Language': this.$i18n.locale },
          })
          .catch((e) => e)
        const resPartners = this.$axios
          .get('/partners/', {
            headers: { 'Accept-Language': this.$i18n.locale },
          })
          .catch((e) => e)
        const resMessages = this.$axios
          .get('/contacts/', {
            headers: { Authorization: `Bearer ${resAccess.data.access}` },
          })
          .catch((e) => e)

        await Promise.all([resGalleries, resPartners, resMessages]).then(
          (results) => {
            const [resGal, resPart, resMess] = results
            commit('setAllGalleries', resGal.data)
            commit('setAllPartners', resPart.data)
            commit('setAllMessages', resMess.data)
          }
        )
      }
    } catch (err) {
      console.log(err)
    }
  },
  initAdminData({ commit }, payload) {
    commit('setAdminData', payload)
  },
  initShowAdmin({ commit }, payload) {
    commit('setShowAdmin', payload)
  },
  clearAdminData({ commit }) {
    commit('emptyAdminData')
  },
  clearShowAdmin({ commit }) {
    commit('emptyShowAdmin')
  },
}

export const getters = {
  getAdmin(state) {
    return state.showAdmin
  },
  getAdminData(state) {
    return state.adminData
  },
  getAllGalleries(state) {
    return state.allGalleries
  },
  getAllPartners(state) {
    return state.allPartners
  },
  getAllMessages(state) {
    return state.allMessages
  },
}
