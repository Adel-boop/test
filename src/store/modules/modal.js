import axiosInstance from "../../api/index.js"
import { GET_USER } from "../../api/routes";

export default {
    state: {
        user: {},
        isShowModal: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setShowModal(state, payload) {
            state.isShowModal = payload
        }
    },
    actions: {
        setUser({commit}, username) {
            return axiosInstance.get(GET_USER(username))
                .then(({data}) => {
                    commit('setUser', data)
                    commit('setShowModal', true)
                })
                .catch((e) => console.error({e}))
        },
        closeInfoModal ({commit}){
            commit('setShowModal', false)
        }
    },
    getters: {
        userItem(state) {
            return state.user
        },
        showModal(state) {
            return state.isShowModal
        }
    },
}

