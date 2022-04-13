<template>
  <div class="users container mx-auto">
      <ul class="flex flex-wrap justify-center">
        <li
          class="box-border m-8 w-44 max-w-48 p-2 border-4 overflow-hidden border-sky-300 border-double"
          v-for="(item, index) in items"
          :key="index"
        >
          <img
            class="m-auto w-32"
            :src="item.avatar_url"
            :alt="item.login"
          >
          <p class="align-center pt-2">{{ item.login }}</p>
          <button
            class="bg-sky-300 rounded-lg border-sky-300 p-2 hover:scale-90"
            @click="openInfo(item)"
          >
            подробнее
          </button>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    openInfo(item) {
      this.$emit('openInfo', item)
    },
  }
}
</script>

<style>

</style>