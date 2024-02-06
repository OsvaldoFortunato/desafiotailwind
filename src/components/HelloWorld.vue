<script setup>
import { ref } from 'vue'

import NavBar from './NavBar.vue';

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>

  <NavBar/>  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
