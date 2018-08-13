import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const strictState = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: { },
  strict: strictState
});
