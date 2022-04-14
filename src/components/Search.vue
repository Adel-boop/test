<template>
  <div class="search container mx-auto">
    <div class="name">Введите имя пользователя:</div>
    <input
        class="border-2 p-2 border-sky-300"
        type="text"
        :value="name"
        @input="changeName($event.target.value)"
        data-testid="search-input"
    >
    <button
        class="rounded-r-lg bg-sky-300 border-2 border-sky-300 p-2"
        @click="search"
        :disabled="!name.length"
        data-testid="search-button"
    >
      поиск
    </button>
    <button
        class="rounded bg-sky-300 border-2 border-sky-300 p-2 m-2"
        @click="reset"
        data-testid="search-reset"
    >
      сброс
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      }
    },
    methods: {
      changeName(value) {
        this.$emit('changeName', value)
      },
      search() {
        this.$emit('search')
      },
      reset() {
        this.$emit('reset')
      }
    },

  }
</script>

<style>
  button[disabled] {
    opacity: 0.5;
  }
</style>