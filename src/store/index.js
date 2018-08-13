import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

Vue.use(Vuex);

const strictState = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: strictState,
  actions,
  getters,
  mutations,
  state
});
