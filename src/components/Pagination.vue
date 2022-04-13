<template>
  <div class="pagination container mx-auto">
    <ul class="flex flex-wrap items-center justify-center overflow-hidden m-2">
      <li ref="navPrev"  class="m-2">
        <a
          class="border-2 p-2 rounded-lg border-sky-300"
          @click.prevent="goPrevious"
          :class="{ disabled: isValueFirst }"
        >
          Назад
        </a>
      </li>

      <li
        v-for="(item, index) in items"
        class="m-2"
        :key="'paging_' + index"
        :class="isNaN(Number(item)) ? 'pagination-more-wrapper' : 'pagination-item-wrapper'"
      >
        <span v-if="isNaN(Number(item))" class="pagination-more">{{ item }}</span>

        <a
          v-else
          class="border-2 p-2 rounded-lg border-sky-300"
          @click.prevent="$emit('input', item)"
          :class="{ active: item === value }"
        >
          {{ item }}
        </a>
      </li>

      <li ref="navNext" class="m-2">
        <a
          class="border-2 p-2  rounded-lg border-sky-300"
          @click.prevent="goNext"
          :class="{ disabled: isValueLast }"
        >
          Вперёд
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      default: 1,
      validator: (val) => val % 1 === 0,
    },
  },

  data: () => ({
    totalVisible: 7,
  }),

  computed: {
    isValueLast() {
      return this.value >= this.length;
    },

    isValueFirst() {
      return this.value <= 1;
    },

    items() {
      const maxLength = this.totalVisible;

      if (this.length <= maxLength || maxLength < 1) {
        return this.getRange(1, this.length);
      }

      const even = maxLength % 2 === 0 ? 1 : 0;
      const left = Math.floor(maxLength / 2);
      const right = this.length - left + 1 + even;

      // Когда мы на страницах между первой и последней
      if (this.value > left && this.value < right) {
        const start = this.value - left + 2;
        const end = this.value + left - 2 - even;

        return [1, '...', ...this.getRange(start, end), '...', this.length];
      }
      // Когда мы на первых страницах
      else if (this.value <= left) {
        const end = this.value + left - 1 - even;

        return [...this.getRange(1, end), '...', this.length];
      }
      // Когда мы на последних страницах
      else if (this.value >= right) {
        const start = this.value - left + 1;

        return [1, '...', ...this.getRange(start, this.length)];
      }
      // В остальных случаях
      else {
        return [...this.getRange(1, left), '...', ...this.getRange(right, this.length)];
      }
    },
  },

  methods: {
    goNext() {
      if (this.isValueLast) {
        return;
      }
      this.$emit('input', this.value + 1);
      this.$emit('next');
    },

    goPrevious() {
      if (this.isValueFirst) {
        return;
      }
      this.$emit('input', this.value - 1);
      this.$emit('previous');
    },

    getRange(from, to) {
      return new Array(to - from + 1)
        .fill(null)
        .map((el, index) => from + index)
        .filter((el) => el !== 0);
    },
  },
};
</script>

<style scoped>
.active {
  background: rgb(125 211 252);
}
</style>
