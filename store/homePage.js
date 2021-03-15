export const state = () => ({
  profile: null,
  partners: null,
  galleries: null,
})

export const mutations = {
  setProfile(state, data) {
    state.profile = data
  },
  setPartners(state, data) {
    state.partners = data
  },
  setGalleries(state, data) {
    state.galleries = data
  },
}

export const actions = {
  // async initProfile({ commit }) {
  //   try {
  //     const { data } = await this.$axios.get('/ceos/1/', {
  //       headers: { 'Accept-Language': this.$i18n.locale },
  //     })
  //     commit('setProfile', data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // },

  // async initPartners({ commit }) {
  //   try {
  //     const { data } = await this.$axios.get('/partners/', {
  //       headers: { 'Accept-Language': this.$i18n.locale },
  //     })
  //     commit('setPartners', data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // },
  async initAllData({ commit }) {
    try {
      const ceos = this.$axios
        .get('/ceos/1/', {
          headers: { 'Accept-Language': this.$i18n.locale },
        })
        .catch((e) => e)
      const partners = this.$axios
        .get('/partners/', {
          headers: { 'Accept-Language': this.$i18n.locale },
        })
        .catch((e) => e)
      const galleries = this.$axios
        .get('/galleries/', {
          headers: { 'Accept-Language': this.$i18n.locale },
        })
        .catch((e) => e)
      await Promise.all([ceos, partners, galleries]).then((results) => {
        const [ceos, partners, galleries] = results
        commit('setProfile', ceos.data)
        commit('setPartners', partners.data)
        commit('setGalleries', galleries.data)
      })
    } catch (err) {
      console.log(err)
    }
  },

  async sendMessage({ commit }, payload) {
    try {
      const { data } = await this.$axios.post('/contacts/', payload)
    } catch (err) {
      console.log(err)
    }
  },
}

export const getters = {
  getUserProfile(state) {
    return state.profile
  },
  getPartners(state) {
    return state.partners
  },
  getGalleries(state) {
    return state.galleries
  },
}
