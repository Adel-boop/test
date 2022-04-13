<template>
    <sorting :options="options" :selected="selected" @select="select" />
    <search :name="name" @changeName="name = $event" @search="search" @reset="reset" />
    <preloader v-if="showPreloader" />
    <users v-else :items="searchDataItems.items" @openInfo="openInfo" />
    <pagination :value="currentPage" :length="pages" @input="changePage" />
    <modal v-if="showModal" :user="userItem" @closeInfo="closeInfo"/>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Sorting from '../components/Sorting.vue'
import Search from '../components/Search.vue'
import Preloader from '../components/Preloader.vue'
import Users from '../components/Users.vue'
import Pagination from '../components/Pagination.vue'
import Modal from '../components/Modal.vue'

export default {
  components: {
    Sorting,
    Search,
    Preloader,
    Users,
    Pagination,
    Modal,
  },
  data() {
    return {
      modal: false,
      pages: [],
      perPage: 20,
      currentPage: 1,
      options: [
        {
          order: "asc",
          name: "меньшее количество",
        },
        {
          order: "desc",
          name: "большее количество",
        },
      ],
      selected: "меньшее количество",
      name: "q",
    };
  },
  computed: mapGetters(["userLogin", "searchDataItems", "userItem", "showPreloader", "showModal"]),
  methods: {
    ...mapActions(["searchUsers", "setUser", "closeInfoModal"]),
    select(option) {
      this.selected = option.name;
      if (option.order === "asc") {
        this.searchUsers({
          q: this.name,
          order: option.order,
          per_page: this.perPage,
        });
      } else {
        this.searchUsers({
          q: this.name,
          order: option.order,
          per_page: this.perPage,
        });
      }
    },
    search() {
      if (this.name.length === 0) return;
      this.searchUsers({
        q: this.name,
      });
    },
    reset() {
      this.searchUsers();
    },
    changePage(page) {
      this.currentPage = page
      this.searchUsers({
        q: this.name,
        page: page,
      });
    },
    openInfo(item) {
      this.setUser(item.login);
    },
    closeInfo() {
      this.closeInfoModal()
    },
  },
  async created() {
    this.name = this.userLogin;
    await this.searchUsers();
    this.pages = Math.floor(
      this.searchDataItems.total_count / this.perPage
    );
  },
};
</script>

<style>

</style>
