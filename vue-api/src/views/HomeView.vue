<template>
  <div class="content">
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
