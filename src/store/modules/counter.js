const counterStore = {
  namespaced: true,
  state() {
    return {
      counter: 0
    }
  },
  mutations: {
    add(store) {
      store.counter++
    }
  }
}
export default counterStore