// index.js jest sklepem

// tutaj będą wszystkie moduły, na których będziemy pracować
import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

// load vuex
Vue.use(Vuex);

// creating store, 
// store is a place where all modules are
export default new Vuex.Store({
    modules: {
        todos
    }
})
