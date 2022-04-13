<template>
    <div class="sorting max-w-lg mx-auto p-8">
        <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
            <summary class="leading-6 text-slate-900 font-semibold select-none">
                Сортировать по репозиториям: <span>{{ selected }}</span>
            </summary>
            <div class="mt-3 leading-6 text-slate-600 dark:text-slate-400">
                <p
                    class="p-2"
                    v-for="(option, index) in options"
                    :key="index"
                    @click="select(option)"
                >
                    {{ option.name }}
                </p>
            </div>
        </details>
    </div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Array,
                default: () => [],
            },
            selected: {
                type: String,
                default: ''
            }
        },
        methods: {
            select(option) {
                this.$emit('select', option)
            },
        }
    }
</script>

<style>

</style>