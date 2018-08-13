import * as types from './mutation-types';

const mutations = {
  [types.GET_DATA] (state, data) {
    state.notes.unshift(data);
  }
};

export default mutations;
