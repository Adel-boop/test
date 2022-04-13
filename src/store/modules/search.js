import axiosInstance from "../../api/index.js"
import { SEARCH } from "../../api/routes";

export default {
    state: {
        searchData: {},
        isShowPreloader: false
    },
    mutations: {
        setSearchData(state, payload) {
            state.searchData = payload
        },
        setShowPreloader(state, payload) {
            state.isShowPreloader = payload
        }
    },
    actions: {
        searchUsers({commit}, params) {
            const query = {
                q: params?.q || 'q',
                page: params?.page || 1,
                per_page: params?.per_page || '20',
                sort: params?.sort || 'repositories',
                order: params?.order || 'asc'
            }
            commit('setShowPreloader', true)
            const urlParams = new URLSearchParams(query)
            return axiosInstance.get(SEARCH(urlParams))
                .then(({data}) => {
                    commit('setSearchData', data)
                    commit('setShowPreloader', false)
                })
                .catch((e) => console.error({e}))
        },
    },
    getters: {
        searchDataItems(state) {
            return state.searchData
        },

        showPreloader(state) {
            return state.isShowPreloader
        }
    },
}