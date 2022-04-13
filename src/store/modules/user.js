export default {
    state: {
        login: '',
    },
    mutations: {
        setLogin(state, payload) {
            state.login = payload
        }
    },
    actions: {
        saveLogin({commit}, data) {
            commit('setLogin', data)
        },
    },
    getters: {
        userLogin(state) {
            return state.login
        },
    },
}