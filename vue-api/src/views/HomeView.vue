<template>
  <div></div>
</template>

<script setup>
// https://data.cityofnewyork.us/resource/8m42-w767.json
import { ref, onMounted } from 'vue'
const fireDept = ref('')
async function emsData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/8m42-w767.json')
  let data = await res.json()
  fireDept.value = data
}
onMounted(() => emsData())
</script>

<style lang="scss" scoped></style>
