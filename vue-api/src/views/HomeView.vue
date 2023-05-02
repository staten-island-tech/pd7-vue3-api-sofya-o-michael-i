<template>
  <div>
    <select name="" id="">
      <option value="All">All boroughs</option>
      <option value="Brooklyn">Brooklyn</option>
      <option value="Manhattan">Manhattan</option>
      <option value="Queens">Queens</option>
      <option value="Bronx">Bronx</option>
      <option value="Staten Island">Staten Island</option>
    </select>
  </div>
</template>

<script setup>
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
