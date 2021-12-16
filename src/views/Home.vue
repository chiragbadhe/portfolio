<template>
    <div class="my-8 flex flex-col md:justify-center">
        <div>
            <h3 class="text-black  text-lg font-bold ">➔ Hey There, I&rsquo;m</h3>
            <h1 class="text-black font-bold sm:text-5xl text-4xl ">{{profile.name}} {{profile.surname}}.</h1>
            <div class="text-primary-orange  shadow-lg text-center rounded-sm ">
                <h1 class="font-bold md:text-3xl sm:text-2xl  text-xl pb-4 pt-4">{ I translate great ideas into code }</h1>
            </div>
        </div>
        <scene></scene>
        <div class="w-full my-2">
            <div class="text-black  text-xl">
                I&rsquo;m a {{age}} years old full-stack developer based in Maharastra, India,<br> specialized in Webapp development! <br> I also enjoy contributing to open source projects .
            </div>
            <button class="text-black  rounded-sm text-lg p-4 border-2 hover:bg-transparent-primary my-4" 
                onclick="location.href='mailto:gilbert.ndresaj@gmail.com'">
                Get In Touch
            </button>
        </div>
    </div>
</template>

<script>
import scene from "@/components/scene.vue";
import { mapGetters } from "vuex";
export default {
    components: { scene },
    computed: { ...mapGetters(["profile", "projects", "age"]) }  
};
</script>
<style></style>