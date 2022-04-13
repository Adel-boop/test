<template>
    <div class="info">
        <div 
            class="fixed top-0 left-0 w-full h-full outline-none bg-sky-300/50 flex items-center justify-center"
            @click="closeInfo" 
        >
            <div
                class="m-2 max-w-md w-full"
                @click.stop
            >
                <div class="border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                        class="info-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
                    >
                        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                            Логин: <span>{{ user.login }}</span>
                        </h5>
                        <button 
                            class="btn-close box-content p-1 text-black border-none rounded-none opacity-50 focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            @click="closeInfo"
                        >
                            Закрыть
                        </button>
                    </div>
                    <div class="info-body relative p-4 flex flex-wrap justify-center overflow-hidden">
                        <img
                            class="w-32 object-cover"
                            :src="user.avatar_url"
                            :alt="user.login"
                        >
                        <div class="m-auto p-2 leading-6 text-slate-900 dark:text-white">
                            <p>Имя: <span>{{ user.name }}</span></p>
                            <p>Подписчиков: <span>{{ user.followers }}</span></p>
                            <p>Подписок: <span>{{ user.following }}</span></p>
                            <p>Публичных репозиториев: <span>{{ user.public_repos }}</span></p>
                            <p>Дата регистрации: <br> <span>{{ user.created_at }}</span></p>
                            <p><a class="text-sky-300" target="_blank" :href="user.html_url">Страница на github</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            user: {
                type: Object,
                default: () => {},
            }
        },
        methods: {
            closeInfo() {
                this.$emit('closeInfo')
            }
        },
    }
</script>

<style>

</style>