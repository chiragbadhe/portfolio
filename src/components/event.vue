<template>
    <div class="bg-white py-6 px-8 my-4 text-white rounded-sm shadow-lg event">
        <span class="text-black text-sm ">{{parentData.startDate}} - {{parentData.endDate}}</span><br>
        <span class="text-black text-xl "><b>{{parentData.name}}</b></span><br>
        <span class="text-black text-base "><b>{{parentData.role}}</b></span>
        <p class="text-black text-lg ">{{parentData.description}}</p>
        <span class="text-black text-sm "><i>{{parentData.type}}</i></span>
         <div v-for="item in parentData.roles" v-bind:key="item.name" class="m-1">
            <a :href="item.link" class="text-sm text-black">
               <span class="text-black"> ➔ </span> <span>{{item.description}}</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "event",
	props: {
		parentData: Object,
		index: Number
	}
}
</script>

<style scoped>
.event{
    animation: mouseOut 0.3s ease-in;
}
.event:hover{
    animation: mouseOver 0.3s ease-in forwards;
}
</style>