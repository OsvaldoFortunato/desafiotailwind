<script setup>
    import CardsInfo from './CardsInfo.vue';
</script>
<template>
    <div id="main" class="main-content flex-1 bg-gray-100 mt-12 md:mt-15 pb-24 md:pb-5">

        <!--Cards Com Informações-->
        <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                <h1 class="font-bold pl-2">Dashboard de Informações</h1>
            </div>
        </div>


        <!--Cards Com Informações-->
        <div class="flex flex-wrap p-10">
            <router-view/>
        </div>


    </div>
</template>