// folder modules zawiera moduły, a todos.js jest jednym z nich

// w tym pliku obsługujemy mutacje, stan, gettery itd.
import axios from 'axios';

// stan czyli obiekt na którym będziemy operowali
const state = {
    todos: []
};

// getters zwraca wartość ze sklepu
const getters = {
    allTodos: state => state.todos
};

// tutaj będą wykonywane req i res, oraz wykonywanie mutacji
const actions = {
    // za pomocą commit, komitujemy mutację
    async FetchTodos({ commit }) {
        // response to odpowiedź serwera
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        // komitujemy mutację
        commit('setTodos', response.data);
    },

    async addTodo({ commit }, title) {
        const request = await axios.post('https://jsonplaceholder.typicode.com/todos',{ title, completed: false});

        // serwer zwraca nowo dodane todo
        commit('newTodo', request.data);
    },

    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id);
    },

    async filterTodos({ commit }, e) {
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=${limit}`);

        commit('filter', response.data);
    }
};

const mutations = {
    // todos === response.data
    setTodos: (state, data) => state.todos = data,
    // todo to nowo utworzone todo, po wykonaniu http post
    // unshift dodaje element na początek tablicy
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    filter: (state, data) => state.todos = data
};

// exportujemy obiekt który ma stan, mutacje ...
export default {
    state,
    getters,
    actions,
    mutations
};

