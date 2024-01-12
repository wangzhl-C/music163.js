import { createStore } from "vuex";
import home from './modules/home'
import counter from './modules/counter'

const store = createStore({
  modules: {
    home,
    counter
  }
})
export default store