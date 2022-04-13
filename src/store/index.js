import { createStore } from "vuex";
import user from "../store/modules/user"
import search from "../store/modules/search"
import modal from "../store/modules/modal"

const store = createStore({
    modules:{
        user,
        search,
        modal
    }
})

export default store