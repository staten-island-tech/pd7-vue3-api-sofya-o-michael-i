<template>
  <div class="content">
    <h1>Select type of Emergencies</h1>
    <select name="" id="">
      <option value="Default">Default</option>
      <option value="Medical">Medical</option>
      <option value="Non-Medical">Non-Mecical</option>
      <option value="Structural Fires">Structural Fires</option>
    </select>
    <div class="chart">
      <DoughnutChart v-if="loaded" :data="chartData" :options="chartOptions" />
      <BarChart v-if="loaded" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
