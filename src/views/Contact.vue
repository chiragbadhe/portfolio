<template>
   <div class=" flex-col justify-center text-center">
        <div class="my-24">
            <h1 class="text-black font-bold sm:text-5xl text-3xl "> Get in touch </h1>
            <span class="text-black text-xl my-8">
                I&rsquo;m not currently looking for a fulltime job but my inbox is always open. Whether for a potential project or idea, I&rsquo;ll try my best to answer your email!
            </span><br>
            <button class=" my-8 rounded-sm text-lg p-4 border-2 text-black hover:text-gray-400 hover:bg-transparent-primary " 
                onclick="location.href='mailto:badhechirag633@gmail.com'">
                Say Hello
            </button>
        </div>
        <div class="my-8">
            <span class="text-black text-xl my-8">
                where else you can find me
            </span>
            <br>
            <div class="flex flex-wrap justify-center mt-4">
                <div  v-for="item in socials" v-bind:key="item.name" class="flex-grow m-2 sm:mx-0 sm:my-4 sm:w-auto md:mx-2 bg-gray-200 rounded-sm">
                    <a target="_blank" :href="item.link" class="p-4 text-center rounded-sm text-xl text-black hover:gray-400 block">
                        <font-awesome-icon :icon="['fab', item.icon]" size="lg" /><br>
                        <span>{{item.name}}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(["socials"])
    },
}
</script>

<style scoped>
</style>
